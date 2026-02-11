import { motion } from 'motion/react';
import { Button } from './ui/button';

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-[#F6F7F9]">
      {/* Background Pattern - Left Side */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: 'url(/images/image.png)',
          backgroundPosition: 'left center',
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
          opacity: 0.1,
        }}
      />

      {/* Group 1 Image - Full Height Right Side */}
      <div 
        className="absolute top-0 bottom-0 right-0 z-[2]"
        style={{
          left: '50%',
          width: '50%',
          border: 'none',
          outline: 'none',
        }}
      >
        <img 
          src="/images/Group%201.png"
          alt="Professional Executive Coach"
          className="w-full h-full"
          style={{ 
            objectFit: 'cover',
            objectPosition: 'right center',
            border: 'none',
            outline: 'none',
          }}
        />
      </div>

      <div className="w-full max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-24 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 xl:gap-16 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="space-y-6 sm:space-y-8 lg:space-y-10 text-center lg:text-left relative z-10"
          >
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
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl text-[#0E2043] leading-[1.1] tracking-tight mb-0">
                Now's the time to<br />
                <span className="font-extrabold">rebel with heart.</span>
              </h1>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="space-y-4 sm:space-y-5 pt-2 sm:pt-4"
            >
              <p className="text-[#2C2C2C]/80 text-base sm:text-lg lg:text-xl leading-relaxed">
                <span className="text-[#0E2043] font-bold">It's time to rebel.</span> Not against others – but for yourself. For a life that feels alive, honest, and yours. Rebel Coaching helps ambitious professionals drop the masks, ditch the autopilot, and build momentum toward what truly matters.
              </p>

              <p className="text-[#2C2C2C]/80 text-base sm:text-lg lg:text-xl leading-relaxed">
                You'll gain grounded clarity, unshakable courage, and the energy to live with presence, purpose, and peace. <span className="text-[#0E2043] font-bold">Because this isn't about fixing you. It's about finding you.</span>
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.6 }}
              className="flex flex-col sm:flex-row gap-3 sm:gap-4 pt-2 sm:pt-4"
            >
              <Button className="bg-[#FF6A00] hover:bg-[#FF6A00]/90 text-white rounded-full px-6 sm:px-8 lg:px-10 py-5 sm:py-6 lg:py-7 text-base sm:text-lg lg:text-xl transition-all duration-300 hover:scale-105 hover:shadow-2xl group w-full sm:w-auto whitespace-nowrap">
                Book Your Matchmaker Call Today!
                <svg className="ml-2 w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Button>
            </motion.div>
          </motion.div>

          {/* Divider Line - Dotted */}
          <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-px z-20" style={{ transform: 'translateX(-50%)' }}>
            <div className="h-full w-full" style={{
              backgroundImage: 'repeating-linear-gradient(to bottom, #99A9C9 0, #99A9C9 4px, transparent 4px, transparent 8px)',
              opacity: 0.3
            }} />
          </div>

        </div>
      </div>

    </section>
  );
}