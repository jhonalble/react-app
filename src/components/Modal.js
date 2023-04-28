import React, { useState } from 'react'
import ReactPlayer from 'react-player'


function Modal() {

  // for onChange Events

  const [youtubeVideo,] = useState('');

  // for submit Event

  const [youtubeURL, setYoutubeURL] = useState('');

  // handleOnchange function

  const handleYoutubeChange = (e) => {
    setYoutubeURL(e.target.value);
  }

  // handleSubmit function

  const handleYoutubeSubmit = (e) => {
    e.perventDefault();
    setYoutubeURL(youtubeVideo)

  }

  return (
    <div>
      <div className="modal" id="myModal">
        <div className="modal-dialog modal-width">
          <div className="modal-content modal1-style">
            <div className="modal-header modalstyle1-header">
              <h3 className="modal-title">Enter into Challenge.</h3>
              <button type="button" style={{ fontSize: '20px' }} className=" close-btn fa-solid fa-xmark" data-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body body-style modal-dialog-scrollable">
              <form>
                <div className="mb-3">
                  <label htmlFor="recipient-name" className="col-form-label">Challenge</label>
                  <div className='text-typeStyle'>
                    <h6>1 Mile Run Challenge</h6>
                    <p>Endurance</p>
                  </div>
                </div>
                <div className="mb-3">
                  <label htmlFor="message-text" className="col-form-label">Workouts</label>
                  {/* <div className='click-typeStyle'> 
                  <h6>Runing</h6>
                  <p>ENDURANCE</p> */}

                  {/* <h6 type='button' data-bs-toggle="dropdown" style={{ float: 'right', marginTop: '-41px', marginRight: '15px' }}>Click Here to Enter Workouts Data<img style={{ width: '18px', marginLeft: '83px' }} src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQttlohvRNsmGWNSS3PwsnBGjbKoihKfTYnHg&usqp=CAU' /></h6> */}

                  <select class=" formSlected-style form-select-lg mb-3" >
                    <option selected className='click-typeStyle'>
                      <h6>Runing</h6>
                      <p>ENDURANCE</p>
                      <h6 type='button' data-bs-toggle="dropdown" style={{ float: 'right', marginTop: '-41px', marginRight: '15px' }}>Click Here to Enter Workouts Data<img style={{ width: '18px', marginLeft: '83px' }} src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQttlohvRNsmGWNSS3PwsnBGjbKoihKfTYnHg&usqp=CAU' /></h6>
                    </option>

                  </select>

                  {/* </div> */}
                </div>
              </form>

              <div className='addvideo-btn'>
                <a data-toggle="modal" href="#myModal2" className='Plusbtn-add'><i style={{ fontSize: '15px' }} className="fa-sharp fa-solid fa-plus"></i> Add Videos</a>
                <p className='bottom'></p>
                <div className='youtube-box'>
                  <ReactPlayer url={youtubeURL} width="100%"
                    height="100%" />

                </div>
              </div>
              {/* {youtubeError && <div className='error-msg'>{youtubeError}</div>} */}
            </div>
            <div className="modal-footer footer-style">
              <button type="button" className="cancel-button" data-dismiss="modal">Cancel</button>
              <button type="button" className="submit-button">Submit</button>
            </div>
          </div>
        </div>
      </div>
      <div className="modal" id="myModal2" data-backdrop="static">
        <div className="modal-dialog modal2-into-left">
          <div className="modal-content modal2-into">
            <div style={{ borderBottom: 'none' }} className="modal-header">
              <form onSubmit={handleYoutubeSubmit} className="form-width">
                <input onChange={handleYoutubeChange} type='text' className='form-control inputModal-style' id='message-text' placeholder='Add YouTube link here...' />
              </form>
            </div>
            <div className="container"></div>
            <div className="modal-body Padding-body">
              <p>Attach YouTube URLs for your videos by passing in the box above.Videos that are not sent to'Public' for sharing purposes cannot bo reposted in the tool.</p>
            </div>
            <div style={{ borderTop: 'none' }} className="modal-footer">
              <button type="button" className=" cancelmodal-btn" data-dismiss="modal">Cancel</button>
              <button type="button" className=" edit-btn">Update</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Modal