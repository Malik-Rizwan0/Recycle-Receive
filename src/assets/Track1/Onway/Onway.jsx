import React from 'react'
import './Onway.css'
import Ecoactiv from '../Ecoactiv.png'
import ParcelBag from './parcel_bag_front.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTruck } from '@fortawesome/free-solid-svg-icons';
import { library } from '@fortawesome/fontawesome-svg-core';

library.add(faTruck);

function Onway() {
    return (
        <>
            <div className="Onway  r-width">
                <img className='ecoactiv-logo' src={Ecoactiv} alt="Ecoactiv" />
                <h2>Your satchel is on its way <FontAwesomeIcon icon="fa-solid fa-truck" flip="horizontal" style={{ color: "#ffffff", }} /></h2>
                <div className="parcelBag">
                    <img src={ParcelBag} alt="" className="m-auto " />
                </div>
                <div className="Onway-data r-width-data">
                    <p>Hi Sir,</p>
                    <p>Your satchel has been dispatched and will arrive at the following address:</p>
                    <p><b>123 Street Name Sydney NSW Australia</b></p>
                    <p>if you don’t receive your satchel within 7 days, please contact customer service.</p>
                    <p>
                        <b>Email:</b> malikrizwan1076@gmail.com
                        <br />
                        <b>Phone:</b> +92 3249422392
                    </p>
                    <p>Please note that you have 45 days from the Sony purchase that unlocked this offer to complete your trade-in.</p>
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
        </>
    )
}

export default Onway
