import { BatteryCharging, Wrench, Truck } from 'lucide-react';
import Image from 'next/image';
import { TiltCard } from '@/components/TiltCard';
import { FadeIn } from '@/components/FadeIn';

const services = [
  {
    title: "Electrică Auto & Diagnoză",
    description: "Diagnoză computerizată, reparații alternatoare, electromotoare, senzori și sisteme electrice complete.",
    icon: BatteryCharging,
    image: "/electrical-service.jpeg",
    color: "text-blue-500",
    bg: "bg-blue-500/80",
    border: "border-blue-500/20"
  },
  {
    title: "Service General",
    description: "Revizii tehnice, schimb de ulei și filtre, sistem de frânare, distribuție și mecanică avansată pentru mașina ta.",
    icon: Wrench,
    image: "/general-service.jpeg",
    color: "text-indigo-400",
    bg: "bg-indigo-500/80",
    border: "border-indigo-500/20"
  },
  {
    title: "Tractări Auto 24/7",
    description: "Serviciu de asistență rutieră și tractări non-stop. Intervenim rapid în Târgu Neamț și împrejurimi.",
    icon: Truck,
    image: "/tow-service.jpeg",
    color: "text-rose-400",
    bg: "bg-rose-500/80",
    border: "border-rose-500/20"
  }
];

export default function Services() {
  return (
    <section id="services" className="py-24 bg-slate-900 border-t border-slate-800 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <FadeIn>
            <h2 className="text-blue-500 font-bold tracking-wider uppercase text-sm mb-3">Expertiza Noastră</h2>
            <h3 className="text-3xl md:text-5xl font-extrabold text-white mb-6">Servicii De Top Pentru Auto</h3>
            <p className="text-slate-400 text-lg">
              Suntem specializați în rezolvarea rapidă și eficientă a oricărei probleme auto, folosind echipamente moderne de diagnoză și scule profesionale.
            </p>
          </FadeIn>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <FadeIn key={index} delay={index * 0.2}>
                <TiltCard className="h-full">
                  <div className="group relative bg-slate-950 border border-slate-800 rounded-3xl overflow-hidden transition-all hover:shadow-[0_8px_30px_rgb(0,0,0,0.6)] flex flex-col h-full transform-gpu">
                    <div className="relative h-56 w-full pointer-events-none">
                      <Image src={service.image} alt={service.title} fill className="object-cover" />
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent"></div>
                      
                      {/* Floating Icon */}
                      <div className="absolute bottom-4 left-6 w-12 h-12 rounded-xl bg-slate-900 border border-slate-700 flex items-center justify-center shadow-lg transform translate-z-12">
                        <Icon className={`w-6 h-6 ${service.color}`} />
                      </div>
                    </div>
                    
                    <div className="p-8 flex flex-col flex-grow transform translate-z-8 border-t border-slate-800">
                       <h4 className="text-xl font-bold text-white mb-3">{service.title}</h4>
                       <p className="text-slate-400 leading-relaxed mb-6 flex-grow">
                         {service.description}
                       </p>
                       
                       <a href="#contact" className={`inline-flex items-center gap-2 font-semibold ${service.color} opacity-80 hover:opacity-100 transition-opacity`}>
                         Programează <span aria-hidden="true" className="group-hover:translate-x-1 transition-transform">&rarr;</span>
                       </a>
                    </div>
                  </div>
                </TiltCard>
              </FadeIn>
            );
          })}
        </div>
      </div>
    </section>
  );
}
