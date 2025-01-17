import { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FaGoogle } from 'react-icons/fa';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { AuthContext } from '../Provider/AuthProvider';

const Login = () => {
  const navigate = useNavigate();
  const { signInUser, signInWithGoogle } = useContext(AuthContext);
  const [email, setEmail] = useState('');

  const handlelogin = e => {
    e.preventDefault();
    const emailInput = e.target.email.value;
    const password = e.target.password.value;
    setEmail(emailInput);

    signInUser(emailInput, password)
      .then(result => {
        toast.success('Login Successful!', {
          position: 'top-center',
          autoClose: 2000,
        });

        setTimeout(() => {
          navigate('/');
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

  const handleGoogleSignIn = () => {
    signInWithGoogle()
      .then(result => {
        toast.success('Google Login Successful!', {
          position: 'top-center',
          autoClose: 2000,
        });

        setTimeout(() => {
          navigate('/');
          toast.dismiss();
        }, 2000);
      })
      .catch(error => {
        const errorMessage = error?.message || 'Google Login Failed!';
        toast.error(errorMessage, {
          position: 'top-center',
          autoClose: 2000,
        });
      });
  };

  return (
    <div>
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="max-w-md w-full p-6 bg-white shadow-md rounded-lg">
          <div className="text-center lg:text-left">
            <h1 className="text-3xl font-bold">Login now!</h1>
          </div>
          <div className="mb-4">
            <form onSubmit={handlelogin} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="email"
                  className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring focus:ring-blue-300"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  name="password"
                  placeholder="password"
                  className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring focus:ring-blue-300"
                  required
                />
                <label className="label">
                  <Link
                    to="/forgot-password"
                    state={{ email }}
                    className="label-text-alt link link-hover text-blue-700"
                  >
                    Forgot password?
                  </Link>
                </label>
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary">Login</button>
              </div>
            </form>
            <p className="ml-4 mb-4">
              New to this website? Please{' '}
              <Link to="/register">
                <span className="text-blue-700 font-bold">Register</span>
              </Link>
            </p>
            <p className="border">
              <button
                onClick={handleGoogleSignIn}
                className="btn btn-ghost w-full"
              >
                <FaGoogle />
                <span>Login with Google</span>
              </button>
            </p>
          </div>
        </div>
      </div>

      <ToastContainer />
    </div>
  );
};

export default Login;
