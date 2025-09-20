
import ContactFooter from "../../components/Footer";
import Navbar from "../../components/Navbar";
import CommunityCTA from "./Cta";
import Hero from "./Hero";
import Intro from "./intro";
import SustainableAgriculture from "./Sustainable";

export default function Landing() {

  return (
    <>
    <Navbar/>
      <Hero />
      <Intro />
      <SustainableAgriculture/>
      <CommunityCTA/>
      <ContactFooter/>
    </>
  );
}
