import { useQuery } from '@tanstack/react-query';
import useAxsioSequre from './useAxsioSequre';

const usePayroll = () => {
  const axiosSecure = useAxsioSequre();
  const { refetch, data: payroll = [] } = useQuery({
    queryKey: ['payroll'],
    queryFn: async () => {
      const res = await axiosSecure.get('/payroll');
      return res.data;
    },
  });

  return [payroll, refetch];
};

export default usePayroll;
