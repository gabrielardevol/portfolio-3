import React from 'react';
import '../style/SecondLayout.css';
import { useTranslation } from 'react-i18next';
import i18n from '../i18n.js'; // no esborrar

const Layout = React.forwardRef((props, ref) => {
   return (
    <div id="super-layout" className={props.superLayout } >
      <div ref={ref} id="layout" className={props.layoutClass} style={{  transition: "all 0.7s ease"}}>
        {props.children}
      </div>
      <SecondLayout hideSecondLayout={props.hideSecondLayout}/>
    </div>
  );
});

const SecondLayout = (props) => {
  const { t } = useTranslation();

  return (
    <div id="second-layout">
      <div style={{position: "relative"}}>
        <button id="close-button" onClick={props.hideSecondLayout}>X</button>
        <button id="previmg-button"> &lt; </button>
        <button id="nextimg-button">&gt; </button>
      </div>
      <div style={{overflow: "auto", height: "50%"}}>
        <div>
          <h2>{t('orbits.title')}</h2>
          <div>
            <ul id="project-links">
              <li><a>GitHub</a></li>
              <li><a>Figma</a></li>
              <li><a>Codepen</a></li>
            </ul>
          </div>
        </div>
        <div >
          <p style={{textAlign: "end", color: "grey"}}>00/00/00</p>
          <p>{t('orbits.title')}</p>
        </div>
      </div>
    </div>
  )
}

export default Layout;
