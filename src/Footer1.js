import React from 'react'

const footer = () => {
  return (
    <>
    <hr/>
    <div className='footer'>
    <div className='navv'>
        <ul>
            <a href='http://localhost:3000/'><li>Home</li></a>
            <a href='http://localhost:3000/Food'><li>Food</li></a>
            <a href='http://localhost:3000/Resturant'><li>Restaurant</li> </a>
            <a href='http://localhost:3000/About'><li>About</li></a>
            <a href='http://localhost:3000/Workwithme'><li>Work With Me</li></a>
        </ul>
    </div>
    <div className='icons'>
       <a href='https://www.youtube.com/'><img src='https://cdn-icons-png.flaticon.com/128/3669/3669688.png' style={{width:30}}/> </a>
       <a href='https://www.facebook.com/'> <img src='https://cdn-icons-png.flaticon.com/128/1384/1384005.png' style={{width:30}}/> </a>
       <a href='https://www.instagram.com/'><img src='https://cdn-icons-png.flaticon.com/128/1384/1384015.png' style={{width:30}}/> </a>
       <a href='https://x.com/i/flow/login'><img src='https://cdn-icons-png.flaticon.com/128/5969/5969020.png' style={{width:30}}/> </a>
        <p>Copyright © 2024 Made with ❤️ | Love and Support</p>
    </div>
</div>
</>

  )
}

export default footer
