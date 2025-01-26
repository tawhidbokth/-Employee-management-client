import React, { useState } from 'react';
import usePayroll from '../../../Hooks/usePayroll';

const PaymentHistory = () => {
  const [payroll, refetch] = usePayroll();

  // Pagination state
  const [currentPage, setCurrentPage] = useState(1);
  const rowsPerPage = 5;

  // Calculate paginated data
  const indexOfLastRow = currentPage * rowsPerPage;
  const indexOfFirstRow = indexOfLastRow - rowsPerPage;
  const currentData = payroll.slice(indexOfFirstRow, indexOfLastRow);

  // Handle next and previous pages
  const totalPages = Math.ceil(payroll.length / rowsPerPage);

  const nextPage = () => {
    if (currentPage < totalPages) setCurrentPage(currentPage + 1);
  };

  const prevPage = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1);
  };
  console.log(payroll);
  return (
    <div className="max-w-4xl mx-auto p-4 bg-gray-100 shadow-md rounded-lg">
      <h1 className="text-2xl lg:text-4xl font-bold mb-4 text-center text-yellow-600">
        Payment History
      </h1>
      <table className="w-full border ">
        <thead className="bg-gray-100">
          <tr>
            <th className="border px-4 py-2">Month, Year</th>
            <th className="border px-4 py-2">Amount</th>
            <th className="border px-4 py-2">Transaction ID</th>
          </tr>
        </thead>
        <tbody>
          {currentData.map(payment => (
            <tr key={payment._id} className="text-center">
              <td className="border px-4 py-2">{`${payment.month}, ${payment.year}`}</td>
              <td className="border px-4 py-2">${payment.salary}</td>
              <td className="border px-4 py-2">{payment.transactionId}</td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Pagination Controls */}
      {payroll.length > rowsPerPage && (
        <div className="flex justify-between items-center mt-4">
          <button
            onClick={prevPage}
            disabled={currentPage === 1}
            className={`px-4 py-2 bg-blue-500 text-white rounded ${
              currentPage === 1 ? 'opacity-50 cursor-not-allowed' : ''
            }`}
          >
            Previous
          </button>
          <p>
            Page {currentPage} of {totalPages}
          </p>
          <button
            onClick={nextPage}
            disabled={currentPage === totalPages}
            className={`px-4 py-2 bg-blue-500 text-white rounded ${
              currentPage === totalPages ? 'opacity-50 cursor-not-allowed' : ''
            }`}
          >
            Next
          </button>
        </div>
      )}
    </div>
  );
};

export default PaymentHistory;
