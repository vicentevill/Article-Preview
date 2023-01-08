//Selectors
const shareMenu = document.querySelector("#shareOptions");
const shareIcon = document.querySelector("#shareIcon");
const arrowIcon = document.querySelector("#arrowIcon *");
const mq = window.matchMedia("(min-width: 768px)");
let shareCount = 0;
//Functions
function shareDesktop() {
  shareIcon.addEventListener("click", () => {
    if (shareCount % 2 === 0) {
      shareCount++;
      shareMenu.style.display = "flex";
      shareIcon.style.backgroundColor = "#6f839b";
      arrowIcon.style.fill = "white";
    } else {
      shareCount++;
      shareMenu.style.display = "none";
      shareIcon.style.backgroundColor = "#edf1fa";
      arrowIcon.style.fill = "#6e8098";
    }
  });
}
//Run
shareDesktop();
