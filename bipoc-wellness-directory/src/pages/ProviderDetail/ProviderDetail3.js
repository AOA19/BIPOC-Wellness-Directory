import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLocationDot,
  faPhone,
  faEnvelope,
  faVideo,
} from "@fortawesome/free-solid-svg-icons";

function ProviderDetail3() {
  return (
    <div className="provider-container">
      <img
        src="assets/ImageProvider3.png"
        alt="Provider's title"
        className="detail-title"
      />
      <div className="first-half">
        {/* Provider image */}
        <img
          src="assets/provider4.jpg"
          alt="Provider"
          className="provider-pic"
        />
        {/* Provider detail */}
        <div className="detail-info">
          <img src="assets/rating-2-3.svg" alt="Star rating"></img>
          <p>
            <em>Currently Accepting New Clients</em>
          </p>
          <div className="option-list">
            {/* Specialty Options */}
            <div>
              <p className="detail-info--bold">Specialties</p>
              <p className="list-item">Eating Disorders</p>
              <p className="list-item">Depression/ Mood Disorders</p>
              <p className="list-item">PTSD</p>
              <p className="list-item">Tramua</p>
              <p className="list-item">Burnout</p>
              <p className="list-item">Grief</p>
              <p className="list-item">LGBTQIA+ Issues</p>
            </div>
            {/* Payment options */}
            <div>
              <p className="detail-info--bold">Payment Options</p>
              <p>
                <strong>Insurances Accepted:</strong>
              </p>
              <p className="list-item">AETNA</p>
              <p className="list-item">Medicare</p>
              <p className="list-item">United Health Care</p>
              <p className="list-item">
                <em>$55/hour</em> (payment plans available upon request)
              </p>
            </div>
          </div>
          {/* Languages spoken */}
          <p className="detail-info--bold">Languages</p>
          <p className="list-item">
            English, Madarin, Vietnamese (conversational)
          </p>
        </div>
      </div>
      {/* Provider quote */}
      <img
        src="assets/provider3quote.png"
        alt="Quote"
        className="provider-quote"
      />
      {/* Provider contact information */}
      <div className="contact-info">
        <h2>Contact Information</h2>
        <div className="contact-icon">
          <FontAwesomeIcon icon={faLocationDot} />
          <p>
            {" "}
            4503 Ford Dr.
            <br></br>
            Los Angeles, CA 90013{" "}
          </p>
        </div>
        <div className="contact-icon">
          <FontAwesomeIcon icon={faEnvelope} />
          <p>nhuang@gmail.com</p>
        </div>
        <div className="contact-icon">
          <FontAwesomeIcon icon={faPhone} />
          <p>310-127-3468</p>
        </div>
        <div className="contact-icon">
          <FontAwesomeIcon icon={faVideo} />
          <p>Video Sessions Available</p>
        </div>
      </div>
    </div>
  );
}

export default ProviderDetail3;
