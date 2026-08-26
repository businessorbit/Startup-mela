// FILE: src/components/UI/Button.jsx
import PropTypes from 'prop-types';
import { motion } from 'framer-motion';

const Button = ({ children, variant = 'primary', onClick, className = '' }) => {
  const baseStyles = "px-6 py-3 rounded-full font-semibold transition-all duration-200";
  
  const variants = {
    primary: "bg-indigo-600 hover:bg-indigo-500 text-white shadow-lg shadow-indigo-500/30",
    secondary: "bg-transparent border border-white/20 hover:bg-white/10 text-white backdrop-blur-sm",
  };

  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className={`${baseStyles} ${variants[variant]} ${className}`}
      onClick={onClick}
    >
      {children}
    </motion.button>
  );
};

Button.propTypes = {
  children: PropTypes.node.isRequired,
  variant: PropTypes.oneOf(['primary', 'secondary']),
  onClick: PropTypes.func,
  className: PropTypes.string,
};

export default Button;