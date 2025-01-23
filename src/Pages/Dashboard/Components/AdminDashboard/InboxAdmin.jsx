import React, { useEffect, useState } from 'react';
import useAxsioSequre from '../../../../Hooks/useAxsioSequre';

const InboxAdmin = () => {
  const [selectedMessage, setSelectedMessage] = useState(null);
  const [messages, setMessages] = useState([]);
  const axiosSequre = useAxsioSequre();

  useEffect(() => {
    const fetchEmployees = async () => {
      try {
        const { data } = await axiosSequre.get('/contact');
        setMessages(data);
      } catch (error) {
        console.error('Error fetching employees:', error);
      }
    };
    fetchEmployees();
  }, [axiosSequre]);

  // Function to handle View button click
  const handleViewMessage = message => {
    setSelectedMessage(message);
  };

  // Function to close modal
  const closeModal = () => {
    setSelectedMessage(null);
  };

  return (
    <div>
      <div className="p-6 ">
        <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg">
          <div className="p-4 bg-blue-600 rounded-t-lg">
            <h2 className="text-2xl text-white font-semibold text-center">
              Admin Inbox ({messages.length})
            </h2>
          </div>
          <div className="overflow-x-auto">
            <table className="min-w-full border border-gray-300 bg-white rounded-lg shadow">
              <thead className="bg-blue-100">
                <tr>
                  <th className="px-6 py-3 text-left text-sm font-medium text-gray-700 border-b">
                    Sender Email
                  </th>
                  <th className="px-6 py-3 text-left text-sm font-medium text-gray-700 border-b">
                    Message
                  </th>
                  <th className="px-6 py-3 text-left text-sm font-medium text-gray-700 border-b">
                    Action
                  </th>
                </tr>
              </thead>
              <tbody>
                {messages.map(msg => (
                  <tr key={msg._id} className="hover:bg-gray-50">
                    <td className="px-6 py-4 text-sm text-gray-900 border-b">
                      {msg.email}
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-900 border-b">
                      {msg.message.substring(0, 20)}...
                    </td>
                    <td className="px-6 py-4 text-sm text-blue-600 font-semibold text-center border-b">
                      <button
                        onClick={() => handleViewMessage(msg)}
                        className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600"
                      >
                        View
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* Modal */}
      {selectedMessage && (
        <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex items-center justify-center">
          <div className="bg-white p-6 rounded-lg shadow-lg max-w-sm">
            <h3 className="text-lg font-semibold mb-4">Message Details</h3>
            <p className="text-gray-800 mb-4">
              <strong>Sender:</strong> {selectedMessage.email}
            </p>
            <p className="text-gray-800 mb-4">{selectedMessage.message}</p>
            <button
              onClick={closeModal}
              className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default InboxAdmin;
