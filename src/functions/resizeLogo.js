const resizeLogo = (layoutGridTemplate) => {
  if(layoutGridTemplate == "gtc-101 gtr-101") {
    return "smaller-logo"
  }
  if(layoutGridTemplate !== "gtc-101 gtr-101") {
    return "medium-logo"
  }
}

export default resizeLogo
