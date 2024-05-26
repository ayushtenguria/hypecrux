import React, { useState } from "react";

const PopupForm = ({ onClose }) => {
  const [formData, setFormData] = useState({
    name: "",
    businessName: "",
    contactNo: "",
    email: "",
    message: "",
  });

  const [errors, setErrors] = useState({});

  const validateForm = () => {
    const newErrors = {};
    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    }
    if (!formData.businessName.trim()) {
      newErrors.businessName = "Business name is required";
    }
    if (!formData.contactNo.trim()) {
      newErrors.contactNo = "Contact number is required";
    }
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Email is invalid";
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(
        "https://script.google.com/macros/s/AKfycbw0ZCndTKuf1T0uIbuNyfOeRfdRNwvfs5q2d-h5KDRr3m3Iq6ZktEIv3PkYV-t9BXBr/exec",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/x-www-form-urlencoded",
          },
          body: new URLSearchParams(formData).toString(),
        }
      );
      if (response.ok) {
        console.log("Form submitted successfully");
        onClose(); // Close the popup after form submission
      } else {
        console.error("Error submitting form:", response.statusText);
      }
    } catch (error) {
      console.error("Error submitting form:", error.message);
    }
  };

  return (
    <div className="fixed top-0 fontAileron left-0 w-full h-full flex justify-center items-center bg-gray-900 bg-opacity-50 z-50">
      <div className="bg-white bg-opacity-20 backdrop-filter backdrop-blur-lg rounded-lg p-8 min-w-[45rem] shadow-lg">
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-gray-600 hover:text-gray-800"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
        <h2 className="text-xl fontAileron tracking-wide mb-4 text-white">
          Get in Touch with Us
        </h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-xl fontAileron tracking-wide text-white">
              Name *
            </label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              className="mt-1 p-2 bg-white bg-opacity-30 border border-gray-300 rounded-md w-full text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            {errors.name && (
              <div className="text-red-600 text-sm mt-1">{errors.name}</div>
            )}
          </div>
          <div className="mb-4">
            <label className="block text-xl fontAileron tracking-wide text-white">
              Business Name *
            </label>
            <input
              type="text"
              name="businessName"
              value={formData.businessName}
              onChange={handleInputChange}
              className="mt-1 p-2 bg-white bg-opacity-30 border border-gray-300 rounded-md w-full text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            {errors.businessName && (
              <div className="text-red-600 text-sm mt-1">
                {errors.businessName}
              </div>
            )}
          </div>
          <div className="mb-4">
            <label className="block text-xl fontAileron tracking-wide text-white">
              Contact No *
            </label>
            <input
              type="text"
              name="contactNo"
              value={formData.contactNo}
              onChange={handleInputChange}
              className="mt-1 p-2 bg-white bg-opacity-30 border border-gray-300 rounded-md w-full text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            {errors.contactNo && (
              <div className="text-red-600 text-sm mt-1">
                {errors.contactNo}
              </div>
            )}
          </div>
          <div className="mb-4">
            <label className="block text-xl fontAileron tracking-wide text-white">
              Email *
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              className="mt-1 p-2 bg-white bg-opacity-30 border border-gray-300 rounded-md w-full text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            {errors.email && (
              <div className="text-red-600 text-sm mt-1">{errors.email}</div>
            )}
          </div>
          <div className="mb-4">
            <label className="block text-xl fontAileron tracking-wide text-white">
              Message
            </label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleInputChange}
              className="mt-1 p-2 bg-white bg-opacity-30 border border-gray-300 rounded-md w-full text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 h-24"
            />
          </div>
          <button
            type="submit"
            className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition duration-300"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default PopupForm;
