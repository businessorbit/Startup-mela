import { useState, useEffect } from 'react';
import { useAdminAuth } from '../../contexts/AdminAuthContext';
import AdminLayout from '../../components/Admin/AdminLayout';
import { TrendingUp, Users, Building2, MessageSquare, UserCheck, IndianRupee } from 'lucide-react';

const DashboardPage = () => {
  const { token } = useAdminAuth();
  const [stats, setStats] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    fetchDashboardStats();
  }, []);

  const fetchDashboardStats = async () => {
    try {
      const API_URL = import.meta.env.VITE_API_URL || 'https://startupmelabackend.vercel.app';
      const response = await fetch(`${API_URL}/api/admin/dashboard`, {
        headers: {
          'Authorization': `Bearer ${token}`,
        },
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || 'Failed to fetch stats');
      }

      setStats(data.stats);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const formatCurrency = (amount) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      maximumFractionDigits: 0,
    }).format(amount);
  };

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString('en-IN', {
      day: 'numeric',
      month: 'short',
      hour: '2-digit',
      minute: '2-digit',
    });
  };

  if (loading) {
    return (
      <AdminLayout>
        <div className="flex items-center justify-center h-screen">
          <div className="text-xl text-neutral-600">Loading dashboard...</div>
        </div>
      </AdminLayout>
    );
  }

  if (error) {
    return (
      <AdminLayout>
        <div className="flex items-center justify-center h-screen">
          <div className="text-xl text-red-600">Error: {error}</div>
        </div>
      </AdminLayout>
    );
  }

  const statCards = [
    {
      title: 'Total Revenue',
      value: formatCurrency(stats?.totalRevenue || 0),
      icon: IndianRupee,
      iconColor: 'text-green-600',
      bgColor: 'bg-green-50',
    },
    {
      title: 'Total Attendees',
      value: stats?.totalAttendees || 0,
      icon: Users,
      iconColor: 'text-blue-600',
      bgColor: 'bg-blue-50',
    },
    {
      title: 'Stalls Booked',
      value: stats?.totalStalls || 0,
      icon: Building2,
      iconColor: 'text-purple-600',
      bgColor: 'bg-purple-50',
    },
    {
      title: 'Checked In',
      value: stats?.checkedInCount || 0,
      icon: UserCheck,
      iconColor: 'text-orange-600',
      bgColor: 'bg-orange-50',
    },
    {
      title: 'Volunteer Applications',
      value: stats?.volunteerApplications || 0,
      icon: Users,
      iconColor: 'text-teal-600',
      bgColor: 'bg-teal-50',
    },
    {
      title: 'Inquiries',
      value: stats?.pendingInquiries || 0,
      icon: MessageSquare,
      iconColor: 'text-indigo-600',
      bgColor: 'bg-indigo-50',
    },
  ];

  return (
    <AdminLayout>
      <div className="p-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-black mb-2">Dashboard</h1>
          <p className="text-neutral-600">Welcome back! Here's what's happening.</p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {statCards.map((card, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-6 shadow-sm border border-neutral-100 hover:shadow-md transition-shadow"
            >
              <div className="flex items-center justify-between mb-4">
                <div className={`p-3 rounded-xl ${card.bgColor}`}>
                  <card.icon className={`w-6 h-6 ${card.iconColor}`} />
                </div>
              </div>
              <p className="text-sm text-neutral-600 mb-1">{card.title}</p>
              <p className="text-3xl font-bold text-black">{card.value}</p>
            </div>
          ))}
        </div>

        {/* Revenue Breakdown */}
        {stats?.revenueByType && stats.revenueByType.length > 0 && (
          <div className="bg-white rounded-2xl p-6 shadow-sm border border-neutral-100 mb-8">
            <h2 className="text-xl font-bold text-black mb-4">Revenue Breakdown</h2>
            <div className="space-y-3">
              {stats.revenueByType.map((item, index) => (
                <div key={index} className="flex items-center justify-between p-4 bg-neutral-50 rounded-xl">
                  <div>
                    <p className="font-semibold text-black capitalize">
                      {item._id === 'pass' ? 'Passes' : `${item._id}s`}
                    </p>
                    <p className="text-sm text-neutral-600">{item.count} sold</p>
                  </div>
                  <p className="text-xl font-bold text-black">{formatCurrency(item.total)}</p>
                </div>
              ))}
            </div>
            {stats?.totalGST > 0 && (
              <div className="mt-4 p-4 bg-blue-50 rounded-xl border border-blue-200">
                <div className="flex items-center justify-between">
                  <p className="font-semibold text-blue-900">Total GST Collected</p>
                  <p className="text-xl font-bold text-blue-900">{formatCurrency(stats.totalGST)}</p>
                </div>
              </div>
            )}
          </div>
        )}

        {/* Recent Activity */}
        {stats?.recentActivity && stats.recentActivity.length > 0 && (
          <div className="bg-white rounded-2xl p-6 shadow-sm border border-neutral-100">
            <h2 className="text-xl font-bold text-black mb-4">Recent Orders</h2>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-neutral-200">
                    <th className="text-left py-3 px-4 text-sm font-semibold text-neutral-600">Name</th>
                    <th className="text-left py-3 px-4 text-sm font-semibold text-neutral-600">Email</th>
                    <th className="text-left py-3 px-4 text-sm font-semibold text-neutral-600">Type</th>
                    <th className="text-left py-3 px-4 text-sm font-semibold text-neutral-600">Amount</th>
                    <th className="text-left py-3 px-4 text-sm font-semibold text-neutral-600">Date</th>
                  </tr>
                </thead>
                <tbody>
                  {stats.recentActivity.map((ticket, index) => (
                    <tr key={index} className="border-b border-neutral-100 hover:bg-neutral-50">
                      <td className="py-3 px-4 text-sm text-black font-medium">{ticket.name}</td>
                      <td className="py-3 px-4 text-sm text-neutral-600">{ticket.email}</td>
                      <td className="py-3 px-4">
                        <span className={`inline-block px-3 py-1 rounded-full text-xs font-semibold ${
                          ticket.itemType === 'pass' 
                            ? 'bg-blue-100 text-blue-700' 
                            : 'bg-purple-100 text-purple-700'
                        }`}>
                          {ticket.itemType === 'pass' ? ticket.passType : ticket.stallType}
                        </span>
                      </td>
                      <td className="py-3 px-4 text-sm font-semibold text-black">
                        {formatCurrency(ticket.amount)}
                      </td>
                      <td className="py-3 px-4 text-sm text-neutral-600">
                        {formatDate(ticket.createdAt)}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}
      </div>
    </AdminLayout>
  );
};

export default DashboardPage;
