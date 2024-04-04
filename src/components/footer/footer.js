import "./footer.css"
import Accordion from 'react-bootstrap/Accordion';
import logo from "../../assets/alphasnifferbg.jpg"
import { FaTelegram } from "react-icons/fa"
import { FaTwitter } from "react-icons/fa"
import { FaMessage } from "react-icons/fa6"


export function Footer() {
    return(
        <footer id="footer" className="footer-container">
      <div className="copyright">
        <img src={logo}/>
        <small>Copyright © 2024 Alpha Sniffer. All rights reserved</small>
      </div>
      <div className="footer-icons">
      <a href="https://t.me/alphasnifferportal"><FaTelegram/><p>t.me/alphasnifferportal</p></a>
        
        <a href="https://x.com/alphasnifferbot"><FaTwitter/><p>alphasnifferbot</p></a>
        <a href="mailto:support@dexsniffer.io"><FaMessage/><p>support@dexsniffer.io</p></a>
      </div>
      <div>
 
  
      </div>
        </footer>
    )
}