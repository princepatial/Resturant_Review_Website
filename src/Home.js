import React from 'react';
import './Home.css';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <>

         <div className='bgimg'>
            <img id='bgimg' src='/assets/dish.jpg' alt='Dish'/>
            <div className='maintext'>
                <h6 id='fade' className='mt-5'>FOOD, DRINK & RESTAURANTS REVIEWS</h6>
                <h1 id='mainn' className='mt-3'>Join our <span>100,000+ Subscribers </span> <br/>List Today!</h1>
                <input type="email" id="email" name="Email" placeholder='Enter Email' spellCheck="false" required></input> <br/>
                <a href='http://localhost:3000/'><button id='button'>SUBSCRIBE NOW</button> </a>
            </div>
        </div>

        <div className='smalllogo'>
            <h6>WHERE WE’VE BEEN FEATURED</h6>
            <div className='featureimages'>
                <img src='/feature1.png' alt='image1' width={290}></img>
                <img src='/feature2.png' alt='image2' width={290}></img>
                <img src='/feature3.png' alt='image3' width={290}></img>
                <img src='/feature4.png' alt='image4' width={290}></img>
                <img src='/feature5.png' alt='image5' width={290}></img>
            </div>
        </div>

        <div className='blog'>
            <div className='head'>
                <h6>LATEST BLOG POSTS</h6>
       </div> 
       <div className='maindiv'>
       <div className='img1'>
        <img src='/assets/blog1.jpg'></img>
        <div className='description'>
            <h6>FOOD</h6>
            <h3 id='one'>10 Festive Pride Cocktails To Party With</h3>
            <p>Lorem ipsum dolor sit amet, consectetur elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim venia</p>
        </div>
       </div>
       
       <div className='img1'>
        <img src='/assets/blog2.jpg'></img>
        <div className='description'>
            <h6>DRINK</h6>
            <h3 id='one' >20 Easy Vodka Drinks With 4 Ingredients Or Less</h3>
            <p>Lorem ipsum dolor sit amet, consectetur elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi.</p>
        </div>
       </div>

       <div className='img1'>
        <img src='/assets/blog3.jpg'></img>
        <div className='description'>
            <h6>FOOD</h6>
            <h3 id='one'>Spaghetti Sauce With Ground Beef Flavour</h3>
            <p>Lorem ipsum dolor sit amet, consectetur elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi</p>
        </div>
       </div>
       </div>
       </div>



       <div className='places'>
        <h6>BEST RESTAURANTS TO VISIT</h6>
        </div>

        <div className='container-fluid'>
            <div className='row'>
                <div className='col-4'>
                    <img src='/assets/res1.jpg' style={{width:460 , height:600}}></img>
                    <div className='text'>
                        <h6>BEST RESTAURANTS</h6>
                        <h3>Bogetta Zenallo</h3>
                        <p>📅 21 June 2021</p>
                    </div>
                </div>

                <div className='col-4'>
                    <img src='/assets/res2.jpg' style={{width:460 , height:600}}></img>
                    <div className='text1'>
                        <h6>BEST RESTAURANTS</h6>
                        <h3>John's Resturant</h3>
                        <p>📅 21 June 2021</p>
                    </div>
                </div>

                <div className='col-4'>
                    <img src='/assets/res3.jpg' style={{width:460 , height:600}}></img>
                    <div className='text2'>
                        <h6>BEST RESTAURANTS</h6>
                        <h3>Junnilo's Place</h3>
                        <p>📅 21 June 2021</p>
                    </div>
                </div>

                
            </div>
        </div>


        <div className='section'>
            <div className='txt'>
            <h6 id='fade' className='mt-5'>FOOD, DRINK & RESTAURANTS REVIEWS</h6>
            <h1 id='mainn' className='mt-3'>Join our <span>100,000+ Subscribers </span> <br/>List Today!</h1>
                <input id='input' type='field' placeholder='Enter Your Email'></input> <br/>
                <a href='http://localhost:3000/'><button id='bttn'>SUBSCRIBE NOW</button> </a>
            </div>
        </div>


          <div className='review'>
            <div className='headd'>
                <h6>FEATURED REVIEW VIDEOS</h6>
                <h3>Lorem ipsum dolor sit amet, consectetur  adipisicing elit, sed <br/> do eiusmod tempor incididunt ut labore</h3>
            </div>
            <div className='container-fluid'>
    <div className='row'>
        <div class='col-3'>
            <a href="https://youtu.be/DkZR9sgwm8E?si=FysJz9LrOa6wJSTL" target="_blank" rel="noopener noreferrer">
                <img src='/assets/blog1.jpg' style={{width:360, height:200}}/>  </a>
                <div className='rating'>
                    <h3>The Perfect Summer Fruit Salad For your Energy</h3>
                    <span>★★★★☆</span>
                </div>
           
        </div>

        <div class='col-3'>
            <a href="https://youtu.be/DkZR9sgwm8E?si=FysJz9LrOa6wJSTL" target="_blank" rel="noopener noreferrer">
                <img src='/assets/blog3.jpg' style={{width:360, height:200}}/>   </a>
                <div className='rating'>
                    <h3>Grilled Marinated Carrots, Strained Yoghurt and Curry Leaves</h3>
                    <span>★★★★☆</span>
                </div>
          
        </div>

        <div class='col-3'>
            <a href="https://youtu.be/DkZR9sgwm8E?si=FysJz9LrOa6wJSTL" target="_blank" rel="noopener noreferrer">
                <img src='/assets/blog2.jpg' style={{width:360, height:200}}/> </a>
                <div className='rating'>
                    <h3>Blood Orange Margarita Wth a Little Extra Something</h3>
                    <span>★★★★☆</span>
                </div>
            
        </div>

        <div class='col-3'>
            <a href="https://youtu.be/DkZR9sgwm8E?si=FysJz9LrOa6wJSTL" target="_blank" rel="noopener noreferrer">
                <img src='/assets/blog3.jpg' style={{width:335, height:200}}/>  </a>
                <div className='rating'> 
                    <h3>The Ultimate Steak & Fries Recipe You'll Need</h3>
                    <span>★★★★☆</span>
                </div>
           
        </div>
    </div>
</div>
</div>

          <div className='aboutme'>
            <h6>ABOUT ME</h6>
            <h2 id='color'>Hello, I’m <span>Jordan Walsh</span>, a Food and Drinks blogger from Florida. I have started blogging in 2011 lorem ipsum dolor sit amet.
            </h2>
            <div className='container-fluid'>
                <div className='row'>
                    <div id='picc' className='col-6'>
                        <img src='/assets/about.jpg'/>
                    </div>
                    <div className='col-6'>
                        <h3>
                        I visit different hotels, restaurants, street food places to taste their Food / Drinks.</h3>
                        <h5 className='mt-5'>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua ut enim ad minim veniam.
                        </h5>
                        <p className='mt-4'>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste.</p>
                        <button id='btnn'>READ MORE</button>
                    </div>
                </div>
            </div>
          </div>




          <div className='contact'>
            <div className='image-container'>
                <img src='/assets/touch.jpg' alt='Restaurant' />
                <div className='text'>
                    <h6>ARE YOU A RESTAURANT OWNER?</h6>
                    <h1 id='max' className='mt-3'>Contact Jordan Walsh for a meaningful <br/>review for your restaurant.</h1>
                   <a href='http://localhost:3000/Workwithme'><button id='buttonn'>GET IN TOUCH</button> </a>
                </div>
            </div>
        </div>
  



        </>
    )
}

export default Home;
