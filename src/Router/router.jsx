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
import Payroll from '../Pages/Dashboard/Components/AdminDashboard/Payroll';
import Register from '../Auth/Register';
import Login from '../Auth/Login';
import UpdateTasks from '../Pages/Dashboard/Components/UpdateTasks';
import WellcomePage from '../Pages/Dashboard/WellcomePage';
import AllEmployee from '../Pages/Dashboard/Components/AdminDashboard/AllEmployee';

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
        element: <WorkSheet></WorkSheet>,
      },

      {
        path: 'update/:id',
        element: <UpdateTasks></UpdateTasks>,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/tasks/${params.id}`),
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
        loader: ({ params }) =>
          fetch(`http://localhost:5000/payroll/${params.id}`),
      },
      {
        path: 'progress',
        element: <Progress></Progress>,
        loader: () => fetch('http://localhost:5000/tasks'),
      },
      {
        path: 'allemployee',
        element: <AllEmployee></AllEmployee>,
      },

      {
        path: 'payroll',
        element: <Payroll></Payroll>,
      },
    ],
  },
]);

export default router;
