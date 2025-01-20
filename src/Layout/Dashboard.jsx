import React from 'react';
import { Outlet } from 'react-router-dom';
import Sidebar from '../Pages/Dashboard/Sidebar';

const Dashboard = () => {
  return (
    <div className="flex gap-10  p-10 bg-gradient-to-r from-blue-500 to-teal-500">
      <div className="w-72  ">
        <Sidebar></Sidebar>
      </div>

      <div className="flex-1 mt-8 w-2/3 h-[700px]">
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default Dashboard;
