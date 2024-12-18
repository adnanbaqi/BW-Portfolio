import { useThemeStore } from '../../store/themeStore';
import { themeIcons, audioIcons } from '../../config/icons';
import { IconButton } from './IconButton';

export const ThemeControls = () => {
  const { isDarkMode, toggleTheme, isMusicPlaying, toggleMusic } = useThemeStore();

  return (
    <div className="flex items-center gap-4" aria-label="Theme Controls">
      <IconButton
        Icon={isDarkMode ? themeIcons.light : themeIcons.dark}
        onClick={toggleTheme}
        label={isDarkMode ? 'Switch to light mode' : 'Switch to dark mode'}
      />
      
      <IconButton
        Icon={isMusicPlaying ? audioIcons.playing : audioIcons.muted}
        onClick={toggleMusic}
        label={isMusicPlaying ? 'Turn off music' : 'Turn on music'}
      />
    </div>
  );
};