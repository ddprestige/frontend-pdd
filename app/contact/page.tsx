'use client'
import React, { useState,ChangeEvent, FormEvent  } from 'react';


const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
const [status, setStatus] = useState<'loading' | 'success' | 'error' | null>(null);

const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
  setFormData({ ...formData, [e.target.name]: e.target.value });
};

const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
  e.preventDefault();

  setStatus('loading');
  try {
    const res = await fetch('https://api.prestigedreamdecor.in/api/contact', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData),
    });

    if (res.ok) {
      setStatus('success');
      setFormData({ name: '', email: '', message: '' });
    } else {
      setStatus('error');
    }
  } catch (err) {
    setStatus('error');
  }
};

  const googleMapsEmbedUrl =
    'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3886.486050431701!2d77.55745297492007!3d13.068352887255916!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae23614ecb9453%3A0xe40430f5c46bba6d!2sPrestige%20Dream%20Decor!5e0!3m2!1sen!2sin!4v1747757362250!5m2!1sen!2sin';

  return (
    <section className="text-gray-600 body-font relative" id="contact">
      <div className="container px-5 py-24 mx-auto flex sm:flex-nowrap flex-wrap">
        {/* Map + Info */}
        <div className="lg:w-2/3 md:w-1/2 bg-gray-300 rounded-lg overflow-hidden sm:mr-10 p-10 flex items-end justify-start relative">
          <div className="relative h-96 w-full">
            <iframe
              src={googleMapsEmbedUrl}
              title="Prestige Dream Decor Location Map"
              className="absolute inset-0 w-full h-full border-0"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              aria-label="Prestige Dream Decor Location"
              style={{
                filter: 'grayscale(1) contrast(1.2) opacity(0.4)',
              }}
            ></iframe>
          </div>
          <div className="bg-white relative flex flex-wrap py-6 rounded shadow-md w-full mt-4">
            <div className="lg:w-1/2 px-6">
              <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs">
                ADDRESS
              </h2>
              <p className="mt-1">
                1001/52/1 Main Road, Nanjappa - Thindlu Rd, Doddabommasandra,
                Vidyaranyapura, Bengaluru, Karnataka 560097
              </p>
            </div>
            <div className="lg:w-1/2 px-6 mt-4 lg:mt-0">
              <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs">
                EMAIL
              </h2>
              <a
                href="mailto:prestigedreamdecor@gmail.com"
                className="text-indigo-500 leading-relaxed"
              >
                prestigedreamdecor@gmail.com
              </a>
              <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs mt-4">
                PHONE
              </h2>
              <a href="tel:+917975709648" className="leading-relaxed">
                7975709648
              </a>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <div className="lg:w-1/3 md:w-1/2 bg-white flex flex-col md:ml-auto w-full md:py-8 px-3 py-3 mt-8 md:mt-0">
          <h1 className="text-gray-900 text-2xl mb-2 font-semibold title-font">
            Send Us Your Feedback
          </h1>
          <p className="leading-relaxed mb-5 text-gray-600">
            Help us create better spaces by sharing your experience with
            Prestige Dream Decor.
          </p>

          <form onSubmit={handleSubmit}>
            <div className="relative mb-4">
              <label htmlFor="name" className="leading-7 text-sm text-gray-600">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
            </div>

            <div className="relative mb-4">
              <label htmlFor="email" className="leading-7 text-sm text-gray-600">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
            </div>

            <div className="relative mb-4">
              <label htmlFor="message" className="leading-7 text-sm text-gray-600">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
              ></textarea>
            </div>

            <button
              type="submit"
              disabled={status === 'loading'}
              className="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg"
            >
              {status === 'loading' ? 'Submitting...' : 'Submit'}
            </button>
          </form>

          {status === 'success' && (
            <p className="text-green-600 text-sm mt-2">Message sent successfully!</p>
          )}
          {status === 'error' && (
            <p className="text-red-600 text-sm mt-2">Something went wrong. Please try again.</p>
          )}

          <p className="text-xs text-gray-500 mt-3">
            Thank you for taking the time to reach out. We strive to make every
            space feel like home.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Contact;
