import { Sun, Moon, Music, Volume2, VolumeX } from 'lucide-react';

export const themeIcons = {
  light: Sun,
  dark: Moon,
} as const;

export const audioIcons = {
  playing: VolumeX,
  muted: Volume2,
} as const;