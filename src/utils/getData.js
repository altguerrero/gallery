const KEY = process.env.KEY;
const API = `${process.env.API}${KEY}`;

const getData = async (id) => {
  const apiURL = API;

  try {
    const response = await fetch(apiURL);
    const data = await response.json();
    return data;
  } catch (error) {
    console.log("Fetch Error", error);
  }
};

export default getData;
