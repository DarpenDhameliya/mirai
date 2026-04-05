'use client';
import React from 'react';
import { motion } from 'framer-motion';
import heroImage from '@/asset/images/mirai.jpg';

const Hero: React.FC = () => {
  return (
    <div className="relative min-h-[90vh] flex items-center overflow-hidden bg-mirai-teal">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage.src}
          alt="Premium Industrial Embroidery Machine"
          className="w-full h-full object-cover object-center"
        />
        {/* Modern dark gradient overlay to ensure text readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-gray-950/95 via-gray-900/80 to-gray-900/40 mix-blend-multiply" />
        <div className="absolute inset-0 bg-teal-950/30 mix-blend-overlay" /> {/* Subtle brand tint */}
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28 flex flex-col items-start text-left">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-3xl"
        >
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="inline-flex items-center px-4 py-2 rounded-full border border-teal-500/30 bg-teal-900/40 backdrop-blur-md mb-8 shadow-lg shadow-teal-900/20"
          >
            <span className="w-2 h-2 rounded-full bg-teal-400 mr-3 animate-pulse"></span>
            <span className="text-teal-100 font-medium tracking-widest uppercase text-xs sm:text-sm">Welcome to Excellence</span>
          </motion.div>

          {/* Headline */}
          <h1 className="text-5xl sm:text-6xl md:text-7xl font-extrabold text-white tracking-tight leading-tight mb-6 drop-shadow-xl">
            Maximize Your <br className="hidden sm:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-300 to-emerald-100">Industrial Embroidery Production</span>
          </h1>

          {/* Subheading */}
          <p className="mt-4 text-lg sm:text-xl text-gray-300 max-w-2xl font-light leading-relaxed mb-10 drop-shadow-md">
            Get the latest technology and boost your efficiency. Choose the <span className="font-bold text-teal-300">best industrial embroidery machine</span> for your business. Our premium machines are designed for uncompromising durability and unmatched precision.
          </p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="flex flex-col sm:flex-row gap-5"
          >
            <a
              href="#contact"
              className="group relative inline-flex items-center justify-center px-8 py-4 px-10 border border-transparent text-base font-bold rounded-xl text-mirai-teal bg-white hover:bg-teal-50 transition-all duration-300 shadow-[0_0_20px_rgba(255,255,255,0.2)] hover:shadow-[0_0_30px_rgba(255,255,255,0.4)] hover:-translate-y-1 overflow-hidden"
            >
              <span className="relative z-10">Get a Quote</span>
              <div className="absolute inset-0 h-full w-full scale-0 rounded-xl transition-all duration-300 group-hover:scale-100 group-hover:bg-white/20"></div>
            </a>

            <a
              href="#gallery"
              className="inline-flex items-center justify-center px-8 py-4 px-10 border border-teal-500/40 text-base font-medium rounded-xl text-white bg-black/40 backdrop-blur-md hover:bg-black/60 hover:border-teal-400/60 transition-all duration-300 shadow-xl hover:-translate-y-1"
            >
              View Machines
            </a>
          </motion.div>

          {/* Footer Features */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 1 }}
            className="mt-16 flex items-center space-x-6 text-sm font-semibold tracking-widest text-teal-200/70 uppercase"
          >
            <div className="flex items-center gap-3">
              <span className="w-10 h-px bg-teal-500/50"></span>
              <span>Global Quality</span>
            </div>
            <span className="text-teal-500/50">•</span>
            <span>Local Trust</span>
          </motion.div>
        </motion.div>
      </div>

      {/* Decorative Bottom Transition to match body bg-gray-50 */}
      {/* <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-gray-50 to-transparent z-10 pointer-events-none" /> */}
    </div>
  );
};

export default Hero;
