import Link from "next/link";
import { MapPin, Phone, Clock } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-slate-950 border-t border-slate-800 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div className="col-span-1 md:col-span-2">
            <Link href="/" className="text-2xl font-bold text-blue-500 flex items-center gap-2 mb-4">
              <span className="text-white">Cristi</span>AutoTest
            </Link>
            <p className="text-slate-400 mb-6 max-w-md">
              Servicii profesionale de electrică auto, mecanică generală și tractări non-stop în Târgu Neamț, România.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center text-slate-400 hover:bg-blue-600 hover:text-white transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
              </a>
              <a href="https://maps.google.com" target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center text-slate-400 hover:bg-blue-600 hover:text-white transition-colors">
                <MapPin className="w-5 h-5" />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-white font-semibold mb-4">Contact</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3 text-slate-400">
                <MapPin className="w-5 h-5 text-blue-500 shrink-0 mt-0.5" />
                <span>Bulevardul Ștefan cel Mare 190, 615200 Târgu Neamț</span>
              </li>
              <li className="flex items-start gap-3 text-slate-400">
                <Phone className="w-5 h-5 text-blue-500 shrink-0 mt-0.5" />
                <span>+40 700 000 000</span>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-white font-semibold mb-4">Program</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3 text-slate-400">
                <Clock className="w-5 h-5 text-blue-500 shrink-0 mt-0.5" />
                <div className="text-sm">
                  <p>Luni - Miercuri: 09:00 - 22:00</p>
                  <p>Joi - Vineri: 09:00 - 22:30</p>
                  <p>Sâmbătă: 09:00 - 19:00</p>
                  <p>Duminică: 09:00 - 22:00</p>
                </div>
              </li>
              <li className="flex items-start gap-3 text-slate-400">
                <Phone className="w-5 h-5 text-red-500 shrink-0 mt-0.5" />
                <span className="text-red-400 font-medium tracking-wide">Tractări: 24/7 Disponibil</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-slate-500 text-sm">
            © 2026 Cristi AutoTest. Toate drepturile rezervate.
          </p>
          <div className="flex gap-4 text-sm text-slate-500">
            <Link href="#" className="hover:text-white transition-colors">Termeni și Condiții</Link>
            <Link href="#" className="hover:text-white transition-colors">Politică de Confidențialitate</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
