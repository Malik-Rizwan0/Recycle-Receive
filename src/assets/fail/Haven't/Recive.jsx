import React from 'react'
import './Recive.css'
import Ecoactiv from './image.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function Recive() {
    return (
        <>
            <div className="Recive r-width">
                <img src={Ecoactiv} alt="" />
                <div className="Recive-data">
                    <p>Hi Sir,</p>
                    <p>We haven’t received your headphones at our recycling facilities yet, which could affect your $80 gift card redemption from Sony through the RECYCLE. RECEIVE. program.</p>
                    <p>
                        You can disregard this email if you posted back your headphones in the prepaid satchel in the last couple of days.
                    </p>
                    <p>
                        <b>Still waiting on your pre-paid satchel in the mail?</b>
                        Please Contact Support
                    </p>
                    <p>
                        <b>Email:</b> malikrizwan1076@gmail.com
                        <br />
                        <b>Phone:</b> +92 3249422392
                    </p>
                    <p>Please note that you have 45 days from the Sony purchase that unlocked this offer to complete your trade-in.</p>
                    <button className='btn'>Contact Support</button>
                    <div className="track-progress-footer">
                        <div className="icon">
                            <FontAwesomeIcon icon="fa-brands fa-instagram" className='insta' />
                            <FontAwesomeIcon icon="fa-brands fa-facebook" className='fb' />
                        </div>
                        <a href="#">www.ecoactiv.com.au</a>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Recive
