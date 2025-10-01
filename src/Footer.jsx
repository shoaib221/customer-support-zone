import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCopyright, faEnvelope } from "@fortawesome/free-regular-svg-icons";
import { faLinkedin, faXTwitter, faFacebook } from '@fortawesome/free-brands-svg-icons'

export const Footer = () => {


    return (
        <div id="footer" >

            <div id='footer-1'  >

                <div id="footer-2" >
                    <div className="header-1" >CS -- Ticket System</div>
                    <div className="text-col-1" >
                        In today’s fast-paced digital world, organizations across industries rely heavily on ticket systems to streamline customer service,
                        manage workflows, and ensure smooth communication. 
                        Whether it’s a technical support team, a service desk, or even event management, 
                        ticket systems have become an essential tool for efficiency and accountability.
                    </div>
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }} >
                    <div  className="header-2" >Company</div>
                    <div className="text-col-1" > About Us </div>
                    <div className="text-col-1" > Our Mission </div>
                    <div className="text-col-1" > Contact Sales </div>
                </div>


                <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }} >
                    <div className="header-2" >Services</div>
                    <div className="text-col-1" > Products & Services </div>
                    <div className="text-col-1" > Customer Stories </div>
                    <div className="text-col-1" > download Apps </div>
                </div>
                
                <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }} >
                    <div className="header-2" >Information</div>
                    <div className="text-col-1" > Privacy Policy </div>
                    <div className="text-col-1" > Terms & Conditions </div>
                    <div className="text-col-1" > Join Us </div>
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }} >
                    <div className="header-2" >Social Links</div>
                    <div className="text-col-1" > 
                        <FontAwesomeIcon icon={faLinkedin} />
                        @CS - Ticket System
                    </div>
                    <div className="text-col-1" > 
                        <FontAwesomeIcon icon={faXTwitter} />
                        @CS - Ticket System     
                    </div>
                    <div className="text-col-1" > 
                        <FontAwesomeIcon icon={faFacebook} />
                        @CS - Ticket System
                    </div>
                    <div className="text-col-1" > 
                        <FontAwesomeIcon icon={faEnvelope} />
                        support@cst.com
                    </div>
                </div>

            </div>

            <div style={{ paddingTop: '2rem', textAlign: 'center' }} >
                <FontAwesomeIcon icon={faCopyright} /> 2025 CS Ticket System. All Rights Reserved
            </div>

        </div>
    )
}