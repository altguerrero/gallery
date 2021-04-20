import getData from "@utils/getData";

const Template = async () => {
  const data = await getData("carro");
  const view = `
    <div class="name">
    <h1>Hello world</h1>  
    ${data[7].id}
      
    </div>
  `;
  return view;
};

export default Template;
