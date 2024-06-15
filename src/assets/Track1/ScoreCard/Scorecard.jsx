import React from 'react'
import Ecoactiv from '../Ecoactiv.png'
import './Scorecard.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Img1 from './Group 10082.png'
import Img2 from './Group 10084.png'
import Img3 from './Group 10086.png'
function Scorecard() {
  return (
    <div>
      <div className="ScoreCard r-width">
        <img className='ecoactiv-logo' src={Ecoactiv} alt="Ecoactiv" />
        <h2>Your Sustainability Scorecard </h2>
        <div className="ScoreCard-cards flex justify-evenly items-center ">
          <div className="card text-center ">
            <img src={Img1} alt="" />
            <p>diverted
              from landfill </p>
          </div>
          <div className="card text-center">
            <img src={Img2} alt="" />
            <p>tress planted</p>
          </div>
          <div className="card text-center">
            <img src={Img3} alt="" />
            <p>aluminium recovered </p>
          </div>
        </div>
        <div className="ScoreCard-data r-width-data">
          <p>Hi Sir,</p>
          <p>We’ve received your headphones for recycling!</p>
          <p>
            The impact will be added to your Sustainability Scorecard, giving you visibility into how your actions help in waste diversion and material conservation.</p>
          <button className='btn'>Track Progress</button>
        </div>
        <div className="track-progress-footer">
          <div className="icon">
            <FontAwesomeIcon icon="fa-brands fa-instagram" className='insta' />
            <FontAwesomeIcon icon="fa-brands fa-facebook" className='fb' />
          </div>
          <a href="#">www.ecoactiv.com.au</a>
        </div>
      </div>
    </div>
  )
}

export default Scorecard
