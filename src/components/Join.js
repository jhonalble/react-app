import React from 'react'
import { Link } from 'react-router-dom'

function Join() {

  return (
    <div className='content'>
      <nav className="navbar">
        <div className="container-fluid">
          <a className="navbar-brand text-white" href="/">PANDA Challenge<i className="fa-regular fa-circle-question mx-2"></i></a>
        </div>
      </nav>
      <h6>PANDA Challenges</h6>
      <h3>Challenge Program RequirnmentsTesting</h3>
      <p>Challenges run daily,weekly, and monthly. you are already a Premium User, Just <br /> click below to see available Challenges</p>
      <li className='content-btn'><Link to="/linkbutton">Available Challenges</Link></li>
    </div>
  )
}

export default Join
