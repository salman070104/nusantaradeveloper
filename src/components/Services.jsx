import { motion } from 'framer-motion';
import { MonitorSmartphone, ShoppingCart, Rocket, Code, Layout, TrendingUp } from 'lucide-react';

const services = [
  {
    icon: <MonitorSmartphone size={32} className="text-blue-500" />,
    title: 'Company Profile',
    description: 'Tingkatkan kredibilitas perusahaan dengan website profil profesional yang elegan.',
    color: 'from-blue-500 to-cyan-400'
  },
  {
    icon: <ShoppingCart size={32} className="text-violet-500" />,
    title: 'Toko Online',
    description: 'Jangkau lebih banyak pelanggan dengan website e-commerce yang aman dan mudah digunakan.',
    color: 'from-violet-500 to-purple-400'
  },
  {
    icon: <Rocket size={32} className="text-emerald-500" />,
    title: 'Landing Page',
    description: 'Tingkatkan konversi penjualan produk Anda dengan landing page yang dioptimasi.',
    color: 'from-emerald-500 to-teal-400'
  },
  {
    icon: <Layout size={32} className="text-orange-500" />,
    title: 'Custom Web App',
    description: 'Sistem informasi dan aplikasi web khusus sesuai kebutuhan spesifik bisnis Anda.',
    color: 'from-orange-500 to-amber-400'
  },
  {
    icon: <Code size={32} className="text-rose-500" />,
    title: 'Redesign Website',
    description: 'Perbarui tampilan website lama Anda menjadi lebih modern dan responsif.',
    color: 'from-pink-500 to-rose-400'
  },
  {
    icon: <TrendingUp size={32} className="text-indigo-500" />,
    title: 'SEO Optimization',
    description: 'Tingkatkan peringkat website Anda di Google untuk mendapatkan lebih banyak trafik organik.',
    color: 'from-indigo-500 to-blue-400'
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.5 }
  }
};

const Services = () => {
  return (
    <section id="services" className="py-24 bg-slate-50 relative">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold mb-6 text-slate-900"
          >
            Layanan <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-violet-600">Terbaik</span> Kami
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-slate-600 text-lg"
          >
            Solusi digital komprehensif untuk mengembangkan bisnis Anda di era modern. Kami membuat lebih dari sekadar website.
          </motion.p>
        </div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="group relative p-8 rounded-2xl bg-white border border-slate-200 shadow-sm hover:shadow-lg hover:border-blue-500/30 transition-all overflow-hidden"
            >
              <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${service.color} opacity-10 rounded-bl-full transition-opacity group-hover:opacity-20`} />
              
              <div className="mb-6 inline-block p-4 rounded-xl bg-slate-50 border border-slate-100 transition-transform group-hover:scale-110 relative z-10">
                {service.icon}
              </div>
              
              <h3 className="text-xl font-bold mb-3 text-slate-900 relative z-10">{service.title}</h3>
              <p className="text-slate-600 relative z-10 leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
