import React, { useEffect, useState } from "react";
import axios from "axios";
import { MdMovieEdit } from "react-icons/md";
import { MdDelete } from "react-icons/md";

const DashBoard = () => {
  //add event
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    data: "",
    availableTickets: "",
    price: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:8080/api/events",
        formData,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      console.log(response.data);

      alert("Event added successfully");
      fetchEvents();
    } catch (error) {
      console.error("Error adding event :", error);
      alert("Failed to add event");
    }
  };

  //get events

  const [events, setEvents] = useState([]);

  const fetchEvents = () => {
    axios
      .get("http://localhost:8080/api/events")
      .then((res) => setEvents(res.data))
      .catch((err) => console.error(err));
  };

  useEffect(() => {
    fetchEvents();
  }, []);

  //edit event

  const [showEditModal, setShowEditModal] = useState(false);

  const [editFormData, setEditFormData] = useState({
    id: "",
    name: "",
    description: "",
    date: "",
    availableTickets: "",
    price: "",
  });

  const openEditModal = (event) => {
    setEditFormData(event);
    setShowEditModal(true);
  };

  const handleEditChange = (e) => {
    setEditFormData({ ...editFormData, [e.target.name]: e.target.value });
  };

  const handleEditSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.put(
        `http://localhost:8080/api/events/${editFormData.id}`,
        editFormData
      );
      fetchEvents();
      setShowEditModal(false);
    } catch (error) {
      console.error("Error updating event", error);
    }
  };

  //delete event
  const handleDeleteEvent = async (id) => {
  const confirmDelete = window.confirm(
    "Are you sure you want to delete this event?"
  );

  if (!confirmDelete) return;

  try {
    await axios.delete(`http://localhost:8080/api/events/${id}`);
    alert("Event deleted successfully");
    fetchEvents(); // refresh list
  } catch (error) {
    console.error("Error deleting event", error);
    alert("Failed to delete event");
  }
};

  return (
    <>
     <div className="container mx-auto px-4 py-8">
      <div className="max-w-md mx-auto mt-10 bg-white shadow-lg rounded-xl p-6">
        <h3 className="text-2xl font-semibold text-center text-gray-800 mb-6">
          Add Event
        </h3>

        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            name="name"
            placeholder="Event Name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />

          <input
            type="text"
            name="description"
            placeholder="Description"
            value={formData.description}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />

          <input
            type="date"
            name="date"
            value={formData.date}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />

          <input
            type="number"
            name="availableTickets"
            placeholder="Available Tickets"
            value={formData.availableTickets}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />

          <input
            type="number"
            name="price"
            placeholder="Price (₹)"
            value={formData.price}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />

          <button
            type="submit"
            className="w-full bg-gradient-to-r from-orange-500 to-red-500
             text-white py-2 rounded-lg font-semibold
             hover:from-orange-600 hover:to-red-600
             transition-all duration-200
             shadow-md hover:shadow-lg active:scale-95"
          >
            Add Event
          </button>
        </form>
      </div>
      </div>


      <div className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {events.map((event) => (
          <div
            key={event.id}
            className="bg-white rounded-2xl shadow-md hover:shadow-xl transition p-5"
          >
            
            
              <div className="mt-2 flex justify-end gap-4 text-2xl text-gray-600 cursor-pointer">
                 <MdMovieEdit onClick={() => openEditModal(event)} className="cursor-pointer" />
                <MdDelete
  onClick={() => handleDeleteEvent(event.id)}
  className="cursor-pointer "
/>
              
            </div>
            <h2 className="text-xl font-bold text-gray-800 mb-2">
              {event.name}
            </h2>

            <p className="text-gray-600 mb-2">{event.description} 
              </p>


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

          
          </div>
        ))}
      </div>



     {showEditModal && (
  <div className="fixed inset-0 bg-black/50 flex justify-center items-center z-50">
    <div className="bg-white p-6 rounded-xl w-full max-w-lg relative">

      {/* CLOSE BUTTON */}
      <button
        onClick={() => setShowEditModal(false)}
        className="absolute top-3 right-3 text-gray-500 hover:text-gray-800 text-xl font-bold"
      >
        ✕
      </button>

      <h2 className="text-xl font-bold mb-4">Edit Event</h2>

      <form onSubmit={handleEditSubmit} className="space-y-4">
        <input
          name="name"
          value={editFormData.name}
          onChange={handleEditChange}
          className="w-full border px-4 py-2 rounded"
        />

        <input
          name="description"
          value={editFormData.description}
          onChange={handleEditChange}
          className="w-full border px-4 py-2 rounded"
        />

        <input
          type="date"
          name="date"
          value={editFormData.date}
          onChange={handleEditChange}
          className="w-full border px-4 py-2 rounded"
        />

        <input
          type="number"
          name="availableTickets"
          value={editFormData.availableTickets}
          onChange={handleEditChange}
          className="w-full border px-4 py-2 rounded"
        />

        <input
          type="number"
          name="price"
          value={editFormData.price}
          onChange={handleEditChange}
          className="w-full border px-4 py-2 rounded"
        />

        <button className="w-full bg-gradient-to-r from-orange-500 to-red-500 text-white py-2 rounded-lg">
          Update Event
        </button>
      </form>
    </div>
  </div>
)}


      </div>
   

     
    </>
  );
};

export default DashBoard;
