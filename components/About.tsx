
import React from 'react';

const About: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="lg:grid lg:grid-cols-2 lg:gap-16 items-center">
        <div className="relative">
          <img
            src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=1000&auto=format&fit=crop"
            alt="Factory Floor"
            className="rounded-lg shadow-2xl w-full h-[400px] object-cover"
          />
          <div className="absolute -bottom-6 -right-6 bg-mirai-teal p-8 hidden md:block">
            <span className="text-white text-5xl font-bold block">20+</span>
            <span className="text-teal-100 text-sm uppercase tracking-widest">Years Experience</span>
          </div>
        </div>
        <div className="mt-12 lg:mt-0">
          <span className="text-mirai-teal font-semibold tracking-widest uppercase text-sm mb-2 block">About Mirai Embroidery</span>
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl mb-6">Our Company</h2>
          <p className="text-lg text-gray-600 mb-6 leading-relaxed">
            At Mirai Embroidery, we pride ourselves on being a top machinery supplier in the industry. Our company has been providing quality machinery to businesses for over 20 years.
          </p>
          <p className="text-lg text-gray-600 mb-8 leading-relaxed">
            We specialize in importing and distributing high-speed industrial embroidery machines that cater to garment manufacturers, boutique owners, and mass production facilities. Our commitment to after-sales service and technical support is what sets us apart from the competition.
          </p>
          <div className="grid grid-cols-2 gap-4">
            <div className="border-l-4 border-mirai-teal pl-4">
              <h4 className="font-bold text-gray-900">Expert Support</h4>
              <p className="text-sm text-gray-500">24/7 technical assistance for all clients.</p>
            </div>
            <div className="border-l-4 border-mirai-teal pl-4">
              <h4 className="font-bold text-gray-900">Latest Tech</h4>
              <p className="text-sm text-gray-500">Updated with the most modern machinery.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
