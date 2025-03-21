import React from "react";
import { appDevelopmentServices, webDevelopmentServices } from "../../constant";

const LandingServices = ({ page }) => {
  const services =
    page === "web-development"
      ? webDevelopmentServices
      : appDevelopmentServices;
  return (
    <div
      id="services"
      className="flex justify-center relative bg-backgroundcolor"
    >
      <div className="wrapper py-10 flex flex-col items-center gap-5 z-10 text-black">
        <div data-aos="fade-up" className="gradient-rounded-text-box mx-auto">
          Our {page === "web-development" ? "Web" : "App"} Development Services
        </div>
        <h1 data-aos="fade-up" className="heading-2 text-center max-w-2xl">
          {/* We provide the Best IT solution services */}
          {page === "web-development" &&
            "High-Quality Web Development to Transform Your Online Identity"}
          {page === "app-development" &&
            "Cutting-Edge App Development Services for Powerful Mobile Solutions"}
        </h1>
        <p data-aos="fade-up" className="text-center max-w-2xl desc">
          {page === "web-development" &&
            "High-performance web development services designed to create secure, scalable, and user-friendly websites that enhance your business's digital presence."}
          {page === "app-development" &&
            "High-performance app development services designed to deliver secure, scalable, and user-friendly applications that elevate your business's digital reach and engage your audience."}
        </p>
        <div
          data-aos="fade-up"
          className="grid grid-cols-1 sm:grid-cols-2 gap-4  py-[2rem] mx-auto max-w-6xl"
        >
          {services.map((item) => (
            <div
              key={item.id}
              className="shadow-2xl group transition-all border-2 border-primary/40 bg-primary hover:-translate-y-1 hover:bg-primary/75 duration-300 rounded-lg"
            >
              <div className="flex h-full flex-col gap-2 items-center text-center text-white hover:text-black p-5 rounded-lg">
                <img
                  src={item.icon}
                  alt="icon"
                  className="w-[6rem] grayscale-[65%]"
                />
                <h6 className="font-semibold text-2xl font-raleway">
                  {item.title}
                </h6>
                <p className="text-md text-white/70 group-hover:text-black desc">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LandingServices;
