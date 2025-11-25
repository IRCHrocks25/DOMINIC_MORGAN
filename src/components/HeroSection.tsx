import { motion } from 'motion/react';
import { Button } from './ui/button';

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-[#F6F7F9] via-[#F6F7F9] to-[#FEDCC4]/10">
      {/* Decorative Elements */}
      <div className="absolute inset-0 opacity-20 md:opacity-30">
        <div className="absolute top-10 md:top-20 left-5 md:left-10 w-48 md:w-72 h-48 md:h-72 bg-[#FF6A00]/10 rounded-full blur-3xl" />
        <div className="absolute bottom-10 md:bottom-20 right-5 md:right-10 w-64 md:w-96 h-64 md:h-96 bg-[#99A9C9]/15 rounded-full blur-3xl" />
      </div>

      {/* Decorative Circle Pattern Background - Hidden on mobile */}
      <div className="absolute left-0 bottom-0 w-[400px] md:w-[800px] h-[400px] md:h-[800px] opacity-[0.02] md:opacity-[0.03] hidden sm:block">
        <svg viewBox="0 0 800 800" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="100" cy="700" r="250" stroke="#0E2043" strokeWidth="2"/>
          <circle cx="100" cy="700" r="400" stroke="#0E2043" strokeWidth="2"/>
          <circle cx="100" cy="700" r="550" stroke="#0E2043" strokeWidth="2"/>
        </svg>
      </div>

      <div className="w-full max-w-[1600px] mx-auto px-2 sm:px-3 lg:px-4 py-12 sm:py-16 lg:py-24 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 xl:gap-24 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="space-y-6 sm:space-y-8 lg:space-y-10 max-w-3xl mx-auto lg:mx-0 text-center lg:text-left order-2 lg:order-1"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="inline-block"
            >
              <div className="px-4 sm:px-5 py-2 sm:py-2.5 bg-gradient-to-r from-[#FF6A00]/10 to-[#FF6A00]/5 rounded-full border border-[#FF6A00]/20">
                <p className="text-[#FF6A00] text-sm sm:text-base lg:text-lg tracking-wide">
                  ✦ Transform Your Life
                </p>
              </div>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="text-[#2C2C2C]/70 text-lg sm:text-xl lg:text-2xl leading-relaxed"
            >
              You've built a life that looks good — but doesn't feel right.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
            >
              <div className="flex flex-col lg:flex-row items-center lg:items-start gap-4 lg:gap-6">
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl text-[#0E2043] leading-[1.1] tracking-tight mb-0">
                  Now's the time to<br />
                  <span className="font-extrabold">rebel with heart.</span>
                </h1>
                
                {/* Decorative Image Badge */}
                <motion.div
                  initial={{ opacity: 0, scale: 0, rotate: -180 }}
                  animate={{ opacity: 1, scale: 1, rotate: 0 }}
                  transition={{ delay: 0.6, duration: 0.6, type: 'spring' }}
                  className="flex-shrink-0"
                >
                  <div className="relative w-20 h-20 sm:w-24 sm:h-24 lg:w-28 lg:h-28">
                    {/* Rotating background circle */}
                    <motion.div
                      animate={{ rotate: 360 }}
                      transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
                      className="absolute inset-0 rounded-full bg-gradient-to-br from-[#FF6A00] to-[#FF6A00]/60 opacity-20 blur-md"
                    />
                    
                    {/* Main badge */}
                    <div className="relative w-full h-full rounded-full bg-gradient-to-br from-[#FF6A00] to-[#FF6A00]/80 shadow-xl flex items-center justify-center border-4 border-white">
                      {/* Heart icon */}
                      <svg className="w-10 h-10 sm:w-12 sm:h-12 lg:w-14 lg:h-14 text-white" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
                      </svg>
                    </div>
                    
                    {/* Sparkle effect */}
                    <motion.div
                      animate={{ 
                        scale: [1, 1.2, 1],
                        opacity: [0.5, 1, 0.5]
                      }}
                      transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
                      className="absolute -top-1 -right-1 w-6 h-6 rounded-full bg-[#FEDCC4] border-2 border-white shadow-lg"
                    >
                      <span className="absolute inset-0 flex items-center justify-center text-xs">✨</span>
                    </motion.div>
                  </div>
                </motion.div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="space-y-4 sm:space-y-5 pt-2 sm:pt-4"
            >
              <p className="text-[#2C2C2C]/80 text-base sm:text-lg lg:text-xl leading-relaxed">
                <span className="text-[#0E2043]">It's time to rebel.</span> Not against others – but for yourself. For a life that feels alive, honest, and yours. Rebel Coaching helps ambitious professionals drop the masks, ditch the autopilot, and build momentum toward what truly matters.
              </p>

              <p className="text-[#2C2C2C]/80 text-base sm:text-lg lg:text-xl leading-relaxed">
                You'll gain grounded clarity, unshakable courage, and the energy to live with presence, purpose, and peace. <span className="text-[#0E2043]">Because this isn't about fixing you. It's about finding you.</span>
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.6 }}
              className="flex flex-col sm:flex-row gap-3 sm:gap-4 pt-2 sm:pt-4"
            >
              <Button className="bg-[#FF6A00] hover:bg-[#FF6A00]/90 text-white rounded-full px-6 sm:px-8 lg:px-10 py-5 sm:py-6 lg:py-7 text-base sm:text-lg lg:text-xl transition-all duration-300 hover:scale-105 hover:shadow-2xl group w-full sm:w-auto">
                Book Your Free Call
                <svg className="ml-2 w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Button>
              
              <Button variant="outline" className="border-2 border-[#0E2043]/20 text-[#0E2043] hover:bg-[#0E2043] hover:text-white rounded-full px-6 sm:px-8 lg:px-10 py-5 sm:py-6 lg:py-7 text-base sm:text-lg lg:text-xl transition-all duration-300 hover:scale-105 w-full sm:w-auto">
                Learn More
              </Button>
            </motion.div>

            {/* Trust Indicators */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9, duration: 0.6 }}
              className="flex flex-wrap items-center justify-center lg:justify-start gap-6 sm:gap-8 pt-6 sm:pt-8 border-t border-[#99A9C9]/20"
            >
              <div className="flex flex-col items-center lg:items-start">
                <span className="text-2xl sm:text-3xl text-[#FF6A00] mb-1">500+</span>
                <span className="text-[#2C2C2C]/60 text-xs sm:text-sm">Lives Transformed</span>
              </div>
              <div className="flex flex-col items-center lg:items-start">
                <span className="text-2xl sm:text-3xl text-[#FF6A00] mb-1">25+</span>
                <span className="text-[#2C2C2C]/60 text-xs sm:text-sm">Years Experience</span>
              </div>
              <div className="flex flex-col items-center lg:items-start">
                <span className="text-2xl sm:text-3xl text-[#FF6A00] mb-1">98%</span>
                <span className="text-[#2C2C2C]/60 text-xs sm:text-sm">Client Satisfaction</span>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Image */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut', delay: 0.2 }}
            className="relative w-full max-w-md mx-auto lg:max-w-none lg:ml-auto order-1 lg:order-2"
          >
            <div className="relative">
              {/* Decorative Background Shape - Adjusted for mobile */}
              <div className="absolute -inset-4 sm:-inset-8 bg-gradient-to-br from-[#FF6A00]/10 via-transparent to-[#99A9C9]/10 rounded-[2rem] sm:rounded-[3rem] blur-2xl" />
              
              {/* Main Image Container */}
              <div className="relative rounded-2xl sm:rounded-[2.5rem] overflow-hidden shadow-xl sm:shadow-2xl bg-white">
                <motion.div
                  animate={{ 
                    y: [0, -10, 0],
                  }}
                  transition={{ 
                    duration: 6, 
                    repeat: Infinity, 
                    ease: 'easeInOut' 
                  }}
                  className="w-full aspect-[3/4]"
                >
                  <img 
                    src="https://images.unsplash.com/photo-1609503842755-77f4a81d69ae?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBjb2FjaCUyMG1lbnRvcnxlbnwxfHx8fDE3NjM1MjI0OTZ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                    alt="Professional Executive Coach"
                    className="w-full h-full object-cover"
                  />
                </motion.div>
              </div>

              {/* Floating Badge - Repositioned for mobile */}
              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1.2, duration: 0.5, type: 'spring' }}
                className="absolute -bottom-4 sm:-bottom-6 -left-4 sm:-left-6 bg-white rounded-xl sm:rounded-2xl shadow-xl sm:shadow-2xl p-4 sm:p-6 border border-[#99A9C9]/10"
              >
                <div className="flex items-center gap-3 sm:gap-4">
                  <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-lg sm:rounded-xl bg-gradient-to-br from-[#FF6A00] to-[#FF6A00]/80 flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 sm:w-8 sm:h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  </div>
                  <div>
                    <div className="flex gap-0.5 mb-1">
                      {[...Array(5)].map((_, i) => (
                        <svg key={i} className="w-3 h-3 sm:w-4 sm:h-4 fill-[#FF6A00]" viewBox="0 0 20 20">
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                    </div>
                    <p className="text-xs sm:text-sm text-[#2C2C2C]">Certified ICF Coach</p>
                  </div>
                </div>
              </motion.div>

              {/* Decorative Accent Shapes - Hidden on small mobile */}
              <div className="absolute -top-4 -right-4 w-20 h-20 sm:w-24 sm:h-24 bg-[#FF6A00] rounded-full opacity-20 blur-2xl hidden sm:block" />
              <div className="absolute -bottom-4 -right-4 w-24 h-24 sm:w-32 sm:h-32 bg-[#99A9C9] rounded-full opacity-15 blur-2xl hidden sm:block" />
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator - Hidden on mobile */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.6 }}
        className="absolute bottom-8 sm:bottom-12 left-1/2 -translate-x-1/2 hidden lg:block"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
          className="flex flex-col items-center gap-2"
        >
          <span className="text-[#2C2C2C]/40 text-sm tracking-wider uppercase">Scroll</span>
          <div className="w-6 h-10 border-2 border-[#0E2043]/20 rounded-full flex items-start justify-center p-2">
            <div className="w-1.5 h-2 bg-[#FF6A00] rounded-full" />
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}