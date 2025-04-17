import React from "react";
import carrer_image from "../assets/carrer_image.webp";
import image27 from "../assets/image27.webp";
import blog1 from "../assets/blog1.jpeg";
import blog2 from "../assets/blog2.png";
import blog3 from "../assets/blog3.png";

const AboutUs = () => {
  return (
    <div className="bg-white text-gray-800 font-sans">
      {/* Header */}
      <header className="bg-green-500 text-white text-center py-10 px-4">
        <h1 className="text-4xl font-bold mb-2">About Us</h1>
        <p className="text-lg">
          Know more about our journey, values, and vision at FoodZone.
        </p>
      </header>

      {/* Main Content Wrapper */}
      <div className="max-w-4xl w-full mx-auto px-4 py-8 flex flex-col gap-10">
        {/* Vision */}
        <div className="flex flex-col md:flex-row bg-white rounded-lg shadow-lg overflow-hidden">
          <div className="p-8 w-full md:w-2/3 min-h-[200px]">
            <h2 className="text-4xl font-bold text-green-600 mb-6">
              Our Vision
            </h2>
            <p>
              To change the way India eats by connecting people to the best food
              around them with technology and innovation.
            </p>
          </div>
        </div>

        {/* Mission */}
        <div className="flex flex-col md:flex-row bg-white rounded-lg shadow-lg overflow-hidden">
          <div className="p-8 w-full md:w-2/3 min-h-[200px]">
            <h2 className="text-4xl font-bold text-green-600 mb-6">
              Our Mission
            </h2>
            <p>
              To provide the most seamless and delightful food delivery
              experience by building intelligent logistics and customer-first
              products.
            </p>
          </div>
        </div>

        {/* CEO Info */}
        <div className="flex flex-col md:flex-row bg-white rounded-lg shadow-lg overflow-hidden items-center">
          <img
            src={image27}
            alt="CEO"
            className="w-32 h-32 md:w-40 md:h-40 rounded-full object-cover mx-auto md:mx-6"
          />
          <div className="p-8 w-full md:w-2/3 min-h-[250px]">
            <h2 className="text-4xl font-bold text-green-600 mb-6">
              CEO Information
            </h2>
            <p>
              <strong>Name:</strong> Sriharsha Majety
            </p>
            <p>
              <strong>Background:</strong> Co-founder of FoodZone, IIM-Calcutta
              alum, and a passionate entrepreneur focused on building scalable
              businesses.
            </p>
          </div>
        </div>

        {/* IPO Info */}
        <div className="flex flex-col md:flex-row bg-white rounded-lg shadow-lg overflow-hidden">
          <div className="p-8 w-full min-h-[200px]">
            <h2 className="text-4xl font-bold text-green-600 mb-6">
              IPO Information
            </h2>
            <p>
              FoodZone is preparing for its IPO, expected to launch soon. The
              IPO aims to raise capital to expand our logistics network and
              invest further in quick-commerce, dine-in, and cloud kitchen
              services.
            </p>
          </div>
        </div>

        {/* Blog Section */}
        <div className="py-10">
          <h2 className="text-4xl font-bold text-green-600 mb-8 text-center">
            📝 FoodZone Blog
          </h2>
          <div className="flex flex-row justify-center gap-10 flex-wrap md:flex-nowrap">
            {[
              {
                date: "October 12, 2024",
                title:
                  "Bridging cultures through cuisine: The Nasi and Mee Story",
                image: blog1,
              },
              {
                date: "October 11, 2024",
                title:
                  "Hiring from 1x to 10x via FoodZone’s Future Proofing Strategy",
                image: blog2,
              },
              {
                date: "October 5, 2024",
                title: "Taking Local Campaigns to the National Stage",
                image: blog3,
              },
            ].map((post, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-lg w-72 overflow-hidden transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl"
              >
                <img
                  src={post.image}
                  alt="blog thumbnail"
                  className="w-full h-40 object-cover"
                />
                <div className="p-4 text-center">
                  <p className="font-semibold mb-1">{post.date}</p>
                  <p className="mb-3 text-sm text-gray-700">{post.title}</p>
                  <button className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 transition">
                    Read More
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Careers */}
        <div className="flex flex-col md:flex-row bg-green-50 rounded-lg shadow-lg overflow-hidden">
          <div className="p-8 w-full md:w-2/3 flex flex-col justify-center text-center md:text-left min-h-[250px]">
            <h2 className="text-4xl font-bold text-green-600 mb-4 flex items-center">
              <span className="mr-2">🚀</span> Careers at FoodZone
            </h2>
            <p className="mb-3">
              Join a culture of innovation, teamwork, and endless possibilities.
              We empower our employees to make a real impact.
            </p>
            <p className="mb-4">
              Be a part of FoodZone and change the way people live.
            </p>
            <a className="bg-green-500 text-white px-6 py-3 rounded hover:bg-green-600 transition duration-300 w-[200px] text-center">
              Know More
            </a>
          </div>
          <img
            src={carrer_image}
            alt="Career Opportunities"
            className="w-full md:w-1/2 h-64 rounded-2xl p-2.5 object-cover"
          />
        </div>

        {/* Map Section */}
        <div className="flex flex-col md:flex-row bg-white rounded-lg shadow-lg overflow-hidden">
          <div className="p-8 w-full min-h-[250px]">
            <h2 className="text-4xl font-bold text-green-600 mb-6">
              Our Presence
            </h2>
            <p>
              We operate in 500+ cities across India. Find your local FoodZone
              hub:
            </p>
            <div className="mt-4 w-full h-72">
              <iframe
                title="FoodZone Map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d241317.11609986334!2d72.74110110140303!3d19.082197839228988!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7cf2d1f13fc01%3A0x9f9e4f05d6d69497!2sSwiggy%20Head%20Office!5e0!3m2!1sen!2sin!4v1617700209365!5m2!1sen!2sin"
                className="w-full h-full rounded-md"
                allowFullScreen=""
                loading="lazy"
              ></iframe>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-100 text-center py-6 mt-10 text-sm text-gray-500">
        © 2025 FoodZone. This is a demo About Us page.
      </footer>
    </div>
  );
};

export default AboutUs;
