import { motion, useInView } from 'motion/react';
import { useRef } from 'react';
import { Button } from './ui/button';
import { ImageWithFallback } from './figma/ImageWithFallback';

export default function CareerHighlightsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });

  return (
    <section ref={ref} className="py-16 sm:py-20 lg:py-24 bg-gradient-to-br from-white via-[#F6F7F9] to-[#FEDCC4]/20 relative overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-[#FF6A00]/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-[#99A9C9]/10 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Top Section: Image and Content */}
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 mb-16 sm:mb-20 lg:mb-24">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1762505465530-0584b9771329?w=800&q=80"
                alt="Dominic - Executive Coach"
                className="w-full h-full object-cover"
              />
              {/* Orange gradient overlay at bottom */}
              <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#FF6A00]/30 to-transparent" />
            </div>
            
            {/* Decorative logo overlay - top left */}
            <div className="absolute -top-6 -left-6 w-24 h-24 bg-gradient-to-br from-[#FF6A00]/20 to-[#FEDCC4]/30 rounded-2xl backdrop-blur-sm flex items-center justify-center">
              <svg viewBox="0 0 100 100" className="w-16 h-16">
                <path
                  d="M30 70 L50 30 L70 70 M35 60 L65 60"
                  stroke="#FF6A00"
                  strokeWidth="4"
                  fill="none"
                  strokeLinecap="round"
                />
              </svg>
            </div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-col justify-center"
          >
            <p className="text-[#FF6A00] uppercase tracking-wider text-xs sm:text-sm mb-4">
              CAREER HIGHLIGHTS
            </p>
            
            <h2 className="text-[#0E2043] mb-6 text-3xl sm:text-4xl lg:text-5xl leading-tight">
              From Boardrooms to Burnouts to Breakthroughs: A Career Rooted in Real-Life Transformation
            </h2>
            
            <div className="space-y-4 mb-8 text-[#2C2C2C]/80 leading-relaxed">
              <p className="text-sm sm:text-base lg:text-lg">
                Dominic brings a rare combination of executive leadership, entrepreneurial grit, and 
                personal reinvention. His coaching isn't built on theory; it's earned through decades of 
                high-stakes experience, global perspective, and world-class certification.
              </p>
              
              <p className="text-sm sm:text-base lg:text-lg">
                He intentionally fuses his diverse professional and life experiences with his multi-faceted 
                coaching education to offer a truly unique "rebel approach."
              </p>
            </div>
            
            <Button className="bg-[#FF6A00] hover:bg-[#FF6A00]/90 text-white rounded-full px-8 sm:px-10 py-5 sm:py-6 text-sm sm:text-base transition-all duration-300 hover:scale-105 hover:shadow-xl w-full sm:w-auto">
              Book Your Free Matchmaker Call Today!
            </Button>
          </motion.div>
        </div>

        {/* Three Columns Section */}
        <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
          {/* Column 1: Top-Tier Coaching Credentials */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="space-y-6"
          >
            {/* Orange divider line */}
            <div className="w-16 h-1 bg-[#FF6A00] rounded-full" />
            
            <h3 className="text-[#0E2043] text-xl sm:text-2xl">
              Top-Tier Coaching Credentials
            </h3>
            
            <div className="space-y-4 text-[#2C2C2C]/80 text-sm sm:text-base leading-relaxed">
              <div>
                <p className="font-semibold text-[#0E2043] mb-2">
                  Graduate of Tony Robbins Mastery University
                </p>
                <p>
                  Certified as Life and Results Coach, Strategic Intervention Coach, 
                  Business Mastery, and Date with Destiny and Leadership (with Tony Robbins 
                  and Cloé Madanes Leadership Team)
                </p>
              </div>
              
              <div>
                <p className="font-semibold text-[#0E2043] mb-2">
                  Certified Integral Coach
                </p>
                <p>
                  Training with Coaching Institute | Vital Sense (Switzerland), recognized as 
                  one of the top coaching institutes worldwide
                </p>
              </div>
              
              <div>
                <p className="font-semibold text-[#0E2043] mb-2">
                  Professional Accreditations & Titles
                </p>
                <p>
                  Member of the <span className="font-semibold">Swiss Coaching Association (SCA)</span> and 
                  the <span className="font-semibold">International Association of Coaching–Institutes (ICI)</span>, 
                  upholding highest professional standards
                </p>
              </div>
            </div>
          </motion.div>

          {/* Column 2: Executive & Entrepreneurial Leadership */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="space-y-6"
          >
            {/* Orange divider line */}
            <div className="w-16 h-1 bg-[#FF6A00] rounded-full" />
            
            <h3 className="text-[#0E2043] text-xl sm:text-2xl">
              Executive & Entrepreneurial Leadership
            </h3>
            
            <div className="space-y-4 text-[#2C2C2C]/80 text-sm sm:text-base leading-relaxed">
              <p>
                Became <span className="font-semibold text-[#0E2043]">CEO at just 24</span>, 
                leading in high-pressure, fast-moving environments
              </p>
              
              <p>
                Served as <span className="font-semibold text-[#0E2043]">Head of Commercial Planning</span> for 
                a major Swiss corporation
              </p>
              
              <p>
                Co-founded an IT company that grew to <span className="font-semibold text-[#0E2043]">50+ 
                person team</span>, demonstrating strategic leadership and real business growth
              </p>
              
              <p>
                IT Project Leader & Process Manager for large-scale transformation projects
              </p>
            </div>
          </motion.div>

          {/* Column 3: Multi-Industry, Multi-Role Expertise */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="space-y-6"
          >
            {/* Orange divider line */}
            <div className="w-16 h-1 bg-[#FF6A00] rounded-full" />
            
            <h3 className="text-[#0E2043] text-xl sm:text-2xl">
              Multi-Industry, Multi-Role Expertise
            </h3>
            
            <div className="space-y-4 text-[#2C2C2C]/80 text-sm sm:text-base leading-relaxed">
              <p>
                Has occupationally navigated a <span className="font-semibold text-[#0E2043]">wide 
                range of major life pivots</span>, demonstrating his commitment to continuous reinvention
              </p>
              
              <p>
                Additional experience as a <span className="font-semibold text-[#0E2043]">teacher, 
                business mentor, bar manager</span>, and even a <span className="font-semibold text-[#0E2043]">professional 
                photographer</span>
              </p>
              
              <p>
                Understands what it takes to reinvent, reframe, and move forward in completely new 
                environments
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}