'use client';

import { useState } from 'react';

const examTypes = [
  {
    category: 'AKADEMIK',
    exams: ['Matematika', 'Fizika', 'Adabiyot', 'Tarix'],
    color: 'border-blue-500 hover:bg-blue-500/10',
    icon: '🎓',
  },
  {
    category: 'PROFESSIONAL',
    exams: ['IT Sertifikatsiya', 'Tibbiy', 'Yuridik', 'Muxandislik'],
    color: 'border-purple-500 hover:bg-purple-500/10',
    icon: '💼',
  },
  {
    category: 'COMPETITIVE',
    exams: ['Kirish testlari', 'Sinov testlar', 'Kasbiy testlar', 'Umumiy imtohom'],
    color: 'border-green-500 hover:bg-green-500/10',
    icon: '🏆',
  },
  {
    category: 'SKILL-BASED',
    exams: ['Dasturlash', 'Dizayn', 'Dizayn', 'Texnik'],
    color: 'border-orange-500 hover:bg-orange-500/10',
    icon: '⚙️',
  },
];

export default function ExamTypesSection() {
  const [activeCategory, setActiveCategory] = useState<number | null>(null);

  return (
    <section className="py-24 px-4 md:px-8 bg-black">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-6xl md:text-8xl font-black text-center mb-4 tracking-tight">
          IMTIHON TURLARI
        </h2>
        <p className="text-center text-gray-400 text-lg mb-16 max-w-2xl mx-auto">
          Imtihon toifalarining keng doirasidan tanlang
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {examTypes.map((type, index) => (
            <div
              key={index}
              onMouseEnter={() => setActiveCategory(index)}
              onMouseLeave={() => setActiveCategory(null)}
              className={`p-8 border-2 ${type.color} transition-all duration-300 cursor-pointer transform hover:scale-105 ${
                activeCategory === index ? 'scale-105' : ''
              }`}
            >
              <div className="flex items-center gap-4 mb-6">
                <span className="text-5xl">{type.icon}</span>
                <h3 className="text-3xl md:text-4xl font-black tracking-tight">
                  {type.category}
                </h3>
              </div>

              <div className="space-y-3">
                {type.exams.map((exam, examIndex) => (
                  <div
                    key={examIndex}
                    className={`text-gray-400 text-lg transition-all duration-300 ${
                      activeCategory === index
                        ? 'translate-x-2 text-white'
                        : ''
                    }`}
                  >
                    → {exam}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
