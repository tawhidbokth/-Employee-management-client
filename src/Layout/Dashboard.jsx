import React from 'react';
import { Outlet } from 'react-router-dom';
import Sidebar from '../Pages/Dashboard/Sidebar';

const Dashboard = () => {
  return (
    <div className="flex flex-col lg:flex-row min-h-screen bg-gradient-to-r from-blue-500 to-teal-500">
      <div className="w-72  ">
        <Sidebar></Sidebar>
      </div>

      <div className="flex-grow lg:mt-8 lg:w-2/3">
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default Dashboard;
