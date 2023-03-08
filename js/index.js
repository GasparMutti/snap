const navMenuIcon = document.querySelector(".navMenuIcon");
const navMenu = document.querySelector(".navMenu");

function containClass(element, string) {
  return element.classList.value.includes(string);
}

navMenuIcon.addEventListener("click", () => {
  const navOverlay = document.querySelector(".navOverlay");
  const navMenu = document.querySelector(".navMenu");

  navMenuIcon.classList.toggle("navMenuIcon--open");
  navOverlay.classList.toggle("navOverlay--show");
  navMenu.classList.toggle("navMenu--open");
});

navMenu.addEventListener("click", (e) => {
  const element = e.target;
  if (containClass(element, "navDropdown")) {
    const arrowIcon = element.children[0];
    const navInnerMenu = element.children[1];
    if (containClass(navInnerMenu, "navInnerMenu--open")) {
      navInnerMenu.style.height = "";
      navInnerMenu.classList.remove("navInnerMenu--open");
      arrowIcon.style.transform = "rotate(360deg)";
    } else {
      const height =
        navInnerMenu.clientHeight === 0 ? navInnerMenu.scrollHeight + 20 : 0;
      navInnerMenu.style.height = `${height}px`;
      navInnerMenu.classList.toggle("navInnerMenu--open");
      arrowIcon.style.transform = "rotate(180deg)";
    }
  }
});

window.addEventListener("resize", () => {
  const navOverlay = document.querySelector(".navOverlay");

  navMenu.classList.remove("navMenu--open");
  navOverlay.classList.remove("navOverlay--show");
  navMenuIcon.classList.remove("navMenuIcon--open");

  if (window.innerWidth >= 768) {
    const navInnerMenu = document.querySelector(".navInnerMenu");
    const arrowIcon = document.querySelector(".navDropdownIcon");

    navInnerMenu.classList.remove("navInnerMenu--open");
    navInnerMenu.style.height = "";
    arrowIcon.style.transform = "";
  }
});
