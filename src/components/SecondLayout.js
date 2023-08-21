import React, { useRef, useState, useEffect } from 'react';

import { useTranslation } from 'react-i18next';
import i18n from '../i18n.js'; // no esborrar
import projects from '../projects';

const SecondLayout = React.forwardRef((props, ref) => {
  const { t } = useTranslation();
  const project = props.project
  const imgRef = useRef()
  const images = projects[project].images

  let [imageIndex, setImageIndex] = useState(0)
  const nextImg = () => {
    const newIndex = imageIndex + 1;
    setImageIndex(newIndex);
  }
  const prevImg = () => {
    const newIndex = imageIndex - 1;
    setImageIndex(newIndex);
  }
  useEffect(() => {
    setImageIndex(0);
  }, [project]);

  return (
    <div ref={ref} id="second-layout" style={{gridArea: "second-layout"}} >
      <div id="img-container" >
        <button id="close-button" onClick={props.hideSecondLayout}>X</button>
        {imageIndex != 0 && <button className="skip-skelleton" id="previmg-button" onClick={prevImg}> &lt; </button>}
        {imageIndex != images.length-1 && <button className="skip-skelleton" id="nextimg-button" onClick={nextImg}>&gt; </button>}
        <div style={{height: "100%", width: "100%", overflow: "auto"}}>
          <div style={{display: "flex", justifyContent: "center", height: "100%"}}>
            <a href={images[imageIndex]} target="_blank">
              <img id="second-layout-image" ref={imgRef} data-index={imageIndex} src={images[imageIndex]} />
              </ a>
          </div>
        </div>
      </div>
      <div id="txt-container" >
        <div >
          <h2 id="title-container">{t('projects.'+project+'.title')}</h2>
          <div>
            <ul id="project-links">
            {Object.keys(projects[project].links).map((linkKey) => (
              <li key={linkKey} style={{width: 100/Object.keys(projects[project].links).length + "%"}}><a target="_blank" href={projects[project].links[linkKey]}>{linkKey}</a></li>
            ))}
            </ul>
          </div>
        </div>
        <div >
          <p style={{textAlign: "end", color: "grey"}}>{projects[project].date}</p>
          <p dangerouslySetInnerHTML={{ __html: t('projects.'+project+'.content') }}></p>
        </div>
      </div>
    </div>
  )
})

export default SecondLayout
