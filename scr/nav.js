export default function nav() {
  const navTab = document.querySelector("#nav-tabs");
  const navList = navTab.querySelectorAll("li");

  navList[0].classList.add("nav__item--active");

  navList.forEach((item, id) => {
    item.classList.forEach((className) => {
      if (className.includes("nav__item--active")) {
        createActiveLine(item);
      }
    });

    item.onclick = () => {
      navList.forEach((item) => {
        item.classList.remove("nav__item--active");
      });
      item.classList.add("nav__item--active");
      createActiveLine(item);
    };
  });
}

function createActiveLine(item) {
  const activeLine = document.querySelector(".active-line");
  activeLine.style.width = `${item.offsetWidth / 2}px`;
  activeLine.style.transform = `translateX(${item.offsetLeft}px)`;
}
