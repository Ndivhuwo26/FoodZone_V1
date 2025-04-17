import React, { useState } from 'react';

const ReservationForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    date: '',
    time: '',
    guests: 1,
    requests: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Reservation submitted:', formData);
    // Optionally send to backend or show a confirmation message
  };

  return (
    <div className="max-w-xl mx-auto p-6 bg-white rounded-xl shadow-md">
      <h2 className="text-2xl font-bold mb-4 text-center">Make a Reservation</h2>
      <form onSubmit={handleSubmit} className="space-y-4">

        <input
          type="text"
          name="name"
          placeholder="Your Name"
          className="w-full border border-gray-300 rounded-md p-2"
          value={formData.name}
          onChange={handleChange}
          required
        />

        <input
          type="email"
          name="email"
          placeholder="Your Email"
          className="w-full border border-gray-300 rounded-md p-2"
          value={formData.email}
          onChange={handleChange}
          required
        />

        <div className="flex gap-4">
          <input
            type="date"
            name="date"
            className="flex-1 border border-gray-300 rounded-md p-2"
            value={formData.date}
            onChange={handleChange}
            required
          />
          <input
            type="time"
            name="time"
            className="flex-1 border border-gray-300 rounded-md p-2"
            value={formData.time}
            onChange={handleChange}
            required
          />
        </div>

        <input
          type="number"
          name="guests"
          min="1"
          placeholder="Number of Guests"
          className="w-full border border-gray-300 rounded-md p-2"
          value={formData.guests}
          onChange={handleChange}
          required
        />

        <textarea
          name="requests"
          placeholder="Special Requests (optional)"
          className="w-full border border-gray-300 rounded-md p-2"
          rows="3"
          value={formData.requests}
          onChange={handleChange}
        />

        <button
          type="submit"
          className="w-full bg-amber-500 hover:bg-amber-600 text-white font-semibold py-2 px-4 rounded-md transition duration-200"
        >
          Reserve Now
        </button>
      </form>
    </div>
  );
};

export default ReservationForm;
