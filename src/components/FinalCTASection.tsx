import { motion, useInView } from 'motion/react';
import { useRef } from 'react';

export default function FinalCTASection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <section 
      ref={ref} 
      id="contact" 
      className="relative w-full flex items-center justify-center text-center min-h-[400px] sm:min-h-[520px] lg:min-h-[580px] py-12 sm:py-16 lg:py-[90px] overflow-x-hidden"
      style={{ backgroundColor: '#0A1A35' }}
    >
      {/* Dark Navy Base with Subtle Bright Blue Glow at Bottom Center (behind buttons) */}
      <div 
        className="absolute inset-0"
        style={{
          background: 'radial-gradient(ellipse 800px 400px at center 75%, rgba(37, 99, 235, 0.25) 0%, rgba(14, 32, 67, 0.95) 50%, #0A1A35 100%)',
        }}
      />

      <div className="max-w-[900px] mx-auto px-5 sm:px-6 lg:px-8 relative z-10 w-full min-w-0">
        {/* Main Headline */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative mb-6"
          style={{ position: 'relative' }}
        >
          {/* Bright Blue Glow at Bottom Center */}
          <div 
            className="absolute left-1/2 pointer-events-none"
            style={{
              transform: 'translateX(-50%)',
              bottom: '-10px',
              width: '400px',
              height: '100px',
              background: 'radial-gradient(ellipse, rgba(59, 130, 246, 0.6) 0%, rgba(37, 99, 235, 0.4) 30%, transparent 70%)',
              filter: 'blur(30px)',
              zIndex: 0,
            }}
          />
          <h2
            className="text-[#F6F7F9] text-center relative max-w-full break-words"
            style={{
              fontSize: 'clamp(26px, 7vw, 60px)',
              fontWeight: 400,
              lineHeight: 1.15,
              letterSpacing: '-0.5px',
              marginLeft: 'auto',
              marginRight: 'auto',
              zIndex: 1,
            }}
          >
            Your Time Is Now. Ignite Your Rebel Momentum.
          </h2>
        </motion.div>

        {/* Supporting Paragraph Block - Constrained width, brighter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mb-8 max-w-[620px] mx-auto min-w-0"
        >
          <p
            className="text-white text-sm sm:text-base lg:text-lg leading-relaxed break-words"
            style={{ opacity: 0.92 }}
          >
            No more drifting. No more delay.<br className="hidden sm:inline" />
            Whether you're stuck, seeking clarity, or ready to evolve –<br className="hidden sm:inline" />
            this is your moment. Rebel Coaching offers multiple ways to begin,<br className="hidden sm:inline" />
            each one designed to meet you where you are and move you forward with purpose.
          </p>
        </motion.div>

        {/* Button Row - Stack on mobile */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-4 sm:gap-8 mb-5 w-full min-w-0"
        >
          {/* Primary Button - Orange */}
          <motion.button
            whileHover={{ backgroundColor: '#FF7A1A' }}
            whileTap={{ scale: 0.98 }}
            className="w-full sm:w-auto min-h-[48px] sm:min-h-[56px] text-white rounded-full font-medium transition-all duration-300 px-5 sm:px-9 py-3.5 text-xs sm:text-sm md:text-base touch-manipulation whitespace-normal sm:whitespace-nowrap text-center"
            style={{
              backgroundColor: '#FF6A00',
              boxShadow: '0 4px 12px rgba(255, 106, 0, 0.3)',
            }}
          >
            Book Your Free Matchmaker Call Today!
          </motion.button>
          
          {/* Secondary Button - Outline */}
          <motion.button
            whileHover={{ backgroundColor: 'rgba(255, 255, 255, 0.1)' }}
            whileTap={{ scale: 0.98 }}
            className="w-full sm:w-auto min-h-[48px] sm:min-h-[56px] text-white rounded-full font-medium transition-all duration-300 px-5 sm:px-9 py-3.5 text-xs sm:text-sm md:text-base touch-manipulation whitespace-normal sm:whitespace-nowrap text-center"
            style={{
              backgroundColor: 'transparent',
              border: '1.5px solid rgba(255, 255, 255, 0.4)',
            }}
          >
            Download the Rebel Starter Pack
          </motion.button>
        </motion.div>

        {/* Small Line Under Buttons */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-white text-sm sm:text-base font-normal break-words min-w-0"
          style={{ opacity: 0.7 }}
        >
          One path. Many entry points. The first step is yours to take.
        </motion.p>
      </div>
    </section>
  );
}