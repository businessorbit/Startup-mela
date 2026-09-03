import { Navigate } from 'react-router-dom';
import { useAdminAuth } from '../contexts/AdminAuthContext';
import SEO from './SEO/SEO';
import { pageSEO } from '../data/seo';

const AdminRoute = ({ children }) => {
  const { isAuthenticated, loading } = useAdminAuth();
  const seo = pageSEO.admin;

  if (loading) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center">
        <SEO title={seo.title} description={seo.description} path={seo.path} noindex />
        <div className="text-white text-xl">Loading...</div>
      </div>
    );
  }

  if (!isAuthenticated) {
    return <Navigate to="/admin/login" replace />;
  }

  return (
    <>
      <SEO title={seo.title} description={seo.description} path={seo.path} noindex />
      {children}
    </>
  );
};

export default AdminRoute;
