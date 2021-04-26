const API = process.env.API;
const KEY = process.env.KEY;
const getData = async (query, type, page) => {
  try {
    let apiURl;
    switch (type) {
      case ":id":
        apiURl = `${API}/photos/${query}/?client_id=${KEY}`;
        break;
      case "more":
        apiURl = `${API}/search/photos?query=${query}&page=${page}&client_id=${KEY}`;
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
