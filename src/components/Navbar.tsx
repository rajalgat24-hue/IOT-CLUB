import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-iot-navy/95 backdrop-blur-xl border-b border-iot-teal/20 shadow-elegant' 
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          {/* Logo Section */}
          <motion.a
            href="/"
            className="flex items-center space-x-3 group"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 400, damping: 17 }}
          >
            <div className="relative">
              <img
                src="/image.png"
                alt="IoT Club Logo"
                className="h-10 w-auto md:h-15 transition-all duration-300 group-hover:drop-shadow-[0_0_15px_rgba(0,255,255,0.6)]"
                style={{
                  filter: 'drop-shadow(0 0 8px rgba(0, 255, 255, 0.3))',
                }}
              />
              {/* Glow ring on hover */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-iot-teal/20 to-iot-yellow/20 blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10" />
            </div>
            <div className="hidden sm:block">
              <span className="text-lg font-paradox font-bold text-iot-teal tracking-wider">
                IOT CLUB
              </span>
              <div className="text-xs text-iot-glow font-light tracking-wide">
                VIT Kondhwa
              </div>
            </div>
          </motion.a>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center space-x-8">
            {['About', 'Events', 'Projects', 'Join'].map((item, index) => (
              <motion.a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-foreground hover:text-iot-teal transition-colors duration-300 font-medium tracking-wide"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 * index }}
                whileHover={{ y: -2 }}
              >
                {item}
              </motion.a>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <motion.button
            className="md:hidden p-2 rounded-lg bg-iot-navy/50 border border-iot-teal/30"
            whileTap={{ scale: 0.95 }}
          >
            <div className="w-6 h-6 flex flex-col justify-center items-center space-y-1">
              <div className="w-4 h-0.5 bg-iot-teal"></div>
              <div className="w-4 h-0.5 bg-iot-teal"></div>
              <div className="w-4 h-0.5 bg-iot-teal"></div>
            </div>
          </motion.button>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;