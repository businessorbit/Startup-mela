import { useState } from 'react';
import { useAdminAuth } from '../../contexts/AdminAuthContext';
import AdminLayout from '../../components/Admin/AdminLayout';
import { CheckCircle, XCircle, AlertCircle } from 'lucide-react';

const VerifyTicketPage = () => {
  const { token } = useAdminAuth();
  const [code, setCode] = useState('');
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleVerify = async (e) => {
    e.preventDefault();
    setLoading(true);
    setResult(null);

    try {
      const API_URL = import.meta.env.VITE_API_URL || 'https://startupmelabackend.vercel.app';
      const response = await fetch(`${API_URL}/api/admin/verify`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`,
        },
        body: JSON.stringify({ verificationCode: code }),
      });

      const data = await response.json();
      setResult({ ...data, status: response.ok ? 'success' : 'error' });
      
      if (response.ok) {
        setCode(''); // Clear input on success
      }
    } catch (err) {
      setResult({ 
        status: 'error', 
        success: false, 
        message: 'Network error. Please try again.' 
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <AdminLayout>
      <div className="p-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-black mb-2">Verify Ticket</h1>
          <p className="text-neutral-600">Scan or enter the 9-digit verification code</p>
        </div>

        {/* Verification Form */}
        <div className="max-w-2xl mx-auto">
          <div className="bg-white rounded-2xl p-8 shadow-sm border border-neutral-100">
            <form onSubmit={handleVerify} className="space-y-6">
              <div>
                <label className="block text-sm font-bold uppercase tracking-wide text-neutral-500 mb-3">
                  Verification Code
                </label>
                <input
                  type="text"
                  value={code}
                  onChange={(e) => setCode(e.target.value.toUpperCase())}
                  placeholder="Enter 9-digit code"
                  maxLength={9}
                  required
                  autoFocus
                  className="w-full p-4 text-2xl text-center font-mono bg-neutral-50 rounded-xl border-2 border-neutral-200 focus:border-blue-500 focus:ring-4 focus:ring-blue-100 outline-none tracking-widest uppercase text-black"
                />
              </div>

              <button
                type="submit"
                disabled={loading || code.length !== 9}
                className="w-full py-4 rounded-xl bg-gradient-to-r from-[#00C2FF] via-[#0070FF] to-[#00E29B] text-white font-bold text-lg shadow-lg hover:shadow-xl transition-all disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {loading ? 'Verifying...' : 'Verify Ticket'}
              </button>
            </form>
          </div>

          {/* Result */}
          {result && (
            <div className={`mt-6 rounded-2xl p-6 border-2 ${
              result.status === 'success' 
                ? 'bg-green-50 border-green-200' 
                : 'bg-red-50 border-red-200'
            }`}>
              <div className="flex items-start gap-4">
                {result.status === 'success' ? (
                  <CheckCircle className="text-green-600 flex-shrink-0" size={32} />
                ) : (
                  <XCircle className="text-red-600 flex-shrink-0" size={32} />
                )}
                
                <div className="flex-1">
                  <h3 className={`text-xl font-bold mb-2 ${
                    result.status === 'success' ? 'text-green-900' : 'text-red-900'
                  }`}>
                    {result.status === 'success' ? 'Check-in Successful!' : 'Verification Failed'}
                  </h3>
                  
                  <p className={`mb-4 ${
                    result.status === 'success' ? 'text-green-700' : 'text-red-700'
                  }`}>
                    {result.message}
                  </p>

                  {result.success && result.ticket && (
                    <div className="bg-white rounded-xl p-4 space-y-2">
                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <p className="text-xs text-neutral-500 uppercase">Name</p>
                          <p className="font-semibold text-black">{result.ticket.name}</p>
                        </div>
                        <div>
                          <p className="text-xs text-neutral-500 uppercase">Email</p>
                          <p className="font-medium text-neutral-700">{result.ticket.email}</p>
                        </div>
                        <div>
                          <p className="text-xs text-neutral-500 uppercase">Phone</p>
                          <p className="font-medium text-neutral-700">{result.ticket.phone}</p>
                        </div>
                        <div>
                          <p className="text-xs text-neutral-500 uppercase">Type</p>
                          <p className="font-semibold text-black">
                            {result.ticket.itemType === 'pass' ? result.ticket.passType : result.ticket.stallType}
                          </p>
                        </div>
                        <div>
                          <p className="text-xs text-neutral-500 uppercase">Profession</p>
                          <p className="font-medium text-neutral-700">{result.ticket.profession}</p>
                        </div>
                        <div>
                          <p className="text-xs text-neutral-500 uppercase">Check-in Time</p>
                          <p className="font-medium text-neutral-700">
                            {new Date(result.ticket.checkInTime).toLocaleString('en-IN')}
                          </p>
                        </div>
                      </div>
                    </div>
                  )}

                  {!result.success && result.ticket && (
                    <div className="bg-white rounded-xl p-4">
                      <p className="text-sm text-neutral-700">
                        <strong>Name:</strong> {result.ticket.name}
                      </p>
                      {result.ticket.checkedInAt && (
                        <p className="text-sm text-neutral-700 mt-2">
                          <strong>Previously checked in at:</strong>{' '}
                          {new Date(result.ticket.checkedInAt).toLocaleString('en-IN')}
                        </p>
                      )}
                    </div>
                  )}
                </div>
              </div>
            </div>
          )}

          {/* Instructions */}
          <div className="mt-8 bg-blue-50 rounded-xl p-6 border border-blue-200">
            <div className="flex items-start gap-3">
              <AlertCircle className="text-blue-600 flex-shrink-0 mt-0.5" size={20} />
              <div>
                <h4 className="font-semibold text-blue-900 mb-2">Instructions</h4>
                <ul className="text-sm text-blue-800 space-y-1">
                  <li>• Enter the 9-digit alphanumeric code from the attendee's ticket</li>
                  <li>• Each code can only be used once for check-in</li>
                  <li>• Successful verification will mark the ticket as checked-in</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </AdminLayout>
  );
};

export default VerifyTicketPage;
