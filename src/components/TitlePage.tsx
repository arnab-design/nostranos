import logoImage from '@/assets/52cce948fd81271b938df7f4433f2c3af4c2725c.png';
import marbleBackground from '@/assets/marble-background.png';

export function TitlePage() {
  return (
    <div className="w-full h-full relative overflow-hidden">
      {/* Marble Background */}
      <div 
        className="absolute inset-0"
        style={{
          backgroundImage: `url(${marbleBackground})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          zIndex: 0
        }}
      />

      {/* Content */}
      <div className="relative z-10 w-full h-full flex flex-col items-center justify-center px-16 pt-12 pb-20">
        {/* Logo */}
        <div className="mb-12" style={{ 
          background: 'white',
          mixBlendMode: 'multiply',
          display: 'inline-block'
        }}>
          <img 
            src={logoImage} 
            alt="Nostrano - Culinary Redefined" 
            className="w-96 h-auto"
            style={{ 
              display: 'block'
            }}
          />
        </div>

        {/* Decorative Line */}
        <div className="w-32 h-px bg-black/30 mb-10" />

        {/* Headline */}
        <h1 className="text-center mb-8" style={{ fontFamily: 'serif', fontSize: '3rem', letterSpacing: '0.15em' }}>
          ARTISANAL TABLE SPREAD
        </h1>

        {/* Subtitle */}
        <h2 className="text-center mb-10" style={{ fontSize: '1.25rem', letterSpacing: '0.05em', fontStyle: 'italic' }}>
          Curated with Intention, Composed with Desire.
        </h2>

        {/* Description */}
        <div className="max-w-3xl text-center" style={{ fontSize: '0.95rem', lineHeight: '1.8' }}>
          <p className="text-black/70">
            At Nostrano each table becomes a curated composition—where culinary artistry meets sculptural design. Our spreads are meticulously arranged on sleek acrylic plinths and adorned with bespoke florals and textures, creating a dialogue between flavour, form, and finesse. Designed for the discerning palate, every presentation embodies seasonality, elegance, and restraint. With our signature balance of craft and aesthetic precision, we transform gatherings into immersive experiences—tables that do not merely feed, but captivate.
          </p>
        </div>

        {/* Decorative Line */}
        <div className="w-32 h-px bg-black/30 mt-10" />
      </div>
    </div>
  );
}