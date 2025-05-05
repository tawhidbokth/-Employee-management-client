import React from 'react';
import { Link } from 'react-router-dom';

const WelcomePage = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-blue-600 to-teal-600 text-white py-28 px-6 overflow-hidden">
        {/* Animated background elements */}
        <div className="absolute top-0 left-0 w-full h-full opacity-10">
          <div className="absolute top-20 left-10 w-32 h-32 bg-white rounded-full mix-blend-overlay animate-float"></div>
          <div className="absolute bottom-20 right-10 w-40 h-40 bg-teal-300 rounded-full mix-blend-overlay animate-float-delay"></div>
          <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-blue-300 rounded-full mix-blend-overlay animate-float"></div>
        </div>

        <div className="max-w-7xl mx-auto text-center relative z-10">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6 animate-fade-in">
            Welcome to Your Dashboard!
          </h1>

          <p className="text-xl md:text-2xl opacity-90 mb-10 max-w-3xl mx-auto animate-fade-in-delay">
            Manage your tasks efficiently and stay organized with our intuitive
            platform.
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-4 animate-fade-in-up">
            <Link
              to={'/'}
              className="bg-white text-blue-600 hover:bg-gray-100 hover:text-blue-700 font-semibold py-3 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              Go to Home Page
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">
            Key Features
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: '📊',
                title: 'Task Analytics',
                description:
                  'Get insights into your task completion rates and productivity trends.',
              },
              {
                icon: '🔔',
                title: 'Smart Reminders',
                description:
                  'Never miss a deadline with our intelligent notification system.',
              },
              {
                icon: '🔄',
                title: 'Seamless Sync',
                description:
                  'Access your tasks across all devices with real-time synchronization.',
              },
            ].map((feature, index) => (
              <div
                key={index}
                className="bg-gray-50 p-8 rounded-xl hover:shadow-lg transition-all duration-300 border border-gray-100"
              >
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold mb-3 text-gray-800">
                  {feature.title}
                </h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default WelcomePage;
