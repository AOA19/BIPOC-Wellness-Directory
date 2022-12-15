import React from "react";
import "./ProviderDetail.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLocationDot,
  faPhone,
  faEnvelope,
  faVideo,
} from "@fortawesome/free-solid-svg-icons";

function ProviderDetail1() {
  return (
    <div className="provider-container">
      <img
        src="assets/MartinezName2.png"
        alt="Provider's title"
        className="detail-title"
      />
      <div className="first-half">
        {/* Provider Image */}
        <img
          src="assets/provider1.jpg"
          alt="Provider"
          className="provider-pic"
        />
        {/* Provider details */}
        <div className="detail-info">
          <img src="assets/rating-1.svg" alt="Star rating"></img>
          <p>
            <em>Currently Accepting New Clients</em>
          </p>
          <div className="option-list">
            {/* Specialty Options */}
            <div>
              <p className="detail-info--bold">Specialties</p>
              <p className="list-item">Addictions</p>
              <p className="list-item">PTSD</p>
              <p className="list-item">Tramua</p>
              <p className="list-item">Burnout</p>
              <p className="list-item">Grief</p>
              <p className="list-item">Women Issues</p>
              <p className="list-item">LGBTQIA+ Issues</p>
            </div>
            {/* Payment Options */}
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
        src="assets/quoteimage1.png"
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
            12346 Alphabet St.
            <br></br>
            Shreveport, LA 71105{" "}
          </p>
        </div>
        <div className="contact-icon">
          <FontAwesomeIcon icon={faEnvelope} />
          <p>tmartinez@gmail.com</p>
        </div>
        <div className="contact-icon">
          <FontAwesomeIcon icon={faPhone} />
          <p>318-248-6420</p>
        </div>
        <div className="contact-icon">
          <FontAwesomeIcon icon={faVideo} />
          <p>Video Sessions Available</p>
        </div>
      </div>
    </div>
  );
}

export default ProviderDetail1;
