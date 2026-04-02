"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X, Phone } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-slate-900/90 backdrop-blur-md border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">
          <div className="flex-shrink-0 flex items-center">
            <Link href="/" className="text-2xl font-bold text-blue-500 flex items-center gap-2">
              <span className="text-white">Cristi</span>AutoTest
            </Link>
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <Link href="#services" className="text-slate-300 hover:text-white transition-colors font-medium">Servicii</Link>
            <Link href="#about" className="text-slate-300 hover:text-white transition-colors font-medium">Despre Noi</Link>
            <Link href="#reviews" className="text-slate-300 hover:text-white transition-colors font-medium">Recenzii</Link>
            <Link href="#contact" className="text-slate-300 hover:text-white transition-colors font-medium">Contact</Link>
            <a href="tel:+40700000000" className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-5 py-2.5 rounded-full font-medium transition-all shadow-lg shadow-blue-600/20">
              <Phone className="w-4 h-4" />
              Sună Acum
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-slate-300 hover:text-white focus:outline-none"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden absolute w-full bg-slate-900 border-b border-slate-800 py-4 px-4 shadow-xl">
          <div className="flex flex-col space-y-4">
            <Link href="#services" onClick={() => setIsOpen(false)} className="text-slate-300 hover:text-white transition-colors">Servicii</Link>
            <Link href="#about" onClick={() => setIsOpen(false)} className="text-slate-300 hover:text-white transition-colors">Despre Noi</Link>
            <Link href="#reviews" onClick={() => setIsOpen(false)} className="text-slate-300 hover:text-white transition-colors">Recenzii</Link>
            <Link href="#contact" onClick={() => setIsOpen(false)} className="text-slate-300 hover:text-white transition-colors">Contact</Link>
            <a href="tel:+40700000000" className="flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-3 rounded-full font-medium mt-4">
              <Phone className="w-4 h-4" />
              Sună Acum
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
