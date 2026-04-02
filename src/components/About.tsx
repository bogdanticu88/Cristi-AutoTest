import { CheckCircle2 } from 'lucide-react';
import Image from 'next/image';
import { FadeIn } from '@/components/FadeIn';

const stats = [
  { label: "Clienți Mulțumiți", value: "1000+" },
  { label: "Mașini Reparate", value: "3500+" },
  { label: "Ani de Experiență", value: "15+" },
  { label: "Serviciu", value: "24/7" },
];

export default function About() {
  return (
    <section id="about" className="py-24 bg-slate-950 border-y border-slate-800 overflow-hidden relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          <div className="relative order-2 lg:order-1">
            <FadeIn delay={0.2} className="relative z-10 w-full rounded-3xl overflow-hidden aspect-square md:aspect-video lg:aspect-square bg-slate-900 border border-slate-800 shadow-2xl">
              <div className="absolute inset-0 bg-gradient-to-tr from-blue-900/40 to-transparent mix-blend-overlay z-10 pointer-events-none" />
              <Image 
                src="/team-about.jpeg" 
                alt="Echipă Cristi AutoTest" 
                fill 
                className="object-cover z-0 hover:scale-105 transition-transform duration-700"
              />
            </FadeIn>
            
            <FadeIn delay={0.4} className="absolute -bottom-8 -right-8 bg-blue-600 rounded-3xl p-8 text-white shadow-2xl z-20 max-w-[240px] hidden md:block">
              <p className="text-4xl font-extrabold mb-2">15+</p>
              <p className="text-blue-100 font-medium">Ani de excelență în serviciile auto din Târgu Neamț.</p>
            </FadeIn>
          </div>

          <div className="order-1 lg:order-2">
            <FadeIn>
              <h2 className="text-blue-500 font-bold tracking-wider uppercase text-sm mb-3">Despre Noi</h2>
              <h3 className="text-3xl md:text-5xl font-extrabold text-white mb-6 leading-tight">
                Pasiune Pentru Mașini, Respect Pentru Clienți
              </h3>
              
              <p className="text-slate-400 text-lg mb-8 leading-relaxed">
                La Cristi AutoTest, ne mândrim cu o abordare profesionistă a reparațiilor auto. Cu o echipă tehnică bine instruită și echipamente de ultimă generație, ne asigurăm că mașina ta primește cea mai bună atenție posibilă.
              </p>
              
              <ul className="space-y-4 mb-10">
                {[
                  'Diagnoză precisă din prima încercare', 
                  'Piese de schimb originale sau de calibru OEM', 
                  'Transparență totală asupra costurilor', 
                  'Garanție pentru lucrările efectuate'
                ].map((item, idx) => (
                  <li key={idx} className="flex items-center gap-3">
                    <CheckCircle2 className="w-6 h-6 text-blue-500 shrink-0" />
                    <span className="text-slate-300 font-medium">{item}</span>
                  </li>
                ))}
              </ul>
            </FadeIn>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 pt-8 border-t border-slate-800">
              {stats.map((stat, idx) => (
                <FadeIn key={idx} delay={idx * 0.1}>
                  <p className="text-3xl font-bold text-white mb-1">{stat.value}</p>
                  <p className="text-sm text-slate-500 font-medium">{stat.label}</p>
                </FadeIn>
              ))}
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
}
