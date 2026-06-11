import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Menu, X, Code2, ChevronDown } from 'lucide-react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Beranda', href: '#home' },
    { name: 'Layanan', href: '#services' },
    { name: 'Portofolio', href: '#portfolio' },
    { name: 'Keunggulan', href: '#why-us' },
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white/80 backdrop-blur-md border-b border-slate-200 shadow-sm py-4' : 'bg-transparent py-6'
    }`}>
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="flex items-center justify-between">
          <a href="#" className="text-lg md:text-xl font-black text-slate-900 tracking-tight flex items-center gap-3">
            <img 
              src="/LOGO ND.png" 
              alt="Nusantara Developer Logo" 
              className="w-10 h-10 md:w-12 md:h-12 object-cover rounded-xl shadow-sm border border-slate-200"
            />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-slate-900 to-slate-600">
              NUSANTARA DEVELOPER
            </span>
          </a>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            <ul className="flex items-center gap-8">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-slate-600 hover:text-blue-600 font-medium transition-colors text-sm"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
              <li className="relative group">
                <button className="flex items-center gap-1 text-slate-600 hover:text-blue-600 font-medium transition-colors text-sm">
                  Kontak <ChevronDown size={16} />
                </button>
                <div className="absolute top-full right-0 mt-4 w-56 bg-white border border-slate-200 rounded-xl shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 py-2">
                  <a
                    href="https://wa.me/6281929442611"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex flex-col px-4 py-2 hover:bg-slate-50 transition-colors"
                  >
                    <span className="text-sm font-medium text-slate-800">Admin 1</span>
                    <span className="text-xs text-slate-500">0819-2944-2611</span>
                  </a>
                  <a
                    href="https://wa.me/6287816548545"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex flex-col px-4 py-2 hover:bg-slate-50 transition-colors"
                  >
                    <span className="text-sm font-medium text-slate-800">Admin 2</span>
                    <span className="text-xs text-slate-500">+62 878-1654-8545</span>
                  </a>
                </div>
              </li>
            </ul>
            <a
              href="https://wa.me/6281929442611?text=Halo%20BrebesWeb,%20saya%20mau%20konsultasi%20pembuatan%20website"
              target="_blank" 
              rel="noopener noreferrer" 
              className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2.5 rounded-full font-medium transition-all transform hover:scale-105 active:scale-95 shadow-lg"
            >
              Konsultasi Gratis
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-slate-600 hover:text-blue-600 transition-colors"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Nav */}
        {isOpen && (
          <div className="md:hidden mt-4 p-4 rounded-2xl bg-white border border-slate-200 shadow-xl">
            <ul className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className="block text-slate-600 hover:text-blue-600 font-medium transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
              
              {/* Mobile Contact Menu */}
              <li className="flex flex-col gap-2 pt-2 border-t border-slate-100">
                <span className="text-sm font-semibold text-slate-800">Kontak:</span>
                <a
                  href="https://wa.me/6281929442611"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-slate-600 hover:text-blue-600 transition-colors text-sm pl-2"
                >
                  Admin 1 (0819-2944-2611)
                </a>
                <a
                  href="https://wa.me/6287816548545"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-slate-600 hover:text-blue-600 transition-colors text-sm pl-2"
                >
                  Admin 2 (+62 878-1654-8545)
                </a>
              </li>
              <li>
                <a
                  href="https://wa.me/6281929442611?text=Halo%20BrebesWeb,%20saya%20mau%20konsultasi%20pembuatan%20website"
                  target="_blank" 
                  rel="noopener noreferrer" 
                  onClick={() => setIsOpen(false)}
                  className="block text-center bg-blue-600 hover:bg-blue-700 text-white px-4 py-3 rounded-lg font-medium transition-colors mt-2"
                >
                  Konsultasi Gratis
                </a>
              </li>
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
