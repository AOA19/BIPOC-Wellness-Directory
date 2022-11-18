import React from 'react';

function Contact(){
    return (
        <div>
        <h1 className="title">Contact Us</h1>
        <h3 className="subtext">If you have any questions or concerns, please get in touch with our support team.</h3>
        <section className="main-text">
            <img className="logo" src="assets/together.png" alt="Different colored hands coming together in a circle" />
            <form className="contact-form">
                <div className="name-field">
                    <label>Name: </label>
                    <input type="text"></input>
                </div>
                <div className="email-field">
                    <label>Email: </label> 
                    <input type="text"></input>
                </div>
                <div className="message-field">
                <label>Message: </label>
                    <textarea placeholder="What can we help you with?"></textarea>
                </div>
                <button>SEND</button>
            </form>
        </section>
        </div>
    );
}

export default Contact