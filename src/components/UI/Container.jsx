// FILE: src/components/UI/Container.jsx
import PropTypes from 'prop-types';

const Container = ({ children, className = '' }) => {
  // Standard container to keep content centered with max-width
  return (
    <div className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ${className}`}>
      {children}
    </div>
  );
};

Container.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
};

export default Container;