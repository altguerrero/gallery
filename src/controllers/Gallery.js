import getHash from "@utils/getHash";
import getData from "@utils/getData";
import resolveRoutes from "@utils/resolveRoutes";
import view from "../views/Gallery.html";
import masonryLayout from "@utils/masonryLayout";

const Gallery = async () => {
  const divElement = document.createElement("div");
  divElement.innerHTML = view;

  const pages = ["branding", "web", "photography", "app"];
  let dataItems = [{ name: "/", data: [] }];
  pages.map(async (page) => {
    let data = await getData(page);
    let value = {
      name: page,
      data,
    };
    dataItems.push(value);
    dataItems[0].data.push(data);
  });

  console.log(dataItems);

  let hash = getHash();
  let route = resolveRoutes(hash);
  const data = await getData(route);

  await masonryLayout(divElement.querySelector("#masonryLayout"), data, 3);

  return divElement;
};

export default Gallery;
