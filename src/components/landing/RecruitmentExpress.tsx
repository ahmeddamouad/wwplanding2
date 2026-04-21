import ZigzagSection from './ZigzagSection';
import bgImage from '@/assets/section-differentiation.jpg';

const RecruitmentExpress = () => {
  return (
    <ZigzagSection
      id="recruitment-express"
      title="Recruitment Express France"
      subtitle="Une offre conçue spécifiquement pour les PME françaises dans les secteurs à forte dynamique de recrutement."
      illustration={bgImage}
      reverse={true}
      bgColor="secondary"
    >
      <div className="space-y-6">
        <div>
          <h3 className="text-xl font-bold text-foreground mb-4">Secteurs ciblés</h3>
          <div className="grid sm:grid-cols-2 gap-4">
            <div className="bg-background border border-border p-4 rounded-lg shadow-sm">
              <h4 className="font-semibold text-primary mb-1">Retail &amp; Distribution</h4>
              <p className="text-sm text-muted-foreground">Réseau de points de vente, gestion d&apos;équipes commerciales terrain.</p>
            </div>
            <div className="bg-background border border-border p-4 rounded-lg shadow-sm">
              <h4 className="font-semibold text-primary mb-1">Énergies renouvelables</h4>
              <p className="text-sm text-muted-foreground">Solaire, éolien, efficacité énergétique — secteur en forte tension.</p>
            </div>
            <div className="bg-background border border-border p-4 rounded-lg shadow-sm">
              <h4 className="font-semibold text-primary mb-1">Logistique &amp; Supply Chain</h4>
              <p className="text-sm text-muted-foreground">Exploitation, gestion des flux, coordination opérationnelle.</p>
            </div>
            <div className="bg-background border border-border p-4 rounded-lg shadow-sm">
              <h4 className="font-semibold text-primary mb-1">Startups en croissance</h4>
              <p className="text-sm text-muted-foreground">Recrutements agiles pour des structures qui s&apos;accélèrent vite.</p>
            </div>
          </div>
        </div>

        <div>
          <h3 className="text-xl font-bold text-foreground mb-4">Postes ciblés</h3>
          <ul className="grid sm:grid-cols-2 gap-2 text-sm text-foreground bg-primary/5 p-4 rounded-xl">
            <li className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 bg-primary flex-shrink-0 rounded-full" /> Commerciaux B2B / terrain
            </li>
            <li className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 bg-primary flex-shrink-0 rounded-full" /> Store managers &amp; vendeurs
            </li>
            <li className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 bg-primary flex-shrink-0 rounded-full" /> Profils RH juniors &amp; administratifs
            </li>
            <li className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 bg-primary flex-shrink-0 rounded-full" /> Logistique &amp; exploitation
            </li>
            <li className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 bg-primary flex-shrink-0 rounded-full" /> Technico-commerciaux énergie
            </li>
            <li className="flex items-start gap-2">
              <span className="w-1.5 h-1.5 bg-primary flex-shrink-0 rounded-full mt-1.5" /> 
              <span>Chefs de projet énergie / travaux<br/>Chargés d&apos;affaires (photovoltaïque, CVC, etc.)</span>
            </li>
          </ul>
        </div>
      </div>
    </ZigzagSection>
  );
};

export default RecruitmentExpress;