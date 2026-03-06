
import React from 'react';

const MapSection: React.FC = () => {
  return (
    <div className="w-full h-[500px] relative">
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-mirai-teal to-transparent opacity-20"></div>
      {/* 
          Standard Google Maps Iframe Embed 
          Using a generic coordinates for demonstration; 
          in production, the specific business CID or Address would be used.
      */}
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3743.950408196785!2d72.84438621531785!3d21.224969092094078!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be04f006043a1c5%3A0x442ac29f41fb4f96!2sMirai%20Embroidery%20Machine!5e0!3m2!1sen!2sin!4v1708948970654!5m2!1sen!2sin"
        width="100%"
        height="100%"
        style={{ border: 0 }}
        allowFullScreen={true}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title="Mirai Embroidery Location"
      ></iframe>

      <div className="absolute bottom-8 left-8 bg-white p-6 rounded-lg shadow-xl max-w-sm hidden md:block">
        <h4 className="font-bold text-mirai-teal uppercase tracking-widest text-xs mb-2">Visit Our Showroom</h4>
        <p className="text-gray-900 font-bold text-lg mb-1">Surat HQ</p>
        <p className="text-gray-500 text-sm mb-4">6th Floor, Shree Krishna Industry, 1/1A, b/h Nirman Industry, Geeta Nagar, Fulpada, Patel Nagar, Surat, Gujarat 395008.</p>
        {/* <a
          href="https://www.google.com/maps/dir/?api=1&destination=Mirai+Embroidery+Machine&destination_place_id=ChIJxaFDYABv4DsRlk_7QSrCosQ"
          target="_blank"
          rel="noopener noreferrer"
          className="text-mirai-teal font-bold text-sm flex items-center space-x-2 hover:underline"
        >
          <span>Get Directions</span>
          <i className="fa-solid fa-arrow-right"></i>
        </a> */}
      </div>
    </div>
  );
};

export default MapSection;
