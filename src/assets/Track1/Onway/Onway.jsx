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
            <div className="Onway">
                <img className='ecoactiv-logo' src={Ecoactiv} alt="Ecoactiv" />
                <h2>Your satchel is on its way <FontAwesomeIcon icon="fa-solid fa-truck" flip="horizontal" style={{ color: "#ffffff", }} /></h2>
                <div className="parcelBag">
                    <img src={ParcelBag} alt="" className="m-auto " />
                </div>
            </div>
        </>
    )
}

export default Onway
