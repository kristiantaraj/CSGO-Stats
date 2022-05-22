import React from "react";
import './App.css';
import 'jquery/dist/jquery.min.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import Navbar from './components/Navbar';
import Banner from './components/Banner';
import ApiHooks from "./components/ApiHooks";


  //   const apiUrl = 'https://cors-anywhere.herokuapp.com/https://public-api.tracker.gg/v2/csgo/standard/search?platform=steam&query=76561198008049283';
  //   fetch(apiUrl,{
  //     method: 'GET',
  //     headers: {
  //       'TRN-Api-Key': '5330e1b3-5f7e-4c36-9ea7-58dc0ff53630',
  //       'Accept': 'application/json',
  //       'Accept-Encoding': 'gzip'
  //     },



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