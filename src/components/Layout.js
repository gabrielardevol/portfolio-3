import React from 'react';
import '../style/SecondLayout.css';
import { useTranslation } from 'react-i18next';
import i18n from '../i18n.js'; // no esborrar
import projects from '../projects';


const Layout = React.forwardRef((props, ref) => {
   return (
    <div id="super-layout" className={props.superLayout } >
      <div ref={ref} id="layout" className={props.layoutClass} style={{  transition: "all 0.7s ease"}}>
        {props.children}
      </div>
      <SecondLayout project={props.project} hideSecondLayout={props.hideSecondLayout}/>
    </div>
  );
});

const SecondLayout = (props) => {
  const { t } = useTranslation();

  const project = props.project
  return (
    <div id="second-layout">
      <div style={{position: "relative"}}>
        <button id="close-button" onClick={props.hideSecondLayout}>X</button>
        <button id="previmg-button"> &lt; </button>
        <button id="nextimg-button">&gt; </button>
      </div>
      <div style={{overflow: "auto", height: "50%"}}>
        <div>
          <h2>{t('projects.'+project+'.title')}</h2>
          <div>
            <ul id="project-links">
            {Object.keys(projects[project].links).map((linkKey) => (
              <li style={{width: 100/Object.keys(projects[project].links).length + "%"}}><a target="_blank" href={projects[project].links[linkKey]}>{linkKey}</a></li>
            ))}
            </ul>
          </div>
        </div>
        <div >
          <p style={{textAlign: "end", color: "grey"}}>{projects[project].date}</p>
          <p dangerouslySetInnerHTML={{ __html: t('projects.'+project+'.content') }}></p>
          {/* <p>{t('projects.'+project+'.content')}</p> */}
        </div>
      </div>
    </div>
  )
}

export default Layout;
