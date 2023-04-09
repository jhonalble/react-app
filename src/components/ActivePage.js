import React from 'react'
import Modal from './Modal'

function ActivePage() {

  return (
    <div className='Header-content'>
      <div className='Title-content'>
        <h3>Decline Bench Press Machine</h3>
        <div className='badge-tag'>
          <span className="badge rounded-pill badge-weight text-dark">weekly</span>
          <span className="badge rounded-pill badge-weight text-dark">Mar 14,2023</span>
          <span className="badge rounded-pill badge-weight text-dark">badges</span>
        </div>
        <p className='line-bottom'></p>
      </div>
      <div className="hero mb-3">
        <div className="row g-0">
          <div className="col-md-4">
            <img src="https://img.freepik.com/free-photo/fit-young-woman-running-park_23-2148381950.jpg" className="badge-picture" alt="..." />
          </div>
          <div className="col-md-8">
            <div className="body-title">

              {/* HeadTitle1 */}

              <h6 className="head-title">CHALLENGE RULES:<p className='head-bottom'></p></h6>
              <p className="card-text head-text"><i className="fa-sharp fa-solid fa-circle-check" style={{ color: "#ed840a" }}></i>Must complete at 1 Mile run between Mar 14,2023 and Mar 21,2023</p>
              <p className="card-text head-text"><i className="fa-sharp fa-solid fa-circle-check" style={{ color: "#ed840a" }}></i>You must enter your workout data info PANDA Stronger.</p>
              <p className="card-text head-text"><i className="fa-sharp fa-solid fa-circle-check" style={{ color: "#ed840a" }}></i>Must upload a video URL showing at 15-20 seconds of your run.</p>
              <p className="card-text head-text"><i className="fa-sharp fa-solid fa-circle-check" style={{ color: "#ed840a" }}></i>Can either be on a treadmill or outside.</p>
              <p className="card-text head-text"><i className="fa-sharp fa-solid fa-circle-check" style={{ color: "#ed840a" }}></i>Any users that submits false,misleading or offensive information can have their account terminated</p>

              {/* HeadTitle2 */}

              <h6 className="head-title">PRIZE:<p className='head-bottom1'></p></h6>
              <p className="card-text head-text"><i className="fa-sharp fa-solid fa-circle-check" style={{ color: "#ed840a" }}></i>PANDA Stronger will randomly select users to win Badges.</p>
              <p className="card-text head-text"><i className="fa-sharp fa-solid fa-circle-check" style={{ color: "#ed840a" }}></i>Any users who successfully completes will receive a Challenge PANDA Star on their profile.</p>

              {/* HeadTitle3 */}

              <h6 className="head-title">TO SUBMIT YOUR ENTRY:<p className='head-bottom2'></p></h6>
              <p className="card-text head-text"><i className="fa-sharp fa-solid fa-circle-check" style={{ color: "#ed840a" }}></i>Enter by clicking on the "Enter Challenge" below.Submit your workout data within the time <br /> period.Video evidence must have been filmed and data-stamped in YOUTUBE during the <br /> contest period.</p>

              <a data-toggle="modal" href="#myModal" className="challenge-btn">Enter Challenge</a>

              <button className='view-btn mx-2'>View Leaderboard</button>

              <Modal />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ActivePage