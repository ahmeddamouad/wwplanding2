import { ReactNode } from 'react';

interface ZigzagSectionProps {
  id?: string;
  title: string;
  subtitle?: string;
  children: ReactNode;
  illustration: ReactNode | string;
  reverse?: boolean;
  bgColor?: 'background' | 'secondary';
}

const ZigzagSection = ({
  id,
  title,
  subtitle,
  children,
  illustration,
  reverse = false,
  bgColor = 'background',
}: ZigzagSectionProps) => {
  return (
    <section
      id={id}
      className={`section-padding ${bgColor === 'secondary' ? 'bg-secondary' : 'bg-background'}`}
    >
      <div className="container-custom">
        <div className={`grid lg:grid-cols-2 gap-8 lg:gap-12 xl:gap-16 items-center ${reverse ? 'lg:flex-row-reverse' : ''}`}>
          {/* Text Content */}
          <div className={`space-y-6 ${reverse ? 'lg:order-2' : 'lg:order-1'}`}>
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold leading-tight text-foreground">
              {title}
            </h2>
            {subtitle && (
              <p className="text-base sm:text-lg text-muted-foreground">
                {subtitle}
              </p>
            )}
            <div className="space-y-4">
              {children}
            </div>
          </div>

          {/* Illustration */}
          <div className={`relative ${reverse ? 'lg:order-1' : 'lg:order-2'}`}>
            {typeof illustration === 'string' ? (
              <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                <img
                  src={illustration}
                  alt={title}
                  className="w-full h-auto object-cover"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
              </div>
            ) : (
              illustration
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ZigzagSection;
