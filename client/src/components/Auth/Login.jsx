import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
const Login = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [error, setError] = useState("");


  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

 const handleSubmit = async (e) => {
  e.preventDefault();
  setError("");
  try {
    const response = await fetch("http://localhost:8080/auth/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });

    const data = await response.json();

    if (response.ok && data.token) {
      localStorage.setItem("token", data.token);
      // console.log("Token stored:", data.token);

      // alert("Login Successful");
        localStorage.setItem("userEmail", formData.email);

      navigate("/");
    } else {
      // console.error("Login failed:", data.message);
      setError(data.message || "Invalid credentials");
      setTimeout(() => setError(""), 3000);
    }
  } catch (error) {
    console.error("Error logging in:", error);
    setError("Error logging in. Please try again.");
    setTimeout(() => setError(""), 3000);
  }
};

  return (
    <>
      <div className="flex items-center justify-center mt-20">
      

        <div className="w-full max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow-md">
          <form
            className="space-y-6"
            onSubmit={handleSubmit}
            encType="multipart/form-data"
          >
            <h5 className="text-xl font-medium text-gray-700 text-center">
              Login to Eventify
            </h5>

            <div>
              <label
                htmlFor="email"
                className="block mb-2 text-sm font-medium text-gray-700"
              >
                Your email
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="bg-gray-50 border border-gray-300 text-gray-700 text-sm rounded-lg focus:ring-[#0D98BA] focus:border-[#0D98BA] block w-full p-2.5"
                placeholder="name@company.com"
                required
              />
            </div>

            <div>
              <label
                htmlFor="password"
                className="block mb-2 text-sm font-medium text-gray-700"
              >
                Your password
              </label>
              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                placeholder="••••••••"
                className="bg-gray-50 border border-gray-300 text-gray-700 text-sm rounded-lg focus:ring-[#0D98BA] focus:border-[#0D98BA] block w-full p-2.5"
                required
              />
            </div>

             {error && (
  <div className="p-4 mb-4 text-sm text-red-800 rounded-lg bg-red-50">
    <span className="font-medium">Error!</span> {error}
  </div>
)}

            <div className="flex items-start">
              <Link
                to="#"
                className="ms-auto text-sm text-orange-500 hover:text-orange-600 hover:underline"
              >
                Lost Password?
              </Link>
            </div>

            <button
              type="submit"
              className="w-full mt-3 bg-gradient-to-r from-orange-500 to-red-500
             text-white py-2 rounded-xl font-semibold
             hover:from-orange-600 hover:to-red-600
             active:scale-95 transition-all duration-200
             shadow-md hover:shadow-lg"
              >
              Login to your account
            </button>

            <div className="text-sm font-medium text-gray-500 text-center">
              Not registered?{" "}
              <Link to="/register" className="text-orange-500 hover:text-orange-600 hover:underline">
                Create account
              </Link>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;
