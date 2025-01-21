import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <div>
      <footer class=" shadow bg-gray-700 text-white">
        <div class="w-full  mx-auto p-4 md:py-8">
          <div class="sm:flex sm:items-center sm:justify-between">
            <a
              href="https://flowbite.com/"
              class="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse"
            >
              <img
                src="https://i.ibb.co.com/TTr45kQ/weblogo.png"
                class="h-8"
                alt="Flowbite Logo"
              />
              <span class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
                Home Decoration
              </span>
            </a>
            <ul class="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-100 sm:mb-0 dark:text-gray-400">
              <Link to={'/'}>
                <li>
                  <a class="hover:underline me-4 md:me-6">Home</a>
                </li>
              </Link>
              <Link to={'/policy'}>
                <li>
                  <a class="hover:underline me-4 md:me-6">Privacy Policy</a>
                </li>
              </Link>
              <Link to={'/contac'}>
                <li>
                  <a class="hover:underline">Contact</a>
                </li>
              </Link>
            </ul>
          </div>
          <hr class="my-6 border-gray-200 sm:mx-auto dark:border-gray-200 lg:my-8" />
          <span class="block text-sm text-gray-200 sm:text-center dark:text-gray-400">
            © 2023{' '}
            <a href="https://flowbite.com/" class="hover:underline">
              Yasin™
            </a>
            . All Rights Reserved.
          </span>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
