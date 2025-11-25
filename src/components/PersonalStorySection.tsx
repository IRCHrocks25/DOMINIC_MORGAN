import { motion, useInView } from 'motion/react';
import { useRef } from 'react';
import { Button } from './ui/button';
import { Heart, Compass, Rocket } from 'lucide-react';

const values = [
  {
    icon: Heart,
    title: 'Authentic Leadership',
    description: 'Lead with integrity and genuine care for your team',
  },
  {
    icon: Compass,
    title: 'Clear Direction',
    description: 'Navigate complexity with confidence and clarity',
  },
  {
    icon: Rocket,
    title: 'Transformative Growth',
    description: 'Achieve breakthrough results and lasting impact',
  },
];

export default function PersonalStorySection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <section ref={ref} className="py-16 sm:py-20 lg:py-24 bg-gradient-to-br from-[#FEDCC4]/20 via-[#F6F7F9] to-white relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#99A9C9]/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#FF6A00]/5 rounded-full blur-3xl" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 sm:mb-16"
        >
          <h2 className="text-[#0E2043] mb-4 sm:mb-6 text-3xl sm:text-4xl lg:text-5xl px-4">
            From Struggle to Strength:<br className="hidden sm:block" />
            My Journey, Your Inspiration
          </h2>
          <p className="text-[#2C2C2C]/80 max-w-3xl mx-auto leading-relaxed text-sm sm:text-base lg:text-lg px-4">
            Twenty-five years ago, I faced a pivotal moment in my career. Leading a struggling division at a Fortune 500 company, I felt overwhelmed, isolated, and unsure of my path forward. It was through the transformative power of coaching that I discovered my true potential.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-white rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-12 shadow-xl mb-8 sm:mb-12"
        >
          <p className="text-[#2C2C2C]/80 leading-relaxed mb-4 sm:mb-6 text-sm sm:text-base lg:text-lg">
            That experience didn't just change my career—it changed my life. I went on to turn around that division, lead multiple successful organizations, and eventually found my calling in helping other leaders navigate their own challenges. I've witnessed firsthand how the right guidance at the right time can unlock extraordinary potential.
          </p>
          <p className="text-[#2C2C2C]/80 leading-relaxed text-sm sm:text-base lg:text-lg">
            Today, I'm privileged to work with leaders across industries and continents, helping them overcome obstacles, achieve breakthrough results, and create lasting positive impact. My approach is rooted in empathy, evidence, and real-world experience—because I've been where you are, and I know the way forward.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-3 gap-6 sm:gap-8 mb-8 sm:mb-12">
          {values.map((value, index) => {
            const Icon = value.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                className="text-center"
              >
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 360 }}
                  transition={{ duration: 0.6 }}
                  className="inline-flex items-center justify-center w-12 h-12 sm:w-16 sm:h-16 rounded-xl sm:rounded-2xl bg-gradient-to-br from-[#FF6A00] to-[#FF6A00]/80 mb-3 sm:mb-4 shadow-lg"
                >
                  <Icon className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
                </motion.div>
                <h3 className="text-[#0E2043] mb-2 sm:mb-3 text-lg sm:text-xl lg:text-2xl">
                  {value.title}
                </h3>
                <p className="text-[#2C2C2C]/70 text-sm sm:text-base">
                  {value.description}
                </p>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center"
        >
          <Button className="bg-[#FF6A00] hover:bg-[#FF6A00]/90 text-white rounded-full px-6 sm:px-8 py-5 sm:py-6 text-sm sm:text-base transition-all duration-300 hover:scale-105 hover:shadow-xl w-full sm:w-auto">
            BEGIN YOUR TRANSFORMATION
          </Button>
        </motion.div>
      </div>
    </section>
  );
}