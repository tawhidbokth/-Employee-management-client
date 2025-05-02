import React, { useState } from 'react';

const Pricing = () => {
  const [isAnnual, setIsAnnual] = useState(false);

  const pricingPlans = [
    {
      name: 'START',
      price: 'Free',
      description: 'Perfect for getting started',
      features: [
        'Basic feature set',
        'Community support',
        'Limited resources',
        'Up to 3 projects',
      ],
      cta: 'Get Started',
      popular: false,
    },
    {
      name: 'PRO',
      price: isAnnual ? '$32' : '$38',
      period: isAnnual ? '/yr' : '/mo',
      description: 'For professionals and small teams',
      features: [
        'All Basic features',
        'Priority support',
        'Enhanced resources',
        'Up to 10 projects',
        'Advanced analytics',
      ],
      cta: 'Upgrade Now',
      popular: true,
    },
    {
      name: 'BUSINESS',
      price: isAnnual ? '$48' : '$56',
      period: isAnnual ? '/yr' : '/mo',
      description: 'For growing businesses',
      features: [
        'All Pro features',
        '24/7 dedicated support',
        'Unlimited resources',
        'Unlimited projects',
        'Team collaboration',
        'Custom integrations',
      ],
      cta: 'Get Business',
      popular: false,
    },
    {
      name: 'ENTERPRISE',
      price: isAnnual ? '$60' : '$72',
      period: isAnnual ? '/yr' : '/mo',
      description: 'Custom solutions for large organizations',
      features: [
        'All Business features',
        'Personal account manager',
        'Custom SLAs',
        'On-premise options',
        'Security audit',
        'Training sessions',
      ],
      cta: 'Contact Sales',
      popular: false,
    },
  ];

  return (
    <div className="bg-gray-50">
      <section className="text-gray-600 body-font overflow-hidden">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-col text-center w-full mb-20">
            <h1 className="sm:text-4xl text-3xl font-bold title-font mb-2 text-gray-900">
              Simple, Transparent Pricing
            </h1>
            <p className="lg:w-2/3 mx-auto leading-relaxed text-lg text-gray-500">
              Choose the perfect plan for your needs. Start for free, upgrade
              anytime.
            </p>
            <div className="flex mx-auto border-2 border-indigo-500 rounded-lg overflow-hidden mt-6">
              <button
                className={`py-2 px-6 focus:outline-none ${
                  !isAnnual ? 'bg-indigo-500 text-white' : 'text-indigo-500'
                }`}
                onClick={() => setIsAnnual(false)}
              >
                Monthly
              </button>
              <button
                className={`py-2 px-6 focus:outline-none ${
                  isAnnual ? 'bg-indigo-500 text-white' : 'text-indigo-500'
                }`}
                onClick={() => setIsAnnual(true)}
              >
                Annually (20% off)
              </button>
            </div>
          </div>
          <div className="flex flex-wrap -m-4 justify-center">
            {pricingPlans.map((plan, index) => (
              <div key={index} className="p-4 xl:w-1/4 md:w-1/2 w-full">
                <div
                  className={`h-full p-6 rounded-lg flex flex-col relative overflow-hidden shadow-md hover:shadow-xl transition duration-300 ease-in-out ${
                    plan.popular
                      ? 'border-2 border-indigo-500'
                      : 'border border-gray-200'
                  } bg-white`}
                >
                  {plan.popular && (
                    <span className="bg-indigo-500 text-white px-3 py-1 tracking-widest text-xs absolute right-0 top-0 rounded-bl">
                      POPULAR
                    </span>
                  )}
                  <h2 className="text-sm tracking-widest title-font mb-1 font-medium">
                    {plan.name}
                  </h2>
                  <h1 className="text-4xl text-gray-900 pb-4 mb-4 border-b border-gray-200 leading-none">
                    {plan.price}
                    {plan.period && (
                      <span className="text-lg ml-1 font-normal text-gray-500">
                        {plan.period}
                      </span>
                    )}
                  </h1>
                  <p className="text-gray-500 mb-4 italic">
                    {plan.description}
                  </p>
                  {plan.features.map((feature, i) => (
                    <p key={i} className="flex items-center text-gray-600 mb-2">
                      <span className="w-4 h-4 mr-2 inline-flex items-center justify-center bg-indigo-100 text-indigo-500 rounded-full flex-shrink-0">
                        <svg
                          fill="none"
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2.5"
                          className="w-3 h-3"
                          viewBox="0 0 24 24"
                        >
                          <path d="M20 6L9 17l-5-5"></path>
                        </svg>
                      </span>
                      {feature}
                    </p>
                  ))}
                  <button
                    className={`mt-6 flex items-center justify-center text-white border-0 py-3 px-6 w-full focus:outline-none rounded-lg font-medium ${
                      plan.popular
                        ? 'bg-indigo-500 hover:bg-indigo-600'
                        : 'bg-gray-500 hover:bg-gray-600'
                    } transition duration-300`}
                  >
                    {plan.cta}
                    <svg
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      className="w-4 h-4 ml-2"
                      viewBox="0 0 24 24"
                    >
                      <path d="M5 12h14M12 5l7 7-7 7"></path>
                    </svg>
                  </button>
                  <p className="text-xs text-gray-500 mt-3">
                    {plan.price === 'Free'
                      ? 'No credit card required'
                      : 'Cancel anytime'}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Pricing;
