import marbleBackground from '@/assets/e8c55b93e0d869d9cf6f0b40ec93b03f75c0c46f.png';
import logoImage from '@/assets/52cce948fd81271b938df7f4433f2c3af4c2725c.png';
import { ImageWithFallback } from './shared/ImageWithFallback';

const skewerItems = {
  left: [
    {
      name: 'CHICKEN SATAY',
      description: 'Peanut Sauce, Thai Chilies, Scallion, Cilantro, Sesame Seed',
      image: 'https://images.unsplash.com/photo-1718421670841-19501b4a9e03?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaGlja2VuJTIwc2F0YXklMjBza2V3ZXJzfGVufDF8fHx8MTc2MzUzMzcyNXww&ixlib=rb-4.1.0&q=80&w=1080'
    },
    {
      name: 'CHICKEN SOUVLAKI',
      description: 'Tzatziki, Fresh Parsley, Lemon',
      image: 'https://images.unsplash.com/photo-1577194509876-4bb24787a641?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxncmlsbGVkJTIwY2hpY2tlbiUyMHNvdXZsYWtpfGVufDF8fHx8MTc2MzUzMzcyNnww&ixlib=rb-4.1.0&q=80&w=1080'
    },
    {
      name: 'LAMB SPIEDINI',
      description: 'Herb-Marinated Lamb, Rosemary, Thyme, Garlic Aioli, Lemon Zest',
      image: 'https://images.unsplash.com/photo-1708597521669-f7312f312b29?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsYW1iJTIwc2tld2VycyUyMGdvdXJtZXR8ZW58MXx8fHwxNzYzNTMzNzI1fDA&ixlib=rb-4.1.0&q=80&w=1080'
    }
  ],
  right: [
    {
      name: 'TERIYAKI SALMON',
      description: 'Teriyaki glaze, Miso-Soy Beurre Blanc, Scallions, Sesame, Micro Shiso',
      image: 'https://images.unsplash.com/photo-1566840501079-9e6ab49fc925?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZXJpeWFraSUyMHNhbG1vbiUyMHNrZXdlcnxlbnwxfHx8fDE3NjM1MzM3MjZ8MA&ixlib=rb-4.1.0&q=80&w=1080'
    },
    {
      name: 'POFFERTJES & BERRY SKEWERS',
      description: 'Strawberry, Blueberry, Maple Syrup, Powdered Sugar',
      image: 'https://images.unsplash.com/photo-1718421670841-19501b4a9e03?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaGlja2VuJTIwc2F0YXklMjBza2V3ZXJzfGVufDF8fHx8MTc2MzUzMzcyNXww&ixlib=rb-4.1.0&q=80&w=1080'
    }
  ]
};

// Additional image for grid (6 images total)
const additionalImage = 'https://images.unsplash.com/photo-1577367997065-fdd8fd94fb3f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiZWVmJTIwc2tld2VycyUyMGthYm9ic3xlbnwxfHx8fDE3NjM2MjQ3MDN8MA&ixlib=rb-4.1.0&q=80&w=1080';

export function SkewersMenuPage() {
  const allItems = [...skewerItems.left, ...skewerItems.right];
  const gridImages = [...allItems.map(item => item.image), additionalImage];
  
  return (
    <div className="w-full h-full relative overflow-hidden bg-white">
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
        {/* Header Section */}
        <div className="px-16 pt-10 pb-4">
          {/* Logo */}
          <div className="flex justify-center mb-6">
            <img 
              src={logoImage} 
              alt="Nostrano" 
              className="h-16"
            />
          </div>

          {/* Main Heading */}
          <h1 className="text-center mb-3" style={{ fontFamily: 'serif', fontSize: '2.25rem', letterSpacing: '0.05em' }}>
            HORS D'OEUVRES MENU SELECTIONS
          </h1>

          {/* Section Title */}
          <h2 className="text-center" style={{ fontSize: '1.5rem', letterSpacing: '0.15em' }}>
            SKEWERS
          </h2>
        </div>

        {/* Hero Image Grid - 3x2 for 6 items */}
        <div className="px-16 mb-6">
          <div className="grid grid-cols-3 gap-3">
            {gridImages.map((image, index) => (
              <div key={index} className="aspect-[4/3] overflow-hidden rounded-sm">
                <ImageWithFallback
                  src={image}
                  alt={`Skewer ${index + 1}`}
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Menu Items Section */}
        <div className="px-16 flex-1">
          {/* Two Column Layout */}
          <div className="grid grid-cols-2 gap-x-16 gap-y-6 relative">
            {/* Left Column */}
            <div className="space-y-6">
              {skewerItems.left.map((item, index) => (
                <div key={index} className="text-center">
                  <h4 className="mb-2" style={{ fontSize: '1rem', letterSpacing: '0.05em' }}>
                    {item.name}
                  </h4>
                  <p className="text-neutral-600" style={{ fontSize: '0.8rem', lineHeight: '1.5' }}>
                    {item.description}
                  </p>
                </div>
              ))}
            </div>

            {/* Vertical Divider */}
            <div className="absolute left-1/2 top-0 bottom-0 w-px bg-black/20 transform -translate-x-1/2" />

            {/* Right Column */}
            <div className="space-y-6">
              {skewerItems.right.map((item, index) => (
                <div key={index} className="text-center">
                  <h4 className="mb-2" style={{ fontSize: '1rem', letterSpacing: '0.05em' }}>
                    {item.name}
                  </h4>
                  <p className="text-neutral-600" style={{ fontSize: '0.8rem', lineHeight: '1.5' }}>
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="px-16 pb-6 text-center">
          <p className="text-neutral-600" style={{ fontSize: '0.75rem' }}>
            The menu includes 1 serving per guest
          </p>
        </div>
      </div>
    </div>
  );
}