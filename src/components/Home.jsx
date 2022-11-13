import React from 'react'
import original from '../components/images/original.jpeg'
import '../CSS/home.css';

 function Home() {
  return (
    <div>
        <h1>Pick a ride</h1>
        <p>Welcome to Pick a Ride we eager to serve you</p>
          <img src={original} alt="" className='original'/>
    </div>
  )
}
export default Home;