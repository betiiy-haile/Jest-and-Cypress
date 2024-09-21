// pages/contact.js
import React from "react";

const Contact = () => {
  return (
    <div className="min-h-[90vh] bg-[#0f172a] flex items-center justify-center px-4 py-8">
      <div className="w-[50%] bg-[#1e293b] shadow-lg rounded-lg p-8">
        <h1 className="text-4xl font-bold mb-6 text-center text-white">Contact Us</h1>
        <form className="space-y-4">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-300">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              className="mt-1 p-2 block w-full border border-gray-600 rounded-md shadow-sm bg-[#334155] text-gray-300 focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              placeholder="John Doe"
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-300">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="mt-1 p-2 block w-full border border-gray-600 rounded-md shadow-sm bg-[#334155] text-gray-300 focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              placeholder="example@example.com"
            />
          </div>
          <div>
            <label htmlFor="message" className="block text-sm font-medium text-gray-300">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              className="mt-1 p-2 block w-full border border-gray-600 rounded-md shadow-sm bg-[#334155] text-gray-300 focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              placeholder="Your message..."
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
