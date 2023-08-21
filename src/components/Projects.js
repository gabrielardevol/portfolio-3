import {useState, useRef, useEffect} from 'react';
import React from 'react';
import "../style/Projects.css"
import projects from '../projects';
import Project from '../components/Project';
import getProjectsLayout from '../functions/getProjectsLayout.js'

const Projects = React.forwardRef((props, ref) => {
  const projectsRef = useRef()
  const [projectHeight, setProjectHeight] = useState()
  const [projectWidth, setProjectWidth] = useState()
  const [projectsClass, setProjectsClass] = useState()

  const handleProjectLayout = () => {
    const projectsLayout = () => {
      const width = projectsRef.current.getBoundingClientRect().width
      const height = projectsRef.current.getBoundingClientRect().height
      const projectsLayout = getProjectsLayout(width, height)
      setProjectHeight(projectsLayout.height)
      setProjectWidth(projectsLayout.width)
      setProjectsClass(projectsLayout.addClass)
      projectsRef.current.style.gridAutoFlow = projectsLayout.style.gridAutoFlow
      projectsRef.current.style.gridTemplateColumns = projectsLayout.style.gridTemplateColumns
      projectsRef.current.style.overflow = projectsLayout.style.overflow
    }
    projectsLayout();
    setTimeout(projectsLayout, 400);
    setTimeout(projectsLayout, 800);
    setTimeout(projectsLayout, 1000);
  }

  useEffect(() => {
    window.addEventListener('click', handleProjectLayout);
    window.addEventListener('resize', handleProjectLayout);
    handleProjectLayout()
  }, []);
  return (
    <>
      <div id="projects-container" ref={projectsRef} className={"projects " + projectsClass}>
      {Object.keys(projects).map((projectKey, index) => (
            <Project title={projects[projectKey].title} key={index} unfoldSecondLayout={props.unfoldSecondLayout} index={index}
            projectHeight={projectHeight} projectWidth={projectWidth}
            />
          ))}
      </div>
    </>
  );
});

export default Projects;
