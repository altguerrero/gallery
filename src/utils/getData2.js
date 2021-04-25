const API = "https://api.unsplash.com";
const KEY = "9aOLFPb3Ka8cPe8zRwifGVJEcigjV7QpEC4vzPmcz5Y";
const getData2 = async (query) => {
  try {
    const apiURl = `${API}/photos/${query}/?client_id=${KEY}`;
    const response = await fetch(apiURl);
    const data = await response.json();
    return data;
  } catch (error) {
    console.log("Fetch Error", error);
  }
};

export default getData2;
