

import FaqQuestion from "../../Components/FaqQuestion";

const HelpCenter = () => {
  
  
 
  return (
    <div className="w-11/12 mx-auto py-20">
      
      <FaqQuestion/>

      <section className="bg-gray-100 py-10 p-4">
        <h2 className="text-3xl font-semibold text-gray-800 text-center">Contact Support</h2>
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
            className="w-full bg-blue-800 text-white p-3 rounded-md hover:bg-blue-900"
          >
            Submit
          </button>
        </form>
      </section>
    </div>
  );
};

export default HelpCenter;
