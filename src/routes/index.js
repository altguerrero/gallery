// template
import Header from "@template/Header";
import Banner from "@template/Banner";
import Filter from "@template/Filter";
// content
import Gallery from "@pages/Gallery";
import ImageItem from "@pages/ImageItem";
import Error404 from "@pages/Error404";
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

  const saludo = () => console.log("hola")

  let hash = getHash();
  let route = resolveRoutes(hash);
  console.log(route);
  let render = routes[route] ? routes[route] : Error404;

  content.innerHTML = await render();
};

export default router;
