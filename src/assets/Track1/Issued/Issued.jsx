import React from 'react'
import './Issued.css'
import Ecoactiv from '../Ecoactiv.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function Issued() {
    return (
        <>
            <div className="Issued r-width">
                <img className='ecoactiv-logo' src={Ecoactiv} alt="Ecoactiv" />
                <h2>Your gift has been Issued </h2>
                <div className="Issued-data r-width-data">
                    <p>Hi Sir,</p>
                    <p>Your gift card as part of participating in the Sony RECYCLE. RECEIVE. Program is here!</p>
                    <p><b>Here’s how to activate it:</b></p>
                    <p>[insert instructions]</p>
                </div>
                <div className="track-progress-footer">
                    <div className="icon">
                        <FontAwesomeIcon icon="fa-brands fa-instagram" className='insta' />
                        <FontAwesomeIcon icon="fa-brands fa-facebook" className='fb' />
                    </div>
                    <a href="#">www.ecoactiv.com.au</a>
                </div>
            </div>
        </>
    )
}

export default Issued
