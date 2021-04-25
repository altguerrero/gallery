// template
import Header from "@template/Header";
import Banner from "@template/Banner";
import Filter from "@template/Filter";
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

  header.innerHTML = await Header();
  banner.innerHTML = await Banner();
  filter.innerHTML = await Filter();

  let hash = getHash();
  let route = resolveRoutes(hash);
  let render = routes[route] ? routes[route] : Error404;
  let result = await render();
  content.innerHTML = "";

  return content.appendChild(result);
};

export default router;
