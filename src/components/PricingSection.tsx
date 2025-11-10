'use client';

import { useState } from 'react';

const pricingTiers = [
  {
    name: 'BASIC',
    price: '49',
    period: 'month',
    description: 'Perfect for individual students',
    features: [
      'Up to 10 exams per month',
      'Basic AI proctoring',
      'Instant results',
      'Email support',
      'Performance analytics',
      'Mobile access',
    ],
    color: 'border-blue-500',
    buttonColor: 'bg-blue-500 hover:bg-blue-400',
    popular: false,
  },
  {
    name: 'PROFESSIONAL',
    price: '149',
    period: 'month',
    description: 'For serious learners and professionals',
    features: [
      'Unlimited exams',
      'Advanced AI proctoring',
      'Instant detailed results',
      'Priority 24/7 support',
      'Advanced analytics',
      'All device access',
      'Custom exam creation',
      'Video review sessions',
    ],
    color: 'border-green-500',
    buttonColor: 'bg-green-500 hover:bg-green-400',
    popular: true,
  },
  {
    name: 'ENTERPRISE',
    price: '499',
    period: 'month',
    description: 'For institutions and organizations',
    features: [
      'Unlimited exams',
      'Enterprise AI proctoring',
      'Real-time monitoring',
      'Dedicated account manager',
      'Custom integrations',
      'White-label solution',
      'API access',
      'Custom reporting',
      'Multi-admin support',
    ],
    color: 'border-purple-500',
    buttonColor: 'bg-purple-500 hover:bg-purple-400',
    popular: false,
  },
];

export default function PricingSection() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section id="pricing" className="py-24 px-4 md:px-8 bg-black">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-6xl md:text-8xl font-black text-center mb-4 tracking-tight">
          PRICING
        </h2>
        <p className="text-center text-gray-400 text-lg mb-16 max-w-2xl mx-auto">
          Choose the perfect plan for your examination needs
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {pricingTiers.map((tier, index) => (
            <div
              key={index}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              className={`relative p-8 bg-zinc-950 border-2 ${tier.color} transition-all duration-300 transform ${
                hoveredIndex === index ? 'scale-105 -translate-y-2' : ''
              } ${tier.popular ? 'md:scale-105' : ''}`}
            >
              {tier.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-green-500 text-black font-bold text-sm">
                  MOST POPULAR
                </div>
              )}

              <div className="text-center mb-8">
                <h3 className="text-3xl font-black mb-2">{tier.name}</h3>
                <p className="text-gray-400 mb-6">{tier.description}</p>
                <div className="flex items-end justify-center gap-2">
                  <span className="text-5xl font-black">${tier.price}</span>
                  <span className="text-gray-400 mb-2">/{tier.period}</span>
                </div>
              </div>

              <ul className="space-y-4 mb-8">
                {tier.features.map((feature, featureIndex) => (
                  <li
                    key={featureIndex}
                    className="flex items-start gap-3 text-gray-300"
                  >
                    <svg
                      className="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              <button
                className={`w-full py-4 ${tier.buttonColor} text-black font-bold text-lg transition-all transform hover:scale-105`}
              >
                GET STARTED
              </button>
            </div>
          ))}
        </div>

        {/* Money back guarantee */}
        <div className="mt-16 text-center">
          <p className="text-gray-400 text-lg">
            All plans include a <span className="text-green-500 font-bold">30-day money-back guarantee</span>
          </p>
        </div>
      </div>
    </section>
  );
}
