import React from 'react'
// import original from '../components/images/original.jpeg'
import '../CSS/home.css';

 function Home() {
  return (
    <div className='home-page'>
        <div className='hero'>
        <h1>Pick a ride</h1>
        <p>Welcome to Pick a Ride we eager to serve you</p>
        </div>
          {/* <img src={original} alt="" className='original'/> */}
    </div>
  )
}
export default Home;