import React, { useState } from "react";
import { BrowserRouter } from "react-router-dom";
import "./App.css";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import AppRoutes from "./routes";

function App() {

  const weatherData = {

    surat: {
      city: "Surat",
      country: "India",
      temperature: 31,
      condition: "Sunny",
      humidity: 65,
      wind: 12,
      pressure: 1012,
      visibility: 8
    },

    Ahmedabad: {
      city: "Ahmedabad",
      country: "India",
      temperature: 34,
      condition: "Clear",
      humidity: 60,
      wind: 14,
      pressure: 1015,
      visibility: 9
    },

    pune: {
      city: "Pune",
      country: "India",
      temperature: 28,
      condition: "Cloudy",
      humidity: 68,
      wind: 11,
      pressure: 1011,
      visibility: 8
    },

    delhi: {
      city: "Delhi",
      country: "India",
      temperature: 35,
      condition: "Cloudy",
      humidity: 58,
      wind: 10,
      pressure: 1009,
      visibility: 7
    },

    mumbai: {
      city: "Mumbai",
      country: "India",
      temperature: 29,
      condition: "Rainy",
      humidity: 88,
      wind: 18,
      pressure: 1006,
      visibility: 5
    },

    bangalore: {
      city: "Bangalore",
      country: "India",
      temperature: 27,
      condition: "Cloudy",
      humidity: 72,
      wind: 9,
      pressure: 1010,
      visibility: 8
    },

    chennai: {
      city: "Chennai",
      country: "India",
      temperature: 33,
      condition: "Sunny",
      humidity: 70,
      wind: 15,
      pressure: 1008,
      visibility: 9
    },

    kolkata: {
      city: "Kolkata",
      country: "India",
      temperature: 30,
      condition: "Rainy",
      humidity: 90,
      wind: 14,
      pressure: 1005,
      visibility: 6
    },

    jaipur: {
      city: "Jaipur",
      country: "India",
      temperature: 37,
      condition: "Clear",
      humidity: 42,
      wind: 16,
      pressure: 1014,
      visibility: 10
    },

    hyderabad: {
      city: "Hyderabad",
      country: "India",
      temperature: 32,
      condition: "Sunny",
      humidity: 55,
      wind: 13,
      pressure: 1013,
      visibility: 9
    }

  };

  const [weather, setWeather] = useState(weatherData.surat);

  const searchCity = (city) => {

    const key = city.trim().toLowerCase();

    if (weatherData[key]) {

      setWeather(weatherData[key]);

    } else {

      alert("City not found!");

    }

  };

  return (

    <BrowserRouter>

      <div className="app">

        <Navbar />

        <AppRoutes
          weather={weather}
          searchCity={searchCity}
        />

        <Footer />

      </div>

    </BrowserRouter>

  );

}

export default App;