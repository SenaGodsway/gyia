import { useState, useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Facebook, Instagram, Menu, X, Twitter } from 'lucide-react';
import MobileMenu from './MobileMenu';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    // Cleanup function to reset overflow when component unmounts
    return () => (document.body.style.overflow = 'unset');
  }, [isOpen]);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  const navLinkClasses = ({ isActive }) =>
    isActive ? "text-green-700 font-semibold" : "";

  const handleMobileLinkClick = () => {
    setIsOpen(false);
  };

  return (
    <>
      <header
        className="z-30 fixed flex justify-between items-center bg-white mx-auto px-6 sm:px-12 py-3 border-b border-b-indigo-50 w-full"
      >
        <div className="px-2 py-2">
          <Link to="/" className="z-50 font-bold">Youth In Agric</Link>
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
          <button onClick={toggleNavbar} aria-label="Toggle menu" className='z-50'>
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
        </div>
       </div>
      </header>

      {/* Mobile Menu */}
      <MobileMenu isOpen={isOpen} onLinkClick={handleMobileLinkClick} />
    </>
  );
};

export default Navbar;
