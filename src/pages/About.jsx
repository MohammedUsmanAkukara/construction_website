import { Link } from 'react-router-dom';
import Button from '../components/Button';

export default function About() {
  return (
    <div className="min-h-screen bg-white">
      
      {/* 1. MODERN HERO SECTION */}
      <section className="relative bg-slate-900 text-white pt-24 pb-40 px-6 md:px-12 overflow-hidden text-center">
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0 pointer-events-none">
          <div className="absolute -top-40 left-1/4 w-96 h-96 bg-red-600 rounded-full mix-blend-multiply filter blur-[128px] opacity-40"></div>
          <div className="absolute top-20 right-1/4 w-96 h-96 bg-blue-600 rounded-full mix-blend-multiply filter blur-[128px] opacity-50"></div>
        </div>
        
        <div className="max-w-4xl mx-auto relative z-10">
          <p className="text-blue-300 font-bold tracking-widest uppercase text-sm mb-4">Discover Our Legacy</p>
          <h1 className="text-5xl md:text-6xl font-extrabold leading-tight mb-6 tracking-tight">
            Building Beyond <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-red-700">Expectations.</span>
          </h1>
          <p className="text-gray-400 text-lg md:text-xl font-light">
            We are more than just a construction company. We are a team of visionaries, engineers, and builders dedicated to shaping the future skyline of modern cities.
          </p>
        </div>
      </section>

      {/* 2. OVERLAPPING "OUR STORY" SECTION */}
      <section className="px-6 md:px-12 max-w-7xl mx-auto -mt-24 relative z-20 mb-24">
        <div className="bg-white rounded-3xl shadow-2xl shadow-gray-200/60 p-8 md:p-12 lg:p-16 flex flex-col lg:flex-row gap-12 items-center border border-gray-100">
          
          <div className="lg:w-1/2 w-full relative">
            <div className="bg-slate-100 rounded-2xl overflow-hidden aspect-square md:aspect-video lg:aspect-square flex items-center justify-center relative z-10 border border-gray-200 shadow-inner group">
              {/* GLOBAL HQ IMAGE */}
              <img 
                src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1000&q=80" 
                alt="Our Architecture Office" 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-blue-900/10 pointer-events-none"></div>
            </div>
            
            <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-red-50 rounded-2xl -z-10"></div>
            <div className="absolute -top-6 -right-6 w-24 h-24 bg-blue-50 rounded-2xl -z-10"></div>
            
            <div className="absolute top-8 -right-4 md:-right-8 bg-slate-900 text-white p-4 rounded-xl shadow-xl flex items-center gap-4 z-20 animate-bounce-slow">
              <div className="text-red-500 font-black text-4xl">15+</div>
              <div className="text-xs font-bold uppercase tracking-widest text-gray-300 leading-tight">
                Years of <br/> Excellence
              </div>
            </div>
          </div>

          <div className="lg:w-1/2 w-full">
            <p className="text-red-600 font-bold tracking-widest uppercase text-sm mb-2">Our Story</p>
            <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-6 leading-tight">
              A Decade of Delivering <span className="text-blue-900">Solid Foundations.</span>
            </h2>
            <p className="text-gray-600 mb-6 leading-relaxed text-lg">
              Started in 2008 with a small team of passionate engineers, ABC Build Constructions has grown into a leading international force in the commercial and residential construction sector. 
            </p>
            <p className="text-gray-600 mb-8 leading-relaxed">
              Our journey is defined by our unwavering commitment to quality, safety, and innovation. We don't just execute blueprints; we collaborate with our clients to bring their ultimate vision to life, ensuring every brick laid is a step towards perfection.
            </p>
            <div className="pt-6 border-t border-gray-100 flex items-center gap-4">
               {/* GLOBAL CEO AVATAR */}
               <img 
                 src="https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=150&q=80" 
                 alt="John Doe" 
                 className="w-12 h-12 rounded-full object-cover border-2 border-red-600"
               />
               <div>
                 <p className="font-bold text-gray-900 text-lg">John Doe</p>
                 <p className="text-red-600 text-sm font-bold uppercase tracking-widest">Founder & CEO</p>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. CORE VALUES SECTION */}
      <section className="py-24 bg-gray-50 px-6 md:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <p className="text-red-600 font-bold tracking-widest uppercase text-sm mb-2">Our Philosophy</p>
            <h2 className="text-4xl font-black text-gray-900 mb-6">The Core Values That Drive Us</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: "🛡️", title: "Safety First", desc: "Zero-compromise policy on site safety for our workers and clients.", color: "blue" },
              { icon: "⭐", title: "Premium Quality", desc: "Using only top-tier materials and modern construction techniques.", color: "red" },
              { icon: "🤝", title: "Integrity", desc: "Transparent pricing, honest communication, and no hidden costs.", color: "gray" },
              { icon: "💡", title: "Innovation", desc: "Embracing green building practices and smart tech integrations.", color: "blue" }
            ].map((value, idx) => (
              <div key={idx} className="bg-white p-8 rounded-2xl shadow-lg shadow-gray-200/50 hover:-translate-y-2 hover:shadow-xl transition-all duration-300 border border-gray-100 text-center group">
                <div className={`w-16 h-16 mx-auto bg-${value.color}-50 rounded-full flex items-center justify-center text-3xl mb-6 group-hover:scale-110 transition-transform`}>
                  {value.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{value.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. STATISTICS / IMPACT BANNER */}
      <section className="relative py-20 bg-blue-900 text-white overflow-hidden">
        <div className="absolute inset-0 opacity-10">
           <svg className="h-full w-full" xmlns="http://www.w3.org/2000/svg"><defs><pattern id="grid-pattern-2" width="40" height="40" patternUnits="userSpaceOnUse"><path d="M0 40V0H40" fill="none" stroke="currentColor" strokeWidth="1"></path></pattern></defs><rect width="100%" height="100%" fill="url(#grid-pattern-2)"></rect></svg>
        </div>
        
        <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 text-center">
            {[
              { number: "250+", label: "Projects Completed" },
              { number: "150+", label: "Expert Engineers" },
              { number: "15+", label: "Years Experience" },
              { number: "25+", label: "Industry Awards" }
            ].map((stat, idx) => (
              <div key={idx}>
                <h4 className="text-4xl md:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-br from-white to-gray-400 mb-2">{stat.number}</h4>
                <p className="text-red-400 font-bold uppercase tracking-widest text-xs md:text-sm">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. TEAM SECTION (GLOBAL CORPORATE FACES) */}
      <section className="py-24 px-6 md:px-12 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-red-600 font-bold tracking-widest uppercase text-sm mb-2">The Brains Behind</p>
          <h2 className="text-4xl font-black text-gray-900 mb-6">Our Leadership Team</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { 
              name: "John Doe", 
              role: "Founder & CEO",
              image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=600&q=80"
            },
            { 
              name: "Sarah Smith", 
              role: "Chief Architect",
              image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=600&q=80"
            },
            { 
              name: "Michael Brown", 
              role: "Head of Engineering",
              image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=600&q=80"
            }
          ].map((member, idx) => (
            <div key={idx} className="group cursor-pointer">
              <div className="bg-slate-100 aspect-[4/5] rounded-2xl overflow-hidden mb-6 relative shadow-lg">
                <div className="absolute inset-0 bg-gray-900/20 group-hover:bg-transparent transition-colors z-10 pointer-events-none"></div>
                <img 
                  src={member.image} 
                  alt={member.name} 
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="text-center">
                <h3 className="text-2xl font-bold text-gray-900 mb-1">{member.name}</h3>
                <p className="text-red-600 font-bold uppercase tracking-widest text-xs">{member.role}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 6. BOTTOM CTA */}
      <section className="py-16 bg-gray-900 text-white text-center border-t-4 border-red-600">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-black mb-6">Want to know how we can help you?</h2>
          <div className="flex justify-center gap-4">
            <Link to="/contact">
              <Button variant="primary" className="rounded-full px-8 py-3">Let's Talk</Button>
            </Link>
            <Link to="/projects">
              <Button variant="outline" className="rounded-full px-8 py-3 border-white text-white hover:bg-white hover:text-gray-900">View Projects</Button>
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}