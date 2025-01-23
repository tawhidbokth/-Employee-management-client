import { Navigate, useLocation } from 'react-router-dom';
import { useContext } from 'react';
import { AuthContext } from '../Provider/AuthProvider';
import useHr from '../Hooks/useHr';

const HrRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  const [isHr, isHrLoading] = useHr(); // Destructure the return of useHr
  const location = useLocation();

  console.log('User: ', user);
  console.log('isHr: ', isHr);
  console.log('isHrLoading: ', isHrLoading);

  if (loading || isHrLoading) {
    return <progress className="progress w-56"></progress>; // Show loading spinner
  }

  if (isHr === undefined) {
    return <div>Error: Unable to fetch HR data</div>; // Show an error if isHr is undefined
  }

  if (user && isHr) {
    return children; // Render the protected route
  }

  return <Navigate to="/" state={{ from: location }} replace />; // Redirect to home if not HR
};

export default HrRoute;
