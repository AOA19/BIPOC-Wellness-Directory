import React from 'react'
import './Providers.css'
import { Link } from 'react-router-dom';

function Providers() {
    return (
        <div>
            <h1 className='providers'>Meet The Providers</h1>
                <div className='provider'>
                    <img src="assets/provider1-modified.png" class="menu-img"
                    width="200"
                    height="200" alt="provider 1" />

                    <h1>Dr. Theresa Martinez, MD </h1>
                    <h2>Clinical Psychiatrist</h2>
                    <p>
                    Ranking: 4.6/5</p>
                    <p>
                    Location: Shreveport, Lousiana</p>
                    <p>
                    Video Chat Available</p>
                    <p>
                    Specialties:
                    Addictions, PTSD, Trauma,
                    Burnout, Grief, Women
                    Issues, LGBT Issues</p>
                    <Link to='/provider1'>
                        <button className='detail-btn' type="button">Click here for more</button>
                    </Link>
            </div>
            <div className='provider'>

                <img src="assets/provider3-modified.png" class="menu-img"
                    width="200"
                    height="200" alt="provider 2" />
                <h1>Dr. Tyler Jones M.D.</h1>
                <h2>Psychotherapist</h2>
                <p>
                    Ranking: 4.8/5</p>
                <p>
                    Location: Baltimore, Maryland</p>
                <p>
                    Specialties:
                    Geriatric, PTSD, Trauma,
                    Burnout, Grief, OCD, Anxiety,
                    Personality Disorders</p>
                    <Link to='/provider2'>
                <button className='detail-btn' type="button">Click here for more</button>
                    </Link>
            </div>
            <div className='provider'>
                <img src="assets/provider4-modified.png" class="menu-img"
                    width="200"
                    height="200" alt='provider 4' />

                <h1>Neil Huang LCSW, LCMC </h1>
                <h2>Mental Health Councelor</h2>
                <p>
                    Ranking: 4.8/5</p>
                <p>
                    Location: Los Angeles, California</p>
                <p>
                    Specialties:
                    Eating Disorders, Depression/Mood Disorders,
                    PTSD, Trauma, Burnout, Grief, LGBT Issues</p>

                <Link to='/provider3'>
                    <button className='detail-btn' type="button">Click here for more </button>
                </Link>
            </div>
        </div >
    )
}

export default Providers

