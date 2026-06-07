import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen relative flex items-center pt-28 pb-16 lg:py-0 overflow-hidden bg-white">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
      
      {/* Radial Gradient Mask */}
      <div className="absolute inset-0 bg-white [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,transparent_20%,black_100%)] pointer-events-none"></div>

      <div className="container mx-auto px-6 max-w-7xl relative">
        <div className="grid lg:grid-cols-2 gap-12 items-center text-center lg:text-left">
          
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="lg:w-full z-10 flex flex-col items-center lg:items-start"
          >
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-blue-50 text-blue-600 font-semibold text-xs md:text-sm mb-6 border border-blue-100">
              🚀 Solusi Digital Terbaik Brebes
            </div>
            
            <h1 className="text-4xl md:text-6xl font-extrabold text-slate-900 leading-tight mb-6 tracking-tight">
              Tingkatkan Skala <br className="hidden md:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-violet-600">
                Bisnis Anda
              </span>
            </h1>
            
            <p className="text-slate-600 text-lg md:text-xl mb-6 max-w-xl leading-relaxed">
              Kami membantu UMKM dan perusahaan di Brebes dan sekitarnya untuk go digital dengan website modern, responsif, dan elegan.
            </p>

            {/* Tech Stack Icons */}
            <div className="flex items-center gap-4 mb-8">
              <span className="text-sm text-slate-500 font-medium">Tech Stack:</span>
              <div className="flex items-center gap-3">
                {/* JavaScript */}
                <div className="w-8 h-8 rounded bg-white border border-slate-200 shadow-sm flex items-center justify-center hover:border-[#F7DF1E] hover:bg-[#F7DF1E]/5 transition-colors" title="JavaScript">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="#F7DF1E" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0 0h24v24H0V0z" fill="none"/><path d="M11.27 16.27l1.09-1.07c-1.34-1.28-2.61-1.63-3.79-1.63-1.63 0-2.82.99-2.82 2.68 0 1.63 1.14 2.45 2.59 3.03l.89.37c1.19.49 1.77.93 1.77 1.7 0 .86-.7 1.45-1.8 1.45-1.07 0-2.12-.51-3.03-1.42l-1.12 1.05c1.19 1.33 2.68 1.89 4.15 1.89 2.05 0 3.36-1.1 3.36-2.92 0-1.8-1.26-2.52-2.82-3.15l-.89-.35c-1-.42-1.49-.86-1.49-1.54 0-.75.68-1.28 1.66-1.28.93-.02 1.89.37 2.25 1.19zM22.5 14.15l-1.31-1.05c-1.14 1.49-2.26 2.05-3.5 2.05-1.54 0-2.22-.96-2.22-2.92v-7.24h-1.61v7.5c0 2.61 1.28 3.82 3.43 3.82 1.7 0 3.2-.82 4.66-2.17l.55-.01z"/>
                  </svg>
                </div>
                {/* React */}
                <div className="w-8 h-8 rounded bg-white border border-slate-200 shadow-sm flex items-center justify-center hover:border-[#61DAFB] hover:bg-[#61DAFB]/5 transition-colors" title="React">
                  <svg width="18" height="18" viewBox="-11.5 -10.23174 23 20.46348" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="0" cy="0" r="2.05" fill="#61dafb"/>
                    <g stroke="#61dafb" strokeWidth="1" fill="none">
                      <ellipse rx="11" ry="4.2"/>
                      <ellipse rx="11" ry="4.2" transform="rotate(60)"/>
                      <ellipse rx="11" ry="4.2" transform="rotate(120)"/>
                    </g>
                  </svg>
                </div>
                {/* Laravel */}
                <div className="w-8 h-8 rounded bg-white border border-slate-200 shadow-sm flex items-center justify-center hover:border-[#FF2D20] hover:bg-[#FF2D20]/5 transition-colors" title="Laravel">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="#FF2D20" xmlns="http://www.w3.org/2000/svg">
                    <path d="M23.184 10.957l-9.61-9.61a3 3 0 0 0-4.242 0L.816 9.863a1.5 1.5 0 0 0 0 2.121l9.61 9.61a3 3 0 0 0 4.242 0l8.516-8.516a1.5 1.5 0 0 0 0-2.121zm-10.67 9.55a1.5 1.5 0 0 1-2.122 0L1.878 11.993l8.515-8.515a1.5 1.5 0 0 1 2.12 0l8.516 8.515-8.515 8.515z"/>
                    <path d="M12.923 15.344a1.496 1.496 0 0 0 1.058-.437l3.878-3.877a1.5 1.5 0 0 0 0-2.121l-3.878-3.878a1.5 1.5 0 0 0-2.12 2.12l1.317 1.318H7.5A1.5 1.5 0 0 0 6 10v4.5a1.5 1.5 0 0 0 3 0v-3h4.178l-1.317 1.318a1.501 1.501 0 0 0 1.062 2.526z"/>
                  </svg>
                </div>
                {/* Tailwind CSS */}
                <div className="w-8 h-8 rounded bg-white border border-slate-200 shadow-sm flex items-center justify-center hover:border-[#06B6D4] hover:bg-[#06B6D4]/5 transition-colors" title="Tailwind CSS">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="#06B6D4" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12.001 4.8c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624C13.666 10.618 15.027 12 18.001 12c3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C16.337 6.182 14.976 4.8 12.001 4.8zm-6 7.2c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624 1.177 1.194 2.538 2.576 5.512 2.576 3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C10.337 13.382 8.976 12 6.001 12z"/>
                  </svg>
                </div>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto">
              <a 
                href="https://wa.me/6281929442611?text=Halo%20BrebesWeb,%20saya%20tertarik%20untuk%20membuat%20website" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="w-full sm:w-auto bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-full font-semibold transition-all transform hover:-translate-y-1 shadow-lg shadow-blue-200 flex items-center justify-center gap-2"
              >
                Mulai Proyek
                <ArrowRight size={20} />
              </a>
              <a 
                href="https://portfolio-salmanmiftah07.vercel.app/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="w-full sm:w-auto border border-slate-200 bg-white hover:bg-slate-50 text-slate-700 px-8 py-4 rounded-full font-semibold transition-all shadow-sm flex items-center justify-center gap-2 text-center"
              >
                Lihat Portfolio
              </a>
            </div>
            
            <div className="mt-12 flex items-center justify-center sm:justify-start gap-8">
              <div className="text-center sm:text-left">
                <p className="text-3xl font-bold text-slate-900 mb-1">50+</p>
                <p className="text-sm text-slate-600">Klien Puas</p>
              </div>
              <div className="w-px h-12 bg-slate-200"></div>
              <div className="text-center sm:text-left">
                <p className="text-3xl font-bold text-slate-900 mb-1">100%</p>
                <p className="text-sm text-slate-600">Garansi Support</p>
              </div>
            </div>
          </motion.div>

          {/* HD Laptop Image (Replaced 3D/CSS Mockup) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="w-full relative z-10 flex items-center justify-center mt-12 lg:mt-0"
          >
            <motion.img 
              animate={{ y: [-10, 10, -10] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              src="/hero-laptop.png" 
              alt="Laptop Mockup BrebesWeb" 
              className="w-full max-w-[700px] h-auto drop-shadow-2xl z-10"
              onError={(e) => {
                e.target.onerror = null; 
                e.target.src = "https://placehold.co/700x450/e2e8f0/64748b?text=Masukkan+Gambar+hero-laptop.png+di+folder+public";
              }}
            />
            {/* Dynamic Drop shadow on floor */}
            <motion.div 
              animate={{ scale: [1, 0.95, 1], opacity: [0.3, 0.2, 0.3] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -bottom-8 left-1/2 -translate-x-1/2 w-3/4 h-8 bg-black blur-2xl rounded-full z-0"
            ></motion.div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Hero;
