import React, { useState } from "react";
import { allServices } from "../../constant";
import { PiCaretDoubleRightBold } from "react-icons/pi";
import { Link } from "react-router-dom";
import Drawer from "react-modern-drawer";
import { IoMdClose } from "react-icons/io";

const OurServices = ({ length }) => {
  const [isOpen, setIsOpen] = useState(false);
  const services = allServices.slice(0, length || allServices.length);
  const [selectedService, setSelectedService] = useState(services[0]);

  const handleSelectServiceToShowDetail = (service) => {
    setSelectedService(service);
    setIsOpen(true);
  };
  return (
    <div className="py-[5rem] backgroundstyle text-white">
      <div
        data-aos="fade-up"
        className="wrapper flex flex-col text-center gap-5 items-center"
      >
        <div data-aos="fade-up" className="gradient-rounded-text-box mb-2">
          Our Services
        </div>
        <h2 data-aos="fade-up" className="heading-2 max-w-[50rem]">
          Advanced and Highly Reliable Performance
        </h2>
        <p data-aos="fade-up" className="desc max-w-[50rem]">
          Your success is our success and together we help our society to become
          a better place to live and work.
        </p>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-5 mt-3">
          {services.map((service) => (
            <div key={service.id} data-aos="fade-up" className="h-full">
              <div
                onClick={() => handleSelectServiceToShowDetail(service)}
                key={service.id}
                className="group h-full hover:scale-105 transition-all duration-300 rounded-lg p-[1px] bg-gradient-to-r from-slate-900 to-primary cursor-pointer"
              >
                {
                  // bg-[#101010]
                }

                <div className="rounded-lg bg-primary group-hover:bg-primary/50 transition-all duration-300 p-5 flex flex-col justify-between items-start text-start h-full gap-4">
                  <div className="flex flex-col gap-3">
                    <div className="bg-black/50 w-fit p-4 rounded-full">
                      <img
                        src={service.icon}
                        alt=""
                        className="w-14 h-14 group-hover:scale-105 transition-all duration-500"
                      />
                    </div>
                    <h5 className="font-semibold text-xl font-raleway text-white">
                      {service.title}
                    </h5>
                    <p className="desc text-white/80">{service.desc}</p>
                  </div>
                  <button
                    onClick={() => handleSelectServiceToShowDetail(service)}
                    className="desc mt-1 flex items-center gap-3 text-white group-hover:underline  underline-offset-4 transition-all duration-300"
                  >
                    Learn More <PiCaretDoubleRightBold />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
        {length && (
          <Link to="/services" className="primary-btn mt-6">
            All Services
          </Link>
        )}
      </div>

      <Drawer
        open={isOpen}
        onClose={() => setIsOpen(false)}
        direction="top"
        className=" z-10 w-screen !bg-white"
        lockBackgroundScroll
        style={{ backgroundColor: "white" }}
      >
        <div className="  flex items-center justify-end pr-[.7rem] py-[.4rem] bg-white">
          <button
            onClick={() => setIsOpen(false)}
            className="text-black text-[2.2rem]"
          >
            <IoMdClose />
          </button>
        </div>
        <div className="flex flex-col gap-6 tex-white pb-[2rem] bg-white p-4">
          <div>
            <img
              src={selectedService.img}
              alt={selectedService.title}
              className=" max-h-[30rem] mx-auto rounded-xl"
            />
          </div>
          <h1 className="heading-2 text-primary">{selectedService.title}</h1>
          <p className="desc whitespace-pre-line !text-black/80">
            {selectedService.detailContent}
          </p>
        </div>
      </Drawer>
    </div>
  );
};

export default OurServices;
