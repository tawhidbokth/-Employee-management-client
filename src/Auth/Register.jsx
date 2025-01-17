// import React, { useState } from "react";
// import { getAuth, createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
// import { getFirestore, collection, addDoc } from "firebase/firestore";
// import { ToastContainer, toast } from "react-toastify";
// import 'react-toastify/dist/ReactToastify.css';

const Register = () => {
  // const auth = getAuth();
  // const db = getFirestore();
  // const [form, setForm] = useState({
  //   email: "",
  //   password: "",
  //   role: "",
  //   bankAccount: "",
  //   salary: "",
  //   designation: "",
  //   photo: null,
  // });

  // const handleInputChange = (e) => {
  //   const { name, value } = e.target;
  //   setForm({ ...form, [name]: value });
  // };

  // const handleFileChange = (e) => {
  //   setForm({ ...form, photo: e.target.files[0] });
  // };

  // const validatePassword = (password) => {
  //   const errors = [];
  //   if (password.length < 6) errors.push("Password must be at least 6 characters.");
  //   if (!/[A-Z]/.test(password)) errors.push("Password must have at least one capital letter.");
  //   if (!/[^a-zA-Z0-9]/.test(password)) errors.push("Password must have at least one special character.");
  //   return errors;
  // };

  // const handleRegister = async (e) => {
  //   e.preventDefault();
  //   const passwordErrors = validatePassword(form.password);
  //   if (passwordErrors.length > 0) {
  //     passwordErrors.forEach((error) => toast.error(error));
  //     return;
  //   }

  //   try {
  //     const photoUrl = await imgbbUploader(form.photo); // Upload photo and get URL
  //     const userCredential = await createUserWithEmailAndPassword(auth, form.email, form.password);
  //     await updateProfile(userCredential.user, { photoURL: photoUrl });

  // Save user data to Firestore
  //     await addDoc(collection(db, "users"), {
  //       email: form.email,
  //       role: form.role,
  //       bankAccount: form.bankAccount,
  //       salary: form.salary,
  //       designation: form.designation,
  //       photo: photoUrl,
  //     });

  //     toast.success("Registration successful!");
  //   } catch (error) {
  //     toast.error(error.message);
  //   }
  // };

  return (
    <div className="min-h-screen flex justify-center items-center bg-gray-100">
      <form className="bg-white p-8 rounded shadow-md w-96">
        <h2 className="text-2xl font-bold mb-6 text-center">Register</h2>

        <input
          type="email"
          name="email"
          placeholder="Email"
          className="input-field"
          // onChange={handleInputChange}
          required
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          className="input-field"
          // onChange={handleInputChange}
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
        <button type="submit" className="btn-primary w-full">
          Register
        </button>
        {/* <ToastContainer /> */}
      </form>
    </div>
  );
};

export default Register;
