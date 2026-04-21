import { CheckCircle2, XCircle } from 'lucide-react';
import bgImage from '@/assets/section-methodology.jpg';
import ZigzagSection from './ZigzagSection';

const Differentiation = () => {
  return (
    <ZigzagSection
      id="differentiation"
      title="WWP vs. les cabinets classiques"
      subtitle="Ce qui distingue fondamentalement notre approche de celle des cabinets traditionnels :"
      illustration={bgImage}
      reverse={false}
      bgColor="background"
    >
      {/* We overlay the two columns as content */}
      <div className="grid md:grid-cols-2 gap-6 relative z-10 w-full overflow-hidden max-w-full">
        {/* Classique Column */}
        <div className="bg-secondary p-6 rounded-xl border border-border/50">
          <h3 className="heading-sm text-foreground mb-4 text-center">Cabinets classiques</h3>
          <ul className="space-y-4">
            <li className="flex gap-3">
              <span className="text-red-500 mt-1 flex-shrink-0"><XCircle className="w-5 h-5" /></span>
              <p className="body-sm text-muted-foreground break-words">Process longs de 4 à 8 semaines</p>
            </li>
            <li className="flex gap-3">
              <span className="text-red-500 mt-1 flex-shrink-0"><XCircle className="w-5 h-5" /></span>
              <p className="body-sm text-muted-foreground break-words">Tri fastidieux de nombreux CV</p>
            </li>
            <li className="flex gap-3">
              <span className="text-red-500 mt-1 flex-shrink-0"><XCircle className="w-5 h-5" /></span>
              <p className="body-sm text-muted-foreground break-words">Peu adaptés aux secteurs en tension</p>
            </li>
            <li className="flex gap-3">
              <span className="text-red-500 mt-1 flex-shrink-0"><XCircle className="w-5 h-5" /></span>
              <p className="body-sm text-muted-foreground break-words">Approche standardisée</p>
            </li>
            <li className="flex gap-3">
              <span className="text-red-500 mt-1 flex-shrink-0"><XCircle className="w-5 h-5" /></span>
              <p className="body-sm text-muted-foreground break-words">Facturation même sans résultat</p>
            </li>
          </ul>
        </div>

        {/* WWP Column */}
        <div className="bg-primary text-primary-foreground p-6 rounded-xl shadow-lg relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full blur-2xl -mr-10 -mt-10" />
          <h3 className="heading-sm text-white mb-4 text-center relative z-10">WWP — Recruitment Express</h3>
          <ul className="space-y-4 relative z-10">
            <li className="flex gap-3">
              <span className="text-white mt-1 flex-shrink-0"><CheckCircle2 className="w-5 h-5" /></span>
              <p className="body-sm text-white/90 break-words">Délais courts : 1 à 2 semaines garantis</p>
            </li>
            <li className="flex gap-3">
              <span className="text-white mt-1 flex-shrink-0"><CheckCircle2 className="w-5 h-5" /></span>
              <p className="body-sm text-white/90 break-words">Candidats déjà qualifiés et évalués</p>
            </li>
            <li className="flex gap-3">
              <span className="text-white mt-1 flex-shrink-0"><CheckCircle2 className="w-5 h-5" /></span>
              <p className="body-sm text-white/90 break-words">Spécialisation énergie, retail, logistique</p>
            </li>
            <li className="flex gap-3">
              <span className="text-white mt-1 flex-shrink-0"><CheckCircle2 className="w-5 h-5" /></span>
              <p className="body-sm text-white/90 break-words">Méthode structurée + compréhension des métiers</p>
            </li>
            <li className="flex gap-3">
              <span className="text-white mt-1 flex-shrink-0"><CheckCircle2 className="w-5 h-5" /></span>
              <p className="body-sm text-white/90 break-words">Paiement au succès uniquement</p>
            </li>
          </ul>
        </div>
      </div>
    </ZigzagSection>
  );
};

export default Differentiation;