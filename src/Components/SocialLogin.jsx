import { FaGoogle } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import { AuthContext } from '../Provider/AuthProvider';
import useAxsioSequre from './../Hooks/useAxsioSequre';

const SocialLogin = () => {
  const { signInWithGoogle } = useContext(AuthContext); // Get the Google sign-in function from context
  const axiosPublic = useAxsioSequre(); // Axios instance for API requests
  const navigate = useNavigate(); // Navigation hook

  const handleGoogleSignIn = async () => {
    try {
      const result = await signInWithGoogle(); // Trigger Google sign-in
      const userInfo = {
        email: result.user?.email,
        name: result.user?.displayName,
        salary: 5000, // Default salary
        role: 'Employee', // Default role
        bank_account_no: 43434325452,
        designation: 'Developer', // Default designation
        createdAt: new Date().toISOString(), // Current timestamp
      };

      // Save user info to the server
      const res = await axiosPublic.post('/users', userInfo);

      if (res.status === 200) {
        console.log('User saved successfully:', res.data);
        navigate('/'); // Redirect after successful sign-in
      }
    } catch (error) {
      console.error('Google sign-in failed:', error);
      // Optional: You can display an error toast/message to the user here
    }
  };

  return (
    <div className="p-2">
      <div className="w-full mx-auto">
        <button
          type="button"
          onClick={handleGoogleSignIn}
          className="focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
        >
          <div className="flex items-center text-base">
            <FaGoogle className="mr-2" />
            Sign in with Google
          </div>
        </button>
      </div>
    </div>
  );
};

export default SocialLogin;
