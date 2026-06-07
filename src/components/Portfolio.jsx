import { Globe, ExternalLink } from 'lucide-react';

const Portfolio = () => {
  return (
    <section id="portfolio" className="py-24 border-t border-slate-200 bg-white">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="text-center max-w-2xl mx-auto space-y-4 mb-16">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-50 border border-blue-100 text-blue-600 text-xs font-semibold tracking-widest uppercase">
            <Globe className="w-3.5 h-3.5" /> Live Websites
          </span>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-slate-900">Website yang Sudah Dibuat</h2>
          <p className="text-slate-600 text-sm font-light">
            Beberapa contoh website yang sudah berhasil dikerjakan dan live di internet.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Website 1 — StarConnect */}
          <a
            href="https://starconnecttanjung.com/"
            target="_blank"
            rel="noreferrer"
            className="group rounded-2xl bg-white border border-slate-200 shadow-sm overflow-hidden hover:border-blue-300 hover:shadow-xl transition-all duration-300"
          >
            <div className="aspect-video w-full border-b border-slate-200 relative overflow-hidden bg-slate-50">
              <img
                src="/starconnect.png"
                alt="StarConnect Tanjung preview"
                className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 via-transparent to-transparent pointer-events-none" />
            </div>
            <div className="p-5 space-y-3">
              <div className="flex flex-wrap gap-2">
                <span className="text-[10px] uppercase tracking-wider font-semibold px-2 py-0.5 rounded-full bg-sky-50 border border-sky-100 text-sky-600">Company Profile</span>
                <span className="text-[10px] uppercase tracking-wider font-semibold px-2 py-0.5 rounded-full bg-slate-50 border border-slate-200 text-slate-600">Custom Domain</span>
              </div>
              <h3 className="font-bold text-lg text-slate-900 group-hover:text-blue-600 transition-colors">StarConnect Tanjung</h3>
              <p className="text-slate-600 text-sm font-light leading-relaxed">Website company profile dengan desain modern, responsif, dan kontak WhatsApp terintegrasi.</p>
              <div className="inline-flex items-center gap-1.5 text-xs text-blue-600 font-semibold mt-1">
                <ExternalLink className="w-3.5 h-3.5" /> Lihat Website
              </div>
            </div>
          </a>

          {/* Website 2 — Blok M Studio Percetakan */}
          <a
            href="https://blokmstudiopercetakan.vercel.app/"
            target="_blank"
            rel="noreferrer"
            className="group rounded-2xl bg-white border border-slate-200 shadow-sm overflow-hidden hover:border-blue-300 hover:shadow-xl transition-all duration-300"
          >
            <div className="aspect-video w-full border-b border-slate-200 relative overflow-hidden bg-slate-50">
              <img
                src="/blokmstudiopercetakan.jpg"
                alt="Blok M Studio Percetakan preview"
                className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 via-transparent to-transparent pointer-events-none" />
            </div>
            <div className="p-5 space-y-3">
              <div className="flex flex-wrap gap-2">
                <span className="text-[10px] uppercase tracking-wider font-semibold px-2 py-0.5 rounded-full bg-orange-50 border border-orange-100 text-orange-600">Percetakan</span>
                <span className="text-[10px] uppercase tracking-wider font-semibold px-2 py-0.5 rounded-full bg-slate-50 border border-slate-200 text-slate-600">Landing Page</span>
              </div>
              <h3 className="font-bold text-lg text-slate-900 group-hover:text-blue-600 transition-colors">Blok M Studio Percetakan</h3>
              <p className="text-slate-600 text-sm font-light leading-relaxed">Website percetakan profesional dengan galeri produk, animasi modern, dan form pemesanan.</p>
              <div className="inline-flex items-center gap-1.5 text-xs text-blue-600 font-semibold mt-1">
                <ExternalLink className="w-3.5 h-3.5" /> Lihat Website
              </div>
            </div>
          </a>

          {/* Website 3 — Blok M Studio */}
          <a
            href="https://blok-m-studio.vercel.app/"
            target="_blank"
            rel="noreferrer"
            className="group rounded-2xl bg-white border border-slate-200 shadow-sm overflow-hidden hover:border-blue-300 hover:shadow-xl transition-all duration-300"
          >
            <div className="aspect-video w-full border-b border-slate-200 relative overflow-hidden bg-slate-50">
              <img
                src="/blok-m-studio.jpg"
                alt="Blok M Studio preview"
                className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 via-transparent to-transparent pointer-events-none" />
            </div>
            <div className="p-5 space-y-3">
              <div className="flex flex-wrap gap-2">
                <span className="text-[10px] uppercase tracking-wider font-semibold px-2 py-0.5 rounded-full bg-violet-50 border border-violet-100 text-violet-600">Studio</span>
                <span className="text-[10px] uppercase tracking-wider font-semibold px-2 py-0.5 rounded-full bg-slate-50 border border-slate-200 text-slate-600">Premium UI</span>
              </div>
              <h3 className="font-bold text-lg text-slate-900 group-hover:text-blue-600 transition-colors">Blok M Studio</h3>
              <p className="text-slate-600 text-sm font-light leading-relaxed">Website studio kreatif dengan desain premium, dark mode, dan animasi scroll yang memukau.</p>
              <div className="inline-flex items-center gap-1.5 text-xs text-blue-600 font-semibold mt-1">
                <ExternalLink className="w-3.5 h-3.5" /> Lihat Website
              </div>
            </div>
          </a>

          {/* Website 4 — Portfolio */}
          <a
            href="https://portfolio-salmanmiftah07.vercel.app/"
            target="_blank"
            rel="noreferrer"
            className="group rounded-2xl bg-white border border-slate-200 shadow-sm overflow-hidden hover:border-blue-300 hover:shadow-xl transition-all duration-300"
          >
            <div className="aspect-video w-full border-b border-slate-200 relative overflow-hidden bg-slate-50">
              <img
                src="/portfolio-screenshot.png"
                alt="Portfolio Developer preview"
                className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 via-transparent to-transparent pointer-events-none" />
            </div>
            <div className="p-5 space-y-3">
              <div className="flex flex-wrap gap-2">
                <span className="text-[10px] uppercase tracking-wider font-semibold px-2 py-0.5 rounded-full bg-blue-50 border border-blue-100 text-blue-600">Portfolio</span>
                <span className="text-[10px] uppercase tracking-wider font-semibold px-2 py-0.5 rounded-full bg-slate-50 border border-slate-200 text-slate-600">Next.js</span>
              </div>
              <h3 className="font-bold text-lg text-slate-900 group-hover:text-blue-600 transition-colors">Portfolio Developer</h3>
              <p className="text-slate-600 text-sm font-light leading-relaxed">Website portfolio interaktif dengan fitur 3D, animasi modern, dan desain dark mode premium.</p>
              <div className="inline-flex items-center gap-1.5 text-xs text-blue-600 font-semibold mt-1">
                <ExternalLink className="w-3.5 h-3.5" /> Lihat Website
              </div>
            </div>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
