import { Code2, Mail, Phone, MapPin, MessageCircle, Share2, Globe } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-slate-50 border-t border-slate-200 pt-20 pb-10">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
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
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="text-blue-600 mt-1 shrink-0" size={20} />
                <span className="text-slate-600 leading-relaxed">Desa Mundu, Kec. Tanjung, Kab. Brebes</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="text-blue-600 shrink-0" size={20} />
                <span className="text-slate-600">081929442611</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="text-blue-600 shrink-0" size={20} />
                <span className="text-slate-600">salmanmiftah07@gmail.com</span>
              </li>
            </ul>
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
