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
  const { t } = useTranslation();
  const cardRef = useRef()
  const titleRef = useRef() // is it being used?
  const [cardClass, setCardClass] = useState(props.defaultCardClass)
  // const projectsRef = useRef()
  // const stackRef = useRef()
  // const contactRef = useRef()
  // const aboutMeRef = useRef()
  const [skelletonState, setSkelleton] = useState("non-skelleton") // CANVIAR A "skelleton"

  // const [projectHeight, setProjectHeight] = useState()
  // const [projectWidth, setProjectWidth] = useState()

  // const [contactHeight, setContactHeight] = useState()
  // const [contactWidth, setContactWidth] = useState()
  // const [contactClass, setContactClass] = useState("horizontal")


  const setClassToCards = () => {
    const cardSizes = cardRef.current.getBoundingClientRect();
    const newCardClass = getCardClass(cardSizes);
    setCardClass(newCardClass);
  }

  const handleLayout = () => {
    setClassToCards()
  }

  // const handleProjectsLayout = () => {
  //   if (props.index === 4) {
  //   const pLayout = getProjectsLayout(projectsRef.current.getBoundingClientRect().width, projectsRef.current.getBoundingClientRect().height)
  //   setProjectHeight(pLayout.height)
  //   setProjectWidth(pLayout.width)
  //   document.querySelector("#projects-container").style.gridTemplateColumns = pLayout.style.gridTemplateColumns
  //   document.querySelector(".projects").classList.add(pLayout.addClass)
  //   document.querySelector(".projects").classList.remove(pLayout.removeClass)
  //   document.querySelector(".projects").style.overflow = pLayout.style.overflow
  //   document.querySelector("#projects-container").style.gridAutoFlow = pLayout.style.gridAutoFlow
  //   }
  // }
  // const handleStackLayout = () => {
  //   if (props.index === 2) {
  //     const sLayout = getStackLayout(stackRef.current.getBoundingClientRect().width, stackRef.current.getBoundingClientRect().height)
  //     stackRef.current.style.flexFlow = sLayout.flexFlow
  //   }
  // }
  // const handleContactLayout = () => {
  //   if (props.index === 3) {
  //     const width = contactRef.current.getBoundingClientRect().width
  //     const height = contactRef.current.getBoundingClientRect().height
  //     setContactHeight(height)
  //     setContactWidth(width)
  //     setContactClass(()=>{
  //       if (width < 160 ){return "vertical-contact"} else if ( height < 250){return "horizontal-contact hide-pfp"}else {return "horizontal-contact"}
  //     })

  //   }
  // }
  // const handleLayout = () => {

  //   setClassToCards()
  //   handleProjectsLayout()
  //   handleStackLayout()
  //   handleContactLayout();
  // }

  // const skelletOn = () => {
  //   if(window.innerWidth >= 480){
  //     setSkelleton("skelleton");
  //     handleLayout()
  //     document.querySelector("#second-layout").classList.remove("non-skelleton")
  //     document.querySelector("#second-layout").classList.add("skelleton")

  //     setTimeout(() => {
  //       handleLayout()
  //     }, 700);

  //     setTimeout(() => {
  //       document.querySelector("#second-layout").classList.remove("skelleton")
  //       document.querySelector("#second-layout").classList.add("non-skelleton")
  //       setSkelleton("non-skelleton");
  //       handleLayout()
  //     }, 800);
  //   }
  // }
  // const handleClick = (e) => {
  //   if(e.target.classList.contains("skip-skelleton") == false && e.target.classList.contains("toggle") == false){
  //     skelletOn()
  //   }
  // }

  // const handleResize = () => {
  //   skelletOn()
  // };

  // useEffect(() => {
  //   handleResize();
  // }, []);

  useEffect(() => {
  //   window.addEventListener('resize', handleResize());
  //   window.addEventListener('click', (e) => handleClick(e));
    window.addEventListener('click', handleLayout)
  //   return () => {
  //     window.removeEventListener('resize', handleResize());
  //     window.removeEventListener('click', (e) => handleClick(e));
  //   };
  }, []);

  const handleCardClick = (e) => {
     props.resizeLayoutGrid(e);
  }


  return (
    <div data-index={props.section} onClick={(e) => handleCardClick(e)} style={{gridArea: "card-"+props.index}} ref={cardRef} className={"card " + cardClass + " " + skelletonState}>
      <div>
        <h2 ref={titleRef} style={{whiteSpace: "nowrap", rotation: "180deg"}} className="padding">
          {props.title}
          {t(props.section + '.title')}
        </h2>
      </div>
      {props.children}
        </div>
  )
}

export default Card
