import { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { Button } from './ui/button';
import { Menu, X, Linkedin, Facebook, Youtube } from 'lucide-react';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      {/* Top Orange Bar */}
      <div className="bg-[#FF6A00] text-white py-2 sm:py-2.5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between text-xs sm:text-sm">
            <div className="flex items-center gap-3 sm:gap-6">
              <span className="truncate">+41 79 824 25 08</span>
              <span className="hidden md:block">Steffisburg, Berne, Switzerland</span>
            </div>
            <div className="flex items-center gap-2 sm:gap-3">
              <a href="#" className="hover:opacity-80 transition-opacity touch-manipulation" aria-label="LinkedIn">
                <Linkedin className="w-4 h-4" />
              </a>
              <a href="#" className="hover:opacity-80 transition-opacity touch-manipulation" aria-label="Facebook">
                <Facebook className="w-4 h-4" />
              </a>
              <a href="#" className="hover:opacity-80 transition-opacity touch-manipulation" aria-label="YouTube">
                <Youtube className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className={`bg-white shadow-sm sticky top-0 z-50 transition-all duration-300`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 sm:h-20">
            {/* Logo */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="flex items-center gap-2"
            >
              <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="4" y="4" width="10" height="10" fill="#FF6A00"/>
                <rect x="18" y="4" width="10" height="10" fill="#FF6A00"/>
                <rect x="11" y="11" width="10" height="10" fill="#FF6A00"/>
                <rect x="4" y="18" width="10" height="10" fill="#FF6A00"/>
                <rect x="18" y="18" width="10" height="10" fill="#FF6A00"/>
              </svg>
              <span className="text-[#2C2C2C] text-xl sm:text-2xl" style={{ fontFamily: 'Georgia, serif', fontStyle: 'italic' }}>Rebel</span>
              <span className="text-[#2C2C2C]/40 text-xs tracking-wider hidden sm:inline">COACHING</span>
            </motion.div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-6 lg:space-x-8">
              <a href="#home" className="text-[#2C2C2C] hover:text-[#FF6A00] transition-colors duration-300 text-sm lg:text-base">
                Home
              </a>
              <a href="#about" className="text-[#2C2C2C] hover:text-[#FF6A00] transition-colors duration-300 text-sm lg:text-base">
                About Dominic
              </a>
              <a href="#services" className="text-[#2C2C2C] hover:text-[#FF6A00] transition-colors duration-300 text-sm lg:text-base">
                Services
              </a>
              <a href="#results" className="text-[#2C2C2C] hover:text-[#FF6A00] transition-colors duration-300 text-sm lg:text-base">
                Results
              </a>
              <a href="#contact" className="text-[#2C2C2C] hover:text-[#FF6A00] transition-colors duration-300 text-sm lg:text-base">
                Contact
              </a>
            </div>

            {/* Mobile Menu Button - Larger touch target */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden text-[#2C2C2C] p-3 -mr-3 touch-manipulation"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-t border-gray-200"
          >
            <div className="px-4 py-6 space-y-1">
              <a 
                href="#home" 
                className="block text-[#2C2C2C] hover:text-[#FF6A00] hover:bg-[#FF6A00]/5 transition-colors px-4 py-3 rounded-lg text-base touch-manipulation"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Home
              </a>
              <a 
                href="#about" 
                className="block text-[#2C2C2C] hover:text-[#FF6A00] hover:bg-[#FF6A00]/5 transition-colors px-4 py-3 rounded-lg text-base touch-manipulation"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                About Dominic
              </a>
              <a 
                href="#services" 
                className="block text-[#2C2C2C] hover:text-[#FF6A00] hover:bg-[#FF6A00]/5 transition-colors px-4 py-3 rounded-lg text-base touch-manipulation"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Services
              </a>
              <a 
                href="#results" 
                className="block text-[#2C2C2C] hover:text-[#FF6A00] hover:bg-[#FF6A00]/5 transition-colors px-4 py-3 rounded-lg text-base touch-manipulation"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Results
              </a>
              <a 
                href="#contact" 
                className="block text-[#2C2C2C] hover:text-[#FF6A00] hover:bg-[#FF6A00]/5 transition-colors px-4 py-3 rounded-lg text-base touch-manipulation"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Contact
              </a>
            </div>
          </motion.div>
        )}
      </motion.nav>
    </>
  );
}