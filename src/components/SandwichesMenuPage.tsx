import { Fragment } from 'react';
import marbleBackground from '@/assets/e8c55b93e0d869d9cf6f0b40ec93b03f75c0c46f.png';
import logoImage from '@/assets/52cce948fd81271b938df7f4433f2c3af4c2725c.png';
import { ImageWithFallback } from './shared/ImageWithFallback';

const sandwichItems = {
  left: [
    {
      name: 'TURKEY & HAVARTI CROISSANT',
      description: 'Herb Roasted Turkey, Creamy Havarti, Heirloom Tomato, Baby Arugula, Pickled Red Onion, Dijon-Herb Aioli',
      image: 'https://images.unsplash.com/photo-1761506774452-11827a23de45?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0dXJrZXklMjBjcm9pc3NhbnQlMjBzYW5kd2ljaHxlbnwxfHx8fDE3NjM1NzU2OTV8MA&ixlib=rb-4.1.0&q=80&w=1080'
    },
    {
      name: 'BLACK FOREST CROISSANT',
      description: 'Black Forest Ham, Aged Swiss Cheese, Baby Arugula, Cucumber, Heirloom Tomato, Pickled Red Onion, Lemon-Herb Aioli',
      image: 'https://images.unsplash.com/photo-1627915863490-74d51279f87b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoYW0lMjBjaGVlc2UlMjBjcm9pc3NhbnR8ZW58MXx8fHwxNzYzNTc1Njk1fDA&ixlib=rb-4.1.0&q=80&w=1080'
    },
    {
      name: 'CAPRESE',
      description: 'Focaccia, Buffalo Mozzarella, Heirloom Tomato, Baby Arugula, Pesto, Balsamic Glaze, EVOO',
      image: 'https://images.unsplash.com/photo-1686860794212-164e570439fc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjYXByZXNlJTIwc2FuZHdpY2glMjBmb2NhY2NpYXxlbnwxfHx8fDE3NjM1NzU2OTV8MA&ixlib=rb-4.1.0&q=80&w=1080'
    },
    {
      name: 'PANINO MISTRO',
      description: 'Focaccia, Soppresata, Capicolo, Mortadella, Provolone, Heirloom Tomato, Baby Gem Lettuce, Red Onion, Red Wine Vinaigrette, EVOO',
      image: 'https://images.unsplash.com/photo-1705647405231-c481e117e609?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpdGFsaWFuJTIwY29sZCUyMGN1dHMlMjBzYW5kd2ljaHxlbnwxfHx8fDE3NjM2MjQxOTV8MA&ixlib=rb-4.1.0&q=80&w=1080'
    },
    {
      name: 'TUNA TRUFFLE SALAD',
      description: 'Brioche, Yellowfin Tuna Salad, Lemon-Truffle Aioli, Cucumber Ribbons, Baby Gem Lettuce',
      image: 'https://images.unsplash.com/photo-1763261790435-c0ea9b185fd7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0dW5hJTIwc2FsYWQlMjBzYW5kd2ljaHxlbnwxfHx8fDE3NjM1MTUyODJ8MA&ixlib=rb-4.1.0&q=80&w=1080'
    },
    {
      name: 'TRUFFLE LOBSTER ROLL',
      description: 'Brioche Roll, Poached Lobster, Yuzu Aioli, Truffle Beurre Blanc',
      image: 'https://images.unsplash.com/photo-1666380510734-c81855f0afdb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsb2JzdGVyJTIwcm9sbHxlbnwxfHx8fDE3NjM2MjQxOTd8MA&ixlib=rb-4.1.0&q=80&w=1080'
    }
  ],
  right: [
    {
      name: 'NOT-SO PHILLY CHEESESTEAK',
      description: 'Ciabatta, Dry Aged Prime Ribeye, Aged Provolone Mornay, Aged Provolone, Caramelized Onion & Pepper, Roasted Garlic Aioli',
      image: 'https://images.unsplash.com/photo-1734769853702-c7444c039c8c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwaGlsbHklMjBjaGVlc2VzdGVha3xlbnwxfHx8fDE3NjM1NzU2OTd8MA&ixlib=rb-4.1.0&q=80&w=1080'
    },
    {
      name: 'G.O.A.T CLUB SANDWICH',
      description: 'Brioche, Herb Chicken Breast, Pancetta, Quail Egg, Aged Gruyere Heirloom Tomato, Baby Gem Lettuce, Chive Mayo',
      image: 'https://images.unsplash.com/photo-1665233272941-ae681d11fc06?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjbHViJTIwc2FuZHdpY2glMjBnb3VybWV0fGVufDF8fHx8MTc2MzU3NTY5N3ww&ixlib=rb-4.1.0&q=80&w=1080'
    },
    {
      name: 'NASHVILLE CHICKEN SLIDER',
      description: 'Fried Chicken Cutlet, Creamy Coleslaw, Ancho Chipotle, Pickle',
      image: 'https://images.unsplash.com/photo-1700324638718-dade543770fa?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxuYXNodmlsbGUlMjBjaGlja2VuJTIwc2xpZGVyfGVufDF8fHx8MTc2MzU3NTY5OHww&ixlib=rb-4.1.0&q=80&w=1080'
    },
    {
      name: 'FALAFEL SLIDER',
      description: 'Brioche, Tzatziki, Tahini, Pickled Turnip, Tomato, Arugula',
      image: 'https://images.unsplash.com/photo-1642151614526-583bfad9cb2f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmYWxhZmVsJTIwc2FuZHdpY2h8ZW58MXx8fHwxNzYzNjI0MjAxfDA&ixlib=rb-4.1.0&q=80&w=1080'
    },
    {
      name: 'PORTOBELLO SLIDER',
      description: 'Brioche, Truffle-Garlic Aioli, Aged Provolone, Pickled Red Onion, Baby Arugula',
      image: 'https://images.unsplash.com/photo-1699446778131-d15d50772ce4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwb3J0b2JlbGxvJTIwbXVzaHJvb20lMjBidXJnZXJ8ZW58MXx8fHwxNzYzNTc1Njk4fDA&ixlib=rb-4.1.0&q=80&w=1080'
    },
    {
      name: 'AGED CHEESEBURGER SLIDER',
      description: 'Brioche, Ground Chuck, Aged Cheddar, Smoked Ketchup, Baby Gem Lettuce, Tomato, Pickle',
      image: 'https://images.unsplash.com/photo-1625813506062-0aeb1d7a094b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxnb3VybWV0JTIwY2hlZXNlYnVyZ2VyJTIwc2xpZGVyfGVufDF8fHx8MTc2MzU3NTY5OXww&ixlib=rb-4.1.0&q=80&w=1080'
    }
  ]
};

export function SandwichesMenuPage() {
  const leftItems = sandwichItems.left;
  const rightItems = sandwichItems.right;
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
        <div className="px-16 pt-8 pb-3">
          {/* Logo */}
          <div className="flex justify-center mb-4">
            <img 
              src={logoImage} 
              alt="Nostrano" 
              className="h-14"
            />
          </div>

          {/* Main Heading */}
          <h1 className="text-center mb-2" style={{ fontFamily: 'serif', fontSize: '2rem', letterSpacing: '0.05em' }}>
            HORS D'OEUVRES MENU SELECTIONS
          </h1>

          {/* Section Title */}
          <h2 className="text-center" style={{ fontSize: '1.25rem', letterSpacing: '0.15em' }}>
            SANDWICHES, SLIDERS & ROLLS
          </h2>
        </div>

        {/* Hero Image Grid - 4x2 */}
        <div className="px-16 mb-4">
          <div className="grid grid-cols-4 gap-2">
            {allItems.slice(0, 8).map((item, index) => (
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
            <div className="grid grid-cols-2 gap-x-16 gap-y-4">
              {Array.from({ length: rowCount }).map((_, index) => (
                <Fragment key={index}>
                  <div className="text-center">
                    {leftItems[index] && (
                      <>
                        <h4 className="mb-1" style={{ fontSize: '0.95rem', letterSpacing: '0.05em' }}>
                          {leftItems[index].name}
                        </h4>
                        <p className="text-neutral-600" style={{ fontSize: '0.75rem', lineHeight: '1.4' }}>
                          {leftItems[index].description}
                        </p>
                      </>
                    )}
                  </div>
                  <div className="text-center">
                    {rightItems[index] && (
                      <>
                        <h4 className="mb-1" style={{ fontSize: '0.95rem', letterSpacing: '0.05em' }}>
                          {rightItems[index].name}
                        </h4>
                        <p className="text-neutral-600" style={{ fontSize: '0.75rem', lineHeight: '1.4' }}>
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
        <div className="px-16 pb-5 text-center">
          <p className="text-neutral-600" style={{ fontSize: '0.75rem' }}>
            The menu includes 1 serving per guest
          </p>
        </div>
      </div>
    </div>
  );
}