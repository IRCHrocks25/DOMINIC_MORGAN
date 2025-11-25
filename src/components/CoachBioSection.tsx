import { motion, useInView } from 'motion/react';
import { useRef } from 'react';
import { Award, GraduationCap, Users, Globe } from 'lucide-react';
import coachImage from 'figma:asset/2fdc5363ffd44aba3f03ddbd039d4efedabbd4db.png';

const credentials = [
  { icon: Award, text: 'ICF Master Certified Coach' },
  { icon: GraduationCap, text: 'MBA, Harvard Business School' },
  { icon: Users, text: '500+ Leaders Coached' },
  { icon: Globe, text: 'Global Fortune 500 Experience' },
];

export default function CoachBioSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <section ref={ref} id="about" className="py-16 sm:py-20 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 sm:mb-16"
        >
          <h2 className="text-[#0E2043] mb-3 sm:mb-4 text-3xl sm:text-4xl lg:text-5xl px-4">
            Meet Your Coach
          </h2>
          <p className="text-[#2C2C2C]/70 max-w-2xl mx-auto text-base sm:text-lg lg:text-xl px-4">
            25+ years of experience transforming leaders and organizations
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="relative order-2 lg:order-1"
          >
            <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden shadow-xl sm:shadow-2xl">
              <img
                src={coachImage}
                alt="Executive Coach"
                className="w-full h-auto object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0E2043]/20 to-transparent" />
            </div>
            
            {/* Decorative Elements */}
            <div className="absolute -top-6 -left-6 w-32 h-32 bg-[#99A9C9]/20 rounded-full blur-3xl -z-10 hidden sm:block" />
            <div className="absolute -bottom-6 -right-6 w-40 h-40 bg-[#FF6A00]/10 rounded-full blur-3xl -z-10 hidden sm:block" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-4 sm:space-y-6 order-1 lg:order-2"
          >
            <h3 className="text-[#0E2043] text-2xl sm:text-3xl lg:text-4xl">
              John Doe
            </h3>

            <p className="text-[#2C2C2C]/80 leading-relaxed text-sm sm:text-base lg:text-lg">
              With over 25 years of experience in executive leadership and organizational development, I've had the privilege of coaching hundreds of leaders across diverse industries. My approach combines evidence-based methodologies with deep empathy and practical wisdom.
            </p>

            <p className="text-[#2C2C2C]/80 leading-relaxed text-sm sm:text-base lg:text-lg">
              Before becoming a coach, I held senior executive roles at Fortune 500 companies, giving me firsthand understanding of the challenges leaders face. This real-world experience informs every coaching conversation, ensuring practical, actionable insights.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 pt-4 sm:pt-6">
              {credentials.map((credential, index) => {
                const Icon = credential.icon;
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                    className="flex items-center gap-3 bg-[#F6F7F9] rounded-lg sm:rounded-xl p-3 sm:p-4"
                  >
                    <div className="flex-shrink-0 w-8 h-8 sm:w-10 sm:h-10 rounded-lg bg-gradient-to-br from-[#FF6A00] to-[#FF6A00]/80 flex items-center justify-center">
                      <Icon className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
                    </div>
                    <span className="text-[#2C2C2C] text-xs sm:text-sm">
                      {credential.text}
                    </span>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}