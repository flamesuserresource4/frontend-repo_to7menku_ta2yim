export default function Footer() {
  return (
    <footer className="bg-emerald-900 text-emerald-50 dark:bg-slate-950 dark:text-emerald-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
          <div>
            <h4 className="text-lg font-semibold">Keindahan Alam</h4>
            <p className="mt-2 text-emerald-100/80">
              “Alam bukanlah tempat untuk dikunjungi. Ia adalah rumah.” — Gary Snyder
            </p>
          </div>
          <nav aria-label="Sosial" className="flex gap-4 md:justify-center">
            <a className="hover:text-amber-300 transition" href="https://instagram.com" target="_blank" rel="noreferrer">
              Instagram
            </a>
            <a className="hover:text-amber-300 transition" href="https://twitter.com" target="_blank" rel="noreferrer">
              Twitter
            </a>
            <a className="hover:text-amber-300 transition" href="https://youtube.com" target="_blank" rel="noreferrer">
              YouTube
            </a>
          </nav>
          <div className="md:text-right text-sm text-emerald-100/70">
            © {new Date().getFullYear()} Alam Lestari. Semua hak cipta dilindungi.
          </div>
        </div>
      </div>
    </footer>
  );
}
