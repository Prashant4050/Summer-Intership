import React from "react";

function Footer() {

    const year = new Date().getFullYear();

    return (

        <footer className="footer">

            <p>© {year} Weather Dashboard </p>

            <p>Created by Prashant Malaviya</p>

        </footer>

    );

}

export default Footer;