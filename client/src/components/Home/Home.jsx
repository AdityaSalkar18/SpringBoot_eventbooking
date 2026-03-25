import { useEffect, useState } from "react";
import axios from "axios";
import PaymentPage from "../PymentPage.jsx/PaymentPage";

import Navbar from "../Navbar/Navbar";

const Home = () => {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:8080/api/events")
      .then((res) => setEvents(res.data));
  }, []);

  const [open, setOpen] = useState(false);

  return (
    <>
      <Navbar />

      <div
        id="default-carousel"
        className="relative w-full "
        data-carousel="slide"
      >
        {/* Carousel wrapper */}
        <div className="relative h-56 overflow-hidden  md:h-96">
          <div className="hidden duration-700 ease-in-out" data-carousel-item>
            <img
              src="https://img.freepik.com/free-psd/music-banner-design-template_23-2149081198.jpg"
              className="absolute block w-full h-full object-cover"
              alt="Slide 1"
            />
          </div>

          <div className="hidden duration-700 ease-in-out" data-carousel-item>
            <img
              src="https://cdn.dribbble.com/userupload/23528862/file/original-06f7a37b17c351cde4df38d55536d4e0.jpg"
              className="absolute block w-full h-full object-cover"
              alt="Slide 2"
            />
          </div>

          <div className="hidden duration-700 ease-in-out" data-carousel-item>
            <img
              src="https://img.freepik.com/premium-vector/award-ceremony-nomination-name-podium-golden-prize-event-scene-star-ceremony-vector-illustration_3482-15638.jpg"
              className="absolute block w-full h-full object-cover"
              alt="Slide 3"
            />
          </div>

          <div className="hidden duration-700 ease-in-out" data-carousel-item>
            <img
              src="https://img.freepik.com/free-psd/car-show-template-design_23-2150991950.jpg"
              className="absolute block w-full h-full object-cover"
              alt="Slide 4"
            />
          </div>

          <div className="hidden duration-700 ease-in-out" data-carousel-item>
            <img
              src="https://static.meraevents.com/content/eventbanner/263270/mera-event1742268714jIdFW.png"
              className="absolute block w-full h-full object-cover"
              alt="Slide 5"
            />
          </div>
        </div>

        {/* Indicators */}
        <div className="absolute z-30 flex -translate-x-1/2 bottom-5 left-1/2 space-x-3">
          {[0, 1, 2, 3, 4].map((i) => (
            <button
              key={i}
              type="button"
              className="w-3 h-3 rounded-full bg-white"
              data-carousel-slide-to={i}
            />
          ))}
        </div>

        {/* Prev button */}
        <button
          type="button"
          className="absolute top-0 left-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group"
          data-carousel-prev
        >
          <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/50 group-hover:bg-white">
            ❮
          </span>
        </button>

        {/* Next button */}
        <button
          type="button"
          className="absolute top-0 right-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group"
          data-carousel-next
        >
          <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/50 group-hover:bg-white">
            ❯
          </span>
        </button>
      </div>

      <div className="container mx-auto px-4 py-8">
        <h1 className="text-center text-2xl font-semibold">
          {" "}
          Event Ticket Booking
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {events.map((event) => (
            <div
              key={event.id}
              className="bg-white rounded-2xl shadow-md hover:shadow-xl transition p-5"
            >
              <h2 className="text-xl font-bold text-gray-800 mb-2">
                {event.name}
              </h2>

              <p className="text-gray-600 mb-2">{event.description}</p>

              <p className="text-sm text-gray-500 mb-2">
                📅 Date:{" "}
                <span className="font-semibold text-gray-700">
                  {event.date}
                </span>
              </p>

              <p className="text-sm text-gray-500">
                🎟 Tickets Available:{" "}
                <span className="font-semibold text-gray-700">
                  {event.availableTickets}
                </span>
              </p>

              <p className="text-lg font-semibold text-orange-600 mt-2">
                ₹{event.price}
              </p>

              <button
                onClick={() => setOpen(true)}
                className="w-full mt-3 bg-gradient-to-r from-orange-500 to-red-500
             text-white py-2 rounded-xl font-semibold
             hover:from-orange-600 hover:to-red-600
             active:scale-95 transition-all duration-200
             shadow-md hover:shadow-lg"
              >
                Book Tickets
              </button>
            </div>
          ))}
        </div>
        {open && (
          <div className="fixed inset-0 z-50 flex items-center justify-center overflow-y-auto bg-black/40">
            {/* Modal Box */}
            <div className="relative z-50 p-4 w-full max-w-2xl">
              <div className="relative bg-white border border-gray-200 rounded-lg shadow-sm p-4 md:p-6">
                {/* Header */}
                <div className="flex items-center justify-between border-b border-gray-200 pb-2">
                  <h3 className="text-lg font-medium text-gray-900">
                    Booking Details
                  </h3>

                  <button
                    onClick={() => setOpen(false)}
                    className="text-gray-500 hover:bg-gray-100 hover:text-gray-900 rounded-lg text-sm w-9 h-9 inline-flex justify-center items-center"
                  >
                    ✕
                  </button>
                </div>

                {/* Body */}
                <div className="space-y-4 md:space-y-6 py-4 md:py-6">
                  <form>
                    <div class="grid gap-6 mb-6 md:grid-cols-2">
                      <div>
                        <label
                          for="name"
                          class="block mb-2.5 text-sm font-medium text-heading"
                        >
                          Name
                        </label>
                        <input
                          type="text"
                          id="name"
                          class="bg-neutral-secondary-medium border border-default-medium text-heading text-sm rounded-base focus:ring-brand focus:border-brand block w-full px-3 py-2.5 shadow-xs placeholder:text-body"
                          placeholder="John"
                          required
                        />
                      </div>
                      <div>
                        <label
                          for="email"
                          class="block mb-2.5 text-sm font-medium text-heading"
                        >
                          Email
                        </label>
                        <input
                          type="mail"
                          id="email"
                          class="bg-neutral-secondary-medium border border-default-medium text-heading text-sm rounded-base focus:ring-brand focus:border-brand block w-full px-3 py-2.5 shadow-xs placeholder:text-body"
                          placeholder="Doe"
                          required
                        />
                      </div>
                      <div>
                        <label
                          for="mobile"
                          class="block mb-2.5 text-sm font-medium text-heading"
                        >
                          Mobile
                        </label>
                        <input
                          type="text"
                          id="mobile"
                          class="bg-neutral-secondary-medium border border-default-medium text-heading text-sm rounded-base focus:ring-brand focus:border-brand block w-full px-3 py-2.5 shadow-xs placeholder:text-body"
                          placeholder="Flowbite"
                          required
                        />
                      </div>
                    </div>

                    <div class="grid gap-6 mb-6 md:grid-cols-2">
                      <div>
                        <label
                          for="name"
                          class="block mb-2.5 text-sm font-medium text-heading"
                        >
                          Event Name
                        </label>
                        <input
                          type="text"
                          id="eventname"
                          class="bg-neutral-secondary-medium border border-default-medium text-heading text-sm rounded-base focus:ring-brand focus:border-brand block w-full px-3 py-2.5 shadow-xs placeholder:text-body"
                          placeholder="John"
                          required
                        />
                      </div>
                      <div>
                        <label
                          for="datetime"
                          class="block mb-2.5 text-sm font-medium text-heading"
                        >
                          Event Data|Time
                        </label>
                        <input
                          type="text"
                          id="datetime"
                          class="bg-neutral-secondary-medium border border-default-medium text-heading text-sm rounded-base focus:ring-brand focus:border-brand block w-full px-3 py-2.5 shadow-xs placeholder:text-body"
                          placeholder="Doe"
                          required
                        />
                      </div>
                    </div>
                    <div>
                      <label
                        htmlFor="desc"
                        className="block mb-2.5 text-sm font-medium text-heading"
                      >
                        Event Description/Details
                      </label>

                      <textarea
                        id="desc"
                        name="description"
                        rows="2"
                        className="bg-neutral-secondary-medium border border-default-medium text-heading text-sm rounded-base focus:ring-brand focus:border-brand block w-full px-3 py-2.5 shadow-xs placeholder:text-body resize-none"
                        placeholder="Enter event details..."
                        required
                      ></textarea>
                    </div>

                    <div className="my-3">
                      <label
                        for="bedrooms-input"
                        class="block mb-2 text-sm font-medium text-gray-900 "
                      >
                        No of Tickets:
                      </label>
                      <div class="relative flex items-center max-w-[11rem]">
                        <button
                          type="button"
                          id="decrement-button"
                          data-input-counter-decrement="bedrooms-input"
                          class="bg-gray-100    hover:bg-gray-200 border border-gray-300 rounded-s-lg p-3 h-11 focus:ring-gray-100 dark:focus:ring-gray-700 focus:ring-2 focus:outline-none"
                        >
                          <svg
                            class="w-3 h-3 text-gray-900 "
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 18 2"
                          >
                            <path
                              stroke="currentColor"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              stroke-width="2"
                              d="M1 1h16"
                            />
                          </svg>
                        </button>
                        <input
                          type="text"
                          id="bedrooms-input"
                          data-input-counter
                          data-input-counter-min="1"
                          data-input-counter-max="5"
                          aria-describedby="helper-text-explanation"
                          class="bg-gray-50 border-x-0 border-gray-300 h-11 font-medium text-center text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block w-full pb-6   dark:placeholder-gray-400  dark:focus:ring-blue-500 dark:focus:border-blue-500"
                          placeholder=""
                          value="3"
                          required
                        />
                        <div class="absolute bottom-1 start-1/2 -translate-x-1/2 rtl:translate-x-1/2 flex items-center text-xs text-gray-400 space-x-1 rtl:space-x-reverse">
                        
                          <span>Ticktes</span>
                        </div>
                        <button
                          type="button"
                          id="increment-button"
                          data-input-counter-increment="bedrooms-input"
                          class="bg-gray-100    hover:bg-gray-200 border border-gray-300 rounded-e-lg p-3 h-11 focus:ring-gray-100 dark:focus:ring-gray-700 focus:ring-2 focus:outline-none"
                        >
                          <svg
                            class="w-3 h-3 text-gray-900 "
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 18 18"
                          >
                            <path
                              stroke="currentColor"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              stroke-width="2"
                              d="M9 1v16M1 9h16"
                            />
                          </svg>
                        </button>
                      </div>
                      <p
                        id="helper-text-explanation"
                        class="mt-2 text-sm text-gray-500 "
                      >
                        Please select the number of Tickets.
                      </p>
                    </div>

                    

                  
                  </form>
                </div>

                <div className="flex border-t border-gray-200 pt-2">
                  
                  <div className="ml-auto">
                    <PaymentPage />
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default Home;
