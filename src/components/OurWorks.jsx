import React from "react";
import {
  FaGooglePlay,
  FaGlobe,
  FaFigma,
  FaGamepad,
  FaBitcoin,
} from "react-icons/fa";
import {
  appPortfolio,
  appportfolio,
  blockchainportfolio,
  gameportfolio,
  uiuxportfolio,
  webPortfolio,
  webportfolio,
  wordportfolio,
} from "../constant";
import { Link } from "react-router-dom";

const PortfolioSection = ({ title, portfolio }) => (
  <div className="mb-10">
    <h2 className="text-2xl font-semibold mb-6 text-center lg:text-left">
      {title}
    </h2>
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {portfolio.map((item) => (
        <Link
          data-aos="fade-up"
          key={item.id}
          className="bg-white rounded-lg hover:scale-105 transition-all duration-300  shadow-lg overflow-hidden"
          // to={item.link}
        >
          <img
            src={item.img}
            alt={item.title}
            className="w-full h-48 object-cover"
          />
          <div className="p-4">
            <h3 className="text-lg font-semibold text-gray-800">
              {item.title}
            </h3>
          </div>
        </Link>
      ))}
    </div>
  </div>
);

const OurWorks = () => {
  return (
    <div className="backgroundstyle">
      <div className="py-[5rem]  wrapper ">
        <h1 className="gradient-rounded-text-box mb-5 mx-auto">Our Works</h1>
        <PortfolioSection title="App Development" portfolio={appPortfolio} />
        <PortfolioSection
          title="Website Development"
          portfolio={webPortfolio}
        />
        {/* <PortfolioSection
          title="WordPress Website Development"
          portfolio={wordportfolio}
        />
        <PortfolioSection title="UI/UX Design" portfolio={uiuxportfolio} />
        <PortfolioSection title="Game Development" portfolio={gameportfolio} />
        <PortfolioSection title="Blockchain" portfolio={blockchainportfolio} /> */}
      </div>
    </div>
  );
};

export default OurWorks;
