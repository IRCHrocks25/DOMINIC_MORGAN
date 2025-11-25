import { motion } from 'motion/react';
import { Mail, Phone, Linkedin, Twitter, Facebook, Instagram, Youtube } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

export default function Footer() {
  return (
    <footer className="bg-[#F6F7F9] pt-12 sm:pt-16 pb-6 sm:pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10 lg:gap-12 mb-8 sm:mb-10">
          
          {/* Logo & Tagline */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 bg-[#FF6A00] rounded-lg flex items-center justify-center">
                <div className="text-white text-xl">R</div>
              </div>
              <div>
                <div className="text-xl tracking-tight text-[#2C2C2C]">Rebel</div>
                <div className="text-sm text-[#FF6A00] tracking-wide">COACHING</div>
              </div>
            </div>
            <p className="text-[#2C2C2C] text-sm">
              Live Your Truth. Lead From Within.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="text-[#FF6A00] mb-4 text-sm uppercase tracking-wide">Navigation</h3>
            <ul className="space-y-2">
              {['Home', 'About Dominic', 'Services', 'Results', 'Contact'].map((link) => (
                <li key={link}>
                  <a
                    href={`#${link.toLowerCase().replace(' ', '-')}`}
                    className="text-[#2C2C2C]/70 hover:text-[#FF6A00] transition-colors duration-300 text-sm"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-[#FF6A00] mb-4 text-sm uppercase tracking-wide">Contact</h3>
            <ul className="space-y-2">
              <li>
                <a href="mailto:ignite@rebel-coaching.ch" className="text-[#2C2C2C]/70 hover:text-[#FF6A00] transition-colors duration-300 text-sm">
                  ignite@rebel-coaching.ch
                </a>
              </li>
              <li>
                <a href="mailto:ignite@rebel-coaching.com" className="text-[#2C2C2C]/70 hover:text-[#FF6A00] transition-colors duration-300 text-sm">
                  ignite@rebel-coaching.com
                </a>
              </li>
              <li>
                <a href="tel:+41768242608" className="text-[#2C2C2C]/70 hover:text-[#FF6A00] transition-colors duration-300 text-sm">
                  +41 76 824 26 08
                </a>
              </li>
            </ul>
          </div>

          {/* Connect With Me */}
          <div>
            <h3 className="text-[#FF6A00] mb-4 text-sm uppercase tracking-wide">Connect With Me</h3>
            <div className="flex gap-2">
              {[
                { icon: Facebook, href: '#', bg: '#1877F2' },
                { icon: Instagram, href: '#', bg: '#E4405F' },
                { icon: Linkedin, href: '#', bg: '#0A66C2' },
                { icon: Youtube, href: '#', bg: '#FF0000' },
                { icon: Twitter, href: '#', bg: '#1DA1F2' },
                { icon: Mail, href: '#', bg: '#EA4335' },
              ].map((social, index) => {
                const Icon = social.icon;
                return (
                  <motion.a
                    key={index}
                    href={social.href}
                    whileHover={{ scale: 1.1, y: -2 }}
                    transition={{ duration: 0.2 }}
                    className="w-9 h-9 rounded-full flex items-center justify-center transition-all duration-300"
                    style={{ backgroundColor: social.bg }}
                  >
                    <Icon className="w-4 h-4 text-white" />
                  </motion.a>
                );
              })}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-6 border-t border-[#2C2C2C]/10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-3">
            <p className="text-xs text-center md:text-left">
              <span className="text-[#FF6A00] font-bold">© 2025 Dominic Morgenthaler.</span>{' '}
              <span className="text-[#2C2C2C]">All rights reserved.</span>
            </p>
            <div className="flex flex-wrap justify-center gap-6 text-xs">
              <a href="#" className="text-[#2C2C2C]/60 hover:text-[#FF6A00] transition-colors duration-300">
                Privacy Policy
              </a>
              <a href="#" className="text-[#2C2C2C]/60 hover:text-[#FF6A00] transition-colors duration-300">
                Terms of Service
              </a>
            </div>
            <p className="text-[#2C2C2C]/60 text-xs text-center md:text-right">
              Designed & Developed by <span className="text-[#FF6A00] hover:underline cursor-pointer">KATALYST.CRM</span>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}