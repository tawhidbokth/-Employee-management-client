import { useQuery } from '@tanstack/react-query';
import { useContext } from 'react';
import { AuthContext } from '../Provider/AuthProvider';
import useAxsioSequre from './useAxsioSequre';

const useEmployee = () => {
  const { user, loading } = useContext(AuthContext);
  const axiosSecure = useAxsioSequre();
  const { data: isEmployee, isLoading: isEmployeeLoading } = useQuery({
    queryKey: [user?.email, 'isEmployee'],
    enabled: !loading,
    queryFn: async () => {
      console.log('asking or checking is admin', user);
      const res = await axiosSecure.get(`/users/Employee/${user.email}`);
      console.log(res.data);
      return res.data?.employee; // Access 'hr' instead of 'HR' here
    },
  });
  return [isEmployee, isEmployeeLoading];
};

export default useEmployee;
