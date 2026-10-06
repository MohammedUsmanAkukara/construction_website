import { Link, useLocation } from 'react-router-dom';
import Button from './Button';

export default function Header() {
  const location = useLocation();
  const isActive = (path) => location.pathname === path ? "text-red-600 font-bold" : "text-gray-600 hover:text-red-600";

  return (
    // Modern Glassmorphism Effect
    <header className="bg-white/80 backdrop-blur-lg border-b border-gray-100 py-4 px-6 md:px-12 flex justify-between items-center sticky top-0 z-50 transition-all duration-300">
      <Link to="/" className="flex items-center cursor-pointer group">
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

      <nav className="hidden md:flex space-x-8 text-sm uppercase tracking-wider">
        <Link to="/" className={`${isActive('/')} transition-all`}>Home</Link>
        <Link to="/about" className={`${isActive('/about')} transition-all`}>About</Link>
        <Link to="/services" className={`${isActive('/services')} transition-all`}>Services</Link>
        <Link to="/projects" className={`${isActive('/projects')} transition-all`}>Projects</Link>
        <Link to="/contact" className={`${isActive('/contact')} transition-all`}>Contact</Link>
      </nav>

      <div className="hidden md:block">
        <Link to="/contact">
          <Button variant="primary" className="rounded-full px-8 hover:shadow-lg hover:shadow-red-500/30">
            Get a Quote
          </Button>
        </Link>
      </div>
    </header>
  );
}