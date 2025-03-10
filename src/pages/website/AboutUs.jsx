import React from "react";
import {
  aboutUsBanner,
  aboutUsGridImg1,
  aboutUsGridImg2,
  aboutUsGridImg3,
  aboutUsGridImg4,
  aboutUsGridImg5,
  features,
  whyChooseUsContent,
} from "../../constant";
import UnlockEfficiency from "../../components/common/UnlockEfficiency";
import OurServices from "../../components/website/OurServices";
import Testimonials from "../../components/common/Testimonials";
import OurWorks from "../../components/OurWorks";

const AboutUs = () => {
  return (
    <>
      <div
        data-aos="fade-down"
        className="h-[40vh] sm:h-[55vh] md:h-[70vh] relative backgroundstyle"
      >
        <img
          src={aboutUsBanner}
          className="object-cover object-[100%_35%] h-full w-full"
          alt=""
        />
      </div>
      <div className="py-[5rem] text-white text-center backgroundstyle">
        <div className="wrapper flex flex-col items-center gap-5 mb-[5rem]">
          <div data-aos="fade-up" className="gradient-rounded-text-box">
            About Us
          </div>
          <h2 data-aos="fade-up" className="heading-2">
            Innovating the Future with Technology
          </h2>
          <p data-aos="fade-up" className="desc max-w-[50rem]">
            We are a technology-driven company committed to delivering
            cutting-edge solutions in software development, artificial
            intelligence, data analytics, and digital transformation.
            <br />
            <br />
            Our expertise lies in developing tailored, innovative solutions that
            address real-world business challenges. With deep knowledge in cloud
            computing, mobile application development, and AI-powered
            automation, our team ensures your business remains competitive and
            future-ready.
          </p>
          <div className="min-h-screen py-20 px-4 sm:px-6 lg:px-8">
            <div className="wrapper">
              <div className="text-center mb-16">
                <h2
                  data-aos="fade-up"
                  className="text-4xl md:text-5xl font-bold text-gray-900 mb-4"
                >
                  Transforming Ideas into Smart Solutions
                </h2>
                <p
                  data-aos="fade-up"
                  className="text-xl text-gray-600 max-w-3xl mx-auto"
                >
                  Explore how our expertise in AI, cloud computing, and data
                  science can help you unlock new possibilities and accelerate
                  business growth.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {features.map((feature, index) => (
                  <div data-aos="fade-up" key={index} className="h-full">
                    <div
                      key={index}
                      className="group bg-primary h-full hover:bg-primary/40 relative rounded-2xl shadow-lg p-8 transition-all duration-300 hover:shadow-xl hover:-translate-y-1 overflow-hidden"
                    >
                      <div className="absolute inset-0 bg-gradient-to-r from-purple-500/5 to-indigo-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                      <div className="relative z-10">
                        <span className="text-4xl mb-6 block">
                          {feature.icon}
                        </span>

                        <h3 className="text-xl font-semibold group-hover:text-gray-900 text-gray-100 mb-4">
                          {feature.title}
                        </h3>

                        <p className="text-gray-200 group-hover:text-gray-900 leading-relaxed">
                          {feature.description}
                        </p>
                      </div>

                      <div className="absolute bottom-0 left-0 h-1 w-0 bg-gradient-to-r from-purple-500 to-indigo-500 transition-all duration-300 group-hover:w-full" />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <UnlockEfficiency />

        <div className="py-16 px-4 sm:px-6 lg:px-8 bg-backgroundcolor">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 data-aos="fade-up" className="heading-2">
                Why Choose WEBZIT MEDIA?
              </h2>
            </div>

            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-2">
              {whyChooseUsContent.map((feature, index) => (
                <div key={index} data-aos="fade-up" className="h-full">
                  <div className="p-6 h-full hover:scale-105 transition-all duration-300 bg-primary rounded-lg border border-gray-200 hover:border-slate-500">
                    <h3 className="text-xl font-semibold text-white mb-3">
                      {feature.title}
                    </h3>
                    <p className="text-white leading-relaxed">{feature.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <OurServices length={6} />
      <OurWorks />
      <Testimonials />
    </>
  );
};

export default AboutUs;
