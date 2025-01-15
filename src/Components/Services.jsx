const Services = () => {
  return (
    <section className="bg-gray-100 py-12">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">
          Our Services
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Service Card 1 */}
          <div className="bg-white shadow-lg rounded-lg overflow-hidden">
            <img
              src="https://via.placeholder.com/300x200"
              alt="Home Cleaning"
              className="w-full h-48 object-cover"
            />
            <div className="p-6 text-center">
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                Home Cleaning Services
              </h3>
              <p className="text-gray-600">
                Experienced professionals for deep cleaning of your home.
              </p>
            </div>
          </div>
          {/* Service Card 2 */}
          <div className="bg-white shadow-lg rounded-lg overflow-hidden">
            <img
              src="https://via.placeholder.com/300x200"
              alt="Gardening"
              className="w-full h-48 object-cover"
            />
            <div className="p-6 text-center">
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                Gardening & Landscaping
              </h3>
              <p className="text-gray-600">
                We design and maintain beautiful gardens for your home.
              </p>
            </div>
          </div>
          {/* Service Card 3 */}
          <div className="bg-white shadow-lg rounded-lg overflow-hidden">
            <img
              src="https://via.placeholder.com/300x200"
              alt="Plumbing"
              className="w-full h-48 object-cover"
            />
            <div className="p-6 text-center">
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                Plumbing Services
              </h3>
              <p className="text-gray-600">
                Get quick and reliable plumbing solutions for your home.
              </p>
            </div>
          </div>
          {/* Service Card 4 */}
          <div className="bg-white shadow-lg rounded-lg overflow-hidden">
            <img
              src="https://via.placeholder.com/300x200"
              alt="Electrical Repair"
              className="w-full h-48 object-cover"
            />
            <div className="p-6 text-center">
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                Electrical Repair
              </h3>
              <p className="text-gray-600">
                Expert electricians to solve all your electrical issues.
              </p>
            </div>
          </div>
          {/* Service Card 5 */}
          <div className="bg-white shadow-lg rounded-lg overflow-hidden">
            <img
              src="https://via.placeholder.com/300x200"
              alt="Painting"
              className="w-full h-48 object-cover"
            />
            <div className="p-6 text-center">
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                Painting Services
              </h3>
              <p className="text-gray-600">
                Professional painters for home and office renovations.
              </p>
            </div>
          </div>
          {/* Service Card 6 */}
          <div className="bg-white shadow-lg rounded-lg overflow-hidden">
            <img
              src="https://via.placeholder.com/300x200"
              alt="Appliance Repairs"
              className="w-full h-48 object-cover"
            />
            <div className="p-6 text-center">
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                Appliance Repairs
              </h3>
              <p className="text-gray-600">
                Quick repair services for all your home appliances.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
