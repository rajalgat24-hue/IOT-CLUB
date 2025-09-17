import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';

const RegisterButton = () => {
  return (
    <motion.div
      initial={{ scale: 0, rotate: 180 }}
      animate={{ scale: 1, rotate: 0 }}
      transition={{ delay: 2, duration: 0.6, type: "spring", stiffness: 200 }}
      className="fixed bottom-8 right-8 z-50"
    >
      <motion.a
        href="https://forms.gle/ME4nSxvvskCKSGnVA"
        target="_blank"
        rel="noopener noreferrer"
        whileHover={{ scale: 1.05, rotate: 5 }}
        whileTap={{ scale: 0.95 }}
        className="flex items-center gap-2 px-6 py-3 bg-gradient-accent text-black font-semibold rounded-full shadow-glow glow-accent transition-smooth hover:shadow-elegant group"
      >
        <span className="font-paradox tracking-wide">REGISTER</span>
        <ExternalLink className="w-5 h-5 group-hover:rotate-45 transition-transform duration-300" />
      </motion.a>
    </motion.div>
  );
};

export default RegisterButton;