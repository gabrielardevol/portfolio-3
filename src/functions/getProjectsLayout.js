function getProjectsLayout(width, height) {
  const standardWidth = 250
  const standardHeight = 187.5
  const ratio = 1.333 // like screens, 3:4 (1.333), 16:9 (1.777)...
  let numberOfColumns = Math.floor(width / standardWidth)
  const projectWidth = (width / numberOfColumns) - ((0.75*16)/numberOfColumns) -1
  const projectHeight = projectWidth / ratio

  if(height >= standardHeight*1.2) {
    const projectsStyle = {gridAutoFlow: "row", gridTemplateColumns: "repeat(" + numberOfColumns + ", 1fr)", overflow: "hidden scroll"}
    return {width: projectWidth, height: projectHeight, style: projectsStyle, addClass: "vertical-p", removeClass: "horizontal-p"}
  }
  if (height < standardHeight*1.2) {
    const projectsStyle = {gridAutoFlow: "column", overflow: "scroll hidden"}
    return {width: height * ratio, height: (height-0.75*16), style: projectsStyle, addClass: "horizontal-p", removeClass: "vertical-p"}
  }
}

export default getProjectsLayout
