import logoImage from '@/assets/52cce948fd81271b938df7f4433f2c3af4c2725c.png';
import { ImageWithFallback } from './shared/ImageWithFallback';

const oceanCanapes = [
    {
        name: 'SALMON TARTLET',
        description: 'Salmon Tartar, Herb Pie-Tee, Avocado, Cucumber Ribbon, Citrus Aioli, Radish, Salmon Roe, Edible Flower'
    },
    {
        name: 'SESAME TUNA TATAKI',
        description: 'Sesame Crusted Tuna, Taro Root Crisp, Wasabi-Yuzu Aioli, Pickled Ginger, Micro Cilantro'
    },
    {
        name: 'JERK SHRIMP',
        description: 'Plantain Crisp, Jerk Shrimp, Pineapple Salsa, Cilantro Crema, Habanero-Pineapple Gel, Lime Caviar, Micro Cilantro'
    },
    {
        name: 'TRUFFLE LOBSTER SLIDER',
        description: 'Poached Lobster, Charcoal Bun, Yuzu Aioli, Truffle Beurre Blanc, Fennel-Chervil Slaw'
    },
    {
        name: 'TUNA CRISPY RICE',
        description: 'Spiced Tuna Tartar, Crispy Rice, Serrano, Gold Leaf, Micro Cilantro, Black Sesame'
    },
    {
        name: 'SMOKED SALMON BLINI',
        description: 'Trout Roe, Smoked Salmon, Cream Cheese Mousse, Yuzu Gel, Blini, Dill'
    },
    {
        name: 'TUNA POKE',
        description: 'Squid Ink Cone, Tuna Tartare, Cucumber Ribbon, Pickled Ginger, Avocado-Wasabi Aioli, Trout Roe, Edible Flower'
    },
    {
        name: 'OCTOPUS',
        description: 'Squid Ink Crisp, Seared Octopus, Smoked Paprika Aioli, Pickled Shallot Petals, Micro Cilantro, Saffron Gel, Edible Flower'
    }
];

const premiumOcean = [
    {
        name: 'SCALLOP TARTLET',
        price: '$',
        description: 'Seared Scallop, Risotto alla Milanese, Basil Oil, Lemon Zest, Micro Basil, Gold Dust, Osetra Caviar'
    },
    {
        name: 'EAST COAST OYSTERS',
        price: '$',
        description: 'Beausoleil Oyster, Champagne Mignonette, Lemon, Micro Shiso'
    },
    {
        name: 'PAVÉ & CAVIAR',
        price: '$',
        description: 'Potato Pavé, Crème Fraîche, Sturgeon Caviar, Chive, Edible Flower'
    }
];

export function CanapeSeaPage() {
    return (
        <div className="w-full h-full relative overflow-hidden bg-white">
            {/* Content with 32px padding all around */}
            <div className="w-full h-full flex" style={{ padding: '32px' }}>
                {/* Left Column - Text (70%) */}
                <div className="flex-1 flex flex-col pr-8" style={{ width: '70%' }}>
                    {/* Section Heading */}
                    <h2 style={{
                        fontFamily: '"Cormorant Garamond", Georgia, serif',
                        fontSize: '1.75rem',
                        letterSpacing: '0.2em',
                        fontWeight: 400,
                        marginBottom: '24px'
                    }}>
                        FROM OCEAN
                    </h2>

                    {/* Menu Items */}
                    <div className="space-y-4 mb-6">
                        {oceanCanapes.map((item, index) => (
                            <div key={index}>
                                <h4 style={{
                                    fontFamily: '"Cormorant Garamond", Georgia, serif',
                                    fontSize: '0.85rem',
                                    letterSpacing: '0.1em',
                                    fontWeight: 600,
                                    marginBottom: '2px'
                                }}>
                                    {item.name}
                                </h4>
                                <p style={{
                                    fontFamily: '"Cormorant", Georgia, serif',
                                    fontSize: '0.75rem',
                                    lineHeight: '1.5',
                                    color: '#555'
                                }}>
                                    {item.description}
                                </p>
                            </div>
                        ))}
                    </div>

                    {/* Premium Ocean Subheading */}
                    <div className="mb-4 pt-4" style={{ borderTop: '1px solid #e0e0e0' }}>
                        <h3 style={{
                            fontFamily: '"Cormorant Garamond", Georgia, serif',
                            fontSize: '1.1rem',
                            letterSpacing: '0.15em',
                            fontWeight: 400,
                            fontStyle: 'italic'
                        }}>
                            PREMIUM SELECTIONS
                        </h3>
                    </div>

                    {/* Premium Items */}
                    <div className="space-y-4 flex-1">
                        {premiumOcean.map((item, index) => (
                            <div key={index}>
                                <h4 style={{
                                    fontFamily: '"Cormorant Garamond", Georgia, serif',
                                    fontSize: '0.85rem',
                                    letterSpacing: '0.1em',
                                    fontWeight: 600,
                                    marginBottom: '2px'
                                }}>
                                    {item.name} <span style={{ fontWeight: 400, color: '#888' }}>— {item.price}</span>
                                </h4>
                                <p style={{
                                    fontFamily: '"Cormorant", Georgia, serif',
                                    fontSize: '0.75rem',
                                    lineHeight: '1.5',
                                    color: '#555'
                                }}>
                                    {item.description}
                                </p>
                            </div>
                        ))}
                    </div>

                    {/* Footer with Logo and Contact */}
                    <div className="mt-auto pt-6 flex flex-col items-start">
                        <div style={{
                            background: 'white',
                            mixBlendMode: 'multiply',
                            display: 'inline-block',
                            marginBottom: '8px'
                        }}>
                            <img
                                src={logoImage}
                                alt="Nostrano"
                                style={{ display: 'block', height: '3rem' }}
                            />
                        </div>
                        <p style={{
                            fontFamily: '"Cormorant Garamond", Georgia, serif',
                            fontSize: '0.7rem',
                            letterSpacing: '0.1em',
                            color: '#333',
                            fontWeight: 500
                        }}>
                            NOSTRANO.CA &nbsp;&nbsp;|&nbsp;&nbsp; @NOSTRANO.CATERING
                        </p>
                    </div>
                </div>

                {/* Right Column - Single Long Image (30%) */}
                <div style={{ width: '30%', height: '100%' }}>
                    <ImageWithFallback
                        src="https://images.unsplash.com/photo-1615141982883-c7ad0e69fd62?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMjA3fDB8MXxzZWFyY2h8MXx8dHVuYSUyMHRhcnRhcmV8ZW58MHx8fHwxNzAwMDAwMDAwfDA&ixlib=rb-4.1.0&q=80&w=800"
                        alt="Fresh seafood canapé"
                        className="w-full h-full object-cover"
                    />
                </div>
            </div>
        </div>
    );
}
