import { createBrowserRouter } from 'react-router-dom';
import MainLayout from '../Layout/MainLayout';
import ErrorPages from '../Pages/ErrorPages';
import ContactUs from '../Pages/ContactUs';
import Home from '../Components/Home/Home';
import Dashboard from '../Layout/Dashboard';
import WorkSheet from '../Pages/Dashboard/Components/workSheet';
import PaymentHistory from '../Pages/Dashboard/Components/PaymentHistory';
import EmployeeList from '../Pages/Dashboard/Components/EmployeeList';
import Progress from '../Pages/Dashboard/Components/Progress';
import Payroll from '../Pages/Dashboard/Components/AdminDashboard/Payroll';
import Register from '../Auth/Register';
import Login from '../Auth/Login';
import WellcomePage from '../Pages/Dashboard/WellcomePage';
import AllEmployee from '../Pages/Dashboard/Components/AdminDashboard/AllEmployee';
import InboxAdmin from '../Pages/Dashboard/Components/AdminDashboard/InboxAdmin';
import Policy from '../Components/Policy';
import AdminRoute from './AdminRoute';
import HrRoute from './HrRoute';
import EmployeeRoute from './EmployeeRoute';
import EmployeeDetails from './../Pages/Dashboard/Components/EmployeeDetails';
import ProfilePage from '../Pages/Dashboard/Components/ProfilePage';
import Pricing from '../Pages/Pricing';
const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout></MainLayout>,
    errorElement: <ErrorPages></ErrorPages>,
    children: [
      {
        path: '/',
        element: <Home></Home>,
      },

      {
        path: 'contac',
        element: <ContactUs></ContactUs>,
      },

      {
        path: 'pricing',
        element: <Pricing></Pricing>,
      },
      {
        path: 'policy',
        element: <Policy></Policy>,
      },
      {
        path: '/register',
        element: <Register></Register>,
      },
      {
        path: '/login',
        element: <Login></Login>,
      },
    ],
  },

  {
    path: 'dashboard',
    element: <Dashboard></Dashboard>,

    children: [
      {
        path: 'dashboard',
        element: <WellcomePage></WellcomePage>,
      },

      {
        path: 'worksheet',
        element: (
          <EmployeeRoute>
            <WorkSheet></WorkSheet>,
          </EmployeeRoute>
        ),
      },

      {
        path: 'paymanthistory',
        element: (
          <EmployeeRoute>
            <PaymentHistory></PaymentHistory>,
          </EmployeeRoute>
        ),
      },

      {
        path: 'slug/:id', // Add dynamic route parameter
        element: <EmployeeDetails></EmployeeDetails>,
      },

      {
        path: 'employlist',
        element: (
          <HrRoute>
            <EmployeeList></EmployeeList>,
          </HrRoute>
        ),
      },
      {
        path: 'progress',
        element: (
          <HrRoute>
            <Progress></Progress>,
          </HrRoute>
        ),
      },
      {
        path: 'allemployee',
        element: (
          <AdminRoute>
            <AllEmployee></AllEmployee>,
          </AdminRoute>
        ),
      },

      {
        path: 'payroll',
        element: (
          <AdminRoute>
            <Payroll></Payroll>,
          </AdminRoute>
        ),
      },
      {
        path: 'inbox',
        element: (
          <AdminRoute>
            <InboxAdmin></InboxAdmin>
          </AdminRoute>
        ),
      },

      {
        path: 'profile',
        element: <ProfilePage></ProfilePage>,
      },
    ],
  },
]);

export default router;
