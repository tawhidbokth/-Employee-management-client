import { useQuery } from '@tanstack/react-query';
import useAxsioSequre from './useAxsioSequre';
import { useContext } from 'react';
import { AuthContext } from '../Provider/AuthProvider';

const useTasks = () => {
  const { user } = useContext(AuthContext);
  const axiosSecure = useAxsioSequre();
  const { refetch, data: tasks = [] } = useQuery({
    queryKey: ['tasks'],
    queryFn: async () => {
      const res = await axiosSecure.get(`/tasks?email=${user.email}`);
      return res.data;
    },
  });

  return [tasks, refetch];
};

export default useTasks;
