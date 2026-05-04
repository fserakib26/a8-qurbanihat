"use client";

import { toast } from "react-hot-toast";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

const BookingForm = ({ animal }) => {
  const router = useRouter();

  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [showForm, setShowForm] = useState(false);

  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    address: ""
  });

 //Ekhane login check kora hosche
  useEffect(() => {
    const user = localStorage.getItem("user");
    setIsLoggedIn(!!user);
  }, []);

 
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

//   booking submit
  const handleSubmit = (e) => {
    e.preventDefault();

   
    if (!isLoggedIn) {
      toast.error("Please login first");

      setTimeout(() => {
        router.push("/signin");
      }, 1200);

      return;
    }

    
    toast.success("Booking successful");

   
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
            toast.error("Login required");

            setTimeout(() => {
              router.push("/signin");
            }, 1200);

            return;
          }

          setShowForm(true);
        }}
        className="bg-green-600 text-white px-6 py-2 rounded-lg hover:bg-green-700"
      >
        Book This {animal.type}
      </button>

      {showForm && (
        <form
          onSubmit={handleSubmit}
          className="mt-4 space-y-3 border p-4 rounded-lg"
        >
          <input
            name="name"
            placeholder="Your Name"
            value={form.name}
            onChange={handleChange}
            className="w-full border p-2 rounded"
            required
          />

          <input
            name="email"
            type="email"
            placeholder="Email"
            value={form.email}
            onChange={handleChange}
            className="w-full border p-2 rounded"
            required
          />

          <input
            name="phone"
            placeholder="Phone"
            value={form.phone}
            onChange={handleChange}
            className="w-full border p-2 rounded"
            required
          />

          <textarea
            name="address"
            placeholder="Address"
            value={form.address}
            onChange={handleChange}
            className="w-full border p-2 rounded"
            required
          />

          <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
            Confirm Booking
          </button>
        </form>
      )}

    </div>
  );
};

export default BookingForm;