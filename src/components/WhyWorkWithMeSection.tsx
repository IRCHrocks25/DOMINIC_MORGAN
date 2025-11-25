import { motion, useInView } from 'motion/react';
import { useRef } from 'react';
import { Button } from './ui/button';
import { ImageWithFallback } from './figma/ImageWithFallback';

const valueCards = [
  {
    image: "https://images.unsplash.com/photo-1758518730384-be3d205838e8?w=800&q=80",
    title: "Authenticity at Eye Level",
    description: "I don't speak from pedestals. I live what I teach. This work is real, grounded, and born fromulus.happened.",
    span: "col-span-1"
  },
  {
    image: "https://images.unsplash.com/photo-1707301280380-56f7e7a00aef?w=800&q=80",
    title: "Depth & Substance Over Hype",
    description: "No generic positivity or cookie-cutter formulas. We unlock what truly drives you — your values, your needs, your awareness — so real change sticks.",
    span: "col-span-1"
  },
  {
    image: "https://images.unsplash.com/photo-1739298061740-5ed03045b280?w=800&q=80",
    title: "Your Personal Rebel Spirit",
    description: "This isn't some \"life-by-the-manual\" approach. I meet you in your messiest moments, ask the hard questions, and guide you to your own truth, not someone else's roadmap.",
    subtext: "This rebel spirit is about thinking differently for a better life, allowing you to use all it to emerge beyond societal guidelines.",
    span: "col-span-1"
  },
  {
    image: "https://images.unsplash.com/photo-1745478433640-62d7a2fe9b96?w=800&q=80",
    title: "Clarity, Structure & Support That Stick",
    description: "You'll get clear, actionable steps, and I stay by your side between the \"aha!\" moments. With Mindshop or small support, creating guardrails that's ultra-human, and real I soundly challenge and reinforce you every step of the way.",
    span: "col-span-1"
  },
  {
    image: "https://images.unsplash.com/photo-1761933799610-c9a75f115794?w=800&q=80",
    title: "A Holistic & Human Lens",
    description: "As an Integral Coach and also trained under Tony Robbins, I work with your whole self: body, mind, soul, thoughts, emotions, and the systems around you — from the boardroom to your most personal relationships. With love, truth, and lasting connection.",
    span: "col-span-1"
  }
];

export default function WhyWorkWithMeSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });

  return (
    <section ref={ref} className="py-16 sm:py-20 lg:py-24 bg-gradient-to-br from-[#F6F7F9] via-white to-[#F6F7F9] relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#FEDCC4]/20 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[#99A9C9]/10 rounded-full blur-3xl" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 sm:mb-16 lg:mb-20"
        >
          <p className="text-[#FF6A00] uppercase tracking-wider text-xs sm:text-sm mb-4">
            WHY WORK WITH ME
          </p>
          
          <h2 className="text-[#0E2043] mb-6 text-3xl sm:text-4xl lg:text-5xl leading-tight max-w-4xl mx-auto">
            Because Real Change Demands More Than Just Talk
          </h2>
          
          <p className="text-[#2C2C2C]/80 max-w-3xl mx-auto text-sm sm:text-base lg:text-lg leading-relaxed">
            You've done the work. Hit the goals, and checked the boxes — yet something still feels off. That quiet pull 
            toward meaning? I've been there. <span className="font-semibold text-[#0E2043]">Rebel Coaching</span> isn't 
            just about ticking boxes or boosting performance. It's about realignment, truth, and the courage to live what actually matters.
          </p>
        </motion.div>

        {/* Cards Grid - 2 on top, 3 on bottom */}
        <div className="space-y-6 lg:space-y-8 mb-12">
          {/* Top Row - 2 cards */}
          <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
            {valueCards.slice(0, 2).map((card, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.1 + index * 0.1 }}
                className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
              >
                {/* Image */}
                <div className="relative h-48 sm:h-56 lg:h-64 overflow-hidden">
                  <ImageWithFallback
                    src={card.image}
                    alt={card.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0E2043]/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>
                
                {/* Content */}
                <div className="p-6 sm:p-8">
                  <h3 className="text-[#FF6A00] text-xl sm:text-2xl mb-4">
                    {card.title}
                  </h3>
                  <p className="text-[#2C2C2C]/80 text-sm sm:text-base leading-relaxed">
                    {card.description}
                  </p>
                  {card.subtext && (
                    <p className="text-[#2C2C2C]/70 text-xs sm:text-sm leading-relaxed mt-3 italic">
                      {card.subtext}
                    </p>
                  )}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Bottom Row - 3 cards */}
          <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
            {valueCards.slice(2).map((card, index) => (
              <motion.div
                key={index + 2}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
              >
                {/* Image */}
                <div className="relative h-48 sm:h-56 overflow-hidden">
                  <ImageWithFallback
                    src={card.image}
                    alt={card.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0E2043]/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>
                
                {/* Content */}
                <div className="p-6">
                  <h3 className="text-[#FF6A00] text-lg sm:text-xl mb-3">
                    {card.title}
                  </h3>
                  <p className="text-[#2C2C2C]/80 text-sm leading-relaxed">
                    {card.description}
                  </p>
                  {card.subtext && (
                    <p className="text-[#2C2C2C]/70 text-xs leading-relaxed mt-3 italic">
                      {card.subtext}
                    </p>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-center"
        >
          <Button className="bg-[#FF6A00] hover:bg-[#FF6A00]/90 text-white rounded-full px-10 sm:px-12 py-6 sm:py-7 text-sm sm:text-base transition-all duration-300 hover:scale-105 hover:shadow-2xl">
            Experience the difference. Let's connect now.
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
