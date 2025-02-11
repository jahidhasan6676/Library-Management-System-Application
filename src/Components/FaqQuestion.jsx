import React from "react";

const FaqQuestion = () => {
  return (
    <section className="bg-gray-100 py-10">
      <div className="w-11/12 max-w-4xl mx-auto">
        <h3 className="text-lg text-center mt-2">
          Find answers to commonly asked questions about our library system.
        </h3>

        {/* General Questions */}
        <div className="mt-10">
          <h3 className="text-2xl font-semibold text-gray-700">
            General Questions
          </h3>
          <div className="mt-4 space-y-4">
            <details className="bg-white p-4 rounded-lg shadow">
              <summary className="text-lg font-medium cursor-pointer">
                What is the Library Management System, and how does it work?
              </summary>
              <p className="mt-2 text-gray-600">
                Our Library Management System allows users to search, borrow,
                and return books seamlessly. You can also access e-books and
                other digital resources online.
              </p>
            </details>

            <details className="bg-white p-4 rounded-lg shadow">
              <summary className="text-lg font-medium cursor-pointer">
                Do I need to create an account to access the library?
              </summary>
              <p className="mt-2 text-gray-600">
                Yes, you need to create an account to borrow books, save
                favorites, and track your borrowing history.
              </p>
            </details>

            <details className="bg-white p-4 rounded-lg shadow">
              <summary className="text-lg font-medium cursor-pointer">
                How can I register for a library account?
              </summary>
              <p className="mt-2 text-gray-600">
                You can sign up on our website by providing your name, email,
                and creating a password. Once registered, you will receive a
                confirmation email.
              </p>
            </details>

            <details className="bg-white p-4 rounded-lg shadow">
              <summary className="text-lg font-medium cursor-pointer">
                Is there a membership fee to use the library services?
              </summary>
              <p className="mt-2 text-gray-600">
                No, our library services are free to use. However, certain
                premium resources may require a subscription.
              </p>
            </details>
          </div>
        </div>

        {/* Borrowing & Returning Books */}
        <div className="mt-10">
          <h3 className="text-2xl font-semibold text-gray-700">
            Borrowing & Returning Books
          </h3>
          <div className="mt-4 space-y-4">
            <details className="bg-white p-4 rounded-lg shadow">
              <summary className="text-lg font-medium cursor-pointer">
                How can I borrow a book from the library?
              </summary>
              <p className="mt-2 text-gray-600">
                Log in to your account, search for a book, and click on the
                "Borrow" button. You can collect the book from the library or
                access digital copies online.
              </p>
            </details>

            <details className="bg-white p-4 rounded-lg shadow">
              <summary className="text-lg font-medium cursor-pointer">
                What is the maximum number of books I can borrow at a time?
              </summary>
              <p className="mt-2 text-gray-600">
                You can borrow up to 5 books at a time. For special categories
                or students, this limit may vary.
              </p>
            </details>

            <details className="bg-white p-4 rounded-lg shadow">
              <summary className="text-lg font-medium cursor-pointer">
                How long can I keep a borrowed book?
              </summary>
              <p className="mt-2 text-gray-600">
                The standard borrowing period is 14 days. You can renew the book
                online if no one else has reserved it.
              </p>
            </details>

            <details className="bg-white p-4 rounded-lg shadow">
              <summary className="text-lg font-medium cursor-pointer">
                Can I renew a book before the due date?
              </summary>
              <p className="mt-2 text-gray-600">
                Yes, you can renew a book before the due date from your library
                account, provided that it has not been reserved by another user.
              </p>
            </details>

            <details className="bg-white p-4 rounded-lg shadow">
              <summary className="text-lg font-medium cursor-pointer">
                What happens if I return a book late? Is there a fine?
              </summary>
              <p className="mt-2 text-gray-600">
                Yes, a late return fee of $1 per day is applicable for each
                overdue book. Please return books on time to avoid fines.
              </p>
            </details>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FaqQuestion;
