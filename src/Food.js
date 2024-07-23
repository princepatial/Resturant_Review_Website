import React from 'react'
import './Food.css'

const Food = () => {
  return (
    <>
    <div className='foodd'>
        <h1>Food</h1>      
    </div>
    <div className='container'>
        <hr/>
        <div className='pics'>
            <img className='mt-4' src='/assets/blog3.jpg' alt="image" style={{width:1300, height:600}}/> </div> </div>
            <div className='container'>
                <h2 id='min' className='mt-4'>Spaghetti Sauce With Ground Beef</h2>
                <h6 id='cmt' className='mt-4'>Leave a Comment / Food / By Alex</h6>
                <p className='mt-4'>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste.</p>
                </div>

                <div className='container'>
                <a href='http://localhost:3000/Food'>   <button id='btn'>Read More >></button> </a>
                </div>

                <div className='container'>
                    <hr/>
    <div className='pics'>
        <img className='mt-4' src='/assets/blog4.jpg' alt="image" style={{width:1300, height:600}}/> </div> </div>
        <div className='container'>
            <h2 id='min' className='mt-4'>Jullico's Palace</h2>
            <h6 id='cmt' className='mt-4'>Leave a Comment / Best Restaurants</h6>
            <p className='mt-4'>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat […]</p>
            </div>

            <div className='container'>
            <a href='http://localhost:3000/Food'>  <button id='btn'>Read More</button> </a>
            </div>

                <div className='container-fluid'>
                    <hr/>
                    <div className='comment'>
                        <h3 className='mt-4'>Leave a Comment</h3>
                        <h5 className='mt-2'>Your email address will not be published. Required fields are marked *</h5>
                        <textarea id="freeform" name="freeform">
                        Enter text here...
                        </textarea>
                        <div className='form'>
                        <input type="Name" id="name" placeholder='Name*'></input>
                        <input type="Name" id="emaill" placeholder='Email*'></input>
                        <input type="Name" id="website" placeholder='Website'></input>
                         </div> 
                         <input className='mt-5' type='checkbox'/>‎ ‎  Save my name, email, and website in this browser for the next time I comment. <br/>
                         <a href='http://localhost:3000/Food'><button id='bttnn'>POST COMMENT >></button></a>
                         </div>
                </div>
    </>
  )
}

export default Food
