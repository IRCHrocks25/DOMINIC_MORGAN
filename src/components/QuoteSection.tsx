import { motion } from 'motion/react';
import { useInView } from 'motion/react';
import { useRef } from 'react';

export default function QuoteSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section 
      ref={ref}
      className="relative py-24 sm:py-32 lg:py-40 overflow-hidden bg-gradient-to-br from-[#0E2043] via-[#0E2043] to-[#0E2043]/95"
    >
      {/* Decorative Background Elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-1/4 left-10 w-96 h-96 bg-[#99A9C9] rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-10 w-96 h-96 bg-[#FF6A00] rounded-full blur-3xl" />
      </div>

      {/* Subtle Pattern Overlay */}
      <div className="absolute inset-0 opacity-5" style={{
        backgroundImage: `radial-gradient(circle at 1px 1px, rgba(255, 255, 255, 0.15) 1px, transparent 0)`,
        backgroundSize: '40px 40px'
      }} />

      <div className="max-w-5xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="text-center space-y-6"
        >
          {/* Decorative Quote Mark */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="flex justify-center mb-8"
          >
            <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-gradient-to-br from-[#FF6A00]/20 to-[#FF6A00]/5 border border-[#FF6A00]/20 flex items-center justify-center">
              <svg className="w-8 h-8 sm:w-10 sm:h-10 text-[#FF6A00]" fill="currentColor" viewBox="0 0 24 24">
                <path d="M6 17h3l2-4V7H5v6h3zm8 0h3l2-4V7h-6v6h3z"/>
              </svg>
            </div>
          </motion.div>

          {/* Quote Text */}
          <motion.blockquote
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="space-y-4 sm:space-y-6"
          >
            <p className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl text-[#F6F7F9]/90 leading-relaxed tracking-tight italic">
              "Autopilot is the enemy of authenticity.
            </p>
            <p className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl leading-relaxed tracking-tight">
              <span className="text-[#F6F7F9]">Clarity is your inner compass</span>
              <span className="text-[#99A9C9] italic"> - it leads you back to what matters.</span>
              <span className="text-[#F6F7F9]">"</span>
            </p>
          </motion.blockquote>

          {/* Decorative Line */}
          <motion.div
            initial={{ opacity: 0, scaleX: 0 }}
            animate={isInView ? { opacity: 1, scaleX: 1 } : { opacity: 0, scaleX: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="pt-8 sm:pt-12 flex justify-center"
          >
            <div className="h-px w-32 sm:w-48 bg-gradient-to-r from-transparent via-[#99A9C9]/50 to-transparent" />
          </motion.div>
        </motion.div>
      </div>

      {/* Bottom Gradient Fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#F6F7F9] to-transparent opacity-10" />
    </section>
  );
}
