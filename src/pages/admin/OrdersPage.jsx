import { useState, useEffect } from 'react';
import { useAdminAuth } from '../../contexts/AdminAuthContext';
import AdminLayout from '../../components/Admin/AdminLayout';
import { Search, Download, CheckCircle, XCircle, Clock } from 'lucide-react';

const OrdersPage = () => {
  const { token } = useAdminAuth();
  const [tickets, setTickets] = useState([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState('');
  const [statusFilter, setStatusFilter] = useState('');
  const [activeTab, setActiveTab] = useState('pass');

  useEffect(() => {
    fetchTickets();
  }, [statusFilter, activeTab]);

  const fetchTickets = async () => {
    try {
      const API_URL = import.meta.env.VITE_API_URL || 'https://startupmelabackend.vercel.app';
      const params = new URLSearchParams({
        limit: '100',
        ...(statusFilter && { status: statusFilter }),
        itemType: activeTab, // Filter by active tab
        ...(search && { search }),
      });

      const response = await fetch(`${API_URL}/api/admin/tickets?${params}`, {
        headers: {
          'Authorization': `Bearer ${token}`,
        },
      });

      const data = await response.json();
      if (response.ok) {
        setTickets(data.tickets);
      }
    } catch (err) {
      console.error('Failed to fetch tickets:', err);
    } finally {
      setLoading(false);
    }
  };

  const handleSearch = () => {
    fetchTickets();
  };

  const exportToCSV = () => {
    const headers = ['Name', 'Email', 'Phone', 'Type', 'Pass/Stall', 'Amount', 'Status', 'Verification Code', 'Checked In', 'Order ID', 'Date'];
    const rows = tickets.map(ticket => [
      ticket.name,
      ticket.email,
      ticket.phone,
      ticket.itemType,
      ticket.itemType === 'pass' ? ticket.passType : ticket.stallType,
      ticket.amount,
      ticket.status,
      ticket.verificationCode,
      ticket.checkedIn ? 'Yes' : 'No',
      ticket.orderId,
      new Date(ticket.createdAt).toLocaleDateString('en-IN'),
    ]);

    const csvContent = [
      headers.join(','),
      ...rows.map(row => row.map(cell => `"${cell}"`).join(','))
    ].join('\n');

    const blob = new Blob([csvContent], { type: 'text/csv' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `orders_${activeTab}_${new Date().toISOString().split('T')[0]}.csv`;
    a.click();
  };

  const getStatusBadge = (status) => {
    const styles = {
      paid: 'bg-green-100 text-green-700',
      created: 'bg-yellow-100 text-yellow-700',
      failed: 'bg-red-100 text-red-700',
    };
    const icons = {
      paid: CheckCircle,
      created: Clock,
      failed: XCircle,
    };
    const Icon = icons[status] || Clock;
    
    return (
      <span className={`inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-semibold ${styles[status] || 'bg-gray-100 text-gray-700'}`}>
        <Icon size={14} />
        {status.toUpperCase()}
      </span>
    );
  };

  return (
    <AdminLayout>
      <div className="p-8">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-3xl font-bold text-black mb-2">Orders</h1>
            <p className="text-neutral-600">Manage all ticket and stall bookings</p>
          </div>
          <button
            onClick={exportToCSV}
            className="flex items-center gap-2 px-4 py-2 bg-black text-white rounded-lg hover:bg-neutral-800 transition-colors"
          >
            <Download size={18} />
            Export CSV
          </button>
        </div>

        {/* Tabs */}
        <div className="flex gap-4 mb-6 border-b border-neutral-200">
          <button
            onClick={() => setActiveTab('pass')}
            className={`pb-4 px-2 font-medium transition-all ${
              activeTab === 'pass'
                ? 'text-black border-b-2 border-black'
                : 'text-neutral-500 hover:text-neutral-700'
            }`}
          >
            Passes
          </button>
          <button
            onClick={() => setActiveTab('stall')}
            className={`pb-4 px-2 font-medium transition-all ${
              activeTab === 'stall'
                ? 'text-black border-b-2 border-black'
                : 'text-neutral-500 hover:text-neutral-700'
            }`}
          >
            Stalls
          </button>
        </div>

        {/* Filters */}
        <div className="bg-white rounded-2xl p-6 shadow-sm border border-neutral-100 mb-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div className="md:col-span-3">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search by name, email, phone, order ID..."
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  onKeyPress={(e) => e.key === 'Enter' && handleSearch()}
                  className="w-full pl-10 pr-4 py-3 bg-neutral-50 rounded-lg border border-neutral-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-100 outline-none placeholder:text-neutral-500 text-black"
                />
                <Search className="absolute left-3 top-3.5 text-neutral-400" size={20} />
              </div>
            </div>
            <select
              value={statusFilter}
              onChange={(e) => setStatusFilter(e.target.value)}
              className="px-4 py-3 bg-neutral-50 rounded-lg border border-neutral-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-100 outline-none"
            >
              <option value="">All Status</option>
              <option value="paid">Paid</option>
              <option value="created">Created</option>
              <option value="failed">Failed</option>
            </select>
          </div>
        </div>

        {/* Table */}
        <div className="bg-white rounded-2xl shadow-sm border border-neutral-100 overflow-hidden">
          {loading ? (
            <div className="p-12 text-center text-neutral-600">Loading orders...</div>
          ) : tickets.length === 0 ? (
            <div className="p-12 text-center text-neutral-600">No orders found</div>
          ) : (
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-neutral-50">
                  <tr>
                    <th className="text-left py-4 px-6 text-sm font-semibold text-neutral-700">Name</th>
                    <th className="text-left py-4 px-6 text-sm font-semibold text-neutral-700">Contact</th>
                    <th className="text-left py-4 px-6 text-sm font-semibold text-neutral-700">Type</th>
                    <th className="text-left py-4 px-6 text-sm font-semibold text-neutral-700">Amount</th>
                    <th className="text-left py-4 px-6 text-sm font-semibold text-neutral-700">Status</th>
                    <th className="text-left py-4 px-6 text-sm font-semibold text-neutral-700">Code</th>
                    <th className="text-left py-4 px-6 text-sm font-semibold text-neutral-700">Check-in</th>
                  </tr>
                </thead>
                <tbody>
                  {tickets.map((ticket) => (
                    <tr key={ticket._id} className="border-t border-neutral-100 hover:bg-neutral-50">
                      <td className="py-4 px-6">
                        <p className="font-semibold text-black">{ticket.name}</p>
                        <p className="text-xs text-neutral-500">{ticket.profession}</p>
                      </td>
                      <td className="py-4 px-6">
                        <p className="text-sm text-neutral-700">{ticket.email}</p>
                        <p className="text-xs text-neutral-500">{ticket.phone}</p>
                      </td>
                      <td className="py-4 px-6">
                        <span className={`inline-block px-3 py-1 rounded-full text-xs font-semibold ${
                          ticket.itemType === 'pass' ? 'bg-blue-100 text-blue-700' : 'bg-purple-100 text-purple-700'
                        }`}>
                          {ticket.itemType === 'pass' ? ticket.passType : ticket.stallType}
                        </span>
                      </td>
                      <td className="py-4 px-6 font-semibold text-black">
                        ₹{ticket.amount.toLocaleString('en-IN')}
                      </td>
                      <td className="py-4 px-6">{getStatusBadge(ticket.status)}</td>
                      <td className="py-4 px-6">
                        <code className="px-2 py-1 bg-neutral-100 rounded text-xs font-mono text-black">
                          {ticket.verificationCode}
                        </code>
                      </td>
                      <td className="py-4 px-6">
                        {ticket.checkedIn ? (
                          <span className="text-green-600 font-semibold text-sm">✓ Yes</span>
                        ) : (
                          <span className="text-neutral-400 text-sm">No</span>
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>

        {/* Summary */}
        <div className="mt-6 text-sm text-neutral-600">
          Showing {tickets.length} orders
        </div>
      </div>
    </AdminLayout>
  );
};

export default OrdersPage;
