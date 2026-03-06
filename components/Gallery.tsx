
import React from 'react';
import aboutImage from '@/asset/images/mirai.jpg'
import aboutImage2 from '@/asset/images/mirai1.jpg'

const Gallery: React.FC = () => {
  const images = [
    {
      url: aboutImage.src,
      title: "Multi-Head High Speed",
      desc: "Perfect for large scale garment production."
    },
    {
      url: aboutImage2.src,
      title: "Single Head Compact",
      desc: "Ideal for boutiques and sampling."
    },
    {
      url: "https://images.unsplash.com/photo-1490114538077-0a7f8cb49891?q=80&w=600&auto=format&fit=crop",
      title: "Precision Threading",
      desc: "Advanced auto-threading technology."
    },
    {
      url: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?q=80&w=600&auto=format&fit=crop",
      title: "Control Systems",
      desc: "Intuitive touch-screen interfaces."
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-16">
        <span className="text-mirai-teal font-semibold tracking-widest uppercase text-sm mb-2 block">Check Out Our Gallery</span>
        <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">Discover Our Range of Machinery</h2>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {images.map((img, idx) => (
          <div key={idx} className="group relative overflow-hidden rounded-lg shadow-lg aspect-square">
            <img
              src={img.url}
              alt={img.title}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-mirai-teal/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
              <h3 className="text-white font-bold text-xl mb-1">{img.title}</h3>
              <p className="text-teal-50 text-sm">{img.desc}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-16 bg-mirai-teal p-8 rounded-xl text-center text-white">
        <h3 className="text-2xl font-bold mb-4">Interested in a specific model?</h3>
        <p className="mb-8 text-teal-100 max-w-2xl mx-auto">
          We have a wide range of customized configurations available to suit your specific business needs. From 1 to 24 heads.
        </p>
        <button className="bg-white text-mirai-teal px-8 py-3 rounded-md font-bold hover:bg-teal-50 transition-colors uppercase tracking-widest text-sm">
          Download Catalog
        </button>
      </div>
    </div>
  );
};

export default Gallery;
