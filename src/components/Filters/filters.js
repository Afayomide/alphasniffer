import React, {useRef, useState,useEffect} from "react"
import { filtersData } from "./filtersdata"
import { FiltersCard } from "./filterscard"
import "./filters.css"

 const ReadMore = ({children }) => {




        const text = children;
        const [isReadMore, setIsReadMore] = useState(true);
        const toggleReadMore = () => {
            setIsReadMore(!isReadMore);
        };
        return (
        <section  className={`filters-container`}>
        <h4 >Filters</h4>   
                   <div className="filters-no-title">
        <div className="filters">
                {isReadMore ? text.slice(0, 6) : text}
               
                 </div>
                  <button
                    onClick={toggleReadMore}
                    className="read-or-hide"
                >
                    {isReadMore ? "Show more" : " Show less"}
                  
                </button> 
                </div> 
        </section>
        );
    };
function Filters() {
   
    return(
        
        <ReadMore >
     {filtersData.map(FiltersCard)}
     </ReadMore>
  
    )
}


export default Filters