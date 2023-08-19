import React, { useRef, useState, useEffect } from 'react';

import { useTranslation } from 'react-i18next';

import i18n from '../i18n.js'; // no esborrar

import projects from '../projects';

const SecondLayout = React.forwardRef((props, ref) => {
  const { t } = useTranslation();
  const project = props.project
  const imgRef = useRef()
  // const images = projects[project].images
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

  // const resetImgIndex = (e) => {
  //   if (e.target.classList.contains("prj")) {
  //     setImageIndex(0)
  //   }
  // }

  // useEffect(() => {
  //   window.addEventListener('click', (e) => resetImgIndex(e));
  //   return () => {
  //     window.removeEventListener('click', (e) => resetImgIndex(e));
  //   };
  // }, []);


  return (
    <div ref={ref} id="second-layout" style={{gridArea: "second-layout"}} >
      <div id="img-container" >
        <button id="close-button" onClick={props.hideSecondLayout}>X</button>
        {imageIndex != 0 && <button className="skip-skelleton" id="previmg-button" onClick={prevImg}> &lt; </button>}
        {imageIndex != images.length-1 && <button className="skip-skelleton" id="nextimg-button" onClick={nextImg}>&gt; </button>}
        <img id="second-layout-image" ref={imgRef} data-index={imageIndex} src={images[imageIndex]}></img>
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
