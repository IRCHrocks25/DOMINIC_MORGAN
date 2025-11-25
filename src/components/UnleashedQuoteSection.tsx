import { motion, useInView } from 'motion/react';
import { useRef } from 'react';

export default function UnleashedQuoteSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <section 
      ref={ref} 
      className="relative py-20 sm:py-24 lg:py-32 bg-gradient-to-br from-[#0E2043] via-[#0E2043] to-[#0E2043]/95 overflow-hidden"
    >
      {/* Decorative Background Elements */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#99A9C9]/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[#FF6A00]/5 rounded-full blur-3xl" />
      
      {/* Subtle grid pattern */}
      <div 
        className="absolute inset-0 opacity-[0.03]" 
        style={{
          backgroundImage: `linear-gradient(#99A9C9 1px, transparent 1px), linear-gradient(90deg, #99A9C9 1px, transparent 1px)`,
          backgroundSize: '50px 50px'
        }} 
      />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center"
        >
          {/* Decorative quote mark - top */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex justify-center mb-8"
          >
            <div className="w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br from-[#FF6A00]/20 to-[#FEDCC4]/10 rounded-2xl flex items-center justify-center backdrop-blur-sm border border-white/5">
              <svg 
                viewBox="0 0 24 24" 
                className="w-8 h-8 sm:w-10 sm:h-10 text-[#FF6A00]"
                fill="currentColor"
              >
                <path d="M6 17h3l2-4V7H5v6h3zm8 0h3l2-4V7h-6v6h3z" />
              </svg>
            </div>
          </motion.div>

          {/* Quote Text */}
          <motion.blockquote
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative"
          >
            <p className="text-white text-2xl sm:text-3xl lg:text-4xl xl:text-5xl leading-relaxed italic font-light">
              "The best version of you is already within you – waiting to be unleashed."
            </p>
          </motion.blockquote>

          {/* Decorative accent line */}
          <motion.div
            initial={{ opacity: 0, scaleX: 0 }}
            animate={isInView ? { opacity: 1, scaleX: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="mt-12 flex justify-center"
          >
            <div className="h-1 w-24 bg-gradient-to-r from-transparent via-[#FF6A00] to-transparent rounded-full" />
          </motion.div>
        </motion.div>
      </div>

      {/* Subtle light rays effect */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] opacity-5">
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent rotate-45 blur-3xl" />
        </div>
      </div>
    </section>
  );
}
