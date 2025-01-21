import React, { useState, useEffect } from 'react';
import axios from 'axios';

const AllEmployee = () => {
  const [users, setUsers] = useState([]);
  const [selectedUser, setSelectedUser] = useState(null);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    // Fetch all users
    axios
      .get('http://localhost:5000/users')
      .then(response => setUsers(response.data));
  }, []);

  // Fire employee
  const fireEmployee = async id => {
    try {
      await axios.put(`http://localhost:5000/users/${id}/role`, {
        role: 'Fired',
      });
      setUsers(prev =>
        prev.map(user => (user._id === id ? { ...user, role: 'Fired' } : user))
      );
      setShowModal(false);
    } catch (error) {
      console.error('Error firing employee:', error);
    }
  };

  // Make HR
  const makeHR = async id => {
    try {
      await axios.put(`http://localhost:5000/users/${id}/role`, { role: 'HR' });
      setUsers(prev =>
        prev.map(user => (user._id === id ? { ...user, role: 'HR' } : user))
      );
    } catch (error) {
      console.error('Error updating role:', error);
    }
  };

  // Adjust Salary
  const adjustSalary = async (id, newSalary) => {
    try {
      await axios.put(`http://localhost:5000/users/${id}/salary`, {
        salary: newSalary,
      });
      setUsers(prev =>
        prev.map(user =>
          user._id === id ? { ...user, salary: newSalary } : user
        )
      );
    } catch (error) {
      console.error('Error adjusting salary:', error);
    }
  };

  return (
    <div className="container mx-auto my-10 p-6 bg-gray-100 shadow-md rounded-lg">
      <h2 className="text-center text-4xl text-yellow-700 font-bold  mb-6">
        All Employee
      </h2>

      {/* User List */}
      <div className="overflow-x-auto h-[450px]">
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
            {users.map(user => (
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
                      const newSalary = prompt(
                        'Enter new salary:',
                        user.salary
                      );
                      if (newSalary)
                        adjustSalary(user._id, parseInt(newSalary));
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
