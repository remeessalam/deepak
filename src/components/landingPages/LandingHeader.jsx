import Drawer from "react-modern-drawer";
import { Divide as Hamburger } from "hamburger-react";
import { IoMdClose } from "react-icons/io";
import React, { useState } from "react";
import { Link } from "react-scroll";
import { logoImg } from "../../constant";
import { div } from "framer-motion/client";

const options = [
  {
    name: "Home",
    path: "banner",
  },
  {
    name: "About Us",
    path: "about",
  },
  {
    name: "Services",
    path: "services",
  },
  {
    name: "Portfolio",
    path: "portfolio",
  },
  {
    name: "Contact Us",
    path: "contact",
  },
];

const LandingHeader = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDrawer = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className=" fixed w-full top-0  z-50 text-white">
      <div className="w-[95%] py-4 mx-auto bg-primary/40 border-b border-x border-slate-500 backdrop-blur-md rounded-b-2xl ">
        <div className="wrapper flex justify-between items-center gap-10">
          <div className="flex justify-between items-center gap-20 w-full pl-[1rem] lg:pl-0">
            <Link smooth={true} to="banner" className="cursor-pointer">
              <img
                src={logoImg}
                className="h-[3rem] md:h-[3.75rem] scale-125"
                alt="logo"
              />
            </Link>
            <div className="lg:flex items-center gap-10 hidden">
              {options.map((option) =>
                option.name === "Home" ? (
                  <a href="/" className="link text-sm">
                    Home
                  </a>
                ) : (
                  <Link
                    to={`${option.path}`}
                    className="link text-sm"
                    key={option.path}
                    spy={true}
                    smooth={true}
                    offset={-60}
                    duration={1000}
                    activeClass="active-link"
                  >
                    {option.name}
                  </Link>
                )
              )}
            </div>
          </div>
          <Drawer
            open={isOpen}
            onClose={toggleDrawer}
            direction="right"
            className="py-4 px-10 z-10"
          >
            <div className="mb-6 flex items-center justify-end pr-[.7rem] py-[.4rem]">
              <button
                onClick={() => setIsOpen(false)}
                className="text-white text-[2.2rem]"
              >
                <IoMdClose />
              </button>
            </div>
            <div className="flex flex-col gap-6">
              {options.map(({ name, path, id }) =>
                name === "Home" ? (
                  <a
                    href="/"
                    className="text-3xl text-white font-medium transition-colors duration-300 link"
                  >
                    Home
                  </a>
                ) : (
                  <Link
                    onClick={() => setIsOpen(false)}
                    key={id}
                    className="text-3xl text-white font-medium transition-colors duration-300 link"
                    to={path}
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={1000}
                  >
                    {name}
                  </Link>
                )
              )}
            </div>
          </Drawer>
          <div
            className="block lg:hidden justify-self-end"
            onClick={toggleDrawer}
          >
            <Hamburger
              color="white"
              size="23"
              toggled={isOpen}
              rounded
              toggle={setIsOpen}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingHeader;
