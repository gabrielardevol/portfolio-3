import i18n from '../i18n.js'; // no esborrar
import { useTranslation } from 'react-i18next';
import projects from '../projects.js';

const Project = (props) => {
  const { t } = useTranslation();

  const projectTitle = props.title;
  const hashtags = projects[props.title].hashtags
  return (
    <div onClick={props.unfoldSecondLayout} id={projectTitle} className="project prj" style={{height: props.projectHeight, width: props.projectWidth}}>
      <div style={{  }} className="prj">
        <div className="prj" style={{height: "100%", position: "relative"}}>
          <div className={"prj p-hashtags"}>
            {hashtags.map((project, index) => (
            <div key={index} className="prj" style={{background: "black", color: "white", borderRadius: "3em", fontSize: "0.8em", padding: "0em 0.9em"}}>{project}</div>
            ))}
          </div>
        </div>
      </div>
      <div className="prj" style={{}}>
        <div className="padding prj">
          <h3 className="prj">{t('projects.' + projectTitle + '.title')}</h3>
          <p className="prj" dangerouslySetInnerHTML={{ __html: t('projects.'+projectTitle+'.content') }} style={{margin: "0px", padding: "0px"}}></p>
        </div>
      </div>
    </div>
  );
};

export default Project;
