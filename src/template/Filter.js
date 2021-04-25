import view from "../views/Filter.html";
import getHash from "../utils/getHash";

const Filter = async () => {
  const divElement = document.createElement("div");
  divElement.classList.add("Filter-nav");
  divElement.innerHTML = view;

  const hash = getHash();
  const links = await Array.from(divElement.querySelectorAll(".Filter-link"));
  const link = links.find((link) => link.dataset.url == hash);

  if (link) {
    link.classList.add("Filter-item__active");
  }

  return divElement;
};

export default Filter;
