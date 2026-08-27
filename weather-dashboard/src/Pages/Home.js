import React from "react";
import SearchBar from "../components/SearchBar";
import WeatherCard from "../components/WeatherCard";
import ForecastCard from "../components/ForecastCard";
import Highlights from "../components/Highlight";

function Home({ weather, searchCity }) {

    return (

        <div>

            <SearchBar searchCity={searchCity} />

            <WeatherCard weather={weather} />

            <ForecastCard />

            <Highlights weather={weather} />

        </div>

    );

}

export default Home;