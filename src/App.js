import React from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from "./components/Home";
import About from "./components/About";
// import Services from "./components/Services";
import Contact from "./components/Contact";
import Cars from "./components/Cars";
import Login from "./components/Login";
import Register from "./components/Register";

// import Error from "./components/Error";
import './App.css';
// import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from './components/NavBar';
import Footer from "./components/Footer";

function App() {
  return (
      <div>
        <Router>
          <Navbar />
            <Routes>
              <Route path='/' element={<Home/>} />
              <Route path='/components/About' element={<About/>} />
              {/* <Route path='/components/Services' element={<Services/>} /> */}
              <Route path='/components/Contact' element={<Contact/>} />
              <Route path='/components/Cars' element={<Cars/>} />
              <Route path='/components/Login' element={<Login/>} />
              <Route path='/components/Register' element={<Register/>} />
              {/* <Route path='/components' element={<Error/>} /> */}
            </Routes>
          <Footer />
        </Router>
      </div>
      
  );
}

export default App;