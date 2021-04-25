import Logo from "@template/Logo";

const Header = () => {
  const view = `
  <div class="Header-main">
    <div class="container">
      <div class="logo">
        <h1 class="logo-main">
          <a class="logo-container" href="/"> 
            <div class="logo-icon">${Logo()}</div>
            <div class="logo-title">
              <span>SNEAK</span>
              <span>CREATIVE PORTOFLIO</span>
            </div>
          </a>
        </h1>
      </div>
      <nav class="Header-nav">
        <ul>
          <li><a href="#/branding">branding</a></li>
          <li><a href="#/web">web</a></li>
          <li><a href="#/photography">photography</a></li>
          <li><a href="#/app">app</a></li>
        </ul>
      </nav>
    </div>
  </div>
	`;
  return view;
};

export default Header;
