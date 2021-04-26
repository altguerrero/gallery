import getHash from "@utils/getHash";
import getData from "@utils/getData";
import resolveRoutes from "@utils/resolveRoutes";
import view from "../views/Gallery.html";
import masonryLayout from "@utils/masonryLayout";
import showMore from "@utils/showMore";

const Gallery = async () => {
  const divElement = document.createElement("div");
  divElement.innerHTML = `
    ${view}
    <buttom class="buttom buttom__primary" id="showMore" data-next="2">
      Show Me More
    </buttom>
  `;

  let hash = getHash();
  divElement.id = `#/${hash}`;
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

  const container = divElement.querySelector("#masonryLayout");

  const small = window.matchMedia("(min-width: 640px)");
  const medium = window.matchMedia("(min-width: 768px)");

  // Refactorizar
  const changeColumn = async (col) => {
    container.innerHTML = "";
    await masonryLayout(container, data, col);
  };

  const changeSmall = (mql) => {
    mql.matches ? changeColumn(2) : changeColumn(1);
  };

  const changeMedium = (mql) => {
    mql.matches ? changeColumn(3) : changeColumn(2);
  };

  small.addListener(changeSmall);
  medium.addListener(changeMedium);

  if (medium.matches) {
    changeMedium(medium);
  } else if (small.matches) {
    changeSmall(small);
  } else {
    changeSmall(small);
  }
  // End Refactorizar

  // show more
  const showButton = divElement.querySelector("#showMore");
  await showButton.addEventListener("click", async () => {
    const colums = await document.querySelectorAll(".masonry-column");
    let pageNext = showButton.dataset.next;

    let moreData = [];

    if (route == "/") {
      for (let m = 0; m < pages.length; m++) {
        let moreDataPage = await getData(pages[m], "more", pageNext);
        for (let n = 0; n < moreDataPage.length; n++) {
          moreDataPage[n].category_title = pages[m];
          moreData.push(moreDataPage[n]);
        }
      }
    } else {
      moreData = await getData(route, "more", pageNext);
      moreData.map((item) => {
        item.category_title = hash;
      });
    }

    showButton.setAttribute("data-next", Number(pageNext) + 1);

    await showMore(moreData, colums);
  });

  return divElement;
};

export default Gallery;
