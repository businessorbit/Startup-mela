import { useState, useEffect } from 'react';
import { useAdminAuth } from '../../contexts/AdminAuthContext';
import AdminLayout from '../../components/Admin/AdminLayout';
import { Download, ExternalLink } from 'lucide-react';

const VolunteersPage = () => {
  const { token } = useAdminAuth();
  const [volunteers, setVolunteers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchVolunteers();
  }, []);

  const fetchVolunteers = async () => {
    try {
      const API_URL = import.meta.env.VITE_API_URL || 'https://startupmelabackend.vercel.app';
      const response = await fetch(`${API_URL}/api/admin/volunteers?limit=100`, {
        headers: {
          'Authorization': `Bearer ${token}`,
        },
      });

      const data = await response.json();
      if (response.ok) {
        setVolunteers(data.volunteers);
      }
    } catch (err) {
      console.error('Failed to fetch volunteers:', err);
    } finally {
      setLoading(false);
    }
  };

  const exportToCSV = () => {
    const headers = ['Name', 'Email', 'Phone', 'College Year', 'Role', 'Hours', 'Resume Link', 'Applied Date'];
    const rows = volunteers.map(v => [
      v.name,
      v.email,
      v.phone,
      v.collegeYear,
      v.role,
      v.hours || 'N/A',
      v.resumeLink,
      new Date(v.createdAt).toLocaleDateString('en-IN'),
    ]);

    const csvContent = [
      headers.join(','),
      ...rows.map(row => row.map(cell => `"${cell}"`).join(','))
    ].join('\n');

    const blob = new Blob([csvContent], { type: 'text/csv' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `volunteers_${new Date().toISOString().split('T')[0]}.csv`;
    a.click();
  };

  return (
    <AdminLayout>
      <div className="p-8">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-3xl font-bold text-black mb-2">Volunteer Applications</h1>
            <p className="text-neutral-600">Review and manage volunteer applicants</p>
          </div>
          <button
            onClick={exportToCSV}
            className="flex items-center gap-2 px-4 py-2 bg-black text-white rounded-lg hover:bg-neutral-800 transition-colors"
          >
            <Download size={18} />
            Export CSV
          </button>
        </div>

        {/* Applications Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {loading ? (
            <div className="col-span-2 text-center py-12 text-neutral-600">Loading applications...</div>
          ) : volunteers.length === 0 ? (
            <div className="col-span-2 text-center py-12 text-neutral-600">No applications found</div>
          ) : (
            volunteers.map((volunteer) => (
              <div
                key={volunteer._id}
                className="bg-white rounded-2xl p-6 shadow-sm border border-neutral-100 hover:shadow-md transition-shadow"
              >
                {/* Header */}
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-black">{volunteer.name}</h3>
                    <p className="text-sm text-neutral-600">{volunteer.email}</p>
                    <p className="text-sm text-neutral-600">{volunteer.phone}</p>
                  </div>
                  <a
                    href={volunteer.resumeLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1 px-3 py-1.5 bg-blue-100 text-blue-700 rounded-lg hover:bg-blue-200 transition-colors text-sm font-semibold"
                  >
                    Resume
                    <ExternalLink size={14} />
                  </a>
                </div>

                {/* Details */}
                <div className="grid grid-cols-2 gap-4 mb-4">
                  <div>
                    <p className="text-xs text-neutral-500 uppercase mb-1">Role</p>
                    <span className="inline-block px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-sm font-semibold">
                      {volunteer.role}
                    </span>
                  </div>
                  <div>
                    <p className="text-xs text-neutral-500 uppercase mb-1">College Year</p>
                    <p className="font-semibold text-black">{volunteer.collegeYear}</p>
                  </div>
                  {volunteer.hours && (
                    <div>
                      <p className="text-xs text-neutral-500 uppercase mb-1">Available Hours</p>
                      <p className="font-semibold text-black">{volunteer.hours}</p>
                    </div>
                  )}
                  <div>
                    <p className="text-xs text-neutral-500 uppercase mb-1">Applied</p>
                    <p className="text-sm text-neutral-700">
                      {new Date(volunteer.createdAt).toLocaleDateString('en-IN')}
                    </p>
                  </div>
                </div>

                {/* Responses */}
                {(volunteer.q1 || volunteer.q2 || volunteer.q3 || volunteer.q4 || volunteer.q5) && (
                  <div className="border-t border-neutral-100 pt-4 space-y-3">
                    {volunteer.q1 && (
                      <div>
                        <p className="text-xs text-neutral-500 uppercase mb-1">Motivation</p>
                        <p className="text-sm text-neutral-700">{volunteer.q1}</p>
                      </div>
                    )}
                    {volunteer.q2 && (
                      <div>
                        <p className="text-xs text-neutral-500 uppercase mb-1">Task Process</p>
                        <p className="text-sm text-neutral-700">{volunteer.q2}</p>
                      </div>
                    )}
                  </div>
                )}
              </div>
            ))
          )}
        </div>

        {/* Summary */}
        <div className="mt-6 text-sm text-neutral-600">
          Total applications: {volunteers.length}
        </div>
      </div>
    </AdminLayout>
  );
};

export default VolunteersPage;
