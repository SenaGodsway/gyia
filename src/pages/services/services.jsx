import ContactFooter from "../../components/Footer";
import Navbar from "../../components/Navbar";
import ServiceSection from "./ServiceSection";
const Services =()=>{
    return(
      <>
        <Navbar />
        <div className="mx-auto pt-32 w-11/12 text-center">
            <h1>Our Services</h1>
        <p>
          This is the services page. Add your content describing the services
          offered.
        </p>
        </div>
        <ServiceSection/>

        <ContactFooter/>
      </>
    )
}

export default Services