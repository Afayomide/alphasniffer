import React, {useRef,useState,useEffect} from "react"
import "./getstarted.css"

function GetCopy (props) {
    const [isVisible, setVisible] = useState(true);


const domRef = React.useRef();

useEffect(() => {
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => setVisible(entry.isIntersecting));

    
    if (entries[0].isIntersecting) {
      
      // Not possible to set it back to false like this:
      setVisible(true);
      
      // No need to keep observing:
    }
  });

  observer.observe(domRef.current);

}, []);

   const {icon, name, about, button,link} = props
   return(
    <div key={name} ref={domRef}  className={`each-getstarted-card fade-in-section ${ isVisible ? 'is-visible' : '' }`}>
    <div className="get-started-icon-container">
        <p className="get-started-ic">{icon}</p>
        </div>
        <div className="get-started-texts">
        <p>{name}</p>
        <p className="get-about">{about}</p>
        <button className="get-started-button"><a href={link}>{button}</a></button>
        </div>
    </div>
   )
}

export default GetCopy