import { useState } from 'react';
import { Link } from 'react-router-dom';
import Button from '../components/Button';

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState('All');

  const categories = ['All', 'Commercial', 'Residential', 'Infrastructure'];

  const projects = [
    { 
      id: 1, 
      title: "Skyline Business Park", 
      category: "Commercial", 
      status: "Completed", 
      location: "Downtown Metropolis", 
      desc: "A 15-story premium office complex with green building certification.",
      image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=800&q=80"
    },
    { 
      id: 2, 
      title: "Blue Ridge Villas", 
      category: "Residential", 
      status: "Ongoing", 
      location: "West End Heights", 
      desc: "Ultra-luxury gated community featuring 45 custom-built villas.",
      image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=800&q=80"
    },
    { 
      id: 3, 
      title: "Metro Bridge Extension", 
      category: "Infrastructure", 
      status: "Completed", 
      location: "North Highway", 
      desc: "A 2km modern suspension bridge connecting key industrial zones.",
      image: "https://images.unsplash.com/photo-1545558014-8692077e9b5c?auto=format&fit=crop&w=800&q=80"
    },
    { 
      id: 4, 
      title: "Alpha Tech Hub", 
      category: "Commercial", 
      status: "Planning", 
      location: "Cyber Valley", 
      desc: "Next-gen IT park designed for top tech giants.",
      image: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=800&q=80"
    },
    { 
      id: 5, 
      title: "Serenity Apartments", 
      category: "Residential", 
      status: "Completed", 
      location: "Lakeview", 
      desc: "Premium multi-family housing with smart home integrations.",
      image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=800&q=80"
    },
    { 
      id: 6, 
      title: "City Center Mall", 
      category: "Commercial", 
      status: "Ongoing", 
      location: "Central Plaza", 
      desc: "Massive retail and entertainment hub spanning 500,000 sq ft.",
      image: "https://images.unsplash.com/photo-1519567241046-7f4f0fee3b95?auto=format&fit=crop&w=800&q=80"
    },
  ];

  const filteredProjects = activeFilter === 'All' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  return (
    <div className="min-h-screen bg-white">
      
      {/* 1. MODERN HERO SECTION */}
      <section className="relative bg-slate-900 text-white pt-24 pb-40 px-6 md:px-12 overflow-hidden text-center">
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0 pointer-events-none">
          <div className="absolute top-20 left-1/4 w-96 h-96 bg-red-600 rounded-full mix-blend-multiply filter blur-[128px] opacity-30"></div>
          <div className="absolute -bottom-20 right-1/4 w-96 h-96 bg-blue-600 rounded-full mix-blend-multiply filter blur-[128px] opacity-40"></div>
        </div>
        
        <div className="max-w-4xl mx-auto relative z-10">
          <p className="text-red-500 font-bold tracking-widest uppercase text-sm mb-4">Our Portfolio</p>
          <h1 className="text-5xl md:text-6xl font-extrabold leading-tight mb-6 tracking-tight">
            Structures That <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-400">Speak for Themselves.</span>
          </h1>
          <p className="text-gray-400 text-lg md:text-xl font-light max-w-2xl mx-auto">
            Explore our proudest achievements. From robust infrastructure to breathtaking luxury homes, see how we turn blueprints into reality.
          </p>
        </div>
      </section>

      {/* 2. MEGA FEATURED PROJECT (ZENITH TOWER RESTORED) */}
      <section className="px-6 md:px-12 max-w-7xl mx-auto -mt-24 relative z-20 mb-20">
        <div className="bg-white rounded-3xl shadow-2xl shadow-gray-200/60 overflow-hidden flex flex-col lg:flex-row border border-gray-100 group cursor-pointer">
          
          <div className="lg:w-3/5 w-full bg-slate-800 relative overflow-hidden aspect-video lg:aspect-auto">
            <div className="absolute inset-0 bg-blue-900/20 group-hover:bg-transparent transition-colors duration-700 z-10 pointer-events-none"></div>
            <img 
              src="https://images.unsplash.com/photo-1541888086425-d81bb19240f5?auto=format&fit=crop&w=1200&q=80" 
              alt="The Zenith Tower" 
              className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
              onError={(e) => { e.target.src = "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=80"; }}
            />
            <div className="absolute top-6 left-6 z-20 bg-red-600 text-white text-xs font-bold px-4 py-1.5 rounded-full uppercase tracking-wider shadow-lg">
              Featured Case Study
            </div>
          </div>

          <div className="lg:w-2/5 w-full p-8 md:p-12 flex flex-col justify-center bg-gray-50 group-hover:bg-white transition-colors duration-500">
            <p className="text-blue-600 font-bold uppercase tracking-widest text-sm mb-2">Commercial Hub</p>
            <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-4">The Zenith Tower</h2>
            <p className="text-gray-600 mb-8 leading-relaxed">
              Our most ambitious project to date. A 40-story sustainable skyscraper dominating the city skyline, built entirely with green materials and state-of-the-art engineering practices.
            </p>
            
            <div className="grid grid-cols-2 gap-6 mb-8 border-t border-gray-200 pt-6">
              <div>
                <p className="text-xs text-gray-400 font-bold uppercase tracking-wider mb-1">Value</p>
                <p className="text-xl font-black text-gray-900">$120M+</p>
              </div>
              <div>
                <p className="text-xs text-gray-400 font-bold uppercase tracking-wider mb-1">Duration</p>
                <p className="text-xl font-black text-gray-900">36 Months</p>
              </div>
            </div>
            
            <Link to="/contact">
              <span className="text-red-600 font-bold hover:text-blue-900 transition-colors uppercase tracking-widest text-sm flex items-center gap-2">
                Discuss Similar Project &rarr;
              </span>
            </Link>
          </div>
        </div>
      </section>

      {/* 3. INTERACTIVE PORTFOLIO GRID (CITY CENTER MALL INCLUDED) */}
      <section className="py-16 px-6 md:px-12 max-w-7xl mx-auto mb-20">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-8 border-b border-gray-200 pb-8">
          <div>
            <h2 className="text-4xl font-black text-gray-900">All Projects</h2>
            <p className="text-gray-500 mt-2">Filter by category to explore our diverse capabilities.</p>
          </div>
          
          <div className="flex flex-wrap gap-3">
            {categories.map((category) => (
              <button 
                key={category}
                onClick={() => setActiveFilter(category)}
                className={`px-5 py-2 rounded-full text-sm font-bold transition-all duration-300 ${
                  activeFilter === category 
                    ? 'bg-blue-900 text-white shadow-md' 
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div key={project.id} className="group relative rounded-2xl overflow-hidden cursor-pointer shadow-lg border border-gray-100 bg-white">
              
              <div className="bg-slate-800 aspect-[4/3] overflow-hidden relative">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700" 
                  onError={(e) => { e.target.src = "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=800&q=80"; }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/60 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-300"></div>
              </div>
              
              <div className={`absolute top-4 right-4 text-white text-[10px] font-bold px-3 py-1.5 rounded-full uppercase tracking-wider shadow-lg ${
                project.status === 'Completed' ? 'bg-blue-600' : project.status === 'Ongoing' ? 'bg-red-600' : 'bg-gray-600'
              }`}>
                {project.status}
              </div>

              <div className="absolute bottom-0 left-0 w-full p-6 translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                <p className="text-blue-300 text-xs font-bold uppercase tracking-widest mb-1">{project.category}</p>
                <h3 className="text-2xl font-bold text-white mb-2">{project.title}</h3>
                
                <div className="opacity-0 h-0 group-hover:opacity-100 group-hover:h-auto transition-all duration-300 ease-in-out">
                  <p className="text-gray-300 text-sm mb-3 line-clamp-2">{project.desc}</p>
                  <p className="text-red-400 text-xs font-bold flex items-center gap-1">
                    📍 {project.location}
                  </p>
                </div>
              </div>

            </div>
          ))}
        </div>
      </section>

      {/* 4. BOTTOM CTA BANNER */}
      <section className="py-20 px-6 md:px-12 bg-blue-900 text-white overflow-hidden relative">
        <div className="absolute inset-0 opacity-10">
           <svg className="h-full w-full" xmlns="http://www.w3.org/2000/svg"><defs><pattern id="blueprint" width="40" height="40" patternUnits="userSpaceOnUse"><path d="M0 40V0H40" fill="none" stroke="currentColor" strokeWidth="1"></path></pattern></defs><rect width="100%" height="100%" fill="url(#blueprint)"></rect></svg>
        </div>
        
        <div className="max-w-4xl mx-auto relative z-10 flex flex-col md:flex-row items-center justify-between gap-8 text-center md:text-left">
          <div>
            <h2 className="text-3xl md:text-4xl font-black mb-2">Inspired by our work?</h2>
            <p className="text-blue-200 text-lg">Your project could be our next masterpiece.</p>
          </div>
          <Link to="/contact">
            <Button variant="primary" className="rounded-full px-8 py-4 text-lg hover:shadow-xl hover:shadow-red-600/30 whitespace-nowrap">
              Start Building Today
            </Button>
          </Link>
        </div>
      </section>

    </div>
  );
}