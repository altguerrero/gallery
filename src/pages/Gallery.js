import getHash from "@utils/getHash";
import getData from "@utils/getData";
import resolveRoutes from "@utils/resolveRoutes";

const Gallery = async () => {
  let hash = getHash();
  let route = resolveRoutes(hash);

  const query =
    route == "/" ? ["branding", "web", "photography", "app"] : route;
  let data = [];
  if (typeof query == "object") {
    for (let i = 0; i < query.length; i++) {
      let value = await getData(query[i]);
      value.map((item) => {
        item.category_title = query[i];
        data.push(item);
      });
    }
  } else {
    data = await getData(query);
    data.map((item) => (item.category_title = query));
  }
  const columns = 3;
  let column = "";
  let items = [];

  for (let i = 0; i < columns; i++) items.push("");

  for (let m = 0; m < Math.ceil(data.length / columns); m++) {
    for (let n = 0; n < columns; n++) {
      let item = data[m * columns + n];
      if (item) {
        items[n] += `
        <a class="gallery-main" href="#/id?${item.id}">
          <img class="gallery-image" src="${item.urls.small}" alt="${item.alt_description}">  
          <div class="gallery-content">
            <span class="gallery-title">${item.category_title}</span>
            <span class="gallery-buttom">Show more</span>
          </div>
        </a>
      `;
      }
    }
  }

  for (let i = 0; i < columns; i++) {
    column += `
    <section class="masony-column column-${i + 1}">
      ${items[i]}
    </section>`;
  }
  const view = `
    <section class="container masonry-layout masonry-layout__column-${columns}">
      ${column}
    </section>`;

  return view;
};

export default Gallery;

// ${characters
//   .map(
//     (character) => `
//   <article class="Character-item">
//     <a href="#/${character.id}/">
//       <img src="${character.urls.small}" alt="${character.alt_description}">
//     </a>
//   </article>
// `
//   )
//   .join("")}
