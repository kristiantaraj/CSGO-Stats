import React from "react";
import './App.css';
import 'jquery/dist/jquery.min.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import Navbar from './components/Navbar';
import Banner from './components/Banner';
import ApiHooks from "./components/ApiHooks";


  const App = () => {
    return (
      <>
      <Navbar />
      <Banner />
      <ApiHooks />
      </>
    );
};

export default App;