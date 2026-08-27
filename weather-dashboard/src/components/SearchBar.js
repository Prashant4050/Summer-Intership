import React, { useState } from "react";

function SearchBar({ searchCity }) {

    const [city, setCity] = useState("");

    const handleSearch = () => {

        if (city.trim() === "") {
            alert("Please enter a city name.");
            return;
        }

        searchCity(city.trim());

        setCity("");
    };

    return (

        <div className="search-container">

            <div className="search-box">

                <input
                    type="text"
                    placeholder="Enter city name..."
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                    onKeyDown={(e) => {
                        if (e.key === "Enter") {
                            handleSearch();
                        }
                    }}
                />

                <button onClick={handleSearch}>
                    🔍 Search
                </button>

            </div>

        </div>

    );

}

export default SearchBar;