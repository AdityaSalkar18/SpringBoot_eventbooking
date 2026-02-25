import { useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import {
  FaEnvelope,
  FaLinkedinIn,
  FaPhone,
  FaMapMarkerAlt,
  FaInstagram,
} from "react-icons/fa";

function Contact() {
  //enq form

  const [formData, setFormData] = useState({
    name: "",
    number: "",
    email: "",
    issue: "Other",
    msg: "",
  });

  const [error, setError] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://43.205.119.224:8080/api/form/enq", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.error || "Something went wrong");
      }

      setSuccessMessage("Enquiry add successfully");
      setError("");
      setFormData({
        name: "",
        number: "",
        email: "",
        issue: "Other",
        msg: "",
      });
      setTimeout(() => setSuccessMessage(""), 2000);
    } catch (error) {
      console.error("Form submission error:", error);
      setError("Failed to add enquiry. Please try again later.");
      setSuccessMessage("");
      setTimeout(() => setError(""), 2000);
    }
  };

  return (
    <>
      <Navbar />
      <div className="container mx-auto px-4 py-8 mt-16 ">
        <div className="flex justify-center md:justify-end my-2">
          <div className="flex flex-col sm:flex-row items-center sm:space-x-6 space-y-2 sm:space-y-0 text-gray-500  text-base sm:text-lg">
            <div className="flex items-center space-x-2 text-lg">
              <FaEnvelope className="text-gray-500" />
              <Link
                to="mailto:adityarealestate.service@gmail.com"
                className="hover:underline break-words"
              >
                entifyservice@gmail.com
              </Link>
            </div>

            <div className="flex items-center space-x-2 text-lg">
              <FaPhone className="text-gray-500" />
              <Link
                to="tel:+919022892800"
                className="hover:underline break-words"
              >
                919022892800
              </Link>
            </div>
            <div className="flex items-center space-x-2 text-lg">
              <FaMapMarkerAlt className="text-gray-500" />
              <Link to="#" className="hover:underline break-words">
                Mumbai,Pune,Nashik
              </Link>
            </div>
          </div>
        </div>

        <h2 className="text-3xl font-bold text-gray-700 mb-8 text-center">
          Need Help !
        </h2>

        <div className="bg-white py-12 px-4  sm:px-6 lg:px-8 max-w-2xl mx-auto rounded-xl shadow-md">
          {error && (
            <div
              className="p-4 mb-4 text-sm text-red-800 rounded-lg bg-red-50 "
              role="alert"
            >
              <span className="font-medium"></span> {error}
            </div>
          )}
          {successMessage && (
            <div
              className="p-4 mb-4 text-sm text-green-800 rounded-lg bg-green-50 "
              role="alert"
            >
              <span className="font-medium"></span> {successMessage}
            </div>
          )}
          <form
            className="space-y-6 "
            onSubmit={handleSubmit}
            encType="multipart/form-data"
          >
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Full Name
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                placeholder="Enter your full name "
                className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-1 focus:ring-gray-500 text-gray-500 "
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Phone Number
              </label>
              <input
                type="text"
                name="number"
                value={formData.number}
                onChange={handleInputChange}
                placeholder="Enter your phone number"
                className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-1 focus:ring-gray-500 text-gray-500"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Email
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                placeholder="Enter your email"
                className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-1 focus:ring-gray-500 text-gray-500"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Issue
              </label>
              <select
                name="issue"
                value={formData.issue}
                onChange={handleInputChange}
                className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-1 focus:ring-gray-500 text-gray-500"
              >
                 <option value="other">Other</option>
                <option value="booking issue">Booking Issue</option>
                <option value="payment issue">Payment Issue</option>
                <option value="ticket issue">Ticket Issue</option>
                <option value="event issue">Event Details Issue</option>
                <option value="account issue">Account / Login Issue</option>

                
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Message
              </label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                placeholder="Enter your message"
                rows={3}
                className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-1 focus:ring-gray-500 text-gray-500 resize-none"
              ></textarea>
            </div>

            <div className="text-center">
              <button
                type="submit"
                  className="px-5 mt-3 bg-gradient-to-r from-orange-500 to-red-500
             text-white py-2 rounded-xl font-semibold
             hover:from-orange-600 hover:to-red-600
             active:scale-95 transition-all duration-200
             shadow-md hover:shadow-lg"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row items-center justify-center gap-2 my-10">
          <div className="w-full md:max-w-md">
            <iframe
              title="Our Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d241317.11610083937!2d72.74109832132448!3d19.08219783923452!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7b63a92bd2e01%3A0xa2f7f7b0501df84d!2sMumbai%2C%20Maharashtra%2C%20India!5e0!3m2!1sen!2sin!4v1628771401212!5m2!1sen!2sin"
              width="100%"
              height="250"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="rounded-lg shadow"
            ></iframe>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <div className="mt-10 flex justify-center space-x-6 text-gray-600  text-2xl">
          <Link
            to="https://www.instagram.com/adityarealestate.service?igsh=bzVoMjZwaG5scTE="
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-300"
            aria-label="Instagram"
          >
            <FaInstagram className="text-2xl" />
          </Link>

          <Link to="#" className="hover:text-gray-300" aria-label="LinkedIn">
            <FaLinkedinIn className="text-2xl" />
          </Link>
        </div>
      </div>
    </>
  );
}

export default Contact;
