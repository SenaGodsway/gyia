import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [hasScrolled, setHasScrolled] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      setHasScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
      <header
        className={`top-0 z-50 fixed flex justify-between items-center w-full transition-colors duration-300 px-6 sm:px-12 ${hasScrolled ? 'bg-white text-green-900' : 'bg-transparent text-white'}`}
      >
        <div className="px-4 py-4">
          <h1 className="font-bold text-2xl">GYIA</h1>
        </div>
        <nav className={`hidden md:flex space-x-4 px-12 py-3 rounded-full text-green-900 ${!hasScrolled ? 'bg-white' : ''}`}>
          <a href="#" className="hover:underline">Home</a>
          <a href="#" className="hover:underline">About</a>
          <a href="#" className="hover:underline">Services</a>
          <a href="#" className="hover:underline">Contact</a>
        </nav>
        <div className="md:hidden flex items-center pr-4">
          <button onClick={toggleNavbar} aria-label="Toggle menu">
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </header>

      {/* Mobile Menu */}
      {isOpen && (
        <div
          className="md:hidden z-40 fixed inset-0 flex flex-col justify-center items-center bg-green-900/95"
          onClick={toggleNavbar} // Close menu on overlay click or link click
        >
          <nav className="flex flex-col items-center space-y-8 text-2xl">
            <a href="#" className="hover:underline">Home</a>
            <a href="#" className="hover:underline">About</a>
            <a href="#" className="hover:underline">Services</a>
            <a href="#" className="hover:underline">Contact</a>
          </nav>
        </div>
      )}
    </>
  );
};

export default Navbar;
