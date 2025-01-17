import React, { useState } from 'react';

const AdminDashboard = () => {
  const [employees, setEmployees] = useState([
    {
      id: 1,
      name: 'Alice',
      designation: 'Engineer',
      isHR: false,
      fired: false,
      salary: 5000,
    },
    {
      id: 2,
      name: 'Bob',
      designation: 'Manager',
      isHR: true,
      fired: false,
      salary: 7000,
    },
    {
      id: 3,
      name: 'Charlie',
      designation: 'Developer',
      isHR: false,
      fired: false,
      salary: 5500,
    },
  ]);

  const [showModal, setShowModal] = useState(false);
  const [selectedEmployee, setSelectedEmployee] = useState(null);

  const fireEmployee = id => {
    setEmployees(prev =>
      prev.map(emp => (emp.id === id ? { ...emp, fired: true } : emp))
    );
    setShowModal(false);
  };

  const makeHR = id => {
    setEmployees(prev =>
      prev.map(emp => (emp.id === id ? { ...emp, isHR: true } : emp))
    );
  };

  const adjustSalary = (id, newSalary) => {
    setEmployees(prev =>
      prev.map(emp => (emp.id === id ? { ...emp, salary: newSalary } : emp))
    );
  };

  return (
    <div className="container mx-auto my-10 p-6 bg-gray-100 shadow-md rounded-lg">
      <h2 className="text-center text-2xl font-bold mb-6">Admin Dashboard</h2>

      {/* Employee List */}
      <div className="mb-8">
        <h3 className="text-xl font-semibold mb-4">
          All Employee List [Private - Admin Only]
        </h3>
        <div className="overflow-x-auto">
          <table className="w-full border-collapse border border-gray-300">
            <thead>
              <tr className="bg-gray-200">
                <th className="border border-gray-300 p-3">Name</th>
                <th className="border border-gray-300 p-3">Designation</th>
                <th className="border border-gray-300 p-3">Make HR</th>
                <th className="border border-gray-300 p-3">Fire</th>
                <th className="border border-gray-300 p-3">Adjust Salary</th>
              </tr>
            </thead>
            <tbody>
              {employees.map(emp => (
                <tr key={emp.id} className="text-center">
                  <td className="border border-gray-300 p-3">{emp.name}</td>
                  <td className="border border-gray-300 p-3">
                    {emp.designation}
                  </td>
                  <td className="border border-gray-300 p-3">
                    {!emp.isHR && !emp.fired && (
                      <button
                        className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
                        onClick={() => makeHR(emp.id)}
                      >
                        Make HR
                      </button>
                    )}
                  </td>
                  <td className="border border-gray-300 p-3">
                    {emp.fired ? (
                      <span className="text-red-600 font-semibold">Fired</span>
                    ) : (
                      <button
                        className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
                        onClick={() => {
                          setSelectedEmployee(emp);
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
                          emp.salary
                        );
                        if (newSalary)
                          adjustSalary(emp.id, parseInt(newSalary, 10));
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
      </div>

      {/* Confirmation Modal */}
      {showModal && (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-50">
          <div className="bg-white p-6 rounded-lg shadow-lg w-1/3">
            <h3 className="text-xl font-semibold mb-4">Confirm Firing</h3>
            <p className="mb-6">
              Are you sure you want to fire{' '}
              <strong>{selectedEmployee?.name}</strong>?
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
                onClick={() => fireEmployee(selectedEmployee?.id)}
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

export default AdminDashboard;
