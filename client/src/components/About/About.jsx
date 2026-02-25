import React from "react";
import Navbar from "../Navbar/Navbar";

import { FaLocationDot } from "react-icons/fa6";

const About = () => {
  const testimonials = [
    {
  name: "Rohit Sharma",
  feedback:
    "Eventify made booking tickets extremely easy. The platform is smooth, secure, and the event details were very clear.",
},
{
  name: "Priya Verma",
  feedback:
    "Great experience! I booked concert tickets in minutes and received instant confirmation. Highly reliable platform.",
},
{
  name: "Aman Gupta",
  feedback:
    "Found amazing workshops and tech events through Eventify. The verified listings saved me a lot of time.",
},
{
  name: "Sneha Patel",
  feedback:
    "Very professional platform. Booking was hassle-free and customer support was quick to respond.",
},

  ];
  return (
    <>
      <Navbar />

      <div className="container mx-auto px-4 py-8 mt-18">
        <div className=" py-12 px-6 md:px-16">
          <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-10">
            <div className="md:w-1/2">
              <h2 className="text-4xl font-bold text-gray-700 mb-6 ">
                Welcome to Eventify
              </h2>
              <p className="text-lg text-gray-500 mb-5 leading-relaxed">
                At{" "}
                <span className="font-semibold text-orange-500">
                 Eventify
                </span>
               , we believe booking tickets for your favorite events should be simple and stress-free. Whether you’re looking to attend concerts, workshops, conferences, sports events, or cultural shows — Eventify is your one-stop destination.
              </p>
              <p className="text-lg text-gray-500 leading-relaxed">
               
                
                We connect event organizers and attendees through a reliable platform featuring verified events, secure ticket booking, and a smooth user experience. 
              </p>
            </div>

            <div className="md:w-1/2 w-full flex justify-center">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTqHjPX-GKYEX9yXi4ySoXIjTKiX2xBMrfwbQ&s"
                alt="Real Estate Property"
                className="w-3/4 md:w-2/3 rounded-xl shadow-md object-cover"
              />
            </div>
          </div>
        </div>

        <div className="container py-20 px-6 md:px-16">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-700 mb-8 text-center">
              Locations We Operate In
            </h2>

            <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-3 text-center">
              <div className="p-6 rounded-xl shadow-md hover:shadow-lg transition">
                <h3 className="text-xl font-semibold text-orange-500 mb-4 flex items-center justify-center space-x-2">
                  <FaLocationDot />
                  <span>Mumbai</span>
                </h3>

                <p className="text-md text-gray-500">
                  Discover concerts, corporate events, workshops, and cultural programs across prime venues in Mumbai. Browse verified events and book tickets with confidence.
                </p>
              </div>

              <div className="p-6 rounded-xl shadow-md hover:shadow-lg transition">
                <h3 className="text-xl font-semibold text-orange-500 mb-4 flex items-center justify-center space-x-2">
                  <FaLocationDot />
                  <span>Pune</span>
                </h3>

                <p className="text-md text-gray-500">
                  Find tech events, seminars, music shows, and community gatherings in Pune. Enjoy seamless ticket booking and trusted event listings.
                </p>
              </div>

              <div className="p-6 rounded-xl shadow-md hover:shadow-lg transition">
                <h3 className="text-xl font-semibold text-orange-500 mb-4 flex items-center justify-center space-x-2">
                  <FaLocationDot />
                  <span>Nashik</span>
                </h3>

                <p className="text-md text-gray-500">
                  Explore concerts, festivals, workshops, and local events happening in Nashik. Book tickets easily through verified and reliable event organizers.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="py-12 px-6 md:px-16 md:h-screen flex items-center">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-gray-700 mb-8 text-center">
              What Sets Us Apart
            </h2>
            <p className="text-lg text-gray-500 mb-10">
             We’re more than just an event booking platform — we’re your event experience partner.
            </p>

            <div className="space-y-8">
              <div>
                <p className="text-xl font-semibold text-gray-700 mb-2">
                  Verified Events & Organizers
                </p>
                <p className="text-gray-500 text-lg">
                  Every event listed on Eventify is carefully reviewed to ensure authenticity, accuracy, and a great experience for attendees.
                </p>
              </div>

              <div>
                <p className="text-xl font-semibold text-gray-700 mb-2">
                  End-to-End Event Support
                </p>
                <p className="text-gray-500 text-lg">
                 From discovering events to booking tickets and entry access, our team and platform support you at every step.
                </p>
              </div>

              <div>
                <p className="text-xl font-semibold text-gray-700 mb-2">
                  Events for Every Interest & Budget
                </p>
                <p className="text-gray-500 text-lg">
                  Whether you’re attending a free community meetup or a premium concert, Eventify offers events to match every preference and budget.
                </p>
              </div>

              <div>
                <p className="text-xl font-semibold text-gray-700 mb-2">
                  Secure & Seamless Booking
                </p>
                <p className="text-gray-500 text-lg">
                  Your trust matters to us. We provide safe payments, instant confirmations, and a smooth, transparent ticket booking experience for both attendees and organizers.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="container mx-auto px-4 py-8">
          <div className="w-full bg-white py-16">
            <div className="max-w-7xl mx-auto px-6">
              <h2 className="text-3xl font-bold text-gray-700 mb-8 text-center">
                What Our Clients Say
              </h2>
              <div className="flex space-x-6 overflow-x-auto scrollbar-hide">
                {testimonials.map((item, index) => (
                  <div
                    key={index}
                    className="min-w-[300px] max-w-sm bg-gray-100 rounded-2xl shadow-md p-6 flex-shrink-0"
                  >
                    <h4 className="text-xl font-semibold text-orange-500">
                      {item.name}
                    </h4>
                    <p className="text-lg text-gray-500 mb-4">
                      “{item.feedback}”
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
