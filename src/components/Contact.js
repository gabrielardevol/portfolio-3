import {useState, useRef, useEffect} from 'react';
import React from 'react';
import "../style/Contact.css";
import { useTranslation } from 'react-i18next';
import i18n from '../i18n.js'; // no esborrar

const Contact = React.forwardRef((props, ref) => {
  const { t } = useTranslation();


  return (
    <>
      <div id="contact" className={props.contactClass} ref={ref} >
        <div id="pfp-container">
          <div id="pfp" style={{backgroundImage: `url(${process.env.PUBLIC_URL}/pfp.png)`,}}>
          </div>
        </div>
        <div >
          <ul>
            <li>LindekIn</li>
            <li>GitHub</li>
            <li>CodePen</li>
            <li>Behance</li>
          </ul>
          <ul>
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
