import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Button from './Button';

export default function Header() {
  const location = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false); // Mobile menu state

  const isActive = (path) => 
    location.pathname === path 
      ? "text-red-600 font-bold" 
      : "text-gray-600 hover:text-red-600";

  // Menu close function on link click
  const closeMenu = () => setIsMobileMenuOpen(false);

  return (
    // Modern Glassmorphism Effect
    <header className="bg-white/80 backdrop-blur-lg border-b border-gray-100 sticky top-0 z-50 transition-all duration-300">
      
      {/* Main Header Bar */}
      <div className="py-4 px-6 md:px-12 flex justify-between items-center">
        
        {/* Logo */}
        <Link to="/" className="flex items-center cursor-pointer group" onClick={closeMenu}>
          <h1 className="text-3xl font-black tracking-tighter transition-transform group-hover:scale-105">
            <span className="text-red-600">A</span>
            <span className="text-gray-900">B</span>
            <span className="text-blue-900">C</span>
          </h1>
          <div className="ml-2 pl-2 border-l-2 border-gray-200 flex flex-col justify-center leading-none">
            <span className="text-sm font-bold text-gray-900 tracking-widest uppercase">Build</span>
            <span className="text-[10px] text-gray-400 font-medium tracking-wide uppercase">Constructions</span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-8 text-sm uppercase tracking-wider">
          <Link to="/" className={`${isActive('/')} transition-all`}>Home</Link>
          <Link to="/about" className={`${isActive('/about')} transition-all`}>About</Link>
          <Link to="/services" className={`${isActive('/services')} transition-all`}>Services</Link>
          <Link to="/projects" className={`${isActive('/projects')} transition-all`}>Projects</Link>
          <Link to="/contact" className={`${isActive('/contact')} transition-all`}>Contact</Link>
        </nav>

        {/* Desktop CTA Button */}
        <div className="hidden md:block">
          <Link to="/contact">
            <Button variant="primary" className="rounded-full px-8 hover:shadow-lg hover:shadow-red-500/30">
              Get a Quote
            </Button>
          </Link>
        </div>

        {/* Mobile Hamburger Button */}
        <button 
          className="md:hidden text-gray-600 hover:text-red-600 focus:outline-none transition-colors"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? (
            // Close (X) Icon
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-7 h-7">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            // Menu (Hamburger) Icon
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-7 h-7">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white border-b border-gray-100 shadow-xl flex flex-col py-6 px-6 space-y-4">
          <nav className="flex flex-col space-y-4 text-center text-sm uppercase tracking-wider">
            <Link to="/" onClick={closeMenu} className={`${isActive('/')} transition-all`}>Home</Link>
            <Link to="/about" onClick={closeMenu} className={`${isActive('/about')} transition-all`}>About</Link>
            <Link to="/services" onClick={closeMenu} className={`${isActive('/services')} transition-all`}>Services</Link>
            <Link to="/projects" onClick={closeMenu} className={`${isActive('/projects')} transition-all`}>Projects</Link>
            <Link to="/contact" onClick={closeMenu} className={`${isActive('/contact')} transition-all`}>Contact</Link>
          </nav>
          
          <div className="pt-4 flex justify-center border-t border-gray-100">
            <Link to="/contact" onClick={closeMenu}>
              <Button variant="primary" className="rounded-full px-12 hover:shadow-lg hover:shadow-red-500/30">
                Get a Quote
              </Button>
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}