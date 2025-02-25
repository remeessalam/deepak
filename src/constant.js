import logoImg from "./assets/images/logo/logo.png";
import whyChooseUsIcon1 from "./assets/images/ph_target-light.png";
import whyChooseUsIcon2 from "./assets/images/mage_light-bulb.png";
import whyChooseUsIcon3 from "./assets/images/tdesign_user-talk.png";
import whyChooseUsIcon4 from "./assets/images/healthicons_ui-secure-outline.png";
import whyChooseUsPng from "./assets/images/whychooseus-png.jpg";
import whyChooseUsPng1 from "./assets/images/whychooseus-png1.jpg";
import contactbg from "./assets/images/contactbg.jpg";
import whowearebh from "./assets/images/whowearebh.jpg";
import faqPng from "./assets/images/faq-character.png";
import appDevBanner from "./assets/images/app-dev-banner.jpg";
import webDevBanner from "./assets/images/web-landing-banner.jpg";
import webLandingAbout from "./assets/images/web-landing-about1.png";
import appLandingAbout from "./assets/images/app-landing-about.png";
import endlessOpportunitiesImg1 from "./assets/images/section-8-img-1.png";
import endlessOpportunitiesImg2 from "./assets/images/section-8-img-2.png";
import endlessOpportunitiesImg3 from "./assets/images/section-8-img-3.png";
import homeBannerVideo from "./assets/videos/home-banner.mp4";
import defaultBanner from "./assets/images/banner.jpg";
import aboutUsBanner from "./assets/images/about-us-banner.jpg";
import aboutUsGridImg1 from "./assets/images/aboutus-png1.png";
import aboutUsGridImg2 from "./assets/images/aboutus-png2.png";
import aboutUsGridImg3 from "./assets/images/aboutus-png3.png";
import aboutUsGridImg4 from "./assets/images/aboutus-png4.png";
import aboutUsGridImg5 from "./assets/images/aboutus-png5.png";
//services images

import uiux from "./assets/images/services/uiux.png";
import uiux1 from "./assets/images/services/uiux.jpg";
import chat from "./assets/images/services/chat.png";
import chat1 from "./assets/images/services/chat.jpg";
import iot from "./assets/images/services/iot.png";
import iot1 from "./assets/images/services/iot.jpg";
import ai from "./assets/images/services/ai.png";
import ai1 from "./assets/images/services/ai.jpg";
import cloud from "./assets/images/services/cloud.png";
import cloud1 from "./assets/images/services/cloud.jpg";
import web from "./assets/images/services/web.png";
import web1 from "./assets/images/services/web.jpg";
import app from "./assets/images/services/app.png";
import app1 from "./assets/images/services/app.jpg";
import data from "./assets/images/services/data.png";
import vrar from "./assets/images/services/vrar.png";
import block from "./assets/images/services/blockchain.png";
import gamedevelopment from "./assets/images/services/gamedevelopment.png";
import chatbot from "./assets/images/services/chatbotdevelopment.png";
import aicalling from "./assets/images/services/aicallingagency.png";
import custom1 from "./assets/images/services/custome.jpg";
import data1 from "./assets/images/services/data.jpg";
// porfolio image
// Import all images at the top (Web Development)
import FiveGHomesImg from "./assets/web-development-portfolio/5ghomes.png";
import BayutImg from "./assets/web-development-portfolio/bayut.png";
import ColdCreekcapImg from "./assets/web-development-portfolio/cold creekcap.png";
import EmergencyMusicImg from "./assets/web-development-portfolio/emergency music .png";
import FlatiornImg from "./assets/web-development-portfolio/flatiorn.png";
import MavenImg from "./assets/web-development-portfolio/maven.png";
import MenissaCateringsImg from "./assets/web-development-portfolio/menissa caterings.png";
import MethodistImg from "./assets/web-development-portfolio/methodist.png";
import ThinkRealityImg from "./assets/web-development-portfolio/think reality.png";

// Import all images at the top (App Development)
import DubaiTravelGuideImg from "./assets/app-development-portfolio/dubai travel guide.png";
import EloraHairPalourImg from "./assets/app-development-portfolio/elora hair palour.png";
import EvansFrancisImg from "./assets/app-development-portfolio/evans francis.png";
import HouseOfDeliverenceImg from "./assets/app-development-portfolio/house of deliverence.png";
import MybitsShopImg from "./assets/app-development-portfolio/mybitsshop.png";
import NamazImg from "./assets/app-development-portfolio/namaz.png";
import PoteaImg from "./assets/app-development-portfolio/potea.png";
import RentopBikeAndCarImg from "./assets/app-development-portfolio/rentop bike and car.png";
import { lazy } from "react";
import {
  FaApple,
  FaBitcoin,
  FaFigma,
  FaGamepad,
  FaGlobe,
  FaGooglePlay,
} from "react-icons/fa";
const Home = lazy(() => import("./pages/website/Home"));
const Services = lazy(() => import("./pages/website/Services"));
const ContactUs = lazy(() => import("./pages/website/ContactUs"));
const AboutUs = lazy(() => import("./pages/website/AboutUs"));

export {
  whowearebh,
  logoImg,
  contactbg,
  whyChooseUsPng,
  whyChooseUsIcon1,
  whyChooseUsIcon2,
  whyChooseUsIcon3,
  whyChooseUsIcon4,
  faqPng,
  appDevBanner,
  webDevBanner,
  webLandingAbout,
  appLandingAbout,
  endlessOpportunitiesImg1,
  endlessOpportunitiesImg2,
  endlessOpportunitiesImg3,
  homeBannerVideo,
  defaultBanner,
  aboutUsBanner,
  aboutUsGridImg1,
  aboutUsGridImg2,
  aboutUsGridImg3,
  aboutUsGridImg4,
  aboutUsGridImg5,
  whyChooseUsPng1,
  web1,
  app1,
};

// company details
export const companyDetails = {
  phone: "+91-90000000",
  whatsapp: "+91-90000000",
  email: "abc@example.com",
  address: "[your-company-address]",
  twitter: "",
  linkedin: "",
  instagram: "",
  facebook: "",
};

// website routes
export const routes = [
  {
    name: "Home",
    path: "/",
    component: <Home />,
  },
  {
    name: "Services",
    path: "/services",
    component: <Services />,
  },
  {
    name: "About Us",
    path: "/about-us",
    component: <AboutUs />,
  },
  {
    name: "Contact Us",
    path: "/contact-us",
    component: <ContactUs />,
  },
  {
    name: "Blogs",
    path: "#",
    // component: <ContactUs />,
  },
];

export const faqs = [
  {
    id: 1,
    question: "What is Web Development?",
    answer:
      "Web development refers to the process of creating websites and web applications. It includes tasks such as web design, web development, web programming, and database management.",
  },
  {
    id: 2,
    question: "What is Web Development?",
    answer:
      "Web development refers to the process of creating websites and web applications. It includes tasks such as web design, web development, web programming, and database management.",
  },
  {
    id: 3,
    question: "What is Web Development?",
    answer:
      "Web development refers to the process of creating websites and web applications. It includes tasks such as web design, web development, web programming, and database management.",
  },
  {
    id: 4,
    question: "What is Web Development?",
    answer:
      "Web development refers to the process of creating websites and web applications. It includes tasks such as web design, web development, web programming, and database management.",
  },
  {
    id: 5,
    question: "What is Web Development?",
    answer:
      "Web development refers to the process of creating websites and web applications. It includes tasks such as web design, web development, web programming, and database management.",
  },
];

// web development services
export const webDevelopmentServices = [
  {
    id: 1,
    title: "E-commerence Websites",
    icon: require("./assets/images/icons/online-shopping.png"),
    description:
      "Empowering your online business with tailored ecommerce solutions. Our platforms boost customer engagement, streamline operations, and drive revenue growth. ",
  },
  {
    id: 2,
    title: "Social Media Websites",
    icon: require("./assets/images/icons/socialmedia.png"),
    description:
      "Get custom social media websites that captivate and engage your audience, driving growth and brand loyalty effortlessly",
  },
  {
    id: 3,
    title: "Landing Websites",
    icon: require("./assets/images/icons/landing-page.png"),
    description:
      " Creating high-converting landing pages that capture attention and drive action. Tailored designs that showcase your brand’s message and maximize conversions.",
  },
  {
    id: 4,
    title: "Custom Websites",
    icon: require("./assets/images/icons/software-development.png"),
    description:
      "Delivering tailor-made websites designed to meet your unique business needs. Our solutions blend creativity and functionality for an exceptional online experience.",
  },
];

// app development services
export const appDevelopmentServices = [
  {
    id: 1,
    title: "iOS App Development",
    icon: require("./assets/images/icons/ios-development.png"),
    description:
      "Our skilled developers work with both Swift and Objective-C to build robust and efficient apps. We optimize your app for performance, speed, and responsiveness.",
  },
  {
    id: 2,
    title: "Android App Development",
    icon: require("./assets/images/icons/android-development.png"),
    description:
      "We design and develop tailor-made Android apps that align with your vision and business goals.Proficient in both Java and Kotlin, we build robust and efficient apps.",
  },
  {
    id: 3,
    title: "Flutter App Development",
    icon: require("./assets/images/icons/flutter-development.png"),
    description:
      "Flutter allows you to build apps for both iOS and Android using a single codebase. While Flutter's default web app architecture presents challenges, we can overcome them with smart strategies. ",
  },
  {
    id: 4,
    title: "Hybrid App Development",
    icon: require("./assets/images/icons/hybrid-app-development.png"),
    description:
      "We build feature-rich hybrid apps tailored to your business needs. We create mobile-friendly apps that work seamlessly across iOS and Android devices.",
  },
];

// all services
export const allServices = [
  {
    icon: uiux,
    img: uiux1,
    id: 1,
    title: "UX/UI Design",
    desc: "Crafting intuitive and visually appealing designs to enhance user experiences and drive engagement.",
    detailContent:
      "At [Company Name], we specialize in creating user-centric designs that combine aesthetics with functionality. Our UX/UI design process focuses on understanding user behavior, wireframing, prototyping, and testing to deliver seamless digital experiences. Whether it's a website, mobile app, or software interface, we ensure your design is responsive, accessible, and aligned with your brand identity. Our goal is to create designs that not only look great but also improve user satisfaction and drive conversions.",
  },
  {
    icon: app,
    img: app1,
    id: 2,
    title: "Mobile App Development",
    desc: "Building custom mobile apps for iOS and Android that are scalable, secure, and user-friendly.",
    detailContent:
      "We develop high-performance mobile applications tailored to your business needs. From concept to deployment, our team ensures your app is optimized for performance, security, and user engagement. Whether you need a native or cross-platform solution, we leverage the latest technologies like Flutter and React Native to deliver apps that stand out in the market. Our services include UI/UX design, backend integration, and post-launch support to ensure your app's success.",
  },
  {
    icon: web,
    img: web1,
    id: 3,
    title: "Web Development",
    desc: "Creating dynamic, responsive, and scalable web applications to strengthen your online presence.",
    detailContent:
      "Our web development services focus on building robust, user-friendly, and future-ready web applications. Using modern frameworks like React, Angular, and Node.js, we create websites and web apps that deliver exceptional performance and functionality. Whether it's an e-commerce platform, a custom CMS, or a complex enterprise solution, we ensure your web application is secure, scalable, and optimized for growth. From frontend design to backend development, we handle it all.",
  },
  {
    icon: cloud,
    img: cloud1,
    id: 4,
    title: "Cloud Computing Services",
    desc: "Seamless cloud migration and management for scalability, flexibility, and cost-efficiency.",
    detailContent:
      "We help businesses transition to the cloud with minimal disruption. Our cloud computing services include migration to platforms like AWS, Google Cloud, and Microsoft Azure. We provide end-to-end solutions, from infrastructure assessment to deployment and optimization. With a focus on security and scalability, we ensure your business leverages the full potential of cloud technology. Our services also include cloud-native app development, data storage solutions, and ongoing cloud management.",
  },
  {
    icon: ai,
    img: ai1,
    id: 5,
    title: "Artificial Intelligence Development",
    desc: "Innovative AI solutions to automate processes, enhance decision-making, and improve customer experiences.",
    detailContent:
      "We develop AI-powered solutions using machine learning, natural language processing, and computer vision. Our AI services include predictive analytics, automation, and intelligent recommendation systems. Whether you need AI for customer support, fraud detection, or operational efficiency, we create tailored solutions that align with your business goals. Our team ensures your AI systems are scalable, secure, and capable of delivering actionable insights.",
  },
  {
    icon: data,
    img: data1,
    id: 6,
    title: "Data Analytics & Business Intelligence",
    desc: "Transforming data into actionable insights for smarter decision-making and business growth.",
    detailContent:
      "Our data analytics and business intelligence services help you unlock the value of your data. Using advanced tools like Power BI, Tableau, and machine learning algorithms, we analyze complex datasets to uncover trends and opportunities. From real-time dashboards to predictive analytics, we provide solutions that empower your business to make data-driven decisions. Our services include data visualization, KPI tracking, and custom reporting to meet your specific needs.",
  },
  {
    icon: iot,
    img: iot1,
    id: 7,
    title: "IoT (Internet of Things) Development",
    desc: "Connecting devices and systems for real-time insights and operational efficiency.",
    detailContent:
      "We design and develop IoT solutions that enable businesses to collect, analyze, and act on data from connected devices. Our IoT services include smart device integration, data management, and predictive maintenance. Whether it's for smart homes, industrial automation, or healthcare, we create IoT ecosystems that improve efficiency, reduce costs, and enhance user experiences. Our solutions are scalable, secure, and built for future growth.",
  },
  {
    icon: vrar,
    img: iot1,
    id: 8,
    title: "Virtual Reality & Augmented Reality Development",
    desc: "Immersive AR/VR experiences for training, entertainment, and customer engagement.",
    detailContent:
      "We create cutting-edge AR and VR applications that transform how users interact with digital content. From virtual training simulations to augmented reality marketing campaigns, our solutions are designed to captivate and engage. Using platforms like Unity and Unreal Engine, we develop immersive experiences for industries like gaming, education, and retail. Our AR/VR solutions are tailored to your business needs, ensuring a unique and impactful user experience.",
  },
  {
    icon: block,
    img: iot1,
    id: 9,
    title: "Blockchain Development",
    desc: "Secure and transparent blockchain solutions for decentralized applications and transactions.",
    detailContent:
      "We specialize in blockchain development, creating decentralized applications (dApps) and smart contracts for various industries. Our services include blockchain consulting, wallet development, and tokenization. Whether you need a solution for supply chain transparency, secure transactions, or digital identity management, we leverage blockchain technology to deliver secure, scalable, and efficient solutions. Our expertise ensures your blockchain implementation is robust and future-proof.",
  },
  {
    icon: gamedevelopment,
    img: iot1,
    id: 10,
    title: "Game Development",
    desc: "Engaging and interactive games for mobile, web, and console platforms.",
    detailContent:
      "We design and develop games that captivate audiences and deliver unforgettable experiences. From casual mobile games to complex console titles, our game development services cover all aspects of game creation, including concept design, programming, and testing. Using engines like Unity and Unreal, we create games with stunning graphics, smooth gameplay, and immersive storytelling. Whether you're an indie developer or a large studio, we bring your vision to life.",
  },
  {
    icon: chatbot,
    img: chat1,
    id: 11,
    title: "Chatbot Development",
    desc: "AI-powered chatbots for real-time customer support and engagement.",
    detailContent:
      "Our chatbot development services create intelligent conversational agents that enhance customer interactions. Using natural language processing and machine learning, our chatbots handle inquiries, provide personalized recommendations, and automate routine tasks. Whether it's for customer service, e-commerce, or internal operations, we design chatbots that improve efficiency and user satisfaction. Our solutions integrate seamlessly with your existing systems and are scalable to meet growing demands.",
  },
  {
    icon: aicalling,
    img: iot1,
    id: 12,
    title: "AI Calling Agency",
    desc: "AI-driven calling solutions for customer outreach and support.",
    detailContent:
      "We develop AI-powered calling systems that automate customer interactions, from lead generation to support calls. Our AI calling solutions use natural language processing to understand and respond to customer queries in real-time. Whether it's for telemarketing, appointment scheduling, or customer feedback, our AI calling systems improve efficiency and reduce operational costs. We ensure your AI calling solution is tailored to your business needs and delivers measurable results.",
  },
];

// about us page why choose content
export const whyChooseUsContent = [
  {
    title: "Tailored Digital Solutions",
    desc: "We understand that every business has unique challenges and goals. Our customized technology solutions are designed to align perfectly with your specific needs, ensuring maximum impact and efficiency.",
  },
  {
    title: "Advanced Technology Expertise",
    desc: "Leveraging the latest in AI, cloud computing, and data analytics, we build powerful, future-proof solutions that keep you ahead in the rapidly evolving digital world.",
  },
  {
    title: "Uncompromised Security & Reliability",
    desc: "At [your-company-name], we prioritize data security and system reliability. Our solutions are built with robust security protocols to protect your business from cyber threats and ensure seamless operations.",
  },
  {
    title: "A Partner for Growth",
    desc: "We go beyond just delivering services—we build long-term partnerships. From ideation to execution and continuous support, we are committed to your success every step of the way.",
  },
  {
    title: "Agility & Future-Ready Innovation",
    desc: "Technology is constantly evolving, and so are we. Our agile approach ensures that your solutions remain innovative, scalable, and adaptable to future advancements in the digital landscape.",
  },
];

// portfolio images (web development)

export const webPortfolio = [
  {
    id: 1,
    img: FiveGHomesImg,
    title: "5g Homes",
    link: "https://5ghighspeedinternet.co",
  },
  {
    id: 2,
    img: BayutImg,
    title: "Bayut",
    link: "https://www.bayut.com",
  },
  {
    id: 3,
    img: ColdCreekcapImg,
    title: "Cold Creekcap",
    link: "https://www.coldcreekcap.com",
  },
  {
    id: 4,
    img: EmergencyMusicImg,
    title: "Emergency Music",
    link: "https://www.figma.com/proto/GwlIMQuIuFevhOEp8moALy/emergence-music-distribuBon?page-id=6298%3A7215&type=design&node-id=6298-7776&viewport=407%2C314%2C0.11&t=QCtz7M4USn6gI1CG-1&scaling=min-zoom",
  },
  {
    id: 5,
    img: FlatiornImg,
    title: "Flatiorn",
    link: "",
  },
  {
    id: 6,
    img: MavenImg,
    title: "Maven",
    link: "",
  },
  {
    id: 7,
    img: MenissaCateringsImg,
    title: "Menissa Caterings",
    link: "https://messinascatering.com",
  },
  {
    id: 8,
    img: MethodistImg,
    title: "Methodist",
    link: "",
  },
  {
    id: 9,
    img: ThinkRealityImg,
    title: "Think Reality",
    link: "https://thinkrealty.ae",
  },
];

export const appPortfolio = [
  {
    id: 1,
    img: DubaiTravelGuideImg,
    title: "Dubai Travel Guide",
    link: "https://play.google.com/store/apps/details?id=com.eBps.dubai.travel.guide&pcampaignid=web_share",
  },
  {
    id: 2,
    img: EloraHairPalourImg,
    title: "Elora Hair Palour",
    link: "https://play.google.com/store/apps/details?id=app.barbera.io&pcampaignid=web_share",
  },
  {
    id: 3,
    img: EvansFrancisImg,
    title: "Evans Francis",
    link: "https://play.google.com/store/apps/details?id=com.chrisBanappdevelopers.evansfrancis&pcampaignid=web_share",
  },
  {
    id: 4,
    img: HouseOfDeliverenceImg,
    title: "House of Deliverence",
    link: "https://play.google.com/store/apps/details?id=com.chrisBanappdevelopers.hod&pcampaignid=web_share",
  },
  {
    id: 5,
    img: MybitsShopImg,
    title: "Mybits Shop",
    link: "https://play.google.com/store/apps/details?id=com.klikomics.android&pcampaignid=web_share",
  },
  {
    id: 6,
    img: NamazImg,
    title: "Namaz",
    link: "https://play.google.com/store/apps/details?id=com.iccbrossard.prayerBmes&pcampaignid=web_share",
  },
  {
    id: 7,
    img: PoteaImg,
    title: "Potea",
    link: "https://play.google.com/store/apps/details?id=com.Zigna.AutoSnap&pcampaignid=web_share",
  },
  {
    id: 8,
    img: RentopBikeAndCarImg,
    title: "Rentop Bike and Car",
    link: "https://play.google.com/store/apps/details?id=com.rentop&pcampaignid=web_share",
  },
];

export const features = [
  {
    title: "Innovative Technology",
    description:
      "We harness the latest advancements in AI, cloud computing, and data science to deliver groundbreaking solutions tailored to your business needs.",
    icon: "🚀",
  },
  {
    title: "Scalable Cloud Solutions",
    description:
      "Empower your business with secure and scalable cloud infrastructure, ensuring seamless performance and flexibility for future growth.",
    icon: "☁️",
  },
  {
    title: "Excellence in Execution",
    description:
      "Our commitment to quality and precision ensures that every project meets the highest industry standards, delivering impactful results.",
    icon: "⭐",
  },
  {
    title: "AI-Powered Automation",
    description:
      "Optimize efficiency and reduce costs with intelligent automation solutions that streamline workflows and enhance productivity.",
    icon: "🤖",
  },
  {
    title: "Data-Driven Insights",
    description:
      "Unlock the full potential of your data with advanced analytics, predictive modeling, and business intelligence tools.",
    icon: "📊",
  },
  {
    title: "Dedicated Customer Support",
    description:
      "Our team of experts provides 24/7 support to ensure your digital solutions run smoothly and deliver consistent value.",
    icon: "💡",
  },
];

// export const appportfolio = [
//   {
//     id: 1,
//     name: "Barbera App",
//     url: "https://play.google.com/store/apps/details?id=app.barbera.io",
//     icon: <FaGooglePlay />,
//   },
//   {
//     id: 2,
//     name: "Rentop",
//     url: "https://play.google.com/store/apps/details?id=com.rentop",
//     icon: <FaGooglePlay />,
//   },
//   {
//     id: 3,
//     name: "Bin Info Club",
//     url: "https://play.google.com/store/apps/details?id=com.binfoclub.app",
//     icon: <FaGooglePlay />,
//   },
//   {
//     id: 4,
//     name: "Prayer Times",
//     url: "https://play.google.com/store/apps/details?id=com.iccbrossard.prayerBmes",
//     icon: <FaGooglePlay />,
//   },
//   {
//     id: 5,
//     name: "Evans Francis",
//     url: "https://play.google.com/store/apps/details?id=com.chrisBanappdevelopers.evansfrancis",
//     icon: <FaGooglePlay />,
//   },
//   {
//     id: 6,
//     name: "HOD App",
//     url: "https://play.google.com/store/apps/details?id=com.chrisBanappdevelopers.hod",
//     icon: <FaGooglePlay />,
//   },
//   {
//     id: 7,
//     name: "Zigna AutoSnap",
//     url: "https://play.google.com/store/apps/details?id=com.Zigna.AutoSnap",
//     icon: <FaGooglePlay />,
//   },
//   {
//     id: 8,
//     name: "Klikomics",
//     url: "https://play.google.com/store/apps/details?id=com.klikomics.android",
//     icon: <FaGooglePlay />,
//   },
//   {
//     id: 9,
//     name: "Ocxee",
//     url: "https://apps.apple.com/in/app/ocxee/id1522856353",
//     icon: <FaApple />,
//   },
//   {
//     id: 10,
//     name: "Dubai Travel Guide",
//     url: "https://play.google.com/store/apps/details?id=com.eBps.dubai.travel.guide",
//     icon: <FaGooglePlay />,
//   },
// ];

// Website Development - Custom
// export const webportfolio = [
//   {
//     id: 1,
//     name: "Leader Bridge",
//     url: "https://www.leaderbridge.com",
//     icon: <FaGlobe />,
//   },
//   {
//     id: 2,
//     name: "Autopilot",
//     url: "https://autopilot.io",
//     icon: <FaGlobe />,
//   },
//   {
//     id: 3,
//     name: "Gigzio",
//     url: "https://gigzio.com",
//     icon: <FaGlobe />,
//   },
//   {
//     id: 4,
//     name: "FE Group",
//     url: "https://fe.group",
//     icon: <FaGlobe />,
//   },
//   {
//     id: 5,
//     name: "Vtalkz",
//     url: "https://vtalkz.com",
//     icon: <FaGlobe />,
//   },
// ];
export const wordportfolio = [
  {
    id: 6,
    name: "Think Realty",
    url: "https://thinkrealty.ae",
    icon: <FaGlobe />,
  },
  {
    id: 7,
    name: "Bayut",
    url: "https://www.bayut.com",
    icon: <FaGlobe />,
  },
  {
    id: 8,
    name: "5G High-Speed Internet",
    url: "https://5ghighspeedinternet.co",
    icon: <FaGlobe />,
  },
  {
    id: 9,
    name: "Messina's Catering",
    url: "https://messinascatering.com",
    icon: <FaGlobe />,
  },
  {
    id: 10,
    name: "Cold Creek Capital",
    url: "https://www.coldcreekcap.com",
    icon: <FaGlobe />,
  },
];
export const uiuxportfolio = [
  {
    id: 1,
    name: "Crypto UI",
    url: "https://www.figma.com/design/syARcSBYKhwEzsEmlpB2jR/Crypto-UI-App-%26-Admin?node-id=0-1&t=qrubmjqZL7GxJUk2-0",
    icon: <FaFigma />,
  },
  {
    id: 2,
    name: "Emergence Music",
    url: "https://www.figma.com/proto/GwlIMQuIuFevhOEp8moALy/emergence-music-distribuBon?page-id=6298%3A7215&type=design&node-id=6298-7776&viewport=407%2C314%2C0.11&t=QCtz7M4USn6gI1CG-1&scaling=min-zoom",
    icon: <FaFigma />,
  },
  {
    id: 3,
    name: "Potea",
    url: "https://www.figma.com/design/ZoowfS1VMFLRKKcsdd3Myh/Potea-(Copy)?node-id=727-25421&t=KThAYD7OOdc4oeEV-1",
    icon: <FaFigma />,
  },
  {
    id: 4,
    name: "TGFX Workfile",
    url: "https://www.figma.com/design/Xtua9ElE5Eg7MV7baS6Bzn/TGFX-Workfile-(Copy)?t=JDLWFCCc24GDqh1T-0",
    icon: <FaFigma />,
  },
];
export const gameportfolio = [
  // Game Development
  {
    id: 31,
    name: "Car Stunt Mania",
    url: "https://play.google.com/store/apps/details?id=com.carstuntgames.carstunt.racingcar.carstuntmania.mlabs",
    category: "Game Development",
    icon: <FaGamepad />,
  },
  {
    id: 32,
    name: "Bowling Games",
    url: "https://play.google.com/store/apps/details?id=com.bowlinggames.oﬄinebowlinggame.bowlingoﬄine.bowlinggame.mlabs",
    category: "Game Development",
    icon: <FaGamepad />,
  },
];
export const blockchainportfolio = [
  // Blockchain
  {
    id: 41,
    name: "CryptoPadie",
    url: "https://play.google.com/store/apps/details?id=com.cryptopadie.buy.sell.crypto",
    category: "Blockchain",
    icon: <FaBitcoin />,
  },
  {
    id: 42,
    name: "Nanfolo",
    url: "https://play.google.com/store/apps/details?id=com.nanfolo.user.app",
    category: "Blockchain",
    icon: <FaBitcoin />,
  },
  {
    id: 43,
    name: "Nanfolo Website",
    url: "https://nanfolo.com",
    category: "Blockchain",
    icon: <FaBitcoin />,
  },
  {
    id: 44,
    name: "Padiepal Website",
    url: "h$ps://padiepal.com",
    category: "Blockchain",
    icon: <FaBitcoin />,
  },
];
