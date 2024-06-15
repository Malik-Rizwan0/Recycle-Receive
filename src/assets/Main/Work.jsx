import React from 'react'
import './Work.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeadphonesSimple, faRectangleList, faTicket } from '@fortawesome/free-solid-svg-icons';
import { library } from '@fortawesome/fontawesome-svg-core';

library.add(faRectangleList , faHeadphonesSimple , faTicket);

function Work() {
  return (
    <>
      <div className=" text-center  Work">
        <h4>
           Here's how it works
        </h4>
        <div className=" grid md:grid-cols-2 lg:grid-cols-4 cards">
            <div className="card">
                <div className="cardHead">
                <FontAwesomeIcon icon="fa-solid fa-rectangle-list" className='fa-solid'/>
                </div>
                <div className="cardheading">
                  <div className="num">
                    1
                  </div>
                  <h3>Fill out the form</h3>
                </div>
                <p className="cardDesc">
                Share your details so we know where to send your satchel and who’s redeeming the cashback.
                </p>
            </div>
            <div className="card">
                <div className="cardHead">
                <FontAwesomeIcon icon="fa-solid fa-headphones-simple" className='fa-solid'/>
                </div>
                <div className="cardheading">
                  <div className="num">
                    2
                  </div>
                  <h3>Send your headphones</h3>
                </div>
                <p className="cardDesc">
                Fill up the satchel with accepted headphones and post it back for recycling.
                </p>
            </div>
            <div className="card">
                <div className="cardHead">
                <FontAwesomeIcon icon="fa-solid fa-ticket" className='fa-solid'/>
                </div>
                <div className="cardheading">
                  <div className="num">
                    3
                  </div>
                  <h3>Get your gift card</h3>
                </div>
                <p className="cardDesc">
                Once we receive and process your headphones, you’ll receive your digital gift card to your nominated email address.
                </p>
            </div>
            <div className="card">
                <div className="cardHead">
                  <h2 >Sony</h2>
                </div>
                <div className="cardheading">
                  <div className="num">
                    4
                  </div>
                  <h3>Shop with Sony & Recycle with Ecoactiv</h3>
                </div>
                <p className="cardDesc">
                Shop the latest Sony products and recycle your ewaste all year round with Ecoactiv.
                </p>
            </div>
        </div>
      </div>
    </>
  )
}

export default Work
