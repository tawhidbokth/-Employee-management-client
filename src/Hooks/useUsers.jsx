import { useQuery } from '@tanstack/react-query';
import useAxsioSequre from './useAxsioSequre';

const useUsers = () => {
  const axiosSecure = useAxsioSequre();
  const { refetch, data: users = [] } = useQuery({
    queryKey: ['users'],
    queryFn: async () => {
      const res = await axiosSecure.get('/users');
      return res.data;
    },
  });

  return [users, refetch];
};

export default useUsers;
