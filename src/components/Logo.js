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
      return () => {
        logoRef.current !== undefined && logoRef.current.addEventListener("mouseover", animation);
        logoRef.current !== undefined && logoRef.current.addEventListener("click", animation);
      };
    }, []);

  if(props.char !== " ") {return (<div className="logo-chara" ref={logoRef} onClick={animation}>{props.char}</div>)} else {return (<div></div>)}
}

const Logo = (props) => {
  const string = "gabriel ";
  const charArray = string.split('');
  const string2 = "ardè vol";
  const charArray2 = string2.split('');
  return (
    <div id="logo" style={{gridArea: "logo"}} onClick={props.resizeLayoutGrid}>
      <div class="logo-grid" >
      {charArray.map((character, index) => <Chara key={index} char={character} />)}
      </div>
      <div class="logo-grid" style={{justifyContent: "right"}}>
      {charArray2.map((character, index) => <Chara key={index} char={character} />)}
      </div>
        <div style={{textAlign: "center", background: "black", color: "white", borderRadius: "5em", marginTop: "0.4em"}}>
          web development
        </div>
    </div>

  );
};

export default Logo;
