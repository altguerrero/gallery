const API = "https://api.unsplash.com";
const KEY = "9aOLFPb3Ka8cPe8zRwifGVJEcigjV7QpEC4vzPmcz5Y";
const getData = async (query) => {
  try {
    const apiURl = `${API}/search/photos?query=${query}&client_id=${KEY}`;
    const response = await fetch(apiURl);
    const data = await response.json();
    return data.results;
  } catch (error) {
    console.log("Fetch Error", error);
  }
};

export default getData;
