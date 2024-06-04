import React, { useRef } from 'react'

import headphone from '../Main/Group 9948.png'
import './Satchel1.css'
import Sony from "./Group 8759.png"
import Way from './Group 10158.png'
import Receive from './Group 9200.png'
import Gift from './Group 9199.png'

function Satchel1() {
  const innerForm = useRef()
  const btn = useRef()
  const btn2 = useRef()
  const receive = useRef()
  const gift = useRef()
  const num2 = useRef()
  return (
    <>
      <div className="container satchel1 ">
        <div className="grid grid-cols-12 gap-3">
          <div className=" col-span-4">
            <div className="uper-left">
              <div className="flex justify-end items-center">
                <div className=' rec1 '>
                  <div className='RECYCLE'> RECYCLE.</div>
                  <div className='RECEIVE'> RECEIVE.</div>
                </div>
                <div className="satchel1-icon-rec">
                  <img src={headphone} alt="" />
                </div>
              </div>
              <div className="satchel1-sony">
                <img src={Sony} alt="" />
              </div>

            </div>
            <div className="lower-left">
              <dl>
                <dt>Overview</dt>
                <dd>Ecoactiv have partnered with Sony to offer Sony customers the ability to recycle their old or unwanted headphones and receive an $80 gift card.</dd>
                <dt>Eligibility</dt>
                <dd>Only available to Sony customers who have made a recent headphone purchase. Only Apple, Bose, Panasonic and Sony branded headphones are accepted for recycling as part of the program. </dd>
                <br />
                <dt><u>Term & Condition</u></dt>
                <br />
                <dd> <b>Offer Expiry Date:</b> 45 days from the Sony purchase that unlocked this offer.</dd>
              </dl>
            </div>
          </div>
          <div className="col-span-8 section">
            <div className="flex justify-between ">
              <div className="heading">
                <h2>Recycle your old headphones & receive $80</h2>
                <p>Track your progress below. Have a question? Contact us <u><a href="https://wa.me/+923249422392?text= I have seen your website, and I need some help related to web development." >here</a></u>.</p>
              </div>
              <button type="button" className='btn flex items-center justify-between'>STATUS: IN PROGRESS <div className="progress"></div></button>
            </div>
            <div className="Satchel1-imgs flex items-end">
              <img src={Way} alt=" Satchel " />
              <img ref={receive} onClick={() => { receive.current.style.opacity = '1'; num2.current.style.backgroundColor= '#92E89D'; num2.current.style.color= '#ffff'

              }} src={Receive} alt="HeadPhone" />
              <img ref={gift} onClick={() => {
                if (receive.current.style.opacity === '1') {
                  gift.current.style.opacity = '1';
                }
                else {
                    alert ("Please Enter Your Details")
                }
              }} src={Gift} alt="Gift" />
            </div>

            <h4 className='Satchel1-action'>
              Your Action items
            </h4>
            <div className="Satchel1-form1">
              <div className="heading p-2 flex justify-between">
                <p className='flex'>
                  <div className="num">1</div>
                  <p>Enter your details to claim the offer</p>
                </p>
                <div className="btn" ref={btn} onClick={() => { innerForm.current.style.display = "block"; btn.current.style.display = 'none'; btn2.current.style.display = 'block' }}>view</div>
                <div className="btn2" ref={btn2} onClick={() => { innerForm.current.style.display = "none"; btn.current.style.display = 'block'; btn2.current.style.display = 'none' }}>close</div>
              </div>
              <div ref={innerForm} className="Satchel-form1-inner">
                <input type="text" placeholder='Enter your full name' />
                <div className="half flex justify-center">
                  <input className='half' type="text" placeholder='Enter your phone' />
                  <input className='half' type="text" placeholder='Enter your mail' />
                </div>
                <input type="text" placeholder='Enter your Address' />
              </div>
            </div>
            <div className="Satchel1-form1">
              <div className="heading p-2 flex justify-between">
                <p className='flex'>
                  <div className="num2" ref={num2}>2</div>
                  <p>Fill and post back your satchel with your headphones inside</p>
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-end Satchel1-contactus">
              
              <a href="https://wa.me/+923249422392">Contact support</a>
        </div>
      </div>
    </>
  )
}

export default Satchel1
