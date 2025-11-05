import { useEffect, useRef, useState } from 'react';

const ECOSYSTEMS = [
  {
    name: 'Hutan Hujan',
    desc:
      'Hutan hujan menyimpan keanekaragaman hayati tertinggi di bumi dan berperan penting menyerap karbon.',
    color: 'from-emerald-500 to-emerald-700',
    img:
      'https://images.unsplash.com/photo-1469122312224-c5846569feb1?q=80&w=1600&auto=format&fit=crop',
  },
  {
    name: 'Gurun',
    desc:
      'Gurun tampak sunyi, namun banyak spesies beradaptasi dengan cerdas untuk bertahan di kondisi ekstrem.',
    color: 'from-amber-400 to-amber-600',
    img:
      'https://images.unsplash.com/photo-1501785888041-af3ef285b470?q=80&w=1600&auto=format&fit=crop',
  },
  {
    name: 'Terumbu Karang',
    desc:
      'Terumbu karang adalah “hutan hujan laut” yang melindungi pesisir dan menjadi rumah bagi jutaan organisme.',
    color: 'from-cyan-400 to-blue-600',
    img:
      'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=1600&auto=format&fit=crop',
  },
  {
    name: 'Pegunungan',
    desc:
      'Sumber air tawar dan penyangga iklim; pegunungan menyajikan panorama dramatis dan habitat unik.',
    color: 'from-lime-500 to-teal-700',
    img:
      'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?q=80&w=1600&auto=format&fit=crop',
  },
];

export default function Ecosystems() {
  const [active, setActive] = useState(null);
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
    <section id="ekosistem" ref={sectionRef} className="transition-all duration-700 ease-out py-16 md:py-24 bg-white dark:bg-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <h2 className="text-3xl md:text-4xl font-bold text-emerald-900 dark:text-emerald-100">Ekosistem Bumi</h2>
          <p className="mt-3 text-emerald-900/70 dark:text-emerald-100/70">
            Ketuk kartu untuk melihat informasi singkat. Animasi halus dan warna mencerminkan karakter tiap ekosistem.
          </p>
        </div>

        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
          {ECOSYSTEMS.map((e, idx) => {
            const expanded = active === idx;
            return (
              <button
                key={e.name}
                onClick={() => setActive(expanded ? null : idx)}
                className="group relative text-left rounded-2xl overflow-hidden shadow-lg focus:outline-none focus:ring-2 focus:ring-emerald-400"
                aria-expanded={expanded}
              >
                <div className="absolute inset-0">
                  <img src={e.img} alt={e.name} loading="lazy" className="w-full h-full object-cover transition duration-500 group-hover:scale-105" />
                </div>
                <div className={`absolute inset-0 bg-gradient-to-br ${e.color} opacity-70 mix-blend-multiply`} />
                <div className="relative p-6 h-56 flex flex-col justify-end">
                  <h3 className="text-xl font-bold text-white drop-shadow-md">{e.name}</h3>
                  <p className={`mt-2 text-white/90 text-sm transition-all duration-300 ${expanded ? 'line-clamp-none' : 'line-clamp-2'}`}>
                    {e.desc}
                  </p>
                  <span className="mt-4 inline-flex items-center text-xs font-semibold text-white/90">
                    {expanded ? 'Tutup' : 'Pelajari'}
                  </span>
                </div>
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
}
