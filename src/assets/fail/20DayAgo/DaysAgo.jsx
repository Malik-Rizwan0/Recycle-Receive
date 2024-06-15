import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import Ecoactiv from "../Haven't/image.png"

function DaysAgo() {
    return (
        <>
            <div className="Recive r-width">
                <img src={Ecoactiv} alt="" />
                <div className="Recive-data">
                    <p>Hi Sir,</p>
                    <p>
                        You started trading your RECYCLE. RECEIVE trade-in process for your old headphones 20 days ago.
                    </p>
                    <p>
                        You have 25 days left to complete your trade-in to receive the $80 gift card from Sony.
                    </p>
                    <p>
                        <b>Still waiting on your pre-paid satchel in the mail?</b>
                        <br />
                        Please Contact Support
                    </p>
                    <p>
                        <b>Email:</b> malikrizwan1076@gmail.com
                        <br />
                        <b>Phone:</b> +92 3249422392
                    </p>
                    <p>
                        <b>
                            Haven’t had a chance to post back your satchel?
                        </b>
                        <br />
                        If you have received your satchel but have not yet posted it back with your headphones inside, please do so immediately. Satchels are pre-paid and can be dropped at any Australia Post parcel drop-off location
                    </p>
                    <p>
                        <b>
                        Concerned about your trade-in status?
                        </b>
                        <br />
                        If you’ve returned your satchel but the status hasn’t updated to “Satchel received at recycling facility,” please be patient. We’re on the lookout for your package. Once received, we’ll process your $80 gift card to your email within 14 days.
                    </p>
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

export default DaysAgo
