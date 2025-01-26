import React, { useState, useEffect, useContext } from 'react';
import {
  useReactTable,
  createColumnHelper,
  getCoreRowModel,
} from '@tanstack/react-table';
import { Dialog } from '@headlessui/react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../Provider/AuthProvider';
import { toast, ToastContainer } from 'react-toastify';
import useAxsioSequre from '../../../Hooks/useAxsioSequre';
const EmployeeList = () => {
  const [employees, setEmployees] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedEmployee, setSelectedEmployee] = useState(null);
  const [paymentDetails, setPaymentDetails] = useState({ month: '', year: '' });
  const { user } = useContext(AuthContext);
  const axiosSequre = useAxsioSequre();
  useEffect(() => {
    const fetchEmployees = async () => {
      try {
        const { data } = await axiosSequre.get('/users?role=Employee');
        setEmployees(data);
      } catch (error) {
        console.error('Error fetching employees:', error);
      }
    };
    fetchEmployees();
  }, [axiosSequre]);

  // Toggle Verification
  const toggleVerification = async id => {
    try {
      const employee = employees.find(emp => emp._id === id);
      const updatedVerificationStatus = !employee.isVerified;

      await axiosSequre.put(`/users/${id}/verify`, {
        isVerified: updatedVerificationStatus,
      });

      setEmployees(prevEmployees =>
        prevEmployees.map(emp =>
          emp._id === id
            ? { ...emp, isVerified: updatedVerificationStatus }
            : emp
        )
      );

      toast.success(`Employee verification status updated!`, {
        position: 'top-center',
        autoClose: 2000,
      });
    } catch (error) {
      console.error('Error toggling verification:', error);
      toast.error('Failed to update verification status.', {
        position: 'top-center',
        autoClose: 2000,
      });
    }
  };

  // Open Payment Modal
  const openPaymentModal = employee => {
    setSelectedEmployee(employee);
    setIsModalOpen(true);
  };

  // Handle Payment
  const handlePayment = async () => {
    if (!selectedEmployee || !paymentDetails.month || !paymentDetails.year) {
      alert('Please fill all fields.');
      return;
    }

    const paymentRequest = {
      employeeId: selectedEmployee._id,
      employees: selectedEmployee.name,
      email: selectedEmployee.email,
      salary: selectedEmployee.salary,
      month: paymentDetails.month,
      year: paymentDetails.year,
    };

    console.log(paymentRequest);

    try {
      await axiosSequre.post('/payroll', paymentRequest);

      toast.success('Payment request successful!', {
        position: 'top-center',
        autoClose: 2000,
      });

      setIsModalOpen(false);
      setPaymentDetails({ month: '', year: '' });
    } catch (error) {
      console.error('Error creating payment request:', error);
      toast.error('Payment request failed!', {
        position: 'top-center',
        autoClose: 2000,
      });
    }
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
        <Link
          to={`/dashboard/slug/${info.row.original._id}`} // Pass the employee ID in the URL
          className="px-3 py-1 text-white rounded bg-blue-500 hover:bg-blue-600"
        >
          Details
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
    <div className="max-w-5xl mx-auto overflow-x-auto h-[600px] p-6 bg-gray-100 shadow-md rounded-lg">
      <h1 className="text-4xl text-yellow-700 text-center font-bold mb-4">
        Employee List
      </h1>
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

      {isModalOpen && (
        <Dialog
          as="div"
          className="fixed inset-0 z-10 overflow-y-auto"
          open={isModalOpen}
          onClose={() => setIsModalOpen(false)}
        >
          <div className="flex items-center justify-center min-h-screen px-4">
            <Dialog.Panel className="w-full max-w-md p-6 bg-white rounded-lg shadow-lg">
              <Dialog.Title className="text-lg font-medium">
                Payment for {selectedEmployee.name}
              </Dialog.Title>
              <div className="mt-4">
                <p>
                  <strong>Salary:</strong> ${selectedEmployee.salary}
                </p>
                <input
                  type="text"
                  placeholder="Month"
                  value={paymentDetails.month}
                  onChange={e =>
                    setPaymentDetails({
                      ...paymentDetails,
                      month: e.target.value,
                    })
                  }
                  className="w-full mt-2 p-2 border rounded"
                />
                <input
                  type="text"
                  placeholder="Year"
                  value={paymentDetails.year}
                  onChange={e =>
                    setPaymentDetails({
                      ...paymentDetails,
                      year: e.target.value,
                    })
                  }
                  className="w-full mt-2 p-2 border rounded"
                />
              </div>
              <div className="mt-6 flex justify-end">
                <button
                  className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
                  onClick={handlePayment}
                >
                  Pay
                </button>
              </div>
            </Dialog.Panel>
          </div>
        </Dialog>
      )}

      <ToastContainer />
    </div>
  );
};

export default EmployeeList;
