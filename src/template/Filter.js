import Logo from "@template/Logo";

const Filter = () => {
  const view = `
  <div class="Filter-nav">
    <ul>
      <li><a href="/">All</a></li>
      <li><a href="#/branding">branding</a></li>
      <li><a href="#/web">web</a></li>
      <li><a href="#/photography">photography</a></li>
      <li><a href="#/app">app</a></li>
    </ul>
  </div>
	`;
  return view;
};

export default Filter;
