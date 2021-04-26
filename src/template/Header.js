import view from "../views/Header.html";

const Filter = async () => {
  const divElement = document.createElement("div");
  divElement.classList.add("Header-main");

  divElement.innerHTML = view;

  const buttom = divElement.querySelector(".Header-icon");
  const nav = divElement.querySelector(".Header-nav");

  buttom.addEventListener("click", () => {
    nav.classList.toggle("Header-nav__active");
    buttom.classList.toggle('Header-icon__active')
  });

  return divElement;
};

export default Filter;
