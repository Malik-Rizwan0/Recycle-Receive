import React from 'react'
import './Unlock.css'
import ParcelBag from './Group 10185.png'
import Ecoactiv from '../Ecoactiv.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function Unlock() {
    return (
        <>
            <div className="Unlock r-width">
                <img className='ecoactiv-logo' src={Ecoactiv} alt="Ecoactiv" />
                <h2>Your satchel is on its way <FontAwesomeIcon icon="fa-solid fa-truck" flip="horizontal" style={{ color: "#ffffff", }} /></h2>
                <div className="parcelBag">
                    <img src={ParcelBag} alt="" className="m-auto " />
                </div>
                <div className="Unlock-data r-width-data">
                    <p>Hi Sir,</p>
                    <p>Thank you for recycling your headphones with Ecoactiv and helping reduce landfill waste. </p>
                    <p><b>You’ve unlocked a discount code.</b></p>
                    <h3>USE CODE: ECOACTIV10</h3>
                    <p>Pick from a range of Ready-Recycling solutions for different waste streams and use the code at checkout to get 10% off. </p>
                    <p className=''>Time to clear the clutter!</p>
                    <div className="flex justify-between list">
                        <ol className="left-list">
                            <li> 💻 e-waste</li>
                            <li> 🔋 Household batteries</li>
                            <li> 👕 Textiles & clothing</li>
                        </ol>
                        <ol className="right-list">
                            <li>💡 Light globes</li>
                            <li>💊 Medicinal blister packs</li>
                            <li>👓 Contact lens cases</li>

                        </ol>
                    </div>
                    <button className="btn">Shop Now</button>
                    <p><u>* Terms & conditions may apply</u></p>
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

export default Unlock
