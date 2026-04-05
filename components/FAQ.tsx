'use client';
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';

const faqData = [
  {
    question: "What is an industrial embroidery machine?",
    answer: "An industrial embroidery machine is a high-speed, heavy-duty piece of equipment designed for continuous, commercial-grade production. Unlike domestic machines, industrial models like those from Mirai can handle large embroidery designs on thick fabrics, caps, and garments at speeds exceeding 1000 stitches per minute."
  },
  {
    question: "How do I choose the best embroidery machine for my business?",
    answer: "The best choice depends on your production volume. For start-ups and boutiques, a single-head machine is often ideal. For mass production or garment factories, multi-head machines (ranging from 2 to 24 heads) allow you to embroider multiple items simultaneously, significantly boosting efficiency."
  },
  {
    question: "Are your machines computerized embroidery machines?",
    answer: "Yes, all Mirai machines are fully computerized. They feature advanced control systems with touch-screen interfaces, allowing you to upload designs via USB or network, and set precise parameters for stitching, speed, and thread tension."
  },
  {
    question: "What kind of support is provided after purchasing an embroidery machine?",
    answer: "We provide comprehensive on-site installation, staff training, and expert technical support. Our machines are built for durability, but we also offer genuine spare parts and periodic maintenance services to keep your embroidery production running smoothly."
  },
  {
    question: "Do you offer multi-head embroidery machines for mass production?",
    answer: "Absolutely. We specialize in high-production multi-head industrial embroidery machines. Whether you need a 4-head, 6-head, or up to a 12-head machine, we provide configurations that maximize output while maintaining the highest quality standards."
  }
];

const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-16">
        <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl mb-4">Frequently Asked Questions</h2>
        <p className="text-gray-600">Got questions about our embroidery machinery? Find answers to common queries here.</p>
      </div>

      <div className="space-y-4">
        {faqData.map((item, index) => (
          <div 
            key={index} 
            className="border border-gray-200 rounded-2xl overflow-hidden bg-white shadow-sm hover:shadow-md transition-shadow"
          >
            <button
              onClick={() => setOpenIndex(openIndex === index ? null : index)}
              className="w-full flex items-center justify-between p-6 text-left focus:outline-none"
            >
              <span className="text-lg font-bold text-gray-800">{item.question}</span>
              <div className="flex-shrink-0 ml-4">
                {openIndex === index ? (
                  <Minus className="w-6 h-6 text-mirai-teal" />
                ) : (
                  <Plus className="w-6 h-6 text-teal-400" />
                )}
              </div>
            </button>
            <AnimatePresence>
              {openIndex === index && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="px-6 pb-6 text-gray-600 leading-relaxed border-t border-gray-50 pt-4">
                    {item.answer}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQ;
