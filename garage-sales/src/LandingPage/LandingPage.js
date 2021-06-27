import React from 'react';
import './LandingPage.css';
// import Souleymane from '../../souleymane-3.jpg'

export default function LandingPage() {
  // <img src={Souleymane} alt="maPhoto"></img>
  return (
    <section className='homePage'>
      {/* <img src={Souleymane} alt="maPhoto"></img> */}
      <div className="firtssection">
      <h3>What is Garage-Sales App?</h3>
      <p>Garage sales app is a tool for people who need to complete a quick sale of their house items such as sofa, tv, cell phones, and others online. It will allow to access more buyers and make good deals. </p>
      </div>
      <div className="secondsection">
      <h3>Why an App for Garage sales</h3>
      <p>This action responds to the need to make the neighboring sales more attractive and increase the target population. In addition, the garage sales app also responds to security needs where buyers and sellers can peacefully meet and complete their business.</p>
      </div>
      {/* <div className="thirdsection">
      <h3>Recording Your daily diabetes test result with additional comments</h3>
      <p>DMS allows individuals to input their daily test results and add their  diet in order. These data give more to create a relationalship between glucose level and diet
        To start your healthy and preventive actions please sign up </p>
      </div> */}
    </section>
  
    
  )
};