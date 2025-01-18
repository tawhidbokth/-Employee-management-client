import React, { useState, useEffect } from 'react';
import {
  useReactTable,
  createColumnHelper,
  getCoreRowModel,
} from '@tanstack/react-table';
import { Dialog } from '@headlessui/react'; // Modal for payment
import { Link, useNavigate } from 'react-router-dom';

const EmployeeList = () => {
  const navigate = useNavigate();
  const [employees, setEmployees] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedEmployee, setSelectedEmployee] = useState(null);
  const [paymentDetails, setPaymentDetails] = useState({ month: '', year: '' });

  // Fetch users from the server
  useEffect(() => {
    const fetchEmployees = async () => {
      const response = await fetch('http://localhost:5000/users'); // Server endpoint
      const data = await response.json();
      setEmployees(data);
    };
    fetchEmployees();
  }, []);

  // Toggle the verification status of a user
  const toggleVerification = async id => {
    const updatedEmployees = employees.map(employee =>
      employee._id === id
        ? { ...employee, isVerified: !employee.isVerified }
        : employee
    );
    setEmployees(updatedEmployees);

    // Update the verification status on the server
    await fetch(`http://localhost:5000/users/${id}/verify`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        isVerified: !employees.find(emp => emp._id === id).isVerified,
      }),
    });
  };

  const openPaymentModal = employee => {
    setSelectedEmployee(employee);
    setIsModalOpen(true);
  };

  const handlePayment = () => {
    console.log('Payment Requested:', {
      ...selectedEmployee,
      ...paymentDetails,
    });
    setIsModalOpen(false);
    setPaymentDetails({ month: '', year: '' });
  };

  const columnHelper = createColumnHelper();
  const columns = [
    columnHelper.accessor('name', { header: 'Name' }),
    columnHelper.accessor('email', { header: 'Email' }),
    columnHelper.accessor('bank_account_no', { header: 'Bank Account' }),
    columnHelper.accessor('salary', { header: 'Salary' }),
    columnHelper.accessor('isVerified', {
      header: 'Verified',
      cell: info => (
        <button
          className={`px-2 py-1 rounded ${
            info.getValue()
              ? 'bg-green-500 text-white'
              : 'bg-red-500 text-white'
          }`}
          onClick={() => toggleVerification(info.row.original._id)}
        >
          {info.getValue() ? '✅' : '❌'}
        </button>
      ),
    }),
    columnHelper.display({
      id: 'details',
      header: 'Details',
      cell: info => (
        <Link to={`/dashboard/${info.row.original._id}`}>
          <button className="px-3 py-1 text-white rounded bg-blue-500 hover:bg-blue-600">
            Details
          </button>
        </Link>
      ),
    }),
    columnHelper.display({
      id: 'pay',
      header: 'Pay',
      cell: info => (
        <button
          className={`px-3 py-1 text-white rounded ${
            info.row.original.isVerified
              ? 'bg-blue-500 hover:bg-blue-600'
              : 'bg-gray-300 cursor-not-allowed'
          }`}
          onClick={() =>
            info.row.original.isVerified && openPaymentModal(info.row.original)
          }
          disabled={!info.row.original.isVerified}
        >
          Pay
        </button>
      ),
    }),
  ];

  const table = useReactTable({
    data: employees,
    columns,
    getCoreRowModel: getCoreRowModel(),
  });

  return (
    <div className="max-w-5xl mx-auto p-6">
      <h1 className="text-2xl font-bold mb-4">Employee List</h1>
      <table className="w-full border border-gray-300 rounded-md">
        <thead className="bg-gray-100">
          {table.getHeaderGroups().map(headerGroup => (
            <tr key={headerGroup.id}>
              {headerGroup.headers.map(header => (
                <th key={header.id} className="border px-4 py-2">
                  {header.column.columnDef.header}
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody>
          {table.getRowModel().rows.map(row => (
            <tr key={row.id} className="text-center">
              {row.getVisibleCells().map(cell => (
                <td key={cell.id} className="border px-4 py-2">
                  {cell.column.columnDef.cell
                    ? cell.column.columnDef.cell(cell)
                    : cell.getValue()}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default EmployeeList;
