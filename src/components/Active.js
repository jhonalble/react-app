import React from 'react'
import { useNavigate } from 'react-router-dom'
import ActiveCard from './ActiveCard';

function Active() {
  // Goback function

  const navigate = useNavigate();

  const goback = () => {
    navigate('/linkbutton', { replace: 'true' });
  }

  return (
    <div className='main-id'>
      <nav className="navbar main-navbar">
        <div className="container-fluid">
          <a className="navbar-brand main-responsive text-white" href='/'>Available Challenges</a>
          <form className="d-flex" role="search">
            <button onClick={goback} className="Goback-button" type="submit"><i className="fa-sharp fa-solid fa-arrow-rotate-left"></i>Back</button>
          </form>
        </div>
      </nav>
      <div className='left-id'>
        <h3 className='mt-5'>Available Challenges</h3>
        <p style={{ fontSize: '15px', marginBottom: '26px' }}>Pick a challenges to join.</p>

        <ActiveCard button="WEEKLY" title="Decline Bench Press Machine" />
        <ActiveCard button="MONTLY" title="Bench Press" />

      </div>
    </div>
  )
}

export default Active
