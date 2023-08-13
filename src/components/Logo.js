import {useEffect, useRef} from 'react'
import '../style/Logo.css';

const Chara = (props) => {

  const logoRef = useRef()

  const transition = 1
  const animation = () => {
    logoRef.current.style.transition = "transform " + transition + "s ease"
    if(logoRef.current.style.transform == "rotateY(360deg)") {logoRef.current.style.transform = "rotateY(0deg)"}
    if(logoRef.current.style.transform == "rotateY(180deg)") {logoRef.current.style.transform = "rotateY(360deg)"}
    if(logoRef.current.style.transform == "" || logoRef.current.style.transform == "rotateY(0deg)") {logoRef.current.style.transform = "rotateY(180deg)"};

    setTimeout(() =>  {
      const colors = ['lavender', "white", "black"];
      const randomIndex = Math.floor(Math.random() * colors.length);
      logoRef.current.style.background =  colors[randomIndex]
    }, transition * 200);
  }

    useEffect(() => {
      logoRef.current !== undefined && logoRef.current.addEventListener("mouseover", animation);
      logoRef.current !== undefined && logoRef.current.addEventListener("click", animation);


      // hoverElement.addEventListener("mouseout", handleMouseOut);
      return () => {
        logoRef.current !== undefined && logoRef.current.addEventListener("mouseover", animation);
        logoRef.current !== undefined && logoRef.current.addEventListener("click", animation);



        // logoRef.current.removeEventListener("mouseover", animation);
        // hoverElement.removeEventListener("mouseout", handleMouseOut);
      };
    }, []); // Empty dependency array ensures the effect runs once on mount

  if(props.char !== " ") {return (<div className="logo-chara" ref={logoRef} onClick={animation}>{props.char}</div>)} else {return (<div></div>)}
}

const Logo = (props) => {
  const string = "gabr   iel ard   èvol";
  const charArray = string.split('');
  return (
    <div id="logo" style={{gridArea: "logo"}} onClick={props.resizeLayoutGrid}>
    {charArray.map((character, index) => <Chara key={index} char={character} />)}
    </div>
  );
};

export default Logo;
