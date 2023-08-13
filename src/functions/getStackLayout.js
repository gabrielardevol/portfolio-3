function getStackLayout(width, height) {
  const standardWidth = 150
  // const standardHeight = 187.5
  // const ratio = 1.333
  let flexFlow;
  if(width > standardWidth*2) { flexFlow = "row" }
  if (width < standardWidth*2) {flexFlow = "column"}

  const style = {flexFlow: flexFlow}
  return style
}

export default getStackLayout
