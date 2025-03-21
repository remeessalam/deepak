import React, { lazy } from "react";
import Banner from "../../components/website/Banner";
import ContactForm from "../../components/common/ContactForm";
// const MapComponent = lazy(() =>
//   import("../../components/website/MapComponent")
// );

const ContactUs = () => {
  return (
    <div className="backgroundstyle">
      <Banner page="Contact Us" />
      <ContactForm />
      {/* <MapComponent /> */}
    </div>
  );
};

export default ContactUs;
