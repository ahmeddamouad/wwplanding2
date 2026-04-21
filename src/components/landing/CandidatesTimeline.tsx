import ZigzagSection from './ZigzagSection';
import testimonialsImage from '@/assets/section-testimonials.jpg';

const CandidatesTimeline = () => {
  return (
    <ZigzagSection
      id="candidats-qualifies"
      title="Des candidats qualifiés en 1 à 2 semaines"
      subtitle="Parce que chaque jour sans le bon profil est un jour de productivité perdu, WWP s'est structuré pour délivrer des shortlists rapides et pertinentes."
      illustration={testimonialsImage}
      reverse={false}
      bgColor="background"
    >
      <div className="grid gap-6 mt-4">
        <div className="bg-secondary p-6 rounded-xl border border-border/50 relative overflow-hidden card-hover">
          <div className="absolute top-0 left-0 w-2 h-full bg-primary" />
          <h3 className="heading-md text-foreground mb-2">Moins d&apos;1 semaine</h3>
          <p className="body-md text-muted-foreground">
            Profils opérationnels simples : commerciaux terrain, vendeurs, profils administratifs juniors. Shortlist qualifiée délivrée en un temps record.
          </p>
        </div>

        <div className="bg-secondary p-6 rounded-xl border border-border/50 relative overflow-hidden card-hover">
          <div className="absolute top-0 left-0 w-2 h-full bg-accent" />
          <h3 className="heading-md text-foreground mb-2">1 à 2 semaines</h3>
          <p className="body-md text-muted-foreground">
            Profils standards et techniques : store managers, chargés d&apos;affaires, technico-commerciaux énergie, chefs de projet travaux
          </p>
        </div>
      </div>
    </ZigzagSection>
  );
};

export default CandidatesTimeline;