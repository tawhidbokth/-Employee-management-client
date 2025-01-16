import React from 'react';
import { Outlet } from 'react-router-dom';
import Sidebar from '../Pages/Dashboard/Sidebar';

const Dashboard = () => {
  return (
    <div className="flex">
      <div className="w-64 ">
        <Sidebar></Sidebar>
      </div>

      <div className="flex-1 mt-8">
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default Dashboard;
