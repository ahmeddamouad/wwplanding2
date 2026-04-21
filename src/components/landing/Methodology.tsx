import { CheckCircle2 } from 'lucide-react';
import ZigzagSection from './ZigzagSection';
import methodologyImage from '@/assets/section-methodology.jpg';

const Methodology = () => {
  const steps = [
    {
      title: 'Shortlist qualifiée dans les délais annoncés',
      description: 'Uniquement des candidats correspondant précisément au profil recherché, livrés dans le délai convenu.'
    },
    {
      title: 'Candidats préqualifiés & évalués',
      description: 'Chaque profil a été sélectionné, interviewé et évalué par nos consultants avant transmission.'
    },
    {
      title: 'Compte rendu d\'entretien structuré',
      description: 'Un document complet pour vous aider à prendre votre décision rapidement et en toute confiance.'
    },
    {
      title: 'Prise de références & accompagnement',
      description: 'Vérification des références si nécessaire, et suivi jusqu\'à l\'intégration réussie du candidat'
    }
  ];

  return (
    <ZigzagSection
      id="engagement-qualite"
      title="Ce que WWP s'engage à délivrer"
      subtitle="Chaque mission est portée par une exigence de qualité et de transparence. Voici ce que vous recevez à chaque recrutement :"
      illustration={methodologyImage}
      reverse={false}
      bgColor="background"
    >
      <ul className="space-y-6">
        {steps.map((step, index) => (
          <li key={index} className="flex gap-4">
            <div className="flex-shrink-0 mt-1">
              <CheckCircle2 className="w-6 h-6 text-primary" />
            </div>
            <div>
              <h3 className="heading-sm text-foreground mb-1">{step.title}</h3>
              <p className="body-sm text-muted-foreground">{step.description}</p>
            </div>
          </li>
        ))}
      </ul>
    </ZigzagSection>
  );
};

export default Methodology;
