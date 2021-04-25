import view from "../views/Banner.html";

const Banner = () => {
  const divElement = document.createElement("div");
  divElement.classList.add("banner-main");
  divElement.innerHTML = view;
  
  return divElement;
};

export default Banner;
