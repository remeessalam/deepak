import React from "react";
import { useKeenSlider } from "keen-slider/react";
import profileImg1 from "../../assets/images/profileimg-1.png";
import profileImg2 from "../../assets/images/profileimg-2.png";
import {
  IoArrowBackCircleOutline,
  IoArrowForwardCircleOutline,
} from "react-icons/io5";

const reviews = [
  {
    id: 1,
    title: "Mobile App Development",
    desc: "[your-company-name] brought our vision to life with a mobile app that exceeded our expectations. Their team was highly attentive and communicative throughout the entire process, ensuring a seamless and intuitive user experience. The app has significantly enhanced customer engagement and streamlined our operations.",
    name: "Sarah T.",
    role: "Director of Product, [Client Name]",
    profileImg: profileImg1,
  },
  {
    id: 2,
    title: "Web App Development",
    desc: "We needed a robust and scalable web application to improve our customer experience, and [your-company-name] delivered exactly that. The final product is sleek, easy to use, and has made our online services more efficient. We have seen a noticeable improvement in customer engagement.",
    name: "James W.",
    role: "CEO, [Client Name]",
    profileImg: profileImg2,
  },
  {
    id: 3,
    title: "UI/UX Design",
    desc: "[your-company-name] completely transformed our platform with an intuitive and visually stunning design. Their user-centered approach resulted in a seamless interface that significantly improved user engagement and retention. The feedback from our customers has been overwhelmingly positive.",
    name: "Michelle B.",
    role: "Marketing Manager, [Client Name]",
    profileImg: profileImg1,
  },
  {
    id: 4,
    title: "Digital Marketing Strategies",
    desc: "Before partnering with [your-company-name], our digital presence was struggling. Their tailored marketing strategies helped us drive targeted traffic, increase conversions, and strengthen brand awareness. Thanks to their expertise, our business has seen incredible growth.",
    name: "Mark L.",
    role: "Founder, [Client Name]",
    profileImg: profileImg2,
  },
  {
    id: 5,
    title: "Cloud Migration Services",
    desc: "Migrating to the cloud was a major step for us, but [your-company-name] made it effortless. Their expert guidance ensured a smooth transition with zero downtime. Now, we benefit from enhanced scalability, flexibility, and cost efficiency.",
    name: "Laura D.",
    role: "IT Manager, [Client Name]",
    profileImg: profileImg1,
  },
  {
    id: 6,
    title: "AI Development",
    desc: "[your-company-name] developed an AI-powered solution that revolutionized our business processes. Their custom AI tools have optimized decision-making, automated workflows, and provided valuable insights. The impact has been transformative.",
    name: "David P.",
    role: "CTO, [Client Name]",
    profileImg: profileImg2,
  },
  {
    id: 7,
    title: "Data Science Services",
    desc: "With [your-company-name]'s data science expertise, we’ve been able to unlock valuable insights from our data. Their predictive analytics and machine learning solutions have helped us refine our strategies and optimize operations for maximum efficiency.",
    name: "Emily F.",
    role: "Head of Analytics, [Client Name]",
    profileImg: profileImg1,
  },
  {
    id: 8,
    title: "Chatbot Development",
    desc: "The chatbot developed by [your-company-name] has drastically improved our customer service operations. It provides instant responses, reduces workload, and enhances customer satisfaction. Our team can now focus on complex queries while the bot handles routine inquiries seamlessly.",
    name: "Karen S.",
    role: "Customer Support Lead, [Client Name]",
    profileImg: profileImg1,
  },
  {
    id: 9,
    title: "Data Analytics & Business Intelligence",
    desc: "Thanks to [your-company-name], we now have real-time analytics dashboards that provide deep business insights. Their BI solutions have empowered us to make data-driven decisions and identify new growth opportunities with confidence.",
    name: "Kevin R.",
    role: "VP of Operations, [Client Name]",
    profileImg: profileImg2,
  },
];

const Testimonials = () => {
  const [sliderRef, instanceRef] = useKeenSlider(
    {
      loop: true,
      slides: {
        perView: 2,
        spacing: 20,
      },
      breakpoints: {
        "(max-width: 1024px)": {
          slides: {
            perView: 1,
            spacing: 20,
          },
        },
      },
    },
    [
      (slider) => {
        let timeout;
        let mouseOver = false;
        function clearNextTimeout() {
          clearTimeout(timeout);
        }
        function nextTimeout() {
          clearTimeout(timeout);
          if (mouseOver) return;
          timeout = setTimeout(() => {
            slider.next();
          }, 2000);
        }
        slider.on("created", () => {
          slider.container.addEventListener("mouseover", () => {
            mouseOver = true;
            clearNextTimeout();
          });
          slider.container.addEventListener("mouseout", () => {
            mouseOver = false;
            nextTimeout();
          });
          nextTimeout();
        });
        slider.on("dragStarted", clearNextTimeout);
        slider.on("animationEnded", nextTimeout);
        slider.on("updated", nextTimeout);
      },
    ]
  );

  // Button click handler
  const handleNextClick = () => {
    if (instanceRef.current) {
      instanceRef.current.next(); // Move to the next slide
    }
  };

  const handlePrevClick = () => {
    if (instanceRef.current) {
      instanceRef.current.prev(); // Move to the prev slide
    }
  };
  return (
    <div className="py-[5rem] bg-backgroundcolor">
      <div className="wrapper flex flex-col items-center gap-7">
        <div className="gradient-rounded-text-box" data-aos="fade-up">
          Testimonials
        </div>
        <h2
          className="heading-2 text-black mb-2 text-center"
          data-aos="fade-up"
        >
          Our Clients' Experiences
        </h2>
        <div ref={sliderRef} className="keen-slider" data-aos="fade-up">
          {reviews.map((item) => (
            <div
              key={item.id}
              className="keen-slider__slide min-h-[18rem] justify-between text-white p-7 bg-primary rounded-xl flex flex-col gap-4"
            >
              <p className="italic desc">{item.desc}</p>
              <div className="flex flex-col gap-2">
                <div className="flex gap-2">
                  <img
                    src={item.profileImg}
                    alt={item.name}
                    className="h-[2rem] w-[2rem] rounded-full object-cover"
                  />
                  <div className="flex flex-col h-full">
                    <p className="font-medium">{item.name}</p>
                    <p className="text-sm">{item.role}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div
          data-aos="fade-up"
          className="flex justify-center items-center gap-10 mt-2"
        >
          <button
            className="text-primary text-5xl hover:text-primary/70 transition-all duration-200"
            onClick={handlePrevClick}
            aria-label="Previous slide"
          >
            <IoArrowBackCircleOutline />
          </button>
          <button
            className="text-primary text-5xl hover:text-primary/70 transition-all duration-200"
            onClick={handleNextClick}
            aria-label="Next slide"
          >
            <IoArrowForwardCircleOutline />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
