import React from "react";
import "./Providers.css";
import { Link } from "react-router-dom";

function Providers() {
  return (
    <div>
      <h1 className="providers-title">Meet The Providers</h1>
      <div className="provider">
        <img
          src="assets/provider1-modified.png"
          class="menu-img"
          width="200"
          height="200"
          alt="provider 1"
        />

        <h2>Dr. Theresa Martinez, MD </h2>
        <h3>Clinical Psychiatrist</h3>
        <img src="assets/rating-1.svg" alt="Star rating"></img>
        <p>Location: Shreveport, Lousiana</p>
        <p>
          Specialties: Addictions, PTSD, Trauma, Burnout, Grief, Women Issues,
          LGBT Issues
        </p>
        <Link to="/provider1">
          <button className="detail-btn" type="button">
            Click here for more
          </button>
        </Link>
      </div>
      <div className="provider">
        <img
          src="assets/provider3-modified.png"
          class="menu-img"
          width="200"
          height="200"
          alt="provider 2"
        />
        <h2>Dr. Tyler Jones M.D.</h2>
        <h3>Psychotherapist</h3>
        <img src="assets/rating-2-3.svg" alt="Star rating"></img>
        <p>Location: Baltimore, Maryland</p>
        <p>
          Specialties: Geriatric, PTSD, Trauma, Burnout, Grief, OCD, Anxiety,
          Personality Disorders
        </p>
        <Link to="/provider2">
          <button className="detail-btn" type="button">
            Click here for more
          </button>
        </Link>
      </div>
      <div className="provider">
        <img
          src="assets/provider4-modified.png"
          class="menu-img"
          width="200"
          height="200"
          alt="provider 4"
        />

        <h2>Neil Huang LCSW, LCMC </h2>
        <h3>Mental Health Councelor</h3>
        <img src="assets/rating-2-3.svg" alt="Star rating"></img>
        <p>Location: Los Angeles, California</p>
        <p>
          Specialties: Eating Disorders, Depression/Mood Disorders, PTSD,
          Trauma, Burnout, Grief, LGBT Issues
        </p>

        <Link to="/provider3">
          <button className="detail-btn" type="button">
            Click here for more{" "}
          </button>
        </Link>
      </div>
    </div>
  );
}

export default Providers;
