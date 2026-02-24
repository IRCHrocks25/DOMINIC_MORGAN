import { motion } from 'motion/react';
import { useInView } from 'motion/react';
import { useRef } from 'react';

export default function QuoteSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section 
      ref={ref}
      className="relative py-13 sm:py-16 lg:py-20 bg-gradient-to-br from-[#0E2043] via-[#0E2043] to-[#0E2043]/95"
      style={{ overflow: 'visible' }}
    >
      {/* Decorative Background Elements - Layer 0 */}
      <div className="absolute inset-0 opacity-10" style={{ zIndex: 0 }}>
        <div className="absolute top-1/4 left-10 w-96 h-96 bg-[#99A9C9] rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-10 w-96 h-96 bg-[#FF6A00] rounded-full blur-3xl" />
      </div>

      {/* Subtle Pattern Overlay - Layer 0 */}
      <div 
        className="absolute inset-0 opacity-5" 
        style={{
          zIndex: 0,
          backgroundImage: `radial-gradient(circle at 1px 1px, rgba(255, 255, 255, 0.15) 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }} 
      />

      {/* Bright Blue Gradient at Bottom Center - Layer 1 (above background, below text) */}
      <div 
        className="absolute left-1/2 pointer-events-none"
        style={{
          transform: 'translateX(-50%)',
          zIndex: 1,
          width: '400px',
          height: '200px',
          bottom: '20px',
          background: 'radial-gradient(circle, rgba(59, 130, 246, 0.8) 0%, rgba(37, 99, 235, 0.7) 25%, rgba(29, 78, 216, 0.5) 50%, transparent 80%)',
          borderRadius: '50%',
          filter: 'blur(40px)'
        }}
      />

      {/* Content Container - Layer 2 (above gradient) */}
      <div className="max-w-5xl mx-auto px-6 sm:px-8 lg:px-12 relative" style={{ zIndex: 2 }}>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="text-center space-y-4"
          style={{ position: 'relative' }}
        >
          {/* Quote Text */}
          <motion.blockquote
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="space-y-2"
            style={{ position: 'relative' }}
          >
            <p 
              className="text-xl sm:text-2xl lg:text-3xl xl:text-4xl leading-relaxed tracking-tight"
              style={{ color: 'inherit' }}
            >
              <span style={{ color: '#C3C3C3' }}>"Autopilot is the enemy of authenticity.<br /></span>
              <span style={{ color: '#F6F7F9' }}>Clarity is your inner compass</span>
              <span style={{ color: '#C3C3C3' }}> - it leads you back to what matters."</span>
            </p>
          </motion.blockquote>
        </motion.div>
      </div>

      {/* Bottom Gradient Fade - Layer 0 */}
      <div 
        className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#F6F7F9] to-transparent opacity-10" 
        style={{ zIndex: 0 }}
      />
    </section>
  );
}
