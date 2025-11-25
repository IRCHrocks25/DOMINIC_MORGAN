import { motion, useInView } from 'motion/react';
import { useRef } from 'react';

const stats = [
  { number: '500+', label: 'Leaders Coached' },
  { number: '25+', label: 'Years Experience' },
  { number: '98%', label: 'Client Satisfaction' },
  { number: '50+', label: 'Organizations Served' },
  { number: '10K+', label: 'Coaching Hours' },
  { number: '40+', label: 'Industries Represented' },
];

export default function StatsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <section ref={ref} className="py-16 sm:py-20 lg:py-24 bg-[#F6F7F9]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 sm:mb-16"
        >
          <h2 className="text-[#0E2043] mb-3 sm:mb-4 text-3xl sm:text-4xl lg:text-5xl">
            Impact That Speaks for Itself
          </h2>
          <p className="text-[#2C2C2C]/70 max-w-2xl mx-auto text-base sm:text-lg lg:text-xl px-4">
            Numbers that reflect our commitment to excellence and transformation
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 lg:gap-12">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -8, transition: { duration: 0.3 } }}
              className="text-center group"
            >
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-[#FF6A00]/0 to-[#FF6A00]/0 group-hover:from-[#FF6A00]/5 group-hover:to-[#99A9C9]/5 rounded-xl sm:rounded-2xl transition-all duration-500 blur-xl" />
                <div className="relative bg-white rounded-xl sm:rounded-2xl p-4 sm:p-6 lg:p-8 shadow-sm group-hover:shadow-xl transition-all duration-300">
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={isInView ? { scale: 1 } : {}}
                    transition={{ duration: 0.5, delay: index * 0.1 + 0.2, type: 'spring' }}
                    className="text-[#FF6A00] mb-2 sm:mb-3 text-3xl sm:text-4xl lg:text-5xl"
                  >
                    {stat.number}
                  </motion.div>
                  <p className="text-[#2C2C2C]/60 text-xs sm:text-sm lg:text-base">
                    {stat.label}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}