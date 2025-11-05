import { useEffect, useRef, useState } from 'react';

const photos = [
  {
    src:
      'https://images.unsplash.com/photo-1501785888041-af3ef285b470?q=80&w=1600&auto=format&fit=crop',
    alt: 'Pegunungan saat matahari terbit',
  },
  {
    src:
      'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=1600&auto=format&fit=crop',
    alt: 'Ombak laut biru yang menenangkan',
  },
  {
    src:
      'https://images.unsplash.com/photo-1469474968028-56623f02e42e?q=80&w=1600&auto=format&fit=crop',
    alt: 'Hutan hijau berkabut',
  },
  {
    src:
      'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=1600&auto=format&fit=crop',
    alt: 'Gurun pasir keemasan',
  },
  {
    src:
      'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?q=80&w=1600&auto=format&fit=crop',
    alt: 'Danau tenang dikelilingi hutan',
  },
  {
    src:
      'https://images.unsplash.com/photo-1441829266145-bdda4cf99d61?q=80&w=1600&auto=format&fit=crop',
    alt: 'Air terjun di tengah hutan',
  },
];

export default function Gallery() {
  const [current, setCurrent] = useState(null);
  const sectionRef = useRef(null);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    el.classList.add('opacity-0', 'translate-y-8');
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            el.classList.remove('opacity-0', 'translate-y-8');
            el.classList.add('opacity-100', 'translate-y-0');
          }
        });
      },
      { threshold: 0.15 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <section id="galeri" ref={sectionRef} className="transition-all duration-700 ease-out py-16 md:py-24 bg-emerald-50/60 dark:bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <h2 className="text-3xl md:text-4xl font-bold text-emerald-900 dark:text-emerald-100">Galeri Interaktif</h2>
          <p className="mt-3 text-emerald-900/70 dark:text-emerald-100/70">
            Nikmati koleksi panorama alam. Arahkan kursor untuk fokus, klik untuk memperbesar.
          </p>
        </div>

        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {photos.map((p, idx) => (
            <button
              key={idx}
              className="group relative overflow-hidden rounded-2xl shadow-md focus:outline-none focus:ring-2 focus:ring-emerald-400"
              onClick={() => setCurrent(p)}
            >
              <img
                src={p.src}
                alt={p.alt}
                loading="lazy"
                className="h-60 w-full object-cover filter blur-[2px] scale-110 transition duration-500 group-hover:blur-0 group-hover:scale-100"
              />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-emerald-900/10 to-emerald-400/10" />
              <span className="absolute bottom-3 left-3 right-3 text-white text-sm font-medium drop-shadow">
                {p.alt}
              </span>
            </button>
          ))}
        </div>
      </div>

      {current && (
        <div
          aria-modal="true"
          role="dialog"
          className="fixed inset-0 z-50 bg-black/70 backdrop-blur flex items-center justify-center p-4"
          onClick={() => setCurrent(null)}
        >
          <div className="relative max-w-4xl w-full" onClick={(e) => e.stopPropagation()}>
            <img src={current.src} alt={current.alt} className="w-full h-auto rounded-xl shadow-2xl" />
            <button
              onClick={() => setCurrent(null)}
              className="absolute -top-3 -right-3 bg-white text-emerald-900 rounded-full px-3 py-1 font-semibold shadow"
              aria-label="Tutup gambar"
            >
              Tutup
            </button>
          </div>
        </div>
      )}
    </section>
  );
}
