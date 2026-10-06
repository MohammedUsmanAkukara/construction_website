import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="relative bg-slate-950 text-gray-300 pt-24 pb-8 overflow-hidden border-t-4 border-red-600">
      
      {/* 1. Subtle Background Glow (Modern Agency Vibe) */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0 pointer-events-none">
        <div className="absolute -bottom-20 -left-20 w-96 h-96 bg-blue-900 rounded-full mix-blend-multiply filter blur-[128px] opacity-30"></div>
        <div className="absolute top-10 right-0 w-72 h-72 bg-red-900 rounded-full mix-blend-multiply filter blur-[128px] opacity-20"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          {/* COLUMN 1: Brand & About */}
          <div className="lg:col-span-1">
            <Link to="/" className="flex items-center cursor-pointer mb-6 group">
              <h2 className="text-4xl font-black tracking-tighter transition-transform group-hover:scale-105">
                <span className="text-red-600">A</span>
                <span className="text-white">B</span>
                <span className="text-blue-500">C</span>
              </h2>
              <div className="ml-2 pl-2 border-l-2 border-gray-700 flex flex-col justify-center leading-none">
                <span className="text-sm font-bold text-white tracking-widest uppercase">Build</span>
                <span className="text-[10px] text-gray-500 font-medium tracking-wide uppercase">Constructions</span>
              </div>
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed mb-8">
              Precision engineering meets modern architecture. Building solid foundations for a modern world with trust, safety, and excellence.
            </p>
            
            {/* Social Icons with Hover Float Effect */}
            <div className="flex gap-3">
              {['in', 'tw', 'ig', 'fb'].map((social, i) => (
                <a key={i} href="#" className="w-10 h-10 rounded-full bg-slate-900 border border-slate-800 flex items-center justify-center hover:bg-red-600 hover:border-red-600 text-gray-400 hover:text-white transition-all duration-300 shadow-lg hover:-translate-y-1">
                  <span className="uppercase text-xs font-bold">{social}</span>
                </a>
              ))}
            </div>
          </div>

          {/* COLUMN 2: Quick Links */}
          <div>
            <h3 className="text-white text-sm font-bold uppercase tracking-widest mb-6">Quick Links</h3>
            <ul className="space-y-4">
              {['Home', 'About', 'Services', 'Projects', 'Contact'].map((item, i) => (
                <li key={i}>
                  <Link 
                    to={item === 'Home' ? '/' : `/${item.toLowerCase()}`} 
                    className="text-gray-400 hover:text-red-500 hover:translate-x-2 transition-all duration-300 inline-block text-sm font-medium"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* COLUMN 3: Our Services */}
          <div>
            <h3 className="text-white text-sm font-bold uppercase tracking-widest mb-6">Our Services</h3>
            <ul className="space-y-4">
              {['Commercial Build', 'Residential Property', 'Civil Engineering', 'Renovation', 'Architecture'].map((item, i) => (
                <li key={i}>
                  <Link 
                    to="/services" 
                    className="text-gray-400 hover:text-blue-400 hover:translate-x-2 transition-all duration-300 inline-block text-sm font-medium"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* COLUMN 4: Newsletter / Stay Updated */}
          <div>
            <h3 className="text-white text-sm font-bold uppercase tracking-widest mb-6">Stay Updated</h3>
            <p className="text-gray-400 text-sm mb-6 leading-relaxed">
              Subscribe to our newsletter for the latest industry news, architecture trends, and project updates.
            </p>
            <form className="flex flex-col gap-3" onSubmit={(e) => e.preventDefault()}>
              <input 
                type="email" 
                placeholder="Enter your email address" 
                required
                className="w-full bg-slate-900 border border-slate-700 text-white px-4 py-3 rounded-xl focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all text-sm"
              />
              <button 
                type="submit"
                className="w-full bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-4 rounded-xl transition-all duration-300 text-sm uppercase tracking-wide hover:shadow-lg hover:shadow-red-600/20"
              >
                Subscribe Now
              </button>
            </form>
          </div>

        </div>

        {/* BOTTOM SECTION: Copyright & Designer Credit */}
        <div className="pt-8 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center gap-4">
          
          {/* Updated Credit Section */}
          <div className="flex flex-col md:flex-row items-center gap-1 md:gap-3 text-center md:text-left">
            <span className="text-gray-500 text-xs font-medium">© {new Date().getFullYear()} ABC Build Constructions. All rights reserved.</span>
            <span className="hidden md:inline text-slate-700">|</span>
            <span className="text-gray-400 text-xs font-medium">
              Designed by <span className="text-blue-400 font-bold hover:text-red-500 transition-colors cursor-pointer tracking-wider">Mohammed Usman</span>
            </span>
          </div>

          <div className="flex gap-6 text-xs font-medium text-gray-500">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-white transition-colors">Site Map</a>
          </div>
        </div>
      </div>
    </footer>
  );
}