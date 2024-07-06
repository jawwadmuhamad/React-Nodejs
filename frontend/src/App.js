
import React from "react";
import logo from './logo.svg';
import './App.css';
import Nav from "./components/Nav";
import Footer from "./components/footer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SignUp from "./components/SignUp";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route path="/" element={<h1>Home</h1>} />
          <Route path="/add" element={<h1>Add</h1>} />
          <Route path="/update" element={<h1>Update</h1>} />
          <Route path="/logout" element={<h1>Logout</h1>} />
          <Route path="/profile" element={<h1>Profile</h1>} />
          <Route path="/signup" element={<SignUp />} />
        </Routes>
      </BrowserRouter>
      <p>ok </p>
      <div>
        <Footer/>
      </div>
    </div>
  );
}

export default App;
