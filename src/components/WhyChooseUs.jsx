import { motion } from 'framer-motion';
import { CheckCircle2 } from 'lucide-react';

const WhyChooseUs = () => {
  const features = [
    'Desain Modern & Profesional',
    'Responsive di Semua Perangkat',
    'Optimasi Kecepatan Loading',
    'Dukungan SEO Basic',
    'Server & Hosting Stabil',
    'Garansi Support & Maintenance',
  ];

  return (
    <section id="why-us" className="py-24 bg-white relative overflow-hidden">
      {/* Decorative background element */}
      <div className="hidden lg:block absolute top-0 right-0 w-1/2 h-full bg-slate-50 -skew-x-12 transform origin-top-right -z-10"></div>
      
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-slate-900 mb-6">
              Mengapa Memilih Kami?
            </h2>
            <p className="text-slate-600 text-base md:text-lg mb-8 leading-relaxed">
              Kami adalah tim developer lokal yang memahami kebutuhan bisnis di Brebes. Kami tidak hanya membuat website, tapi membangun aset digital yang menghasilkan konversi untuk bisnis Anda.
            </p>
            
            <div className="grid sm:grid-cols-2 gap-4">
              {features.map((feature, index) => (
                <div key={index} className="flex items-center gap-3">
                  <CheckCircle2 className="text-blue-500" size={24} />
                  <span className="text-slate-700 font-medium">{feature}</span>
                </div>
              ))}
            </div>
            
            <div className="mt-10">
              <a 
                href="https://wa.me/6281929442611?text=Halo%20BrebesWeb,%20saya%20tertarik%20untuk%20membuat%20website" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="inline-block w-full sm:w-auto text-center bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-xl font-semibold transition-colors shadow-lg shadow-blue-500/20"
              >
                Hubungi Kami Sekarang
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-violet-500 rounded-3xl blur-[80px] opacity-20"></div>
            <div className="relative bg-white/50 backdrop-blur-xl border border-slate-100 p-8 rounded-3xl shadow-xl">
              <div className="space-y-6">
              {[
                { title: 'Desain Modern & Responsif', desc: 'Tampil sempurna di HP, tablet, maupun desktop.' },
                { title: 'Cepat & SEO Friendly', desc: 'Website ringan dan mudah ditemukan di Google.' },
                { title: 'Support & Maintenance', desc: 'Bantuan teknis kapanpun Anda membutuhkannya.' }
              ].map((item, i) => (
                <div key={i} className="flex gap-4 p-4 rounded-2xl bg-white border border-slate-200 shadow-sm">
                  <div className="mt-1 w-10 h-10 md:w-8 md:h-8 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center shrink-0">
                    <CheckCircle2 size={18} />
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900 mb-1">{item.title}</h3>
                    <p className="text-slate-600 text-sm leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
