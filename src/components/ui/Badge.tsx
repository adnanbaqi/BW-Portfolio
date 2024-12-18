import { type ReactNode } from 'react';

interface BadgeProps {
  children: ReactNode;
  className?: string;
}

export const Badge = ({ children, className = '' }: BadgeProps) => {
  return (
    <span className={`px-3 py-1 bg-gray-100 rounded-full text-sm ${className}`}>
      {children}
    </span>
  );
};