import Swal from 'sweetalert2';

const ContactUs = () => {
  const handleSubmit = e => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const initialData = Object.fromEntries(formData.entries());
    console.log(initialData);

    fetch('https://employee-management-server-tawny.vercel.app/contact', {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify(initialData),
    })
      .then(res => res.json())
      .then(data => {
        if (data.insertedId) {
          Swal.fire({
            position: 'top-center',
            icon: 'success',
            title: 'Submit Your Massage.',
            showConfirmButton: false,
            timer: 1500,
          });
          e.target.reset();
        }
      });
  };

  return (
    <div className="py-16 bg-gray-900 mt-20">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-extrabold text-center mb-12 text-gray-100">
          Contact Us
        </h2>

        {/* Address Section */}
        <div className="mb-16 text-center">
          <h3 className="text-2xl font-semibold text-indigo-600 mb-4">
            Our Address
          </h3>
          <p className="text-gray-100 text-lg">
            123 Company Street, Business City, 12345, Country
          </p>
          <p className="text-gray-100 text-md mt-2">
            You can also reach us by email or the contact form below.
          </p>
        </div>

        {/* Contact Form */}
        <div className="max-w-xl mx-auto bg-white p-8 rounded-lg shadow-lg">
          <h3 className="text-2xl font-semibold text-gray-800 mb-6">
            Send Us Your Opinion
          </h3>

          {/* Form */}
          <form onSubmit={handleSubmit}>
            {/* Email Input */}
            <div className="mb-6">
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700"
              >
                Your Email Address
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="mt-2 p-3 w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                placeholder="Enter your email"
                required
              />
            </div>

            {/* Message Input */}
            <div className="mb-6">
              <label
                htmlFor="message"
                className="block text-sm font-medium text-gray-700"
              >
                Your Message
              </label>
              <textarea
                id="message"
                name="message"
                rows="6"
                className="mt-2 p-3 w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                placeholder="Type your message here..."
                required
              ></textarea>
            </div>

            {/* Submit Button */}
            <div>
              <button
                type="submit"
                className="w-full py-3 px-6 bg-indigo-600 text-white font-semibold rounded-lg hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
