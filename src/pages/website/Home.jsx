import React from "react";
import { Link } from "react-router-dom";
import Contact from "../../components/landingPages/Contact";
import aboutUsImg from "../../assets/images/landing-aboutus.jpg";
import WhyChooseUs from "../../components/common/WhyChooseUs";
import ReactPlayer from "react-player";
import { homeBannerVideo, whowearebh } from "../../constant";
import OurServices from "../../components/website/OurServices";
import EndlessOpportunitiesSection from "../../components/common/EndlessOpportunitiesSection";
import UnlockEfficiency from "../../components/common/UnlockEfficiency";

const Home = () => {
  return (
    <div className="backgroundstyle">
      <div id="banner" className="h-screen relative">
        <ReactPlayer
          url={homeBannerVideo}
          loop
          muted
          width="100%"
          height="100%"
          playsinline
          playing
          className="absolute"
        />
        <div className="bg-gradient-to-r to-black/90 from-transparent absolute w-full h-full"></div>
        <div className="pt-[3rem] wrapper flex items-center h-full">
          <div
            data-aos="fade-up"
            className="relative z-10 px-6 justify-center h-full text-white flex flex-col items-center gap-5 text-center md:max-w-[60rem] mx-auto"
          >
            <div className="rounded-text-box border-white/70 font-medium">
              Technology Solutions
            </div>
            <h1 className="heading-1">
              Transforming Businesses <br /> Through Cutting-Edge Technology
            </h1>
            <p className="desc">
              We deliver advanced digital solutions to enhance operational
              efficiency, drive innovation, and accelerate business growth in
              today's dynamic world.
            </p>
            <Link to="/contact-us" className="primary-btn mt-2">
              Get in Touch
            </Link>
          </div>
        </div>
      </div>

      <section className="py-[5rem] backgroundstyle text-white wrapper">
        <div data-aos="fade-left" className="gradient-rounded-text-box mx-auto">
          About Us
        </div>
        <div className="flex flex-col-reverse items-center lg:grid grid-cols-2 gap-10 mt-7">
          <div data-aos="fade-right" className="h-full">
            <img
              src={aboutUsImg}
              className="object-cover max-h-[16rem] sm:max-h-[32rem] rounded-xl h-full"
              alt="About WEBZIT MEDIA"
            />
          </div>
          <div data-aos="fade-left" className="flex h-full flex-col gap-7">
            <div className="flex flex-col gap-7 text-center lg:text-start">
              <h2 className="heading-2">
                Driving Innovation & Shaping the Future.
              </h2>
              <p className="desc">
                <strong className="font-semibold">WEBZIT MEDIA</strong> is
                committed to helping businesses thrive in a fast-paced digital
                world. By leveraging cutting-edge technologies, we deliver
                innovative solutions that enhance efficiency, streamline
                operations, and drive growth.
              </p>
              <div>
                <h3 className="text-xl font-medium mb-2">Our Mission</h3>
                <p className="desc">
                  Our mission is to empower organizations by harnessing the
                  power of technology. We aim to drive meaningful growth,
                  enhance customer experiences, and simplify business processes
                  with smart, scalable digital solutions.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-medium mb-2">Our Vision</h3>
                <p className="desc">
                  We envision a future where businesses of all sizes can
                  leverage technology to optimize their operations and stay
                  ahead of the competition. Our goal is to be at the forefront
                  of digital transformation, delivering high-impact solutions
                  that create lasting value.
                </p>
              </div>
            </div>
            <div className="flex gap-5 mt-4 justify-center lg:justify-start">
              <Link to="/contact-us" className="primary-btn">
                Contact Us
              </Link>
              <Link to="/services" className="secondary-btn">
                Our Services
              </Link>
            </div>
          </div>
        </div>
      </section>

      <OurServices length={6} />
      <section
        className="relative py-[5rem] bg-black text-white bg-no-repeat bg-current bg-cover"
        style={{ backgroundImage: `url(${whowearebh})` }}
      >
        <div className="w-full h-full bg-black/50 absolute top-0" />
        <div
          data-aos="fade-up"
          className="wrapper text-center flex flex-col gap-3"
        >
          <div className="gradient-rounded-text-box mx-auto mb-4 !text-white">
            Who We Are
          </div>
          <h1 className="heading-2 max-w-[50rem] mx-auto text-white bg-clip-text text-transparent">
            Your Trusted Partner in Digital Transformation
          </h1>
          <p className="desc max-w-[50rem] mx-auto text-white drop-shadow-2xl">
            At <strong>WEBZIT MEDIA</strong>, we specialize in delivering
            cutting-edge technology solutions that help businesses thrive in the
            digital era. Whether it's AI-powered automation, web and mobile
            applications, or data-driven insights, our goal is to provide
            innovative and scalable solutions tailored to your unique business
            needs. With a focus on excellence, efficiency, and customer-centric
            innovation, we are committed to driving success for our clients.
          </p>
        </div>
      </section>

      {/* <Faqs /> */}
      <WhyChooseUs />
      <UnlockEfficiency />
      {/* <EndlessOpportunitiesSection /> */}
      <Contact />
    </div>
  );
};

export default Home;
