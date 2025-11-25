import { motion, useInView } from 'motion/react';
import { useRef } from 'react';
import { Button } from './ui/button';
import { ArrowRight, Calendar } from 'lucide-react';

export default function FinalCTASection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <section ref={ref} id="contact" className="py-20 sm:py-24 lg:py-32 bg-gradient-to-br from-[#1a2a4e] via-[#0E2043] to-[#162d58] relative overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute top-0 right-0 w-[500px] sm:w-[700px] h-[500px] sm:h-[700px] bg-[#4169E1]/20 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-[500px] sm:w-[700px] h-[500px] sm:h-[700px] bg-[#4169E1]/15 rounded-full blur-3xl" />
      
      {/* Animated Gradient Orbs */}
      <motion.div
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.2, 0.4, 0.2],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-[#4169E1]/25 rounded-full blur-3xl"
      />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          {/* Main Headline */}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-white mb-4 sm:mb-6 md:mb-8 text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl px-4 leading-tight"
          >
            <span className="font-normal">Your Time Is Now.</span> <span className="italic">Ignite Your Rebel Momentum.</span>
          </motion.h2>

          {/* Subheading */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-white text-sm sm:text-base md:text-lg mb-3 sm:mb-4"
          >
            No more drifting. No more delay.
          </motion.p>

          {/* Body Text */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-white/80 text-xs sm:text-sm md:text-base max-w-2xl mx-auto mb-2 px-4 leading-relaxed"
          >
            Whether you're stuck, seeking clarity, or ready to evolve – this is your moment.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="text-white/80 text-xs sm:text-sm md:text-base max-w-2xl mx-auto mb-8 sm:mb-10 md:mb-12 px-4 leading-relaxed"
          >
            Rebel Coaching offers multiple ways to begin, each one designed to meet you where you are and move you forward with purpose.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 px-4 mb-6 sm:mb-8 md:mb-10"
          >
            <motion.button
              whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(255, 106, 0, 0.4)" }}
              whileTap={{ scale: 0.98 }}
              className="bg-[#FF6A00] hover:bg-[#FF6A00]/90 text-white rounded-full px-6 sm:px-8 py-3 sm:py-4 text-sm sm:text-base transition-all duration-300 shadow-lg w-full sm:w-auto touch-manipulation"
            >
              Book Your Free Matchmaker Call Today!
            </motion.button>
            
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              className="border-2 border-[#99A9C9] text-white hover:bg-[#99A9C9]/10 rounded-full px-6 sm:px-8 py-3 sm:py-4 text-sm sm:text-base transition-all duration-300 w-full sm:w-auto touch-manipulation"
            >
              Download the Rebel Starter Pack
            </motion.button>
          </motion.div>

          {/* Bottom Text */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="text-white/70 text-xs sm:text-sm md:text-base"
          >
            One path. Many entry points. The first step is yours to take.
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
}