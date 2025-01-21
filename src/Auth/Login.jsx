import { useContext } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import { AuthContext } from '../Provider/AuthProvider';
import SocialLogin from '../Components/SocialLogin';
import { toast } from 'react-toastify';

const Login = () => {
  const { signInUser } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();

  const from = location.state?.from?.pathname || '/';

  const handleLogin = event => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;

    signInUser(email, password)
      .then(result => {
        toast.success('Login Successful!', {
          position: 'top-center',
          autoClose: 2000,
        });

        setTimeout(() => {
          navigate(from);
        }, 2000);
      })
      .catch(error => {
        const errorMessage = error?.message || 'Something went wrong!';
        toast.error(errorMessage, {
          position: 'top-center',
          autoClose: 2000,
        });
      });
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-indigo-500 to-purple-500 flex items-center justify-center">
      <div className="w-full max-w-md bg-white rounded-lg shadow-xl overflow-hidden">
        <div className="p-6">
          <h1 className="text-2xl font-bold text-center text-gray-700">
            Welcome Back!
          </h1>
          <p className="mt-2 text-sm text-gray-500 text-center">
            Sign in to access your account
          </p>
          <form onSubmit={handleLogin} className="mt-6">
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-600">
                Email Address
              </label>
              <input
                type="email"
                name="email"
                placeholder="Enter your email"
                className="w-full px-4 py-2 mt-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400"
              />
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-600">
                Password
              </label>
              <input
                type="password"
                name="password"
                placeholder="Enter your password"
                className="w-full px-4 py-2 mt-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400"
              />
              <div className="text-right mt-1">
                <Link
                  to="#"
                  className="text-sm text-indigo-500 hover:underline"
                >
                  Forgot Password?
                </Link>
              </div>
            </div>
            <div className="mt-6">
              <button
                type="submit"
                className="w-full px-4 py-2 text-white bg-indigo-500 rounded-lg hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-indigo-400"
              >
                Login
              </button>
            </div>
          </form>
          <div className="mt-6 text-center">
            <p className="text-sm">
              New here?{' '}
              <Link
                to="/register"
                className="text-indigo-500 font-semibold hover:underline"
              >
                Create an account
              </Link>
            </p>
          </div>
          <div className="divider my-6">OR</div>
          <SocialLogin />
        </div>
      </div>
    </div>
  );
};

export default Login;
