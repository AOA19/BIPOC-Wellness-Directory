import React from 'react';

function Homepage(){
    return (
        <div class="container"> 
        <div class="landingpage-body"> 
            <div class="landingpage-body-left">
                <h1>Make <br />
                    Remote Work
                </h1>
                <p>Get your team in sync no matter the location. Streamline processes, 
                    create team rituals, and watch productivity soar.
                </p>
                <button>Learn More</button>
            </div>
            <div class="landingpage-body-right">
                <img src="./assets/image-hero-desktop.png" alt="" />
            </div>
        </div>
    </div>
    );
}

export default Homepage