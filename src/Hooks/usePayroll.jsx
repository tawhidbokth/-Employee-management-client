import { useQuery } from '@tanstack/react-query';
import useAxsioSequre from './useAxsioSequre';
import { useContext } from 'react';
import { AuthContext } from '../Provider/AuthProvider';

const usePayroll = () => {
  const { user } = useContext(AuthContext);
  const axiosSecure = useAxsioSequre();
  const { refetch, data: payroll = [] } = useQuery({
    queryKey: ['payroll'],
    queryFn: async () => {
      const res = await axiosSecure.get(
        `http://localhost:5000/payroll/?email=${user.email}`
      );
      return res.data;
    },
  });

  return [payroll, refetch];
};

export default usePayroll;
