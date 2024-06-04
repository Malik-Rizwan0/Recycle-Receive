import React from 'react'
import './Grow.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleCheck, faCircleLeft, faTicket, faTree, faTriangleExclamation } from '@fortawesome/free-solid-svg-icons';
import { library } from '@fortawesome/fontawesome-svg-core';

library.add(faTriangleExclamation, faCircleCheck, faTree, faTicket);

function Grow() {
    return (
        <>
            <div className="Grow">
                <h4>
                    Grow Your Impact through the Ecoactiv Circular Economy Hub
                </h4>
                <p className='p'>
                    As your pre-loved headphones enter the circular economy, you will receive insights through your Sustainability Scorecard through the Ecoactiv Circular Economy Hub.
                </p>
                <div className="grid gap-8 grid-cols-3 text-center">
                    <div className="card">
                        <div className="head">
                            <div className="Icon icon1 ">
                                <FontAwesomeIcon icon="fa-solid fa-triangle-exclamation" />
                                LANDFILL
                            </div>
                            Divert Waste from Landfill
                        </div>
                        <p>
                            <FontAwesomeIcon icon="fa-solid fa-circle-check" />
                            Prevent toxic leaching & protect the environment
                        </p>
                    </div>
                    <div className="card">
                        <div className="head">
                            <div className="Icon">
                                <FontAwesomeIcon icon="fa-solid fa-tree" />
                            </div>
                            Offset Carbon with halfcut
                        </div>
                        <p>
                            <FontAwesomeIcon icon="fa-solid fa-circle-check" />
                            Everytime you can recycle
                        </p>
                    </div>
                    <div className="card">
                        <div className="head">
                            <div className="Icon">
                                <div className="icon3">
                                    <FontAwesomeIcon icon="fa-solid fa-ticket" />
                                    {/* <FontAwesomeIcon icon="fa-solid fa-ticket-simple" className='ticket1' /> */}
                                </div>
                            </div>
                            Get Reawarded along the way
                        </div>
                        <p>
                            <FontAwesomeIcon icon="fa-solid fa-circle-check" />
                            Unlock new rewards
                        </p>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Grow
