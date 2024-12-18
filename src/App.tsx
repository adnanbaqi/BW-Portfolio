import { useEffect } from 'react';
import { useThemeStore } from './store/themeStore';
import { Background } from './components/Background';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Projects } from './components/Projects';
import { Experience } from './components/Experience';
import { Chatbot } from './components/Chatbot';

function App() {
  const { isDarkMode, isMusicPlaying } = useThemeStore();

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDarkMode]);

  useEffect(() => {
    const audio = new Audio('/audio/bg.mp3');
    audio.loop = true;

    if (!isMusicPlaying) {
      audio.play().catch(() => {
      });
    }

    return () => {
      audio.pause();
      audio.currentTime = 0;
    };
  }, [isMusicPlaying]);

  return (
    <div className={`min-h-screen transition-colors duration-300 ${
      isDarkMode ? 'bg-gray-900 text-white' : 'bg-white text-black'
    }`}>
      <Background />
      <Header />
      <main>
        <Hero />
        <About />
        <Projects />
        <Experience />
      </main>
      <Chatbot />
    </div>
  );
}

export default App;