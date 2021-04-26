const showMore = (itemsElems, columns) => {
  for (let m = 0; m < Math.ceil(itemsElems.length / columns.length); m++) {
    for (let n = 0; n < columns.length; n++) {
      const item = document.createElement("div");
      const element = itemsElems[m * columns.length + n];

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

      columns[n].appendChild(item);
    }
  }
};

export default showMore;
