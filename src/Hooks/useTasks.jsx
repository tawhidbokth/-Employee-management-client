import { useQuery } from '@tanstack/react-query';
import useAxsioSequre from './useAxsioSequre';

const useTasks = () => {
  const axiosSecure = useAxsioSequre();
  const { refetch, data: tasks = [] } = useQuery({
    queryKey: ['cart'],
    queryFn: async () => {
      const res = await axiosSecure.get('/tasks');
      return res.data;
    },
  });

  return [tasks, refetch];
};

export default useTasks;
