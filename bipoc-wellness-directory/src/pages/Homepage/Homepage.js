import React from 'react';
import './Homepage.css'
import {Link} from 'react-router-dom'

function Homepage() {
    return (
        <div className='body'>
            <div class="homepage-body">
                <h1>
                    BIPOC Wellness Directory
                </h1>
            </div>
            <div class="patient-testimonials">
                <div class="male patient">
                    <img src="./assets/older_male.png" alt="Male patient" />
                    <p>
                        "Dr. Williams was very attentive and I want to express my sincere
                        appreciation for the promptness and professional care given to my
                        wife and I during an incredibly hard time in our lives. Our experience at her facility was the upmost positive and
                        best we have ever encountered!" <br />- Joseph, 59
                    </p>
                </div>
                <div class="woman patient">
                    <img src="./assets/avg_age_woman.png" alt="Woman patient" />
                    <p>
                        "Dr. Tyler Jones helped my son through his anxiety and PTSD, I cannot thank
                        him enough! I had a wonderful experience from when I walked into his office!
                        During the sessions, my son felt heard and understood.
                        I highly recommend the use of this directory to find the Psychotherapist that
                        works best for you or your loved one's needs!" <br />- Mary, 44
                    </p>
                </div>
                <div class="older_woman patient">
                    <img src="./assets/older_female.png" alt=" Older woman page" />
                    <p>
                        "I just wanted to thank the Dr. Williams and her team for taking such great care of me
                        during my grief and depression period after my husband passed away.
                        She also ensured that I received high quality care and an interpreter to accomodate my hard of hearing.
                        Thank you for being so compassionate Dr. Williams!" <br />- Carol, 75
                    </p>
                </div>
            </div>
            <div class="homepage-body-left">
                <h1>Our goal is to provide easy and equitable access to local
                    therapist and medical providers of your choosing
                </h1>
                <img src="./assets/main_page_image9.jpg" alt="therapist session" />
                <p>We connect you with the best providers in your area based on your location,
                    specialized needs, and insurance network. We’re here to help you find the
                    best provider and service for you and your family!
                </p>
               <Link to='/signup' className='nav-link signup'>

                <button>Sign Up</button>
                </Link>
            </div>
        </div>
    );
}

export default Homepage