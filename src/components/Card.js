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

const Card = React.forwardRef((props, ref) => {
  const { t } = useTranslation();
  const cardRef = ref
  const titleRef = useRef() // is it being used?
  const [cardClass, setCardClass] = useState(props.defaultCardClass)
  const [skelletonClass, setSkelletonClass] = useState("skelleton")
  // const projectsRef = useRef()
  // const stackRef = useRef()
  // const aboutMeRef = useRef()

  // const [projectHeight, setProjectHeight] = useState()
  // const [projectWidth, setProjectWidth] = useState()



  const setClassToCards = () => {
    const cardSizes = cardRef.current.getBoundingClientRect();
    const newCardClass = getCardClass(cardSizes);
    setCardClass(newCardClass);


  }

  const handleLayout = () => {
    // setClassToCards()
    // setTimeout(setClassToCards, 400);
    setTimeout(setClassToCards, 800);

    //   setSkelletonClass("skelleton")
    // setTimeout(() => {
    //   setSkelletonClass("non-skelleton")
    // }, 900);
    // }
  }

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

  useEffect(() => {
    handleLayout();
    setSkelletonClass("non-skelleton");

  }, []);

  useEffect(() => {
  //   window.addEventListener('resize', handleResize());
  //   window.addEventListener('click', (e) => handleClick(e));
    window.addEventListener('click', handleLayout)
  //   return () => {
  //     window.removeEventListener('resize', handleResize());
  //     window.removeEventListener('click', (e) => handleClick(e));
  //   };
  }, []);




  return (
    <div data-index={props.section} onClick={(e) => props.resizeLayoutGrid(e)} style={{gridArea: props.section}} ref={cardRef} className={"card " + cardClass + " " + skelletonClass}>
      <div>
        <h2 ref={titleRef} style={{whiteSpace: "nowrap", rotation: "180deg"}} className="padding ">
          {props.title}
          {t(props.section + '.title')}
        </h2>
      </div>
      {props.children}
        </div>
  )
})

export default Card
