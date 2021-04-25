import getData2 from "@utils/getData2";
import getHash from "@utils/getHash";
import view from "../views/imageItem.html";

const ImageItem = async () => {
  const hash = getHash().split("?")[1];
  const imageItem = await getData2(hash);
  const miview = document.createElement("section");
  miview.innerHTML = view;
  console.log(miview.getElementById("item"));
  return miview;
};

export default ImageItem;
