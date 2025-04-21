import React, { useState, useEffect } from "react";
import Link from "next/link";
import { FaExclamationTriangle } from "react-icons/fa";

export default function RegistrationForm() {
  const [activeTab, setActiveTab] = useState("phone");
  const [formData, setFormData] = useState({
    phone: "",
    email: "",
    password: "",
    agreedToTerms: false,
  });
  const [errors, setErrors] = useState({});
  const [showPromoField, setShowPromoField] = useState(false);

  // This effect will clear each error after exactly 3 seconds
  useEffect(() => {
    const errorKeys = Object.keys(errors);
    if (errorKeys.length > 0) {
      // Create a setTimeout for each error to clear it after 3 seconds
      const timers = errorKeys.map((key) => {
        return setTimeout(() => {
          setErrors((prevErrors) => {
            const newErrors = { ...prevErrors };
            delete newErrors[key];
            return newErrors;
          });
        }, 3000); // 3 seconds
      });

      // Clean up timers when component unmounts or errors change
      return () => {
        timers.forEach((timer) => clearTimeout(timer));
      };
    }
  }, [errors]);

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const validateForm = () => {
    const newErrors = {};

    if (activeTab === "phone") {
      if (!formData.phone) {
        newErrors.phone = "Phone number is required";
      } else if (!/^\d{10}$/.test(formData.phone)) {
        newErrors.phone = "Enter a valid 10-digit phone number";
      }
    } else {
      if (!formData.email) {
        newErrors.email = "Email is required";
      } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
        newErrors.email = "Enter a valid email address";
      }
    }

    if (!formData.password) {
      newErrors.password = "Password is required";
    } else if (formData.password.length < 6) {
      newErrors.password = "Password must be at least 6 characters";
    }

    if (!formData.agreedToTerms) {
      newErrors.agreedToTerms = "You must agree to the terms";
    }

    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formErrors = validateForm();

    if (Object.keys(formErrors).length > 0) {
      setErrors(formErrors);
      return;
    }

    // Form submission logic would go here
    console.log("Form submitted:", formData);
    alert("Registration successful!");
  };

  const togglePromoCode = () => {
    setShowPromoField(!showPromoField);
  };

  return (
    <div className="flex min-h-screen bg-[#1e0f2e] text-white">
      {/* Left side - Promo */}
      <div className="w-1/2 bg-[#38114f] relative hidden lg:block">
        <img
          src="https://png.pngtree.com/png-clipart/20240505/original/pngtree-cricket-player-in-playing-action-png-image_15016761.png"
          alt="Cricketer"
          className="absolute bottom-0 left-8 max-h-[600px]"
        />
        <div className="absolute bottom-10 left-8 text-left">
          <p className="text-sm tracking-wide">WELCOME PACK</p>
          <h1 className="text-5xl font-extrabold text-[#d8ff00]">
            500% + 430 FS
          </h1>
          <h2 className="text-3xl mt-2">UP TO 150 000 INR</h2>
        </div>
      </div>

      {/* Right side - Form */}
      <div className="w-full lg:w-1/2 bg-[#2a173e] flex items-center justify-center p-8">
        <form onSubmit={handleSubmit} className="w-full max-w-md space-y-6">
          <h2 className="text-3xl font-bold">Registration</h2>

          {/* Tabs */}
          <div className="flex bg-[#3b2456] rounded overflow-hidden">
            <button
              type="button"
              className={`flex-1 cursor-pointer py-2 font-semibold ${
                activeTab === "phone" ? "bg-white text-black" : ""
              }`}
              onClick={() => setActiveTab("phone")}
            >
              Phone
            </button>
            <button
              type="button"
              className={`flex-1 cursor-pointer py-2 font-semibold ${
                activeTab === "email" ? "bg-white text-black" : ""
              }`}
              onClick={() => setActiveTab("email")}
            >
              Email
            </button>
          </div>

          {/* Contact Input (Phone or Email) */}
          <div className="relative">
            {activeTab === "phone" ? (
              <>
                <input
                  type="text"
                  name="phone"
                  placeholder="10-digit mobile number"
                  value={formData.phone}
                  onChange={handleInputChange}
                  className="w-full p-3 bg-[#3b2456] rounded text-white placeholder-gray-400"
                />
                <p className="text-sm text-gray-400">
                  A text message code will be sent to this number
                </p>
              </>
            ) : (
              <>
                <input
                  type="email"
                  name="email"
                  placeholder="your@email.com"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full p-3 bg-[#3b2456] rounded text-white placeholder-gray-400"
                />
                <p className="text-sm text-gray-400">
                  A verification link will be sent to this email
                </p>
              </>
            )}
            {errors.phone && activeTab === "phone" && (
              <div className="absolute -bottom-6 left-0 text-red-400 text-xs flex items-center">
                <FaExclamationTriangle className="mr-1" />
                {errors.phone}
              </div>
            )}
            {errors.email && activeTab === "email" && (
              <div className="absolute -bottom-6 left-0 text-red-400 text-xs flex items-center">
                <FaExclamationTriangle className="mr-1" />
                {errors.email}
              </div>
            )}
          </div>

          {/* Password */}
          <div className="relative">
            <input
              type="password"
              name="password"
              placeholder="Password"
              value={formData.password}
              onChange={handleInputChange}
              className="w-full p-3 bg-[#3b2456] rounded text-white placeholder-gray-400"
            />
            {errors.password && (
              <div className="absolute -bottom-6 left-0 text-red-400 text-xs flex items-center">
                <FaExclamationTriangle className="mr-1" />
                {errors.password}
              </div>
            )}
          </div>

          {/* Promo Code Link & Field */}
          <div>
            <p
              className="text-sm text-pink-400 cursor-pointer underline"
              onClick={togglePromoCode}
            >
              I have a promo code
            </p>

            {showPromoField && (
              <input
                type="text"
                name="promoCode"
                placeholder="Enter promo code"
                value={formData.promoCode || ""}
                onChange={handleInputChange}
                className="w-full mt-2 p-3 bg-[#3b2456] rounded text-white placeholder-gray-400"
              />
            )}
          </div>

          {/* Checkbox */}
          <div className="relative">
            <label className="flex items-start space-x-2 text-xs">
              <input
                type="checkbox"
                name="agreedToTerms"
                checked={formData.agreedToTerms}
                onChange={handleInputChange}
                className="mt-1"
              />
              <span>
                I have read, understand and agree with the{" "}
                <Link href="#" className="underline">
                  Terms and Conditions
                </Link>
                ,{" "}
                <Link href="#" className="underline">
                  Privacy Policy
                </Link>
                ,{" "}
                <Link href="#" className="underline">
                  Betting Rules
                </Link>{" "}
                and confirm that I am over 18 years of age.
              </span>
            </label>

            {errors.agreedToTerms && (
              <div className="absolute -bottom-6 left-0 text-red-400 text-xs flex items-center">
                <FaExclamationTriangle className="mr-1" />
                {errors.agreedToTerms}
              </div>
            )}
          </div>

          {/* Register Button */}
          <button
            type="submit"
            className="w-full cursor-pointer py-3 bg-[#f0375b] text-white rounded font-semibold mt-8"
          >
            Register
          </button>

          <p className="text-center text-sm text-gray-400">
            Already have an account?{" "}
            <Link href="/login" className="underline">
              Log in
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
}
