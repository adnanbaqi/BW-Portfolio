import { create } from 'zustand';

interface ThemeState {
  isDarkMode: boolean;
  toggleTheme: () => void;
  isMusicPlaying: boolean;
  toggleMusic: () => void;
}

export const useThemeStore = create<ThemeState>((set) => ({
  isDarkMode: false,
  toggleTheme: () => set((state) => ({ isDarkMode: !state.isDarkMode })),
  isMusicPlaying: true,
  toggleMusic: () => set((state) => ({ isMusicPlaying: !state.isMusicPlaying })),
}));