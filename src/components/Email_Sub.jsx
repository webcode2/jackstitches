import React from "react";

function EmailSub() {
  return (
    <section className="text-gray-600 body-font mt-10">
      <div className="container mx-auto">
        <div className="flex flex-col text-center w-full ">
          <h1 className="sm:text-3xl text-2xl font-medium title-font  text-white ">
            Subscribe with Us{" "}
          </h1>
        </div>

        <div className="flex lg:w-3/3 w-full sm:flex-row flex-col mx-auto px-5 sm:space-x-4 sm:space-y-0  sm:px-0 items-end">
          <div className="relative flex-grow w-full">
            <label for="email" className="leading-7 text-sm text-white">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-transparent focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            />
          </div>
          <button className="w-full lg:w-fit text-gray-600 bg-white shadow-sm border-0 mt-4 py-2 px-8 focus:outline-none hover:bg-opacity- rounded text-lg">
            Subscribe
          </button>
        </div>
      </div>
    </section>
  );
}

export default EmailSub;
