import React, { useState } from 'react';
import { Facebook, Instagram, Menu, X, XIcon } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };



  return (
    <>
      <header
        className="flex justify-between items-center bg-white mx-auto px-6 sm:px-12 py-2 border-b border-b-indigo-50 w-full"
      >
        <div className="px-2 py-3">
          <a href="/" className="font-bold">Youth In Agric</a>
        </div>
        <div className='flex justify-between items-center gap-24'>
        <nav className="hidden md:flex gap-6 space-x-4 px-6 rounded-full">
          <a href="/" className="">Home</a>
          <a href="/about" className="">About</a>
          <a href="/services" className="">Services</a>
          <a href='/contact'className=''>Contact</a>
        </nav>
        <div className='flex items-center gap-5'>
        <div className='flex items-center gap-3 px-3 py-2 border-[1px] border-gray-200 rounded-full'>
          <span><Facebook size={16} /></span>
          <span><Instagram size={16} /></span>
          <span><XIcon size={16}/></span>
        </div>
      
        <div className="md:hidden flex items-center pr-4">
          <button onClick={toggleNavbar} aria-label="Toggle menu">
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
        </div>
      </header>

      {/* Mobile Menu */}
      {isOpen && (
        <div
          className="md:hidden z-40 fixed inset-0 flex flex-col justify-center items-center bg-green-900"
          onClick={toggleNavbar} // Close menu on overlay click or link click
        >
          <nav className="flex flex-col items-center space-y-8 text-white text-2xl">
            <a href="/" className="hover:underline">Home</a>
            <a href="/about" className="hover:underline">About</a>
            <a href="/services" className="hover:underline">Services</a>
            <a href="/contact" className="hover:underline">Contact</a>
          </nav>
        </div>
      )}
    </>
  );
};

export default Navbar;
