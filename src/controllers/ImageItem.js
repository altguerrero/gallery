import getData from "@utils/getData";
import getHash from "@utils/getHash";
import view from "../views/imageItem.html";

const ImageItem = async () => {
  const divElement = document.createElement("div");
  divElement.innerHTML = view;

  const hash = getHash().split("?")[1];
  const imageItem = await getData(hash, ":id");

  const element = document.createElement("div");
  element.classList.add("image-item__contain");
  element.innerHTML = `
  <div class="container image-item__container">
    <img class="image-item__img" src="${imageItem.urls.small}" alt="${imageItem.alt_description}">
    <figcaption class="image-item__description">${imageItem.alt_description}</figcaption>
  </div>
  `;

  divElement.querySelector(".image-item__inner").appendChild(element);
  divElement
    .querySelector(".image-item__buttom")
    .addEventListener("click", () => {
      history.go(-1);
    });

  window.addEventListener("click", (e) => {
    if (e.target.id == "imageInner") {
      history.go(-1);
    }
  });

  return divElement;
};

export default ImageItem;
