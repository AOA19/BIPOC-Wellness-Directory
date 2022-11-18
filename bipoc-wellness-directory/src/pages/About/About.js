import { React } from "react";
import './About.css'

function About() {
  return (
      <div className="container">
                <h1 className="about">About Us</h1>

        <div className="landingpage-body-center">
        <img src="./assets/main_page_image4.jpg" alt="" />

        <p>
        <span className="mission">Mission</span> <br /><br />
        A group of BIPOC individuals came together to address a need that was seen in the community. We noticed disparities among people of color when it came to mental health and medical services. We desire to see all people have equal access to healthcare and providers to whom they can identify with.
        </p>
        </div>
    </div>
  );
}

export default About;
