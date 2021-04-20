import Template from "@template/template.js";
import "@styles/main.css";
import "@styles/index.scss";

(async function App() {
  const main = null || document.getElementById("main");
  main.innerHTML = await Template();
})();
