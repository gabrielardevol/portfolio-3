import {useState, useRef} from 'react';
import React from 'react';
import "../style/AboutMe.scss";
import { useTranslation } from 'react-i18next';
import i18n from '../i18n.js'; // no esborrar



const AboutMe = React.forwardRef((props, ref) => {
  const [longBioStyle, setLongBio] = useState({display: "none"})
  const handleSwitch = (e) => {
   setLongBio( e.currentTarget.checked ? {display: "inline"} : {display: "none"} )
  }
  const { t } = useTranslation();

  return (
    <>
    <div className="padding" id="about-me">
      <div className="toggle skip-skelleton can-toggle demo-rebrand-2" >
        <input id="e" className="toggle skip-skelleton" type="checkbox" onClick={handleSwitch}/>
        <label htmlFor="e" className="toggle skip-skelleton">
          <div className="toggle skip-skelleton can-toggle__switch"  data-checked={t('aboutMe.toggle1')} data-unchecked={t('aboutMe.toggle2')}></div>
        </label>
      </div>
      <div style={{marginTop: "1em"}}>
        {t('aboutMe.1')}&nbsp;
        <LongBio style={longBioStyle}>{t('aboutMe.2')}</LongBio>&nbsp;
        {t('aboutMe.3')}&nbsp;
        <LongBio style={longBioStyle}>{t('aboutMe.4')}</LongBio>&nbsp;
        {t('aboutMe.5')}&nbsp;
        {/* <LongBio style={longBioStyle}><br/><br/><img src="https://placehold.co/600x400/EEE/31343C" alt=""/><br/><br/></LongBio> */}

      </div>
    </div>
    </>
  );
});

const LongBio = (props) => {
  return  (
    <span style={props.style}>
      {props.children}
    </span>
  )
}

export default AboutMe;

// penso que el punt de trobada entre l'art i la tecnologia és l'artesania, el 'craft'. El junior apren del senior
// de la mateixa manera que l'aprenent respecta al mestre. es diu que l'artesà necessita 10.000 hores de treball
// per convertir-se en mestre.
// recommendations:
// my mom: I'm proud of my son's website. It's colorful and blablabla. I'm proud of my son and I can feel near the day
// he will pay back the money I lend him.
// esclat:
// companys:
