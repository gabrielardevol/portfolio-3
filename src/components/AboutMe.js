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
    <div className="padding" id="about-me">
      <div className="can-toggle demo-rebrand-2" >
        <input id="e" type="checkbox" onClick={handleSwitch}/>
        <label htmlFor="e">
          <div className="can-toggle__switch" style={{}} data-checked="llarg" data-unchecked="curt"></div>
        </label>
      </div>
      <div style={{marginTop: "1em"}}>
        Hola, em dic Gabriel! Vaig neixer en un poble molt petit i aillat al mig de les muntanyes.
        <LongBio style={longBioStyle}> Durant l'adolescència els videojocs van deixar pas al software, i era un púber quan vaig començar amb Photoshop, After Effects i d'altres softwares que em permetien produïr els meus petits projectes d'adolescent friki i pujar-los a youtube, i així m'entretenia en l'entorn rural. </LongBio>
        Allà, els ordinadors eren la meva finestra al món. I encara ho són, perquè em dedico al desenvolupament web!
        Ara visc a Barcelona, ja que als divuit anys vaig venir a estudiar un grau universitari en arts i disseny.
        <LongBio style={longBioStyle}>Durant els quatre anys d'estudi a l'escola Massana vaig desenvolupar tota mena de projectes i també aprendre moltes tècniques diferents. No feiem exàmens sinó que feiem entregues. Com a estudiants desenvolupavem els nostres projectes de forma íntegra, des de la pluja d'idees inicial fins a la presentació: apreníem a estructurar-nos i prendre decisions respecte a cada pas, tot plegat al centre de Barcelona. </LongBio>
        És un privilegi viure en una ciutat on el sector tecnològic és tant efervescent: Barcelona és el Silicon Valley d'Europa! En definitiva, els meus estudis creatius em van ensenyar a trencar amb lo establert i explorar moltes maneres de fer les coses, mentre que en el desenvolupament web he entès la importància de seguir les fórmules que funcionen quan cal. Si busques un perfil entusiasta i en expansió, que aporti un toc d'originalitat i amb amor per l'artesania i la feina ben feta, endavant!
        <LongBio style={longBioStyle}> <img src="https://placehold.co/600x400/EEE/31343C" alt="" /> </LongBio>
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

// penso que el punt de trobada entre l'art i la tecnologia és l'artesania, el 'craft'. El junior apren del senior
// de la mateixa manera que l'aprenent respecta al mestre. es diu que l'artesà necessita 10.000 hores de treball
// per convertir-se en mestre.
// recommendations:
// my mom: I'm proud of my son's website. It's colorful and blablabla. I'm proud of my son and I can feel near the day
// he will pay back the money I lend him.
// esclat:
// companys:
