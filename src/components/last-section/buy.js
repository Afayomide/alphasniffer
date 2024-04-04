import React, {useRef,useState,useEffect} from "react"
import gecko from "../../assets/coingecko.svg";
import uniswap from "../../assets/uniswap.png";
import coinmarketcap from "../../assets/coinmarketcap.svg"
import tff from "../../assets/tff.png";
import "./last-section.css"
import FadeInSection from "../fadeinsection";

function WhereToBuy () {

    return(
        <>
        <FadeInSection>
        <div id="buy" className="where-to-buy">
          <h4>WHERE TO BUY</h4>
          <p> EXCHANGES</p>
          <button>
          <a href="https://app.uniswap.org/#/swap?outputCurrency=0xae9d553c85eef99c0ef9169f0d49ef33f5275f94">
            <img src={uniswap}/> uniswap
            </a>
          </button>
        </div>  

        <div id="partners">
           <h4>OUR PARTNERS</h4>
           <div className="partners">
           <div className="partners-img">
            <a href="https://www.coingecko.com/en/coins/dex-sniffer"><img src={gecko}/></a>
           <a href="https://coinmarketcap.com"> <img src={coinmarketcap}/> </a>
            </div>
           </div>  
           </div>
           </FadeInSection>
           </>
    )
}

export default WhereToBuy