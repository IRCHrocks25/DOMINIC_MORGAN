import { motion, useInView } from 'motion/react';
import { useRef } from 'react';
import { Button } from './ui/button';

const statistics = [
  {
    percentage: '68%',
    description: 'professionals say they\'re not living in alignment with their core values',
    source: 'European Values Study, 2025',
  },
  {
    percentage: '63%',
    description: 'professionals are hiding parts of themselves at work due to societal beliefs, feelings, or aspects of their identity.',
    source: 'Deloitte and Newnomics, 2025',
  },
  {
    percentage: '+20%',
    description: 'increase in "meaning" among successful employees in just two years',
    source: 'LinkedIn Workforce Report, 2024',
  },
  {
    percentage: '50%',
    description: 'professionals report feeling chronically stressed',
    source: 'American Psychological Association, 2024',
  },
  {
    percentage: '40%',
    description: 'professionals feel unfulfilled despite career success',
    source: 'Harvard Business Review, 2023',
  },
  {
    percentage: '+40%',
    description: 'increase in emerging professionals with a clear personal purpose',
    source: 'Gallup, 2023',
  },
];

export default function RealitySection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });

  return (
    <section ref={ref} className="py-16 sm:py-20 lg:py-24 bg-[#F6F7F9] relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#FF6A00]/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[#99A9C9]/10 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 sm:mb-16"
        >
          <h2 className="text-[#0E2043] mb-4 sm:mb-6 text-3xl sm:text-4xl lg:text-5xl px-4">
            The Reality Behind the Résumé
          </h2>
          <p className="text-[#2C2C2C]/80 max-w-4xl mx-auto leading-relaxed text-sm sm:text-base lg:text-lg px-4">
            Ambitious professionals are burning out, drifting off course, and questioning the meaning of success.{' '}
            <span className="font-semibold text-[#0E2043]">Rebel Coaching</span> exists to meet the quiet crisis with clarity, authenticity, and personal growth.{' '}
            <span className="italic">These stats paint a sobering but essential picture and show exactly why coaching built on purpose—and from radical trust—is needed.</span>
          </p>
        </motion.div>

        {/* Statistics Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mb-12 sm:mb-16">
          {statistics.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -8, scale: 1.02, transition: { duration: 0.3 } }}
              className="group relative"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-[#FF6A00]/0 to-[#99A9C9]/0 group-hover:from-[#FF6A00]/5 group-hover:to-[#99A9C9]/10 rounded-2xl transition-all duration-500 blur-xl" />
              
              <div className="relative bg-white rounded-xl sm:rounded-2xl p-6 sm:p-8 shadow-sm group-hover:shadow-xl transition-all duration-300 border border-[#99A9C9]/10 h-full flex flex-col">
                {/* Percentage */}
                <motion.div
                  initial={{ scale: 0 }}
                  animate={isInView ? { scale: 1 } : {}}
                  transition={{ duration: 0.5, delay: index * 0.1 + 0.2, type: 'spring' }}
                  className="mb-4"
                >
                  <span className="text-4xl sm:text-5xl lg:text-6xl text-[#FF6A00]">
                    {stat.percentage}
                  </span>
                </motion.div>

                {/* Description */}
                <p className="text-[#2C2C2C]/80 mb-4 flex-grow leading-relaxed text-sm sm:text-base">
                  {stat.description}
                </p>

                {/* Source */}
                <p className="text-[#99A9C9] text-xs sm:text-sm pt-4 border-t border-[#99A9C9]/10">
                  {stat.source}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom Message */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center max-w-4xl mx-auto mb-8 sm:mb-12"
        >
          <p className="text-[#2C2C2C]/90 mb-3 sm:mb-4 leading-relaxed text-base sm:text-lg lg:text-xl px-4">
            These numbers aren't just statistics. They are the hidden stories behind quiet frustration, sleepless ambition, and the silent question:{' '}
            <span className="italic">"Is there more to life than checking boxes?"</span>
          </p>
          <p className="text-[#0E2043] text-lg sm:text-xl lg:text-2xl px-4">
            Let the data speak. Then choose to rebel.
          </p>
        </motion.div>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 1 }}
          className="text-center"
        >
          <Button className="bg-[#FF6A00] hover:bg-[#FF6A00]/90 text-white rounded-full px-6 sm:px-10 py-5 sm:py-7 text-sm sm:text-base lg:text-lg transition-all duration-300 hover:scale-105 hover:shadow-2xl w-full sm:w-auto">
            Book Your Free Matchmaker Call Today!
          </Button>
        </motion.div>

        {/* Decorative Line */}
        <motion.div
          initial={{ opacity: 0, scaleX: 0 }}
          animate={isInView ? { opacity: 1, scaleX: 1 } : {}}
          transition={{ delay: 1.2, duration: 0.8 }}
          className="mt-16 sm:mt-20 flex justify-center"
        >
          <div className="h-px w-full max-w-md bg-gradient-to-r from-transparent via-[#99A9C9]/30 to-transparent" />
        </motion.div>
      </div>
    </section>
  );
}
