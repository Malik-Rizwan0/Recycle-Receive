import React from 'react'
import './Startup.css'
import Icon from './Group 9948.png';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowsRotate, faHeadphonesSimple, faTriangleExclamation } from '@fortawesome/free-solid-svg-icons';
import { library } from '@fortawesome/fontawesome-svg-core';
import { NavLink } from 'react-router-dom';

library.add(faHeadphonesSimple, faArrowsRotate, faTriangleExclamation);
function Startup() {
  return (
    <>
      <div className=" grid grid-cols-2 full">
        <div className="">
          <div className="grid grid-cols-2 left">
            <div className=' text-right rec'>
              <div className='RECYCLE'> RECYCLE.</div>
              <div className='RECEIVE'> RECEIVE.</div>
            </div>
            <div className="icon">
              <img src={Icon} alt="" />
            </div>
          </div>
          <div className="gift">
            Trade in your old headphones to <u>unlock an $80 gift card.</u>
          </div>
        </div>
        <div className="outer-form text-right">
          <form className='form text-start'>
            <h3>Start your trade-in</h3>
            <input type="text" placeholder='Enter full name' required />
            <input type="email" placeholder='Enter your mail address' required />
            <input type="tel" placeholder='Enter your phone number' required />
            <input type="text" placeholder="Postal address (this is where we'll mail your satchel)" required />

            <select name="" id="HeadPhone" required>
              <option value="None">Brand of headPhone</option>
              <option value="None">Audio-Teahnica</option>
              <option value="None">Bose headPhone</option>
              <option value="None">Apple AirPods Max</option>
              <option value="None">Sennheiser</option>
            </select>
            <div className="condition">
              <div className="understand">
                <input type="checkbox" name="" id="agree" />
                <label htmlFor="agree">I understand and agree to the ecoactiv terms and conditions </label>
              </div>
              <div className="update">
                <input type="checkbox" id="email" />
                <label htmlFor="email">I want to stay up to date on offers and receive promtional emails</label>
              </div>
            </div>
            <NavLink to='/trackprogress'><input type="submit" value="Start Trade-in" /></NavLink>
            
          </form>
        </div>
      </div >
    </>
  )
}

export default Startup

