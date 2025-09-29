import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Facebook, Instagram, Menu, X, Twitter } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  const navLinkClasses = ({ isActive }) =>
    isActive ? "text-green-700 font-semibold" : "";


  return (
    <>
      <header
        className="flex justify-between items-center bg-white mx-auto px-6 sm:px-12 py-3 border-b border-b-indigo-50 w-full"
      >
        <div className="px-2 py-2">
          <Link to="/" className="font-bold">Youth In Agric</Link>
        </div>
        <div className='flex justify-between items-center gap-24'>
        <nav className="hidden md:flex gap-6 space-x-4 px-6 rounded-full">
          <NavLink to="/" className={navLinkClasses} end>Home</NavLink>
          <NavLink to="/about" className={navLinkClasses}>About</NavLink>
          <NavLink to="/services" className={navLinkClasses}>Services</NavLink>
          <NavLink to="/contact" className={navLinkClasses}>Contact</NavLink>
        </nav>
        <div className='flex items-center gap-5'>
        <div className='flex items-center gap-3 px-3 py-2 border-[1px] border-gray-200 rounded-full'>
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
            <Facebook size={16} />
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
            <Instagram size={16} />
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
            <Twitter size={16}/>
          </a>
        </div>
      
        <div className="md:hidden flex items-center pr-4">
          <button onClick={toggleNavbar} aria-label="Toggle menu">
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
        </div>
       </div>
      </header>

      {/* Mobile Menu */}
      {isOpen && (
        <div
          className="md:hidden z-40 fixed inset-0 flex flex-col justify-center items-center bg-green-900"
          onClick={toggleNavbar} // Close menu on overlay click
        >
          <nav className="flex flex-col items-center space-y-8 text-white text-2xl">
            <NavLink to="/" className={({isActive}) => isActive ? "underline" : ""}>Home</NavLink>
            <NavLink to="/about" className={({isActive}) => isActive ? "underline" : ""}>About</NavLink>
            <NavLink to="/services" className={({isActive}) => isActive ? "underline" : ""}>Services</NavLink>
            <NavLink to="/contact" className={({isActive}) => isActive ? "underline" : ""}>Contact</NavLink>
          </nav>
        </div>
      )}
    </>
  );
};

export default Navbar;
