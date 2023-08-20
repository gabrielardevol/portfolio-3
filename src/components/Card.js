import { useEffect, useRef, useState } from 'react';
import '../style/Card.css';
import React from 'react';
import getCardClass from '../functions/getCardClass.js'

import { useTranslation } from 'react-i18next';
import i18n from '../i18n.js'; // no esborrar

const Card = React.forwardRef((props, ref) => {
  const { t } = useTranslation();
  const [cardClass, setCardClass] = useState(props.defaultCardClass)
  const [skelletonClass, setSkelletonClass] = useState("skelleton")

  const setClassToCards = () => {
    const cardSizes = ref.current.getBoundingClientRect();
    const newCardClass = getCardClass(cardSizes);
    setCardClass(newCardClass);
  }

  const handleLayout = () => {
    setTimeout(setClassToCards, 800);
  }

  useEffect(() => {
    handleLayout();
    setSkelletonClass("non-skelleton");
    window.addEventListener('click', handleLayout)
    return () => {
      window.removeEventListener('click', handleLayout)
    };
  }, []);

  return (
    <div data-index={props.section} onClick={(e) => props.resizeLayout(e)} style={{gridArea: props.section}} ref={ref} className={"card " + cardClass + " " + skelletonClass}>
      <div>
        <h2 style={{whiteSpace: "nowrap", rotation: "180deg"}} className="padding ">
          {props.title}
          {t(props.section + '.title')}
        </h2>
      </div>
      {props.children}
        </div>
  )
})

export default Card
