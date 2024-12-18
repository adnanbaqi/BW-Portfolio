import { motion } from 'framer-motion';
import type { SocialLink as SocialLinkType } from '../../config/social';

export const SocialLink = ({ platform, url, Icon, label }: SocialLinkType) => {
  return (
    <motion.a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      className="hover:text-gray-600 transition-colors"
      aria-label={label}
    >
      <Icon className="w-5 h-5" />
    </motion.a>
  );
};