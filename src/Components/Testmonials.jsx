import { useState } from 'react';

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      name: 'John Doe',
      role: 'CEO at Company',
      message:
        'This company has been an incredible partner, helping us grow and achieve our goals. Highly recommended!',
      image: 'https://i.ibb.co.com/zrB3hxG/Resume-Review-and-Improvement.webp',
    },
    {
      name: 'Jane Smith',
      role: 'Marketing Head',
      message:
        'The service provided was exceptional, and the team was very professional throughout the project.',
      image:
        'https://i.ibb.co.com/xfS5Rfp/385490917-1510631689733100-2473354057220819702-n-LE-upscale-balanced-x4-removebg-preview-1-modified.png',
    },
    {
      name: 'Alice Johnson',
      role: 'Project Manager',
      message:
        'We had an amazing experience working with them. Their expertise and attention to detail is unmatched!',
      image: 'https://i.ibb.co.com/nBSJKKt/service-img-1-4.jpg',
    },
  ];

  const goToNext = () => {
    setCurrentIndex(prevIndex => (prevIndex + 1) % testimonials.length);
  };

  const goToPrev = () => {
    setCurrentIndex(
      prevIndex => (prevIndex - 1 + testimonials.length) % testimonials.length
    );
  };

  return (
    <section className="bg-gray-900 py-16">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold text-white mb-8">
          What Our Clients Say
        </h2>
        <div className="relative">
          {/* Testimonial Card */}
          <div className="bg-white shadow-lg rounded-xl p-8 max-w-md mx-auto">
            <img
              src={testimonials[currentIndex].image}
              alt={testimonials[currentIndex].name}
              className="w-24 h-24 rounded-full mx-auto mb-6"
            />
            <p className="text-gray-600 mb-4">
              {testimonials[currentIndex].message}
            </p>
            <h3 className="text-xl font-semibold text-gray-800">
              {testimonials[currentIndex].name}
            </h3>
            <p className="text-gray-500">{testimonials[currentIndex].role}</p>
          </div>
          {/* Navigation Buttons */}
          <button
            className="absolute top-1/2 left-0 transform -translate-y-1/2 text-gray-800 p-4 bg-white shadow-lg rounded-full hover:bg-gray-200"
            onClick={goToPrev}
          >
            &#8592;
          </button>
          <button
            className="absolute top-1/2 right-0 transform -translate-y-1/2 text-gray-800 p-4 bg-white shadow-lg rounded-full hover:bg-gray-200"
            onClick={goToNext}
          >
            &#8594;
          </button>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
