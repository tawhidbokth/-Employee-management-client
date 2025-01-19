import React from 'react';
import { Bar } from 'react-chartjs-2';
import { useLoaderData } from 'react-router-dom';

const EmployeeDetails = () => {
  const salaryData = useLoaderData(); // useLoaderData থেকে ডেটা আনা

  // ডায়নামিক ডেটা চার্টে সেট করা
  const chartData = {
    labels: `${salaryData.month}-${salaryData.year}`, // Month-Year লেবেল
    datasets: [
      {
        label: 'Salary',
        data: salaryData.salary, // Salary মান (Ensure it's a number)
        backgroundColor: 'rgba(54, 162, 235, 0.6)', // বার চার্টের রঙ
        borderColor: 'rgba(54, 162, 235, 1)', // বর্ডারের রঙ
        borderWidth: 1,
      },
    ],
  };

  // চার্টের অপশন
  const chartOptions = {
    responsive: true,
    plugins: {
      legend: {
        display: true,
        position: 'top',
      },
    },
    scales: {
      x: {
        title: {
          display: true,
          text: 'Month-Year',
          font: {
            size: 14,
          },
        },
      },
      y: {
        title: {
          display: true,
          text: 'Salary',
          font: {
            size: 14,
          },
        },
        beginAtZero: true,
      },
    },
  };

  return (
    <div style={{ width: '600px', margin: '0 auto', padding: '20px' }}>
      <h2 className="text-center mb-4">Salary vs. Month-Year</h2>
      <Bar data={chartData} options={chartOptions} />
    </div>
  );
};

export default EmployeeDetails;
