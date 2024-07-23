import React from 'react'
import './About.css';

const About = () => {
  return (
  <>

    <div className='aboutmee'>
      <div className='pix'>
        <img src='/assets/abbout.jpg'/>
      </div>
      <div className='textt'>
        <h6>ABOUT ME</h6>
        <h1> Hello, I’m <span>Jordan Walsh</span>, a Food and Drinks blogger from Florida. I have started blogging in 2011 lorem ipsum dolor sit amet.</h1>
      </div>
    </div>

    <div className='container-fluid'>
      <div className='row'>
        <div className='col-6'>
          <h1 id='gg'>I visit different hotels, restaurants, street food places to taste their Food / Drinks.</h1>
        </div>

        <div className='col-6'>
          <h5 id='cool'>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua ut enim ad minim veniam.</h5>
          <p id='para'>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste.</p>
          <p>Enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>

        </div>

      </div>
    </div>

    <div className='container-fluid'>
      <div className='picx'>
        <img src='/assets/times.png'></img>
      </div>
      <div className='tex'>
        <h1>"Association of Food Writers" <br></br> Award Winner 2018 / 2019</h1>
        <p>Enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
      </div>
    </div>

    <div className='section mt-5'>
            <div className='txt'>
            <h6 id='fade' className='mt-5'>FOOD, DRINK & RESTAURANTS REVIEWS</h6>
            <h1 id='mainn' className='mt-3'>Join our <span>100,000+ Subscribers </span> <br/>List Today!</h1>
                <input id='input' type='field' placeholder='Enter Your Email'></input> <br/>
                <a href='http://localhost:3000/About'><button id='bttn'>SUBSCRIBE NOW</button> </a>
            </div>
        </div>

<div className='contact'>
            <div className='image-container'>
                <img src='/assets/touch.jpg' alt='Restaurant' />
                <div className='text'>
                    <h6>ARE YOU A RESTAURANT OWNER?</h6>
                    <h1 id='max' className='mt-3'>Contact Jordan Walsh for a meaningful <br/>review for your restaurant.</h1>
                   <a href='http://localhost:3000/Workwithme'> <button id='buttonn'>GET IN TOUCH</button> </a>
                </div>
            </div>
        </div>

</>
  )
}


export default About
