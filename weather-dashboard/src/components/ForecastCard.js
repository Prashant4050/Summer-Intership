import React from "react";

function ForecastCard() {

    const forecast = [

        {
            day: "Monday",
            icon: "☀️",
            temp: "32°C",
            condition: "Sunny"
        },

        {
            day: "Tuesday",
            icon: "🌤️",
            temp: "30°C",
            condition: "Partly Cloudy"
        },

        {
            day: "Wednesday",
            icon: "🌧️",
            temp: "28°C",
            condition: "Rainy"
        },

        {
            day: "Thursday",
            icon: "⛅",
            temp: "31°C",
            condition: "Cloudy"
        },

        {
            day: "Friday",
            icon: "☀️",
            temp: "33°C",
            condition: "Sunny"
        }

    ];

    return (

        <div className="forecast-container">

            <h2>5-Day Forecast</h2>

            <div className="forecast-grid">

                {forecast.map((item, index) => (

                    <div className="forecast-card" key={index}>

                        <h3>{item.day}</h3>

                        <div className="forecast-icon">

                            {item.icon}

                        </div>

                        <h2>{item.temp}</h2>

                        <p>{item.condition}</p>

                    </div>

                ))}

            </div>

        </div>

    );

}

export default ForecastCard;