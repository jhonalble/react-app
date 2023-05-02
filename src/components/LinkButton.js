import React from 'react'
import { useNavigate } from 'react-router-dom'
import Card from './Card';



export default function LinkButton() {
  // Goback function

  const navigate = useNavigate();

  const clickHandler = () => {
    navigate('/join', { replace: 'true' })
  }

  return (
    <div>
      <div className='title'>
        <nav className="navbar height-responsive">
          <div className="container-fluid">
            <a className="navbar-brand navbar-responsive text-white" href='/'>Challenger Events Type</a>
            <form className="d-flex" role="search">
              <button  onClick={clickHandler} className="Goback-button button-responsive" type="submit"><i className="fa-sharp fa-solid fa-arrow-rotate-left"></i>Back</button>
            </form>
          </div>
        </nav>
        <div className='header'>
          <h5 style={{color:"#eef3f5"}}>h</h5>
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
    </div>
  )
}


