import React, { useState } from 'react';
import useTasks from '../../../Hooks/useTasks';
import { useLoaderData } from 'react-router-dom';

const Progress = () => {
  const tasks = useLoaderData();
  const [filter, setFilter] = useState({ employee: '', month: '' });

  const filteredRecords = tasks.filter(record => {
    const matchesEmployee = filter.employee
      ? record.employee === filter.employee
      : true;
    const matchesMonth = filter.month
      ? record.date.slice(0, 7) === filter.month
      : true;
    return matchesEmployee && matchesMonth;
  });

  const uniqueEmployees = [...new Set(tasks.map(task => task.employee))];
  const uniqueMonths = [...new Set(tasks.map(task => task.date.slice(0, 7)))];

  return (
    <div className="lg:w-11/12 mx-auto bg-gray-100 shadow-md rounded-lg p-10">
      <h1 className="text-4xl text-yellow-600 text-center font-bold mb-14">
        Progress Page
      </h1>

      {/* Filter Options */}
      <div className="flex gap-4 mb-4 ">
        <label>
          Employee:
          <select
            onChange={e => setFilter({ ...filter, employee: e.target.value })}
            value={filter.employee}
          >
            <option value="">All</option>
            {uniqueEmployees.map((employee, index) => (
              <option key={index} value={employee}>
                {employee}
              </option>
            ))}
          </select>
        </label>
        <label>
          Month:
          <select
            onChange={e => setFilter({ ...filter, month: e.target.value })}
            value={filter.month}
          >
            <option value="">All</option>
            {uniqueMonths.map((month, index) => (
              <option key={index} value={month}>
                {month}
              </option>
            ))}
          </select>
        </label>
      </div>

      {/* Table */}
      <table className="table-auto border-collapse border border-gray-300 w-full">
        <thead>
          <tr>
            <th className="border border-gray-300 px-4 py-2">Employee</th>
            <th className="border border-gray-300 px-4 py-2">Date</th>
            <th className="border border-gray-300 px-4 py-2">Task</th>
            <th className="border border-gray-300 px-4 py-2">Hours</th>
          </tr>
        </thead>
        <tbody>
          {filteredRecords.length > 0 ? (
            filteredRecords.map(record => (
              <tr key={record._id}>
                <td className="border border-gray-300 px-4 py-2">
                  {record.employee}
                </td>
                <td className="border border-gray-300 px-4 py-2">
                  {record.date}
                </td>
                <td className="border border-gray-300 px-4 py-2">
                  {record.tasks}
                </td>
                <td className="border border-gray-300 px-4 py-2">
                  {record.hours}
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td
                colSpan="4"
                className="border border-gray-300 px-4 py-2 text-center"
              >
                No records found
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default Progress;
