import React, { useState, useEffect } from "react";
import Link from "next/link";
import { FaExclamationTriangle, FaUser, FaLock } from "react-icons/fa";

export default function LoginForm() {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });
  const [errors, setErrors] = useState({});

  // This effect will clear each error after exactly 3 seconds
  useEffect(() => {
    const errorKeys = Object.keys(errors);
    if (errorKeys.length > 0) {
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
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.username) {
      newErrors.username = "Username is required";
    }

    if (!formData.password) {
      newErrors.password = "Password is required";
    } else if (formData.password.length < 6) {
      newErrors.password = "Password must be at least 6 characters";
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

    // Login submission logic would go here
    console.log("Login submitted:", formData);
    alert("Login successful!");
  };

  return (
    <div className="flex min-h-screen w-full items-center justify-center relative">
      <div className="absolute inset-0 w-full h-full">
        <img
          src="/Loginbg.jpg"
          alt="Background"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Overlay to make image darker so form stands out */}
      <div className="absolute inset-0 bg-[#090031] opacity-50"></div>

      {/* Login Form */}
      <div className="relative z-10 w-full max-w-md p-8 rounded-lg backdrop-blur-sm text-white shadow-xl">
        <form onSubmit={handleSubmit} className="space-y-6">
          <h2 className="text-3xl font-bold text-center mb-6">Login</h2>

          {/* Username */}
          <div className="relative">
            <div className="flex items-center bg-[#3b2456] rounded overflow-hidden">
              <span className="px-3">
                <FaUser />
              </span>
              <input
                type="text"
                name="username"
                placeholder="Username"
                value={formData.username}
                onChange={handleInputChange}
                className="w-full p-3 bg-[#3b2456] text-white placeholder-gray-400 focus:outline-none"
              />
            </div>
            {errors.username && (
              <div className="absolute -bottom-6 left-0 text-red-400 text-xs flex items-center">
                <FaExclamationTriangle className="mr-1" />
                {errors.username}
              </div>
            )}
          </div>

          {/* Password */}
          <div className="relative">
            <div className="flex items-center bg-[#3b2456] rounded overflow-hidden">
              <span className="px-3">
                <FaLock />
              </span>
              <input
                type="password"
                name="password"
                placeholder="Password"
                value={formData.password}
                onChange={handleInputChange}
                className="w-full p-3 bg-[#3b2456] text-white placeholder-gray-400 focus:outline-none"
              />
            </div>
            {errors.password && (
              <div className="absolute -bottom-6 left-0 text-red-400 text-xs flex items-center">
                <FaExclamationTriangle className="mr-1" />
                {errors.password}
              </div>
            )}
          </div>

          {/* Forgot Password */}
          <div className="text-right">
            <Link href="#" className="text-sm text-pink-400 hover:underline">
              Forgot password?
            </Link>
          </div>

          {/* Login Button */}
          <button
            type="submit"
            className="w-full cursor-pointer py-3 bg-[#f0375b] text-white rounded font-semibold transition-all hover:bg-[#d62e50]"
          >
            Login
          </button>

          {/* Register Link */}
          <p className="text-center text-sm">
            Don't have an account?{" "}
            <Link
              href="/registration"
              className="text-pink-400 hover:underline"
            >
              Register now
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
}
