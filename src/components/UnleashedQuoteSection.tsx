import { motion } from 'motion/react';
import { useInView } from 'motion/react';
import { useRef } from 'react';
import quoteBackground from '../assets/Frame 1618872901.png';

export default function UnleashedQuoteSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section 
      ref={ref}
      className="relative py-13 sm:py-16 lg:py-20 overflow-hidden"
      style={{
        backgroundImage: `url(${quoteBackground})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      {/* Content Container */}
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
              className="text-xl sm:text-2xl lg:text-3xl xl:text-4xl leading-relaxed tracking-tight italic"
              style={{ color: 'inherit' }}
            >
              <span style={{ color: '#F6F7F9' }}>"The best version of you is already within you –<br /></span>
              <span style={{ color: '#C3C3C3' }}>waiting to be unleashed."</span>
            </p>
          </motion.blockquote>
        </motion.div>
      </div>
    </section>
  );
}
