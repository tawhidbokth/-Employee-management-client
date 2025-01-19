import React from 'react';

const WellcomePage = () => {
  return (
    <div>
      <section class="bg-gradient-to-r from-blue-500 to-teal-500 text-white py-20 px-6">
        <div class="max-w-7xl mx-auto text-center">
          <h1 class="text-4xl md:text-5xl font-bold leading-tight mb-4">
            Welcome to Your Dashboard!
          </h1>
          <p class="text-lg md:text-xl mb-6">
            Explore all your information and manage your settings easily.
          </p>
          <div class="flex justify-center">
            <a
              href="#settings"
              class="bg-white text-blue-500 hover:bg-gray-100 hover:text-blue-700 font-semibold py-2 px-6 rounded-lg transition duration-300"
            >
              Go to Settings
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default WellcomePage;
