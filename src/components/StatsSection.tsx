'use client';

import { useEffect, useRef, useState } from 'react';

const stats = [
  { value: 50000, label: 'EXAMS CONDUCTED', suffix: '+' },
  { value: 98, label: 'SUCCESS RATE', suffix: '%' },
  { value: 100, label: 'COUNTRIES', suffix: '+' },
  { value: 24, label: 'SUPPORT', suffix: '/7' },
];

export default function StatsSection() {
  const [isVisible, setIsVisible] = useState(false);
  const [counts, setCounts] = useState(stats.map(() => 0));
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible) {
          setIsVisible(true);
          animateCounters();
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const animateCounters = () => {
    const duration = 2000;
    const steps = 60;
    const interval = duration / steps;

    stats.forEach((stat, index) => {
      let currentStep = 0;
      const increment = stat.value / steps;

      const timer = setInterval(() => {
        currentStep++;
        setCounts((prev) => {
          const newCounts = [...prev];
          newCounts[index] = Math.min(Math.round(increment * currentStep), stat.value);
          return newCounts;
        });

        if (currentStep >= steps) {
          clearInterval(timer);
        }
      }, interval);
    });
  };

  return (
    <section ref={sectionRef} className="py-24 px-4 md:px-8 bg-zinc-950">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-6xl md:text-8xl font-black text-center mb-16 tracking-tight">
          BY THE NUMBERS
        </h2>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="text-center p-8 bg-black border border-zinc-800 hover:border-green-500 transition-all transform hover:scale-105"
            >
              <div className="text-5xl md:text-6xl font-black mb-4 text-green-500">
                {counts[index].toLocaleString()}
                {stat.suffix}
              </div>
              <div className="text-sm md:text-base text-gray-400 font-bold tracking-wider">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
