import React from 'react'
import { useNavigate } from 'react-router-dom'
import Card from './Card';



function LinkButton() {
  // Goback function

  const navigate = useNavigate();

  const clickHandler = () => {
    navigate('/join', { replace: 'true' })
  }

  return (
    <div className='header'>
      <div className='title'>
        <nav className="navbar">
          <div className="container-fluid">
            <a className="navbar-brand text-white" href='/'>Challenger Events Type</a>
            <form className="d-flex" role="search">
              <button style={{ marginRight: '15px' }} onClick={clickHandler} className="Goback-button" type="submit"><i className="fa-sharp fa-solid fa-arrow-rotate-left"></i>Back</button>
            </form>
          </div>
        </nav>
        <h6>Challenger Events Type</h6>
        <h3>Select an event type to view challenges.</h3>
        <div className=''>
          <div className='category d-flex my-3'>
            <Card title="strength" num="3" />
            <Card title="speed" num="0" />
            <Card title="aglity" num="0" />
          </div>
          <div className='category d-flex my-3'>
            <Card title="endurance" num="1" />
            <Card title="explosiveness" num="0" />
            <Card title="ACI workouts" num="0" />
          </div>
          <div className='category d-flex'>
            <Card title="yoga" num="0" />
            <Card title="core" num="0" />
            <Card title="sport specific" num="0" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default LinkButton