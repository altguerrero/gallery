import view from "../views/Footer.html";

const Filter = async () => {
  const divElement = document.createElement("div");
  divElement.classList.add("Footer-main");
  divElement.innerHTML = `
    <h4 class="Footer-brand"> © ${new Date().getFullYear()} - <b>Sneak</b> All Right Reserved</h4>
    ${view}
  `;

  return divElement;
};

export default Filter;
