import { motion, useInView } from 'motion/react';
import { useRef } from 'react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from './ui/accordion';

const faqs = [
  {
    question: 'What is executive coaching and how can it benefit me?',
    answer: 'Executive coaching is a personalized development process that helps leaders enhance their performance, achieve their goals, and unlock their full potential. Through one-on-one sessions, you\'ll gain clarity, develop new skills, and overcome challenges that may be holding you back.',
  },
  {
    question: 'How long does a typical coaching engagement last?',
    answer: 'Most coaching engagements run for 6-12 months, with sessions occurring bi-weekly or monthly. However, we customize the duration and frequency based on your specific goals, challenges, and organizational context to ensure maximum impact.',
  },
  {
    question: 'What makes your coaching approach different?',
    answer: 'Our approach combines proven methodologies with personalized strategies tailored to your unique situation. We focus on sustainable transformation rather than quick fixes, integrating behavioral science, leadership theory, and practical application to drive real results.',
  },
  {
    question: 'Do you offer group coaching or just individual sessions?',
    answer: 'We offer both individual executive coaching and group programs. Group coaching is excellent for team alignment and shared learning, while individual coaching provides deep personal development. We can help you determine the best fit for your needs.',
  },
  {
    question: 'How do we measure the success of coaching?',
    answer: 'Success is measured through a combination of quantitative metrics (360-degree feedback, performance indicators) and qualitative outcomes (leadership effectiveness, team engagement, goal achievement). We establish clear objectives at the outset and track progress throughout the engagement.',
  },
];

export default function AccordionSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <section ref={ref} className="py-16 sm:py-20 lg:py-24 bg-gradient-to-br from-[#F6F7F9] to-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 sm:mb-16"
        >
          <h2 className="text-[#0E2043] mb-3 sm:mb-4 text-3xl sm:text-4xl lg:text-5xl px-4">
            Frequently Asked Questions
          </h2>
          <p className="text-[#2C2C2C]/70 max-w-2xl mx-auto text-base sm:text-lg lg:text-xl px-4">
            Everything you need to know about our coaching process
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <Accordion type="single" collapsible className="space-y-3 sm:space-y-4">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <AccordionItem
                  value={`item-${index}`}
                  className="bg-white rounded-xl sm:rounded-2xl px-4 sm:px-6 border border-[#99A9C9]/10 shadow-sm hover:shadow-md transition-all duration-300"
                >
                  <AccordionTrigger className="text-[#0E2043] hover:text-[#FF6A00] transition-colors duration-300 py-4 sm:py-6 text-left text-sm sm:text-base lg:text-lg">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-[#2C2C2C]/70 pb-4 sm:pb-6 leading-relaxed text-sm sm:text-base">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              </motion.div>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
}