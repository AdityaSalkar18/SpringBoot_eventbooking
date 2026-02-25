import React,{useState} from 'react'
import { Link } from "react-router-dom";

const Register = () => {
  const [success, setSuccess] = useState("");
const [error, setError] = useState("");

  const [formData , setFormData] = useState({
    name:"",
    email:"",
     mobile:"",
    password:""
   
  });

 const handleChange = (e)=> {
    const {name, value} = e.target;
    setFormData((prev)=>({
      ...prev,
      [name]:value,
    }));
  };

  const handleSubmit = async (e) => {
  e.preventDefault();
   setError("");
  setSuccess("");
  try {
    const response = await fetch("http://localhost:8080/auth/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });

    const result = await response.json();

    if (!response.ok) {
      throw new Error(result.error || "Somthing went wrong");
    }

    setFormData({
      name: "",
      email: "",
      mobile:"",
      password: "",
    });

   
    setSuccess("Registered successfully");
    setTimeout(() => setSuccess(""), 3000);

  } catch (error) {
    
    setError(error.message || "Error to Register User ");
    setTimeout(() => setError(""), 3000);
  }
};

  return (
    <>
      <div className="flex items-center justify-center mt-20">
       

        <div className="w-full max-w-sm p-4 bg-white border border-gray-200 rounded-lg shadow-sm sm:p-6 md:p-8 ">
          <form className="space-y-6"  onSubmit={handleSubmit} encType="multipart/form-data">
            <h5 className="text-xl font-medium text-gray-700  text-center">
              Register to Eventify
            </h5>
             <div>
              <label
                for="name"
                className="block mb-2 text-sm font-medium text-gray-700 "
              >
                Your name
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
              
                className="bg-gray-50 border border-gray-300 text-gray-700 text-sm rounded-lg focus:ring-[#0D98BA] focus:border-[#0D98BA] block w-full p-2.5 "
                placeholder=" Your Name"
                required
              />
            </div>
            <div>
              <label
                for="mobile"
                className="block mb-2 text-sm font-medium text-gray-700 "
              >
                Your mobile 
              </label>
              <input
                type="text"
                name="mobile"
                value={formData.mobile}
                onChange={handleChange}
              
                className="bg-gray-50 border border-gray-300 text-gray-700 text-sm rounded-lg focus:ring-[#0D98BA] focus:border-[#0D98BA] block w-full p-2.5 "
                placeholder="123-456-789"
                required
              />
            </div>
            <div>
              <label
                for="email"
                className="block mb-2 text-sm font-medium text-gray-700 "
              >
                Your email
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                
                className="bg-gray-50 border border-gray-300 text-gray-700 text-sm rounded-lg focus:ring-[#0D98BA] focus:border-[#0D98BA] block w-full p-2.5 "
                placeholder="name@company.com"
                required
              />
            </div>
            <div>
              <label
                for="password"
                className="block mb-2 text-sm font-medium text-gray-700 "
              >
                Your password
              </label>
              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                
               
                placeholder="••••••••"
                className="bg-gray-50 border border-gray-300 text-gray-700 text-sm rounded-lg focus:ring-[#0D98BA] focus:border-[#0D98BA] block w-full p-2.5 "
                required
              />
            </div>
             {success && (
  <div className="p-4 mb-4 text-sm text-green-800 rounded-lg bg-green-50">
    <span className="font-medium">Success!</span> {success}
  </div>
)}

{error && (
  <div className="p-4 mb-4 text-sm text-red-800 rounded-lg bg-red-50">
    <span className="font-medium">Error!</span> {error}
  </div>
)}
           
            <button
              type="submit"
              className="w-full mt-3 bg-gradient-to-r from-orange-500 to-red-500
             text-white py-2 rounded-xl font-semibold
             hover:from-orange-600 hover:to-red-600
             active:scale-95 transition-all duration-200
             shadow-md hover:shadow-lg"
              >
              Register your account
            </button>
            <div className="text-sm font-medium text-gray-500 ">
              Already registered?{" "}
              <Link to="/login" className="text-orange-500 hover:text-orange-600 hover:underline">
                Login in 
              </Link>
            </div>
          </form>
        </div>
      </div>

    </>
  )
}

export default Register