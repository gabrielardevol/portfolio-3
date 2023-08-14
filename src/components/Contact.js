import {useState, useRef, useEffect} from 'react';
import React from 'react';
import "../style/Contact.css"

const Contact = React.forwardRef((props, ref) => {
  const [containerHeight, setContainerHeight] = useState("")
    const handleContainerResize = () => {
      // const headerHeight = document.querySelector("[data-index='3'] div:first-child").height
      // setContainerHeight(ref.current.getBoundingClientRect().height)
      // console.log(document.querySelector("[data-index='3'] div:first-child"))
      // setContainerWidth(ref.current.getBoundingClientRect().width)
    }
    useEffect(() => {
      window.addEventListener('resize', handleContainerResize);
      window.addEventListener('click', handleContainerResize);
      return () => {
        window.removeEventListener('resize', handleContainerResize);
        window.addEventListener('click', handleContainerResize);
      };
    }, []);

  // console.log(ref.current.getBoundingClientRect)
  return (
    <>
      <div id="contact" className={props.contactClass} ref={ref} >
        <div id="pfp-container">
          <div id="pfp" style={{backgroundImage: `url(${process.env.PUBLIC_URL}/pfp.png)`,}}>
          </div>
        </div>
        <div style={{height: containerHeight }}>
          <ul>
            <li>LindekIn</li>
            <li>GitHub</li>
            <li>CodePen</li>
            <li>Behance</li>
          </ul>
          <ul>
            <li>mail: artsdevol@gmail.com</li>
            <li>whatsapp: +34 646 18 16 10</li>
            <li>Barcelona, Spain</li>
          </ul>
        </div>
      </div>
    </>
  );
});

export default Contact;
