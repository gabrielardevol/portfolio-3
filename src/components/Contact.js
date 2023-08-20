import {useState, useRef, useEffect} from 'react';
import React from 'react';
import "../style/Contact.css";
import { useTranslation } from 'react-i18next';
import i18n from '../i18n.js'; // no esborrar



const Contact = React.forwardRef((props, ref) => {

  const { t } = useTranslation();
  const contactRef = useRef()
  // const [contactHeight, setContactHeight] = useState()
  // const [contactWidth, setContactWidth] = useState()
  // const [contactClass, setContactClass] = useState("horizontal")

  const handleContactLayout = () => {

  //   if (props.index === 3) {
  //     const width = contactRef.current.getBoundingClientRect().width
  //     const height = contactRef.current.getBoundingClientRect().height
  //     setContactHeight(height)
  //     setContactWidth(width)
  //     setContactClass(()=>{
  //       if (width < 160 ){return "vertical-contact"} else if ( height < 250){return "horizontal-contact hide-pfp"}else {return "horizontal-contact"}
  //     })
  //   }
  }

  useEffect(() => {
    window.addEventListener('click', handleContactLayout);
    window.addEventListener('resize', handleContactLayout)
  }, []);
  return (
    <>
      <div id="contact"
      // className={contactClass}
      ref={contactRef}
       >
        <div id="pfp-container">
          <div id="pfp" style={{}}>
          </div>
        </div>
        <div >
          <ul id="contact-links">
            <li><a href="https://www.linkedin.com/in/gabrielardevol/" target="_blank">LindekIn</a></li>
            <li><a href="https://github.com/gabrielardevol" target="_blank">GitHub</a></li>
            <li><a href="https://www.behance.net/gabrielardvol" target="_blank">Behance</a></li>
            <li><a href="https://codepen.io/gabrielardevol/" target="_blank">CodePen</a></li>
          </ul>
          <ul id="contact-list">
            <li>{t('contact.mail')}: artsdevol@gmail.com</li>
            <li>whatsapp: +34 646 18 16 10</li>
            <li>{t('contact.bcnspain')}</li>
          </ul>
        </div>
      </div>
    </>
  );
});

export default Contact;
