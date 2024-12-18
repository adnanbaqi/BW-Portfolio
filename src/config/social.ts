import { Github, Instagram, MessageCircle } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

export interface SocialLink {
  platform: string;
  url: string;
  Icon: LucideIcon;
  label: string;
}

export const socialLinks: SocialLink[] = [
  {
    platform: 'GitHub',
    url: 'https://github.com/yourusername',
    Icon: Github,
    label: 'View GitHub Profile'
  },
  {
    platform: 'Instagram',
    url: 'https://instagram.com/yourusername',
    Icon: Instagram,
    label: 'Follow on Instagram'
  },
  {
    platform: 'Discord',
    url: 'https://discord.gg/yourinvite',
    Icon: MessageCircle,
    label: 'Join Discord Server'
  }
];