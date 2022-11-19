import React from 'react'
import './ProviderDetail.css'

function ProviderDetail1() {
    return (
        <div className='info'>
            <img src="assets/MartinezName2.png" alt='' className='detail-title' />

            <img src="assets/provider1.jpg" alt="Provider" className='provider-pic' />

            <img src="assets/quoteimage1.png" alt="Quote"
                className='provider-quote' />

            <p className='detail-info'>
                Ranking: 4.6/5
                <br />                <br />
                Currently Accepting New Clients
                <br />                <br />
                Location: Shreveport, Lousiana
                <br />                <br />
                Specialties:
                Addictions, PTSD, Trauma,
                Burnout, Grief, Women
                Issues, LGBT Issues
                <br />                <br />
                Languages: English, Spanish, American Sign Language
                <br />                <br />
                PAYMENT OPTIONS: $100 - $200 an hour (payment plans available upon request),  AETNA,  Medicare,  United Health Care
            </p>
            <div className='contact-info'>
            <h2>Contact Information</h2>

            <p>Location: Shreveport, Louisiana
                <br /> <br />
                12346 Alphabet St Shreveport, Louisiana 71105
                <br /><br />
                Email: tmartinez@gmail.com
                <br /><br />
                Phone Number: 318-248-6420
                <br /><br />
                <img src="assets/zoom.png" alt='play button in a circle' className='zoom-image' />
                <br /><br />
                Video Sessions Available</p>
                </div>
        </div>
    )
}

export default ProviderDetail1