import React, {useRef, useState,useEffect} from "react"
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { propTypes } from "react-bootstrap/esm/Image"
import FadeInSection from "../fadeinsection";
import { FaD } from "react-icons/fa6";



export function FiltersCard (props) {
    const boxVariant = {
        visible: { opacity: 1, scale: 2 },
        hidden: { opacity: 0, scale: 0 },
      }
      const control = useAnimation()
const [ref, inView] = useInView()

useEffect(() => {
    if (inView) {
      control.start("visible");
    } else {
      control.start("hidden");
    }
  }, [control, inView]);

    
    const {icon, name,about} = props
    return( 
//         <motion.div
// //           ref={ref}
// //           variants={boxVariant}
// //   initial="hidden"
// //   animate={control}
// //   className="box"
// >
<div key={name} className="filter">
         <FadeInSection>  
             <div className="filter-border">
            <i className="filter-icon">{icon}</i> 
            <p>{name}</p>
            <p>{about}</p>
            </div>
                </FadeInSection>       

    </div>     
    // </motion.div>

    )
}