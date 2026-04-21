import Header from '@/components/landing/Header';
import Hero from '@/components/landing/Hero';
import PainPoints from '@/components/landing/PainPoints';
import CandidatesTimeline from '@/components/landing/CandidatesTimeline';
import RecruitmentExpress from '@/components/landing/RecruitmentExpress';
import Methodology from '@/components/landing/Methodology';
import PricingLogic from '@/components/landing/PricingLogic';
import Differentiation from '@/components/landing/Differentiation';
import FinalCTA from '@/components/landing/FinalCTA';
import TrustedCompanies from '@/components/landing/TrustedCompanies';
import ContactFormSection from '@/components/landing/ContactFormSection';
import Footer from '@/components/landing/Footer';
import { ContactFormProvider } from '@/contexts/ContactFormContext';

const Index = () => {
  return (
    <ContactFormProvider>
      <div className="min-h-screen overflow-x-hidden">
        <Header />
        <main className="overflow-x-hidden">
          <Hero />
        <PainPoints />
        <CandidatesTimeline />
        <RecruitmentExpress />
        <Methodology />
        <PricingLogic />
        <Differentiation />
        <FinalCTA />
        <TrustedCompanies />
        <ContactFormSection />
        </main>
        <Footer />
      </div>
    </ContactFormProvider>
  );
};

export default Index;
