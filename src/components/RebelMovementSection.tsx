import { motion } from 'motion/react';
import { ImageWithFallback } from './figma/ImageWithFallback';

export default function RebelMovementSection() {
  return (
    <section className="relative py-20 md:py-32 bg-[#F6F7F9] overflow-hidden">
      {/* Decorative Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div 
          className="absolute inset-0"
          style={{
            backgroundImage: `
              repeating-linear-gradient(
                45deg,
                transparent,
                transparent 60px,
                rgba(44, 44, 44, 0.05) 60px,
                rgba(44, 44, 44, 0.05) 120px
              )
            `
          }}
        />
      </div>

      <div className="w-full max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* The Rebel Movement Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center mb-32"
        >
          {/* Text Content - Left */}
          <div className="space-y-6 lg:pr-8">
            <div>
              <h2 className="text-4xl md:text-5xl lg:text-6xl text-[#0E2043]">
                The <span className="italic">Rebel Movement</span>
              </h2>
              {/* Orange accent line swish */}
              <div className="w-24 h-0.5 bg-[#FF6A00] mt-4" />
            </div>
            
            <div className="space-y-4 text-[#2C2C2C]/80 text-lg leading-relaxed">
              <p>
                This is more than coaching. It's a call to rebel with heart.
              </p>
              
              <p>
                When you stop living on autopilot and start living in truth, you become a force — at work, at home, in your relationships, in your community.
              </p>
              
              <p>
                This is radical honesty. Inner freedom. Realignment with what really matters.
              </p>
              
              <p>
                And because life is precious, 10% of all proceeds support Allan Children's Hospice — a place that reminds us to live with urgency, gratitude, and love.
              </p>
              
              <p className="text-[#0E2043]">
                This connects deeply to my "Memento Mori" philosophy: You're going to die. So start living like it matters.
              </p>
            </div>
          </div>

          {/* Image - Right */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="relative"
          >
            <div className="relative rounded-3xl overflow-hidden shadow-2xl aspect-[4/3]">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1551731409-43eb3e517a1a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3b21hbiUyMGNvYWNoaW5nJTIweY9uclMwMjBlbXBvd2VybWVudHxlbnwxfHx8fDE3NjM1ODgzMzF8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Empowering coaching session"
                className="w-full h-full object-cover"
              />
              {/* Overlay gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#0E2043]/20 to-transparent" />
            </div>
          </motion.div>
        </motion.div>

        {/* Your Inevitable Transformation Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center"
        >
          {/* Image - Left */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="relative order-2 lg:order-1"
          >
            <div className="relative rounded-3xl overflow-hidden shadow-2xl aspect-[4/3]">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1758519290801-c07424a5142a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb25maWRlbnQlMjBidXNpbmVzcyUyMGNvYWNoJTIwY2VsZWJyYXRpbmclMjBzdWNjZXNzfGVufDF8fHx8MTc2MzU4ODMzMXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Confident business professional celebrating transformation"
                className="w-full h-full object-cover"
              />
              {/* Overlay gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#0E2043]/20 to-transparent" />
            </div>
          </motion.div>

          {/* Text Content - Right */}
          <div className="space-y-6 lg:pl-8 order-1 lg:order-2">
            <div>
              <h2 className="text-4xl md:text-5xl lg:text-6xl text-[#0E2043]">
                Your <span className="italic">Inevitable</span> Transformation
              </h2>
              {/* Orange accent line swish */}
              <div className="w-24 h-0.5 bg-[#FF6A00] mt-4" />
            </div>
            
            <div className="space-y-4 text-[#2C2C2C]/80 text-lg leading-relaxed">
              <p>
                With the right space, guidance, and clarity, change doesn't just become possible – it becomes inevitable.
              </p>
              
              <p>
                This is where you learn to trust yourself again, gain the courage to act, and experience a level of freedom and joy that lasts.
              </p>
              
              <p className="text-[#0E2043]">
                Join the movement. Transform your world. And the one around you.
              </p>
            </div>

            {/* CTA Button */}
            <motion.button
              whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(255, 106, 0, 0.3)" }}
              whileTap={{ scale: 0.98 }}
              className="mt-8 px-8 py-4 bg-[#FF6A00] text-white rounded-full text-lg hover:bg-[#FF6A00]/90 transition-all duration-300 shadow-lg"
            >
              Book Your Free Matchmaker Call Today!
            </motion.button>
          </div>
        </motion.div>

      </div>
    </section>
  );
}