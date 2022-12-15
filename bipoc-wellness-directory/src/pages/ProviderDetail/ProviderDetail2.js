import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLocationDot,
  faPhone,
  faEnvelope,
  faVideo,
} from "@fortawesome/free-solid-svg-icons";

function ProviderDetail2() {
  return (
    <div className="provider-container">
      <img
        src="assets/ImageProvider4.png"
        alt="Provider's title"
        className="detail-title"
      />
      <div className="first-half">
        {/* Provider image */}
        <img
          src="assets/provider3.jpg"
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
              <p className="list-item">Geriatric</p>
              <p className="list-item">PTSD</p>
              <p className="list-item">Tramua</p>
              <p className="list-item">Burnout</p>
              <p className="list-item">Grief</p>
              <p className="list-item">OCD</p>
              <p className="list-item">Anxiety</p>
              <p className="list-item">Personality Disorders</p>
            </div>
            <div>
              <p className="detail-info--bold">Payment Options</p>
              <p>
                <strong>Insurances Accepted:</strong>
              </p>
              <p className="list-item">AETNA</p>
              <p className="list-item">Medicare</p>
              <p className="list-item">United Health Care</p>
              <p className="list-item">
                <em>$100 - $200/hour</em> (payment plans available upon request)
              </p>
            </div>
          </div>
          {/* Languages spoken */}
          <p className="detail-info--bold">Languages</p>
          <p className="list-item">English, Spanish, American Sign Language</p>
        </div>
      </div>
      {/* Provider quote */}
      <img
        src="assets/QuoteProvider_2.png"
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
            222 Delta Ave.
            <br></br>
            Baltimore, MD 21206{" "}
          </p>
        </div>
        <div className="contact-icon">
          <FontAwesomeIcon icon={faEnvelope} />
          <p>tjones@gmail.com</p>
        </div>
        <div className="contact-icon">
          <FontAwesomeIcon icon={faPhone} />
          <p>410-468-3592</p>
        </div>
        <div className="contact-icon">
          <FontAwesomeIcon icon={faVideo} />
          <p>Video Sessions Available</p>
        </div>
      </div>
    </div>
  );
}

export default ProviderDetail2;
