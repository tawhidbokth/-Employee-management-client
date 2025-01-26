import { Navigate, useLocation } from 'react-router-dom';
import { useContext } from 'react';
import { AuthContext } from '../Provider/AuthProvider';
import useEmployee from '../Hooks/useEmployee';

const EmployeeRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  const [isEmployee, isEmployeeLoading] = useEmployee(); // Destructure the return of useHr
  const location = useLocation();

  if (loading || isEmployeeLoading) {
    return <progress className="progress w-56"></progress>; // Show loading spinner
  }

  if (isEmployee === undefined) {
    return <div>Error: Unable to fetch data</div>; // Show an error if Employee  is undefined
  }

  if (user && isEmployee) {
    return children;
  }

  return <Navigate to="/" state={{ from: location }} replace />;
};

export default EmployeeRoute;
