import React from "react";

function Contact() {

    return (

        <div className="page">

            <h1>Contact Us</h1>

            <form className="contact-form">

                <input
                    type="text"
                    placeholder="Enter your name"
                />

                <input
                    type="email"
                    placeholder="Enter your email"
                />

                <textarea
                    rows="5"
                    placeholder="Write your message"
                ></textarea>

                <button>

                    Send Message

                </button>

            </form>

        </div>

    );

}

export default Contact;