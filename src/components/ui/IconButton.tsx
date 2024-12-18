import { type LucideIcon } from 'lucide-react';
import { motion } from 'framer-motion';

interface IconButtonProps {
  Icon: LucideIcon;
  onClick?: () => void;
  label?: string;
  className?: string;
}

export const IconButton = ({ Icon, onClick, label, className = '' }: IconButtonProps) => {
  return (
    <motion.button
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      onClick={onClick}
      className={`p-2 ${className}`}
      aria-label={label}
    >
      <Icon className="w-5 h-5" />
    </motion.button>
  );
};