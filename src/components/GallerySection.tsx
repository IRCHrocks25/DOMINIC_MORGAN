import { motion, useInView } from 'motion/react';
import { useRef } from 'react';
import { ImageWithFallback } from './figma/ImageWithFallback';

const galleryItems = [
  {
    title: 'Executive Retreats',
    description: 'Transformative leadership experiences',
    query: 'business executive meeting',
  },
  {
    title: 'Team Workshops',
    description: 'Building high-performing teams',
    query: 'team collaboration workshop',
  },
  {
    title: 'One-on-One Coaching',
    description: 'Personalized development',
    query: 'business coaching session',
  },
  {
    title: 'Leadership Summits',
    description: 'Network with top executives',
    query: 'business conference networking',
  },
  {
    title: 'Strategic Planning',
    description: 'Chart your path forward',
    query: 'business strategy planning',
  },
  {
    title: 'Global Programs',
    description: 'International leadership development',
    query: 'global business meeting',
  },
];

export default function GallerySection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });

  return (
    <section ref={ref} className="py-16 sm:py-20 lg:py-24 bg-[#F6F7F9]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 sm:mb-16"
        >
          <h2 className="text-[#0E2043] mb-3 sm:mb-4 text-3xl sm:text-4xl lg:text-5xl px-4">
            Experience the Difference
          </h2>
          <p className="text-[#2C2C2C]/70 max-w-2xl mx-auto text-base sm:text-lg lg:text-xl px-4">
            From intimate coaching sessions to large-scale leadership programs
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
          {galleryItems.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -12, transition: { duration: 0.3 } }}
              className="group relative"
            >
              <div className="relative aspect-[4/3] rounded-xl sm:rounded-2xl overflow-hidden shadow-lg group-hover:shadow-2xl transition-all duration-500">
                <ImageWithFallback
                  src={`https://source.unsplash.com/800x600/?${item.query}`}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0E2043]/90 via-[#0E2043]/40 to-transparent opacity-80 group-hover:opacity-95 transition-opacity duration-300" />
                
                {/* Content */}
                <div className="absolute inset-0 flex flex-col justify-end p-4 sm:p-6">
                  <motion.h3
                    initial={{ y: 20, opacity: 0 }}
                    whileHover={{ y: 0, opacity: 1 }}
                    className="text-white mb-1 sm:mb-2 text-lg sm:text-xl lg:text-2xl"
                  >
                    {item.title}
                  </motion.h3>
                  <motion.p
                    initial={{ y: 20, opacity: 0 }}
                    whileHover={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.1 }}
                    className="text-white/80 text-xs sm:text-sm"
                  >
                    {item.description}
                  </motion.p>
                </div>

                {/* Hover Effect Line */}
                <motion.div
                  initial={{ scaleX: 0 }}
                  whileHover={{ scaleX: 1 }}
                  transition={{ duration: 0.4 }}
                  className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-[#FF6A00] to-[#FF6A00]/50 origin-left"
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}