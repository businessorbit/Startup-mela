import React, { useState } from 'react';
import { Check, X } from 'lucide-react';

const PricingPage = () => {
  const [isYearly, setIsYearly] = useState(true);

  const plans = [
    {
      name: 'Freebie',
      description: 'Ideal for individuals who need quick access to basic features.',
      price: '$0',
      period: '/Month',
      buttonText: 'Get Started Now',
      buttonClass: 'border-2 border-gray-300 text-gray-700 hover:bg-gray-50',
      features: [
        { name: 'Event Information', included: true },
        { name: 'Access to 100 million Connection', included: true },
        { name: 'Live Recording', included: false },
        { name: 'Unlimited Sharing', included: false },
        { name: 'Upload graphics & video in up to 4k', included: false },
        { name: 'Unlimited Projects', included: false },
        { name: 'Instant Access to our Community', included: false },
        { name: 'Create teams to collaborate on designs', included: false }
      ]
    },
    {
      name: 'Professional',
      description: 'Ideal for individuals who need advanced features and tools for client work.',
      price: '$25',
      period: '/Month',
      buttonText: 'Get Started Now',
      buttonClass: 'bg-blue-600 text-white hover:bg-blue-700',
      isPopular: true,
      features: [
        { name: 'Event Information', included: true },
        { name: 'Access to 100 million Connection', included: true },
        { name: 'Live Recording', included: true },
        { name: 'Unlimited Sharing', included: true },
        { name: 'Upload graphics & video in up to 4k', included: true },
        { name: 'Unlimited Projects', included: true },
        { name: 'Instant Access to our Community', included: true },
        { name: 'Create teams to collaborate on designs', included: true }
      ]
    },
    {
      name: 'Enterprise',
      description: 'Ideal for businesses who need personalized services and security for large teams.',
      price: '$100',
      period: '/Month',
      buttonText: 'Get Started Now',
      buttonClass: 'border-2 border-gray-300 text-gray-700 hover:bg-gray-50',
      features: [
        { name: 'Event Information', included: true },
        { name: 'Access to 100 million Connection', included: true },
        { name: 'Live Recording', included: true },
        { name: 'Unlimited Sharing', included: true },
        { name: 'Upload graphics & video in up to 4k', included: true },
        { name: 'Unlimited Projects', included: true },
        { name: 'Instant Access to our Community', included: true },
        { name: 'Create teams to collaborate on designs', included: true }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-purple-50 py-16 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 flex items-center justify-center gap-4">
            <span className="text-yellow-500 text-3xl">⭐</span>
            Powerful features for 
            <span className="text-blue-600 ml-2">powerful creators</span>
            <span className="text-yellow-500 text-3xl ml-2">⭐</span>
          </h1>
          <p className="text-gray-600 text-lg mb-8">
            Choose a plan that's right for you
          </p>

          {/* Toggle Switch */}
          <div className="flex items-center justify-center gap-4 mb-8">
            <span className={`text-sm ${!isYearly ? 'text-gray-900 font-medium' : 'text-gray-500'}`}>
              Pay Monthly
            </span>
            <div className="relative">
              <button
                onClick={() => setIsYearly(!isYearly)}
                className={`w-14 h-7 rounded-full transition-colors duration-200 ${
                  isYearly ? 'bg-blue-600' : 'bg-gray-300'
                }`}
              >
                <div
                  className={`w-5 h-5 bg-white rounded-full shadow-md transform transition-transform duration-200 ${
                    isYearly ? 'translate-x-8' : 'translate-x-1'
                  } mt-1`}
                />
              </button>
            </div>
            <span className={`text-sm ${isYearly ? 'text-gray-900 font-medium' : 'text-gray-500'}`}>
              Pay Yearly
            </span>
            {isYearly && (
              <div className="relative">
                <span className="text-blue-600 text-sm font-medium bg-blue-50 px-2 py-1 rounded-full">
                  Save 25%
                </span>
                <div className="absolute -top-2 -left-8">
                  <svg width="24" height="12" viewBox="0 0 24 12" fill="none">
                    <path d="M2 10C8 4 16 4 22 10" stroke="#3B82F6" strokeWidth="2" strokeLinecap="round"/>
                  </svg>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`relative rounded-2xl p-8 transition-all duration-300 ${
                plan.isPopular
                  ? 'bg-blue-600 text-white transform scale-105 shadow-2xl'
                  : 'bg-white text-gray-900 shadow-lg hover:shadow-xl'
              }`}
            >
              {/* Plan Name and Description */}
              <div className="mb-8">
                <h3 className={`text-2xl font-bold mb-3 ${plan.isPopular ? 'text-white' : 'text-gray-900'}`}>
                  {plan.name}
                </h3>
                <p className={`text-sm leading-relaxed ${plan.isPopular ? 'text-blue-100' : 'text-gray-600'}`}>
                  {plan.description}
                </p>
              </div>

              {/* Price */}
              <div className="mb-8">
                <div className="flex items-baseline">
                  <span className={`text-5xl font-bold ${plan.isPopular ? 'text-white' : 'text-gray-900'}`}>
                    {plan.price}
                  </span>
                  <span className={`text-sm ml-1 ${plan.isPopular ? 'text-blue-100' : 'text-gray-500'}`}>
                    {plan.period}
                  </span>
                </div>
              </div>

              {/* CTA Button */}
              <button className={`w-full py-3 px-6 rounded-lg font-semibold transition-all duration-200 mb-8 ${
                plan.isPopular
                  ? 'bg-white text-blue-600 hover:bg-gray-50'
                  : plan.buttonClass
              }`}>
                {plan.buttonText}
              </button>

              {/* Features List */}
              <div className="space-y-4">
                {plan.features.map((feature, featureIndex) => (
                  <div key={featureIndex} className="flex items-start gap-3">
                    <div className={`mt-0.5 ${feature.included ? '' : 'opacity-50'}`}>
                      {feature.included ? (
                        <div className={`w-5 h-5 rounded-full flex items-center justify-center ${
                          plan.isPopular ? 'bg-blue-500' : 'bg-green-100'
                        }`}>
                          <Check className={`w-3 h-3 ${plan.isPopular ? 'text-white' : 'text-green-600'}`} />
                        </div>
                      ) : (
                        <div className="w-5 h-5 rounded-full bg-gray-200 flex items-center justify-center">
                          <X className="w-3 h-3 text-gray-400" />
                        </div>
                      )}
                    </div>
                    <span className={`text-sm ${
                      plan.isPopular 
                        ? feature.included ? 'text-white' : 'text-blue-200'
                        : feature.included ? 'text-gray-700' : 'text-gray-400'
                    }`}>
                      {feature.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PricingPage;