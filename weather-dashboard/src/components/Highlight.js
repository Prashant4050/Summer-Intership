import React from "react";

function Highlight({ weather }) {

    return (

        <div className="highlights-container">

            <h2>Today's Highlights</h2>

            <div className="highlights-grid">

                <div className="highlight-card">

                    <h3>💧 Humidity</h3>

                    <h2>{weather.humidity}%</h2>

                </div>

                <div className="highlight-card">

                    <h3>💨 Wind Speed</h3>

                    <h2>{weather.wind} km/h</h2>

                </div>

                <div className="highlight-card">

                    <h3>🌡 Pressure</h3>

                    <h2>{weather.pressure} hPa</h2>

                </div>

                <div className="highlight-card">

                    <h3>👀 Visibility</h3>

                    <h2>{weather.visibility} km</h2>

                </div>

                <div className="highlight-card">

                    <h3>🌅 Sunrise</h3>

                    <h2>06:10 AM</h2>

                </div>

                <div className="highlight-card">

                    <h3>🌇 Sunset</h3>

                    <h2>06:48 PM</h2>

                </div>

            </div>

        </div>

    );

}

export default Highlight;