import React from 'react'

function ProviderDetail3() {
  return (
    <div className='info'>
      <img src="assets/ImageProvider3.png" alt='' className='detail-title' />

      <img src="assets/provider4.jpg" alt="Provider" className='provider-pic' />

      <img src="assets/provider3quote.png" alt="Quote"
        className='provider-quote' />

      <p className='detail-info'>
      Ranking: 4.8/5
        <br />                <br />
        Currently Accepting New Clients
        <br />                <br />
        Location: Los Angeles, California
        <br />                <br />
        Specialties:
           Eating Disorders, Depression/Mood Disorders,
           PTSD, Trauma, Burnout, Grief, LGBT Issues
        <br />                <br />
        Languages: English, Mandarin, Vietnamese (conversational) 
        <br />                <br />
        PAYMENT OPTIONS: $55 an hour (payment plans available),  AETNA,  Medicare,  United Health Care
      </p>
      <div className='contact-info'>
        <h2>Contact Information</h2>

        <p>Location: Los Angeles, CA
          <br /> <br />
          12346 Alphabet St Los Angeles, CA 90013
          <br /><br />
          Email: nhuang@gmail.com
          <br /><br />
          Phone Number: 310-127-3468
          <br /><br />
          <img src="assets/zoom.png" alt='play button in a circle' className='zoom-image' />
          <br /><br />
          Video Sessions Available</p>
      </div>
    </div>
  )
}

export default ProviderDetail3