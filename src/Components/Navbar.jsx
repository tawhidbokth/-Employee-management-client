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
    <header className=" text-black  w-full">
      <div className="container mx-auto flex justify-between items-center py-4 px-6">
        {/* Logo */}
        <div className="flex items-center">
          <img
            className="w-12 h-12 rounded-full"
            src="https://i.ibb.co/3dLVZ1x/DALL-E-2024-12-25-08-39-19-A-luxurious-golden-logo-design-for-a-restaurant-named-Savory-Delight-The.webp"
            alt="Savory Delight"
          />
          <span className="text-xl font-bold ml-3">Savory Delight</span>
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
                <div className="avatar cursor-pointer" onClick={toggleDropdown}>
                  <div className="w-14 rounded-full ">
                    <img src={user.photoURL} alt="User Profile" />
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
          <ul className="menu w-full p-4">
            {navLinks}
            <div className="text-white rounded">
              <Link
                to="/myfoods"
                className="block px-4 py-2 rounded-lg hover:bg-gray-800"
              >
                My Foods
              </Link>
              <Link
                to="/addfoods"
                className="block px-4 py-2 rounded-lg hover:bg-gray-800"
              >
                Add Foods
              </Link>
              <Link
                to="/myorder"
                className="block px-4 py-2 rounded-lg hover:bg-gray-800"
              >
                My Orders
              </Link>
            </div>
          </ul>
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
                  {/* {showDropdown && (
                    // <div className="absolute right-0 mt-2 bg-white text-black shadow-lg rounded">
                    //   <Link
                    //     to="/myfoods"
                    //     className="block px-4 py-2 hover:bg-gray-100"
                    //   >
                    //     My Foods
                    //   </Link>
                    //   <Link
                    //     to="/addfoods"
                    //     className="block px-4 py-2 hover:bg-gray-100"
                    //   >
                    //     Add Foods
                    //   </Link>
                    //   <Link
                    //     to="/myorder"
                    //     className="block px-4 py-2 hover:bg-gray-100"
                    //   >
                    //     My Orders
                    //   </Link>
                    // </div>
                  )} */}
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

// import { Link, NavLink } from 'react-router-dom';
// import 'flowbite';
// import { useContext } from 'react';
// import { AuthContext } from '../Provider/AuthProvider';
// import { toast } from 'react-toastify';

// const Navbar = () => {
//   const { user, signOutUser } = useContext(AuthContext);

//   const handleSignOut = () => {
//     signOutUser()
//       .then(() => {
//         toast.success('Sign Out Successful!', {
//           position: 'top-center',
//           autoClose: 2000,
//         });
//       })
//       .catch(error => {
//         toast.error(`Error: ${error.message}`, {
//           position: 'top-center',
//           autoClose: 2000,
//         });
//       });
//   };

//   return (
//     <div>
//       <nav className="bg-white border-gray-200 dark:bg-gray-900">
//         <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
//           <a
//             href="https://flowbite.com/"
//             className="flex items-center space-x-3 rtl:space-x-reverse"
//           >
//             <img
//               src="https://flowbite.com/docs/images/logo.svg"
//               className="h-8"
//               alt="Flowbite Logo"
//             />
//             <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
//               Flowbite
//             </span>
//           </a>

//           {user ? (
//             // <div className="flex items-center md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
//             //   <button
//             //     type="button"
//             //     className="flex text-sm bg-gray-800 rounded-full md:me-0 focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600"
//             //     id="user-menu-button"
//             //     aria-expanded="false"
//             //     data-dropdown-toggle="user-dropdown"
//             //     data-dropdown-placement="bottom"
//             //   >
//             //     <span className="sr-only">Open user menu</span>
//             //     <img
//             //       className="w-8 h-8 rounded-full"
//             //       src={user?.photoURL || ''}
//             //       alt="user photo"
//             //     />
//             //   </button>

//             //   <div
//             //     className="z-50 hidden my-4 text-base list-none bg-white divide-y divide-gray-100 rounded-lg shadow dark:bg-gray-700 dark:divide-gray-600"
//             //     id="user-dropdown"
//             //   >
//             //     <div className="px-4 py-3">
//             //       <span className="block text-sm text-gray-900 dark:text-white">
//             //         {user?.displayName || ''}
//             //       </span>
//             //       <span className="block text-sm  text-gray-500 truncate dark:text-gray-400">
//             //         {user?.email || ''}
//             //       </span>
//             //     </div>
//             //     <ul className="py-2" aria-labelledby="user-menu-button">
//             //       <button
//             //         onClick={handleSignOut}
//             //         className="px-4 py-2 bg-orange-500 rounded hover:bg-orange-600"
//             //       >
//             //         Sign Out
//             //       </button>
//             //     </ul>
//             //   </div>
//             //   <button
//             //     data-collapse-toggle="navbar-user"
//             //     type="button"
//             //     className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
//             //     aria-controls="navbar-user"
//             //     aria-expanded="false"
//             //   >
//             //     <span className="sr-only">Open main menu</span>
//             //     <svg
//             //       className="w-5 h-5"
//             //       aria-hidden="true"
//             //       xmlns="http://www.w3.org/2000/svg"
//             //       fill="none"
//             //       viewBox="0 0 17 14"
//             //     >
//             //       <path
//             //         stroke="currentColor"
//             //         stroke-linecap="round"
//             //         stroke-linejoin="round"
//             //         stroke-width="2"
//             //         d="M1 1h15M1 7h15M1 13h15"
//             //       />
//             //     </svg>
//             //   </button>
//             // </div>

//             <div class="flex items-center md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
//               <button
//                 type="button"
//                 class="flex text-sm bg-gray-800 rounded-full md:me-0 focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600"
//                 id="user-menu-button"
//                 aria-expanded="false"
//                 data-dropdown-toggle="user-dropdown"
//                 data-dropdown-placement="bottom"
//               >
//                 <span class="sr-only">Open user menu</span>
//                 <img
//                   class="w-8 h-8 rounded-full"
//                   src="/docs/images/people/profile-picture-3.jpg"
//                   alt="user photo"
//                 />
//               </button>

//               <div
//                 class="z-50 hidden my-4 text-base list-none bg-white divide-y divide-gray-100 rounded-lg shadow dark:bg-gray-700 dark:divide-gray-600"
//                 id="user-dropdown"
//               >
//                 <div class="px-4 py-3">
//                   <span class="block text-sm text-gray-900 dark:text-white">
//                     Bonnie Green
//                   </span>
//                   <span class="block text-sm  text-gray-500 truncate dark:text-gray-400">
//                     name@flowbite.com
//                   </span>
//                 </div>
//                 <ul class="py-2" aria-labelledby="user-menu-button">
//                   <li>
//                     <a
//                       href="#"
//                       class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
//                     >
//                       Dashboard
//                     </a>
//                   </li>
//                   <li>
//                     <a
//                       href="#"
//                       class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
//                     >
//                       Settings
//                     </a>
//                   </li>
//                   <li>
//                     <a
//                       href="#"
//                       class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
//                     >
//                       Earnings
//                     </a>
//                   </li>
//                   <li>
//                     <a
//                       href="#"
//                       class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
//                     >
//                       Sign out
//                     </a>
//                   </li>
//                 </ul>
//               </div>
//               <button
//                 data-collapse-toggle="navbar-user"
//                 type="button"
//                 class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
//                 aria-controls="navbar-user"
//                 aria-expanded="false"
//               >
//                 <span class="sr-only">Open main menu</span>
//                 <svg
//                   class="w-5 h-5"
//                   aria-hidden="true"
//                   xmlns="http://www.w3.org/2000/svg"
//                   fill="none"
//                   viewBox="0 0 17 14"
//                 >
//                   <path
//                     stroke="currentColor"
//                     stroke-linecap="round"
//                     stroke-linejoin="round"
//                     stroke-width="2"
//                     d="M1 1h15M1 7h15M1 13h15"
//                   />
//                 </svg>
//               </button>
//             </div>
//           ) : (
//             <Link
//               to="/login"
//               className="px-4 py-2 bg-orange-500 rounded hover:bg-orange-600"
//             >
//               Login
//             </Link>
//           )}

//           <div
//             className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
//             id="navbar-user"
//           >
//             <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
//               <NavLink
//                 to="/"
//                 className={({ isActive }) =>
//                   isActive
//                     ? 'block py-2 px-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 md:dark:text-blue-500'
//                     : 'block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700'
//                 }
//                 end
//               >
//                 Home
//               </NavLink>
//               <NavLink
//                 to="/contac"
//                 className={({ isActive }) =>
//                   isActive
//                     ? 'block py-2 px-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 md:dark:text-blue-500'
//                     : 'block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700'
//                 }
//               >
//                 Contact Us
//               </NavLink>
//               <NavLink
//                 to="/dashboard/dashboard"
//                 className={({ isActive }) =>
//                   isActive
//                     ? 'block py-2 px-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 md:dark:text-blue-500'
//                     : 'block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700'
//                 }
//               >
//                 Dashboard
//               </NavLink>
//             </ul>
//           </div>
//         </div>
//       </nav>

//       {/* <nav class="bg-white border-gray-200 dark:bg-gray-900">
//         <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
//           <a
//             href="https://flowbite.com/"
//             class="flex items-center space-x-3 rtl:space-x-reverse"
//           >
//             <img
//               src="https://flowbite.com/docs/images/logo.svg"
//               class="h-8"
//               alt="Flowbite Logo"
//             />
//             <span class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
//               Flowbite
//             </span>
//           </a>
//           <div class="flex items-center md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
//             <button
//               type="button"
//               class="flex text-sm bg-gray-800 rounded-full md:me-0 focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600"
//               id="user-menu-button"
//               aria-expanded="false"
//               data-dropdown-toggle="user-dropdown"
//               data-dropdown-placement="bottom"
//             >
//               <span class="sr-only">Open user menu</span>
//               <img
//                 class="w-8 h-8 rounded-full"
//                 src="/docs/images/people/profile-picture-3.jpg"
//                 alt="user photo"
//               />
//             </button>

//             <div
//               class="z-50 hidden my-4 text-base list-none bg-white divide-y divide-gray-100 rounded-lg shadow dark:bg-gray-700 dark:divide-gray-600"
//               id="user-dropdown"
//             >
//               <div class="px-4 py-3">
//                 <span class="block text-sm text-gray-900 dark:text-white">
//                   Bonnie Green
//                 </span>
//                 <span class="block text-sm  text-gray-500 truncate dark:text-gray-400">
//                   name@flowbite.com
//                 </span>
//               </div>
//               <ul class="py-2" aria-labelledby="user-menu-button">
//                 <li>
//                   <a
//                     href="#"
//                     class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
//                   >
//                     Dashboard
//                   </a>
//                 </li>
//                 <li>
//                   <a
//                     href="#"
//                     class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
//                   >
//                     Settings
//                   </a>
//                 </li>
//                 <li>
//                   <a
//                     href="#"
//                     class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
//                   >
//                     Earnings
//                   </a>
//                 </li>
//                 <li>
//                   <a
//                     href="#"
//                     class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
//                   >
//                     Sign out
//                   </a>
//                 </li>
//               </ul>
//             </div>
//             <button
//               data-collapse-toggle="navbar-user"
//               type="button"
//               class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
//               aria-controls="navbar-user"
//               aria-expanded="false"
//             >
//               <span class="sr-only">Open main menu</span>
//               <svg
//                 class="w-5 h-5"
//                 aria-hidden="true"
//                 xmlns="http://www.w3.org/2000/svg"
//                 fill="none"
//                 viewBox="0 0 17 14"
//               >
//                 <path
//                   stroke="currentColor"
//                   stroke-linecap="round"
//                   stroke-linejoin="round"
//                   stroke-width="2"
//                   d="M1 1h15M1 7h15M1 13h15"
//                 />
//               </svg>
//             </button>
//           </div>
//           <div
//             class="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
//             id="navbar-user"
//           >
//             <ul class="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
//               <li>
//                 <a
//                   href="#"
//                   class="block py-2 px-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 md:dark:text-blue-500"
//                   aria-current="page"
//                 >
//                   Home
//                 </a>
//               </li>
//               <li>
//                 <a
//                   href="#"
//                   class="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
//                 >
//                   About
//                 </a>
//               </li>
//               <li>
//                 <a
//                   href="#"
//                   class="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
//                 >
//                   Services
//                 </a>
//               </li>
//               <li>
//                 <a
//                   href="#"
//                   class="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
//                 >
//                   Pricing
//                 </a>
//               </li>
//               <li>
//                 <a
//                   href="#"
//                   class="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
//                 >
//                   Contact
//                 </a>
//               </li>
//             </ul>
//           </div>
//         </div>
//       </nav> */}
//     </div>
//   );
// };

// export default Navbar;
