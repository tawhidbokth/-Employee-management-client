import { useState } from 'react';

const services = [
  {
    id: 1,
    title: 'Custom Wall Art',
    description:
      'Beautiful handmade wall art for your home, crafted with care.',
    image: 'https://i.ibb.co.com/tM23c2FG/Wall-Art-Decorate-your-home-min.jpg',
    details:
      'We offer unique custom wall art, designed to fit your home decor perfectly. Choose from various styles and materials.',
  },
  {
    id: 2,
    title: 'Interior Design',
    description: 'Transform your home with expert interior design services.',
    image:
      'https://i.ibb.co.com/ycYN7SwP/Luxury-Interior-Design-Living-Room-1080x675.webp',
    details:
      'Our professional interior designers help you redesign your space with modern, stylish, and comfortable themes.',
  },
  {
    id: 3,
    title: 'Furniture Assembly',
    description: 'Professional furniture setup services at your home.',
    image: 'https://i.ibb.co.com/cGzKdZp/Assembling-Furniture-full.jpg',
    details:
      'We provide expert furniture assembly services, ensuring your new furniture is set up quickly and securely.',
  },
];

const RecentServices = () => {
  const [selectedService, setSelectedService] = useState(null);

  return (
    <div className="container mx-auto px-4 py-10">
      <h2 className="lg:text-4xl text-2xl font-bold text-center bg-slate-700 w-1/2 mx-auto rounded-lg p-4  text-white mb-10">
        🛠️ Recent Services
      </h2>
      <div className="grid md:grid-cols-3 gap-6">
        {services.map(service => (
          <div
            key={service.id}
            className="bg-white shadow-lg rounded-lg p-4 text-center"
          >
            <img
              src={service.image}
              alt={service.title}
              className="rounded-lg mx-auto"
            />
            <h3 className="text-xl font-semibold mt-4">{service.title}</h3>
            <p className="text-gray-600 mt-2">{service.description}</p>
            <button
              className="mt-4 bg-gray-800 text-white px-5 py-2 rounded-lg hover:bg-gray-600"
              onClick={() => setSelectedService(service)}
            >
              Learn More
            </button>
          </div>
        ))}
      </div>

      {/* Modal */}
      {selectedService && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-6 rounded-lg shadow-lg max-w-md w-full">
            <h2 className="text-2xl font-bold">{selectedService.title}</h2>
            <img
              src={selectedService.image}
              alt={selectedService.title}
              className="rounded-lg my-4"
            />
            <p className="text-gray-700">{selectedService.details}</p>
            <button
              className="mt-4 bg-red-500 text-white px-5 py-2 rounded-lg hover:bg-red-600"
              onClick={() => setSelectedService(null)}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default RecentServices;
