import React from 'react';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Gallery from '@/components/Gallery';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import MapSection from '@/components/MapSection';

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <section id="home">
          <Hero />
        </section>

        <section id="about" className="bg-white">
          <About />
        </section>

        <section id="gallery" className="py-20 bg-gray-50">
          <Gallery />
        </section>

        <section id="contact" className="py-20 bg-white">
          <Contact />
        </section>

        <section id="location">
          <MapSection />
        </section>
      </main>
      <Footer />
    </div>
  );
}
