'use client';
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Footer: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <>
      <footer className="relative bg-teal-950 text-white pt-20 pb-10 overflow-hidden border-t border-teal-900 shadow-[0_-10px_40px_rgba(0,0,0,0.1)]">
        {/* Subtle Background Glows */}
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-mirai-teal/30 rounded-full blur-[100px] pointer-events-none"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-emerald-900/20 rounded-full blur-[100px] pointer-events-none"></div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-16 mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="flex flex-col"
            >
              <div className="flex flex-col mb-6">
                <span className="text-white font-extrabold text-3xl tracking-wider leading-none drop-shadow-md">MIRAI</span>
                <span className="text-teal-400 text-xs tracking-[0.25em] font-bold uppercase mt-1">Embroidery Machine</span>
              </div>
              <p className="text-teal-100/60 leading-relaxed mb-8 max-w-sm font-light">
                Empowering businesses globally with precision technology for over two decades. Your success and production efficiency is our ultimate mission.
              </p>
              <div className="flex space-x-5">
                <a href="https://wa.me/919898702417" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-teal-100 hover:bg-green-500 hover:text-white transition-all duration-300 shadow-lg" target="_blank" rel="noopener noreferrer">
                  <i className="fa-brands fa-whatsapp text-xl"></i>
                </a>
                <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-teal-100 hover:bg-teal-500 hover:text-white transition-all duration-300 shadow-lg">
                  <i className="fa-brands fa-instagram text-xl"></i>
                </a>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <h4 className="font-bold text-lg mb-8 uppercase tracking-widest text-white flex items-center gap-3">
                <span className="w-4 h-px bg-teal-500"></span> Quick Links
              </h4>
              <ul className="space-y-4 text-teal-100/70 font-light">
                <li><a href="#home" className="hover:text-teal-300 hover:translate-x-1 inline-block transition-all duration-300">Home</a></li>
                <li><a href="#about" className="hover:text-teal-300 hover:translate-x-1 inline-block transition-all duration-300">About Us</a></li>
                <li><a href="#gallery" className="hover:text-teal-300 hover:translate-x-1 inline-block transition-all duration-300">Machinery Gallery</a></li>
                <li><a href="#contact" className="hover:text-teal-300 hover:translate-x-1 inline-block transition-all duration-300">Request Quote</a></li>
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <h4 className="font-bold text-lg mb-8 uppercase tracking-widest text-white flex items-center gap-3">
                <span className="w-4 h-px bg-teal-500"></span> Services
              </h4>
              <ul className="space-y-4 text-teal-100/70 font-light">
                <li><a href="#" className="hover:text-teal-300 hover:translate-x-1 inline-block transition-all duration-300">On-Site Installation</a></li>
                <li><a href="#" className="hover:text-teal-300 hover:translate-x-1 inline-block transition-all duration-300">Staff Training</a></li>
                <li><a href="#" className="hover:text-teal-300 hover:translate-x-1 inline-block transition-all duration-300">Genuine Spare Parts</a></li>
                <li><a href="#" className="hover:text-teal-300 hover:translate-x-1 inline-block transition-all duration-300">Maintenance AMC</a></li>
              </ul>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="pt-8 border-t border-teal-800/50 flex flex-col md:flex-row justify-between items-center text-sm text-teal-100/40 font-light"
          >
            <p>© {new Date().getFullYear()} Mirai Embroidery Machine. All rights reserved.</p>
            <div className="mt-4 md:mt-0 flex space-x-8">
              <a href="#" className="hover:text-teal-200 transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-teal-200 transition-colors">Terms of Service</a>
            </div>
          </motion.div>
        </div>
      </footer>

      <AnimatePresence>
        {isVisible && (
          <motion.button
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.5 }}
            onClick={scrollToTop}
            className="fixed bottom-8 right-8 z-50 w-12 h-12 flex items-center justify-center rounded-full bg-teal-500 text-white shadow-lg shadow-teal-500/30 hover:bg-teal-400 hover:-translate-y-1 transition-all duration-300"
            aria-label="Scroll to top"
          >
            <i className="fa-solid fa-arrow-up"></i>
          </motion.button>
        )}
      </AnimatePresence>
    </>
  );
};

export default Footer;
