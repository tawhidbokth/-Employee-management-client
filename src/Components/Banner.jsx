import React from 'react';

const Banner = () => {
  return (
    <div>
      <section className="relative bg-[url(https://images.unsplash.com/photo-1604014237800-1c9102c219da?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80)] bg-cover bg-center bg-no-repeat h-[650px]">
        <div className="absolute inset-0 bg-gray-900/75 sm:bg-transparent sm:from-gray-900/95 sm:to-gray-900/25 ltr:sm:bg-gradient-to-r rtl:sm:bg-gradient-to-l"></div>

        <div className="relative mx-auto max-w-screen-xl px-4 py-32 sm:px-6 lg:flex lg:h-screen lg:items-center lg:px-8">
          <div className="max-w-xl text-center mx-auto">
            <h1 className="text-3xl font-extrabold text-white sm:text-5xl">
              Let us find your
              <strong className="block font-extrabold text-rose-500">
                {' '}
                Forever Home Services.
              </strong>
            </h1>

            <div className="bg-gray-900 p-3 opacity-80 mt-4 rounded-lg">
              <p className=" max-w-lg  text-white sm:text-xl/relaxed">
                Discover a modern home design website with inspiring decor ideas
                and interactive tools. Simplify your dream space planning with
                personalized recommendations and sleek navigation.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Banner;
