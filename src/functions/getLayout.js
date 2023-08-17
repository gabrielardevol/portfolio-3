export default function getLayout(cardIndex) {
  let gridTemplate;

  switch (cardIndex) {
    case "aboutMe":
      gridTemplate = "gtc-100 gtr-100";
      break;
    case "stack":
      gridTemplate =  "gtc-001 gtr-100";
      break;
    case "contact":
      gridTemplate =  "gtc-100 gtr-001";
      break;
    case "projects":
      gridTemplate =  "gtc-001 gtr-001";
      break;
    default:
      gridTemplate = "gtc-101 gtr-101";
  }

  return gridTemplate
}
