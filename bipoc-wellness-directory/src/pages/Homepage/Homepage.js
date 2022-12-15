import React from "react";
import "./Homepage.css";
import { Link } from "react-router-dom";

function Homepage() {
  return (
    <main className="body">
      <div className="homepage-title">
        <h1>BIPOC Wellness Directory</h1>
      </div>
      <div className="main-section">
        <div className="homepage-body-left">
          <p className="main-txt main-txt--bold">
            Our goal is to provide easy and equitable access to local therapist
            and medical providers of your choosing
          </p>
          <div className="main-img">
            <img src="./assets/main_page_image9.jpg" alt="therapist session" />
          </div>
          <p className="main-txt main-txt--lg">
            We connect you with the best providers in your area based on your
            location, specialized needs, and insurance network. We’re here to
            help you find the best provider and service for you and your family!
          </p>
          <div className="test">
            <Link to="/signup" className="nav-link signup">
              <button className="signUp-btn">Sign Up</button>
            </Link>
          </div>
        </div>
        <div className="patient-testimonials">
          <div className="male patient">
            <img src="./assets/older_male.png" alt="male patient smiling" />
            <p>
              "Dr. Martinez was very attentive and I want to express my sincere
              appreciation for the promptness and professional care given to my
              wife and I during an incredibly hard time in our lives. Our
              experience at her facility was the upmost positive and best we
              have ever encountered!"
              <span className="patient-name">- Joseph, 59</span>
            </p>
          </div>
          <div className="woman patient">
            <img
              src="./assets/avg_age_woman.png"
              alt="female patient smiling "
            />
            <p>
              "Dr. Tyler Jones helped my son through his anxiety and PTSD, I
              cannot thank him enough! I had a wonderful experience from when I
              walked into his office! During the sessions, my son felt heard and
              understood. I highly recommend the use of this directory to find
              the Psychotherapist that works best for you or your loved one's
              needs!"
              <span className="patient-name">-Mary, 44</span>
            </p>
          </div>
          <div className="older_woman patient">
            <img
              src="./assets/older_female.png"
              alt="older female patient smiling"
            />
            <p>
              "I just wanted to thank the Dr. Martinez and her team for taking
              such great care of me during my grief and depression period after
              my husband passed away. She also ensured that I received high
              quality care and an interpreter to accomodate my hard of hearing.
              Thank you for being so compassionate Dr. Martinez!"
              <span className="patient-name">- Carol, 75</span>
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}

export default Homepage;
