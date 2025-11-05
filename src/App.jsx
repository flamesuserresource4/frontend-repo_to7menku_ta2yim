import { useEffect, useState } from 'react';
import Hero from './components/Hero';
import Gallery from './components/Gallery';
import Ecosystems from './components/Ecosystems';
import Footer from './components/Footer';

function App() {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const stored = localStorage.getItem('theme');
    const prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
    const initialDark = stored ? stored === 'dark' : prefersDark;
    setIsDark(initialDark);
  }, []);

  useEffect(() => {
    const root = document.documentElement;
    if (isDark) {
      root.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      root.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [isDark]);

  const toggleTheme = () => setIsDark((d) => !d);

  return (
    <div className="min-h-screen bg-emerald-50 text-emerald-900 dark:bg-slate-900 dark:text-emerald-50">
      <Hero onToggleTheme={toggleTheme} isDark={isDark} />
      <main>
        <Gallery />
        <Ecosystems />
      </main>
      <Footer />
    </div>
  );
}

export default App;
