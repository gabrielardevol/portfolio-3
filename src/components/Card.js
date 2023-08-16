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

import { useTranslation } from 'react-i18next';
import i18n from '../i18n.js'; // no esborrar

const Card =  (props) => {
  const cardRef = useRef()
  const titleRef = useRef() // is it being used?
  const [cardClass, setCardClass] = useState(props.defaultCardClass)
  const projectsRef = useRef()
  const stackRef = useRef()
  const contactRef = useRef()
  const aboutMeRef = useRef()
  const [skelletonState, setSkelleton] = useState("skelleton")

  const [projectHeight, setProjectHeight] = useState()
  const [projectWidth, setProjectWidth] = useState()

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
    document.querySelector("#projects-container").style.gridTemplateColumns = pLayout.style.gridTemplateColumns
    document.querySelector(".projects").classList.add(pLayout.addClass)
    document.querySelector(".projects").classList.remove(pLayout.removeClass)
    document.querySelector(".projects").style.overflow = pLayout.style.overflow
    document.querySelector("#projects-container").style.gridAutoFlow = pLayout.style.gridAutoFlow
    }
  }
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
        if (width < 160 ){return "vertical-contact"} else if ( height < 250){return "horizontal-contact hide-pfp"}else {return "horizontal-contact"}
      })

    }
  }
  const handleLayout = () => {

    setClassToCards()
    handleProjectsLayout()
    handleStackLayout()
    handleContactLayout();
  }

  const skelletOn = () => {
    if(window.innerWidth >= 480){
      setSkelleton("skelleton");
      handleLayout()
      document.querySelector("#second-layout").classList.remove("non-skelleton")
      document.querySelector("#second-layout").classList.add("skelleton")

      setTimeout(() => {
        handleLayout()
      }, 700);

      setTimeout(() => {
        document.querySelector("#second-layout").classList.remove("skelleton")
        document.querySelector("#second-layout").classList.add("non-skelleton")
        setSkelleton("non-skelleton");
        handleLayout()
      }, 800);
    }
  }
  const handleClick = (e) => {
    if(e.target.classList.contains("skip-skelleton") == false && e.target.classList.contains("toggle") == false){
      skelletOn()
    }
  }

  const handleResize = () => { //changes cards appearence (not size) when grid changes

    // let startTime = performance.now();
    // let duration = 800; // Duration in milliseconds
    // let interval = 800 / 15; // Interval in milliseconds (30 frames per second)

    skelletOn()
    // const animateLayout = (timestamp) => {
    //   let elapsed = timestamp - startTime;
    //   if (elapsed < duration) {
    //     if (elapsed >= interval) {
    //       console.log("handleResize") //EL PROBLEMA ÉS AQUÍ


    //       startTime = timestamp;
    //     }
    //     requestAnimationFrame(animateLayout);
    //   }
    // };
    // requestAnimationFrame(animateLayout);
  };

  useEffect(() => {
    handleResize(); // This will run after the initial render

    // Clean-up function (not present in your code)
    return () => {
      // Any cleanup code you want to run when the component unmounts
    };
  }, []); // Empty dependency array


  useEffect(() => {
    window.addEventListener('resize', handleResize());
    window.addEventListener('click', (e) => handleClick(e));
    return () => {
      window.removeEventListener('resize', handleResize());
      window.removeEventListener('click', (e) => handleClick(e));
    };
  }, []);

  const handleCardClick = (e) => {
    props.resizeLayoutGrid(e);
  }

  const { t } = useTranslation();

  return (
    <div data-index={props.index} onClick={(e) => handleCardClick(e)} style={{gridArea: "card-"+props.index}} ref={cardRef} className={"card " + cardClass + " " + skelletonState}>
      <div>
        <h2 ref={titleRef} style={{whiteSpace: "nowrap", rotation: "180deg"}} className="padding">
          {props.title}
          {t(props.section + '.title')}
        </h2>
      </div>
      { props.index === 1 && <AboutMe ref={aboutMeRef} /> }
      { props.index === 2 && <Stack ref={stackRef} /> }
      { props.index === 3 && <Contact contactClass={contactClass} ref={contactRef} height={contactHeight} width={contactWidth}/> }
      { props.index === 4 && <Projects ref={projectsRef} unfoldSecondLayout={props.unfoldSecondLayout} projectHeight={projectHeight} projectWidth={projectWidth} /> }
    </div>
  )
}

export default Card
