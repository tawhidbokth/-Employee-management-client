import React, { useState } from 'react';
// import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
// import { ToastContainer, toast } from "react-toastify";

const Login = () => {
  // const auth = getAuth();
  const [form, setForm] = useState({ email: '', password: '' });

  const handleInputChange = e => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  // const handleLogin = async (e) => {
  //   e.preventDefault();
  //   try {
  //     await signInWithEmailAndPassword(auth, form.email, form.password);
  //     toast.success("Login successful!");
  //   } catch (error) {
  //     toast.error(error.message);
  //   }
  // };

  return (
    <div className="min-h-screen flex justify-center items-center bg-gray-100">
      <form className="bg-white p-8 rounded shadow-md w-96">
        <h2 className="text-2xl font-bold mb-6 text-center">Login</h2>
        <input
          type="email"
          name="email"
          placeholder="Email"
          className="input-field"
          onChange={handleInputChange}
          required
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          className="input-field"
          onChange={handleInputChange}
          required
        />
        <button type="submit" className="btn-primary w-full">
          Login
        </button>
        {/* <ToastContainer /> */}
      </form>
    </div>
  );
};

export default Login;
