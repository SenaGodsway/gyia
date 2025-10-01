import { Instagram, Twitter, Linkedin, Home, Settings, Phone, FileText } from "lucide-react";

export default function ContactFooter() {
  return (
    <footer className="px-6 py-12 border-t-[1px] border-t-gray-100 text-black">
      <div className="mx-auto max-w-6xl">

        {/* Main Content */}
        <div className="flex md:flex-row flex-col justify-between items-center gap-24 md:gap-6">
          {/* Left Section */}
          <div>
            <h2 className="mb-4 font-extrabold text-4xl">GET IN TOUCH.</h2>
            <p className="mb-4 w-full md:w-8/12 text-gray-800 text-md">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam cumque ab eveniet vel.
            </p>

            <div className="flex gap-6 text-xl">
              <a href="#" className="hover:text-gray-700"><Instagram /></a>
              <a href="#" className="hover:text-gray-700"><Twitter /></a>
              <a href="#" className="hover:text-gray-700"><Linkedin /></a>
            </div>
          </div>


          {/* Right Section */}
    <div className="space-y-4 mb-0 md:mb-6 text-gray-700">
  <div className="flex gap-3">
    <p className="font-semibold">LOCATION</p>
    <p>Westland, Porturphy Street <br /> Accra, Ghana</p>
  </div>

  <div className="flex gap-3">
    <p className="font-semibold">PHONE NO.</p>
    <p>+233 278 851825</p>
  </div>

  <div className="flex gap-3">
    <p className="font-semibold">CONTACT</p>
    <p>contact@youthinagriculture.com</p>
  </div>

  <div className="flex gap-3">
    <p className="font-semibold">SUPPORT</p>
    <p>help@youthinagriculture.com</p>
  </div>
</div>
 </div>

      

        {/* Bottom */}
        <div className="flex md:flex-row flex-col justify-between items-center mt-12 pt-6 border-t border-black text-sm">
          <p>© 2025 Grace Baptist Youth In Agriculture. ALL RIGHTS RESERVED.</p>
          <a href="#" className="mt-4 md:mt-0 font-semibold hover:text-gray-700">GO BACK TO TOP</a>
        </div>
      </div>
    </footer>
  );
}
