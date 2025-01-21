import React, { useContext, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import { FaBars, FaTimes } from 'react-icons/fa';
import { AuthContext } from '../Provider/AuthProvider';

const Navbar = () => {
  const { user, signOutUser } = useContext(AuthContext);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);

  const handleSignOut = () => {
    signOutUser()
      .then(() => {
        toast.success('Sign Out Successful!', {
          position: 'top-center',
          autoClose: 2000,
        });
      })
      .catch(error => {
        toast.error(`Error: ${error.message}`, {
          position: 'top-center',
          autoClose: 2000,
        });
      });
  };

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const toggleDropdown = () => setShowDropdown(prev => !prev);

  const navLinks = (
    <>
      <li className="my-2 lg:my-0 lg:mx-4">
        <NavLink to="/" className="hover:text-orange-500">
          Home
        </NavLink>
      </li>
      <li className="my-2 lg:my-0 lg:mx-4">
        <NavLink to="contac" className="hover:text-orange-500">
          Contact
        </NavLink>
      </li>
      {user ? (
        <li className="my-2 lg:my-0 lg:mx-4">
          <NavLink to="/dashboard/dashboard" className="hover:text-orange-500">
            Dashboard
          </NavLink>
        </li>
      ) : (
        ''
      )}
    </>
  );

  return (
    <header className="bg-gray-900 text-white fixed z-40  w-full">
      <div className="container mx-auto flex justify-between items-center py-4 px-6">
        {/* Logo */}
        <div className="flex items-center">
          <img
            className="w-12 h-12 rounded-full"
            src="https://i.ibb.co.com/TTr45kQ/weblogo.png"
            alt="Savory Delight"
          />
          <span className="text-xl font-bold ml-3">Home Decoration</span>
        </div>

        {/* Desktop Menu */}
        <nav className="hidden lg:block">
          <ul className="flex items-center">{navLinks}</ul>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="lg:hidden text-2xl"
          onClick={toggleMenu}
          aria-label="Toggle Menu"
        >
          {isMenuOpen ? <FaTimes /> : <FaBars />}
        </button>

        {/* User Section */}
        <div className="hidden lg:flex flex-col lg:flex-row items-center gap-4">
          {user ? (
            <div className="flex flex-col lg:flex-row items-center gap-4">
              <button
                onClick={handleSignOut}
                className="px-4 py-2 bg-orange-500 rounded hover:bg-orange-600"
              >
                Sign Out
              </button>
              <div className="relative z-10">
                <div className=" cursor-pointer" onClick={toggleDropdown}>
                  <div>
                    <img
                      className="w-10 h-10 rounded-full"
                      src={user.photoURL}
                      alt="User Profile"
                    />
                  </div>
                </div>
                {showDropdown && (
                  <div className="absolute w-[150px] p-5 right-0 mt-2 bg-white text-black shadow-lg rounded">
                    <p>{user.displayName}</p>
                  </div>
                )}
              </div>
            </div>
          ) : (
            <Link
              to="/login"
              className="px-4 py-2 bg-orange-500 rounded hover:bg-orange-600"
            >
              Login
            </Link>
          )}
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="lg:hidden navbar-end w-fullshadow-lg">
          <ul className="menu w-full p-4">{navLinks}</ul>
          <div className="flex flex-col items-center gap-4 mt-4">
            {user ? (
              <div className="flex flex-col items-center gap-4">
                <button
                  onClick={handleSignOut}
                  className="px-4 py-2 bg-orange-500 rounded hover:bg-orange-600"
                >
                  Sign Out
                </button>
                <div className="relative z-10">
                  <div
                    className="avatar cursor-pointer"
                    onClick={toggleDropdown}
                  >
                    <div className="w-14 rounded-full">
                      <img src={user.photoURL} alt="User Profile" />
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              <Link
                to="/login"
                className="px-4 py-2 bg-orange-500 rounded hover:bg-orange-600"
              >
                Login
              </Link>
            )}
          </div>
        </div>
      )}

      <ToastContainer />
    </header>
  );
};

export default Navbar;
