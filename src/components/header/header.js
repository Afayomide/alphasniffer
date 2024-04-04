import "./header.css"
import { BsSearch, BsCart2, BsHeart, BsInstagram, BsLinkedin } from 'react-icons/bs';
import { AiOutlinePhone, AiOutlineInbox, AiOutlineClose, AiOutlineTwitter, AiFillDelete} from 'react-icons/ai';
import { GiHamburgerMenu} from 'react-icons/gi';
import { BsTelegram} from 'react-icons/bs';
import { FaFacebookF} from 'react-icons/fa';
import { useState } from "react";
import { NavLink , Link } from "react-router-dom";
import { Badge, Button, Dropdown, Nav } from "react-bootstrap"
import { AnimatePresence, motion } from "framer-motion"
import logo from "../../assets/alphasnifferbg.jpg"


const Logovariants = {
  hidden: { opacity: 1,
    x: "-50vw"
  },
  visible: { opacity: 1,
    x: 0,
     transition: {
          type: "spring",
          duration: 1,
          stiffness: 20
     },
  }
}
const Cartvariants = {
  hidden: { opacity: 0,
    x: "50vw"
  },
  visible: { opacity: 1,
    x: 0,
     transition: {
          type: "spring",
          duration: 2
     },
  }
}

const Header = () => {


  const [show, setShow] = useState(false)

  const handleShowNav = () =>{
    setShow(prevState => !prevState)
  }

     
  return (
    <nav className="navbar">

<div className="topnav">

  <div className="telegram gradient-text">
     <a href="https://t.me/alphasnifferportal"><BsTelegram  className="cal"/> <p>Join Telegram</p></a>
  </div>
  <div className="others">
        
        <div className="dashboard-button">
        <Link to="/dashboard">
            <p>Dashboard</p>
            </Link>
        </div>
  </div>
</div>

        <div className="nav__container">
        
           <GiHamburgerMenu  className="icon open" onClick={handleShowNav}/>
        <div className="logo"
        >
                   <Link className="logo-text" to="/"><img className="nav-logo" src={logo}/>Alpha<span>Sniffer</span></Link>
            </div>

            <motion.div className="search"
            >
            <div className="nav-links">
           <a href="#filters">Filters</a>
           <a href="#buy">Buy</a>
           <a href="https://twitter.com/Dex_Sniffer">Twitter</a>
           <a href="#partners">Partners</a>

            </div>
            </motion.div>
            

            <motion.div className="cart__icons"
             initial="hidden"
             animate="visible"
             variants={Cartvariants}
            >
              <a href="mailto:support@dexsniffer.io" className="acct">
              <AiOutlineInbox className="icon acct" /> 
              </a>
             
           
              
            </motion.div>
        </div>

        <AnimatePresence>
     {
       show ?   <motion.div className="navbar__mobile"
       initial="hidden"
       animate="visible"
       variants={Logovariants}
       exit={{
         x: "-100vw",
         transition:{
           duration: 0.5
         }
       }}
      >
       
       <AiOutlineClose className="close" onClick={handleShowNav}/>
                 <div className="nav__links">
                         <a onClick={handleShowNav}>HOME</a>
                         <a href="https://t.me/alphasniffer" onClick={handleShowNav}>COMMUNITY</a>
                         <a href=" #filtersmall" onClick={handleShowNav}>ABOUT US</a>
                         <a href="mailto:support@dexsniffer.io" onClick={handleShowNav}>CONTACT US</a>
                  </div>
                       <div className="mobile__socials">
                         <a href="https://t.me/alphasniffer">  <BsTelegram className="scc"/></a>
                          <a href="https://x.com/alphasnifferbot"> <AiOutlineTwitter  className="scc"/></a>
                       </div>
       
   </motion.div> : null
     }
      </AnimatePresence>
    </nav>
    )
}

export default Header