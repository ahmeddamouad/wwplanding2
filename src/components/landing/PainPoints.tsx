import ZigzagSection from './ZigzagSection';
import painpointsImage from '@/assets/section-painpoints.jpg';

const PainPoints = () => {
  return (
    <ZigzagSection
      id="un-cabinet-taille"
      title="Un cabinet taillé pour les entreprises françaises en mouvement"
      illustration={painpointsImage}
      reverse={true}
      bgColor="secondary"
    >
      <div className="space-y-6">
        <p className="body-lg text-muted-foreground">
          WWP se positionne comme le partenaire de recrutement de référence pour les PME françaises
          qui ont besoin d&apos;aller vite sans sacrifier la qualité. Notre spécialisation dans les
          profils opérationnels nous permet de comprendre les réalités terrain, les contraintes
          métiers et les urgences des directions RH.
        </p>
        <p className="body-lg text-muted-foreground">
          Nous ne sommes pas un cabinet généraliste. Nous sommes un accélérateur de recrutement,
          conçu pour des secteurs dynamiques et exigeants.
        </p>

        <div className="bg-background border border-border p-6 rounded-xl shadow-sm mt-8">
          <h3 className="heading-md text-foreground mb-3 border-l-4 border-primary pl-3">Notre mission</h3>
          <p className="body-md text-muted-foreground">
            Permettre à chaque entreprise française de recruter rapidement des profils qualifiés,
            sans perte de temps ni surcharge des équipes internes
          </p>
        </div>
      </div>
    </ZigzagSection>
  );
};

export default PainPoints;