import { motion } from 'motion/react';
import { Linkedin, Twitter, Facebook, Instagram, Youtube } from 'lucide-react';

// Pinterest icon component
const Pinterest = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 2C6.48 2 2 6.48 2 12c0 4.42 2.75 8.2 6.64 9.72-.09-.79-.17-2.01.03-2.87.18-.78 1.16-4.97 1.16-4.97s-.3-.6-.3-1.48c0-1.38.8-2.41 1.8-2.41.85 0 1.26.63 1.26 1.39 0 .85-.54 2.12-.82 3.3-.23.98.49 1.78 1.46 1.78 1.75 0 3.1-1.85 3.1-4.52 0-2.36-1.7-4.01-4.13-4.01-2.81 0-4.46 2.11-4.46 4.29 0 .84.32 1.74.73 2.28.08.1.09.19.07.29l-.28 1.13c-.04.16-.14.2-.33.12-1.24-.58-2.02-2.4-2.02-3.86 0-3.15 2.29-6.05 6.6-6.05 3.47 0 6.16 2.47 6.16 5.77 0 3.44-2.17 6.21-5.18 6.21-1.01 0-1.96-.53-2.29-1.23l-.62 2.37c-.22.87-.82 1.96-1.22 2.63.92.28 1.9.44 2.92.44 5.52 0 10-4.48 10-10S17.52 2 12 2z"/>
  </svg>
);

export default function Footer() {
  return (
    <footer className="w-full bg-white py-16">
      {/* Single Layout Authority Container */}
      <div className="max-w-[1200px] mx-auto px-8">
        {/* Primary Desktop Row - Two Children Only */}
        <div className="flex flex-row items-start justify-between mb-8">
          
          {/* LEFT SECTION - Passive Block (Slightly Inset from Left) */}
          <div className="flex flex-col items-center justify-center pl-8">
            <img 
              src="/images/morgan_logo.png"
              alt="Rebel Coaching Logo"
              className="mb-4"
              style={{ maxHeight: '250px', objectFit: 'contain' }}
            />
            <p className="text-[#333] text-center text-xl font-medium">
              Live Your Truth. Lead From Within.
            </p>
          </div>

          {/* RIGHT SECTION - Active Horizontal Layout System (Evenly Spaced Columns) */}
          <div style={{ display: 'flex', flexDirection: 'row', gap: '70px' }}>
            {/* Navigation */}
            <div>
              <h3 className="text-[#FF6A00] mb-3 font-medium text-base">
                Navigation
              </h3>
              <ul className="space-y-2">
                {['Home', 'About Dominic', 'Services', 'Results', 'Contact'].map((link) => (
                  <li key={link}>
                    <a
                      href={`#${link.toLowerCase().replace(' ', '-')}`}
                      className="text-[#333] hover:text-[#FF6A00] transition-colors duration-300 text-sm"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h3 className="text-[#FF6A00] mb-3 font-medium text-base">
                Contact
              </h3>
              <ul className="space-y-2">
                <li>
                  <a 
                    href="mailto:ignite@rebel-coaching.ch" 
                    className="text-[#333] hover:text-[#FF6A00] transition-colors duration-300 text-sm"
                  >
                    ignite@rebel-coaching.ch
                  </a>
                </li>
                <li>
                  <a 
                    href="mailto:ignite@rebel-coaching.com" 
                    className="text-[#333] hover:text-[#FF6A00] transition-colors duration-300 text-sm"
                  >
                    ignite@rebel-coaching.com
                  </a>
                </li>
                <li>
                  <a 
                    href="tel:+41768242608" 
                    className="text-[#333] hover:text-[#FF6A00] transition-colors duration-300 text-sm"
                  >
                    +41 76 824 26 08
                  </a>
                </li>
              </ul>
            </div>

            {/* Connect With Me */}
            <div>
              <h3 className="text-[#FF6A00] mb-3 font-medium text-base">
                Connect With Me
              </h3>
              <div className="flex gap-3 flex-wrap">
                {[
                  { icon: Facebook, href: '#', bg: '#1877F2', name: 'Facebook' },
                  { icon: Linkedin, href: '#', bg: '#0A66C2', name: 'LinkedIn' },
                  { icon: Instagram, href: '#', bg: '#E4405F', name: 'Instagram' },
                  { icon: Pinterest, href: '#', bg: '#BD081C', name: 'Pinterest' },
                  { icon: Twitter, href: '#', bg: '#1DA1F2', name: 'X' },
                  { icon: Youtube, href: '#', bg: '#FF0000', name: 'YouTube' },
                ].map((social, index) => {
                  const Icon = social.icon;
                  return (
                    <motion.a
                      key={index}
                      href={social.href}
                      whileHover={{ scale: 1.1 }}
                      transition={{ duration: 0.2 }}
                      className="rounded-full flex items-center justify-center transition-all duration-300 w-7 h-7"
                      style={{ backgroundColor: social.bg }}
                    >
                      <Icon className="w-4 h-4 text-white" />
                    </motion.a>
                  );
                })}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar - Single Horizontal Row */}
        <div 
          className="pt-4"
          style={{
            borderTop: '1px solid rgba(0, 0, 0, 0.08)',
            marginTop: '12px',
          }}
        >
          <div className="flex flex-col md:flex-row justify-between items-center gap-3">
            <p 
              className="text-[#666]"
              style={{ fontSize: '13px' }}
            >
              © 2025 Dominic Morgenthaler. All rights reserved.
            </p>
            <div className="flex gap-6" style={{ fontSize: '13px' }}>
              <a href="#" className="text-[#666] hover:text-[#FF6A00] transition-colors duration-300">
                Privacy Policy
              </a>
              <a href="#" className="text-[#666] hover:text-[#FF6A00] transition-colors duration-300">
                Terms of Service
              </a>
            </div>
            <p 
              className="text-[#666]"
              style={{ fontSize: '13px' }}
            >
              Designed & Developed by <span className="text-[#FF6A00]">KATALYST CRM</span>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}