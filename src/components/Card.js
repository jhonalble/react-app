import React from 'react'
import { Link } from 'react-router-dom'

function Card(props) {
  return (
    <div>
      <div className="card-box mt-3">
        <div className="card box">
          <Link to="/active" className="card-body box-body">
            <p className="card-title">{props.title}<i className="fa-solid fa-arrow-right" style={{ float: 'right' }}  ></i></p>
            <p className="card-text">Click to view all sub category of {props.title}.</p>
            <p className="card-text"><small className="text-muted text-number">{props.num} sub category</small></p>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Card
