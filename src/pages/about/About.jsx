import ContactFooter from "../../components/Footer";
import Navbar from "../../components/Navbar";
import AboutHero from "./AboutHero";

const About =()=>{
    return(
        <>
            <Navbar/>
            <AboutHero/>
            <div    className="mx-auto w-11/12">
              <div className="w-full h-62 md:h-92 overflow-hidden">
             <img src="https://images.unsplash.com/photo-1594771804886-a933bb2d609b?q=80&w=1482&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" className='w-full h-full object-cover' />
        </div>
         <div className="flex md:flex-row flex-col justify-between my-24">
          
            <div className="w-5/12">
              <p className="mt-3 text-gray-600">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laborum, necessitatibus impedit a libero eos ex exercitationem placeat alias quidem praesentium. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugiat impedit perspiciatis totam velit. Magnam possimus iusto, ea illum pariatur corporis in voluptatem hic quo, autem nemo officiis repellat ipsum ipsam.</p>
            </div>
            
            <div className="w-5/12">
              <p className="mt-3 text-gray-600">Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti, quidem! Nemo, ipsam sequi culpa fuga laboriosam est dignissimos nihil quasi.Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laborum, necessitatibus impedit a libero eos ex exercitationem placeat alias quidem praesentium. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugiat impedit perspiciatis totam velit. Magnam possimus iusto, ea illum pariatur corporis in voluptatem hic quo, autem nemo officiis repellat ipsum ipsam.</p>
            </div>
          </div>
          </div>
            <ContactFooter/>
        </>
    )
}

export default About;