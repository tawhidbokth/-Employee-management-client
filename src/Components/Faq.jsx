import React, { useState } from 'react';

const Faq = () => {
  const [activeIndex, setActiveIndex] = useState(null);
  const faqs = [
    {
      question: 'How do I reset my password?',
      answer: 'Go to Settings > Security > Reset Password.',
    },
    {
      question: 'Who approves my leave request?',
      answer: 'Your direct manager approves leave requests.',
    },
  ];

  const toggleFAQ = index => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">FAQs</h1>
      <div className="space-y-2">
        {faqs.map((faq, index) => (
          <div key={index} className="border rounded p-4">
            <div
              className="flex justify-between items-center cursor-pointer"
              onClick={() => toggleFAQ(index)}
            >
              <h3 className="font-semibold">{faq.question}</h3>
              <span>{activeIndex === index ? '−' : '+'}</span>
            </div>
            {activeIndex === index && (
              <p className="mt-2 text-gray-700">{faq.answer}</p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Faq;
