
import React from 'react';

const Hero: React.FC = () => {
  return (
    <div className="relative bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="relative z-10 pb-8 bg-white sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32">
          {/* SVG Shape for background transition */}
          <svg
            className="hidden lg:block absolute right-0 inset-y-0 h-full w-48 text-white transform translate-x-1/2"
            fill="currentColor"
            viewBox="0 0 100 100"
            preserveAspectRatio="none"
            aria-hidden="true"
          >
            <polygon points="50,0 100,0 50,100 0,100" />
          </svg>

          <main className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
            <div className="sm:text-center lg:text-left">
              <span className="text-mirai-teal font-semibold tracking-widest uppercase text-sm mb-2 block">Welcome</span>
              <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
                <span className="block xl:inline">Maximize Your</span>{' '}
                <span className="block text-mirai-teal xl:inline">Production</span>
              </h1>
              <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
                Get the latest technology and boost your efficiency. Premium industrial embroidery machines designed for durability and precision.
              </p>
              <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
                <div className="rounded-md shadow">
                  <a
                    href="#contact"
                    className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-mirai-teal hover:opacity-90 md:py-4 md:text-lg md:px-10"
                  >
                    Get a Quote
                  </a>
                </div>
                <div className="mt-3 sm:mt-0 sm:ml-3">
                  <a
                    href="#gallery"
                    className="w-full flex items-center justify-center px-8 py-3 border border-mirai-teal text-base font-medium rounded-md text-mirai-teal bg-white hover:bg-gray-50 md:py-4 md:text-lg md:px-10"
                  >
                    View Machines
                  </a>
                </div>
              </div>
              <div className="mt-10 flex space-x-6 text-sm font-medium tracking-widest text-gray-400 uppercase">
                <span>Global Quality</span>
                <span>•</span>
                <span>Local Trust</span>
              </div>
            </div>
          </main>
        </div>
      </div>
      <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2 bg-mirai-teal">
        <img
          className="h-56 w-full object-cover sm:h-72 md:h-96 lg:w-full lg:h-full opacity-80 mix-blend-multiply"
          src="https://images.unsplash.com/photo-1590736962236-470940529a65?q=80&w=2000&auto=format&fit=crop"
          alt="High performance embroidery machine"
        />
      </div>
    </div>
  );
};

export default Hero;
