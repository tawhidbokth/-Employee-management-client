import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import useAxsioSequre from '../../../Hooks/useAxsioSequre';

import { Bar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

// Chart.js মডিউল রেজিস্টার করা
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const EmployeeDetails = () => {
  const { id } = useParams();
  const [user, setUser] = useState({});
  const [salary, setSalary] = useState([]);
  const axiosSequre = useAxsioSequre();

  useEffect(() => {
    const fetchEmployee = async () => {
      try {
        const { data } = await axiosSequre.get(`/users/${id}`);
        setUser(data);
      } catch (error) {
        console.error('Error fetching employee details:', error);
      }
    };

    fetchEmployee();
  }, [id, axiosSequre]);

  useEffect(() => {
    const fetchSalary = async () => {
      try {
        if (user.email) {
          const { data } = await axiosSequre.get(
            `/payroll/?email=${user.email}`
          );
          setSalary(data);
        }
      } catch (error) {
        console.error('Error fetching salary details:', error);
      }
    };

    fetchSalary();
  }, [user, axiosSequre]);

  const chartData = {
    labels: salary.map(item => `${item.month} ${item.year}`), // মাস এবং বছর
    datasets: [
      {
        label: 'Salary ($)',
        data: salary.map(item => parseInt(item.salary, 10)), // বেতন ডেটা
        backgroundColor: 'rgba(75, 192, 192, 0.6)',
        borderColor: 'rgba(75, 192, 192, 1)',
        borderWidth: 1,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: 'Salary vs. Month and Year',
      },
    },
    scales: {
      x: {
        title: {
          display: true,
          text: 'Month and Year', // x-axis লেবেল
        },
      },
      y: {
        title: {
          display: true,
          text: 'Salary ($)', // y-axis লেবেল
        },
        beginAtZero: true,
      },
    },
  };

  return (
    <div className="p-6">
      <div className="flex items-center space-x-6 mb-6">
        <img
          src={user.photo}
          alt={`${user.name}'s photo`}
          className="w-24 h-24 rounded-full object-cover"
        />
        <div>
          <h1 className="text-2xl font-bold">{user.name}</h1>
          <p className="text-lg text-gray-600">{user.designation}</p>
        </div>
      </div>

      <div className="p-6">
        <h1 className="text-2xl font-bold mb-4">Employee Salary Chart</h1>
        <div className="bg-white p-4 rounded-lg shadow-md">
          <Bar data={chartData} options={options} />
        </div>
      </div>
    </div>
  );
};

export default EmployeeDetails;
