import { useState } from 'react';
const workProofs = [
  {
    id: 1,
    title: 'Living Room Transformation',
    image:
      'https://i.ibb.co.com/8DhPW3XV/Luxury-Interior-Design-Living-Room-1080x675.webp', // Replace with actual image URL
    details:
      'We redesigned a modern living room with a minimalist style and cozy atmosphere.',
  },
  {
    id: 2,
    title: 'Wall Art Installation',
    image: 'https://i.ibb.co.com/nqPmmpyx/Wall-Art-Decorate-your-home-min.jpg', // Replace with actual image URL
    details:
      'Installed custom-designed wall art, enhancing the beauty of the space.',
  },
  {
    id: 3,
    title: 'Luxury Bedroom Setup',
    image: 'https://i.ibb.co.com/4Z4f0SBm/Crafting-Serene-Sanctuaries.webp', // Replace with actual image URL
    details: 'Designed a luxury bedroom with custom furniture and lighting.',
  },
];

const OurWorkProof = () => {
  const [selectedWork, setSelectedWork] = useState(null);

  return (
    <div className="container mx-auto px-4 py-10">
      <h2 className="lg:text-4xl text-2xl font-bold text-center bg-slate-700 w-1/2 mx-auto rounded-lg p-4  text-white mb-8">
        📸 Our Work Proof
      </h2>
      <div className="grid md:grid-cols-3 gap-6">
        {workProofs.map(work => (
          <div
            key={work.id}
            className="bg-white shadow-lg rounded-lg p-4 text-center"
          >
            <img
              src={work.image}
              alt={work.title}
              className="rounded-lg mx-auto"
            />
            <h3 className="text-xl font-semibold mt-4">{work.title}</h3>
            <button
              className="mt-4 bg-gray-800 text-white px-5 py-2 rounded-lg hover:bg-gray-600"
              onClick={() => setSelectedWork(work)}
            >
              View More
            </button>
          </div>
        ))}
      </div>

      {/* Modal */}
      {selectedWork && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-6 rounded-lg shadow-lg max-w-md w-full">
            <h2 className="text-2xl font-bold">{selectedWork.title}</h2>
            <img
              src={selectedWork.image}
              alt={selectedWork.title}
              className="rounded-lg my-4"
            />
            <p className="text-gray-700">{selectedWork.details}</p>
            <button
              className="mt-4 bg-red-500 text-white px-5 py-2 rounded-lg hover:bg-red-600"
              onClick={() => setSelectedWork(null)}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default OurWorkProof;
