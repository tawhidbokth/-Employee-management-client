import { createBrowserRouter } from 'react-router-dom';
import MainLayout from '../Layout/MainLayout';
import ErrorPages from '../Pages/ErrorPages';
import ContactUs from '../Pages/ContactUs';
import Home from '../Components/Home/Home';
import Dashboard from '../Layout/Dashboard';
import WorkSheet from '../Pages/Dashboard/Components/workSheet';
import PaymentHistory from '../Pages/Dashboard/Components/PaymentHistory';
import EmployeeList from '../Pages/Dashboard/Components/EmployeeList';
import EmployeeDetails from '../Pages/Dashboard/Components/EmployeeDetails';
import Progress from '../Pages/Dashboard/Components/Progress';

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
    ],
  },

  {
    path: 'dashboard',
    element: <Dashboard></Dashboard>,

    children: [
      {
        path: 'worksheet',
        element: <WorkSheet></WorkSheet>,
      },

      {
        path: 'paymanthistory',
        element: <PaymentHistory></PaymentHistory>,
      },

      {
        path: 'employlist',
        element: <EmployeeList></EmployeeList>,
      },

      {
        path: 'slug',
        element: <EmployeeDetails></EmployeeDetails>,
      },
      {
        path: 'progress',
        element: <Progress></Progress>,
      },
    ],
  },
]);

export default router;
