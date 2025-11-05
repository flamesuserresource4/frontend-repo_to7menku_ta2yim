import { useEffect, useRef, useState } from 'react';
import Spline from '@splinetool/react-spline';
import { Sun, Moon } from 'lucide-react';

export default function Hero({ onToggleTheme, isDark }) {
  const titleRef = useRef(null);
  const subRef = useRef(null);
  const ctaRef = useRef(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const onScroll = () => {
      const y = window.scrollY;
      const title = titleRef.current;
      const sub = subRef.current;
      const cta = ctaRef.current;
      if (title) title.style.transform = `translateY(${y * 0.15}px)`;
      if (sub) sub.style.transform = `translateY(${y * 0.1}px)`;
      if (cta) cta.style.transform = `translateY(${y * 0.05}px)`;
    };
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <section className="relative h-[80vh] md:h-[90vh] w-full overflow-hidden">
      {/* Spline canvas as immersive background */}
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/poZi6bJ4-Htwt04i/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      {/* Soft gradient overlay to improve text contrast (does not block interaction) */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/40 via-black/10 to-transparent dark:from-black/60 dark:via-black/20" />

      {/* Top navigation with theme toggle */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6 flex items-center justify-between">
        <div className="backdrop-blur-md bg-white/20 dark:bg-black/20 rounded-full px-4 py-2 shadow-md border border-white/30 dark:border-white/10">
          <span className="text-sm md:text-base font-semibold tracking-wide text-white drop-shadow">Keindahan Alam</span>
        </div>
        <button
          onClick={onToggleTheme}
          aria-label="Toggle Day/Night Mode"
          className="group inline-flex items-center gap-2 rounded-full px-4 py-2 bg-white/70 hover:bg-white text-emerald-900 transition shadow border border-emerald-100 dark:bg-emerald-900/70 dark:hover:bg-emerald-900 dark:text-emerald-50 dark:border-emerald-800"
        >
          {isDark ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
          <span className="hidden sm:inline text-sm font-medium">{isDark ? 'Mode Siang' : 'Mode Malam'}</span>
        </button>
      </div>

      {/* Hero copy */}
      <div className="relative z-10 h-full flex items-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="max-w-2xl">
            <h1
              ref={titleRef}
              className="text-4xl sm:text-6xl md:text-7xl font-extrabold leading-tight text-white drop-shadow-lg"
            >
              Jelajahi Keindahan Bumi
            </h1>
            <p
              ref={subRef}
              className="mt-4 md:mt-6 text-base md:text-xl text-white/90 max-w-xl"
            >
              Temukan harmoni hutan, lautan, pegunungan, dan gurun melalui pengalaman interaktif yang menenangkan—dirancang untuk mengingatkan kita menjaga rumah bersama.
            </p>
            <div ref={ctaRef} className="mt-8 flex items-center gap-4">
              <a
                href="#galeri"
                className="inline-flex items-center justify-center rounded-full bg-emerald-500 hover:bg-emerald-600 active:bg-emerald-700 text-white font-semibold px-6 py-3 shadow-lg shadow-emerald-500/30 transition-transform hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-emerald-400"
              >
                Mulai Petualangan
              </a>
              <a
                href="#ekosistem"
                className="inline-flex items-center justify-center rounded-full border border-white/60 bg-white/20 hover:bg-white/30 text-white backdrop-blur px-6 py-3 font-medium transition focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-white/50"
              >
                Jelajahi Ekosistem
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* subtle bottom gradient to blend into next sections */}
      <div className="pointer-events-none absolute bottom-0 inset-x-0 h-40 bg-gradient-to-t from-emerald-50 to-transparent dark:from-slate-900" />

      {/* Ensure content is revealed smoothly when mounted */}
      <style>{`
        section { opacity: ${mounted ? 1 : 0}; transition: opacity 800ms ease; }
      `}</style>
    </section>
  );
}
