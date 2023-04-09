import React from 'react'
import { Link } from 'react-router-dom'

function ActiveCard(props) {

  return (
    <div>
      <div className="card-active mb-4">
        <div className="row g-0">
          <div style={{ borderRadius: '13px' }} className="col-md-4 col1-Style">
            <img src="https://img.freepik.com/free-photo/fit-young-woman-running-park_23-2148381950.jpg" className="img-fluid rounded-start card-image" alt="..." />
          </div>
          <div className="col-md-8 col2-Style">
            <div className="card-body active-body">
              <button className='btn-active' >ACTIVE</button>
              <button className='btn-weekly' >{props.button}</button>
              <h5 className="cards-title mt-2">{props.title}</h5>
              <p className="card-text">Must complete a 1 Mile run between Mar 14,2023 and Mar 21,2023.Panda Stronger will be randomly select user to select will be 5 badges.Any user who sucessfully completes will recieve 5 Challenges PANDA Star on thier profile.</p>
              <p className='card-border'></p>
              <li className='card-btn text-white mt-3'><Link to="/activepage">Enter Challenges</Link></li>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ActiveCard
