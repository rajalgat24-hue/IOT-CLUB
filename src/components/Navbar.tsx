import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuHovered, setIsMenuHovered] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      {/* Main Navbar */}
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          isScrolled 
            ? 'bg-iot-navy/95 backdrop-blur-xl border-b border-iot-teal/20 shadow-elegant' 
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-6xl mx-auto px-4 py-3">
          <div className="flex items-center justify-between">
            {/* Logo Section - Keep original */}
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

      {/* Sliding Menu Trigger */}
      <motion.div
        className="hidden md:block fixed top-0 left-0 w-12 h-full cursor-pointer z-50"
        onMouseEnter={() => setIsMenuHovered(true)}
        onMouseLeave={() => setIsMenuHovered(false)}
        initial={{ x: -50, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.3 }}
      >
        {/* Background */}
        <div className="absolute inset-0 bg-iot-navy/80 backdrop-blur-sm border-r border-iot-teal/20" />
        
        {/* Trigger Bars */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="flex flex-col items-center space-y-2">
            {[0, 1, 2].map((index) => (
              <motion.div
                key={index}
                className="w-1 bg-iot-teal"
                initial={{ height: 10 }}
                animate={{
                  height: isMenuHovered 
                    ? index === 1 ? 16 : 8
                    : 10,
                  opacity: isMenuHovered && index !== 1 ? 0.3 : 1,
                }}
                transition={{ duration: 0.4, ease: "easeOut" }}
              />
            ))}
          </div>
        </div>

        {/* MENU Text */}
        <motion.p
          className="absolute bottom-20 left-1/2 text-iot-glow text-xs font-bold tracking-widest font-paradox"
          initial={{ 
            transform: 'translateX(-50%) translateY(20px) rotate(-90deg)',
            opacity: 0 
          }}
          animate={{
            transform: isMenuHovered 
              ? 'translateX(-50%) translateY(0px) rotate(-90deg)'
              : 'translateX(-50%) translateY(20px) rotate(-90deg)',
            opacity: isMenuHovered ? 1 : 0
          }}
          transition={{ duration: 0.4, ease: "easeOut" }}
        >
          MENU
        </motion.p>
      </motion.div>

      {/* Sliding Menu Panel */}
      <AnimatePresence>
        {isMenuHovered && (
          <motion.div
            className="hidden md:block fixed top-0 left-0 h-full bg-iot-navy/95 backdrop-blur-xl border-r border-iot-teal/20 shadow-elegant z-40"
            initial={{ x: '-100%', opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: '-100%', opacity: 0 }}
            transition={{ 
              duration: 0.8, 
              ease: [0.785, 0.135, 0.15, 0.86] 
            }}
            onMouseEnter={() => setIsMenuHovered(true)}
            onMouseLeave={() => setIsMenuHovered(false)}
            style={{ width: '320px' }}
          >
            <div className="p-12 pt-20">
              {/* Logo Section in Panel */}
              <motion.div
                className="flex flex-col items-center mb-12"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <motion.div
                  className="relative mb-4"
                  whileHover={{ scale: 1.1 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                >
                  <img
                    src="/image.png"
                    alt="IoT Club Logo"
                    className="h-16 w-auto"
                    style={{
                      filter: 'drop-shadow(0 0 12px rgba(0, 255, 255, 0.4))',
                    }}
                  />
                  <div className="absolute inset-0 rounded-full bg-gradient-to-r from-iot-teal/30 to-iot-yellow/30 blur-lg -z-10" />
                </motion.div>
                
                <motion.h2
                  className="text-xl font-paradox font-bold text-iot-teal tracking-wider mb-1"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                >
                  IOT CLUB
                </motion.h2>
                
                <motion.p
                  className="text-sm text-iot-glow font-light tracking-wide"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                >
                  VIT Kondhwa
                </motion.p>
              </motion.div>

              {/* Menu Items */}
              <motion.nav className="space-y-6">
                {['About', 'Events', 'Projects', 'Join'].map((item, index) => (
                  <motion.div
                    key={item}
                    className="overflow-hidden"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.6, delay: 0.5 + (index * 0.1) }}
                  >
                    <motion.a
                      href={`#${item.toLowerCase()}`}
                      className="block text-2xl text-foreground hover:text-iot-teal transition-all duration-300 font-medium tracking-wide group cursor-pointer"
                      initial={{ transform: 'translateY(100%)' }}
                      animate={{ transform: 'translateY(0%)' }}
                      transition={{ 
                        duration: 0.6, 
                        delay: 0.5 + (index * 0.1),
                        ease: [0.785, 0.135, 0.15, 0.86]
                      }}
                      whileHover={{ x: 10 }}
                    >
                      <span className="relative">
                        {item}
                        <motion.div
                          className="absolute bottom-0 left-0 h-0.5 bg-gradient-accent origin-left"
                          initial={{ scaleX: 0 }}
                          whileHover={{ scaleX: 1 }}
                          transition={{ duration: 0.3 }}
                        />
                      </span>
                    </motion.a>
                  </motion.div>
                ))}
              </motion.nav>
            </div>

            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-iot-navy/20 to-iot-navy/40 pointer-events-none" />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;