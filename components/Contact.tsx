
'use client'
import React, { useState } from 'react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    message: ''
  });

  const [isLoading, setIsLoading] = useState(false);
  const [statusMessage, setStatusMessage] = useState({ type: '', text: '' });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;

    // Only allow numbers for the phone field
    const finalValue = name === 'phone' ? value.replace(/[^0-9]/g, '') : value;

    setFormData(prev => ({
      ...prev,
      [name]: finalValue
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setStatusMessage({ type: '', text: '' });

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatusMessage({ type: 'success', text: 'Thank you! Your message has been sent successfully.' });
        setFormData({ name: '', phone: '', email: '', message: '' });
      } else {
        const errorData = await response.json();
        setStatusMessage({ type: 'error', text: errorData.error || 'Failed to send message. Please try again later.' });
      }
    } catch (error) {
      console.error('Submission error:', error);
      setStatusMessage({ type: 'error', text: 'An unexpected error occurred. Please try again.' });
    } finally {
      setIsLoading(false);
    }

    setTimeout(() => {
      setStatusMessage({ type: '', text: '' });
    }, 5000);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid lg:grid-cols-2 gap-16">
        <div>
          <span className="text-mirai-teal font-semibold tracking-widest uppercase text-sm mb-2 block">Better yet, see us in person!</span>
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl mb-6">Contact Us</h2>
          <p className="text-gray-600 text-lg mb-10">
            We love our customers, so feel free to visit during normal business hours. Whether you need a product demo or technical advice, our team is here for you.
          </p>

          <div className="space-y-6">
            <a
              href="https://wa.me/919898702417"
              className="flex items-center space-x-4 p-4 border border-gray-200 rounded-lg hover:bg-green-50 hover:border-green-200 transition-all group"
            >
              <div className="bg-green-100 text-green-600 p-3 rounded-full group-hover:bg-green-600 group-hover:text-white transition-colors">
                <i className="fa-brands fa-whatsapp text-2xl"></i>
              </div>
              <div>
                <p className="text-sm text-gray-500 uppercase tracking-widest font-bold">WhatsApp Us</p>
                <p className="text-xl font-bold text-gray-900">+91 9898702417</p>
              </div>
            </a>

            <div className="flex items-center space-x-4 p-4 border border-gray-200 rounded-lg">
              <div className="bg-mirai-teal/10 text-mirai-teal p-3 rounded-full">
                <i className="fa-solid fa-envelope text-2xl"></i>
              </div>
              <div>
                <p className="text-sm text-gray-500 uppercase tracking-widest font-bold">Email Address</p>
                <p className="text-lg font-medium text-gray-900">tanuzrd246@gmail.com</p>
              </div>
            </div>

            <div className="flex items-center space-x-4 p-4 border border-gray-200 rounded-lg">
              <div className="bg-mirai-teal/10 text-mirai-teal p-3 rounded-full">
                <i className="fa-solid fa-clock text-2xl"></i>
              </div>
              <div>
                <p className="text-sm text-gray-500 uppercase tracking-widest font-bold">Business Hours</p>
                <p className="text-lg font-medium text-gray-900">Open today 09:00 am - 07:00 pm</p>
                <p className="text-xs text-gray-400 mt-1">Monday - Saturday</p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-gray-50 p-8 rounded-2xl shadow-inner border border-gray-100">
          <h3 className="text-2xl font-bold text-gray-900 mb-6">Send a Message</h3>
          <form className="space-y-4" onSubmit={handleSubmit}>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-mirai-teal focus:border-transparent outline-none transition-all"
                placeholder="John Doe"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Phone Number</label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-mirai-teal focus:border-transparent outline-none transition-all"
                placeholder="9876543210"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-mirai-teal focus:border-transparent outline-none transition-all"
                placeholder="john@example.com"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Message</label>
              <textarea
                rows={4}
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-mirai-teal focus:border-transparent outline-none transition-all"
                placeholder="How can we help you?"
              ></textarea>
            </div>
            <button
              type="submit"
              disabled={isLoading}
              className={`w-full py-4 rounded-lg font-bold text-lg text-white shadow-lg transition-all uppercase tracking-widest ${isLoading ? 'bg-mirai-teal/70 cursor-not-allowed' : 'bg-mirai-teal hover:opacity-95 shadow-mirai-teal/20'
                }`}
            >
              {isLoading ? 'Sending...' : 'Submit Inquiry'}
            </button>
            {statusMessage.text && (
              <div
                className={`p-4 rounded-md text-sm font-medium ${statusMessage.type === 'success' ? 'bg-green-50 text-green-800 border border-green-200' : 'bg-red-50 text-red-800 border border-red-200'
                  }`}
              >
                {statusMessage.text}
              </div>
            )}
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
