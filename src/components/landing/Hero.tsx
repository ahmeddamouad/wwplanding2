import { ArrowRight, Clock, Shield, Users } from 'lucide-react';
import { ShimmerButton } from '@/components/ui/shimmer-button';
import heroImage from '@/assets/section-hero.jpg';
import { useContactForm } from '@/contexts/ContactFormContext';

const Hero = () => {
  const { openContactForm } = useContactForm();

  return (
    <section className="relative lg:min-h-screen flex items-start lg:items-center bg-gradient-to-br from-secondary via-background to-primary/5 pt-20 md:pt-32 pb-12 md:pb-16 w-full overflow-hidden">
      <div className="container-custom w-full">
        <div className="grid lg:grid-cols-2 gap-6 lg:gap-12 xl:gap-16 items-center w-full">
          <div className="space-y-6 sm:space-y-8 animate-slide-up w-full max-w-full order-2 lg:order-1">
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight text-foreground break-words">
              Recrutez vite, recrutez bien <span className="text-primary">— avec WWP</span>
            </h1>

            <p className="body-lg text-muted-foreground w-full max-w-full">
              Cabinet de recrutement francophone spécialisé dans les profils opérationnels en France.
              Nous permettons aux PME françaises de recruter des candidats qualifiés en 1 à 2 semaines,
              sans surcharge interne ni perte de temps.
            </p>

            <div className="text-sm font-medium text-foreground bg-primary/10 rounded-md p-3">
              Retail · Logistique · Startups en croissance · Énergies renouvelables
            </div>

            <ShimmerButton
              onClick={openContactForm}
              background="linear-gradient(135deg, hsl(172, 70%, 39%) 0%, hsl(180, 60%, 45%) 100%)"
              shimmerColor="#ffffff"
              className="w-full sm:w-auto text-base font-semibold flex items-center justify-center gap-2 max-w-max px-6 py-2.5"
            >
              Échangeons
              <ArrowRight className="w-5 h-5" />
            </ShimmerButton>
          </div>

          <div className="relative animate-fade-in delay-200 order-1 lg:order-2">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
              <img 
                src={heroImage} 
                alt="Recrutez vite, recrutez bien" 
                className="w-full h-auto object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
