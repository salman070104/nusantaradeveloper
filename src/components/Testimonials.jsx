import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Star, User, MessageSquarePlus, X } from 'lucide-react';

const initialReviews = [
  {
    id: 1,
    name: "Budi Santoso",
    role: "Pemilik Grosir Telur Asin Brebes",
    rating: 5,
    comment: "Sangat puas dengan hasilnya! Website toko saya jadi terlihat sangat profesional dan rapi. Penjualan dari luar kota juga meningkat drastis setelah punya website sendiri.",
    date: "12 Mei 2024"
  },
  {
    id: 2,
    name: "Siti Aminah",
    role: "Distributor Bawang Merah",
    rating: 5,
    comment: "Pengerjaannya cepat, harganya sangat terjangkau untuk UMKM. Adminnya juga ramah dan sabar banget mengajari saya cara update produk. Rekomen banget pokoknya!",
    date: "28 April 2024"
  },
  {
    id: 3,
    name: "Rizal Fahmi",
    role: "Founder Cafe & Resto",
    rating: 4,
    comment: "Desain websitenya kekinian dan elegan. Fitur menunya juga responsif kalau dibuka di HP. Sedikit masukan mungkin bisa tambah integrasi kasir kedepannya.",
    date: "10 April 2024"
  }
];

const Testimonials = () => {
  const [reviews, setReviews] = useState(initialReviews);
  const [showForm, setShowForm] = useState(false);
  const [newReview, setNewReview] = useState({ name: '', role: '', rating: 5, comment: '' });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!newReview.name || !newReview.comment) return;

    const reviewToAdd = {
      id: Date.now(),
      ...newReview,
      date: new Intl.DateTimeFormat('id-ID', { day: 'numeric', month: 'long', year: 'numeric' }).format(new Date())
    };

    // Tambah ulasan baru ke bagian atas list
    setReviews([reviewToAdd, ...reviews]);
    
    // Reset form dan tutup modal
    setNewReview({ name: '', role: '', rating: 5, comment: '' });
    setShowForm(false);
  };

  const renderStars = (rating, interactive = false, onRate = null) => {
    return (
      <div className="flex gap-1">
        {[1, 2, 3, 4, 5].map((star) => (
          <Star
            key={star}
            size={interactive ? 28 : 14}
            className={`${
              star <= rating ? 'fill-yellow-400 text-yellow-400' : 'fill-slate-200 text-slate-200'
            } ${interactive ? 'cursor-pointer hover:scale-110 transition-transform' : ''}`}
            onClick={() => interactive && onRate && onRate(star)}
          />
        ))}
      </div>
    );
  };

  return (
    <section id="reviews" className="py-24 bg-white relative">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-4"
          >
            Apa Kata Klien Kami?
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-slate-600 max-w-2xl mx-auto mb-8 text-lg"
          >
            Kepercayaan Anda adalah prioritas kami. Lihat bagaimana kami membantu bisnis lokal tumbuh dengan solusi digital terbaik.
          </motion.p>
          
          <motion.button
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            onClick={() => setShowForm(true)}
            className="inline-flex items-center gap-2 bg-slate-900 text-white px-6 py-3.5 rounded-full font-semibold hover:bg-slate-800 transition-colors shadow-lg hover:-translate-y-0.5 transform duration-200"
          >
            <MessageSquarePlus size={20} />
            Tulis Ulasan Anda
          </motion.button>
        </div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 md:gap-6 gap-4">
          <AnimatePresence>
            {reviews.map((review, index) => (
              <motion.div
                key={review.id}
                initial={{ opacity: 0, scale: 0.95, y: 10 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ duration: 0.3, delay: Math.min(index * 0.05, 0.3) }}
                className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200 flex flex-col h-full hover:shadow-md transition-shadow relative"
              >
                <div className="flex justify-between items-start mb-4">
                  {renderStars(review.rating)}
                  <div className="text-slate-200 opacity-60 text-5xl font-serif leading-none mt-[-10px]">"</div>
                </div>
                
                <p className="text-slate-600 mb-6 flex-1 text-sm leading-relaxed">"{review.comment}"</p>
                
                <div className="flex items-center gap-3 pt-4 border-t border-slate-100">
                  <div className="w-10 h-10 bg-gradient-to-br from-slate-800 to-slate-900 rounded-full flex items-center justify-center text-white shadow-sm shrink-0">
                    <User size={16} />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 text-sm leading-tight">{review.name}</h4>
                    <p className="text-xs text-slate-500">{review.role || 'Klien BrebesWeb'}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>

      {/* Review Modal Form */}
      <AnimatePresence>
        {showForm && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setShowForm(false)}
              className="absolute inset-0 bg-slate-900/40 backdrop-blur-sm"
            ></motion.div>
            
            <motion.div 
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="bg-white rounded-[2rem] w-full max-w-lg p-6 sm:p-8 relative z-10 shadow-2xl"
            >
              <button 
                onClick={() => setShowForm(false)}
                className="absolute top-6 right-6 text-slate-400 hover:text-slate-700 transition-colors bg-slate-100 hover:bg-slate-200 p-2 rounded-full"
              >
                <X size={20} />
              </button>
              
              <div className="mb-8">
                <h3 className="text-2xl font-extrabold text-slate-900 mb-2">Berikan Ulasan</h3>
                <p className="text-slate-500 text-sm">Bagaimana pengalaman Anda menggunakan layanan pembuatan website kami?</p>
              </div>
              
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label className="block text-sm font-bold text-slate-700 mb-3">Penilaian Anda</label>
                  <div className="bg-slate-50 p-4 rounded-xl border border-slate-100 inline-flex">
                    {renderStars(newReview.rating, true, (rating) => setNewReview({...newReview, rating}))}
                  </div>
                </div>
                
                <div>
                  <label htmlFor="name" className="block text-sm font-bold text-slate-700 mb-2">Nama Lengkap <span className="text-red-500">*</span></label>
                  <input 
                    type="text" 
                    id="name"
                    required
                    value={newReview.name}
                    onChange={(e) => setNewReview({...newReview, name: e.target.value})}
                    className="w-full px-4 py-3 border border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all bg-slate-50 focus:bg-white"
                    placeholder="Contoh: Budi Santoso"
                  />
                </div>
                
                <div>
                  <label htmlFor="role" className="block text-sm font-bold text-slate-700 mb-2">Asal Bisnis/Instansi <span className="text-slate-400 font-normal">(Opsional)</span></label>
                  <input 
                    type="text" 
                    id="role"
                    value={newReview.role}
                    onChange={(e) => setNewReview({...newReview, role: e.target.value})}
                    className="w-full px-4 py-3 border border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all bg-slate-50 focus:bg-white"
                    placeholder="Contoh: Toko Oleh-Oleh Brebes"
                  />
                </div>
                
                <div>
                  <label htmlFor="comment" className="block text-sm font-bold text-slate-700 mb-2">Ulasan Anda <span className="text-red-500">*</span></label>
                  <textarea 
                    id="comment"
                    required
                    rows="4"
                    value={newReview.comment}
                    onChange={(e) => setNewReview({...newReview, comment: e.target.value})}
                    className="w-full px-4 py-3 border border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all resize-none bg-slate-50 focus:bg-white"
                    placeholder="Ceritakan kepuasan Anda tentang hasil website, pelayanan, dsb..."
                  ></textarea>
                </div>
                
                <button 
                  type="submit"
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 rounded-xl transition-all shadow-lg shadow-blue-200/50 mt-6 transform hover:-translate-y-0.5"
                >
                  Kirim Ulasan Sekarang
                </button>
              </form>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Testimonials;
