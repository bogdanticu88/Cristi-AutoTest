import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, Wrench } from 'lucide-react';
import { FadeIn } from '@/components/FadeIn';

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center pt-20 pb-32 overflow-hidden">
      {/* Background Image and Overlays */}
      <div className="absolute inset-0 z-0">
         <Image src="/Cristi-AutoTest/hero.jpeg" alt="Cristi AutoTest Background" fill className="object-cover" priority />
         {/* Dark overlay ensuring text remains completely legible */}
         <div className="absolute inset-0 bg-slate-950/85 bg-gradient-to-tr from-slate-950 via-slate-900/80 to-slate-950/90 z-10" />
         <div className="absolute inset-0 opacity-20 z-10" 
              style={{ backgroundImage: `radial-gradient(#3b82f6 1px, transparent 1px)`, backgroundSize: '32px 32px' }} />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20 pt-12">
        <div className="max-w-3xl">
          <FadeIn delay={0.1}>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 text-blue-400 border border-blue-500/20 mb-8">
              <Wrench className="w-4 h-4" />
              <span className="text-sm font-medium tracking-wide">Servicii Auto Profesionale în Târgu Neamț</span>
            </div>
          </FadeIn>
          
          <FadeIn delay={0.2}>
            <h1 className="text-5xl md:text-7xl font-extrabold text-white mb-6 leading-tight tracking-tight">
              Performanță și <span className="text-blue-500">siguranță</span> pentru mașina ta.
            </h1>
          </FadeIn>
          
          <FadeIn delay={0.3}>
            <p className="text-xl text-slate-300 mb-10 max-w-2xl leading-relaxed">
              Oferim servicii complete de electrică auto, diagnoză, service general și intervenții rapide tip tractări auto, non-stop, 24/7.
            </p>
          </FadeIn>
          
          <FadeIn delay={0.4}>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="tel:+40758286536" className="inline-flex justify-center items-center gap-2 px-8 py-4 rounded-full bg-blue-600 hover:bg-blue-500 text-white font-semibold transition-all shadow-xl shadow-blue-900/20 hover:shadow-blue-900/40">
                Sună Pentru Programare
                <ArrowRight className="w-5 h-5" />
              </a>
              <Link href="#services" className="inline-flex justify-center items-center gap-2 px-8 py-4 rounded-full bg-slate-800 hover:bg-slate-700 border border-slate-700 hover:border-slate-600 text-white font-semibold transition-all">
                Vezi Serviciile
              </Link>
            </div>
          </FadeIn>
        </div>
      </div>
      
      {/* Decorative element */}
      <div className="absolute right-0 bottom-0 w-1/2 h-full bg-blue-600/10 blur-[150px] pointer-events-none rounded-tl-full" />
    </section>
  );
}
