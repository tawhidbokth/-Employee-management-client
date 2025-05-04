import { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { AuthContext } from '../Provider/AuthProvider';
import SocialLogin from '../Components/SocialLogin';

const Register = () => {
  const { createUser } = useContext(AuthContext);
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleRegister = async e => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const photoFile = form.photo.files[0];
    const email = form.email.value;
    const password = form.password.value;
    const role = form.role.value;
    const bankAccount = form.bankAccount.value;
    const salary = form.salary.value;
    const designation = form.designation.value;

    // Validate password
    const passwordValidation = validatePassword(password);
    if (!passwordValidation.isValid) {
      toast.error(passwordValidation.message, {
        position: 'top-center',
        autoClose: 2000,
      });
      return;
    }

    // Upload photo to imgBB
    const formData = new FormData();
    formData.append('image', photoFile);
    const imgbbApiKey = import.meta.env.VITE_IMGBB_API_KEY;
    const imgbbUrl = `https://api.imgbb.com/1/upload?key=${imgbbApiKey}`;
    try {
      const imgUploadResponse = await fetch(imgbbUrl, {
        method: 'POST',
        body: formData,
      });
      const imgData = await imgUploadResponse.json();

      if (!imgData.success) {
        throw new Error('Failed to upload image. Please try again.');
      }

      const photo = imgData.data.url;

      // Create user
      createUser(email, password, name, photo)
        .then(() => {
          const newUser = {
            name,
            email,
            photo,
            role,
            bank_account_no: bankAccount,
            salary,
            designation,
          };

          // Save user to database
          fetch('http://localhost:5000/users', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(newUser),
          })
            .then(res => res.json())
            .then(() => {
              form.reset();
              toast.success('Registration Successful!', {
                position: 'top-center',
                autoClose: 2000,
              });
              setTimeout(() => {
                navigate('/');
              }, 2000);
            });
        })
        .catch(error => {
          setError(error.message);
          toast.error(error.message, {
            position: 'top-center',
            autoClose: 2000,
          });
        });
    } catch (error) {
      toast.error(error.message, {
        position: 'top-center',
        autoClose: 2000,
      });
    }
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
    if (!/[!@#$%^&*]/.test(password)) {
      return {
        isValid: false,
        message: 'Password must contain at least one special character.',
      };
    }
    return { isValid: true };
  };

  return (
    <div className="min-h-screen  bg-gradient-to-r from-indigo-500 to-purple-500 flex items-center justify-center">
      <div className="max-w-md w-full p-6 bg-white my-24 shadow-md rounded-lg">
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
              className="w-full border border-gray-300 rounded-lg px-4 py-2"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 font-medium mb-2">
              Photo
            </label>
            <input
              type="file"
              name="photo"
              className="w-full border border-gray-300 rounded-lg px-4 py-2"
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
              className="w-full border border-gray-300 rounded-lg px-4 py-2"
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
              className="w-full border border-gray-300 rounded-lg px-4 py-2"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 font-medium mb-2">Role</label>
            <select
              name="role"
              className="w-full border border-gray-300 rounded-lg px-4 py-2"
              required
            >
              <option value="" disabled selected>
                Select Role
              </option>
              <option value="Employee">Employee</option>
              <option value="HR">HR</option>
            </select>
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 font-medium mb-2">
              Bank Account Number
            </label>
            <input
              type="text"
              name="bankAccount"
              placeholder="Bank Account Number"
              className="w-full border border-gray-300 rounded-lg px-4 py-2"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 font-medium mb-2">
              Salary
            </label>
            <input
              type="text"
              name="salary"
              placeholder="Salary"
              className="w-full border border-gray-300 rounded-lg px-4 py-2"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 font-medium mb-2">
              Designation
            </label>
            <input
              type="text"
              name="designation"
              placeholder="Designation"
              className="w-full border border-gray-300 rounded-lg px-4 py-2"
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
        <p className="text-center mt-4">
          Already have an account?{' '}
          <Link to="/login" className="text-blue-500 hover:underline">
            Login here
          </Link>
        </p>
        <hr />
        <SocialLogin></SocialLogin>
        <ToastContainer />
      </div>
    </div>
  );
};

export default Register;
