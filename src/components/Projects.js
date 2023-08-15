import {useState, useRef} from 'react';
import React from 'react';
import "../style/Projects.css"
import { useTranslation } from 'react-i18next';
import i18n from '../i18n.js'; // no esborrar
import projects from '../projects';

// const projects = [1, 2, 3, 4, 5];

const Projects = React.forwardRef((props, ref) => {
  return (
    <>
      <div ref={ref} className={"projects"}>
         <div id="projects-container">
         {Object.keys(projects).map((projectKey, index) => (
            <Project title={projects[projectKey].title} key={index} unfoldSecondLayout={props.unfoldSecondLayout} index={index} projectHeight={props.projectHeight} projectWidth={props.projectWidth}></Project>
           ))}
        </div>
      </div>
    </>
  );
});

const Project = (props) => {
  const { t } = useTranslation();

  const projectTitle = props.title;
  const hashtags = projects[props.title].hashtags
  return (
    <div onClick={props.unfoldSecondLayout} id={projectTitle} className="project" style={{height: props.projectHeight, width: props.projectWidth}}>
      <div style={{  }}>
        <div style={{height: "100%", position: "relative"}}>
          <div className={"p-hashtags"}>
            {hashtags.map((project, index) => (
            <div key={index} style={{background: "black", color: "white", borderRadius: "3em", fontSize: "0.8em", padding: "0em 0.9em"}}>{project}</div>
            ))}
          </div>
        </div>
      </div>
      <div style={{}}>
        <div className="padding">
          <h3>{t('projects.' + projectTitle + '.title')}</h3>
          <p dangerouslySetInnerHTML={{ __html: t('projects.'+projectTitle+'.content') }} style={{margin: "0px", padding: "0px"}}></p>
        </div>
      </div>
    </div>
  );
};

export default Projects;


//projectes
//  esclat EDC
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
//        caracteritza, que també és un tret d'autenticitat.

//        Pel disseny utilitzo una graella molt versàtil que alterna text i imatges. Els tons foscos de gris aporten
//        elegància, complementats amb blanc pel text i groc com a "call-to-action".
//        Vaig utilitzar Ruby on Rails tant pel front-end com pel back-end, ja que és el primer llenguatge que vaig aprendre
//        Lo bo de ruby on rails és que t'estructura tots els directoris del projecte, i això t'estalvia
//        picar codi. El que no em convenç és que, pel front-end, no ofereix tanta llibertat creativa com frameworks de
//        l'estil de React. I a mi m'encanta el front-end i posar-me creatiu.

//        https://cellerardevol.herokuapp.com/
//        https://github.com/gabrielardevol/celler-ardevol
//        #Ruby #Rails

//  three pigs 🐺_🐷🐷🐷.rb
//        Ruby on Rails va ser la tecnologia amb la que vaig començar a programar. El meu estil d'aprenentatge és molt
//        visual i orientat a resultats, i m'agrada emprendre exercicis creatius amb allò que aprenc. Així és que vaig
//        fer aquest petit videojoc inspirat en la fàbula dels tres porquets, que s'executa en la línea de comands i
//        es juga amb la barra espaiadora del teclat. Són dos nivells, un en què els porquets fugen corrents del llop
//        a través del bosc, i un altre en què el llop bufa i bufa mentre els porquets intenten que la casa no surti
//        volant. Tot això utilitzant emojis com a element gràfic amb el que composar els diferents escenaris. Va ser
//        divertit!
//        #Ruby #Rails #OOP
//  porfoli
//        UI: volia un disseny original i diferent a la majoria de webs, ja que quan vaig estudiar arts i disseny
//        em vaig quedar molt amb la sensació de que fer propostes diferents a lo habitual pot sortir molt bé.
//        se'm va acudir aquesta disposició, una graella que fa una mena de creu, sense scroll i en disposició de dashboard.

//        Responsiveness: al pensar la UI va ser un repte que cada element pogués expandir-se i contrau-re's mantenint
//        un bon aspecte. Cada element té diferents versions, en funció de la seva mida. Així procuro que no hi hagi
//        massa text ni massa poc, que els elements no s'amonteguin de manera lletja...

//        amb aquest projecte he comprès que React és una eina destinada a projectes on el client insereix dades en
//        el client side. Per un projecte com aquest seria més straight-forward utilitzar OOP amb javascript, per tal
//        d'estalviar-me els hooks i els refs. Tot i així és el projecte amb el que he agafat fluidesa amb React.
//        també m'agrada la idea de fer pàgines i aplicacions sense scroll, que associo als feeds de les xarxes socials.

//        https://www.figma.com/file/ByAFpzhCYu5O2t5gyS99a2/portfolio---march-2023?node-id=1%3A3&t=sKu4ccPnXcdoLCLq-1
//        #React #UI #Figma #Responsive

//
//  òrbites
//        Aquesta interfaç representa un sistema planetari,
//        en que cada astre segueix la seva òrbita. Permet que des del costat del client s'afegeixin o es restin
//        planetes, de manera que la composició visual canvia. Està configurat en React, utilitzant elements SVG
//        per a les animacions geomètriques de les òrbites planetàries.

//        https://orbits-frontend.vercel.app/
//        #react



//  algun de disseny?
//  gay lotus?
//  acabar API restful
