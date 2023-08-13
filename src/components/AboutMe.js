import {useState, useRef} from 'react';
import React from 'react';
import "../style/AboutMe.scss"

const AboutMe = React.forwardRef((props, ref) => {
  const [longBioStyle, setLongBio] = useState({display: "none"})
  const handleSwitch = (e) => {
   setLongBio( e.currentTarget.checked ? {display: "inline", color: "lavender"} : {display: "none"} )
  }
  return (
    <>
    <div className="padding">
      <div className="can-toggle demo-rebrand-2" >
        <input id="e" type="checkbox" onClick={handleSwitch}/>
        <label htmlFor="e">
          <div className="can-toggle__switch" style={{}} data-checked="llarg" data-unchecked="curt"></div>
        </label>
      </div>
      <div style={{marginTop: "1em"}}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
        sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
        <LongBio style={longBioStyle} > sed do eiusmod tempor incididunt ut labore </LongBio>
        quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
        <LongBio  style={longBioStyle}  > sed do eiusmod tempor incididunt ut labore </LongBio>
        in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
        cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
      </div>
    </div>
    </>
  );
});

const LongBio = (props) => {
  return  (
    <span style={props.style}>
      {props.children}
    </span>
  )
}

export default AboutMe;

// Hola, em dic Gabriel! Vaig neixer en un poble molt petit i aillat al mig de les muntanyes, on els ordinadors
// eren la meva finestra al món. I encara ho són, perquè em dedico al desenvolupament web!
// ara visc a Barcelona, ja que als divuit anys vaig venir a estudiar un grau universitari en arts i disseny.
// És un privilegi viure en una ciutat on el sector tecnològic és tant efervescent
// És un privilegi viure en el Silicon Valley d'Europa!

// si el meu perfil és especial per una cosa és per aquesta, ja que m'he empapat de multiples maneres d'estudiar
// i d'emprendre projectes. en els meus estudis creatius vaig veure la importància de fer les coses diferents
// , ser original i formalitzar propostes memorables i distintives. En la meva incursió en la informàtica m'he
// retrobat amb la importància de ser efectiu. ESCRIURIA ALGO MES
// En uns anys seré supervisor de prjectes, ja que pel meu vagatge tant transversal per ara penso que és la posició
// on més podré utilitzar tots els meus coneixements multidisciplinars. Mentrestant busco un lloc de treball on
// polir la meva artesania de codi i dominar l'ofici de programador, ja que busco amb entusiasme tots els coneixements
// que m'esperen a assolir.
// penso que el punt de trobada entre l'art i la tecnologia és la tècnica, el 'craft'. El junior apren del senior
// de la mateixa manera que l'aprenent respecta al mestre. es diu que l'artesà necessita 10.000 hores de treball
// per convertir-se en mestre. No sé si sigui així amb els programadors, ja que les tecnologies van canviant
// periòdicament... així doncs emprenc aquest camí.

// recommendations:
// my mom: I'm proud of my son's website. It's colorful and blablabla. I'm proud of my son and I can feel near the day
// he will pay back the money I lend him.
// esclat:
// companys:
