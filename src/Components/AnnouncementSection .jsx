const AnnouncementSection = () => {
  return (
    <section className="py-16 bg-gray-900">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-extrabold text-center mb-12 text-white">
          Announcement & Important Notices
        </h2>

        {/* Grid for Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-10">
          {/* Card 1: Company News */}
          <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300">
            <h3 className="text-xl font-semibold text-indigo-600 mb-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 inline mr-2"
                viewBox="0 0 20 20"
                fill="currentColor"
                aria-hidden="true"
              >
                <path
                  fillRule="evenodd"
                  d="M4 3a3 3 0 00-3 3v11a3 3 0 003 3h12a3 3 0 003-3V6a3 3 0 00-3-3H4zm4 10h4v-2H8v2zm0-4h8V7H8v2z"
                  clipRule="evenodd"
                />
              </svg>
              Company News
            </h3>
            <p className="text-gray-700">
              Our company is launching a new product next month! Stay tuned for
              more updates.
            </p>
          </div>

          {/* Card 2: Employee Achievement */}
          <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300">
            <h3 className="text-xl font-semibold text-indigo-600 mb-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 inline mr-2"
                viewBox="0 0 20 20"
                fill="currentColor"
                aria-hidden="true"
              >
                <path
                  fillRule="evenodd"
                  d="M10 2a8 8 0 100 16A8 8 0 0010 2zm0 2a6 6 0 110 12A6 6 0 0110 4z"
                  clipRule="evenodd"
                />
              </svg>
              Employee Achievement
            </h3>
            <p className="text-gray-700">
              John Doe has been awarded Employee of the Month for his
              exceptional work on the new project.
            </p>
          </div>

          {/* Card 3: Important Notice */}
          <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300">
            <h3 className="text-xl font-semibold text-indigo-600 mb-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 inline mr-2"
                viewBox="0 0 20 20"
                fill="currentColor"
                aria-hidden="true"
              >
                <path
                  fillRule="evenodd"
                  d="M3 2a2 2 0 012-2h10a2 2 0 012 2v16a2 2 0 01-2 2H5a2 2 0 01-2-2V2zm4 5h8v2H7V7zm0 4h8v2H7v-2z"
                  clipRule="evenodd"
                />
              </svg>
              Important Notice
            </h3>
            <p className="text-gray-700">
              Please note that the office will be closed on the upcoming holiday
              for maintenance.
            </p>
          </div>

          {/* Card 4: Upcoming Events */}
          <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300">
            <h3 className="text-xl font-semibold text-indigo-600 mb-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 inline mr-2"
                viewBox="0 0 20 20"
                fill="currentColor"
                aria-hidden="true"
              >
                <path
                  fillRule="evenodd"
                  d="M12 2H8a2 2 0 00-2 2v4H4a2 2 0 00-2 2v8a2 2 0 002 2h12a2 2 0 002-2V8a2 2 0 00-2-2h-2V4a2 2 0 00-2-2zM8 6h4v2H8V6z"
                  clipRule="evenodd"
                />
              </svg>
              Upcoming Events
            </h3>
            <p className="text-gray-700">
              Join us for our annual company retreat in June. Don't miss out on
              the fun!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AnnouncementSection;
