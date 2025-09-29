
import ContactFooter from "../../components/Footer";
import Navbar from "../../components/Navbar";
import About from "./about";
import CommunityCTA from "./Cta";
import Hero from "./Hero";
import Intro from "./intro";
import SustainableAgriculture from "./Sustainable";

export default function Landing() {

  return (
    <>
    <Navbar/>
      <Hero />
      <About/>
      <Intro />
      <SustainableAgriculture/>
      <CommunityCTA/>
      <ContactFooter/>
    </>
  );
}
