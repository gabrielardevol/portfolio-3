import './App.css';
import './style/scrollbar.css';
import './style/Layout.scss';
import './style/SecondLayout.css';
import './style/cursor.css';
import './style/skelleton.css';
import './style/fold-unfold.css';
import './style/color/aboutMe.scss';
import './style/color/projects.scss';
import './style/color/stack.scss';
import './style/color/contact.scss';
import './style/color/dark.scss';

import Card from './components/Card.js';
import Logo from './components/Logo.js';
import SecondLayout from './components/SecondLayout.js';
import Projects from './components/Projects';
import Stack from './components/Stack';
import Contact from './components/Contact';
import AboutMe from './components/AboutMe';

import getLayout from './functions/getLayout';

import {useRef, useState} from 'react';
import { useTranslation } from 'react-i18next';

function App() {

  const { i18n } = useTranslation();

  const handleLanguageChange = (language) => {
    setTimeout(() => {
      i18n.changeLanguage(language);
    }, 300);
  };

  const stackRef = useRef()
  const contactRef = useRef()
  const aboutMeRef = useRef()
  const projectsRef = useRef()
  const layoutRef = useRef()
  const logoRef = useRef()
  const secondLayoutRef = useRef()

  const [layoutClass, setLayoutClass] = useState("gtc-101 gtr-101")
  const [project, setProject] = useState("pigs")
  const [logoSize, setLogo] = useState("medium-logo")
  const [foldUnfold, setFoldUnfold] = useState("fold")

  const resizeLayout = (e) => {
    if(e.target.classList.contains("toggle") == false){
      if (layoutRef.current.classList.contains("gtc-101") && layoutRef.current.classList.contains("gtr-101") && e.currentTarget.classList.contains("logo") == false){
        let layoutGridTemplate = getLayout(e.currentTarget.dataset.index)
        setLayoutClass(layoutGridTemplate)
        e.currentTarget.classList.add("current")
        skelletonSections()
        foldUnfold == "unfold" && setLogo("smaller-logo")
      }
      else if ( e.currentTarget.classList.contains("logo") == false){
        e.currentTarget.classList.contains("current") == false && setLayoutClass("gtc-101 gtr-101")
        e.currentTarget.classList.contains("current") == false && skelletonSections()
        foldUnfold == "fold" && setLogo("medium-logo")
      }
      else if ( e.currentTarget.classList.contains("logo") && (layoutRef.current.classList.contains("gtc-101") == false || layoutRef.current.classList.contains("gtr-101") == false)){
        setLayoutClass("gtc-101 gtr-101")
        foldUnfold == "fold" && setLogo("medium-logo")
        skelletonSections()
      }
    }
  }

  const unfoldSecondLayout = (e) => {
    const project = e.currentTarget.id
    setFoldUnfold("unfold")
    setLogo("smaller-logo")
    secondLayoutRef.current.classList.add("border")
    setTimeout((e) => {
      setProject(project)
    }, 300);
    secondLayoutRef.current.classList.add("skelleton")
    setTimeout(() => {
      secondLayoutRef.current.classList.remove("skelleton")
      secondLayoutRef.current.classList.add("non-skelleton")
    }, 900);
  }

  const hideSecondLayout = () => {
    setFoldUnfold("fold")
    setLogo("medium-logo")
    secondLayoutRef.current.classList.remove("border")
    secondLayoutRef.current.classList.add("skelleton")
    setTimeout(() => {
      secondLayoutRef.current.classList.remove("skelleton")
      secondLayoutRef.current.classList.add("non-skelleton")
    }, 900);
    skelletonSections()
  }

  const skelletonSections = () => {
    const sections = [
      projectsRef.current,
      stackRef.current,
      aboutMeRef.current,
      contactRef.current
    ];
    sections.forEach(section => {
      section.classList.add("skelleton");
      section.classList.remove("non-skelleton");
    });
    setTimeout(() => {
      sections.forEach(section => {
        section.classList.add("non-skelleton");
        section.classList.remove("skelleton");
      });
    }, 900);
  }

  return (
    <>
      <div ref={layoutRef} id="layout" className={layoutClass + " " + foldUnfold }>
        <div id="languages"  >
          <button onClick={() => handleLanguageChange('ja')}>JA</button>
          <button onClick={() => handleLanguageChange('esp')}>ES</button>
          <button onClick={() => handleLanguageChange('en')}>ENG</button>
          <button onClick={() => handleLanguageChange('cat')}>CAT</button>
        </div>
        <Logo ref={logoRef} logoSize={logoSize} resizeLayout={resizeLayout} data-index={0}/>
        <Card ref={aboutMeRef} section={"aboutMe"}resizeLayout={resizeLayout}  >
          <AboutMe  />
        </Card>
        <Card ref={stackRef} section={"stack"}resizeLayout={resizeLayout} >
          <Stack />
        </Card>
        <Card ref={projectsRef} section={"projects"} resizeLayout={resizeLayout} unfoldSecondLayout={unfoldSecondLayout} >
          <Projects unfoldSecondLayout={unfoldSecondLayout} />
        </Card>
        <Card ref={contactRef} section={"contact"}resizeLayout={resizeLayout}  >
          <Contact />
        </Card>
        <SecondLayout foldUnfold={foldUnfold} ref={secondLayoutRef} project={project} hideSecondLayout={hideSecondLayout}/>
      </div>
    </>
  );
}

export default App;
