import { ArrowRight, CheckCircle2 } from 'lucide-react';
import { ShimmerButton } from '@/components/ui/shimmer-button';
import finalbgImage from '@/assets/section-finalcta.jpg';

const FinalCTA = () => {
  const scrollToForm = () => {
    const formSection = document.getElementById('contact-form');
    formSection?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <section className="relative py-20 md:py-32 overflow-hidden bg-primary w-full">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src={finalbgImage} 
          alt="Recrutement accéléré avec WWP" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-primary/90" />
      </div>

      <div className="container-custom relative z-10 w-full">
        <div className="max-w-4xl mx-auto text-center space-y-8 text-primary-foreground">
          
          <h2 className="heading-xl text-white break-words">
            WWP ne vend pas du recrutement.
            <br />
            WWP vous aide à recruter mieux, plus vite.
          </h2>
          
          <p className="body-lg text-primary-foreground/90 max-w-2xl mx-auto break-words">
            Rejoignez les PME françaises qui font confiance à WWP pour trouver les profils qui font vraiment la différence — dans le retail, la logistique, les startups et les énergies renouvelables.
          </p>
          
          <div className="grid md:grid-cols-3 gap-6 text-left my-10 max-w-5xl mx-auto w-full">
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl border border-white/20">
              <div className="flex items-center gap-3 mb-2">
                <CheckCircle2 className="text-white w-5 h-5 flex-shrink-0" />
                <h3 className="font-bold text-white text-lg">Réactivité</h3>
              </div>
              <p className="text-primary-foreground/90 text-sm">
                Shortlist en 1 à 2 semaines, profils prêts à rencontrer votre équipe.
              </p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl border border-white/20">
              <div className="flex items-center gap-3 mb-2">
                <CheckCircle2 className="text-white w-5 h-5 flex-shrink-0" />
                <h3 className="font-bold text-white text-lg">Qualité</h3>
              </div>
              <p className="text-primary-foreground/90 text-sm">
                Candidats évalués, référencés, accompagnés jusqu&apos;à l&apos;intégration.
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl border border-white/20">
              <div className="flex items-center gap-3 mb-2">
                <CheckCircle2 className="text-white w-5 h-5 flex-shrink-0" />
                <h3 className="font-bold text-white text-lg">Zéro risque</h3>
              </div>
              <p className="text-primary-foreground/90 text-sm">
                Paiement au succès, garantie 3 mois, offre de lancement avantageuse.
              </p>
            </div>
          </div>
          
          <div className="flex flex-col items-center gap-4 pt-4">
            <p className="body-lg text-white">Prêt à accélérer votre recrutement ?</p>
            <ShimmerButton
              onClick={scrollToForm}
              background="#ffffff"
              shimmerColor="rgba(0,0,0,0.1)"
              className="text-primary font-bold text-lg px-8 py-4 flex items-center gap-2 hover:scale-105 transition-transform max-w-max"
            >
              Échangeons
              <ArrowRight className="w-5 h-5 ml-2" />
            </ShimmerButton>
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;
