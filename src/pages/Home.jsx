import { Link } from 'react-router-dom';
import Button from '../components/Button';

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      
      {/* 1. MODERN HERO SECTION */}
      <section className="relative bg-slate-900 text-white pt-24 pb-32 px-6 md:px-12 overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0 pointer-events-none">
          <div className="absolute -top-40 -right-40 w-96 h-96 bg-blue-600 rounded-full mix-blend-multiply filter blur-[128px] opacity-50"></div>
          <div className="absolute top-40 -left-40 w-96 h-96 bg-red-600 rounded-full mix-blend-multiply filter blur-[128px] opacity-40"></div>
        </div>
        
        <div className="max-w-7xl mx-auto relative z-10 flex flex-col md:flex-row items-center gap-12">
          <div className="md:w-1/2">
            <div className="inline-block px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-blue-300 text-xs font-bold tracking-widest uppercase mb-6">
              Leading the Industry
            </div>
            <h1 className="text-5xl md:text-6xl font-extrabold leading-tight mb-6 tracking-tight">
              Constructing <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-red-700">Tomorrow's</span> World.
            </h1>
            <p className="text-gray-400 mb-8 text-lg md:text-xl font-light max-w-lg">
              Precision engineering meets modern architecture. We don't just build structures; we craft legacies.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link to="/projects">
                <Button variant="primary" className="rounded-full px-8 py-3 text-lg hover:shadow-lg hover:shadow-red-600/40">
                  Explore Projects
                </Button>
              </Link>
            </div>
          </div>
          
          <div className="md:w-1/2 w-full relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-gray-800 aspect-video md:aspect-square transform md:rotate-2 hover:rotate-0 transition-transform duration-500">
              <div className="absolute inset-0 bg-gradient-to-tr from-blue-900/40 to-transparent mix-blend-overlay z-10 pointer-events-none"></div>
              {/* HERO IMAGE */}
              <img 
                src="https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1200&q=80" 
                alt="Modern Construction" 
                className="w-full h-full object-cover"
                onError={(e) => { e.target.src = "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=80"; }}
              />
            </div>
            
            <div className="absolute -bottom-8 -left-8 bg-white text-gray-900 p-6 rounded-xl shadow-2xl z-20 border border-gray-100 flex items-center gap-4 animate-bounce-slow">
              <div className="bg-red-100 p-3 rounded-full">
                <svg className="w-8 h-8 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"></path></svg>
              </div>
              <div>
                <p className="text-3xl font-black">250+</p>
                <p className="text-xs text-gray-500 font-bold uppercase tracking-wider">Projects Done</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. OVERLAPPING SERVICES SECTION */}
      <section className="px-6 md:px-12 max-w-7xl mx-auto -mt-16 relative z-30 mb-24">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            { id: '01', title: 'Commercial Build', color: 'blue', desc: 'Modern office spaces and retail structures built to the highest industry standards with premium materials.' },
            { id: '02', title: 'Renovation', color: 'red', desc: 'Transforming existing spaces with minimal disruption, breathing new life into old architectures.' },
            { id: '03', title: 'Civil Engineering', color: 'gray', desc: 'Heavy infrastructure projects handled by experienced engineering professionals and cutting-edge tech.' }
          ].map((service, index) => (
            <div key={index} className="bg-white p-8 rounded-2xl shadow-xl shadow-gray-200/50 border border-gray-100 hover:-translate-y-2 hover:shadow-2xl transition-all duration-300 group">
              <div className={`w-14 h-14 bg-${service.color}-50 text-${service.color}-600 rounded-xl flex items-center justify-center mb-6 group-hover:bg-${service.color === 'gray' ? 'gray-900' : service.color + '-600'} group-hover:text-white transition-colors`}>
                <span className="font-black text-xl">{service.id}</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed">{service.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 3. WHY CHOOSE US SECTION (FIXED IMAGE) */}
      <section className="py-20 px-6 md:px-12 max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-16">
        <div className="md:w-1/2 relative">
          <div className="absolute -top-6 -left-6 w-24 h-24 bg-red-100 rounded-2xl -z-10"></div>
          <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-blue-100 rounded-2xl -z-10"></div>
          
          <div className="bg-slate-100 rounded-3xl overflow-hidden aspect-[4/5] flex items-center justify-center border border-gray-200 relative shadow-inner">
             {/* FIXED GLOBAL ENGINEERS IMAGE WITH FALLBACK */}
             <img 
               src="https://images.unsplash.com/photo-1504307651254-35680f356f77?auto=format&fit=crop&w=800&q=80" 
               alt="Global Engineers planning on site" 
               className="w-full h-full object-cover relative z-10"
               onError={(e) => { e.target.src = "https://images.unsplash.com/photo-1508450859948-4e04fabaa4ea?auto=format&fit=crop&w=800&q=80"; }}
             />
          </div>
        </div>
        
        <div className="md:w-1/2">
          <p className="text-red-600 font-bold tracking-widest uppercase text-sm mb-2">Why Choose ABC Build</p>
          <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-6 leading-tight">
            We Build Everything With <span className="text-blue-900">Perfection.</span>
          </h2>
          <p className="text-gray-600 mb-8 leading-relaxed text-lg">
            With over 15 years of industry experience, we bring a blend of innovative technology, expert craftsmanship, and strict safety standards to every project we undertake.
          </p>
          
          <div className="space-y-6">
            {[
              { title: "Premium Quality Materials", desc: "We never compromise on the quality of raw materials." },
              { title: "Expert & Dedicated Team", desc: "Our engineers and architects are industry veterans." },
              { title: "On-Time Delivery", desc: "We respect your time and strictly adhere to deadlines." }
            ].map((feature, idx) => (
              <div key={idx} className="flex items-start gap-4">
                <div className="mt-1 bg-blue-100 p-2 rounded-lg text-blue-600">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path></svg>
                </div>
                <div>
                  <h4 className="text-lg font-bold text-gray-900">{feature.title}</h4>
                  <p className="text-gray-500 text-sm">{feature.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. RECENT PROJECTS PREVIEW */}
      <section className="py-24 px-6 md:px-12 bg-gray-50 mt-12">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
            <div>
              <p className="text-red-600 font-bold tracking-widest uppercase text-sm mb-2">Our Portfolio</p>
              <h2 className="text-4xl font-black text-gray-900">Featured Works</h2>
            </div>
            <Link to="/projects" className="text-blue-600 font-bold hover:text-red-600 transition-colors flex items-center gap-2">
              View All Projects <span aria-hidden="true">&rarr;</span>
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { title: "Skyline Business Park", category: "Commercial", tag: "New", image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=800&q=80" },
              { title: "Blue Ridge Apartments", category: "Residential", tag: "Completed", image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=800&q=80" },
              { title: "Metro Bridge", category: "Infrastructure", tag: "Ongoing", image: "https://images.unsplash.com/photo-1545558014-8692077e9b5c?auto=format&fit=crop&w=800&q=80" }
            ].map((project, index) => (
              <Link to="/projects" key={index} className="group relative rounded-2xl overflow-hidden cursor-pointer shadow-lg block">
                <div className="bg-gray-800 aspect-[4/3] flex items-center justify-center overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    onError={(e) => { e.target.src = "https://images.unsplash.com/photo-1541888086425-d81bb19240f5?auto=format&fit=crop&w=800&q=80"; }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/40 to-transparent opacity-80 pointer-events-none"></div>
                </div>
                
                <div className="absolute top-4 right-4 bg-red-600 text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider shadow-lg">
                  {project.tag}
                </div>

                <div className="absolute bottom-0 left-0 w-full p-6 translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                  <p className="text-blue-300 text-xs font-bold uppercase tracking-widest mb-1">{project.category}</p>
                  <h3 className="text-2xl font-bold text-white">{project.title}</h3>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* 5. CALL TO ACTION BANNER */}
      <section className="relative py-24 px-6 md:px-12 bg-blue-900 text-white overflow-hidden text-center">
        <div className="absolute inset-0 opacity-10 pointer-events-none">
           <svg className="h-full w-full" xmlns="http://www.w3.org/2000/svg"><defs><pattern id="grid-pattern" width="40" height="40" patternUnits="userSpaceOnUse"><path d="M0 40V0H40" fill="none" stroke="currentColor" strokeWidth="1"></path></pattern></defs><rect width="100%" height="100%" fill="url(#grid-pattern)"></rect></svg>
        </div>
        
        <div className="max-w-3xl mx-auto relative z-10">
          <h2 className="text-4xl md:text-5xl font-black mb-6">Ready to Build Your Dream Project?</h2>
          <p className="text-blue-200 mb-10 text-lg">
            Let's turn your vision into a reality. Contact us today for a free consultation and project estimate.
          </p>
          <Link to="/contact">
            <Button variant="primary" className="rounded-full px-10 py-4 text-lg shadow-lg shadow-red-600/30 hover:-translate-y-1 transition-transform">
              Contact Us Now
            </Button>
          </Link>
        </div>
      </section>

    </div>
  );
}