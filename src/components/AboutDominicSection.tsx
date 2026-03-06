import { motion } from 'motion/react';
import { ImageWithFallback } from './figma/ImageWithFallback';

export default function AboutDominicSection() {
  return (
    <section className="relative bg-[#F6F7F9] overflow-hidden">
      {/* Header - Full width at top */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center px-4 sm:px-6 lg:px-8 pt-10 sm:pt-16 md:pt-20 pb-6 sm:pb-12"
      >
        <p className="text-[#FF6A00] text-xs sm:text-sm tracking-widest uppercase mb-4 sm:mb-6">
          ABOUT DOMINIC
        </p>
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-[#0E2043] mb-3 sm:mb-4 leading-tight">
          From Burnout to Breakthrough:<br />
          <span className="font-bold">My Journey, Your Inspiration</span>
        </h2>
        <div className="w-20 sm:w-24 h-0.5 bg-[#FF6A00] mx-auto" />
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-0">
        
        {/* Left Side - Image with Orange Accent */}
        <motion.div 
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="lg:col-span-5 relative order-1 lg:order-1"
        >
          {/* Orange Accent Bar */}
          <div className="absolute left-0 top-0 bottom-0 w-12 sm:w-20 md:w-32 bg-[#FF6A00] z-10" />
          
          {/* Image Container */}
          <div className="relative h-[200px] sm:h-[280px] lg:h-[400px]">
            <ImageWithFallback
              src="/images/dominic 1.png"
              alt="Dominic - Rebel Coach"
              className="w-full h-full object-cover"
            />
          </div>
        </motion.div>

        {/* Right Side - Content */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="lg:col-span-7 px-4 sm:px-6 md:px-12 lg:px-16 xl:px-24 py-6 sm:py-12 md:py-16 lg:py-20 flex items-center order-2 lg:order-2"
        >
          <div className="max-w-2xl w-full">
            
            {/* Body Content */}
            <div className="space-y-3 sm:space-y-4 text-[#2C2C2C]/80 text-sm sm:text-base md:text-lg leading-relaxed mb-6 sm:mb-8">
              <p className="font-bold">
                I'm Dominic, and I didn't become a Rebel Coach by accident. I became one because I had to.
              </p>
              
              <p>
                I've been a CEO, Chairman, and entrepreneur – and I've burned out chasing the wrong version of success.
              </p>
              
              <p>
                On paper, everything looked right. But inside? I was running on empty – trapped in a life shaped by other people's expectations.
              </p>
              
              <p>
                Then came 2003. Burnout. Hard.
              </p>
              <div className="w-full h-px bg-[#FF6A00] my-4 max-w-[200px]" />
              
              <p>
                It started raw cold. It forced me to face a truth I had lost myself in the process of achieving. That collapse became my wake-up call. It taught me that success without alignment is just another form of self-betrayal.
              </p>
              
              <p>
                So I rebuilt from scratch. Not with a straight line, but through bold detours: Managing bars. Training in Brazil. Travelling. A series of radical pivots – each one a mirror, a test, and a return to my true self. I didn't just change jobs. I changed my relationship with life.
              </p>
              
              <p>
                Eventually, I returned to the business world – on my terms. With a new kind of power: authentic, clear, and unshakably mine.
              </p>
              
              <p>
                I also dove deep into world-class coaching: <span className="text-[#FF6A00]">Graduating from Tony Robbins' Fall Mastery and Leadership Academy</span>. <span className="text-[#FF6A00]">Becoming a Certified Integral Coach</span>. I didn't just study change. <span className="text-[#0E2043]">I lived it</span>.
              </p>
            </div>

            {/* CTA Button */}
            <motion.button
              whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(255, 106, 0, 0.3)" }}
              whileTap={{ scale: 0.98 }}
              className="w-full sm:w-auto min-h-[48px] px-5 sm:px-8 py-3 sm:py-4 bg-[#FF6A00] text-white rounded-full text-xs sm:text-sm md:text-base lg:text-lg hover:bg-[#FF6A00]/90 transition-all duration-300 shadow-lg touch-manipulation whitespace-normal sm:whitespace-nowrap text-center"
            >
              Ready to write your own story? Let's talk.
            </motion.button>

          </div>
        </motion.div>

      </div>
    </section>
  );
}