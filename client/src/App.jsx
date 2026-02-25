import { BrowserRouter, Routes, Route } from "react-router-dom";

import AdminAuth from "./components/Admin/Authentication";
import DashBoard from "./components/Admin/DashBoard";
import Login from "./components/Auth/Login";
import Register from "./components/Auth/Register";


import Home from "./components/Home/Home";
import About from "./components/About/About";
import MyBooking from "./components/MyBooking/MyBooking";
import Contact from "./components/Contact/Contact";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/adminauth" element={<AdminAuth />} />
          <Route path="/dashboard" element={<DashBoard />} />

          <Route path="/login" element={<Login/>} />
          <Route path="/register" element={<Register/>} />


          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
           <Route path="/mybooking" element={<MyBooking />} />
          <Route path="/contact" element={<Contact />} />

        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
