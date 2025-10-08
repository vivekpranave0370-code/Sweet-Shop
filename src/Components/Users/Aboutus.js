import React from 'react'
import about from"../../Assets/Images/about.jpg"
import { Link } from 'react-router-dom'

function Aboutus() {
  return (
    <div>
   <div class="card body-about" >
  <img src={about} class="card-img-top img-size" alt="..."/>
  <div class="card-body body-title">
    <p class="card-title created">Created By</p>
    <h3 className='pranave'>PRANAVE S</h3>
    <p className='contact'>Contact Us</p>
    <h5 className='email'>Via Email:vivekpranave0370@gmail.com</h5>
    <h5 className='phone'>Via Phone:9074926530</h5>
    <Link to='/userhomepage' ><button className='about-btn'>BackHome</button></Link>
    </div>
  </div>
</div>
  )
}

export default Aboutus