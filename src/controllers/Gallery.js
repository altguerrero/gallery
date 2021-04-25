import getHash from "@utils/getHash";
import getData from "@utils/getData";
import resolveRoutes from "@utils/resolveRoutes";
import view from "../views/Gallery.html";
import masonryLayout from "@utils/masonryLayout";

const Gallery = async () => {
  const divElement = document.createElement("div");
  divElement.innerHTML = view;

  let hash = getHash();
  divElement.id = `#/${hash}`

  let route = resolveRoutes(hash);

  const pages = ["branding", "web", "photography", "app"];

  let data = [];

  if (route == "/") {
    for (let m = 0; m < pages.length; m++) {
      let dataPage = await getData(pages[m]);
      for (let n = 0; n < dataPage.length; n++) {
        dataPage[n].category_title = pages[m];
        data.push(dataPage[n]);
      }
    }
  } else {
    data = await getData(route);
    data.map((item) => {
      item.category_title = hash;
    });
  }

  await masonryLayout(divElement.querySelector("#masonryLayout"), data, 3);

  return divElement;
};

export default Gallery;
