import './App.css';
import './style/scrollbar.css';
import './style/Layout.css';
import './style/cursor.css';

import Card from './components/Card.js'
import Logo from './components/Logo.js'
import Layout from './components/Layout.js'
import getLayoutGridTemplate from './functions/getLayout';
import {useRef, useState, useEffect} from 'react';

import { useTranslation } from 'react-i18next';


const cardData = [
  {title: "about me", content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.", defaultCardClass: "horizontal-left"},
  {title: "contact", content: "", defaultCardClass: "vertical-left"}
]

function App() {
  const layoutRef = useRef()
  const [superLayout, setSuperLayout] = useState("hide-second-layout")
  const [layoutClass, setLayoutClass] = useState("gtc-101 gtr-101")
  const [layoutClass2, setLayoutClass2] = useState("layout-75")
  const projectsRef = useRef()

  const [project, setProject] = useState("pigs")


  const resizeLayoutGrid = (e) => {
    if(e.target.classList.contains("toggle") == false){
    let layoutGridTemplate = getLayoutGridTemplate(e.currentTarget.dataset.index)
    setLayoutClass(layoutGridTemplate)

    if(layoutGridTemplate !== "gtc-101 gtr-101") {
      document.querySelector("#logo").classList.remove("medium-logo")
      document.querySelector("#logo").classList.add("smaller-logo")
    }
    if(layoutGridTemplate == "gtc-101 gtr-101") {
      document.querySelector("#logo").classList.add("medium-logo")
      document.querySelector("#logo").classList.remove("smaller-logo")
    }
  }
  }

  const unfoldSecondLayout = (e) => {
    document.querySelector("#second-layout").style.border = "1px solid black"
    document.querySelector("#second-layout").style.marginRight = "0.8em"

    setLayoutClass("gtc-101 gtr-101")
    setSuperLayout("unfold-second-layout")
    setLayoutClass2("")
    document.querySelector("#logo").classList.remove("medium-logo")
    document.querySelector("#logo").classList.add("smaller-logo")
    setProject(e.currentTarget.id)

  }
  const hideSecondLayout = () => {
    setLayoutClass("gtc-101 gtr-101")
    setSuperLayout("hide-second-layout")
    setTimeout(() => {
      setLayoutClass2("layout-75")
      document.querySelector("#second-layout").style.border = ""
      document.querySelector("#second-layout").style.marginRight = "0px"
    }, 800);
    document.querySelector("#logo").classList.remove("smaller-logo")
    document.querySelector("#logo").classList.add("medium-logo")

  }
  useEffect(() => {
    setLayoutClass2("layout-75")
    document.querySelector("#logo").classList.add("medium-logo")

  }, []);

  const { i18n } = useTranslation();
  const handleLanguageChange = (language) => {
    setTimeout(() => {
      i18n.changeLanguage(language);

    }, 300);
  }

  ;

  return (
    <>
      <button onClick={() => handleLanguageChange('en')}>English</button>
      <button onClick={() => handleLanguageChange('cat')}>Catalan</button>
      <button onClick={() => handleLanguageChange('esp')}>Spanish</button>
      <button onClick={() => handleLanguageChange('ja')}>Japanese</button>
     <Layout project={project} ref={layoutRef} layoutClass={layoutClass + " " + layoutClass2} superLayout={superLayout} hideSecondLayout={hideSecondLayout}>
        <Logo resizeLayoutGrid={resizeLayoutGrid} data-index={0}/>
        <Card defaultCardClass={"horizontal-left"} index={1} section={"aboutMe"}resizeLayoutGrid={resizeLayoutGrid}  />
        <Card defaultCardClass={"vertical-left"} index={2} section={"stack"}resizeLayoutGrid={resizeLayoutGrid} />
        <Card defaultCardClass={"horizontal-left"} index={4} section={"projects"}resizeLayoutGrid={resizeLayoutGrid} unfoldSecondLayout={unfoldSecondLayout} />
        <Card defaultCardClass={"vertical-left"} index={3} section={"contact"}resizeLayoutGrid={resizeLayoutGrid}  />
      </Layout>
    </>
  );
}

export default App;
