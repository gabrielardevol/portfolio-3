export default function getLayoutGridTemplate(cardIndex) {
  let gridTemplate;

  switch (parseInt(cardIndex)) {
    case 1:
      gridTemplate = "gtc-100 gtr-100";
      break;
    case 2:
      gridTemplate =  "gtc-001 gtr-100";
      break;
    case 3:
      gridTemplate =  "gtc-100 gtr-001";
      break;
    case 4:
      gridTemplate =  "gtc-001 gtr-001";
      break;
    default:
      gridTemplate = "gtc-101 gtr-101";
  }

  return gridTemplate
}
