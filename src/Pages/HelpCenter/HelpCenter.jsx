import React, { useState } from "react";
import { Link } from "react-router-dom";

const HelpCenter = () => {
  const [searchTerm, setSearchTerm] = useState("");

  // Sample FAQ categories and items
  const categories = [
    {
      title: "General Information",
      items: [
        "Library Hours",
        "Membership Info",
        "Contact Us",
      ],
    },
    {
      title: "Borrowing Books",
      items: [
        "How to Borrow",
        "Book Renewal",
        "Overdue Fees",
      ],
    },
    {
      title: "Account Support",
      items: [
        "How to Reset Password",
        "Update Profile",
        "Deactivate Account",
      ],
    },
    {
      title: "Technical Support",
      items: [
        "App Issues",
        "Browser Compatibility",
        "Report a Bug",
      ],
    },
  ];

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value.toLowerCase());
  };

  return (
    <div className="w-11/12 mx-auto py-20">
      <header className="mb-8 text-center">
        <h1 className="text-4xl font-bold text-gray-900">Help Center</h1>
        <input
          type="text"
          placeholder="Search for help..."
          className="mt-4 p-3 w-1/2 border border-gray-300 rounded-md shadow-sm"
          onChange={handleSearchChange}
        />
      </header>

      <section className="mb-8">
        <h2 className="text-3xl font-semibold text-gray-800">Popular Topics</h2>
        <div className="mt-4 space-y-4">
          {categories.map((category, index) => (
            <div key={index} className="border-b pb-4">
              <h3 className="text-2xl font-semibold text-gray-700">{category.title}</h3>
              <ul className="mt-2 space-y-2">
                {category.items
                  .filter(item => item.toLowerCase().includes(searchTerm))
                  .map((item, idx) => (
                    <li key={idx} className="text-lg text-gray-600">
                      <Link to="" className="hover:text-blue-600">{item}</Link>
                    </li>
                  ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      <section>
        <h2 className="text-3xl font-semibold text-gray-800">Contact Support</h2>
        <form className="mt-6 space-y-4 max-w-md mx-auto">
          <input
            type="text"
            placeholder="Your Name"
            className="w-full p-3 border border-gray-300 rounded-md"
          />
          <input
            type="email"
            placeholder="Your Email"
            className="w-full p-3 border border-gray-300 rounded-md"
          />
          <textarea
            placeholder="Your Message"
            className="w-full p-3 border border-gray-300 rounded-md"
            rows="4"
          />
          <button
            type="submit"
            className="w-full bg-blue-600 text-white p-3 rounded-md hover:bg-blue-700"
          >
            Submit
          </button>
        </form>
      </section>
    </div>
  );
};

export default HelpCenter;
