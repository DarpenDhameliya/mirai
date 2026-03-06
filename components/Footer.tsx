
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-mirai-teal text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          <div className="col-span-1 md:col-span-1">
            <div className="flex flex-col mb-6">
              <span className="text-white font-bold text-2xl tracking-wider leading-none">MIRAI</span>
              <span className="text-teal-400 text-xs tracking-[0.2em] font-medium uppercase">Embroidery Machine</span>
            </div>
            <p className="text-teal-100/70 mb-6">
              Empowering businesses with precision technology for over two decades. Your success is our mission.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-teal-300 transition-colors"><i className="fa-brands fa-facebook-f"></i></a>
              <a href="#" className="hover:text-teal-300 transition-colors"><i className="fa-brands fa-instagram"></i></a>
              <a href="#" className="hover:text-teal-300 transition-colors"><i className="fa-brands fa-youtube"></i></a>
            </div>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-6 uppercase tracking-widest text-teal-400">Quick Links</h4>
            <ul className="space-y-4 text-teal-100/80">
              <li><a href="#home" className="hover:text-white transition-colors">Home</a></li>
              <li><a href="#about" className="hover:text-white transition-colors">About Us</a></li>
              <li><a href="#gallery" className="hover:text-white transition-colors">Machinery Gallery</a></li>
              <li><a href="#contact" className="hover:text-white transition-colors">Request Quote</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-6 uppercase tracking-widest text-teal-400">Services</h4>
            <ul className="space-y-4 text-teal-100/80">
              <li><a href="#" className="hover:text-white transition-colors">On-Site Installation</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Staff Training</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Spare Parts</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Maintenance AMC</a></li>
            </ul>
          </div>

          <div className="col-span-1">
            <h4 className="font-bold text-lg mb-6 uppercase tracking-widest text-teal-400">Newsletter</h4>
            <p className="text-teal-100/70 text-sm mb-4">Get 10% off your first purchase when you sign up!</p>
            <form className="flex">
              <input 
                type="email" 
                placeholder="Your email"
                className="bg-white/10 border-none px-4 py-2 w-full rounded-l-md outline-none text-white focus:bg-white/20 transition-all"
              />
              <button className="bg-white text-mirai-teal px-4 py-2 rounded-r-md font-bold text-sm uppercase">Sign Up</button>
            </form>
          </div>
        </div>
        
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center text-sm text-teal-100/50">
          <p>© {new Date().getFullYear()} Mirai Embroidery Machine. All rights reserved.</p>
          <div className="mt-4 md:mt-0 flex space-x-6">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
