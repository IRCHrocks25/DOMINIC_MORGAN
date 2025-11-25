import { motion, useInView } from 'motion/react';
import { useRef } from 'react';
import Cred2 from '../imports/Cred2';

export default function LogosSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  // Array of logo components from Cred2
  const logos = Array(10).fill(null);

  return (
    <section ref={ref} className="py-20 sm:py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 sm:mb-16"
        >
          <p className="text-[#99A9C9] tracking-wide uppercase text-sm sm:text-base">
            Trusted by Leading Organizations
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="relative"
        >
          {/* Gradient Overlays for fade effect */}
          <div className="absolute left-0 top-0 bottom-0 w-24 sm:w-32 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-24 sm:w-32 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />

          {/* Marquee Container */}
          <div className="flex overflow-hidden">
            {/* First set of logos */}
            <motion.div
              animate={{ x: ['0%', '-100%'] }}
              transition={{
                duration: 40,
                repeat: Infinity,
                ease: 'linear',
              }}
              className="flex items-center shrink-0"
            >
              <Cred2 />
            </motion.div>

            {/* Duplicate set for seamless loop */}
            <motion.div
              animate={{ x: ['0%', '-100%'] }}
              transition={{
                duration: 40,
                repeat: Infinity,
                ease: 'linear',
              }}
              className="flex items-center shrink-0"
            >
              <Cred2 />
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}