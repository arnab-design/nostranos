import logoImage from '@/assets/52cce948fd81271b938df7f4433f2c3af4c2725c.png';
import marbleBackground from '@/assets/e8c55b93e0d869d9cf6f0b40ec93b03f75c0c46f.png';
import appetizerSpread from '@/assets/90d7f6b2e078e021e2d757f159b7242e3336bfa6.png';
import { ImageWithFallback } from './shared/ImageWithFallback';

export function SecondTitlePage() {
  return (
    <div className="w-full h-full relative overflow-hidden">
      {/* Marble Background */}
      <div 
        className="absolute inset-0"
        style={{
          backgroundImage: `url(${marbleBackground})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      />

      {/* Content */}
      <div className="relative z-10 w-full h-full flex flex-col">
        {/* Upper Content Section */}
        <div className="flex flex-col items-center justify-start px-16 pt-6 pb-6 gap-4">
          {/* Logo */}
          <div className="mb-6">
            <img 
              src={logoImage} 
              alt="Nostrano - Culinary Redefined" 
              className="w-64 h-auto"
            />
          </div>

          <div className="w-32 h-px bg-black/30" />

          {/* Headline */}
          <h1 className="text-center" style={{ fontFamily: 'serif', fontSize: '2.5rem', letterSpacing: '0.15em' }}>
            ARTISANAL TABLE SPREAD
          </h1>

          {/* Subtitle */}
          <h2 className="text-center" style={{ fontSize: '1.1rem', letterSpacing: '0.05em', fontStyle: 'italic' }}>
            Curated with Intention, Composed with Desire.
          </h2>

          {/* Description */}
          <div className="max-w-3xl text-center" style={{ fontSize: '0.85rem', lineHeight: '1.7' }}>
            <p className="text-black/70">
              At Nostrano each table becomes a curated composition—where culinary artistry meets sculptural design. Our spreads are meticulously arranged on sleek acrylic plinths and adorned with bespoke florals and textures, creating a dialogue between flavour, form, and finesse. Designed for the discerning palate, every presentation embodies seasonality, elegance, and restraint. With our signature balance of craft and aesthetic precision, we transform gatherings into immersive experiences—tables that do not merely feed, but captivate.
            </p>
          </div>

          {/* Decorative Line */}
          <div className="w-32 h-px bg-black/30 pt-2" />
        </div>

        {/* Four Images Grid */}
        <div className="px-16 pb-4 mt-10">
          <div className="grid grid-cols-4 gap-3">
            <div className="aspect-[4/3] overflow-hidden rounded-sm">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1692680887047-357bbef7b16f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaGFyY3V0ZXJpZSUyMGJvYXJkJTIwZWxlZ2FudHxlbnwxfHx8fDE3NjM2MjAwMTh8MA&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Charcuterie board"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="aspect-[4/3] overflow-hidden rounded-sm">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1676300183339-09e3824b215d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxnb3VybWV0JTIwYXBwZXRpemVyJTIwcGxhdHRlcnxlbnwxfHx8fDE3NjM1NzQwMzl8MA&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Gourmet appetizer platter"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="aspect-[4/3] overflow-hidden rounded-sm">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1739156202304-5e9e55ad8d46?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhcnRpc2FuJTIwY2hlZXNlJTIwYm9hcmR8ZW58MXx8fHwxNzYzNjIwMDE5fDA&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Artisan cheese board"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="aspect-[4/3] overflow-hidden rounded-sm">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1695913199679-0dfb69468534?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBmb29kJTIwc3ByZWFkfGVufDF8fHx8MTc2MzYyMDAxOXww&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Luxury food spread"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>

        {/* Bottom Four Images Grid */}
        <div className="px-16 pb-6 mt-6">
          <div className="grid grid-cols-4 gap-3">
            <div className="aspect-[4/3] overflow-hidden rounded-sm">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1745970800051-c98b55ffe260?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbGVnYW50JTIwYXBwZXRpemVyJTIwcGxhdHRlcnxlbnwxfHx8fDE3NjM2MjQxNTN8MA&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Elegant appetizer platter"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="aspect-[4/3] overflow-hidden rounded-sm">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1761095596996-69b318ee328d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxnb3VybWV0JTIwZmluZ2VyJTIwZm9vZHxlbnwxfHx8fDE3NjM2MjQxNTN8MA&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Gourmet finger food"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="aspect-[4/3] overflow-hidden rounded-sm">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1590912710024-6d51a6771abd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhcnRpc2FuJTIwY2hlZXNlJTIwc3ByZWFkfGVufDF8fHx8MTc2MzYyNDE1NHww&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Artisan cheese spread"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="aspect-[4/3] overflow-hidden rounded-sm">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1603298573248-3e98441a0d6d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBjYXRlcmluZyUyMHNwcmVhZHxlbnwxfHx8fDE3NjM2MjQxNTR8MA&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Luxury catering spread"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}