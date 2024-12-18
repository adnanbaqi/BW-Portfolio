import { motion } from 'framer-motion';
import { useThemeStore } from '../store/themeStore';

export const Background = () => {
  const isDarkMode = useThemeStore((state) => state.isDarkMode);

  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">
      {[...Array(20)].map((_, i) => (
        <motion.div
          key={i}
          className={`absolute rounded-full ${
            isDarkMode ? 'bg-gray-700/20' : 'bg-gray-200/50'
          }`}
          style={{
            width: Math.random() * 300 + 50,
            height: Math.random() * 300 + 50,
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            x: [0, Math.random() * 100 - 50],
            y: [0, Math.random() * 100 - 50],
          }}
          transition={{
            duration: Math.random() * 10 + 10,
            repeat: Infinity,
            repeatType: "reverse",
          }}
        />
      ))}
    </div>
  );
};