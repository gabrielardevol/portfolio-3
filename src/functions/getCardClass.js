const getCardClass = (size) => {
  const width = size.width
  const height = size.height
  if (width < 80) {return "vertical-left hidden"}
  if (height < 80) {return "horizontal-left hidden"}
  if (width > height) {return "horizontal-left"}
  if (height > width && width >= 250) {return "vertical-left"}
  if (height > width && width < 250) {return "horizontal-top"} //NO FUNCIONA
}

export default getCardClass
