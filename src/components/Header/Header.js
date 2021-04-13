import React, { useState } from "react";
// import logoRodWhite from "../../assets/images/rodlogo-white.png";
// import logoRodDark from "../../assets/images/rodlogo-dark.png";
const Header = () => {
  const [menuOpen, setmenuOpen] = useState(false);

  const menuOpenHandler = () => {
    setmenuOpen((prev) => !prev);
  };
  return (
    <header className="site-header site-header-menu--right">
      <div className="container-fluid pr-lg--30 pl-lg--30">
        <nav className="navbar site-navbar offcanvas-active navbar-expand-lg navbar-light">
          <div className="brand-logo">
            <a href="/">
              {/* <img src={logoRodWhite} alt="Rodrigo Brand"></img>
              <img src={logoRodDark} alt="Rodrigo Brand"></img> */}
              <h2 className="gr-text-6 font-weight-bolder">audioShare.</h2>
            </a>
          </div>
          <div
            className={
              menuOpen
                ? "collapse navbar-collapse show"
                : "collapse navbar-collapse"
            }
            id="mobile-menu"
          >
            <div className="navbar-nav mr--10">
              <ul className="navbar-nav main-menu">
                <li className="nav-item">
                  <a
                    className="nav-link gr-text-color font-weight-bold modal-trigger gr-text-11 "
                    href="/"
                  >
                    home
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link gr-text-color font-weight-bold modal-trigger gr-text-11 "
                    href="/archive"
                  >
                    archive
                  </a>
                </li>
              </ul>
            </div>
            <button
              onClick={() => menuOpenHandler()}
              className={
                menuOpen
                  ? "d-block d-lg-none offcanvas-btn-close "
                  : "d-block d-lg-none offcanvas-btn-close collapsed"
              }
              type="button"
              data-toggle="collapse"
              data-target="#mobile-menu"
              aria-controls="mobile-menu"
              aria-expanded={menuOpen ? "true" : "false"}
              aria-label="Toggle navigation"
            >
              <i className="gr-cross-icon"></i>
            </button>
          </div>
          <button
            onClick={() => menuOpenHandler()}
            className={
              menuOpen
                ? "navbar-toggler btn-close-off-canvas hamburger-icon border-0 collapsed"
                : "navbar-toggler btn-close-off-canvas hamburger-icon border-0"
            }
            type="button"
            data-toggle="collapse"
            data-target="#mobile-menu"
            aria-controls="mobile-menu"
            aria-expanded={menuOpen ? "true" : "false"}
            aria-label="Toggle navigation"
          >
            <div className="hamburger hamburger--squeeze js-hamburger">
              <div className="hamburger-box">
                <div className="hamburger-inner"></div>
              </div>
            </div>
          </button>
        </nav>
      </div>
    </header>
  );
};

export default Header;
