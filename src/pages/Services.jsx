import { Link } from 'react-router-dom';
import Button from '../components/Button';

export default function Services() {
  return (
    <div className="min-h-screen bg-white">
      
      {/* 1. MODERN HERO SECTION */}
      <section className="relative bg-slate-900 text-white pt-24 pb-40 px-6 md:px-12 overflow-hidden text-center">
        {/* Background Glowing Effects */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0 pointer-events-none">
          <div className="absolute -top-40 left-1/3 w-96 h-96 bg-blue-600 rounded-full mix-blend-multiply filter blur-[128px] opacity-40"></div>
          <div className="absolute top-20 right-1/3 w-96 h-96 bg-red-600 rounded-full mix-blend-multiply filter blur-[128px] opacity-40"></div>
        </div>
        
        <div className="max-w-4xl mx-auto relative z-10">
          <p className="text-red-400 font-bold tracking-widest uppercase text-sm mb-4">Our Expertise</p>
          <h1 className="text-5xl md:text-6xl font-extrabold leading-tight mb-6 tracking-tight">
            Mastering the Art of <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-600">Construction.</span>
          </h1>
          <p className="text-gray-400 text-lg md:text-xl font-light max-w-2xl mx-auto">
            From groundbreaking commercial complexes to custom luxury homes, we deliver engineering excellence across every sector.
          </p>
        </div>
      </section>

      {/* 2. OVERLAPPING MAIN SERVICES (Alternating Layout with Real Images) */}
      <section className="px-6 md:px-12 max-w-7xl mx-auto -mt-24 relative z-20 mb-24 space-y-16">
        
        {/* Service 1: Commercial (Image Left, Text Right) */}
        <div className="bg-white rounded-3xl shadow-2xl shadow-gray-200/60 p-6 md:p-10 flex flex-col lg:flex-row gap-12 items-center border border-gray-100 group">
          <div className="lg:w-1/2 w-full">
            <div className="bg-slate-100 rounded-2xl overflow-hidden aspect-[4/3] flex items-center justify-center border border-gray-200 relative">
              <div className="absolute inset-0 bg-blue-900/10 group-hover:bg-transparent transition-colors duration-500 z-10 pointer-events-none"></div>
              {/* REAL COMMERCIAL IMAGE */}
              <img 
                src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1000&q=80" 
                alt="Commercial Building Construction" 
                className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
              />
            </div>
          </div>
          <div className="lg:w-1/2 w-full lg:pr-8">
            <div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center mb-6">
              <span className="font-black text-xl">01</span>
            </div>
            <h2 className="text-3xl font-black text-gray-900 mb-4">Commercial Construction</h2>
            <p className="text-gray-600 mb-6 leading-relaxed">
              We specialize in building state-of-the-art office spaces, retail centers, and industrial hubs. Our commercial projects are designed for scalability, energy efficiency, and modern aesthetics.
            </p>
            <ul className="space-y-3 mb-8">
              {['Corporate Headquarters', 'Retail & Shopping Malls', 'Warehouses & Logistics'].map((item, i) => (
                <li key={i} className="flex items-center text-gray-700 font-medium">
                  <span className="text-red-500 mr-3">✔</span> {item}
                </li>
              ))}
            </ul>
            <Link to="/projects" className="text-blue-600 font-bold hover:text-red-600 transition-colors uppercase tracking-widest text-sm">View Related Projects &rarr;</Link>
          </div>
        </div>

        {/* Service 2: Residential (Text Left, Image Right) */}
        <div className="bg-white rounded-3xl shadow-2xl shadow-gray-200/60 p-6 md:p-10 flex flex-col lg:flex-row-reverse gap-12 items-center border border-gray-100 group">
          <div className="lg:w-1/2 w-full">
            <div className="bg-slate-100 rounded-2xl overflow-hidden aspect-[4/3] flex items-center justify-center border border-gray-200 relative">
              <div className="absolute inset-0 bg-red-900/10 group-hover:bg-transparent transition-colors duration-500 z-10 pointer-events-none"></div>
              {/* REAL RESIDENTIAL IMAGE */}
              <img 
                src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1000&q=80" 
                alt="Luxury Residential Villa" 
                className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
              />
            </div>
          </div>
          <div className="lg:w-1/2 w-full lg:pl-8">
            <div className="w-12 h-12 bg-red-50 text-red-600 rounded-xl flex items-center justify-center mb-6">
              <span className="font-black text-xl">02</span>
            </div>
            <h2 className="text-3xl font-black text-gray-900 mb-4">Residential Development</h2>
            <p className="text-gray-600 mb-6 leading-relaxed">
              Building a home requires a personal touch. We construct modern, durable, and comfortable residential properties ranging from luxury villas to multi-family apartments with premium finishing.
            </p>
            <ul className="space-y-3 mb-8">
              {['Luxury Villas & Estates', 'Multi-story Apartments', 'Custom Home Building'].map((item, i) => (
                <li key={i} className="flex items-center text-gray-700 font-medium">
                  <span className="text-blue-600 mr-3">✔</span> {item}
                </li>
              ))}
            </ul>
            <Link to="/projects" className="text-red-600 font-bold hover:text-blue-900 transition-colors uppercase tracking-widest text-sm">View Related Projects &rarr;</Link>
          </div>
        </div>

      </section>

      {/* 3. ADDITIONAL SERVICES GRID */}
      <section className="py-20 bg-gray-50 px-6 md:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-black text-gray-900">More Specialized Solutions</h2>
            <div className="w-24 h-1 bg-red-600 mx-auto mt-6"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: "Civil Engineering", desc: "Heavy infrastructure, bridges, and roadwork handled by expert engineers.", color: "border-blue-900" },
              { title: "Renovation & Remodeling", desc: "Transforming existing structures to meet modern architectural standards without losing character.", color: "border-red-600" },
              { title: "Project Management", desc: "End-to-end management ensuring on-time delivery, budget control, and strict safety compliance.", color: "border-gray-900" },
            ].map((service, index) => (
              <div key={index} className={`bg-white p-8 rounded-2xl shadow-lg border-t-4 ${service.color} hover:-translate-y-2 hover:shadow-xl transition-all duration-300`}>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. HOW WE WORK (PROCESS) SECTION */}
      <section className="py-24 px-6 md:px-12 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-blue-600 font-bold tracking-widest uppercase text-sm mb-2">Our Proven Process</p>
          <h2 className="text-4xl font-black text-gray-900 mb-6">How We Build Your Vision</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative">
          {/* Connecting Line for Desktop */}
          <div className="hidden md:block absolute top-1/2 left-0 w-full h-0.5 bg-gray-200 -z-10 -translate-y-1/2"></div>
          
          {[
            { step: "01", title: "Consultation", desc: "Understanding your vision, budget, and timeline." },
            { step: "02", title: "Design & Plan", desc: "Creating architectural blueprints and securing permits." },
            { step: "03", title: "Construction", desc: "Executing the build with strict quality control." },
            { step: "04", title: "Handover", desc: "Final inspection and handing over the keys." }
          ].map((item, idx) => (
            <div key={idx} className="bg-white p-6 rounded-2xl shadow-xl shadow-gray-200/50 border border-gray-100 text-center relative">
              <div className="w-12 h-12 bg-gray-900 text-white rounded-full flex items-center justify-center font-bold text-lg mx-auto mb-4 border-4 border-white shadow-sm">
                {item.step}
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">{item.title}</h3>
              <p className="text-gray-500 text-sm">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 5. CTA BANNER */}
      <section className="py-20 px-6 md:px-12 bg-slate-900 text-white text-center rounded-t-[3rem] border-t-8 border-red-600">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-black mb-6">Have a Project in Mind?</h2>
          <p className="text-gray-400 mb-10 text-lg">
            Whether it's a massive commercial complex or a bespoke residential home, our experts are ready to provide a free consultation and estimate.
          </p>
          <Link to="/contact">
            <Button variant="primary" className="rounded-full px-10 py-4 text-lg hover:scale-105 transition-transform shadow-lg shadow-red-600/20">
              Request a Free Quote
            </Button>
          </Link>
        </div>
      </section>

    </div>
  );
}