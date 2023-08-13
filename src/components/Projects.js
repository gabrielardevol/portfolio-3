import {useState, useRef} from 'react';
import React from 'react';
import "../style/Projects.css"

const projects = [1, 2, 3, 4, 5];

const Projects = React.forwardRef((props, ref) => {
  return (
    <>
      <div ref={ref} className={"projects"}>
         <div id="projects-container">
          {props.width}
          {projects.map((project, index) => (
            <Project  unfoldSecondLayout={props.unfoldSecondLayout} key={index} index={index} projectHeight={props.projectHeight} projectWidth={props.projectWidth}></Project>
          ))}
        </div>

      </div>
    </>
  );
});

const Project = (props) => {
  const hashtags = ["react", "ruby", "API", "Responsiveness","gabriel", "ardèvol", "herrero"]
  return (
    <div onClick={props.unfoldSecondLayout} className="project" style={{height: props.projectHeight, width: props.projectWidth}}>
      <div style={{ height: "50%" }}>
        <div style={{height: "100%", position: "relative"}}>
          <div style={{position: "absolute", bottom: 0, display: "flex", flexWrap: "wrap", flexDirection: "row-reverse", alignContent: "flex-start"}}>
            {hashtags.map((project, index) => (
            <div style={{background: "black", color: "white", borderRadius: "3em", fontSize: "0.8em", padding: "0em 0.9em"}}>{project}</div>
            ))}
          </div>
        </div>
      </div>
      <div style={{display: "flex", alignItems: "center", justifyContent: "center", height: "calc(50% - 0.8em)"}}>
        <div className="padding">
          <h3> {props.index} Title</h3>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </div>
      </div>
    </div>
  );
};

export default Projects;


//projectes
//  esclat
//        la fundació esclat és una entitat sense anim de lucre que ofereix serveis a persones amb paràlisi cerebral
//        vaig tenir la oportunitat de colaborar amb ells realitzant una secció de la seva pàgina web dedicada a
//        l'estratègia digital del centre, en què es publiquen alguns aspectes de la gestió interna del grup.
//
//        la meva proposta és una interfaç senzilla dins del codi visual corporatiu.
//        per donar-li el meu toc personal vaig incloure algunes imatges en les trancisions, de manera que hi fossin
//        presents però sense restar protagonisme a la documentació ni interferir innecessàriament en la lectura.
//        per a això vaig parar especial atenció a la temporització, com fan els cineastes i els animadors, per a que
//        les trancisions fossin ràpides però també es poguessin apreciar les fotografies, que aporten a la
//        documentació una dimensió més emocional i bonica.

//        treballar amb els d'esclat va estar xulo perquè ells volien un resultat bo i jo també, i em van fer moltes
//        indicacions per a perfeccionar el treball.

//        https://github.com/gabrielardevol/esclat
//        https://associacioesclat.com/edc.html

//        #UI #Javascript

//  celler ardèvol
//        aquesta és la web del Celler Ardèvol, la primera pàgina web que he publicat. Està feta en ruby on rails,
//        i a més de dissenyar-la i codificar-la n'he redactat els textos i seleccionat les imatges, ja que és el celler de la
//        meva família. És una empresa familiar, petita i propera. Penso que la pàgina web reflexa l'austeritat que la
//        caracteritza, tret d'autenticitat.
//        Pel disseny utilitzo una graella molt versàtil que alterna text i imatges. Els tons foscos de gris aporten
//        elegància, complementats amb blanc pel text i groc com a call-to-action.
//        Vaig utilitzar Ruby on Rails tant pel front-end com pel back-end, ja que és el primer llenguatge que vaig aprendre
//        Lo bo de ruby on rails és que t'estructura tots els directoris del projecte, i això t'estalvia
//        picar codi. El que no em convenç és que, pel front-end, no ofereix tanta llibertat creativa com frameworks de
//        l'estil de React. I a mi m'encanta el front-end i posar-me creatiu.

//        https://cellerardevol.herokuapp.com/
//        https://github.com/gabrielardevol/celler-ardevol

//  three pigs
//  porfoli
//  coosmos
//  òrbites
//  algun de disseny?
//  gay lotus?
//  acabar API restful
