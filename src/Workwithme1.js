import React from 'react'
import './Workwithme.css'

const workwithme = () => {
  return (
    <>
    <div className='imagex'>
      <div className='piz'>
        <img src='/assets/work.jpg'></img>
      </div>
      <div className='uper'>
        <h6>CONTACT</h6>
        <h1>WORK WITH ME</h1>
      </div>
    </div>

    <div className='container-fluid'>
      <div className='row'>
        <div className='col-6'>
          <h1 id='heads'>I would love to hear a few words about your project.</h1>
          <p id='heads'>Get in touch with me if you have any queries and I’ll get back to you as soon as possible.</p>
           <button id='btnm'>contact@info.com</button>
          <div className='row'>
            <div className='col-12'>
            <a href='https://www.youtube.com/'><img src='https://cdn-icons-png.flaticon.com/128/3669/3669688.png' style={{width:30}}/> </a>
       <a href='https://www.facebook.com/'> <img src='https://cdn-icons-png.flaticon.com/128/1384/1384005.png' style={{width:30}}/> </a>
       <a href='https://www.instagram.com/'><img src='https://cdn-icons-png.flaticon.com/128/1384/1384015.png' style={{width:30}}/> </a>
       <a href='https://x.com/i/flow/login'><img src='https://cdn-icons-png.flaticon.com/128/5969/5969020.png' style={{width:30}}/> </a>
        </div>
            </div>
        </div>
        <div className='col-6'>
        <div class="contact-form">
    <form action="#"/>
        <label for="first-name">Name <span class="required">*</span></label>
        <input type="text" id="first-name" name="first-name" placeholder="First" required/>
        <input type="text" id="last-name" name="last-name" placeholder="Last" required/>

        <label for="email">Email <span class="required">*</span></label>
        <input type="text" id="last-name" name="last-name" placeholder="Enter Email" required/>


        <label for="message">Message <span class="required">*</span></label>
        <textarea id="message" name="message" placeholder='type here..' rows="4" required></textarea>

        <a href='http://localhost:3000/Workwithme'><input type="submit" value="Submit"/> </a>


        </div>
      </div>
    </div>
    </div>

    </>
  )
}

export default workwithme;
