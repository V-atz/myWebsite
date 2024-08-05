import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import {
  UilEstate,
  UilUser,
  UilMessage,
  UilBriefcaseAlt,
  UilApps,
  UilTimes,
} from "@iconscout/react-unicons";
import mainLogo from "../../assets/mainLogo.png";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className="shadow-sm sticky z-50 top-0 bg-white">
      <nav className="border-gray-200 px-4 lg:px-6 py-2.5">
        <div className="flex flex-wrap justify-center ps-2 lg:ps-[8.3vw] pe-2 lg:pe-[8vw] items-center mx-auto max-w-screen-xl">
          <div className="flex  items-center justify-between w-full lg:w-auto">
            <Link to="/" className="flex items-center">
              <img
                src={mainLogo}
                style={{
                  height: "40px",
                  width: "37px",
                }}
                alt="Logo"
              />
            </Link>
            <div className="lg:hidden  ml-auto">
              {isMenuOpen ? (
                <UilTimes
                  onClick={toggleMenu}
                  className="text-3xl cursor-pointer"
                />
              ) : (
                <UilApps
                  onClick={toggleMenu}
                  className="text-3xl cursor-pointer"
                />
              )}
            </div>
          </div>
          <div
            className={`${
              isMenuOpen ? "block" : "hidden"
            } lg:flex lg:flex-row lg:items-center lg:w-auto lg:ml-auto`}
            id="mobile-menu-2"
          >
            <ul className="flex flex-row lg:flex-row items-center justify-center space-x-3 lg:space-x-8 mt-4 lg:mt-0">
              <li>
                <NavLink
                  to="/"
                  onClick={closeMenu}
                  className={({ isActive }) =>
                    `block py-2 pr-4 pl-3 duration-200 ${
                      isActive ? "text-black" : "text-gray-500"
                    } border-b lg:border-0 hover:bg-gray-50 lg:hover:bg-transparent hover:text-black`
                  }
                >
                  <div className="flex flex-col lg:flex-row items-center justify-center gap-2">
                    <UilEstate /> Home
                  </div>
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/about"
                  onClick={closeMenu}
                  className={({ isActive }) =>
                    `block py-2 pr-4 pl-3 duration-200 ${
                      isActive ? "text-black" : "text-gray-500"
                    } border-b lg:border-0 hover:bg-gray-50 lg:hover:bg-transparent hover:text-black`
                  }
                >
                  <div className="flex flex-col lg:flex-row items-center justify-center gap-2">
                    <UilUser /> About
                  </div>
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/projects"
                  onClick={closeMenu}
                  className={({ isActive }) =>
                    `block py-2 pr-4 pl-3 duration-200 ${
                      isActive ? "text-black" : "text-gray-500"
                    } border-b lg:border-0 hover:bg-gray-50 lg:hover:bg-transparent hover:text-black`
                  }
                >
                  <div className="flex flex-col lg:flex-row items-center justify-center gap-2">
                    <UilBriefcaseAlt /> Projects
                  </div>
                </NavLink>
              </li>
              <li className="me-0 lg:me-[5vw]">
                <NavLink
                  to="/contact"
                  onClick={closeMenu}
                  className={({ isActive }) =>
                    `block py-2 pr-4 pl-3 duration-200 ${
                      isActive ? "text-black" : "text-gray-500"
                    } border-b lg:border-0 hover:bg-gray-50 lg:hover:bg-transparent hover:text-black`
                  }
                >
                  <div className="flex flex-col lg:flex-row items-center justify-center gap-2">
                    <UilMessage /> Contact
                  </div>
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}
