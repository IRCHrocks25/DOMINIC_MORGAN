import { motion, useInView } from 'motion/react';
import { useRef, useState } from 'react';
import { Button } from './ui/button';
import { ChevronDown, ArrowRight } from 'lucide-react';

const services = [
  {
    number: '01',
    title: 'One2one Rebel Coaching Sessions',
    subtitle: 'For those seeking deep, personalized transformation',
    description: 'Every session is designed around your goals, challenges, and growth path. Dominic integrates AI where appropriate to accelerate insights and reflection, enhancing the overall coaching experience.',
    packages: [
      {
        name: 'Essence',
        frequency: 'One session per month for 6 months',
        priceMonthly: 'CHF 1\'344',
        pricePerSession: 'CHF 224/session',
        priceFull: 'CHF 1\'290 when paid in full',
      },
      {
        name: 'Accelerator',
        frequency: 'Two sessions/month for 6 months',
        priceMonthly: 'CHF 2\'388',
        pricePerSession: 'CHF 199/session',
        priceFull: 'CHF 2\'190 when paid in full',
      },
    ],
    singleSession: {
      title: 'Single Rebel Session – One Powerful Step Forward',
      description: 'Not ready for a full journey, or need clarity on one specific challenge?',
      details: 'This one-off session delivers focused support, strategic insight, and a grounded rebel push to help you master an immediate challenge or achieve a goal.',
      price: 'CHF 249',
    },
  },
  {
    number: '02',
    title: 'Rebel Reflection Space',
    subtitle: 'Where deep insight meets real-life flexibility',
    description: 'A flexible coaching container designed for professionals who need ongoing support without rigid schedules. Access coaching when you need it most, with monthly reflection sessions and asynchronous support.',
    features: [
      'Monthly 60-minute deep-dive coaching session',
      'Unlimited async voice or text support via Voxer',
      'Custom reflection prompts & resources',
      'AI-enhanced reflection tools for deeper insights',
    ],
    pricing: {
      monthly: 'CHF 890/month',
      commitment: 'Minimum 3-month commitment',
    },
  },
  {
    number: '03',
    title: 'Rebel Momentum',
    subtitle: 'Coaching Experiences That Go Deep',
    description: 'Immersive group coaching programs that combine individual transformation with collective wisdom. Perfect for leaders who thrive in community and want to accelerate their growth alongside like-minded rebels.',
    features: [
      '8-week cohort-based program',
      'Weekly 90-minute group coaching sessions',
      'Private community access for peer support',
      'Individual 1:1 integration sessions',
      'Custom frameworks and leadership tools',
    ],
    pricing: {
      investment: 'CHF 2\'900',
      early: 'Early bird: CHF 2\'500',
    },
  },
];

export default function RebelPathSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });
  const [expandedIndex, setExpandedIndex] = useState<number[]>([0, 1, 2]); // All expanded by default

  const toggleExpanded = (index: number) => {
    if (expandedIndex.includes(index)) {
      setExpandedIndex(expandedIndex.filter(i => i !== index));
    } else {
      setExpandedIndex([...expandedIndex, index]);
    }
  };

  return (
    <section ref={ref} className="py-16 sm:py-20 lg:py-24 bg-gradient-to-br from-[#FEDCC4]/30 via-[#F6F7F9] to-white relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-[#FF6A00]/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-[#99A9C9]/10 rounded-full blur-3xl" />
      
      {/* Additional Background Design */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Top Right Accent */}
        <div className="absolute -top-20 -right-20 w-80 h-80 bg-gradient-to-br from-[#FF6A00]/10 to-transparent rounded-full blur-2xl" />
        
        {/* Middle Left Accent */}
        <div className="absolute top-1/3 -left-32 w-96 h-96 bg-gradient-to-tr from-[#0E2043]/5 to-transparent rounded-full blur-3xl" />
        
        {/* Bottom Right Pattern */}
        <div className="absolute bottom-20 right-20 w-64 h-64 bg-[#FEDCC4]/20 rounded-full blur-2xl" />
        
        {/* Floating Circles */}
        <motion.div
          animate={{
            y: [0, -20, 0],
            x: [0, 10, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute top-40 right-1/4 w-32 h-32 border border-[#99A9C9]/20 rounded-full"
        />
        
        <motion.div
          animate={{
            y: [0, 20, 0],
            x: [0, -15, 0],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute bottom-40 left-1/3 w-40 h-40 border border-[#FF6A00]/10 rounded-full"
        />
        
        {/* Left Side Decorative Pattern */}
        <div className="absolute left-0 top-0 bottom-0 w-32 sm:w-48">
          {/* Vertical Dots Pattern */}
          <div className="absolute left-8 top-20 space-y-6">
            {[...Array(12)].map((_, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 0.3, scale: 1 }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                className="flex gap-2"
              >
                <div className="w-1.5 h-1.5 rounded-full bg-[#99A9C9]" />
                <div className="w-1 h-1 rounded-full bg-[#FF6A00]" />
              </motion.div>
            ))}
          </div>
          
          {/* Curved Lines */}
          <svg className="absolute left-0 top-1/4 w-full h-64 opacity-10" viewBox="0 0 200 300">
            <path
              d="M 0 0 Q 50 75, 0 150 T 0 300"
              stroke="#0E2043"
              strokeWidth="2"
              fill="none"
            />
            <path
              d="M 20 0 Q 70 75, 20 150 T 20 300"
              stroke="#FF6A00"
              strokeWidth="1"
              fill="none"
            />
          </svg>
        </div>
        
        {/* Right Side Decorative Pattern */}
        <div className="absolute right-0 top-0 bottom-0 w-32 sm:w-48">
          {/* Vertical Dots Pattern */}
          <div className="absolute right-8 top-32 space-y-6">
            {[...Array(12)].map((_, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 0.3, scale: 1 }}
                transition={{ delay: i * 0.1 + 0.2, duration: 0.5 }}
                className="flex gap-2 justify-end"
              >
                <div className="w-1 h-1 rounded-full bg-[#FEDCC4]" />
                <div className="w-1.5 h-1.5 rounded-full bg-[#99A9C9]" />
              </motion.div>
            ))}
          </div>
          
          {/* Curved Lines */}
          <svg className="absolute right-0 top-1/3 w-full h-64 opacity-10" viewBox="0 0 200 300">
            <path
              d="M 200 0 Q 150 75, 200 150 T 200 300"
              stroke="#0E2043"
              strokeWidth="2"
              fill="none"
            />
            <path
              d="M 180 0 Q 130 75, 180 150 T 180 300"
              stroke="#99A9C9"
              strokeWidth="1"
              fill="none"
            />
          </svg>
        </div>
        
        {/* Diagonal Lines */}
        <div className="absolute top-0 left-1/4 w-1 h-full bg-gradient-to-b from-transparent via-[#99A9C9]/10 to-transparent rotate-12" />
        <div className="absolute top-0 right-1/3 w-1 h-full bg-gradient-to-b from-transparent via-[#FF6A00]/5 to-transparent -rotate-12" />
        
        {/* Decorative Dots */}
        <div className="absolute top-32 left-20 w-2 h-2 bg-[#FF6A00]/30 rounded-full" />
        <div className="absolute top-48 left-32 w-1.5 h-1.5 bg-[#99A9C9]/30 rounded-full" />
        <div className="absolute bottom-32 right-40 w-2 h-2 bg-[#FF6A00]/20 rounded-full" />
        <div className="absolute bottom-48 right-28 w-1.5 h-1.5 bg-[#0E2043]/20 rounded-full" />
        
        {/* Gradient Waves */}
        <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-white/50 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white/50 to-transparent" />
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 sm:mb-16"
        >
          <motion.p
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-[#FF6A00] uppercase tracking-wider text-xs sm:text-sm mb-4"
          >
            SERVICES
          </motion.p>
          
          <h2 className="text-[#0E2043] mb-4 sm:mb-6 text-3xl sm:text-4xl lg:text-5xl px-4">
            Your Journey to Authentic Power Starts Here:<br className="hidden sm:block" />
            <span className="block mt-2">Choose Your Rebel Path</span>
          </h2>
          
          <p className="text-[#2C2C2C]/80 max-w-3xl mx-auto leading-relaxed text-sm sm:text-base lg:text-lg px-4">
            All programs are built on the signature <span className="font-semibold text-[#0E2043]">Rebel Momentum Method</span>, an integrative framework that aligns your life with your values, identity, and true purpose.
          </p>
        </motion.div>

        {/* Accordion Items */}
        <div className="space-y-4 sm:space-y-6 mb-12 sm:mb-16">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="group"
            >
              <div
                className={`rounded-2xl sm:rounded-3xl overflow-hidden shadow-lg transition-all duration-500 ${
                  expandedIndex.includes(index)
                    ? 'bg-gradient-to-br from-[#2C2C2C] to-[#2C2C2C]/95'
                    : 'bg-gradient-to-br from-[#E8EAF0] to-[#D8DCE8] hover:shadow-xl'
                }`}
              >
                {/* Header */}
                <button
                  onClick={() => toggleExpanded(index)}
                  className="w-full p-6 sm:p-8 flex items-start justify-between gap-4 text-left"
                >
                  <div className="flex items-start gap-4 sm:gap-6 flex-1">
                    <span
                      className={`text-3xl sm:text-4xl transition-all duration-300 bg-clip-text ${
                        expandedIndex.includes(index) 
                          ? 'text-transparent bg-gradient-to-br from-[#FF6A00] via-[#FF6A00] to-[#FEDCC4]' 
                          : 'text-transparent bg-gradient-to-br from-[#FF6A00] via-[#FF6A00]/90 to-[#0E2043]'
                      }`}
                    >
                      {service.number}
                    </span>
                    <div className="flex-1">
                      <h3
                        className={`text-xl sm:text-2xl lg:text-3xl mb-2 transition-colors duration-300 ${
                          expandedIndex.includes(index) ? 'text-white' : 'text-[#0E2043]'
                        }`}
                      >
                        {service.title}
                      </h3>
                      <p
                        className={`text-sm sm:text-base transition-colors duration-300 ${
                          expandedIndex.includes(index) ? 'text-white/80' : 'text-[#2C2C2C]/90'
                        }`}
                      >
                        {service.subtitle}
                      </p>
                    </div>
                  </div>
                  
                  <motion.div
                    animate={{ rotate: expandedIndex.includes(index) ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                    className={`flex-shrink-0 w-8 h-8 sm:w-10 sm:h-10 rounded-full flex items-center justify-center transition-colors duration-300 ${
                      expandedIndex.includes(index)
                        ? 'bg-[#FF6A00] text-white'
                        : 'bg-[#0E2043] text-white'
                    }`}
                  >
                    <ChevronDown className="w-5 h-5 sm:w-6 sm:h-6" />
                  </motion.div>
                </button>

                {/* Expanded Content */}
                {expandedIndex.includes(index) && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.4 }}
                    className="px-6 sm:px-8 pb-6 sm:pb-8"
                  >
                    <div className="pl-0 sm:pl-16">
                      <p className="text-white/95 leading-relaxed mb-6 sm:mb-8 text-sm sm:text-base">
                        {service.description}
                      </p>

                      {/* Packages - Only for service 01 */}
                      {service.packages && (
                        <>
                          <div className="grid sm:grid-cols-2 gap-4 sm:gap-6 mb-8">
                            {service.packages.map((pkg, pkgIndex) => (
                              <motion.div
                                key={pkgIndex}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.4, delay: pkgIndex * 0.1 }}
                                className="bg-[#FF6A00] rounded-xl sm:rounded-2xl p-5 sm:p-6 text-white"
                              >
                                <h4 className="text-lg sm:text-xl mb-2 sm:mb-3">
                                  {pkg.name}
                                </h4>
                                <p className="text-white/95 text-xs sm:text-sm mb-4">
                                  {pkg.frequency}
                                </p>
                                <div className="space-y-2 text-sm sm:text-base">
                                  <p className="flex items-center gap-2">
                                    <span className="w-1.5 h-1.5 rounded-full bg-white" />
                                    {pkg.priceMonthly} <span className="text-white/80">({pkg.pricePerSession})</span>
                                  </p>
                                  <p className="flex items-center gap-2">
                                    <span className="w-1.5 h-1.5 rounded-full bg-white" />
                                    {pkg.priceFull}
                                  </p>
                                </div>
                              </motion.div>
                            ))}
                          </div>

                          {/* Single Session */}
                          {service.singleSession && (
                            <motion.div
                              initial={{ opacity: 0, y: 20 }}
                              animate={{ opacity: 1, y: 0 }}
                              transition={{ duration: 0.4, delay: 0.3 }}
                              className="bg-[#0E2043] border border-[#99A9C9]/40 rounded-xl sm:rounded-2xl p-5 sm:p-6"
                            >
                              <h4 className="text-white text-lg sm:text-xl mb-2 sm:mb-3">
                                {service.singleSession.title}
                              </h4>
                              <p className="text-white/95 text-sm sm:text-base mb-3 sm:mb-4">
                                {service.singleSession.description}
                              </p>
                              <p className="text-white/90 text-sm sm:text-base mb-4 leading-relaxed">
                                {service.singleSession.details}
                              </p>
                              <div className="flex items-center gap-2">
                                <span className="w-1.5 h-1.5 rounded-full bg-[#FF6A00]" />
                                <p className="text-white text-base sm:text-lg font-semibold">
                                  {service.singleSession.price}
                                </p>
                              </div>
                            </motion.div>
                          )}
                        </>
                      )}

                      {/* Features and Pricing - For service 02 and 03 */}
                      {service.features && service.pricing && (
                        <>
                          {/* Features List */}
                          <div className="mb-6 sm:mb-8">
                            <h4 className="text-white text-lg sm:text-xl mb-4">
                              What's Included:
                            </h4>
                            <div className="space-y-3">
                              {service.features.map((feature, featureIndex) => (
                                <motion.div
                                  key={featureIndex}
                                  initial={{ opacity: 0, x: -20 }}
                                  animate={{ opacity: 1, x: 0 }}
                                  transition={{ duration: 0.4, delay: featureIndex * 0.1 }}
                                  className="flex items-start gap-3"
                                >
                                  <span className="w-2 h-2 rounded-full bg-[#FF6A00] mt-2 flex-shrink-0" />
                                  <p className="text-white/95 text-sm sm:text-base leading-relaxed">
                                    {feature}
                                  </p>
                                </motion.div>
                              ))}
                            </div>
                          </div>

                          {/* Pricing Box */}
                          <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.4, delay: 0.5 }}
                            className="bg-[#FF6A00] rounded-xl sm:rounded-2xl p-5 sm:p-6 text-white"
                          >
                            <h4 className="text-lg sm:text-xl mb-4">
                              Investment
                            </h4>
                            <div className="space-y-2">
                              {service.pricing.monthly && (
                                <p className="flex items-center gap-2 text-base sm:text-lg">
                                  <span className="w-1.5 h-1.5 rounded-full bg-white" />
                                  <span className="font-semibold">{service.pricing.monthly}</span>
                                </p>
                              )}
                              {service.pricing.commitment && (
                                <p className="text-white/90 text-sm sm:text-base pl-5">
                                  {service.pricing.commitment}
                                </p>
                              )}
                              {service.pricing.investment && (
                                <p className="flex items-center gap-2 text-base sm:text-lg">
                                  <span className="w-1.5 h-1.5 rounded-full bg-white" />
                                  <span className="font-semibold">{service.pricing.investment}</span>
                                </p>
                              )}
                              {service.pricing.early && (
                                <p className="text-white/90 text-sm sm:text-base pl-5">
                                  {service.pricing.early}
                                </p>
                              )}
                            </div>
                          </motion.div>
                        </>
                      )}
                    </div>
                  </motion.div>
                )}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center"
        >
          <p className="text-[#2C2C2C]/80 mb-2 text-sm sm:text-base">
            Stay tuned — <span className="font-semibold text-[#0E2043]">next-level offerings</span> are on their way.
          </p>
          <p className="text-[#2C2C2C]/70 mb-6 sm:mb-8 text-sm sm:text-base">
            Want to be the first to know when <span className="font-semibold text-[#0E2043]">Rebel Masterclasses</span> launch?
          </p>
          <Button className="bg-[#FF6A00] hover:bg-[#FF6A00]/90 text-white rounded-full px-6 sm:px-10 py-5 sm:py-7 text-sm sm:text-base lg:text-lg transition-all duration-300 hover:scale-105 hover:shadow-2xl w-full sm:w-auto group">
            Join the waitlist
            <ArrowRight className="ml-2 w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform duration-300" />
          </Button>
        </motion.div>
      </div>
    </section>
  );
}