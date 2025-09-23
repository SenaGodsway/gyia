import Navbar from "../../components/Navbar";
import ServiceSection from "./ServiceSection";
const Services =()=>{
    return(
      <div>
        <Navbar />
        <h1>Our Services</h1>
        <p>
          This is the services page. Add your content describing the services
          offered.
        </p>
        <ServiceSection/>
      </div>
    )
}

export default Services