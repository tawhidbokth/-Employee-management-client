import React, { useState } from 'react';

const PaymentHistory = () => {
  // Demo data for the payment history
  const demoData = [
    {
      id: 1,
      month: 'January',
      year: 2023,
      amount: 1000,
      transactionId: 'TXN001',
    },
    {
      id: 2,
      month: 'February',
      year: 2023,
      amount: 1050,
      transactionId: 'TXN002',
    },
    {
      id: 3,
      month: 'March',
      year: 2023,
      amount: 1100,
      transactionId: 'TXN003',
    },
    {
      id: 4,
      month: 'April',
      year: 2023,
      amount: 1150,
      transactionId: 'TXN004',
    },
    { id: 5, month: 'May', year: 2023, amount: 1200, transactionId: 'TXN005' },
    { id: 6, month: 'June', year: 2023, amount: 1250, transactionId: 'TXN006' },
    { id: 7, month: 'July', year: 2023, amount: 1300, transactionId: 'TXN007' },
  ];

  // Pagination state
  const [currentPage, setCurrentPage] = useState(1);
  const rowsPerPage = 5;

  // Calculate paginated data
  const indexOfLastRow = currentPage * rowsPerPage;
  const indexOfFirstRow = indexOfLastRow - rowsPerPage;
  const currentData = demoData.slice(indexOfFirstRow, indexOfLastRow);

  // Handle next and previous pages
  const totalPages = Math.ceil(demoData.length / rowsPerPage);

  const nextPage = () => {
    if (currentPage < totalPages) setCurrentPage(currentPage + 1);
  };

  const prevPage = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1);
  };

  return (
    <div className="max-w-4xl mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Payment History</h1>
      <table className="w-full border border-gray-300 rounded-md">
        <thead className="bg-gray-100">
          <tr>
            <th className="border px-4 py-2">Month, Year</th>
            <th className="border px-4 py-2">Amount</th>
            <th className="border px-4 py-2">Transaction ID</th>
          </tr>
        </thead>
        <tbody>
          {currentData.map(payment => (
            <tr key={payment.id} className="text-center">
              <td className="border px-4 py-2">{`${payment.month}, ${payment.year}`}</td>
              <td className="border px-4 py-2">${payment.amount}</td>
              <td className="border px-4 py-2">{payment.transactionId}</td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Pagination Controls */}
      {demoData.length > rowsPerPage && (
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
