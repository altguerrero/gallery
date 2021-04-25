// template
import Header from "@template/Header";
import Banner from "@template/Banner";
import Filter from "@template/Filter";
import Footer from "@template/Footer";
// content
import Gallery from "../controllers/Gallery.js";
import ImageItem from "../controllers/ImageItem.js";
import Error404 from "../controllers/Error404.js";
// utilitis
import getHash from "@utils/getHash";
import resolveRoutes from "@utils/resolveRoutes";

const routes = {
  "/": Gallery,
  "/:id": ImageItem,
  "/branding": Gallery,
  "/web": Gallery,
  "/photography": Gallery,
  "/app": Gallery,
};

const router = async () => {
  const header = null || document.getElementById("header");
  const banner = null || document.getElementById("banner");
  const filter = null || document.getElementById("filter");
  const content = null || document.getElementById("content");
  const footer = null || document.getElementById("footer");

  header.innerHTML = await Header();

  banner.innerHTML = "";
  banner.appendChild(await Banner());

  filter.innerHTML = "";
  filter.appendChild(await Filter());

  footer.innerHTML = "";
  footer.appendChild(await Footer());

  // Refactorizar
  const nav = Array.from(document.querySelectorAll(".Header-nav ul li a"));
  const navFilter = Array.from(document.querySelectorAll(".Filter-link"));
  const BannerButtom = Array.from(document.querySelectorAll(".banner-buttom"));
  console.log(BannerButtom);
  nav.map((item) => {
    item.addEventListener("click", () => {
      window.scrollTo(0, banner.offsetHeight);
    });
  });
  navFilter.map((item) => {
    item.addEventListener("click", () => {
      window.scrollTo(0, banner.offsetHeight);
    });
  });
  BannerButtom.map((item) => {
    item.addEventListener("click", () => {
      window.scrollTo(0, banner.offsetHeight);
    });
  });

  let hash = getHash();
  let route = resolveRoutes(hash);
  let render = routes[route] ? routes[route] : Error404;
  let result = await render();

  content.innerHTML = "";
  return content.appendChild(result);
};

export default router;
