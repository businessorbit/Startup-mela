import { useEffect, useState, useRef } from 'react';
import { motion, useMotionValue, useSpring, useVelocity, useTransform } from 'framer-motion';

/**
 * Hook to detect theme based on hover target.
 * Looks for nearest parent with data-theme="dark" or "light".
 */
const useThemeDetection = () => {
  const [theme, setTheme] = useState('dark'); // Default theme

  useEffect(() => {
    const handleMouseOver = (e) => {
      // Find the nearest parent section with a theme attribute
      const section = e.target.closest('[data-theme]');
      
      if (section) {
        const currentTheme = section.getAttribute('data-theme');
        setTheme(currentTheme);
      } else {
        // Fallback if no specific section is defined
        setTheme('dark'); 
      }
    };

    // We use mouseover (bubbling) to detect element entry
    window.addEventListener('mouseover', handleMouseOver);
    return () => window.removeEventListener('mouseover', handleMouseOver);
  }, []);

  return theme;
};

const CursorGlow = () => {
  const theme = useThemeDetection();
  const [isVisible, setIsVisible] = useState(false);
  
  // 1. Motion Values for raw mouse position
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // 2. Physics for the "Head" (Sharp, responsive)
  const cursorX = useSpring(mouseX, { stiffness: 500, damping: 28 });
  const cursorY = useSpring(mouseY, { stiffness: 500, damping: 28 });

  // 3. Physics for the "Tail" (Laggy, smooth)
  const tailX = useSpring(mouseX, { stiffness: 150, damping: 15 });
  const tailY = useSpring(mouseY, { stiffness: 150, damping: 15 });

  // 4. Velocity for scaling effect (The faster you move, the smaller/stretched it gets)
  const velocityX = useVelocity(tailX);
  const velocityY = useVelocity(tailY);
  
  // Transform velocity into a scale value (0 velocity = 1 scale, high velocity = 0.6 scale)
  // We combine X and Y velocity roughly for a "squeeze" effect
  const scaleVelocity = useTransform(velocityX, [ -1000, 0, 1000 ], [ 0.6, 1, 0.6 ]);

  // 5. Inactivity Logic
  const timerRef = useRef(null);

  useEffect(() => {
    const handleMouseMove = (e) => {
      // Update coordinates
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
      
      // Handle visibility
      setIsVisible(true);
      
      // Reset timer
      if (timerRef.current) clearTimeout(timerRef.current);
      timerRef.current = setTimeout(() => {
        setIsVisible(false);
      }, 4000); // Fade out after 4 seconds
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      if (timerRef.current) clearTimeout(timerRef.current);
    };
  }, [mouseX, mouseY]);

  // Visual Styles based on theme
  const isDarkSection = theme === 'dark';
  
  // If we are on a Dark section -> Cursor should be White
  // If we are on a Light section -> Cursor should be Black
  const mainColor = isDarkSection ? '#ffffff' : '#000000'; 

  return (
    <div className="fixed inset-0 z-[9999] pointer-events-none overflow-hidden">
      
      {/* --- The Tail (Glow/Blur) --- */}
      <motion.div
        className="absolute top-0 left-0 w-8 h-8 rounded-full blur-md opacity-40 will-change-transform"
        style={{
          x: tailX,
          y: tailY,
          backgroundColor: mainColor,
          scale: scaleVelocity, // Adds the "jelly" squeeze effect on movement
          translateX: '-50%',
          translateY: '-50%',
        }}
        animate={{
          opacity: isVisible ? 0.4 : 0,
        }}
        transition={{ duration: 0.3 }}
      />

      {/* --- The Head (Solid Dot) --- */}
      <motion.div
        className="absolute top-0 left-0 w-3 h-3 rounded-full will-change-transform"
        style={{
          x: cursorX,
          y: cursorY,
          backgroundColor: mainColor,
          translateX: '-50%',
          translateY: '-50%',
        }}
        animate={{
          opacity: isVisible ? 1 : 0,
          scale: isVisible ? 1 : 0.5,
        }}
        transition={{ duration: 0.3 }}
      />
    </div>
  );
};

export default CursorGlow;