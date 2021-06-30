import api from "./api.js";

// Get config ---------------------------------------------
const config = api.getConfig();

// Get DOM elements ---------------------------------------
const cntBody = document.getElementById("cnt-body_js");

// --------------------------------------------------------

// Create item --------------------------------------------
function createItem(element) {
  const html = `
    <div class="cnt-body-item" id="cnt-body-item_js">
      <div class="anim-el">
        <img 
          class="anim-el__img" 
          src="../assets/img/${element.animImgPath}.svg" 
        />
      </div> 
      <div class="cnt-body-item__title" data-number=${element.id}>
        ${element.title}
      </div>
      <div class="cnt-body-item__description">
        ${element.description.map((p) => `<p>${p}</p>`).join("")}
      </div>
      <div class="cnt-body-item__nav">
        <a href="${element.link}" class="cnt-body-item__link-text">Сайт</a>
        <a href="${element.link}" class="cnt-body-item__link-btn">
          <span></span>
        </a>
      </div>
    </div>
`;

  return html;
}
// --------------------------------------------------------

// Render to DOM ------------------------------------------
for (let i = 0; i < config.length; i++) {
  cntBody.insertAdjacentHTML("beforeend", createItem(config[i]));
}
// --------------------------------------------------------

// Handler hover ------------------------------------------
const cntBodyItem = document.querySelectorAll("#cnt-body-item_js");

for (let i = 0; i < cntBodyItem.length; i++) {
  cntBodyItem[i].addEventListener("mouseenter", function () {
    cntBodyItem[i].style.background = config[i].background;
  });
  cntBodyItem[i].addEventListener("mouseleave", function () {
    cntBodyItem[i].style.background = "#fff";
  });
}
// --------------------------------------------------------
