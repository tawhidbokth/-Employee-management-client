const Services = () => {
  return (
    <section className="bg-gray-900 py-12">
      <div className="container mx-auto px-4">
        <h2 className="lg:text-4xl text-2xl font-bold text-center bg-slate-700 w-1/2 mx-auto rounded-lg p-4  text-white mb-8">
          Featured Services
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Service Card 1 */}
          <div className="bg-white shadow-lg rounded-lg overflow-hidden">
            <img
              src="https://i.ibb.co.com/v4tx2GKp/s1.jpg"
              alt="Home Cleaning"
              className="w-full h-auto object-cover"
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
              src="https://i.ibb.co.com/SDphyDR2/s2.jpg"
              alt="Gardening"
              className="w-full h-auto object-cover"
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
              src="https://i.ibb.co.com/JFFSxyfD/Residential-Plumbing-Service.jpg"
              alt="Plumbing"
              className="w-full h-auto object-cover"
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
              src="https://i.ibb.co.com/Pzf2sqj2/s4.webp"
              alt="Electrical Repair"
              className="w-full h-auto object-cover"
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
              src="https://i.ibb.co.com/JWsysLcb/s5.webp"
              alt="Painting"
              className="w-full h-auto object-cover"
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
              src=" https://i.ibb.co.com/FkNP5BWV/s6.jpg"
              alt="Appliance Repairs"
              className="w-full h-auto object-cover"
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
