import Navbar from "../../components/Navbar";
import AboutHero from "./AboutHero";

const About =()=>{
    return(
        <div>
            <Navbar/>
            <h1>About Us</h1>
            <p>This is the about us page.  Add your content here.</p>
            <AboutHero/>
        </div>
    )
}

export default About;