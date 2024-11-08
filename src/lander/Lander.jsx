import Hero from "../UI/Hero";
import Services from "./Services";
import Testimonial from "./Testimonial";
import Info from "./Info";
import FeatureComponent from "../UI/FeatureComponent";
import CTA from "../UI/CTA";
import WhatsappButton from "../UI/WhatsappButton";

function Lander() {
  return (
    <>
      <Hero />
      <Services />
      <Testimonial />
      <Info />
      <FeatureComponent />
      <CTA />
      <WhatsappButton />
    </>
  );
}

export default Lander;
