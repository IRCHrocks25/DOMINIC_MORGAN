import { motion } from 'motion/react';
import { Star } from 'lucide-react';

const testimonials = [
  {
    title: "A Trusted Coach & Client",
    rating: 5,
    text: "I was impressed by how Dominic guided me through a difficult time professionally. With confidence and humor, real validation, discovered new paths for myself and I recommend him wholeheartedly to anyone who is simply wants to get more out of their life.",
    highlight: "Seriously though, you are amazing!",
  },
  {
    title: "A Corporate Professional",
    rating: 5,
    text: "In an emergency situation at work, I desperately needed help to have a good conversation with my superiors and the HR department. Dominic sent me tools with full commitment stood up for me to prepare me mentally, psychologically and physically in the best possible way.\n\nAfter his coaching, I went into the interview with a much more optimistic mindset. The effective tips and tricks that he gave me as tools helped me enormously to turn the conversation from a stressful situation into a really positive perspective.",
    highlight: "I can only say: great job!",
  },
  {
    title: "A Valued Client",
    rating: 5,
    text: "I was blessed to experience a very valuable coaching session guided by him right from the start professionally, mixing humor with plenty of space and time to explain my topic. The right amount of questions and the right structure to guide me through.\n\nDominic is very supportive and a fantastic listener. He has the empathy and the integral approach guide my concerns and help me see next steps and the big step further!",
    highlight: "Thank you, Dominic. I will gladly continue working with you to every challenge!",
  },
];

export default function TestimonialsMarquee() {
  return (
    <section className="relative py-20 md:py-32 bg-[#FF6A00] overflow-hidden">
      {/* Grid Pattern Background */}
      <div className="absolute inset-0">
        {/* Main Grid Pattern */}
        <div 
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: `
              linear-gradient(to right, rgba(255, 255, 255, 0.3) 1px, transparent 1px),
              linear-gradient(to bottom, rgba(255, 255, 255, 0.3) 1px, transparent 1px)
            `,
            backgroundSize: '60px 60px'
          }}
        />
        
        {/* Larger Grid Overlay for Depth */}
        <div 
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `
              linear-gradient(to right, rgba(255, 255, 255, 0.5) 2px, transparent 2px),
              linear-gradient(to bottom, rgba(255, 255, 255, 0.5) 2px, transparent 2px)
            `,
            backgroundSize: '120px 120px'
          }}
        />
        
        {/* Gradient Fade from Top */}
        <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-[#FF6A00] to-transparent" />
        
        {/* Gradient Fade from Bottom */}
        <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-[#FF6A00] to-transparent" />
      </div>

      <div className="w-full max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 md:mb-20"
        >
          <p className="text-white/90 tracking-[0.2em] uppercase text-sm mb-4">
            TESTIMONIALS
          </p>
          <h2 className="text-white text-4xl md:text-5xl lg:text-6xl">
            The Results Speak for Themselves
          </h2>
        </motion.div>

        {/* Testimonial Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 flex flex-col"
            >
              {/* Title */}
              <h3 className="text-[#0E2043] text-xl mb-4">
                {testimonial.title}
              </h3>

              {/* Star Rating */}
              <div className="flex gap-1 mb-6">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-5 h-5 fill-[#FF6A00] text-[#FF6A00]"
                  />
                ))}
              </div>

              {/* Testimonial Text */}
              <div className="flex-1 space-y-4">
                <p className="text-[#2C2C2C]/80 text-base leading-relaxed whitespace-pre-line">
                  {testimonial.text}
                </p>

                {/* Highlighted Quote */}
                <p className="text-[#0E2043] text-base italic pt-4 border-t border-[#99A9C9]/20">
                  "{testimonial.highlight}"
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}