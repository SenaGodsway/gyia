
import Navbar from "../../components/Navbar";
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
    </>
  );
}
