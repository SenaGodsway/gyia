import { Instagram, Twitter, Linkedin, Home, Settings, Phone, FileText } from "lucide-react";

export default function ContactFooter() {
  return (
    <footer className="px-6 py-12 text-black">
      <div className="mx-auto max-w-6xl">

        {/* Main Content */}
        <div className="flex md:flex-row flex-col justify-between items-center gap-6">
          {/* Left Section */}
          <div>
            <h2 className="mb-4 font-extrabold text-5xl">GET IN TOUCH.</h2>
            <p className="mb-6 text-gray-800 text-sm">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam cumque ab eveniet vel.
            </p>

            <div className="flex gap-6 text-xl">
              <a href="#" className="hover:text-gray-700"><Instagram /></a>
              <a href="#" className="hover:text-gray-700"><Twitter /></a>
              <a href="#" className="hover:text-gray-700"><Linkedin /></a>
            </div>
          </div>

          {/* Right Section */}
           <div className="space-y-4 text-gray-700">
  <div className="flex gap-3">
    <p className="font-semibold">BASED IN</p>
    <p>Westland, Porturphy Street <br /> Accra, Ghana</p>
  </div>

  <div className="flex gap-3">
    <p className="font-semibold">PHONE NO.</p>
    <p>+44 7878 851825</p>
  </div>

  <div className="flex gap-3">
    <p className="font-semibold">CONTACT</p>
    <p>contact@steelzz.com</p>
  </div>

  <div className="flex gap-3">
    <p className="font-semibold">SUPPORT</p>
    <p>help@steelzz.com</p>
  </div>
</div>
 </div>

          <div className="flex gap-4 mt-12">
              <a href="#" className="flex items-center gap-2 hover:text-gray-700"> Home</a>
              <a href="#" className="flex items-center gap-2 hover:text-gray-700">About</a>
              <a href="#" className="flex items-center gap-2 hover:text-gray-700"> Services</a>
              <a href="#" className="flex items-center gap-2 hover:text-gray-700"> Contact</a>
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
