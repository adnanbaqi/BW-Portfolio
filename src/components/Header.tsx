import { motion } from 'framer-motion';
import { socialLinks } from '../config/social';
import { SocialLink } from './ui/SocialLink';
import { ThemeControls } from './ui/ThemeControls';

export const Header = () => {
  return (
    <header className="fixed top-0 w-full z-50 backdrop-blur-sm">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <motion.h1 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-2xl font-bold"
        >
          Portfolio
        </motion.h1>
        
        <div className="flex items-center gap-6">
          <nav className="flex items-center gap-6" aria-label="Social Links">
            {socialLinks.map((social) => (
              <SocialLink key={social.platform} {...social} />
            ))}
          </nav>
          
          <ThemeControls />
        </div>
      </div>
    </header>
  );
};