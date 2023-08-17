import './App.css';
import './style/scrollbar.css';
import './style/Layout.css';
import './style/cursor.css';
import './style/skelleton.css';

import Card from './components/Card.js'
import Logo from './components/Logo.js'
import Layout from './components/Layout.js'
import Projects from './components/Projects';
import Stack from './components/Stack';
import Contact from './components/Contact';
import AboutMe from './components/AboutMe';

import getLayout from './functions/getLayout';
import resizeLogo from './functions/resizeLogo';

import {useRef, useState, useEffect} from 'react';
import { useTranslation } from 'react-i18next';


function App() {

  const { i18n } = useTranslation();
  const handleLanguageChange = (language) => {
    setTimeout(() => {
      i18n.changeLanguage(language);
    }, 300);
  };

  const projectsRef = useRef()
  const stackRef = useRef()
  const contactRef = useRef()
  const aboutMeRef = useRef()
  const layoutRef = useRef()
  const logoRef = useRef()

  const [superLayout, setSuperLayout] = useState("hide-second-layout")
  const [layoutClass, setLayoutClass] = useState("gtc-101 gtr-101")
  const [layoutClass2, setLayoutClass2] = useState("layout-75")
  const [project, setProject] = useState("pigs")
  const [logoSize, setLogo] = useState("")


  const resizeLayout = (e) => {
    if(e.target.classList.contains("toggle") == false){
      let layoutGridTemplate = getLayout(e.currentTarget.dataset.index)
      console.log(layoutGridTemplate)
      setLayoutClass(layoutGridTemplate)
      setLogo(resizeLogo(layoutClass))
    }
  }

  const unfoldSecondLayout = (e) => {
  //   document.querySelector("#second-layout").style.border = "1px solid black"
  //   document.querySelector("#second-layout").style.marginRight = "0.8em"

  //   setLayoutClass("gtc-101 gtr-101")
  //   setSuperLayout("unfold-second-layout")
  //   setLayoutClass2("")
  //   document.querySelector("#logo").classList.remove("medium-logo")
  //   document.querySelector("#logo").classList.add("smaller-logo")
  //   setProject(e.currentTarget.id)
  }
  const hideSecondLayout = () => {
  //   setLayoutClass("gtc-101 gtr-101")
  //   setSuperLayout("hide-second-layout")
  //   setTimeout(() => {
  //     setLayoutClass2("layout-75")
  //     document.querySelector("#second-layout").style.border = ""
  //     document.querySelector("#second-layout").style.marginRight = "0px"
  //   }, 800);
  //   document.querySelector("#logo").classList.remove("smaller-logo")
  //   document.querySelector("#logo").classList.add("medium-logo")

  }
  useEffect(() => {
    setLayoutClass2("layout-75")
    document.querySelector("#logo").classList.add("medium-logo")

  }, []);

  return (
    <>
      <Layout project={project} ref={layoutRef} layoutClass={layoutClass + " " + layoutClass2} superLayout={superLayout} hideSecondLayout={hideSecondLayout}>
        <div id="languages" style={{gridArea: "languages"}} >
          <button onClick={() => handleLanguageChange('en')}>ENG</button>
          <button onClick={() => handleLanguageChange('cat')}>CAT</button>
          <button onClick={() => handleLanguageChange('esp')}>ES</button>
          <button onClick={() => handleLanguageChange('ja')}>JA</button>
        </div>
        <Logo ref={logoRef} logoSize={logoSize} resizeLayoutGrid={resizeLayout} data-index={0}/>
        <Card defaultCardClass={"horizontal-left"} index={1} section={"aboutMe"}resizeLayoutGrid={resizeLayout}  >
          <AboutMe ref={aboutMeRef} />
        </Card>
        <Card defaultCardClass={"vertical-left"} index={2} section={"stack"}resizeLayoutGrid={resizeLayout} >
          <Stack ref={stackRef} />
        </Card>
        <Card defaultCardClass={"horizontal-left"} index={4} section={"projects"}resizeLayoutGrid={resizeLayout} unfoldSecondLayout={unfoldSecondLayout} >
          <Projects ref={projectsRef} / >
        </Card>
        <Card defaultCardClass={"vertical-left"} index={3} section={"contact"}resizeLayoutGrid={resizeLayout}  >
          <Contact ref={contactRef} />
        </Card>
      </Layout>
    </>
  );
}

export default App;
