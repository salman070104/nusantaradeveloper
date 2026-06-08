import { Code2, Mail, Phone, MapPin, MessageCircle, Share2, Globe } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-slate-50 border-t border-slate-200 pt-20 pb-10">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 mb-16">
          <div className="space-y-6">
            <a href="#" className="text-2xl font-bold text-slate-900 tracking-tighter flex items-center gap-2">
              <Code2 className="text-blue-600" size={32} />
              BrebesWeb
            </a>
            <p className="text-slate-600 leading-relaxed">
              Mitra digital terpercaya untuk UMKM dan Perusahaan di Brebes dan sekitarnya. Kami membangun website yang memberikan hasil nyata.
            </p>
            <div className="flex items-center gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-white border border-slate-200 shadow-sm flex items-center justify-center text-slate-600 hover:text-blue-600 hover:border-blue-300 transition-all">
                <Share2 size={20} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white border border-slate-200 shadow-sm flex items-center justify-center text-slate-600 hover:text-blue-600 hover:border-blue-300 transition-all">
                <MessageCircle size={20} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white border border-slate-200 shadow-sm flex items-center justify-center text-slate-600 hover:text-blue-600 hover:border-blue-300 transition-all">
                <Globe size={20} />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-slate-900 font-bold mb-6">Layanan</h3>
            <ul className="space-y-4">
              <li><a href="#" className="text-slate-600 hover:text-blue-600 transition-colors">Company Profile</a></li>
              <li><a href="#" className="text-slate-600 hover:text-blue-600 transition-colors">Toko Online</a></li>
              <li><a href="#" className="text-slate-600 hover:text-blue-600 transition-colors">Website UMKM</a></li>
              <li><a href="#" className="text-slate-600 hover:text-blue-600 transition-colors">Landing Page</a></li>
              <li><a href="#" className="text-slate-600 hover:text-blue-600 transition-colors">Undangan Digital</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-slate-900 font-bold mb-6">Informasi</h3>
            <ul className="space-y-4">
              <li><a href="#portfolio" className="text-slate-600 hover:text-blue-600 transition-colors">Portfolio</a></li>
              <li><a href="#why-us" className="text-slate-600 hover:text-blue-600 transition-colors">Keunggulan</a></li>
              <li><a href="#" className="text-slate-600 hover:text-blue-600 transition-colors">Syarat & Ketentuan</a></li>
              <li><a href="#" className="text-slate-600 hover:text-blue-600 transition-colors">Kebijakan Privasi</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-slate-900 font-bold mb-6">Kontak</h3>
            <ul className="space-y-4 mb-6">
              <li className="flex items-start gap-3">
                <MapPin className="text-blue-600 mt-1 shrink-0" size={20} />
                <a href="https://maps.app.goo.gl/jywuJXvhUzCwjFdDA" target="_blank" rel="noopener noreferrer" className="text-slate-600 hover:text-blue-600 transition-colors leading-relaxed">
                  Desa Mundu, Kec. Tanjung, Kab. Brebes
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="text-blue-600 shrink-0" size={20} />
                <span className="text-slate-600">081929442611</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="text-blue-600 shrink-0" size={20} />
                <span className="text-slate-600 truncate">salmanmiftah07@gmail.com</span>
              </li>
            </ul>

            <div className="rounded-xl overflow-hidden shadow-sm border border-slate-200 bg-white h-32 relative group">
              <iframe 
                src="https://maps.google.com/maps?q=-6.913242,108.832078&t=&z=15&ie=UTF8&iwloc=&output=embed" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen="" 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                title="Lokasi BrebesWeb"
                className="absolute inset-0 w-full h-full grayscale-[20%] group-hover:grayscale-0 transition-all duration-500"
              ></iframe>
              <a 
                href="https://maps.app.goo.gl/jywuJXvhUzCwjFdDA" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="absolute inset-0 z-10 flex items-center justify-center bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              >
                <span className="bg-white text-slate-900 px-4 py-2 rounded-full shadow-lg font-medium text-sm flex items-center gap-2 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300">
                  <MapPin size={16} className="text-blue-600" />
                  Buka Maps
                </span>
              </a>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-slate-200 text-center">
          <p className="text-slate-500">
            &copy; {new Date().getFullYear()} BrebesWeb. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
