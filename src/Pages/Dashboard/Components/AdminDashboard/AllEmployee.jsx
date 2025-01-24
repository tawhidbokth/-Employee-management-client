import React, { useState } from 'react';
import useAxsioSequre from '../../../../Hooks/useAxsioSequre';
import useUsers from '../../../../Hooks/useUsers';
import Swal from 'sweetalert2';

const AllEmployee = () => {
  const [selectedUser, setSelectedUser] = useState(null);
  const [showSalaryModal, setShowSalaryModal] = useState(false);
  const [newSalary, setNewSalary] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [isTableView, setIsTableView] = useState(true); // Toggle state
  const axsiosSequre = useAxsioSequre();
  const [users, refetch] = useUsers();

  const filteredUsers = users.filter(user => user.role !== 'admin');

  // Fire employee
  const fireEmployee = async id => {
    try {
      await axsiosSequre.put(`users/${id}/role`, {
        role: 'Fired',
      });
      await refetch();
      setShowModal(false);
      Swal.fire('Success!', 'Employee has been fired!', 'success');
    } catch (error) {
      console.error('Error firing employee:', error);
      Swal.fire('Error!', 'Something went wrong!', 'error');
    }
  };

  // Make HR
  const makeHR = async id => {
    try {
      await axsiosSequre.put(`/users/${id}/role`, {
        role: 'HR',
      });
      await refetch();
      Swal.fire('Success!', 'Role updated to HR!', 'success');
    } catch (error) {
      console.error('Error updating role:', error);
      Swal.fire('Error!', 'Failed to update role!', 'error');
    }
  };

  // Adjust Salary
  const adjustSalary = async (id, newSalary) => {
    try {
      if (newSalary <= selectedUser.salary) {
        Swal.fire(
          'Error!',
          'New salary must be greater than current salary!',
          'error'
        );
        return;
      }

      await axsiosSequre.put(`users/${id}/salary`, {
        salary: newSalary,
      });
      await refetch();
      Swal.fire('Success!', 'Salary adjusted successfully!', 'success');
    } catch (error) {
      console.error('Error adjusting salary:', error);
      Swal.fire('Error!', 'Failed to adjust salary!', 'error');
    }
  };

  return (
    <div className="container mx-auto my-10 p-6 bg-gray-100 shadow-md rounded-lg">
      <h2 className="text-center text-4xl text-yellow-700 font-bold mb-6">
        All Employee
      </h2>

      {/* Toggle Button */}
      <div className="flex justify-end mb-4">
        <button
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
          onClick={() => setIsTableView(!isTableView)}
        >
          {isTableView ? 'Switch to Card View' : 'Switch to Table View'}
        </button>
      </div>

      {/* User List */}
      {isTableView ? (
        <div className="overflow-x-auto lg:h-[450px]">
          <table className="w-full border-collapse border border-gray-300">
            <thead>
              <tr className="bg-gray-200">
                <th className="border border-gray-300 p-3">Name</th>
                <th className="border border-gray-300 p-3">Designation</th>
                <th className="border border-gray-300 p-3">Role</th>
                <th className="border border-gray-300 p-3">Make HR</th>
                <th className="border border-gray-300 p-3">Fire</th>
                <th className="border border-gray-300 p-3">Adjust Salary</th>
              </tr>
            </thead>
            <tbody>
              {filteredUsers.map(user => (
                <tr key={user._id} className="text-center">
                  <td className="border border-gray-300 p-3">{user.name}</td>
                  <td className="border border-gray-300 p-3">
                    {user.designation}
                  </td>
                  <td className="border border-gray-300 p-3">{user.role}</td>
                  <td className="border border-gray-300 p-3">
                    {!['HR', 'Fired'].includes(user.role) && (
                      <button
                        className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
                        onClick={() => makeHR(user._id)}
                      >
                        Make HR
                      </button>
                    )}
                  </td>
                  <td className="border border-gray-300 p-3">
                    {user.role === 'Fired' ? (
                      <span className="text-red-600 font-semibold">Fired</span>
                    ) : (
                      <button
                        className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
                        onClick={() => {
                          setSelectedUser(user);
                          setShowModal(true);
                        }}
                      >
                        Fire
                      </button>
                    )}
                  </td>
                  <td className="border border-gray-300 p-3">
                    <button
                      className="bg-yellow-500 text-white px-4 py-2 rounded hover:bg-yellow-600"
                      onClick={() => {
                        setSelectedUser(user);
                        setShowSalaryModal(true);
                      }}
                    >
                      Adjust Salary
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredUsers.map(user => (
            <div
              key={user._id}
              className="bg-white shadow-lg rounded-lg p-6 flex flex-col items-center"
            >
              <h3 className="text-lg font-semibold mb-2">{user.name}</h3>
              <p className="mb-2">{user.designation}</p>
              <p className="mb-4 text-gray-500">Role: {user.role}</p>
              <div className="flex space-x-2">
                {!['HR', 'Fired'].includes(user.role) && (
                  <button
                    className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
                    onClick={() => makeHR(user._id)}
                  >
                    Make HR
                  </button>
                )}
                {user.role === 'Fired' ? (
                  <span className="text-red-600 font-semibold">Fired</span>
                ) : (
                  <button
                    className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
                    onClick={() => {
                      setSelectedUser(user);
                      setShowModal(true);
                    }}
                  >
                    Fire
                  </button>
                )}
                <button
                  className="bg-yellow-500 text-white px-4 py-2 rounded hover:bg-yellow-600"
                  onClick={() => {
                    setSelectedUser(user);
                    setShowSalaryModal(true);
                  }}
                >
                  Adjust Salary
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
      {/* Modals */}
      {/* Salary Modal */}
      {showSalaryModal && (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-50">
          <div className="bg-white p-6 rounded-lg shadow-lg w-1/3">
            <h3 className="text-xl font-semibold mb-4">Adjust Salary</h3>
            <p className="mb-4">
              Current salary for <strong>{selectedUser?.name}</strong>:{' '}
              <strong>${selectedUser?.salary}</strong>
            </p>
            <input
              type="number"
              placeholder="Enter new salary"
              className="w-full border px-4 py-2 mb-4 rounded"
              onChange={e => setNewSalary(e.target.value)}
            />
            <div className="flex justify-end gap-4">
              <button
                className="bg-gray-300 text-gray-700 px-4 py-2 rounded hover:bg-gray-400"
                onClick={() => setShowSalaryModal(false)}
              >
                Cancel
              </button>
              <button
                className="bg-yellow-500 text-white px-4 py-2 rounded hover:bg-yellow-600"
                onClick={() => {
                  if (newSalary <= selectedUser?.salary) {
                    Swal.fire(
                      'Error!',
                      'New salary must be greater than current salary!',
                      'error'
                    );
                    return;
                  }
                  adjustSalary(selectedUser?._id, parseInt(newSalary));
                  setShowSalaryModal(false);
                }}
              >
                Confirm
              </button>
            </div>
          </div>
        </div>
      )}
      {/* Confirmation Modal */}
      {showModal && (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-50">
          <div className="bg-white p-6 rounded-lg shadow-lg w-1/3">
            <h3 className="text-xl font-semibold mb-4">Confirm Firing</h3>
            <p className="mb-6">
              Are you sure you want to fire{' '}
              <strong>{selectedUser?.name}</strong>?
            </p>
            <div className="flex justify-end gap-4">
              <button
                className="bg-gray-300 text-gray-700 px-4 py-2 rounded hover:bg-gray-400"
                onClick={() => setShowModal(false)}
              >
                Cancel
              </button>
              <button
                className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
                onClick={() => fireEmployee(selectedUser?._id)}
              >
                Confirm
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AllEmployee;
