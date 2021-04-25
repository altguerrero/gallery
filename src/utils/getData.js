const API = "https://api.unsplash.com";
const KEY = "9aOLFPb3Ka8cPe8zRwifGVJEcigjV7QpEC4vzPmcz5Y";
const getData = async (query, type) => {
  try {
    let apiURl;
    switch (type) {
      case ":id":
        apiURl = `${API}/photos/${query}/?client_id=${KEY}`;
        break;
      default:
        apiURl = `${API}/search/photos?query=${query}&client_id=${KEY}`;
        break;
    }
    const response = await fetch(apiURl);
    const data = await response.json();

    switch (type) {
      case ":id":
        return data;
        break;
      default:
        return data.results;
        break;
    }
  } catch (error) {
    console.log("Fetch Error", error);
  }
};

export default getData;
