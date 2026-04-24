import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ShimmerButton } from '@/components/ui/shimmer-button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { useToast } from '@/hooks/use-toast';
import { sendContactEmail, EmailServiceError } from '@/lib/emailService';
import { trackLead } from '@/lib/metaPixel';

const ContactFormSection = () => {
  const { toast } = useToast();
  const navigate = useNavigate();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    company: '',
    phone: '',
    message: '',
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      await sendContactEmail(formData);

      // Track lead conversion with Meta Pixel
      trackLead();

      // Redirect to thank you page
      navigate('/merci');
    } catch (error) {
      console.error('Form submission error:', error);
      
      let errorDescription = 'Une erreur inattendue s\'est produite. Veuillez réessayer.';
      
      if (error instanceof EmailServiceError) {
        if (error.type === 'CONFIG_MISSING') {
          errorDescription = 'Le service de messagerie n\'est pas correctement configuré.';
        } else if (error.type === 'NETWORK_ERROR') {
          errorDescription = 'Problème de connexion. Veuillez vérifier votre connexion et réessayer.';
        } else if (error.type === 'PROVIDER_REJECTED') {
          if (error.message.toLowerCase().includes('activation')) {
            errorDescription = 'Formulaire en cours d\'activation. Vérifiez votre e-mail et cliquez sur le lien d\'activation, puis réessayez.';
          } else {
            errorDescription = 'Impossible d\'envoyer le message. Veuillez vérifier les informations et réessayer.';
          }
        }
      }
      
      toast({
        title: 'Erreur d\'envoi',
        description: errorDescription,
        variant: 'destructive',
        duration: 5000,
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact-form" className="py-16 sm:py-24 bg-gradient-to-b from-white to-primary/5">
      <div className="container-custom">
        <div className="max-w-3xl mx-auto">
          <div className="bg-white rounded-2xl shadow-xl p-6 sm:p-8 border border-secondary/10">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="fullName" className="text-foreground font-medium">
                    Nom complet<span className="text-destructive">*</span>
                  </Label>
                  <Input
                    id="fullName"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleChange}
                    required
                    placeholder="Votre nom complet"
                    className="bg-background border-border"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email" className="text-foreground font-medium">
                    Adresse e-mail<span className="text-destructive">*</span>
                  </Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="votre@email.com"
                    className="bg-background border-border"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="company" className="text-foreground font-medium">
                    Entreprise
                  </Label>
                  <Input
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    placeholder="Nom de votre entreprise"
                    className="bg-background border-border"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="phone" className="text-foreground font-medium">
                    Téléphone<span className="text-destructive">*</span>
                  </Label>
                  <Input
                    id="phone"
                    name="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    placeholder="+212 600 000 000"
                    className="bg-background border-border"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="message" className="text-foreground font-medium">
                  Décrivez votre besoin en recrutement<span className="text-destructive">*</span>
                </Label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  placeholder="Ex: Recherche d'un responsable commercial pour la région de Casablanca..."
                  className="bg-background border-border min-h-[120px]"
                />
              </div>

              <ShimmerButton
                type="submit"
                background="linear-gradient(135deg, hsl(172, 70%, 39%) 0%, hsl(180, 60%, 45%) 100%)"
                shimmerColor="#ffffff"
                className="w-full text-base font-semibold"
                disabled={isSubmitting}
              >
                {isSubmitting ? 'Envoi en cours...' : 'Recevoir des profils qualifiés'}
              </ShimmerButton>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactFormSection;
