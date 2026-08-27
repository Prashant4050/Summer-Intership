import React from "react";

function WeatherCard({ weather }) {

    return (

        <div className="weather-card">

            <div className="weather-header">

                <h2>{weather.city}, {weather.country}</h2>

            </div>

            <div className="weather-icon">

                {weather.condition === "Sunny" && "☀️"}
                {weather.condition === "Cloudy" && "☁️"}
                {weather.condition === "Rainy" && "🌧️"}
                {weather.condition === "Clear" && "🌤️"}

            </div>

            <h1>{weather.temperature}°C</h1>

            <h3>{weather.condition}</h3>

            <div className="weather-details">

                <div className="detail">
                    <h4>💧 Humidity</h4>
                    <p>{weather.humidity}%</p>
                </div>

                <div className="detail">
                    <h4>💨 Wind</h4>
                    <p>{weather.wind} km/h</p>
                </div>

                <div className="detail">
                    <h4>🌡 Pressure</h4>
                    <p>{weather.pressure} hPa</p>
                </div>

                <div className="detail">
                    <h4>👀 Visibility</h4>
                    <p>{weather.visibility} km</p>
                </div>

            </div>

        </div>

    );

}

export default WeatherCard;