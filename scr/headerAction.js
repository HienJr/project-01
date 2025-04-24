export default function headerAction() {
  const action = document.querySelector(".header__action");
  const listBtn = Array.from(action.children);
  listBtn.forEach((item) => {
    item.onclick = () => {
      listBtn.forEach((item) => item.classList.remove("action--btn--active"));
      item.classList.add("action--btn--active");
    };
  });
}
