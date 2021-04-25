const masonryLayout = (containerElem, itemsElems, columns) => {
  containerElem.classList.add(
    "container",
    "masonry-layout",
    `masonry-layout__column-${columns}`
  );

  let columnElements = [];

  for (let i = 0; i < columns; i++) {
    let column = document.createElement("div");
    column.classList.add("masonry-column", `column-${i + 1}`);
    containerElem.appendChild(column);
    columnElements.push(column);
  }
  for (let m = 0; m < Math.ceil(itemsElems.length / columns); m++) {
    for (let n = 0; n < columns; n++) {
      const item = document.createElement("div");
      const element = itemsElems[m * columns + n];

      if (element !== undefined) {
        item.innerHTML = `
          <a class="gallery-main" href="#/id?${element.id}">
            <img class="gallery-image" src="${element.urls.small}" alt="${element.alt_description}">
            <div class="gallery-content">
              <span class="gallery-title">${element.category_title}</span>
              <span class="gallery-buttom">Show more</span>
            </div>
          </a> `;
      }

      columnElements[n].appendChild(item);
    }
  }
};

export default masonryLayout;
