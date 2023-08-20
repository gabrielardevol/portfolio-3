import {useEffect, useRef} from 'react'
import '../style/Logo.css';
import React from 'react';
const Chara = (props) => {
  const logoRef = useRef()
  const transition = 1

  const randomColor = () => {
    const colors = ['lightcoral', "mediumturquoise",  "khaki", "cornflowerblue"];
    const randomIndex = Math.floor(Math.random() * colors.length);
    return colors[randomIndex]
  }
  const animation = () => {
    logoRef.current.style.transition = "transform " + transition + "s ease"
    if(logoRef.current.style.transform == "rotateY(360deg)") {logoRef.current.style.transform = "rotateY(0deg)"}
    if(logoRef.current.style.transform == "rotateY(180deg)") {logoRef.current.style.transform = "rotateY(360deg)"}
    if(logoRef.current.style.transform == "" || logoRef.current.style.transform == "rotateY(0deg)") {logoRef.current.style.transform = "rotateY(180deg)"};

    setTimeout(() =>  {

      logoRef.current.style.background =  randomColor()
    }, transition * 200);
  }

    useEffect(() => {
      logoRef.current !== undefined && logoRef.current.addEventListener("mouseover", animation);
      logoRef.current !== undefined && logoRef.current.addEventListener("click", animation);
      return () => {
        logoRef.current !== undefined && logoRef.current.addEventListener("mouseover", animation);
        logoRef.current !== undefined && logoRef.current.addEventListener("click", animation);
      };
    }, []);

  if(props.char !== " ") {return (<div className="chara-container"><div className="logo-chara logo" style={{backgroundColor: randomColor()}} ref={logoRef} onClick={animation}>{props.char}</div></div>)} else {return (<div className="logo"></div>)}
}

const Logo = React.forwardRef((props, ref) => {
  const string = "GABRIEL ";
  const charArray = string.split('');
  const string2 = "ARDÈ VOL";
  const charArray2 = string2.split('');
  return (
    <div id="logo" data-index="logo" className={" logo "+props.logoSize} style={{gridArea: "logo"}} onClick={props.resizeLayoutGrid}>
      <div className="logo-grid logo" >
      {charArray.map((character, index) => <Chara key={index} char={character} />)}
      </div>
      <div className="logo-grid logo">
      {charArray2.map((character, index) => <Chara key={index} char={character} />)}
      </div>
        <div id="webdev" className="logo">
          web development
        </div>
    </div>

  );
});

export default Logo;
