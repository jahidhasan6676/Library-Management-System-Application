import React from 'react';
import 'animate.css';

const About = () => {
  return (
    <section className="bg-gray-100 py-20 animate__animated animate__fadeIn">

      <div className="w-11/12 mx-auto">
        <h2 className="text-3xl font-bold text-center text-gray-800 animate__animated animate__bounceIn">About Us</h2>
        <p className="mt-4  text-center text-gray-600 text-lg animate__animated animate__fadeInUp">
          Welcome to our Library Management System, where knowledge meets convenience. We are dedicated to
          providing an extensive collection of books and resources that cater to the diverse needs of our community.
          Whether you are a student, a researcher, or a casual reader, we strive to create an environment where
          learning and growth are at the forefront.
        </p>

        <div className="mt-10 flex gap-8 flex-col md:flex-row items-center  justify-between">
          <div className="animate__animated animate__zoomIn ">

            <h3 className="text-2xl font-semibold text-gray-700 mt-4 text-center">Our Vision</h3>
            <p className="mt-2 text-gray-600">
              To be the leading library in providing innovative and accessible knowledge resources that foster
              learning, growth, and community engagement.
            </p>
          </div>

          <div className=" mt-6 md:mt-0 animate__animated animate__zoomIn animate__delay-1s">

            <h3 className="text-2xl font-semibold text-gray-700 mt-4 text-center">Our Mission</h3>
            <p className="mt-2 text-gray-600">
              Our mission is to empower our community by offering access to a comprehensive range of information
              and educational materials, promoting lifelong learning, and supporting intellectual development.
            </p>
          </div>

          <div className=" mt-6 md:mt-0 animate__animated animate__zoomIn animate__delay-2s">

            <h3 className="text-2xl font-semibold text-gray-700 mt-4 text-center">Our Values</h3>
            <p className="mt-2 text-gray-600">
              We are committed to fostering a culture of curiosity, innovation, and respect. Our core values include
              inclusivity, accessibility, and the continuous pursuit of knowledge and growth for all our users.
            </p>
          </div>
        </div>

        <div className="mt-20 text-center max-w-5xl mx-auto animate__animated animate__fadeInUp">
          <h3 className="text-2xl font-semibold text-gray-700">Why Choose Us?</h3>
          <p className="mt-4 text-gray-600">
            We offer a unique combination of traditional and digital resources, state-of-the-art facilities, and a
            user-friendly platform designed to meet the evolving needs of our users. Our dedicated team is here to
            assist you in your quest for knowledge, providing expert support and personalized recommendations.
          </p>
        </div>

        <div className="mt-10 flex flex-col md:flex-row items-center justify-between">
          <div className="animate__animated animate__slideInLeft ">
            <h3 className="text-2xl font-semibold text-gray-700 text-center">Our History</h3>
            <p className="mt-4 text-gray-600">
              Established in [Year], our library has grown from a small community space to a comprehensive
              resource center. Over the years, we have continually adapted to the changing needs of our users,
              integrating new technologies and expanding our collections to serve a diverse audience.
            </p>
          </div>

          <div className="  mt-6 md:mt-0 animate__animated animate__slideInRight animate__delay-1s">
            <h3 className="text-2xl font-semibold text-gray-700 text-center">Our Team</h3>
            <p className="mt-4 text-gray-600">
              Our team is composed of dedicated professionals passionate about literature, education, and
              technology. We are here to provide guidance, support, and inspiration to all our users, ensuring a
              fulfilling and enriching library experience.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

