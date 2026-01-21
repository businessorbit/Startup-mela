import { useState, useEffect } from 'react';
import { useAdminAuth } from '../../contexts/AdminAuthContext';
import AdminLayout from '../../components/Admin/AdminLayout';
import { Mail, MessageSquare } from 'lucide-react';

const InquiriesPage = () => {
  const { token } = useAdminAuth();
  const [inquiries, setInquiries] = useState([]);
  const [loading, setLoading] = useState(true);
  const [categoryFilter, setCategoryFilter] = useState('');

  useEffect(() => {
    fetchInquiries();
  }, [categoryFilter]);

  const fetchInquiries = async () => {
    try {
      const API_URL = import.meta.env.VITE_API_URL || 'https://startupmelabackend.vercel.app';
      const params = new URLSearchParams({
        limit: '100',
        ...(categoryFilter && { category: categoryFilter }),
      });

      const response = await fetch(`${API_URL}/api/admin/inquiries?${params}`, {
        headers: {
          'Authorization': `Bearer ${token}`,
        },
      });

      const data = await response.json();
      if (response.ok) {
        setInquiries(data.inquiries);
      }
    } catch (err) {
      console.error('Failed to fetch inquiries:', err);
    } finally {
      setLoading(false);
    }
  };

  const getCategoryColor = (category) => {
    const colors = {
      'Sponsorship': 'bg-purple-100 text-purple-700',
      'Ticketing': 'bg-blue-100 text-blue-700',
      'Partnership': 'bg-green-100 text-green-700',
      'General': 'bg-neutral-100 text-neutral-700',
    };
    return colors[category] || 'bg-neutral-100 text-neutral-700';
  };

  return (
    <AdminLayout>
      <div className="p-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-black mb-2">Inquiries</h1>
          <p className="text-neutral-600">View and manage customer inquiries</p>
        </div>

        {/* Filter */}
        <div className="bg-white rounded-2xl p-6 shadow-sm border border-neutral-100 mb-6">
          <select
            value={categoryFilter}
            onChange={(e) => setCategoryFilter(e.target.value)}
            className="px-4 py-3 bg-neutral-50 rounded-lg border border-neutral-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-100 outline-none"
          >
            <option value="">All Categories</option>
            <option value="Sponsorship">Sponsorship</option>
            <option value="Ticketing">Ticketing</option>
            <option value="Partnership">Partnership</option>
            <option value="General">General</option>
          </select>
        </div>

        {/* Inquiries List */}
        <div className="space-y-4">
          {loading ? (
            <div className="text-center py-12 text-neutral-600">Loading inquiries...</div>
          ) : inquiries.length === 0 ? (
            <div className="text-center py-12 text-neutral-600">No inquiries found</div>
          ) : (
            inquiries.map((inquiry) => (
              <div
                key={inquiry._id}
                className="bg-white rounded-2xl p-6 shadow-sm border border-neutral-100 hover:shadow-md transition-shadow"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <h3 className="text-lg font-bold text-black">{inquiry.name}</h3>
                      <span className={`px-3 py-1 rounded-full text-xs font-semibold ${getCategoryColor(inquiry.category)}`}>
                        {inquiry.category}
                      </span>
                    </div>
                    <div className="flex items-center gap-4 text-sm text-neutral-600">
                      <div className="flex items-center gap-1">
                        <Mail size={14} />
                        {inquiry.email}
                      </div>
                      <div className="text-xs text-neutral-400">
                        {new Date(inquiry.createdAt).toLocaleDateString('en-IN', {
                          day: 'numeric',
                          month: 'short',
                          year: 'numeric',
                          hour: '2-digit',
                          minute: '2-digit',
                        })}
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-neutral-50 rounded-xl p-4">
                  <div className="flex items-start gap-2">
                    <MessageSquare size={18} className="text-neutral-400 flex-shrink-0 mt-0.5" />
                    <p className="text-sm text-neutral-700 leading-relaxed">{inquiry.message}</p>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>

        {/* Summary */}
        <div className="mt-6 text-sm text-neutral-600">
          Total inquiries: {inquiries.length}
        </div>
      </div>
    </AdminLayout>
  );
};

export default InquiriesPage;
