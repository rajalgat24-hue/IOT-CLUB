import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Instagram, Linkedin, Twitter } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="relative bg-gradient-to-t from-iot-navy to-background border-t border-iot-teal/20">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `
            radial-gradient(circle at 25% 25%, hsl(var(--iot-teal)) 2px, transparent 2px),
            radial-gradient(circle at 75% 75%, hsl(var(--iot-yellow)) 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px'
        }} />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Club Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-4"
          >
            <h3 className="text-2xl font-paradox font-bold text-iot-teal">
              IOT CLUB
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              Vishwakarma Institute of Technology's premier IoT community, 
              fostering innovation and hands-on learning in connected technologies.
            </p>
            <div className="flex space-x-4">
              <motion.a
                href="https://instagram.com/iot_forum_viit"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1, color: "hsl(var(--iot-teal))" }}
                className="text-muted-foreground hover:text-iot-teal transition-colors"
              >
                <Instagram className="w-5 h-5" />
              </motion.a>
              <motion.a
                href="https://www.linkedin.com/company/iotforumviit/"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1, color: "hsl(var(--iot-teal))" }}
                className="text-muted-foreground hover:text-iot-teal transition-colors"
              >
                <Linkedin className="w-5 h-5" />
              </motion.a>
              <motion.a
                href="https://instagram.com/iot_forum_viit"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1, color: "hsl(var(--iot-teal))" }}
                className="text-muted-foreground hover:text-iot-teal transition-colors"
              >
                <Twitter className="w-5 h-5" />
              </motion.a>
            </div>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-4"
          >
            <h3 className="text-xl font-paradox font-semibold text-foreground">
              Contact Us
            </h3>
            <div className="space-y-3">
              <div className="flex items-center gap-3 text-muted-foreground">
                <Mail className="w-4 h-4 text-iot-teal" />
                <span className="text-sm">iotclub@vit.edu</span>
              </div>
              <div className="flex items-center gap-3 text-muted-foreground">
                <Phone className="w-4 h-4 text-iot-teal" />
                <span className="text-sm">+91 XX-XXXX-XXXX</span>
              </div>
              <div className="flex items-start gap-3 text-muted-foreground">
                <MapPin className="w-4 h-4 text-iot-teal mt-0.5 flex-shrink-0" />
                <span className="text-sm leading-relaxed">
                  Vishwakarma Institute of Technology<br />
                  666, Upper Indiranagar, Bibwewadi<br />
                  Kondhwa (Bk), Pune - 411048
                </span>
              </div>
            </div>
          </motion.div>

          {/* Social Media */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="space-y-4"
          >
            <h3 className="text-xl font-paradox font-semibold text-foreground">
              Social Media
            </h3>
            <div className="space-y-2">
              <motion.a
                href="https://www.instagram.com/iot_club_vit/?igsh=YzljYTk1ODg3Zg%3D%3D#"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ x: 5, color: "hsl(var(--iot-teal))" }}
                className="flex items-center gap-3 text-muted-foreground hover:text-iot-teal transition-all duration-200 text-sm"
              >
                <Instagram className="w-4 h-4" />
                <span>Instagram</span>
              </motion.a>
              <motion.a
                href="https://www.linkedin.com/company/iotforumviit/"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ x: 5, color: "hsl(var(--iot-teal))" }}
                className="flex items-center gap-3 text-muted-foreground hover:text-iot-teal transition-all duration-200 text-sm"
              >
                <Linkedin className="w-4 h-4" />
                <span>LinkedIn</span>
              </motion.a>
              <motion.a
                href="https://www.instagram.com/iot_club_vit/?igsh=YzljYTk1ODg3Zg%3D%3D#"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ x: 5, color: "hsl(var(--iot-teal))" }}
                className="flex items-center gap-3 text-muted-foreground hover:text-iot-teal transition-all duration-200 text-sm"
              >
                <Twitter className="w-4 h-4" />
                <span>Twitter</span>
              </motion.a>
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="space-y-4"
          >
            <h3 className="text-xl font-paradox font-semibold text-foreground">
              Quick Links
            </h3>
            <div className="space-y-2">
              {['About VIT', 'Join Club', 'Events', 'Projects', 'Resources'].map((link) => (
                <motion.a
                  key={link}
                  href="#"
                  whileHover={{ x: 5, color: "hsl(var(--iot-teal))" }}
                  className="block text-muted-foreground hover:text-iot-teal transition-all duration-200 text-sm"
                >
                  {link}
                </motion.a>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-12 pt-8 border-t border-iot-teal/20 text-center"
        >
          <p className="text-muted-foreground text-sm">
            © 2024 IoT Club - Vishwakarma Institute of Technology. 
            <span className="text-iot-teal"> Building the Future, One Connection at a Time.</span>
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;