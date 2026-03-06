import { motion, useInView } from 'motion/react';
import { useRef } from 'react';
import { Button } from './ui/button';

const statistics = [
  {
    percentage: '68%',
    description: 'Of Europeans say they\'re not living in alignment with their core values',
    source: 'European Values Study, 2023',
  },
  {
    percentage: '63%',
    description: 'Of employees report hiding parts of themselves at work including beliefs, feelings, or aspects of their identity.',
    source: 'Randstad Workmonitor 2025',
  },
  {
    percentage: '+20%',
    description: 'Rise in "quiet quitting" among successful employees in just two years',
    source: 'LinkedIn Workforce Report, 2024',
  },
  {
    percentage: '50%',
    description: 'Of executives report feeling chronically stressed',
    source: 'American Psychological Association, 2024',
  },
  {
    percentage: '40%',
    description: 'Of professionals feel unfulfilled despite career success',
    source: 'Harvard Business Review, 2023',
  },
  {
    percentage: '+40%',
    description: 'Higher job satisfaction among professionals with a clear personal purpose',
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
          <p className="text-[#2C2C2C]/80 mx-auto leading-relaxed text-base lg:text-lg" style={{ width: '100%', maxWidth: '1200px' }}>
            Ambitious professionals are burning out, drifting off course, and questioning the meaning of success. <span className="font-semibold text-[#0E2043]">Rebel Coaching</span> exists to meet<br />
            this quiet crisis with clarity, authenticity, and personal power. These stats paint a sobering but essential picture and show exactly why<br />
            coaching built on purpose and truth matters more than ever.
          </p>
        </motion.div>

        {/* Statistics Grid */}
        <div className="flex flex-row gap-4 mb-12 sm:mb-16 overflow-x-auto justify-center" style={{ alignItems: 'stretch', paddingLeft: '80px', paddingRight: '80px' }}>
          {statistics.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -8, scale: 1.02, transition: { duration: 0.3 } }}
              className="group relative flex-shrink-0"
              style={{ width: '280px', height: '280px' }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-[#FF6A00]/0 to-[#99A9C9]/0 group-hover:from-[#FF6A00]/5 group-hover:to-[#99A9C9]/10 rounded-2xl transition-all duration-500 blur-xl" />
              
              <div className="relative bg-white rounded-xl sm:rounded-2xl p-4 sm:p-6 shadow-sm group-hover:shadow-xl transition-all duration-300 border border-[#99A9C9]/10 flex flex-col w-full h-full" style={{ width: '280px', height: '280px' }}>
                {/* Percentage */}
                <motion.div
                  initial={{ scale: 0 }}
                  animate={isInView ? { scale: 1 } : {}}
                  transition={{ duration: 0.5, delay: index * 0.1 + 0.2, type: 'spring' }}
                  className="mb-3"
                >
                  <span 
                    className="text-3xl sm:text-4xl lg:text-5xl font-extralight"
                    style={{
                      fontFamily: "'Plus Jakarta Sans', sans-serif",
                      background: 'linear-gradient(to right, #3B82F6, #FF6A00)',
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',
                      backgroundClip: 'text'
                    }}
                  >
                    {stat.percentage}
                  </span>
                </motion.div>

                {/* Description */}
                <p className="text-[#2C2C2C]/80 mb-2 flex-grow leading-relaxed text-xs sm:text-sm font-bold" style={{ minHeight: 0, fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
                  {stat.description}
                </p>

                {/* Source */}
                <p className="text-[#99A9C9] text-xs pt-2 border-t border-[#99A9C9]/10 break-words flex-shrink-0" style={{ wordBreak: 'break-word', overflowWrap: 'break-word', fontSize: '11px', lineHeight: '1.4' }}>
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
          <p className="text-[#2C2C2C]/90 mb-3 sm:mb-4 leading-relaxed text-base sm:text-lg lg:text-xl px-4 font-semibold" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
            These numbers aren't just statistics. They are the hidden stories behind quiet frustration, sleepless ambition, and the silent question:{' '}
            <span className="italic">"Is there more to life than checking boxes?"</span>
          </p>
          <p className="text-[#0E2043] mb-3 sm:mb-4 leading-relaxed text-base sm:text-lg lg:text-xl px-4 font-semibold" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
            Let data speak. Then choose to rebel.
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
