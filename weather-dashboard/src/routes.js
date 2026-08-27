import React from "react";
import { Routes, Route } from "react-router-dom";

import Home from "./Pages/Home";
import Forecast from "./Pages/Forecast";
import Cities from "./Pages/Cities";
import About from "./Pages/About";
import Contact from "./Pages/Contact";

function AppRoutes({ weather, searchCity }) {

    return (

        <Routes>

            <Route
                path="/"
                element={
                    <Home
                        weather={weather}
                        searchCity={searchCity}
                    />
                }
            />

            <Route
                path="/forecast"
                element={<Forecast />}
            />

            <Route
                path="/cities"
                element={<Cities />}
            />

            <Route
                path="/about"
                element={<About />}
            />

            <Route
                path="/contact"
                element={<Contact />}
            />

        </Routes>

    );

}

export default AppRoutes;