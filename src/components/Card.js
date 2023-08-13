import { useEffect, useRef, useState } from 'react';
import '../style/Card.css';
import React from 'react';
import AboutMe from '../components/AboutMe.js'
import Contact from '../components/Contact.js'
import Stack from '../components/Stack.js'
import Projects from '../components/Projects.js'

import getCardClass from '../functions/getCardClass.js'
import getProjectsLayout from '../functions/getProjectsLayout.js'
import getStackLayout from '../functions/getStackLayout.js'

//  card has an intern layout with three variations subject to its size: .horizontal-top , .vertical-left , horizontal-left
//  this design is intended to show an harmonic composition, and adapt the text box to the size of the card;
//  so theres not too much or too little text.

const Card =  (props) => {
  const cardRef = useRef()
  const titleRef = useRef() // is it being used?
  const [cardClass, setCardClass] = useState(props.defaultCardClass)
  const projectsRef = useRef()
  const stackRef = useRef()
  const contactRef = useRef()
  const aboutMeRef = useRef()


  const [projectHeight, setProjectHeight] = useState()
  const [projectWidth, setProjectWidth] = useState()
  const [projectClass, setProjectClass] = useState()
  const [lineClamp, setLineClamp] = useState()

  const [contactHeight, setContactHeight] = useState()
  const [contactWidth, setContactWidth] = useState()
  const [contactClass, setContactClass] = useState("horizontal")


  const setClassToCards = () => {
    const cardSizes = cardRef.current.getBoundingClientRect();
    const newCardClass = getCardClass(cardSizes);
    setCardClass(newCardClass);
  }

  const handleProjectsLayout = () => {
    if (props.index === 4) {
    const pLayout = getProjectsLayout(projectsRef.current.getBoundingClientRect().width, projectsRef.current.getBoundingClientRect().height)
    setProjectHeight(pLayout.height)
    setProjectWidth(pLayout.width)

    document.querySelector("#projects-container").style.gridAutoFlow = pLayout.style.gridAutoFlow
    document.querySelector("#projects-container").style.gridTemplateColumns = pLayout.style.gridTemplateColumns
    document.querySelector(".projects").classList.add(pLayout.addClass)
    document.querySelector(".projects").classList.remove(pLayout.removeClass)
    document.querySelector(".projects").style.overflow = pLayout.style.overflow

    setLineClamp(pLayout.lineClamp)

    // document.querySelector(".projects").style.overflowY  = pLayout.style.overflowY



  }}
  const handleStackLayout = () => {
    if (props.index === 2) {
      const sLayout = getStackLayout(stackRef.current.getBoundingClientRect().width, stackRef.current.getBoundingClientRect().height)
      stackRef.current.style.flexFlow = sLayout.flexFlow
    }
  }
  const handleContactLayout = () => {
    if (props.index === 3) {
      const width = contactRef.current.getBoundingClientRect().width
      const height = contactRef.current.getBoundingClientRect().height
      setContactHeight(height)
      setContactWidth(width)
      setContactClass(()=>{
        if (width < 160 ){return "vertical-contact"} else if ( height < 200){return "horizontal-contact hide-pfp"}else {return "horizontal-contact"}
      })
    }
  }

  const handleLayout = () => {
    setClassToCards()
    handleProjectsLayout()
    handleStackLayout()
    handleContactLayout();
  }
  const handleResize = () => { //changes cards appearence (not size) when grid changes

    let startTime = performance.now();
    let duration = 700; // Duration in milliseconds
    let interval = 1000 / 15; // Interval in milliseconds (30 frames per second)

    const animateLayout = (timestamp) => {
      let elapsed = timestamp - startTime;
      if (elapsed < duration) {
        if (elapsed >= interval) {
            handleLayout();
            startTime = timestamp;
        }
        requestAnimationFrame(animateLayout);
      }
    };
    requestAnimationFrame(animateLayout);
  };

  useEffect(() => {
    handleLayout()
  }, []);

  useEffect(() => {
    window.addEventListener('resize', handleResize);
    window.addEventListener('click', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
      window.addEventListener('click', handleResize);
    };
  }, []);

  const handleCardClick = (e) => {
    props.resizeLayoutGrid(e);
  }

  return (
    <div data-index={props.index} onClick={handleCardClick} style={{gridArea: "card-"+props.index}} ref={cardRef} className={"card " + cardClass}>
      <div>
        <h2 ref={titleRef} style={{whiteSpace: "nowrap"}} className="padding">
          {props.title}
        </h2>
      </div>
      { props.index === 1 && <AboutMe ref={aboutMeRef} /> }
      { props.index === 2 && <Stack ref={stackRef} /> }
      { props.index === 3 && <Contact contactClass={contactClass} ref={contactRef} height={contactHeight} width={contactWidth}/> }
      { props.index === 4 && <Projects lineClamp={lineClamp} ref={projectsRef} unfoldSecondLayout={props.unfoldSecondLayout} projectHeight={projectHeight} projectWidth={projectWidth} /> }
    </div>
  )
}

export default Card
