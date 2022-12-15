import { React } from "react";
import "./About.css";

function About() {
  return (
    <div className="container">
      <h1 className="about-title">About Us</h1>
      <div className="about-main">
        <img
          src="./assets/main_page_image4.jpg"
          alt="therapist consoling patient"
        />
        <div className="about-details">
          <h2 className="about-subtitle"> Our Mission</h2>
          <p>
            A group of BIPOC individuals came together to address a need that
            was seen in the community. We noticed disparities among people of
            color when it came to mental health and medical services. We desire
            to see all people have equal access to healthcare and providers to
            whom they can identify with.
          </p>
        </div>
      </div>
      <div className="our-team">
        <h2 className="about-subtitle">Our Team</h2>
        <div className="our-team-grid">
          {/* Team member one */}
          <div className="avatar ">
            <img
              src="./assets/avatar-brown.svg"
              alt="Avatar icon"
              className="avatar-img"
            />
            <p className="team-member">Alexandra Akinyemi</p>
          </div>
          {/* Team member two */}
          <div className="avatar">
            <img
              src="./assets/avatar-blue.svg"
              alt="Avatar icon"
              className="avatar-img"
            />
            <p className="team-member">Sonia Anthony</p>
          </div>
          {/* Team member three */}
          <div className="avatar">
            <img
              src="./assets/avatar-pink.svg"
              alt="Avatar icon"
              className="avatar-img"
            />
            <p className="team-member">Delicia Bills</p>
          </div>
          {/* Team member four  */}
          <div className="avatar">
            <img
              src="./assets/avatar-brown.svg"
              alt="Avatar icon"
              className="avatar-img"
            />
            <p className="team-member">Alexandria C</p>
          </div>
          {/* Team member five */}
          <div className="avatar">
            <img
              src="./assets/avatar-blue.svg"
              alt="Avatar icon"
              className="avatar-img"
            />
            <p className="team-member">Jeniece-Demarie George</p>
          </div>
          {/* Team member six */}
          <div className="avatar">
            <img
              src="./assets/avatar-pink.svg"
              alt="Avatar icon"
              className="avatar-img"
            />
            <p className="team-member">Charnaye Grier</p>
          </div>
          {/* Team member seven */}
          <div className="avatar">
            <img
              src="./assets/avatar-brown.svg"
              alt="Avatar icon"
              className="avatar-img"
            />
            <p className="team-member">Michelle Kirkland</p>
          </div>
          {/* Team member eight */}
          <div className="avatar">
            <img
              src="./assets/avatar-blue.svg"
              alt="Avatar icon"
              class="avatar-img"
            />
            <p className="team-member">Zoe Madu</p>
          </div>
          {/* Team member nine */}
          <div className="avatar">
            <img
              src="./assets/avatar-pink.svg"
              alt="Avatar icon"
              className="avatar-img"
            />
            <p className="team-member">Joan Waldron</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
