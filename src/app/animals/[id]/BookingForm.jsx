"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

const BookingForm = ({ animal }) => {
  const router = useRouter();

  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [showForm, setShowForm] = useState(false);
  const [message, setMessage] = useState("");

  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    address: ""
  });

  useEffect(() => {
    const user = localStorage.getItem("user");
    setIsLoggedIn(!!user);
  }, []);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    
    if (!isLoggedIn) {
      router.push("/signin"); 
      return;
    }

    setMessage("Booking successful!");

    setForm({
      name: "",
      email: "",
      phone: "",
      address: ""
    });

    setShowForm(false);
  };

  return (
    <div className="mt-6">

      <button
        onClick={() => {
          if (!isLoggedIn) {
            router.push("/signin");
            return;
          }
          setShowForm(true);
        }}
        className="bg-green-600 text-white px-6 py-2 rounded-lg hover:bg-green-700"
      >
        Book This {animal.type}
      </button>

      {showForm && (
        <form onSubmit={handleSubmit} className="mt-4 space-y-3 border p-4 rounded">
          
          <input
            name="name"
            placeholder="Your Name"
            value={form.name}
            onChange={handleChange}
            className="w-full border p-2"
            required
          />

          <input
            name="email"
            type="email"
            placeholder="Email"
            value={form.email}
            onChange={handleChange}
            className="w-full border p-2"
            required
          />

          <input
            name="phone"
            placeholder="Phone"
            value={form.phone}
            onChange={handleChange}
            className="w-full border p-2"
            required
          />

          <textarea
            name="address"
            placeholder="Address"
            value={form.address}
            onChange={handleChange}
            className="w-full border p-2"
            required
          />

          <button className="bg-blue-600 text-white px-4 py-2 rounded">
            Confirm Booking
          </button>
        </form>
      )}

      {message && (
        <div className="fixed top-5 right-5 bg-black text-white px-4 py-2 rounded shadow">
          {message}
        </div>
      )}
    </div>
  );
};

export default BookingForm;