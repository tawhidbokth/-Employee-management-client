import { useContext, useState } from 'react';

import { Link, useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { AuthContext } from '../Provider/AuthProvider';

const Register = () => {
  const { createUser } = useContext(AuthContext);
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleRegister = e => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const photo = form.photo.value;
    const email = form.email.value;
    const password = form.password.value;

    const passwordValidation = validatePassword(password);
    if (!passwordValidation.isValid) {
      toast.error(passwordValidation.message, {
        position: 'top-center',
        autoClose: 2000,
      });
      return;
    }

    createUser(email, password, name, photo)
      .then(() => {
        form.reset();
        setError('');
        toast.success('Registration Successful!', {
          position: 'top-center',
          autoClose: 2000,
        });

        setTimeout(() => {
          navigate('/');
        }, 2000);
      })
      .catch(error => {
        setError(error.message);
        toast.error(error.message, {
          position: 'top-center',
          autoClose: 2000,
        });
      });
  };

  const validatePassword = password => {
    if (password.length < 6) {
      return {
        isValid: false,
        message: 'Password must be at least 6 characters long.',
      };
    }
    if (!/[A-Z]/.test(password)) {
      return {
        isValid: false,
        message: 'Password must contain at least one uppercase letter.',
      };
    }
    if (!/[a-z]/.test(password)) {
      return {
        isValid: false,
        message: 'Password must contain at least one lowercase letter.',
      };
    }
    return { isValid: true };
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="max-w-md w-full p-6 bg-white shadow-md rounded-lg">
        <h1 className="text-3xl font-bold text-center text-blue-600 mb-6">
          Register Now
        </h1>
        <form onSubmit={handleRegister}>
          <div className="mb-4">
            <label className="block text-gray-700 font-medium mb-2">Name</label>
            <input
              type="text"
              name="name"
              placeholder="Name"
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring focus:ring-blue-300"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 font-medium mb-2">
              Photo URL
            </label>
            <input
              type="url"
              name="photo"
              placeholder="Photo URL"
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring focus:ring-blue-300"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 font-medium mb-2">
              Email
            </label>
            <input
              type="email"
              name="email"
              placeholder="Email"
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring focus:ring-blue-300"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 font-medium mb-2">
              Password
            </label>
            <input
              type="password"
              name="password"
              placeholder="Password"
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring focus:ring-blue-300"
              required
            />

            <select
              name="role"
              className="input-field"
              // onChange={handleInputChange}
              required
            >
              <option value="" disabled selected>
                Select Role
              </option>
              <option value="Employee">Employee</option>
              <option value="HR">HR</option>
            </select>
            <input
              type="text"
              name="bankAccount"
              placeholder="Bank Account Number"
              className="input-field"
              // onChange={handleInputChange}
              required
            />
            <input
              type="text"
              name="salary"
              placeholder="Salary"
              className="input-field"
              // onChange={handleInputChange}
              required
            />
            <input
              type="text"
              name="designation"
              placeholder="Designation"
              className="input-field"
              // onChange={handleInputChange}
              required
            />
            <input
              type="file"
              name="photo"
              accept="image/*"
              className="input-field"
              // onChange={handleFileChange}
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition"
          >
            Register
          </button>
        </form>
        <p className="mt-4 text-gray-600 text-center">
          Already have an account?{' '}
          <Link to="/login" className="text-blue-600 hover:underline">
            Login
          </Link>
        </p>
      </div>

      <ToastContainer />
    </div>
  );
};

export default Register;
