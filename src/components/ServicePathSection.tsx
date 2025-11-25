import { motion, useInView } from 'motion/react';
import { useRef } from 'react';
import { Target, Users, TrendingUp, Lightbulb } from 'lucide-react';

const services = [
  {
    icon: Target,
    title: 'Executive Coaching',
    description: 'One-on-one personalized coaching sessions designed to unlock your leadership potential and achieve breakthrough results.',
  },
  {
    icon: Users,
    title: 'Team Development',
    description: 'Build high-performing teams through strategic alignment, enhanced communication, and collaborative excellence.',
  },
  {
    icon: TrendingUp,
    title: 'Leadership Programs',
    description: 'Comprehensive development programs that transform good leaders into exceptional ones through proven methodologies.',
  },
  {
    icon: Lightbulb,
    title: 'Strategic Planning',
    description: 'Navigate complex challenges and create actionable strategies that drive sustainable organizational growth.',
  },
];

export default function ServicePathSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <section ref={ref} className="py-16 sm:py-20 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 sm:mb-16"
        >
          <h2 className="text-[#0E2043] mb-3 sm:mb-4 text-3xl sm:text-4xl lg:text-5xl px-4">
            Your Journey to Greatness<br className="hidden sm:block" /> Starts Here
          </h2>
          <p className="text-[#2C2C2C]/70 max-w-2xl mx-auto text-base sm:text-lg lg:text-xl px-4">
            Choose your path and let's unlock your full potential together
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 gap-6 sm:gap-8 lg:gap-12">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                whileHover={{ y: -8, transition: { duration: 0.3 } }}
                className="group relative"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-[#FF6A00]/0 to-[#99A9C9]/0 group-hover:from-[#FF6A00]/5 group-hover:to-[#99A9C9]/10 rounded-2xl sm:rounded-3xl transition-all duration-500 blur-xl" />
                
                <div className="relative bg-gradient-to-br from-white to-[#F6F7F9]/50 rounded-2xl sm:rounded-3xl p-6 sm:p-8 lg:p-10 shadow-sm group-hover:shadow-2xl transition-all duration-300 border border-[#99A9C9]/10">
                  <motion.div
                    whileHover={{ rotate: 360, scale: 1.1 }}
                    transition={{ duration: 0.6 }}
                    className="inline-flex items-center justify-center w-12 h-12 sm:w-16 sm:h-16 rounded-xl sm:rounded-2xl bg-gradient-to-br from-[#FF6A00] to-[#FF6A00]/80 mb-4 sm:mb-6 shadow-lg"
                  >
                    <Icon className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
                  </motion.div>

                  <h3 className="text-[#0E2043] mb-3 sm:mb-4 text-xl sm:text-2xl lg:text-3xl">
                    {service.title}
                  </h3>

                  <p className="text-[#2C2C2C]/70 leading-relaxed text-sm sm:text-base lg:text-lg">
                    {service.description}
                  </p>

                  <motion.div
                    initial={{ width: 0 }}
                    whileHover={{ width: '100%' }}
                    transition={{ duration: 0.4 }}
                    className="h-1 bg-gradient-to-r from-[#FF6A00] to-[#FF6A00]/50 rounded-full mt-4 sm:mt-6"
                  />
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}