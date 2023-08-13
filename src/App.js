import './App.css';
import './style/scrollbar.css';
import './style/Layout.css';
import Card from './components/Card.js'
import Logo from './components/Logo.js'
import Layout from './components/Layout.js'
import getLayoutGridTemplate from './functions/getLayout';
import {useRef, useState, useEffect} from 'react';

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

  const resizeLayoutGrid = (e) => {
    let layoutGridTemplate = getLayoutGridTemplate(e.currentTarget.dataset.index)
    setLayoutClass(layoutGridTemplate)
  }

  const unfoldSecondLayout = () => {
    document.querySelector("#second-layout").style.border = "1px solid black"
    document.querySelector("#second-layout").style.marginRight = "0.8em"

    setLayoutClass("gtc-101 gtr-101")
    setSuperLayout("unfold-second-layout")
    setLayoutClass2("")
  }
  const hideSecondLayout = () => {
    setLayoutClass("gtc-101 gtr-101")
    setSuperLayout("hide-second-layout")
    setTimeout(() => {
      setLayoutClass2("layout-75")
      document.querySelector("#second-layout").style.border = ""
      document.querySelector("#second-layout").style.marginRight = "0px"

    }, 700);
  }
  useEffect(() => {
    setLayoutClass2("layout-75")
  }, []); // Empty dependency array means this effect runs once after initial render


  return (
    <>
     <Layout ref={layoutRef} layoutClass={layoutClass + " " + layoutClass2} superLayout={superLayout} hideSecondLayout={hideSecondLayout}>
        <Logo resizeLayoutGrid={resizeLayoutGrid} data-index={0}/>
        <Card defaultCardClass={"horizontal-left"} index={1} title={"about me"}resizeLayoutGrid={resizeLayoutGrid}  />
        <Card defaultCardClass={"vertical-left"} index={2} title={"stack"}resizeLayoutGrid={resizeLayoutGrid} />
        <Card defaultCardClass={"horizontal-left"} index={4} title={"projects"}resizeLayoutGrid={resizeLayoutGrid} ref={projectsRef} unfoldSecondLayout={unfoldSecondLayout} />
        <Card defaultCardClass={"vertical-left"} index={3} title={"contact"}resizeLayoutGrid={resizeLayoutGrid}  />

      </Layout>
    </>
  );
}

export default App;
