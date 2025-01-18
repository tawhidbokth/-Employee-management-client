import axios from 'axios';

const axiosSecure = axios.create({
  baseURL: 'http://localhost:5000',
});
const useAxsioSequre = () => {
  return axiosSecure;
};

export default useAxsioSequre;
