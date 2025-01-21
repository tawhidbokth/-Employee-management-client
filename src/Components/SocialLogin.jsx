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
    <div className="p-8">
      <div className="divider"></div>
      <div>
        <button onClick={handleGoogleSignIn} className="btn">
          <FaGoogle className="mr-2" />
          Sign in with Google
        </button>
      </div>
    </div>
  );
};

export default SocialLogin;
