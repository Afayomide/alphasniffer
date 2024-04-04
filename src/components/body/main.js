import React, {useRef,useState,useEffect} from "react"
import "./body.css"
import GetCopy from "../getStarted/getStarted"
import GetStartedData from "../getStarted/getstartedData"
import Filters from "../Filters/filters"
import WhereToBuy from "../last-section/buy"
import eth from "../../assets/alphasniffer.png"
import { Faq } from "../faq/faq"


function Body() {



    return(
        <div  className='body-container' >
        <div className={`intro-section`}>
        <div className="greetings gradient-text">
        <p>Welcome To</p>
        <div className="typewriter">
       
<h1>Alpha Sniffer</h1>
        </div>
     
        </div>
           <div>
            <article className="greetings-article">
            Alpha Sniffer is providing a new ETH pair finder Bot with a built-in contract scanner and customised filters to let you find exactly the tokens you're looking for.<br/>
Whether you're a degen, a moderate trader, or a long-term holder.
            </article>
            
             <div  className="eth-container">
             <a href="#getstarted">
            <img src={eth}/>
            </a>
        </div>
        </div>
       </div>
        <div>   
        <h4 id="getstarted">Get Started</h4>
        <div  className="get-started">
            {GetStartedData.map(GetCopy)}     
            </div>      
            </div>


            <div id="filters">
        <div>
            <Filters/>
            </div>
            </div>
        <div>
            <WhereToBuy />
        </div>
        <div>
        <Faq/>
        </div>
        </div>
    )
}

export default Body