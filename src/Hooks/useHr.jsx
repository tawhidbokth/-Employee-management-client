import { useQuery } from '@tanstack/react-query';
import { useContext } from 'react';
import { AuthContext } from '../Provider/AuthProvider';
import useAxsioSequre from './useAxsioSequre';

const useHr = () => {
  const { user, loading } = useContext(AuthContext);
  const axiosSecure = useAxsioSequre();
  const { data: isHr, isLoading: isHrLoading } = useQuery({
    queryKey: [user?.email, 'isHr'],
    enabled: !loading,
    queryFn: async () => {
      console.log('asking or checking is admin', user);
      const res = await axiosSecure.get(`/users/HR/${user.email}`);
      console.log(res.data);
      return res.data?.hr; // Access 'hr' instead of 'HR' here
    },
  });
  return [isHr, isHrLoading];
};

export default useHr;
