'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2, Award } from 'lucide-react';

const About: React.FC = () => {
  return (
    <div className="relative py-24 bg-white overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 rounded-full bg-teal-50 opacity-50 blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-[30rem] h-[30rem] rounded-full bg-emerald-50 opacity-40 blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="lg:grid lg:grid-cols-2 lg:gap-20 items-center">

          {/* Left Column: Images/Visuals */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative mb-16 lg:mb-0"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl shadow-teal-900/10 group">
              <div className="absolute inset-0 bg-mirai-teal/20 mix-blend-overlay z-10 group-hover:bg-transparent transition-colors duration-700"></div>
              <img
                src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=1000&auto=format&fit=crop"
                alt="High-Tech Manufacturing Floor"
                className="w-full h-[500px] object-cover transform group-hover:scale-105 transition-transform duration-1000 ease-out"
              />
            </div>

            {/* Floating Stats Badge */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="absolute -bottom-8 -right-8 sm:-bottom-10 sm:-right-10 bg-white p-8 rounded-2xl shadow-xl shadow-teal-900/5 border border-teal-50 border-white/50 backdrop-blur-sm z-20"
            >
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-full bg-teal-50 flex items-center justify-center text-mirai-teal">
                  <Award className="w-7 h-7" />
                </div>
                <div>
                  <span className="text-mirai-teal text-5xl font-extrabold tracking-tighter block leading-none">20<span className="text-teal-400">+</span></span>
                  <span className="text-gray-500 text-sm font-semibold uppercase tracking-widest mt-1 block">Years Experience</span>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Column: Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="flex items-center gap-3 mb-4">
              <span className="w-8 h-px bg-teal-400"></span>
              <span className="text-teal-600 font-bold tracking-widest uppercase text-sm">About Mirai</span>
            </div>

            <h2 className="text-4xl sm:text-5xl font-extrabold text-gray-900 mb-8 leading-tight">
              Pioneering <span className="text-transparent bg-clip-text bg-gradient-to-r from-mirai-teal to-teal-400">Excellence</span> in Industrial Embroidery Machinery
            </h2>

            <p className="text-lg text-gray-600 mb-6 leading-relaxed font-light">
              At Mirai Embroidery, we pride ourselves on being a premier industrial embroidery machinery supplier. For over two decades, we have been the trusted partner providing unwavering quality and innovation to garment businesses worldwide.
            </p>

            <p className="text-lg text-gray-600 mb-10 leading-relaxed font-light">
              We specialize in importing and distributing state-of-the-art computerized embroidery machines that cater to garment manufacturers, boutique owners, and mass production facilities. Our dedication doesn't stop at sales; our exceptional after-sales service and technical support are what truly set us apart in the embroidery industry.
            </p>

            <div className="grid sm:grid-cols-2 gap-6 bg-gray-50 p-6 rounded-2xl border border-gray-100">
              <div className="flex gap-4">
                <div className="mt-1 flex-shrink-0">
                  <CheckCircle2 className="w-6 h-6 text-teal-500" />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 text-lg">Expert Support</h4>
                  <p className="text-sm text-gray-500 mt-1">24/7 priority technical assistance for all clients.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="mt-1 flex-shrink-0">
                  <CheckCircle2 className="w-6 h-6 text-teal-500" />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 text-lg">Latest Tech</h4>
                  <p className="text-sm text-gray-500 mt-1">Sourced with the most modern cutting-edge features.</p>
                </div>
              </div>
            </div>

            <motion.div
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="mt-10 inline-block"
            >
              <a href="#contact" className="inline-flex items-center px-8 py-4 text-base font-bold rounded-xl text-white bg-mirai-teal hover:bg-teal-900 transition-colors shadow-lg shadow-teal-900/20">
                Learn More About Us
              </a>
            </motion.div>
          </motion.div>

        </div>
      </div>
    </div>
  );
};

export default About;
