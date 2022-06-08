let tabList = document.querySelector(".tabs");
let tabs = document.querySelectorAll(".tabs > button");

let tabFocus = 0;

tabList.addEventListener("keydown", changeTabFocus);

tabs.forEach((tab) => {
  tab.addEventListener("click", (e) => {
    let targetTab = e.target;
    let targetPanel = targetTab.getAttribute("aria-controls");
    let targetImage = targetTab.getAttribute("data-image");
    let tabContainer = targetTab.parentNode;
    let mainContainer = tabContainer.parentNode;

    console.log(targetImage);

    tabContainer
      .querySelector(`[aria-selected="true"]`)
      .setAttribute("aria-selected", false);

    targetTab.setAttribute("aria-selected", true);

    mainContainer.querySelectorAll(`[role="tabpanel"]`).forEach((panel) => {
      panel.setAttribute("hidden", true);
    });
    mainContainer.querySelector([`#${targetPanel}`]).removeAttribute("hidden");

    mainContainer.querySelectorAll("img").forEach((pic) => {
      pic.classList.add("hidden");
    });
    mainContainer.querySelector([`#${targetImage}`]).classList.remove("hidden");
  });
});

function hideContent() {}

function changeTabFocus(e) {
  let [keydownLeft, keydownRight] = [37, 39];

  if (e.keyCode === keydownLeft || e.keyCode === keydownRight) {
    tabs[tabFocus].setAttribute("tabindex", -1);
    console.log(tabFocus);
    if (e.keyCode === keydownRight) {
      console.log(tabFocus);
      tabFocus++;
      if (tabFocus >= tabs.length) {
        tabFocus = 0;
      }
    }
    if (e.keyCode === keydownLeft) {
      console.log(tabFocus);
      tabFocus--;
      if (tabFocus < 0) {
        tabFocus = tabs.length - 1;
      }
    }
  }

  tabs[tabFocus].setAttribute("tabindex", 0);
  tabs[tabFocus].focus();
}
