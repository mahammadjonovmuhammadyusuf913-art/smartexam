'use client';

import { useEffect, useRef, useState } from 'react';

const features = [
  {
    title: 'AI TEKSHIRUV',
    description: 'Murakkab AI imtihonning yaxlitligini yuzni aniqlash va xatti-harakatlar tahlili bilan nazorat qiladi.',
    icon: '🤖',
  },
  {
    title: 'MOSLASHUVCHAN IMTIHON',
    description: 'Togri baholash uchun savollar sizning bilim darajangizga moslashadi.',
    icon: '📊',
  },
  {
    title: 'AVTOMATIK TAHLIL',
    description: 'Tugallangandan song darhol imtihonning batafsil tahlilini oling.',
    icon: '⚡',
  },
  {
    title: 'XAVFSIZLIK',
    description: 'Bank darajasidagi shifrlash malumotlaringiz himoyalangan bolishini taminlaydi.',
    icon: '🔒',
  },
  {
    title: 'MULTI-FORMAT',
    description: 'MCQ, insho, kodlash va amaliy baholashlarni qollab-quvvatlash.',
    icon: '📝',
  },
  {
    title: 'ANALITIKA',
    description: 'Ishlash tendentsiyalari va zaif joylar haqida keng qamrovli tushunchalar.',
    icon: '📈',
  },
];

export default function FeaturesSection() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="py-24 px-4 md:px-8 bg-zinc-950">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-6xl md:text-8xl font-black text-center mb-4 tracking-tight">
          FEATURES
        </h2>
        <p className="text-center text-gray-400 text-lg mb-16 max-w-2xl mx-auto">
          Uzluksiz imtihon tajribasi uchun sizga kerak bo'lgan hamma narsa
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className={`group p-8 bg-black border border-zinc-800 hover:border-green-500 transition-all duration-500 transform ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="text-6xl mb-4 transform group-hover:scale-110 transition-transform">
                {feature.icon}
              </div>
              <h3 className="text-2xl font-bold mb-3 group-hover:text-green-500 transition-colors">
                {feature.title}
              </h3>
              <p className="text-gray-400 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
