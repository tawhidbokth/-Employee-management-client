import { useEffect, useState } from 'react';
import useAxsioSequre from '../../../../Hooks/useAxsioSequre';

const Payroll = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const rowsPerPage = 5;
  const [payroll, setPayroll] = useState([]);
  const axiosSequre = useAxsioSequre();

  useEffect(() => {
    const fetchPayroll = async () => {
      try {
        const { data } = await axiosSequre.get('/payroll');
        setPayroll(data);
      } catch (error) {
        console.error('Error fetching employees:', error);
      }
    };
    fetchPayroll();
  }, [axiosSequre]);

  const totalPages = Math.ceil(payroll.length / rowsPerPage);
  const currentData = payroll.slice(
    (currentPage - 1) * rowsPerPage,
    currentPage * rowsPerPage
  );

  const handleNext = () => {
    if (currentPage < totalPages) setCurrentPage(currentPage + 1);
  };

  const handlePrevious = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1);
  };

  const handlePay = async id => {
    // Generate a random transaction ID
    const generateTransactionId = () => {
      const randomPart = Math.random().toString(36).substr(2, 6);
      const timestamp = Date.now().toString(36);
      return `TXN-${timestamp}-${randomPart}`;
    };

    const transactionId = generateTransactionId();
    const paymentDate = new Date().toISOString().split('T')[0];

    // Update the payroll with the transaction ID, payment date, and paid status
    const updatedPayroll = payroll.map(req =>
      req._id === id ? { ...req, paid: true, paymentDate, transactionId } : req
    );

    setPayroll(updatedPayroll);

    // Make an API request to update the data on the server
    try {
      await axiosSequre.put(`/payroll/${id}`, {
        paid: true,
        paymentDate,
        transactionId,
      });
    } catch (error) {
      console.error('Error updating payment status:', error);
    }
  };

  return (
    <div className="p-6 bg-gray-100 shadow-md rounded-lg">
      <h3 className="text-4xl text-center text-yellow-700 font-semibold mb-6">
        Payment Request
      </h3>
      <div className="overflow-x-auto">
        <table className="min-w-full border border-gray-300 bg-white rounded-lg shadow">
          <thead className="bg-blue-100">
            <tr>
              {/* Table Headers */}
              <th className="px-6 py-3 text-left text-sm font-medium text-gray-700 border-b">
                Name
              </th>
              <th className="px-6 py-3 text-left text-sm font-medium text-gray-700 border-b">
                Salary
              </th>
              <th className="px-6 py-3 text-left text-sm font-medium text-gray-700 border-b">
                Month
              </th>
              <th className="px-6 py-3 text-left text-sm font-medium text-gray-700 border-b">
                Year
              </th>
              <th className="px-6 py-3 text-left text-sm font-medium text-gray-700 border-b">
                Payment Date
              </th>
              <th className="px-6 py-3 text-center text-sm font-medium text-gray-700 border-b">
                Pay
              </th>
            </tr>
          </thead>
          <tbody>
            {currentData.map(req => (
              <tr key={req._id} className="hover:bg-gray-50">
                <td className="px-6 py-4 text-sm text-gray-900 border-b">
                  {req.employees}
                </td>
                <td className="px-6 py-4 text-sm text-gray-900 border-b">
                  {req.salary}
                </td>
                <td className="px-6 py-4 text-sm text-gray-900 border-b">
                  {req.month}
                </td>
                <td className="px-6 py-4 text-sm text-gray-900 border-b">
                  {req.year}
                </td>
                <td className="px-6 py-4 text-sm text-gray-900 border-b">
                  {req.paymentDate || 'Pending'}
                </td>
                <td className="px-6 py-4 text-center border-b">
                  {req.paid ? (
                    <span className="text-green-600 font-semibold">Paid</span>
                  ) : (
                    <button
                      className="px-4 py-2 bg-blue-500 text-white text-sm rounded hover:bg-blue-600"
                      onClick={() => handlePay(req._id)}
                    >
                      Pay
                    </button>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        {/* Pagination Controls */}
        <div className="flex justify-center items-center mt-4 space-x-4">
          <button
            onClick={handlePrevious}
            disabled={currentPage === 1}
            className={`px-4 py-2 bg-gray-300 rounded hover:bg-gray-400 ${
              currentPage === 1 ? 'opacity-50 cursor-not-allowed' : ''
            }`}
          >
            Previous
          </button>
          <span>
            Page {currentPage} of {totalPages}
          </span>
          <button
            onClick={handleNext}
            disabled={currentPage === totalPages}
            className={`px-4 py-2 bg-gray-300 rounded hover:bg-gray-400 ${
              currentPage === totalPages ? 'opacity-50 cursor-not-allowed' : ''
            }`}
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default Payroll;
