import React from "react";

function Cities() {

    const cities = [

        "Ahmedabad",
        "Bangalore",
        "Chennai",
        "Delhi",
        "Hyderabad",
        "Jaipur",
        "Kolkata",
        "Lucknow",
        "Mumbai",
        "Pune",
        "Surat"

    ];

    return (

        <div className="page">

            <h1>Popular Indian Cities</h1>

            <div className="city-grid">

                {

                    cities.map((city,index)=>(

                        <div className="city-card" key={index}>

                            <h2>{city}</h2>

                        </div>

                    ))

                }

            </div>

        </div>

    );

}

export default Cities;