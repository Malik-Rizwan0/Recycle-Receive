import React from 'react'
import footerImage from './footer.png';
import './Footer.css'
function Footer() {
    return (
        <>
            <footer className='grid md:grid-cols-1 lg:grid-cols-2 '>
                <div className='img'>
                    <img src={footerImage} alt="Footer" />
                </div>
                <div className="Question">
                    <h4>
                        Frequently asked questions
                    </h4>
                    <p>How is RECYCLE. RECEIVE. different compared to other
                        trade-in programs available in Australia?</p>
                    <p>
                        Who is Ecoactiv and what is the Ecoactiv Circular Economy Hub?
                    </p>
                    <p>
                        How long does it take for me to receive my gift card?
                    </p>
                    <p>
                        Can I take my headphones in-store to trade in?
                    </p>
                    <p>
                        What happens to the headphones I trade in once they are
                        received at the recycling facilities?
                    </p>
                    <p>
                        Are there any fees or costs associated with participating
                        in the program?

                    </p>
                    <p>
                        Are there any restrictions on the condition of headphones
                        I can trade in?
                    </p>
                    <p>
                        What brands of headphones are accepted?
                    </p>
                </div>
            </footer>
        </>
    )
}

export default Footer
