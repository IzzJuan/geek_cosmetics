import React, { useState } from "react";

//importo enrutador
import { Link } from "react-router-dom";

//importo css
import "./styles/Navbar.css";

//import images
import menu from "../images/menu_white.png";
import up from "../images/up.png";
import car from "../images/shopping-car.png";

const Navbar = ({ carritoAccount }) => {
  const [showNav2, setShowNav2] = useState(false);
  const [isLogged] = useState(true);
  
  return (
    <div className="header-container">
      <header className="navbarStyles" style={{ zIndex: "5" }}>
        <ul
          style={{ listStyleType: "none" }}
          className="navbarListContainer mt-3"
        >
          <li className="navbarList" style={{ width: "100%" }}>
            <div className="d-flex justify-content-between">
              <div className="navbarList">
                <Link to="/" className="linkStyles">
                  Inicio
                </Link>
                <Link to="/store" className="linkStyles">
                  Comprar
                </Link>
                  {/*<Link
                  to="/misproductos"
                  className="linkStyles"
                  onClick={() => setShowNav2(false)}
                >
                  Mis productos
                </Link>*/}
              </div>
              <div className="navbarList" style={{ marginRight: "1%" }}>
                {isLogged ? (
                  <Link to="/buycart" className="linkStyles">
                    {carritoAccount.product_quantity < 1 ? null : (
                      <span
                        style={{
                          marginRight: "0.5rem",
                          background: "red",
                          borderRadius: "50%",
                          padding: "0.025rem 0.3rem",
                        }}
                      >
                        {carritoAccount.product_quantity}
                      </span>
                    )}
                    <img src={car} className="imgMenu" alt="menu" />
                  </Link>
                ) : (
                  <>
                    <Link to="/login" className="linkStyles">
                      Iniciar Sesión
                    </Link>
                    <Link to="/register" className="linkStyles">
                      Registrarse
                    </Link>
                  </>
                )}
              </div>
            </div>
          </li>
          <li className="navbarList2">
            {!showNav2 ? (
              <button className="btn-menu">
                <img
                  src={menu}
                  className="imgMenu"
                  alt="menu"
                  onClick={() => setShowNav2(true)}
                />
              </button>
            ) : (
              <div
                style={{ width: "100%" }}
                className="containerNavbarList2body"
              >
                <div className="containerBtnMenu2">
                  <button className="btn-menu">
                    <img
                      src={up}
                      className="imgMenu"
                      alt="menu"
                      onClick={() => setShowNav2(false)}
                    />
                  </button>
                </div>
                <div className="containerLinks2 d-flex flex-row">
                  <div className="d-flex flex-column" style={{ width: "50%" }}>
                    <Link
                      to="/"
                      className="linkStyles"
                      onClick={() => setShowNav2(false)}
                    >
                      Inicio
                    </Link>
                    <Link
                      to="/store"
                      className="linkStyles"
                      onClick={() => setShowNav2(false)}
                    >
                      Comprar
                    </Link>
                    <Link
                      to="/misproductos"
                      className="linkStyles"
                      onClick={() => setShowNav2(false)}
                    >
                      Mis productos
                    </Link>
                  </div>
                  <div className="d-flex flex-column" style={{ width: "50%" }}>
                    {isLogged ? (
                      <Link
                        to="/buycart"
                        style={{ width: "100%" }}
                        className="linkStyles d-flex flex-row justify-content-end mt-1"
                        onClick={() => setShowNav2(false)}
                      >
                        {carritoAccount.product_quantity < 1 ? null : (
                          <span
                            className="d-flex justify-content-center align-items-center"
                            style={{
                              marginRight: "0.5rem",
                              background: "red",
                              borderRadius: "3px",
                              padding: "0px 0.7rem",
                              fontSize: "13px",
                            }}
                          >
                            {carritoAccount.product_quantity}
                          </span>
                        )}
                        <img src={car} className="imgMenu" alt="menu" />
                      </Link>
                    ) : (
                      <>
                        <Link
                          to="/login"
                          className="linkStyles2 d-flex justify-content-end"
                          style={{ width: "100%" }}
                        >
                          Iniciar Sesion
                        </Link>
                        <Link
                          to="/register"
                          className="linkStyles2 d-flex justify-content-end"
                          style={{ width: "100%" }}
                        >
                          Registrarse
                        </Link>
                      </>
                    )}
                  </div>
                </div>
              </div>
            )}
          </li>
        </ul>
      </header>
      <div
        className={!showNav2 ? "divTouchLeave2" : "divTouchLeave"}
        style={{
          height: "100vh",
          width: "100vw",
          background: "none",
          position: "fixed",
          zIndex: "4",
        }}
        onClick={() => setShowNav2(false)}
      />
    </div>
  );
};

export default Navbar;
