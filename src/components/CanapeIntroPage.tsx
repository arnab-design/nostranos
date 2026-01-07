import logoImage from '@/assets/52cce948fd81271b938df7f4433f2c3af4c2725c.png';
import { ImageWithFallback } from './shared/ImageWithFallback';

export function CanapeIntroPage() {
  return (
    <div className="w-full h-full relative overflow-hidden bg-white">
      {/* Content - using same horizontal padding throughout */}
      <div className="w-full h-full flex flex-col" style={{ padding: '32px 32px 24px 32px' }}>
        {/* Hero Image - takes about 55% of page */}
        <div style={{ height: '55%', marginBottom: '24px' }}>
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1626200419199-391ae4be7a41?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMjA3fDB8MXxzZWFyY2h8MXx8Y2FuYXBlJTIwYXBwZXRpemVyfGVufDB8fHx8MTcwMDAwMDAwMHww&ixlib=rb-4.1.0&q=80&w=1200"
            alt="Elegant Canapé Presentation"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Lower Content Section */}
        <div className="flex-1 flex flex-col items-center">
          {/* Logo */}
          <div style={{
            background: 'white',
            mixBlendMode: 'multiply',
            display: 'inline-block',
            marginBottom: '16px'
          }}>
            <img
              src={logoImage}
              alt="Nostrano"
              style={{ display: 'block', height: '7rem' }}
            />
          </div>

          {/* Heading */}
          <h1 className="text-center" style={{
            fontFamily: '"Cormorant Garamond", Georgia, serif',
            fontSize: '3rem',
            letterSpacing: '0.15em',
            fontWeight: 300,
            marginBottom: '8px'
          }}>
            CANAPÉ SERVICE
          </h1>

          {/* Italic Subheading */}
          <h2 className="text-center" style={{
            fontFamily: '"Cormorant", Georgia, serif',
            fontSize: '1.1rem',
            fontStyle: 'italic',
            fontWeight: 400,
            letterSpacing: '0.02em',
            color: '#333',
            marginBottom: '16px'
          }}>
            A first taste of seduction.
          </h2>

          {/* Body Paragraph - with extra padding */}
          <div className="w-full text-center" style={{
            fontFamily: '"Cormorant", Georgia, serif',
            fontSize: '0.9rem',
            fontWeight: 400,
            lineHeight: '1.8',
            color: '#444',
            marginBottom: '20px',
            paddingLeft: '40px',
            paddingRight: '40px'
          }}>
            <p>
              At Nostranos Catering, every first bite is an overture—an elegant introduction to the artistry that follows. Our canapés transcend the ordinary; each composition is a study in balance, texture, and flavour, crafted to awaken desire and linger on the palate. Thoughtfully conceived and impeccably presented, these miniature masterpieces embody the essence of refinement—where culinary craft meets seduction, and every morsel tells a story of taste, precision, and grace.
            </p>
          </div>

          {/* Footer Contact */}
          <div className="text-center mt-auto" style={{
            fontFamily: '"Cormorant Garamond", Georgia, serif',
            fontSize: '0.8rem',
            letterSpacing: '0.15em',
            color: '#333',
            fontWeight: 500
          }}>
            <p>NOSTRANO.CA &nbsp;&nbsp;|&nbsp;&nbsp; @NOSTRANO.CATERING</p>
          </div>
        </div>
      </div>
    </div>
  );
}
