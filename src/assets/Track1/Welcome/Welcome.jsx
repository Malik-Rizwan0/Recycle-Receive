import React from 'react'
import './Welcome.css'
import Pic1 from './Group 10144.png'
import Pic2 from './Group 10145.png'
import Pic3 from './Group 9433.png'
import Purse from './Group 10059.png'
import headPhone from "./Group 8439.png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faLinkedin, faSquareFacebook, faSquareInstagram, faSquareTwitter, faSquareWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { faArrowRightArrowLeft } from '@fortawesome/free-solid-svg-icons'

library.add(faSquareFacebook, faSquareTwitter, faSquareInstagram, faSquareWhatsapp, faLinkedin, faArrowRightArrowLeft);
function Welcome() {
  return (
    <>
      <div className="Welcome">
        <h2>
          Welcome To Your Sustainability Scorecard
        </h2>
        <div className="welcome-data">
          <div className="Welcome-links flex justify-between md:justify-end  py-4 px-2">
            Share to social
            <div >
              <FontAwesomeIcon icon="fa-brands fa-square-facebook" className="icon" />
              <FontAwesomeIcon icon="fa-brands fa-square-twitter" className="icon" />
              <FontAwesomeIcon icon="fa-brands fa-square-instagram" className="icon" />
              <FontAwesomeIcon icon="fa-brands fa-linkedin" className="icon" />
              <FontAwesomeIcon icon="fa-brands fa-square-whatsapp" className="icon" />
            </div>
          </div>
          <div className="Welcome-Cards flex justify-between items-baseline flex-col md:flex-row my-5">
            <div className="card text-center">
              <h3>Environmental Impact</h3>
              <img src={Pic1} alt="" />
              <p>waste diverted from landfill</p>
            </div>
            <div className="card text-center">
              <h3>HalfCut Contributions</h3>
              <img src={Pic2} alt="" />
              <p>trees planted in the Daintree rainforest</p>
            </div>
            <div className="card">
              <h3>Materials Recovered</h3>
              <img src={Pic3} alt="" />
              <p>
                <div className="flex items-center justify-between">
                  <div className="div flex justify-between items-center">
                    <div className="color1 rounded-full"></div>
                    <div className="data">Aluminium</div>
                  </div>
                  <div className="div flex justify-between items-center">
                    <div className="color2 rounded-full"></div>
                    <div className="data">Rubber</div>
                  </div>
                  <div className="div flex justify-between items-center">
                    <div className="color3 rounded-full"></div>
                    <div className="data">Copper</div>
                  </div>
                </div>
                <div className="flex justify-between">
                  <div className="div flex justify-between items-center">
                    <div className="color4 rounded-full"></div>
                    <div className="data">Plastic</div>
                  </div>
                  <div className="div flex justify-between items-center">
                    <div className="color5 rounded-full"></div>
                    <div className="data">Lead</div>
                  </div>
                  <div className="div flex justify-between items-center">
                    <div className="color6 rounded-full"></div>
                    <div className="data">other</div>
                  </div>
                </div>
              </p>
            </div>
          </div>
          <div className="lowerCards flex flex-col md:flex-row justify-between items-center my-8">
            <div className="card">
              <div className="card-header flex items-center">
                <img src={Purse} alt="Purse" />
                <div className="data mx-8">
                  <h3>$80.00</h3>
                  <h5>Gift Card</h5>
                </div>
              </div>
              <p className='flex items-center m-2'>
                <FontAwesomeIcon icon="fa-solid fa-arrow-right-arrow-left" className='faArrow' />
                $80.00 Gift Card
              </p>
            </div>
            <div className="card">
              <h4>Recent contributions</h4>
              <p className='flex items-center'>
                <img src={headPhone} alt="" className=' bg-slate-100 img-headPhone' />
                <b>Sony Headphone Trade-in</b>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Welcome
