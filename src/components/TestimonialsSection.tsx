import { motion, useInView } from 'motion/react';
import { useRef } from 'react';
import { Star, Quote } from 'lucide-react';

const testimonials = [
  {
    quote: "Working with this coach has been transformational. The insights and strategies I gained have not only improved my leadership effectiveness but also positively impacted our entire organization.",
    author: "Sarah Johnson",
    role: "CEO, Tech Innovations Inc.",
    rating: 5,
  },
  {
    quote: "The coaching sessions provided me with clarity and confidence during a critical career transition. I now have the tools and mindset to tackle any challenge that comes my way.",
    author: "Michael Chen",
    role: "VP of Operations, Global Logistics",
    rating: 5,
  },
  {
    quote: "Exceptional coaching that delivers real results. The personalized approach and deep expertise helped me unlock potential I didn't know I had. Highly recommended for any serious leader.",
    author: "Emily Rodriguez",
    role: "Director, Strategic Initiatives",
    rating: 5,
  },
];

export default function TestimonialsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });

  return (
    <section ref={ref} id="testimonials" className="py-16 sm:py-20 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 sm:mb-16"
        >
          <h2 className="text-[#0E2043] mb-3 sm:mb-4 text-3xl sm:text-4xl lg:text-5xl px-4">
            What Leaders Are Saying
          </h2>
          <p className="text-[#2C2C2C]/70 max-w-2xl mx-auto text-base sm:text-lg lg:text-xl px-4">
            Real stories from leaders who've transformed their careers
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              whileHover={{ y: -8, transition: { duration: 0.3 } }}
              className="group relative"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-[#FF6A00]/0 to-[#99A9C9]/0 group-hover:from-[#FF6A00]/5 group-hover:to-[#99A9C9]/10 rounded-2xl sm:rounded-3xl transition-all duration-500 blur-xl" />
              
              <div className="relative bg-gradient-to-br from-white to-[#F6F7F9]/50 rounded-2xl sm:rounded-3xl p-6 sm:p-8 shadow-sm group-hover:shadow-2xl transition-all duration-300 border border-[#99A9C9]/10 h-full flex flex-col">
                {/* Quote Icon */}
                <div className="mb-4 sm:mb-6">
                  <Quote className="w-8 h-8 sm:w-10 sm:h-10 text-[#FF6A00] opacity-50" />
                </div>

                {/* Rating */}
                <div className="flex gap-1 mb-4 sm:mb-6">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 sm:w-5 sm:h-5 fill-[#FF6A00] text-[#FF6A00]" />
                  ))}
                </div>

                {/* Quote */}
                <blockquote className="text-[#2C2C2C]/80 mb-4 sm:mb-6 flex-grow leading-relaxed text-sm sm:text-base">
                  "{testimonial.quote}"
                </blockquote>

                {/* Author */}
                <div className="pt-4 sm:pt-6 border-t border-[#99A9C9]/10">
                  <p className="text-[#0E2043] mb-1 text-base sm:text-lg">
                    {testimonial.author}
                  </p>
                  <p className="text-[#99A9C9] text-xs sm:text-sm">
                    {testimonial.role}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}