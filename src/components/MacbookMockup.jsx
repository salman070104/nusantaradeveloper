import { motion } from 'framer-motion';

const MacbookMockup = () => {
  return (
    <motion.div 
      initial={{ y: 0 }}
      animate={{ y: [-10, 10, -10] }}
      transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
      className="relative w-full max-w-[650px] mx-auto z-20 mt-8 lg:mt-0"
    >
      {/* 3D Transform Container */}
      <div 
        className="relative rounded-[2rem] transition-all duration-700 ease-out hover:!transform-none cursor-pointer drop-shadow-2xl"
        style={{ transform: 'perspective(1200px) rotateX(10deg) rotateY(-12deg) rotateZ(2deg)' }}
      >
        
        {/* Macbook Screen Lid */}
        <div className="relative bg-[#151515] p-2.5 sm:p-3.5 rounded-t-[1.5rem] rounded-b-lg shadow-[0_0_15px_rgba(0,0,0,0.5)_inset,0_20px_40px_-10px_rgba(0,0,0,0.5)] border-[1px] border-[#333] w-full aspect-[16/10] flex flex-col">
          
          {/* Top Camera Notch (M2 style) */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-6 bg-[#151515] rounded-b-xl z-30 flex items-center justify-center">
            <div className="w-2 h-2 rounded-full bg-black border border-[#222] flex items-center justify-center shadow-inner">
              <div className="w-1 h-1 rounded-full bg-blue-600/50 blur-[0.5px]"></div>
            </div>
          </div>
          
          {/* The Screen / Display */}
          <div className="relative w-full h-full bg-slate-50 rounded-lg overflow-hidden border-[1.5px] border-[#0a0a0a] flex flex-col">
            
            {/* Browser Header */}
            <div className="h-9 bg-[#f1f5f9] border-b border-slate-200 flex items-center px-4 gap-2.5 z-10 shrink-0">
              <div className="w-3 h-3 rounded-full bg-[#ff5f56] border border-[#e0443e]"></div>
              <div className="w-3 h-3 rounded-full bg-[#ffbd2e] border border-[#dea123]"></div>
              <div className="w-3 h-3 rounded-full bg-[#27c93f] border border-[#1aab29]"></div>
              
              <div className="ml-4 flex-1 max-w-[300px] mx-auto bg-white px-3 py-1.5 text-[11px] text-slate-500 rounded-md truncate border border-slate-200 shadow-sm flex items-center justify-center gap-1.5">
                <span className="opacity-60">🔒</span> brebeswebdev.com
              </div>
            </div>
            
            {/* Screen Content - Mini Website */}
            <div className="flex-1 overflow-hidden relative bg-slate-50 w-full h-full">
               <div className="absolute inset-0 p-5 sm:p-8 flex flex-col gap-4 sm:gap-6 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_14px]">
                  
                  {/* Hero Section of Mini Website */}
                  <div className="w-full h-36 sm:h-48 bg-gradient-to-br from-blue-600 via-indigo-600 to-violet-600 rounded-2xl shadow-xl flex flex-col items-center justify-center p-6 text-center border border-indigo-500/30 relative overflow-hidden">
                    <div className="absolute inset-0 bg-white/5 [mask-image:linear-gradient(to_bottom_right,white,transparent)]"></div>
                    <span className="text-white text-3xl sm:text-5xl font-black tracking-tight mb-2 sm:mb-3 drop-shadow-md">UMKM GO DIGITAL</span>
                    <span className="text-blue-100/90 text-sm sm:text-base font-medium max-w-sm">Solusi Website Modern & Responsif untuk Bisnis Anda</span>
                    <div className="mt-4 px-6 py-2 bg-white text-blue-600 font-bold text-xs rounded-full shadow-lg">Mulai Sekarang</div>
                  </div>
                  
                  {/* Feature Cards of Mini Website */}
                  <div className="flex gap-4 sm:gap-6">
                    {[
                      { color: "bg-blue-100", title: "bg-slate-200", w: "w-3/4" },
                      { color: "bg-violet-100", title: "bg-slate-200", w: "w-5/6" },
                      { color: "bg-emerald-100", title: "bg-slate-200", w: "w-2/3" }
                    ].map((item, i) => (
                      <div key={i} className="flex-1 bg-white rounded-xl shadow-md border border-slate-100/60 p-4 sm:p-5 flex flex-col gap-3 transform hover:-translate-y-1 transition-transform">
                        <div className={`w-10 h-10 rounded-lg ${item.color} mb-1 flex items-center justify-center`}>
                          <div className="w-5 h-5 bg-white/50 rounded-md"></div>
                        </div>
                        <div className="w-full h-2.5 bg-slate-200 rounded-full"></div>
                        <div className={`${item.w} h-2.5 bg-slate-100 rounded-full`}></div>
                      </div>
                    ))}
                  </div>
               </div>
            </div>
            
            {/* Glossy Screen Reflection Overlay */}
            <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-white/20 pointer-events-none z-20"></div>
          </div>
          
          {/* Macbook Bottom Bezel Logo Area */}
          <div className="h-5 sm:h-7 flex items-center justify-center text-[9px] sm:text-[11px] text-slate-300/80 font-semibold tracking-[0.2em] mt-1.5 pb-1">
            MacBook Air
          </div>
        </div>
        
        {/* Macbook Base/Keyboard Area (Edge view) */}
        <div className="relative w-full h-3 sm:h-4 bg-gradient-to-b from-[#d1d5db] to-[#9ca3af] rounded-b-2xl border-t border-[#f3f4f6] flex justify-center shadow-[0_10px_20px_rgba(0,0,0,0.3)] z-10">
          {/* Thumb groove */}
          <div className="w-24 h-1.5 sm:h-2 bg-[#6b7280] rounded-b-xl shadow-inner mt-px opacity-60"></div>
        </div>
        
      </div>
      
      {/* Dynamic Drop shadow on floor */}
      <motion.div 
        animate={{ scale: [1, 0.95, 1], opacity: [0.3, 0.2, 0.3] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -bottom-12 left-1/2 -translate-x-1/2 w-4/5 h-8 bg-black blur-2xl rounded-full z-0"
      ></motion.div>
    </motion.div>
  );
};

export default MacbookMockup;
