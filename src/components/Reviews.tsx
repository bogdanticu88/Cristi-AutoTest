import { Star } from 'lucide-react';
import { FadeIn } from '@/components/FadeIn';
import { TiltCard } from '@/components/TiltCard';

const reviews = [
  {
    name: "Marius Dumi",
    role: "Via Google Reviews",
    content: "Servicii impecabile și promptitudine maximă! Am apreciat atitudinea prietenoasă și explicațiile clare oferite pe parcurs. Se vede experiența și pasiunea pentru ceea ce face. Raport calitate-preț excelent!",
    rating: 5
  },
  {
    name: "Adrian Festila",
    role: "Via Google Reviews",
    content: "Un service foarte profesionist și excelent cu o echipă extraordinară și care lucrează extrem de bine. Oferă explicații foarte clare ca să înțelegi și tu ce poate avea mașina ta.",
    rating: 5
  },
  {
    name: "Bianca Luca",
    role: "Via Google Reviews",
    content: "Oameni extraordinari care-și dau interesul pentru binele clientului si al mașinii, o echipă tânără și plină de viață! Recomand cu încredere!",
    rating: 5
  }
];

export default function Reviews() {
  return (
    <section id="reviews" className="py-24 bg-slate-900 border-t border-slate-800 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <FadeIn>
            <h2 className="text-blue-500 font-bold tracking-wider uppercase text-sm mb-3">Recenzii</h2>
            <h3 className="text-3xl md:text-5xl font-extrabold text-white mb-6">Ce Spun Clienții Noștri</h3>
            <p className="text-slate-400 text-lg mb-8">
              Satisfacția clienților este prioritatea noastră numărul unu. Ne mândrim cu o reputație construită pe încredere și profesionalism.
            </p>
            <a href="https://www.google.com/search?q=Cristi+AutoTest+Reviews&si=AL3DRZEsmMGCryMMFSHJ3StBhOdZ2-6yYkXd_doETEE1OR-qOaAgU92scI3DtIJvXrNxQNJ-iRJ-cP5FY6ZkENRXyZqBY-4LVcQzDma3VLqRFtRCTuHngm_d1Lbuzsu1MNg1i1ZPupx2" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-slate-800 hover:bg-slate-700 text-white font-medium transition-colors border border-slate-700 shadow-xl">
              Vezi toate recenziile pe Google
            </a>
          </FadeIn>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((review, idx) => (
            <FadeIn key={idx} delay={idx * 0.2}>
              <TiltCard className="h-full">
                <div className="bg-slate-950 p-8 rounded-3xl border border-slate-800 flex flex-col h-full transform-gpu shadow-xl">
                  <div className="flex gap-1 mb-6 translate-z-8 transform">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-blue-500 text-blue-500" />
                    ))}
                  </div>
                  <p className="text-slate-300 mb-8 italic leading-relaxed transform translate-z-12 flex-grow">&quot;{review.content}&quot;</p>
                  <div className="transform translate-z-16">
                    <p className="text-white font-bold text-lg">{review.name}</p>
                    <p className="text-slate-500 text-sm font-medium">{review.role}</p>
                  </div>
                </div>
              </TiltCard>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
