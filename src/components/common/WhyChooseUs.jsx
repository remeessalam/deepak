import React, { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
import {
  whyChooseUsIcon1,
  whyChooseUsIcon2,
  whyChooseUsIcon3,
  whyChooseUsIcon4,
  whyChooseUsPng,
  whyChooseUsPng1,
} from "../../constant";

const WhyChooseUs = () => {
  const totalYrs = 200;
  const totalOnTimeCompletionPercentage = 99;
  const totalExperts = 175;
  const totalClients = 20;

  const [yrs, setYrs] = useState(0);
  const [onTimeCompletion, setOnTimeCompletion] = useState(0);
  const [experts, setExperts] = useState(0);
  const [clients, setClients] = useState(0);

  const { ref, inView } = useInView({
    triggerOnce: true, // Trigger only once
    threshold: 0.1, // Trigger when 10% of the component is visible
  });

  useEffect(() => {
    if (inView) {
      // Animate Years of Experience
      const yrsInterval = setInterval(() => {
        setYrs((prev) => Math.min(prev + 1, totalYrs));
      }, 5);

      // Animate Experts
      const expertsInterval = setInterval(() => {
        setExperts((prev) => Math.min(prev + 1, totalExperts));
      }, 5);

      // Animate Clients
      const clientsInterval = setInterval(() => {
        setClients((prev) => Math.min(prev + 1, totalClients));
      }, 50);

      // Animate On Time Completion Percentage
      const completionInterval = setInterval(() => {
        setOnTimeCompletion((prev) =>
          Math.min(prev + 1, totalOnTimeCompletionPercentage)
        );
      }, 10);

      // Clear intervals when animation reaches target values
      return () => {
        clearInterval(yrsInterval);
        clearInterval(expertsInterval);
        clearInterval(clientsInterval);
        clearInterval(completionInterval);
      };
    }
  }, [inView]);

  return (
    <section className="py-[5rem] backgroundstyle">
      <div className="wrapper text-center text-black flex flex-col gap-7">
        <div data-aos="fade-up" className="gradient-rounded-text-box mx-auto">
          Why Choose Us
        </div>
        <div className="flex flex-col gap-5">
          <h2 data-aos-offset={-200} data-aos="fade-up" className="heading-2">
            The Driving Force Behind Our AI-Powered IT Solutions
          </h2>
          <p
            data-aos-offset={-200}
            data-aos="fade-up"
            className="desc max-w-[40rem] mx-auto"
          >
            At [your-company-name], we’re dedicated to delivering AI-powered
            solutions that are custom-fit to your business needs. Our team is
            passionate about innovation and collaborates closely with you to
            understand your vision, transforming it into a digital reality that
            not only meets but exceeds expectations, driving growth and success.
          </p>
          {/* <div
            data-aos-offset={-400}
            data-aos="fade-up"
            className="w-full block lg:hidden"
          >
            <img
              src={whyChooseUsPng}
              className="object-contain max-h-[20rem] mx-auto"
              alt="why choose us"
            />
          </div> */}
          <div className="flex flex-col-reverse md:grid grid-cols-1 md:grid-cols-2 gap-5 max-w-[60rem] mr-auto">
            <div className="flex flex-col gap-5">
              <div
                data-aos-offset={-200}
                data-aos="fade-right"
                className="p-5 border border-primary bg-primary text-white rounded-xl w-full h-fit"
              >
                <div className="flex w-full text-start items-center justify-between gap-3">
                  <h5 className="text-xl font-semibold">Technical Expertise</h5>
                  <img
                    src={whyChooseUsIcon1}
                    className="h-[3rem] object-contain mb-3"
                    alt=""
                  />
                </div>
                <p className="desc text-primarytextcolor text-start mt-3">
                  A reputable IT company, [your-company-name] specializes in
                  crafting innovative, tailored solutions that align with your
                  business goals.
                </p>
              </div>
              <div
                data-aos-offset={-200}
                data-aos="fade-right"
                className="p-5 border border-primary bg-primary text-white rounded-xl w-full h-fit"
              >
                <div className="flex w-full text-start items-center justify-between gap-3">
                  <h5 className="text-xl font-semibold">
                    Innovation & Adaptability
                  </h5>
                  <img
                    src={whyChooseUsIcon2}
                    className="h-[3rem] object-contain mb-3"
                    alt=""
                  />
                </div>
                <p className="desc text-primarytextcolor text-start mt-3">
                  A forward-thinking approach focused on embracing change and
                  delivering creative, adaptable solutions to meet evolving
                  business needs.
                </p>
              </div>
            </div>
            <div
              data-aos-offset={-200}
              data-aos="fade-up"
              className="w-full md:w-full mx-auto md:mx-0"
            >
              <img
                src={whyChooseUsPng}
                alt="whyus1"
                className="h-[392px] w-full object-cover  rounded-xl"
              />
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 max-w-[60rem] ml-auto">
            <div
              data-aos-offset={-200}
              data-aos="fade-up"
              className=" w-full md:w-full  flex justify-end sm:mx-auto md:mx-0"
            >
              <img
                src={whyChooseUsPng1}
                alt="whyus1"
                className="max-h-[416px] w-full min-h-[300px] rounded-xl object-cover"
              />
            </div>

            <div className="flex flex-col gap-5 h-full">
              <div
                data-aos-offset={-200}
                data-aos="fade-left"
                className="p-5 border border-primary bg-primary text-white rounded-xl w-full h-full"
              >
                <div className="flex w-full text-start items-center justify-between gap-3">
                  <h5 className="text-xl font-semibold ">
                    Effective Communication
                  </h5>
                  <img
                    src={whyChooseUsIcon3}
                    className="h-[3rem] object-contain mb-3"
                    alt=""
                  />
                </div>
                <p className="desc text-primarytextcolor text-start mt-3">
                  Clear, transparent, and collaborative communication to ensure
                  alignment and build strong relationships.
                </p>
              </div>
              <div
                data-aos-offset={-200}
                data-aos="fade-left"
                className="p-5 border border-primary bg-primary text-white rounded-xl w-full h-full"
              >
                <div className="flex w-full text-start items-center justify-between gap-3">
                  <h5 className="text-xl font-semibold">
                    Security and Compliance
                  </h5>
                  <img
                    src={whyChooseUsIcon4}
                    className="h-[3rem] object-contain mb-3"
                    alt=""
                  />
                </div>
                <p className="desc text-primarytextcolor text-start mt-3">
                  Ensuring robust security measures and adherence to industry
                  standards to protect data, mitigate risks, and maintain
                  compliance. We employ encryption, conduct regular audits, and
                  stay updated with regulations to safeguard sensitive
                  information.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="pt-[3rem]">
          <div
            ref={ref}
            data-aos="fade-up"
            className="w-full grid sm:grid-cols-2 text-white lg:grid-cols-4 gap-6 sm:gap-10 lg:gap-5 rounded-3xl bg-gradient-to-r from-slate-900 to-primary/80 p-[2rem]"
          >
            <div className="w-full flex flex-col items-center justify-center">
              <div className="flex flex-col gap-3 relative w-fit">
                <h1 className="heading-1">{clients}</h1>
                <span className="absolute top-1 -right-3 text-lg">+</span>
              </div>
              <p className="font-medium mt-3">Global Reach</p>
            </div>
            <div className="w-full flex flex-col items-center justify-center">
              <div className="flex flex-col gap-3 relative w-fit">
                <h1 className="heading-1">{yrs}</h1>
                <span className="absolute top-1 -right-3 text-lg">+</span>
              </div>
              <p className="font-medium mt-3">Projects Completed</p>
            </div>
            <div className="w-full flex flex-col items-center justify-center">
              <div className="flex flex-col gap-3 relative w-fit">
                <h1 className="heading-1">{experts}</h1>
                <span className="absolute top-1 -right-3 text-lg">+</span>
              </div>
              <p className="font-medium mt-3">Customer Satisfaction</p>
            </div>
            <div className="w-full flex flex-col items-center justify-center">
              <div className="flex flex-col gap-3 relative w-fit">
                <h1 className="heading-1">{onTimeCompletion}</h1>
                <span className="absolute top-1 -right-3 text-lg">%</span>
              </div>
              <p className="font-medium mt-3">Success Rate</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
