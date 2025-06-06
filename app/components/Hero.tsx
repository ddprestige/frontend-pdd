"use client";

import React, { useEffect, useState } from 'react';

const videos = [
  '/hero4.mp4',
  '/hero5.mp4',
];

const HeroSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % videos.length);
    }, 8000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative h-[90vh] w-full overflow-hidden text-white">
      {/* Video Slideshow */}
      {videos.map((video, index) => (
        <video
          key={index}
          src={video}
          autoPlay
          muted
          loop
          playsInline
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ease-in-out ${
            index === currentIndex ? 'opacity-100 z-10' : 'opacity-0 z-0'
          }`}
        />
      ))}

      {/* Heading and Button stacked vertically */}
      <div className="relative z-20 h-full flex flex-col items-center justify-center gap-6 px-4 text-center">
<h2 className="text-4xl font-semibold bg-black/50 text-white px-6 py-2 rounded-full shadow-md backdrop-blur-sm">
  Ready to change your decor
</h2>

        <a
          href="/contact"
          className="px-8 py-3 bg-emerald-300 text-black font-semibold text-lg rounded-full hover:bg-gray-200 transition"
        >
          Get a Free Consultation
        </a>
      </div>
    </section>
  );
};

export default HeroSection;
