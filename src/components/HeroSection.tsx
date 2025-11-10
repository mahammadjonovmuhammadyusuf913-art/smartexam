'use client';

import { useEffect, useState } from 'react';

export default function HeroSection() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 opacity-20">
        <div
          className="absolute top-1/4 left-1/4 w-64 h-64 bg-green-500 rounded-full blur-3xl animate-pulse"
          style={{ transform: `translateY(${scrollY * 0.5}px)` }}
        />
        <div
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500 rounded-full blur-3xl animate-pulse delay-700"
          style={{ transform: `translateY(${scrollY * 0.3}px)` }}
        />
      </div>

      {/* Main content */}
      <div className="relative z-10 text-center px-4">
        <div className="space-y-0 mb-8">
          <h1 className="text-[15vw] md:text-[12vw] lg:text-[10vw] font-black leading-none tracking-tighter uppercase">
            
          </h1>
          <h1 className="text-[20vw] md:text-[18vw] lg:text-[15vw] font-black leading-none tracking-tighter uppercase text-white">
            SMART
          </h1>
          <h1 className="text-[20vw] md:text-[18vw] lg:text-[15vw] font-black leading-none tracking-tighter uppercase text-white">
            EXAM
          </h1>
          <div className="flex items-center justify-center gap-4 mt-4">
            <div className="h-1 w-16 bg-green-500" />
            <p className="text-2xl md:text-4xl font-bold tracking-wider">BY ST</p>
            <div className="h-1 w-16 bg-green-500" />
          </div>
        </div>

        <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto mt-8 leading-relaxed">
          AI bilan ishlaydigan proktoring yordamida onlayn imtihonlarning kelajagini his eting,
          moslashuvchan test va tezkor natijalar.
        </p>

        <div className="mt-12 flex flex-col sm:flex-row gap-4 justify-center">
          <button className="px-8 py-4 bg-white text-black font-bold text-lg hover:bg-gray-200 transition-all transform hover:scale-105">
            START EXAM
          </button>
          <button className="px-8 py-4 border-2 border-white text-white font-bold text-lg hover:bg-white hover:text-black transition-all transform hover:scale-105">
            LEARN MORE
          </button>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white rounded-full flex items-start justify-center p-2">
          <div className="w-1 h-3 bg-white rounded-full animate-pulse" />
        </div>
      </div>
    </section>
  );
}
