import { useState } from 'react';
import { TitlePage } from './components/TitlePage';
import { SecondTitlePage } from './components/SecondTitlePage';
import { CrostinisMenuPage } from './components/CrostinisMenuPage';
import { SkewersMenuPage } from './components/SkewersMenuPage';
import { SandwichesMenuPage } from './components/SandwichesMenuPage';
import { CanapeIntroPage } from './components/CanapeIntroPage';
import { CanapeMenuPage } from './components/CanapeMenuPage';
import { CanapeSeaPage } from './components/CanapeSeaPage';
import { CanapeVegetarianPage } from './components/CanapeVegetarianPage';
import { CanapeClosingPage } from './components/CanapeClosingPage';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from './components/ui/button';

export default function App() {
  const [currentPage, setCurrentPage] = useState(0);

  const pages = [
    { component: TitlePage, name: 'Title Page' },
    { component: SecondTitlePage, name: 'Second Title Page' },
    { component: SandwichesMenuPage, name: 'Sandwiches Menu' },
    { component: CrostinisMenuPage, name: 'Crostinis Menu' },
    { component: SkewersMenuPage, name: 'Skewers Menu' },
    { component: CanapeIntroPage, name: 'Canapés Introduction' },
    { component: CanapeMenuPage, name: 'Canapés - From Land' },
    { component: CanapeSeaPage, name: 'Canapés - From Sea' },
    { component: CanapeVegetarianPage, name: 'Canapés - Garden & Sweet' },
    { component: CanapeClosingPage, name: 'Service & Contact' }
  ];

  const nextPage = () => {
    setCurrentPage((prev) => (prev + 1) % pages.length);
  };

  const prevPage = () => {
    setCurrentPage((prev) => (prev - 1 + pages.length) % pages.length);
  };

  const CurrentPageComponent = pages[currentPage].component;

  return (
    <div className="min-h-screen bg-neutral-900 flex flex-col items-center justify-center p-8">
      {/* Menu Container with Print Dimensions */}
      <div className="relative bg-white shadow-2xl" style={{ width: '8.5in', height: '11in' }}>
        <CurrentPageComponent />
      </div>

      {/* Navigation Controls */}
      <div className="mt-8 flex items-center gap-4">
        <Button
          onClick={prevPage}
          variant="outline"
          size="sm"
          className="bg-white"
        >
          <ChevronLeft className="size-4 mr-2" />
          Previous
        </Button>

        <div className="text-white px-4">
          Page {currentPage + 1} of {pages.length}: {pages[currentPage].name}
        </div>

        <Button
          onClick={nextPage}
          variant="outline"
          size="sm"
          className="bg-white"
        >
          Next
          <ChevronRight className="size-4 ml-2" />
        </Button>
      </div>

      {/* Page Indicators */}
      <div className="mt-4 flex gap-2">
        {pages.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentPage(index)}
            className={`w-2 h-2 rounded-full transition-all ${index === currentPage ? 'bg-white w-8' : 'bg-neutral-600'
              }`}
            aria-label={`Go to page ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}