import React, { useEffect, useState } from "react";
import { HashLink as Link } from "react-router-hash-link";

import "src/components/Header/Header.css";
import hackIcon from "src/icons/hack_icon_black.png";
import { me } from "src/services/AuthenticationService";

const Header = () => {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  const closeMenu = () => {
    setShowMenu(false);
  };

  function togglePopup() {
    const popup = document.getElementById("popupp");
    if (popup.classList.contains("active")) {
      popup.classList.remove("active");
    } else {
      popup.classList.add("active");
    }
  }

  function logOut() {
    localStorage.clear();
    setIsLogged(false);
  }

  const [icon, setUserIcon] = useState(null);
  const [username, writeUserName] = useState(null);
  const [isLogged, setIsLogged] = useState(localStorage.getItem("userToken"));

  useEffect(() => {
    const fetchData = async () => {
      try {
        const info = await me();
        if (info.nickname) {
          //Si te nickname vol dir que la obtencio de dades es posible i que tambe hi haurá imatge
          writeUserName(info.nickname);
          setUserIcon(info.image);
        }
      } catch (error) {
        console.log("El error obtenido es:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      <nav className="navbar navbar-expand-md inherited-top">
        <div className="container">
          <Link to="/#home" className="navbar-brand icono">
            <img src={hackIcon} alt="Icono" className="icono" />
          </Link>

          <div className="order-md-1">
            <button
              className={`navbar-toggler ${showMenu ? "open" : ""}`}
              type="button"
              onClick={toggleMenu}
            >
              <span className="navbar-toggler-icon" />
            </button>
          </div>

          <div
            className={`collapse navbar-collapse peperse ${
              showMenu ? "show" : ""
            } justify-content-lg-end`}
          >
            <ul className="navbar-nav ml-auto">
              {/*<li className="nav-item">
              <Link to="/#home" className="nav-link" onClick={closeMenu}>
                Home
              </Link>
            </li>*/}
              <li className="nav-item">
                <Link to="/#dates" className="nav-link" onClick={closeMenu}>
                  Dates
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/#sponsors" className="nav-link" onClick={closeMenu}>
                  Sponsors
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/dailyhacks" className="nav-link" onClick={closeMenu}>
                  Dailyhack
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/faq" className="nav-link" onClick={closeMenu}>
                  FAQ
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/contacte" className="nav-link" onClick={closeMenu}>
                  Contacte
                </Link>
              </li>

              {isLogged ? (
                <li className="nav-item">
                  <Link to="" className="nav-link" onClick={togglePopup}>
                    <div className="profileImage2 d-flex">
                      {icon !== "string" ? (
                        <img
                          className="Profile"
                          src={icon}
                          alt="foto de perfil"
                        />
                      ) : (
                        <i class="fa-solid fa-user m-auto" />
                      )}
                    </div>
                  </Link>
                </li>
              ) : (
                //Aixo es quan no existeix sessió
                <li className="nav-item">
                  <Link to="" className="nav-link" onClick={togglePopup}>
                    <i className="fa-solid fa-user" />
                  </Link>
                </li>
              )}
            </ul>
          </div>
        </div>
      </nav>
      <div id="popupp" className="popup-contenter">
        <div className="popup-options">
          {isLogged ? (
            <>
              <div className="InfoProfile">
                <div className="profileImage d-flex">
                  {icon !== "string" ? (
                    <img className="Profile" src={icon} alt="foto de perfil" />
                  ) : (
                    <i class="fa-solid fa-user m-auto text-black" />
                  )}
                </div>
                <p className="title3">{username}</p>
              </div>
              <div className="buttonsFlex">
                <Link
                  to="/perfil"
                  className="py-2 px-4 m-auto apuntat-buttonex"
                >
                  El meu perfil
                </Link>
              </div>
              <br />
              <Link to="/" className="logOut" onClick={logOut}>
                <p>
                  {" "}
                  <i className="fa-solid fa-door-open" /> Surt de la sessió
                </p>
              </Link>
            </>
          ) : (
            <>
              <div className="InfoProfile">
                <p className="title3">El meu perfil</p>
              </div>

              <div className="buttonsFlex">
                <Link
                  to="/login"
                  state={{ nextScreen: "/perfil" }}
                  className="py-2 px-4 m-auto apuntat-buttonex"
                >
                  Inicia sesió
                </Link>

                <Link
                  to="/entrance"
                  className="py-2 px-4 m-auto apuntat-buttonex"
                >
                  Crear compte {/*Aquesta porta a user-enter */}
                </Link>
              </div>
              <br />
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default Header;
