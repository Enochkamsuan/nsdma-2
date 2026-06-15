"use client";

import React, { useEffect,useState,useRef  } from "react";
import ReCAPTCHA from "react-google-recaptcha";
import contactbanner from "../assets/images/contact_banner.jpg";

const Page = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    message: "",
  });

  const [captchaValue, setCaptchaValue] = useState(null);
  const recaptchaRef = useRef(null);

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

 const handleSubmit = (e) => {
  e.preventDefault();

  if (!captchaValue) {
    alert("Please complete the reCAPTCHA");
    return;
  }

  const dataToStore = {
    ...formData,
    submittedAt: Date.now(),
    expiresAt: Date.now() + 24 * 60 * 60 * 1000,
  };

  localStorage.setItem(
    "contactFormData",
    JSON.stringify(dataToStore)
  );

  alert("Form submitted successfully!");

  setFormData({
    fullName: "",
    email: "",
    phone: "",
    message: "",
  });

  setCaptchaValue(null);

  recaptchaRef.current?.reset();
};

  useEffect(() => {
  const stored = localStorage.getItem("contactFormData");

  if (stored) {
    const parsed = JSON.parse(stored);

    if (Date.now() > parsed.expiresAt) {
      localStorage.removeItem("contactFormData");
    }
  }
}, []);
  return (
    <section
      style={{ backgroundImage: `url(${contactbanner.src})` }}
      className="min-h-[60vh] bg-cover bg-center bg-no-repeat px-2 sm:px-6 py-16 lg:px-16 flex items-center"
    >
      <form
        onSubmit={handleSubmit}
        className="bg-[#001a37c2] rounded-xl mx-auto w-full md:w-1/3 space-y-4 p-5 text-white"
      >
        <div>
          <label htmlFor="fName" className="block mb-1">
            Full Name
          </label>
          <input
            id="fName"
            name="fullName"
            type="text"
            value={formData.fullName}
            onChange={handleChange}
            placeholder="Enter your name"
            required
            className="bg-white rounded-lg w-full text-black outline-none p-2"
          />
        </div>

        <div>
          <label htmlFor="email" className="block mb-1">
            Email Address
          </label>
          <input
            id="email"
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Enter your email"
            required
            className="bg-white rounded-lg w-full text-black outline-none p-2"
          />
        </div>

        <div>
          <label htmlFor="phone" className="block mb-1">
            Phone
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            value={formData.phone}
            onChange={handleChange}
            placeholder="Enter your mobile number"
            required
            className="bg-white rounded-lg w-full text-black outline-none p-2"
          />
        </div>

        <div>
          <label htmlFor="message" className="block mb-1">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            rows={5}
            value={formData.message}
            onChange={handleChange}
            placeholder="Enter your message"
            required
            className="bg-white rounded-lg text-black w-full outline-none p-2"
          />
        </div>

        <ReCAPTCHA
          ref={recaptchaRef}
          sitekey="6Lf9PiAtAAAAAPKSf6AhbigcB3_kWc7bzN3mNtQ3"
          onChange={(value) => setCaptchaValue(value)}
        />

        <button
          type="submit"
          className="w-full bg-blue-600 hover:bg-blue-700 transition rounded-lg cursor-pointer py-3 font-semibold"
        >
          Submit
        </button>
      </form>
    </section>
  );
};

export default Page;