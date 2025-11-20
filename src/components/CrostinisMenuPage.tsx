import { Fragment } from 'react';
import marbleBackground from '@/assets/e8c55b93e0d869d9cf6f0b40ec93b03f75c0c46f.png';
import logoImage from '@/assets/52cce948fd81271b938df7f4433f2c3af4c2725c.png';
import { ImageWithFallback } from './shared/ImageWithFallback';

const crostiniItems = {
  left: [
    {
      name: 'BEET SMOKED SALMON',
      description: 'Atlantic Salmon, Whipped Lemon-Dill Mascarpone, Cucumber Ribbon, Salmon Roe, Micro-Dill, Edible Flower, Maldon',
      image: 'https://images.unsplash.com/photo-1704007573697-6a516da421ec?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzbW9rZWQlMjBzYWxtb24lMjBjcm9zdGluaXxlbnwxfHx8fDE3NjM2MjM5ODN8MA&ixlib=rb-4.1.0&q=80&w=1080'
    },
    {
      name: 'STEAK & BURRATA',
      description: 'Prime Canadian Strip loin, Garlic Butter, Burrata, Caramelized Onion, Chimichurri, Balsamic Glaze, EVOO, Maldon',
      image: 'https://images.unsplash.com/photo-1732763897987-ce7e63a94d7c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdGVhayUyMGJ1cnJhdGElMjBjcm9zdGluaXxlbnwxfHx8fDE3NjM1MzM3MjN8MA&ixlib=rb-4.1.0&q=80&w=1080'
    },
    {
      name: 'AVOCADO TOAST',
      description: 'Avocado mousse, Cherry tomato, Beet puree, Watermelon radish, Everything seed, Hot Honey, Microgreen',
      image: 'https://images.unsplash.com/photo-1761315414017-04c3906359d1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhdm9jYWRvJTIwdG9hc3QlMjBnb3VybWV0fGVufDF8fHx8MTc2MzUzMzcyM3ww&ixlib=rb-4.1.0&q=80&w=1080'
    }
  ],
  right: [
    {
      name: 'PROSCIUTTO & PEAR',
      description: 'Stracciatella, Caramelized Pear, Prosciutto di Parma, Honey, Fresh Thyme, Black Pepper',
      image: 'https://images.unsplash.com/photo-1601368135477-472a330882a0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9zY2l1dHRvJTIwcGVhciUyMGNyb3N0aW5pfGVufDF8fHx8MTc2MzYyMzk4M3ww&ixlib=rb-4.1.0&q=80&w=1080'
    },
    {
      name: 'WHIPPED GOAT CHEESE & FIG',
      description: 'Goat Cheese Mousse, Honey-Roasted Fig, Candied Walnuts, Lemon Zest, Thyme, Balsamic Glaze',
      image: 'https://images.unsplash.com/photo-1751183295754-9cff9577a44e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxnb2F0JTIwY2hlZXNlJTIwZmlnJTIwY3Jvc3Rpbml8ZW58MXx8fHwxNzYzNjIzOTg0fDA&ixlib=rb-4.1.0&q=80&w=1080'
    },
    {
      name: 'CAPRESE',
      description: 'Burrata, Tomato Confit, Pesto, Balsamic Pearls, Micro Basil, EVOO, Maldon',
      image: 'https://images.unsplash.com/photo-1724154854089-4bbd0e7d09c8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjYXByZXNlJTIwdG9tYXRvJTIwbW96emFyZWxsYXxlbnwxfHx8fDE3NjM2MjM5ODd8MA&ixlib=rb-4.1.0&q=80&w=1080'
    }
  ]
};

export function CrostinisMenuPage() {
  const leftItems = crostiniItems.left;
  const rightItems = crostiniItems.right;
  const allItems = [...leftItems, ...rightItems];
  const rowCount = Math.max(leftItems.length, rightItems.length);
  
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
            CROSTINIS
          </h2>
        </div>

        {/* Hero Image Grid - 3x2 */}
        <div className="px-16 mb-6">
          <div className="grid grid-cols-3 gap-3">
            {allItems.map((item, index) => (
              <div key={index} className="aspect-[4/3] overflow-hidden rounded-sm">
                <ImageWithFallback
                  src={item.image}
                  alt={item.name}
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Menu Items Section */}
        <div className="px-16 flex-1">
          <div className="relative">
            <div className="absolute left-1/2 top-0 bottom-0 w-px bg-black/20 transform -translate-x-1/2 pointer-events-none" />
            <div className="grid grid-cols-2 gap-x-16 gap-y-6">
              {Array.from({ length: rowCount }).map((_, index) => (
                <Fragment key={index}>
                  <div className="text-center">
                    {leftItems[index] && (
                      <>
                        <h4 className="mb-2" style={{ fontSize: '1rem', letterSpacing: '0.05em' }}>
                          {leftItems[index].name}
                        </h4>
                        <p className="text-neutral-600" style={{ fontSize: '0.8rem', lineHeight: '1.5' }}>
                          {leftItems[index].description}
                        </p>
                      </>
                    )}
                  </div>
                  <div className="text-center">
                    {rightItems[index] && (
                      <>
                        <h4 className="mb-2" style={{ fontSize: '1rem', letterSpacing: '0.05em' }}>
                          {rightItems[index].name}
                        </h4>
                        <p className="text-neutral-600" style={{ fontSize: '0.8rem', lineHeight: '1.5' }}>
                          {rightItems[index].description}
                        </p>
                      </>
                    )}
                  </div>
                </Fragment>
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