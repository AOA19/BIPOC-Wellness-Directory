import React from 'react';
import './Contact.css'

function Contact() {
    return (
        <div>
            <h1 className="title">Contact Us</h1>
            <h3 className="subtext">If you have any questions or concerns, please get in touch with our support team.</h3>
            <section className="main-text">
                <img className="contact-pic" src="./assets/main_page_image18.jpg" alt="" />
                <form className="contact-form">
                    <div className="name-field">
                        <label className='form-label'>Name: </label>
                        <input className='form-input' type="text"></input>
                    </div>
                    <div className="email-field">
                        <label className='form-label'>Email: </label>
                        <input className='form-input' type="text"></input>
                    </div>
                    <div className="message-field">
                        <label className='form-label'>Message: </label>
                        <textarea placeholder="What can we help you with?"></textarea>
                    </div>
                    <button className='form-btn' >SEND</button>
                </form>
            </section>
        </div>

    );
}

export default Contact