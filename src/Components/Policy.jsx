import React from 'react';

const Policy = () => {
  return (
    <div>
      <section class="bg-gray-100 py-12 mt-24">
        <div class="container mx-auto px-6">
          <h2 class="text-3xl font-bold text-gray-800 mb-6 text-center">
            Privacy Policy
          </h2>
          <p class="text-gray-600 leading-relaxed mb-4">
            Your privacy is important to us. At{' '}
            <span class="font-semibold">Home Design Website</span>, we collect
            and use your information solely to provide and improve our services.
            We are committed to protecting your personal data and will never
            share or sell it to third parties without your consent.
          </p>
          <ul class="text-gray-600 leading-relaxed mb-4 space-y-4">
            <li>
              <span class="font-semibold">Data Collection:</span> We may collect
              your name, email address, and other necessary details when you
              interact with our website.
            </li>
            <li>
              <span class="font-semibold">Data Usage:</span> The collected
              information is used for communication, improving our website, and
              personalizing your experience.
            </li>
            <li>
              <span class="font-semibold">Cookies:</span> Our site uses cookies
              to enhance functionality. You can adjust your browser settings to
              refuse cookies if you prefer.
            </li>
          </ul>
          <p class="text-gray-600 leading-relaxed">
            For any questions about our Privacy Policy, please contact us at
            <a
              href="mailto:info@yourwebsite.com"
              class="text-blue-600 underline"
            >
              test.com
            </a>
            .
          </p>
        </div>
      </section>
    </div>
  );
};

export default Policy;
