import { useState } from 'react';
import Button from '../components/Button';

export default function Contact() {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setTimeout(() => {
      setIsSubmitted(true);
      setTimeout(() => setIsSubmitted(false), 5000);
    }, 500);
  };

  return (
    <div className="min-h-screen bg-gray-50 pb-20">
      
      {/* 1. MODERN HERO SECTION */}
      <section className="relative bg-slate-900 text-white pt-24 pb-48 px-6 md:px-12 overflow-hidden text-center">
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0 pointer-events-none">
          <div className="absolute top-10 left-1/4 w-96 h-96 bg-blue-600 rounded-full mix-blend-multiply filter blur-[128px] opacity-40"></div>
          <div className="absolute top-20 right-1/4 w-96 h-96 bg-red-600 rounded-full mix-blend-multiply filter blur-[128px] opacity-30"></div>
        </div>
        
        <div className="max-w-4xl mx-auto relative z-10">
          <p className="text-red-500 font-bold tracking-widest uppercase text-sm mb-4">Let's Connect</p>
          <h1 className="text-5xl md:text-6xl font-extrabold leading-tight mb-6 tracking-tight">
            Ready to Build Your <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-400">Next Big Project?</span>
          </h1>
          <p className="text-gray-400 text-lg md:text-xl font-light max-w-2xl mx-auto">
            Whether you have a blueprint ready or just an idea, our team of experts is here to guide you every step of the way.
          </p>
        </div>
      </section>

      {/* 2. OVERLAPPING CONTACT CARD */}
      <section className="px-6 md:px-12 max-w-6xl mx-auto -mt-32 relative z-20 mb-24">
        <div className="bg-white rounded-3xl shadow-2xl shadow-gray-200/80 flex flex-col lg:flex-row overflow-hidden border border-gray-100">
          
          {/* LEFT SIDE: Contact Information */}
          <div className="lg:w-2/5 w-full bg-slate-900 text-white p-10 md:p-14 relative overflow-hidden flex flex-col justify-between">
            <div className="absolute -bottom-20 -right-20 w-64 h-64 bg-red-600 rounded-full mix-blend-overlay filter blur-[50px] opacity-50"></div>
            
            <div className="relative z-10">
              <h2 className="text-3xl font-black mb-2">Get In Touch</h2>
              <p className="text-gray-400 mb-10 text-sm leading-relaxed">
                Fill out the form and our team will get back to you within 24 hours. We're excited to hear from you!
              </p>

              <div className="space-y-8">
                <div className="flex items-start gap-4">
                  <div className="bg-white/10 p-3 rounded-lg text-red-500">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path></svg>
                  </div>
                  <div>
                    <p className="text-gray-400 text-xs font-bold uppercase tracking-widest mb-1">Call Us</p>
                    <p className="text-lg font-semibold">+1 (234) 567-8900</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-white/10 p-3 rounded-lg text-blue-400">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
                  </div>
                  <div>
                    <p className="text-gray-400 text-xs font-bold uppercase tracking-widest mb-1">Email Us</p>
                    <p className="text-lg font-semibold">info@abcbuild.com</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-white/10 p-3 rounded-lg text-gray-300">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.243-4.243a8 8 0 1111.314 0z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
                  </div>
                  <div>
                    <p className="text-gray-400 text-xs font-bold uppercase tracking-widest mb-1">Headquarters</p>
                    <p className="text-lg font-semibold leading-snug">123 Construction Ave,<br/>Industrial Estate, City</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-16 relative z-10">
              <p className="text-gray-400 text-xs font-bold uppercase tracking-widest mb-4">Follow Our Work</p>
              <div className="flex gap-4">
                {['LinkedIn', 'Twitter', 'Instagram'].map((social, i) => (
                  <a key={i} href="#" className="w-10 h-10 bg-white/5 rounded-full flex items-center justify-center hover:bg-red-600 transition-colors duration-300 text-sm font-medium">
                    {social[0]}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* RIGHT SIDE: Contact Form */}
          <div className="lg:w-3/5 w-full p-10 md:p-14 bg-white">
            <h2 className="text-2xl font-bold text-gray-900 mb-8 uppercase tracking-wide">Send a Message</h2>
            
            {isSubmitted && (
              <div className="mb-8 bg-green-50 border border-green-200 text-green-700 px-4 py-3 rounded-xl flex items-center gap-3 animate-fade-in-up">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path></svg>
                <p className="text-sm font-semibold">Thank you! Your message has been sent successfully.</p>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-xs font-bold text-gray-500 uppercase tracking-wide">Full Name</label>
                  <input required type="text" className="w-full bg-gray-50 border border-gray-200 text-gray-900 rounded-xl p-4 focus:outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-100 transition-all" placeholder="John Doe" />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold text-gray-500 uppercase tracking-wide">Email Address</label>
                  <input required type="email" className="w-full bg-gray-50 border border-gray-200 text-gray-900 rounded-xl p-4 focus:outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-100 transition-all" placeholder="john@example.com" />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-xs font-bold text-gray-500 uppercase tracking-wide">Project Type</label>
                <select className="w-full bg-gray-50 border border-gray-200 text-gray-900 rounded-xl p-4 focus:outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-100 transition-all appearance-none cursor-pointer">
                  <option>Commercial Build</option>
                  <option>Residential Property</option>
                  <option>Renovation</option>
                  <option>Civil Infrastructure</option>
                  <option>Other</option>
                </select>
              </div>

              <div className="space-y-2">
                <label className="text-xs font-bold text-gray-500 uppercase tracking-wide">Message details</label>
                <textarea required rows="4" className="w-full bg-gray-50 border border-gray-200 text-gray-900 rounded-xl p-4 focus:outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-100 transition-all resize-none" placeholder="Tell us about your project requirements, timeline, or any specific details..."></textarea>
              </div>

              <div className="pt-2">
                <Button variant="primary" className="w-full md:w-auto rounded-xl px-10 py-4 hover:-translate-y-1 hover:shadow-xl hover:shadow-red-600/20 transition-all">
                  Send Message
                </Button>
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* 3. WORKING DEMO MAP SECTION */}
      <section className="max-w-7xl mx-auto px-6 md:px-12 mb-10">
        <div className="w-full h-[450px] bg-slate-200 rounded-3xl overflow-hidden relative border border-gray-200 shadow-inner group">
          
          {/* Real Google Maps Embed (Hover par grayscale hat jayega) */}
          <iframe 
            title="Company Location Map"
            className="absolute inset-0 w-full h-full grayscale hover:grayscale-0 transition-all duration-700 ease-in-out" 
            src="https://maps.google.com/maps?q=Raipur,%20Chhattisgarh&t=&z=13&ie=UTF8&iwloc=&output=embed" 
            frameBorder="0" 
            scrolling="no" 
            marginHeight="0" 
            marginWidth="0">
          </iframe>

          {/* Floating Location Card */}
          <div className="absolute bottom-6 left-6 md:bottom-10 md:left-10 bg-white p-6 rounded-2xl shadow-2xl border border-gray-100 max-w-xs transform group-hover:translate-y-[-10px] transition-transform duration-500 z-10">
            <h3 className="font-black text-gray-900 text-lg mb-1">Global HQ</h3>
            <p className="text-sm text-gray-500 mb-4">Open Monday to Friday<br/>9:00 AM - 6:00 PM</p>
            <a href="https://maps.google.com" target="_blank" rel="noreferrer" className="text-red-600 text-sm font-bold uppercase tracking-wide hover:text-blue-900 transition-colors flex items-center gap-1">
              Get Directions <span aria-hidden="true">&rarr;</span>
            </a>
          </div>
        </div>
      </section>

    </div>
  );
}