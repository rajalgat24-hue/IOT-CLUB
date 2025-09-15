import { motion } from 'framer-motion';
import { Canvas } from '@react-three/fiber';
import { Float, Text3D, Environment } from '@react-three/drei';
import { ChevronDown, Wifi, Camera, Cpu, Usb, Zap, Cog } from 'lucide-react';

const FloatingIcons = () => {
  const icons = [
    { Icon: Wifi, position: [-4, 3, -2] as [number, number, number] },
    { Icon: Camera, position: [4, 2, -1] as [number, number, number] },
    { Icon: Cpu, position: [-3, -2, -3] as [number, number, number] },
    { Icon: Usb, position: [3, -1, -2] as [number, number, number] },
    { Icon: Zap, position: [-5, 0, -1] as [number, number, number] },
    { Icon: Cog, position: [5, 1, -3] as [number, number, number] },
  ];

  return (
    <>
      {icons.map(({ Icon, position }, index) => (
        <Float key={index} speed={1.5 + index * 0.2} rotationIntensity={0.5} floatIntensity={0.5}>
          <mesh position={position}>
            <boxGeometry args={[0.3, 0.3, 0.1]} />
            <meshStandardMaterial 
              color="#00ffff" 
              emissive="#004444" 
              transparent 
              opacity={0.6} 
            />
          </mesh>
        </Float>
      ))}
    </>
  );
};

const IoTLetter = ({ letter, index, totalLetters }: { letter: string; index: number; totalLetters: number }) => {
  const getLetterIcon = (letter: string) => {
    switch (letter.toLowerCase()) {
      case 'i': return <Wifi className="w-8 h-8 text-iot-teal" />;
      case 'o': return <Camera className="w-8 h-8 text-iot-teal" />;
      case 't': return <Cpu className="w-8 h-8 text-iot-teal" />;
      case 'c': return <Usb className="w-8 h-8 text-iot-yellow" />;
      case 'l': return <Zap className="w-8 h-8 text-iot-yellow" />;
      case 'u': return <Cog className="w-8 h-8 text-iot-yellow" />;
      case 'b': return <Wifi className="w-8 h-8 text-iot-yellow" />;
      default: return null;
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, rotateX: 90, scale: 0.5 }}
      animate={{ opacity: 1, rotateX: 0, scale: 1 }}
      transition={{
        duration: 0.8,
        delay: index * 0.15,
        type: "spring",
        stiffness: 100,
      }}
      className="relative inline-block"
    >
      <div className="relative">
        <span 
          className="text-8xl md:text-9xl font-paradox font-black text-transparent bg-clip-text bg-gradient-to-b from-iot-teal via-iot-glow to-iot-yellow glow-primary"
          style={{
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            filter: 'drop-shadow(0 0 20px rgba(0, 255, 255, 0.5))',
          }}
        >
          {letter}
        </span>
        
        {/* IoT Icon Integration */}
        <motion.div 
          initial={{ scale: 0, rotate: 180 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ delay: index * 0.15 + 0.5, duration: 0.5 }}
          className="absolute -top-4 -right-2 z-10"
        >
          {getLetterIcon(letter)}
        </motion.div>

        {/* Glow effect */}
        <div 
          className="absolute inset-0 text-8xl md:text-9xl font-paradox font-black text-iot-teal blur-sm opacity-50"
          aria-hidden="true"
        >
          {letter}
        </div>
      </div>
    </motion.div>
  );
};

const HeroSection = () => {
  const iotTitle = "IOT";
  const clubTitle = "CLUB";

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center bg-gradient-primary overflow-hidden">
      {/* 3D Background */}
      <div className="absolute inset-0 opacity-30">
        <Canvas camera={{ position: [0, 0, 5], fov: 75 }}>
          <ambientLight intensity={0.3} />
          <pointLight position={[10, 10, 10]} intensity={0.5} color="#00ffff" />
          <FloatingIcons />
          <Environment preset="night" />
        </Canvas>
      </div>

      {/* Main Content */}
      <div className="relative z-10 text-center px-4">
        {/* Animated Logo */}
        <motion.div
          initial={{ scale: 0, opacity: 0, rotateY: 180 }}
          animate={{ scale: 1, opacity: 1, rotateY: 0 }}
          transition={{ 
            duration: 1.2, 
            type: "spring", 
            stiffness: 100,
            delay: 0.2 
          }}
          className="mb-8 flex justify-center"
        >
          <div className="relative">
            {/* Glowing ring around logo */}
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 1.5, delay: 0.8 }}
              className="absolute inset-0 rounded-full bg-gradient-to-r from-iot-teal via-iot-yellow to-iot-teal blur-xl opacity-40 animate-pulse"
              style={{ padding: '20px' }}
            />
            
            {/* Rotating outer ring */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className="absolute inset-0 rounded-full border-2 border-gradient-to-r from-iot-teal/50 via-transparent to-iot-yellow/50"
              style={{ padding: '15px' }}
            />
            
            {/* Main logo */}
            <motion.img
              src="/image.png"
              alt="IoT Club Logo"
              className="h-24 w-auto md:h-32 relative z-10"
              style={{
                filter: 'drop-shadow(0 0 20px rgba(0, 255, 255, 0.5))',
              }}
              whileHover={{ 
                scale: 1.1,
                filter: 'drop-shadow(0 0 30px rgba(0, 255, 255, 0.8))'
              }}
              transition={{ type: "spring", stiffness: 300 }}
            />
            
            {/* Floating particles around logo */}
            {Array.from({ length: 6 }).map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-2 h-2 bg-iot-teal rounded-full"
                style={{
                  top: '50%',
                  left: '50%',
                  transformOrigin: `${40 + i * 10}px 0px`,
                }}
                animate={{
                  rotate: 360,
                  opacity: [0.3, 1, 0.3],
                }}
                transition={{
                  duration: 3 + i * 0.5,
                  repeat: Infinity,
                  ease: "linear",
                  delay: i * 0.2,
                }}
              />
            ))}
          </div>
        </motion.div>

        {/* IOT Title */}
        <motion.div 
          className="mb-4 flex justify-center items-center space-x-2"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.2 }}
        >
          {iotTitle.split('').map((letter, index) => (
            <IoTLetter 
              key={index} 
              letter={letter} 
              index={index + 3} 
              totalLetters={iotTitle.length} 
            />
          ))}
        </motion.div>

        {/* CLUB Title */}
        <motion.div 
          className="mb-8 flex justify-center items-center space-x-2"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.5 }}
        >
          {clubTitle.split('').map((letter, index) => (
            <IoTLetter 
              key={index} 
              letter={letter} 
              index={index + iotTitle.length + 3} 
              totalLetters={clubTitle.length} 
            />
          ))}
        </motion.div>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.8 }}
          className="text-xl md:text-2xl font-paradox text-iot-glow font-light tracking-wider mb-4"
        >
          Vishwakarma Institute of Technology, Kondhwa
        </motion.p>

        {/* Enhanced tagline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 2.0 }}
          className="text-lg md:text-xl text-muted-foreground font-light tracking-wide max-w-2xl mx-auto"
        >
          Innovating Tomorrow's Connected World Through Technology & Learning
        </motion.p>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 2.2 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="flex flex-col items-center text-iot-glow"
          >
            <span className="text-sm font-light mb-2 tracking-wide">Scroll to Explore</span>
            <ChevronDown className="w-6 h-6" />
          </motion.div>
        </motion.div>
      </div>

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent opacity-50" />
    </section>
  );
};

export default HeroSection;