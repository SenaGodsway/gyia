import { NavLink } from 'react-router-dom';

const MobileMenu = ({ isOpen, onLinkClick }) => {
  const mobileLinkClasses = ({ isActive }) => (isActive ? "underline" : "");

  return (
    <div
      className={`
        md:hidden z-40 fixed inset-0 flex flex-col justify-center items-center bg-white
        transition-all duration-300 ease-in-out ${isOpen ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-full pointer-events-none'}
      `}
    >
      <nav className="flex flex-col items-center space-y-8 text-black text-2xl">
        <NavLink to="/" onClick={onLinkClick} className={mobileLinkClasses}>Home</NavLink>
        <NavLink to="/about" onClick={onLinkClick} className={mobileLinkClasses}>About</NavLink>
        <NavLink to="/services" onClick={onLinkClick} className={mobileLinkClasses}>Services</NavLink>
        <NavLink to="/contact" onClick={onLinkClick} className={mobileLinkClasses}>Contact</NavLink>
      </nav>
    </div>
  );
};

export default MobileMenu;