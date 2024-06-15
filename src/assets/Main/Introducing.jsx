import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowsRotate, faHeadphonesSimple, faPlay } from '@fortawesome/free-solid-svg-icons';
import { library } from '@fortawesome/fontawesome-svg-core';

library.add(faPlay);
import './Introducing.css'

function Introducing() {
    return (
        <>
            <div className="grid sm:grid-cols-1 md:grid-cols-2 introducing">
                <div className="sky">
                    <div className="blue">
                        PLACEHOLDER FOR IMPACT DASHBOARD
                    </div>
                </div>
                <div className="intro-left">
                    <h4>
                        Introducing the  Sustainability Scorecard
                    </h4>
                    <p>
                        The best part of the program starts when the items traded in arrive at the accredited recycling facilities. As items enter the circular economy, participants will receive insights through a personalised Sustainability Scorecard. This first-of-its-kind scorecard and level of visibility made possible by Ecoactiv, allows participants to effortlessly track their waste diversion and the conservation of valuable materials.
                    </p>
                </div>
            </div>
            <div className="grid sm:grid-cols-1 md:grid-cols-2 introducing2">
                <div className="intro2-left">
                    <h4>
                        Recycle with confidence.
                        Buy with an easy conscience.
                    </h4>
                    <p>
                        Our aim with the program is to empower customers and the community to embrace recycling with unwavering confidence, knowing that their actions yield a positive environmental impact. Beyond recycling, this commitment extends to your next purchase, where responsible disposal options for pre-loved items are available, further supporting our collective journey towards a greener tomorrow.

                        Together, we’re shaping a world where sustainable choices empower us all.

                    </p>
                </div>
                <div className="blue2">
                    <FontAwesomeIcon icon="fa-solid fa-play" style={{ color: "#ffffff", fontSize: '60px' }} />
                    <div className="">PLACEHOLDER FOR VIDEO / IMAGE OF RECYCLING PROCESS</div>
                </div>
            </div>
        </>
    )
}

export default Introducing
