import React from 'react'
import './TrackProgress.css'
import Pic1 from './trackWaste.png';
import Pic2 from './trackStainless.png';
import Pic3 from './trackTree.png';
import Logo from './Ecoactiv.png';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faFacebook, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { NavLink } from 'react-router-dom';

library.add(faInstagram, faFacebook);

function TrackProgress() {
    return (
        <div className='king'>
            <div className="trackProgress">
                <div className="logo">
                    <img src={Logo} alt="logo" />
                </div>
                <h4>Here’s the impact you’re about make</h4>
                <div className="data">
                    <i>Hi Sir,</i>
                    <p className="thank">
                        Thank you for choosing to recycle your headphones through the <b>RECYCLE. RECEIVE program. </b>
                        <br />
                        <p>
                            Your single act of recycling has a far-reaching impact.
                        </p>
                    </p>
                    <div className="Track-progress-card">
                        <div className="img">
                            <img src={Pic1} alt="Waste" />
                        </div>
                        <h5>
                            Divert waste from landfills & prevent toxic leaching
                        </h5>

                    </div>
                    <div className="Track-progress-card">
                        <div className="img">
                            <img src={Pic2} alt="Stainless" />
                        </div>
                        <h5>
                            Materials recovered for future manufacturing
                        </h5>
                    </div>
                    <div className="Track-progress-card">
                        <div className="img">
                            <img src={Pic3} alt="Tree" />

                        </div>
                        <h5>
                            Trees planted on your behalf in the Daintree
                        </h5>
                    </div>
                    <NavLink to='/Satchel1'><button className="btn">
                        Track Progress
                    </button></NavLink>
                    <div className="track-progress-footer">
                        <div className="icon">
                            <FontAwesomeIcon icon="fa-brands fa-instagram" className='insta' />
                            <FontAwesomeIcon icon="fa-brands fa-facebook" className='fb'/>
                        </div>
                        <a href="#">www.ecoactiv.com.au</a>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default TrackProgress
