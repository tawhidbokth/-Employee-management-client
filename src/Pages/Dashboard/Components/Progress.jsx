import React, { useState } from 'react';

const Progress = () => {
  const workRecords = [
    {
      id: 1,
      employee: 'John Doe',
      month: 'Jan',
      year: 2024,
      work: 'Completed Project A',
    },
    {
      id: 2,
      employee: 'Jane Smith',
      month: 'Jan',
      year: 2024,
      work: 'Submitted Report',
    },
    {
      id: 3,
      employee: 'John Doe',
      month: 'Feb',
      year: 2024,
      work: 'Finished Bug Fixes',
    },
  ];

  const [filter, setFilter] = useState({ employee: '', month: '' });

  const filteredRecords = workRecords.filter(record => {
    const matchesEmployee = filter.employee
      ? record.employee === filter.employee
      : true;
    const matchesMonth = filter.month ? record.month === filter.month : true;
    return matchesEmployee && matchesMonth;
  });

  return (
    <div>
      <h1>Progress Page</h1>
      <div>
        <label>
          Employee:
          <select
            onChange={e => setFilter({ ...filter, employee: e.target.value })}
          >
            <option value="">All</option>
            <option value="John Doe">John Doe</option>
            <option value="Jane Smith">Jane Smith</option>
          </select>
        </label>
        <label>
          Month:
          <select
            onChange={e => setFilter({ ...filter, month: e.target.value })}
          >
            <option value="">All</option>
            <option value="Jan">Jan</option>
            <option value="Feb">Feb</option>
          </select>
        </label>
      </div>

      <table>
        <thead>
          <tr>
            <th>Employee</th>
            <th>Month</th>
            <th>Year</th>
            <th>Work</th>
          </tr>
        </thead>
        <tbody>
          {filteredRecords.map(record => (
            <tr key={record.id}>
              <td>{record.employee}</td>
              <td>{record.month}</td>
              <td>{record.year}</td>
              <td>{record.work}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Progress;
