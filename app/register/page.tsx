"use client"
import { useState } from "react";

export default function Register() {
  const [details, setDetails] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleRegister = () => {
    // Handle the registration logic here
    console.log(details);
  };

  return (
    <div className=" h-screen bg-yellow-500 p-8 flex justify-center items-center border-l-4 border-black">
      <div className="w-80 p-6 bg-white border-4 border-black rounded-lg shadow-lg">
        <h1 className="text-2xl font-bold mb-6 text-center">Create Now</h1>

        {/* Name Input */}
        <div className="mb-4">
          <label className="block text-lg font-medium">Name</label>
          <input
            type="text"
            value={details.name}
            onChange={(e) => setDetails({ ...details, name: e.target.value })}
            className="w-full border-2 border-black px-2 py-1 rounded"
          />
        </div>

        {/* Email Input */}
        <div className="mb-4">
          <label className="block text-lg font-medium">Email</label>
          <input
            type="email"
            value={details.email}
            onChange={(e) => setDetails({ ...details, email: e.target.value })}
            className="w-full border-2 border-black px-2 py-1 rounded"
          />
        </div>

        {/* Password Input */}
        <div className="mb-6">
          <label className="block text-lg font-medium">Password</label>
          <input
            type="password"
            value={details.password}
            onChange={(e) => setDetails({ ...details, password: e.target.value })}
            className="w-full border-2 border-black px-2 py-1 rounded"
          />
        </div>

        {/* Register Button */}
        <button
          onClick={handleRegister}
          className="w-full bg-yellow-400 border-2 border-black text-lg font-semibold py-2 rounded hover:bg-yellow-300 transition"
        >
          Register
        </button>

        {/* Login Link */}
        <div className="underline-offset-1 underline text-right text-lg font-medium text-black hover:text-yellow-400 transition cursor-pointer mt-4">
          <p>Already have an account? Login</p>
        </div>
      </div>
    </div>
  );
}
