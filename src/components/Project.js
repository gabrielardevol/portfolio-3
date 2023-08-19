import i18n from '../i18n.js'; // no esborrar
import { useTranslation } from 'react-i18next';
import projects from '../projects.js';
import React from 'react';
import {useState, useRef, useEffect} from 'react';
import getProjectsLayout from '../functions/getProjectsLayout.js';


const Project = React.forwardRef((props, ref) => {
  const { t } = useTranslation();
  const projectTitle = props.title;
  const hashtags = projects[props.title].hashtags
  const projectRef = useRef()

  return (
    <div ref={projectRef} onClick={props.unfoldSecondLayout} id={projectTitle} className="project prj" style={{height: props.projectHeight, width: props.projectWidth}}>

      <div style={{  }} className="prj">
        <div className="prj" style={{height: "100%", position: "relative", overflow: "hidden"}}>
          {/* <img src={"../images/thumbnails/" + projectTitle}></img> */}
          <img alt="" src={projects[projectTitle].thumbnail} style={{width: "100%", opacity: 0.8}}></img>
          <div className={"prj p-hashtags"}>
            {hashtags.map((project, index) => (
            <div key={index} className="prj">{project}</div>
            ))}
          </div>
        </div>
      </div>

      <div className="prj" style={{}}>
        <div className="padding prj">
          <h3 className="prj">{t('projects.' + projectTitle + '.title')}</h3>
          <p className="prj" dangerouslySetInnerHTML={{ __html: t('projects.'+projectTitle+'.content') }} style={{margin: "0px", padding: "0px"}}></p>
        </div>
      </div>

    </div>
  );
});

export default Project;
