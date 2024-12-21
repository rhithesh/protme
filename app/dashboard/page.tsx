"use client"
import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaUserCircle } from "react-icons/fa"; // Profile icon
import BentoGridPage from "./test"
const ProfileDropdown = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Toggle dropdown visibility
  const toggleDropdown = () => setIsOpen(!isOpen);

  return (
    <>
    <div className="relative mx-3 mt-3 ">
      {/* Profile Icon */}
      <div
        className="cursor-pointer"
        onClick={toggleDropdown}
      >
        <FaUserCircle size={30} />
      </div>

      {/* Dropdown Menu */}
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: isOpen ? 1 : 0, y: isOpen ? 0 : -10 }}
        transition={{ duration: 0.3 }}
        className="absolute left-0 mt-2 w-48 bg-white border border-gray-300 rounded-md shadow-lg"
        style={{ display: isOpen ? "block" : "none" }}
      >
        <ul className="text-sm text-black">
          <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Profile</li>
          <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Settings</li>
          <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Logout</li>
        </ul>
      </motion.div>
    </div>
    <div>
      <BentoGridPage/>
    </div>
    </>
  );
};

export default ProfileDropdown;
