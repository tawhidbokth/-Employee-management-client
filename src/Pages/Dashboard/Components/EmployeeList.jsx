import React, { useState } from 'react';
import {
  useReactTable,
  createColumnHelper,
  getCoreRowModel,
} from '@tanstack/react-table';
import { Dialog } from '@headlessui/react'; // Modal for payment
import { Link, useNavigate } from 'react-router-dom';

const EmployeeList = () => {
  const navigate = useNavigate(); // For navigation
  const [employees, setEmployees] = useState([
    {
      id: 1,
      name: 'John Doe',
      email: 'john@example.com',
      bankAccount: '1234567890',
      salary: 5000,
      isVerified: false,
    },
    {
      id: 2,
      name: 'Jane Smith',
      email: 'jane@example.com',
      bankAccount: '0987654321',
      salary: 6000,
      isVerified: true,
    },
    {
      id: 3,
      name: 'Alice Brown',
      email: 'alice@example.com',
      bankAccount: '5678901234',
      salary: 5500,
      isVerified: false,
    },
  ]);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedEmployee, setSelectedEmployee] = useState(null);
  const [paymentDetails, setPaymentDetails] = useState({ month: '', year: '' });

  const toggleVerification = id => {
    const updatedEmployees = employees.map(employee =>
      employee.id === id
        ? { ...employee, isVerified: !employee.isVerified }
        : employee
    );
    setEmployees(updatedEmployees);
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
    columnHelper.accessor('bankAccount', { header: 'Bank Account' }),
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
          onClick={() => toggleVerification(info.row.original.id)}
        >
          {info.getValue() ? '✅' : '❌'}
        </button>
      ),
    }),
    columnHelper.display({
      id: 'details',
      header: 'Details',
      cell: info => (
        <Link to={'/dashboard/slug'}>
          <button
            className="px-3 py-1 text-white rounded bg-blue-500 hover:bg-blue-600"
            // onClick={() => navigate(`dashboard/slug`)} // Use email as slug
          >
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
