import React, { useEffect, useState, useRef } from 'react';
import { useParams } from 'react-router-dom';
import { Bar } from 'react-chartjs-2';
import Chart from 'chart.js/auto';

const EmployeeDetails = () => {
  const { slug } = useParams();
  const [employee, setEmployee] = useState(null);
  const [chartData, setChartData] = useState(null);
  const chartInstanceRef = useRef(null); // Reference for the chart instance

  useEffect(() => {
    // Fetch employee data by slug (email or UID)
    const fetchEmployeeData = async () => {
      // Replace with your database fetching logic
      const data = {
        name: 'John Doe',
        photoURL: '',
        designation: 'Engineer',
        salaryHistory: [
          { month: 'Jan', year: 2024, salary: 5000 },
          { month: 'Feb', year: 2024, salary: 5200 },
          { month: 'Mar', year: 2024, salary: 5300 },
        ],
      };
      setEmployee(data);

      const labels = data.salaryHistory.map(
        item => `${item.month} ${item.year}`
      );
      const values = data.salaryHistory.map(item => item.salary);

      setChartData({
        labels,
        datasets: [
          {
            label: 'Salary',
            data: values,
            backgroundColor: 'rgba(75, 192, 192, 0.6)',
          },
        ],
      });
    };

    fetchEmployeeData();

    // Cleanup logic for destroying chart instance
    return () => {
      if (chartInstanceRef.current) {
        chartInstanceRef.current.destroy();
        chartInstanceRef.current = null;
      }
    };
  }, [slug]);

  if (!employee || !chartData) return <div>Loading...</div>;

  return (
    <div>
      <h1>{employee.name}</h1>
      <img
        src={employee.photoURL}
        alt={employee.name}
        style={{ maxWidth: '150px', borderRadius: '50%' }}
      />
      <p>Designation: {employee.designation}</p>

      <div style={{ width: '600px', margin: '0 auto' }}>
        <Bar
          data={chartData}
          options={{
            responsive: true,
            plugins: {
              legend: { display: true },
            },
            scales: {
              x: { title: { display: true, text: 'Month-Year' } },
              y: { title: { display: true, text: 'Salary' } },
            },
          }}
          ref={chart => {
            if (chart) {
              if (chartInstanceRef.current) {
                chartInstanceRef.current.destroy(); // Destroy the previous chart instance
              }
              chartInstanceRef.current = chart; // Set the new chart instance
            }
          }}
        />
      </div>
    </div>
  );
};

export default EmployeeDetails;
