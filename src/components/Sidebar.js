import React from 'react'
import { Link } from "react-router-dom";

const Sidebar = () => {

  const navlinks = [
    { name: 'Home', to: '/', className: 'fa-solid fa-house-chimney text-white', style: 'text-white left-margin' },
    { name: 'My Profile', to: '/profile', className: 'fa-regular fa-user text-white list-margin', style: 'text-white left-style' },
    { name: 'Calendar', to: '/calendar', className: 'fa-sharp fa-solid fa-calendar-week text-white', style: 'text-white left-margin' },
    { name: 'My Workouts', to: '/my workout', className: 'fa-solid fa-bolt text-white', style: 'text-white left-margin' }
  ];

  return (
    <>
      <div className="wrapper">
        <div className="sidebar">
          <img className="sidebar-image mx-2" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSyUI88jg8Op9t8urQerOA7n2HeIp6jCcYH4bdVeCcOSA&s" alt="PS" />
          <div className="sidebar-icon">
            <i className="fa-regular fa-circle-question mx-2"></i>
            <i className="fa-sharp fa-solid fa-bell mx-2"></i>
            <i className="fa-solid fa-gear mx-2"></i>
          </div>
          <div>
            <div className="sidebar-id">
              <h3 className=' mt-3 text-light'>14</h3>
            </div>
            <h4 className='id-name mt-2'>irtaza 400</h4>
            <h6 className='id-email'>irtazawaris400@gmail.com</h6>
            <button className='add-btn mt-2'><h6 style={{ fontSize: '12px' }} className=' text-size'><i style={{ fontSize: '15px' }} className="fa-sharp fa-solid fa-plus"></i> Add</h6></button>
          </div>

          <ul className='list-style'>
            {
              navlinks.map((item, index) =>
                <li><i className={item.className}></i><Link to={item.to} key={index} className={item.style} >{item.name}</Link></li>
              )
            }
          </ul>

          <div className='team'>
            <h5>TeamingUP</h5>
            <h6>Organize & workout with teams</h6>
          </div>
          <li className='nav-link mt-3'><i className='fa-solid fa-users-line mx-3 text-white'></i><a style={{ fontSize: '14px' }} href='#'>Groups</a></li>
          <div className='challenge'>
            <h5>PANDA Challenge</h5>
            <h6>Challenge to win price</h6>
            <li className='join-btn '><i className="fa-solid fa-comment-dollar text-white mx-2"></i><Link style={{ fontSize: '14px' }} to='/join'>Join a Challenge</Link></li>
            <li className='join-btn '><i className="fa-regular fa-clipboard text-white mx-2"></i><Link style={{ fontSize: '14px',marginLeft:'12px' }} to='/copy'>Copy Text</Link></li>
          </div>
        </div>
      </div>
    </>
  )
}

export default Sidebar
