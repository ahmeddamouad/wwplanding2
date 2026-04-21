import ZigzagSection from './ZigzagSection';
import pricingImage from '@/assets/section-pricing.jpg';
import { Check } from 'lucide-react';

const PricingLogic = () => {
  return (
    <ZigzagSection
      id="investissement"
      title="Un investissement clair, sans risque financier"
      illustration={pricingImage}
      reverse={true}
      bgColor="secondary"
    >
      <div className="space-y-8">
        <div className="bg-background border border-border p-6 rounded-xl shadow-sm">
          <h3 className="heading-md text-foreground mb-4">Structure tarifaire</h3>
          <ul className="space-y-3">
            <li className="flex items-center gap-3 text-muted-foreground body-md">
              <Check className="w-5 h-5 text-primary flex-shrink-0" />
              <span>12% à 15% du salaire brut annuel</span>
            </li>
            <li className="flex items-center gap-3 text-muted-foreground body-md">
              <Check className="w-5 h-5 text-primary flex-shrink-0" />
              <span>Paiement au succès uniquement</span>
            </li>
            <li className="flex items-center gap-3 text-muted-foreground body-md">
              <Check className="w-5 h-5 text-primary flex-shrink-0" />
              <span>Garantie de remplacement : 3 mois</span>
            </li>
            <li className="flex items-center gap-3 text-muted-foreground body-md font-medium text-foreground">
              <Check className="w-5 h-5 text-primary flex-shrink-0" />
              <span>Sans succès = aucune facturation</span>
            </li>
          </ul>
        </div>
        
        <div className="bg-accent/10 border-l-4 border-accent p-5 rounded-r-xl">
          <h4 className="heading-sm text-foreground mb-2">Offre de lancement</h4>
          <p className="body-sm text-muted-foreground">
            Pour les nouveaux partenaires, WWP propose un tarif préférentiel sur le 1er recrutement.
            Une occasion de tester notre méthode, notre réactivité et la qualité de nos profils —
            sans engagement financier en cas d&apos;échec.
          </p>
        </div>

        <div className="bg-primary text-primary-foreground p-4 rounded-xl font-semibold text-center mt-6">
          Zéro risque financier. Vous ne payez que si vous embauchez
        </div>
      </div>
    </ZigzagSection>
  );
};

export default PricingLogic;
