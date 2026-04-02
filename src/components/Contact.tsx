"use client";

import { MapPin, Phone, Clock, Mail } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="py-24 bg-slate-950 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-blue-500 font-bold tracking-wider uppercase text-sm mb-3">Contact</h2>
          <h3 className="text-3xl md:text-5xl font-extrabold text-white mb-6">Contactează-ne</h3>
          <p className="text-slate-400 text-lg">
            Suntem aici pentru a te ajuta! Nu ezita să ne contactezi pentru programări sau asistență de urgență.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          
          <div className="bg-slate-900 rounded-3xl p-8 border border-slate-800 shadow-xl">
            <h4 className="text-2xl font-bold text-white mb-6">Informații de Contact</h4>
            <div className="space-y-6 mb-8">
              <div className="flex items-start gap-6">
                <div className="w-14 h-14 rounded-2xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center shrink-0">
                  <MapPin className="w-7 h-7 text-blue-500" />
                </div>
                <div>
                  <p className="text-white font-semibold mb-1">Adresă</p>
                  <a href="https://maps.app.goo.gl/Ff6eJMKPTeHgDxFC8" target="_blank" rel="noreferrer" className="text-slate-400 hover:text-blue-500 transition-colors block">Bulevardul Ștefan cel Mare 190, 615200 Târgu Neamț, România</a>
                </div>
              </div>
              
              <div className="flex items-start gap-6">
                <div className="w-14 h-14 rounded-2xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center shrink-0">
                  <Phone className="w-7 h-7 text-blue-500" />
                </div>
                <div>
                  <p className="text-white font-semibold mb-1">Telefon / Tractări 24/7</p>
                  <a href="tel:+40758286536" className="text-slate-400 hover:text-blue-500 transition-colors block">0758 286 536</a>
                </div>
              </div>

              <div className="flex items-start gap-6">
                <div className="w-14 h-14 rounded-2xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center shrink-0">
                  <Mail className="w-7 h-7 text-blue-500" />
                </div>
                <div>
                  <p className="text-white font-semibold mb-1">Email</p>
                  <a href="mailto:alexcristian2005@yahoo.com" className="text-slate-400 hover:text-blue-500 transition-colors block">alexcristian2005@yahoo.com</a>
                </div>
              </div>

              <div className="flex items-start gap-6">
                <div className="w-14 h-14 rounded-2xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center shrink-0">
                  <Clock className="w-7 h-7 text-blue-500" />
                </div>
                <div>
                  <p className="text-white font-semibold mb-1">Program Funcționare</p>
                  <ul className="text-slate-400 space-y-1 text-sm">
                    <li>Luni - Miercuri: 09:00 - 20:00</li>
                    <li>Joi - Vineri: 09:00 - 19:00</li>
                    <li>Sâmbătă: 09:00 - 17:00</li>
                    <li>Duminică: Închis</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="rounded-2xl overflow-hidden h-64 border border-slate-800 bg-slate-950">
              <iframe 
                src="https://maps.google.com/maps?q=47.20477025956158,26.38805707714168&t=&z=15&ie=UTF8&iwloc=B&output=embed" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen={false} 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-full"
                title="Google Maps Locatie Cristi AutoTest">
              </iframe>
            </div>
          </div>

          <div className="bg-slate-900 rounded-3xl p-8 border border-slate-800 shadow-xl">
             <h4 className="text-2xl font-bold text-white mb-6">Trimite un Mesaj</h4>
             <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-slate-300 mb-2">Nume Complet</label>
                    <input type="text" id="name" className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all font-medium" placeholder="Ion Popescu" />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-slate-300 mb-2">Telefon</label>
                    <input type="text" id="phone" className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all font-medium" placeholder="0700 000 000" />
                  </div>
                </div>
                <div>
                  <label htmlFor="service" className="block text-sm font-medium text-slate-300 mb-2">Serviciu Dorit</label>
                  <select id="service" className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-slate-300 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all appearance-none font-medium">
                    <option value="electric">Electrică Auto / Diagnoză</option>
                    <option value="general">Service General</option>
                    <option value="towing">Tractări Auto</option>
                    <option value="other">Altceva</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-slate-300 mb-2">Mesaj</label>
                  <textarea id="message" rows={4} className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all resize-none font-medium" placeholder="Detalii despre problema apărută..."></textarea>
                </div>
                <button type="button" onClick={() => alert("Acesta este un formular demonstrativ. Mesajul tău nu a fost trimis, deoarece site-ul este în teste.")} className="w-full bg-blue-600 hover:bg-blue-500 text-white font-bold py-4 rounded-xl transition-all shadow-lg shadow-blue-600/20 text-lg">
                  Trimite Cererea
                </button>
             </form>
          </div>

        </div>
      </div>
    </section>
  );
}
