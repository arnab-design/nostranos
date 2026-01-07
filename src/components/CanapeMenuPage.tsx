import logoImage from '@/assets/52cce948fd81271b938df7f4433f2c3af4c2725c.png';
import { ImageWithFallback } from './shared/ImageWithFallback';

const landCanapes = [
    {
        name: 'CHICKEN & WAFFLES',
        description: 'Karaage, Belgian Waffle, Brown Butter-Honey Aioli, Hot Honey, Microgreen'
    },
    {
        name: 'BISON SLIDER',
        description: 'Ground Bison Ribeye, Brioche, Bone-Marrow Butter, Aged Comté, Black Garlic & Truffle Béarnaise, Pancetta, Caramelized Shallot Jam, Watercress'
    },
    {
        name: 'BRAISED DUCK PANCAKE',
        description: 'Duck Confit, Báo Bǐng, Hoisin Glaze, Pickled Cucumber, Scallion, Chive Ribbon'
    },
    {
        name: 'BARBACOA TACO',
        description: 'Braised Lamb Shoulder, Truffle-Mole Crèma, Avocado, Pickled Onion, Micro Cilantro'
    },
    {
        name: 'GENERAL TSO SLIDER',
        description: 'Karaage, Charcoal Bun, General Tso, Yuzu Aioli, Daikon-Cabbage Slaw, Thai Chilli Paste'
    },
    {
        name: 'DUCK BREAST MACARON',
        description: 'Seared Duck Breast, Black Sesame Macaron, Cherry-Port Gel, Gold Flake, Microgreen'
    },
    {
        name: 'VODKA PARM SLIDER',
        description: 'Chicken Cutlet, Focaccia, Buffalo Mozzarella, Vodka Sauce, Pesto, Onion Jam, Arugula'
    }
];

const wagyuCollection = [
    {
        name: 'WAGYU STEAK FRITES',
        price: '$',
        description: 'A5 Japanese Striploin, Potato Pavé, White Truffle Aioli, Egg Yolk Gel, Micro Sorrel, Maldon'
    },
    {
        name: 'WAGYU N EGGS NIGIRI',
        price: '$$',
        description: 'A5 Japanese Ribeye, Sushi Rice, Caviar, Yuzu Ponzu Glaze, Wasabi Aioli, Micro Shiso, Edible Gold'
    },
    {
        name: 'WAGYU SLIDER',
        price: '$',
        description: 'Brioche, Truffle Aioli, Quail Egg, Gruyère, Caramelized Onion Medallion, Tomato, Micro Shiso'
    }
];

export function CanapeMenuPage() {
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
                        FROM LAND
                    </h2>

                    {/* Menu Items */}
                    <div className="space-y-4 mb-6">
                        {landCanapes.map((item, index) => (
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

                    {/* Wagyu Collection Subheading */}
                    <div className="mb-4 pt-4" style={{ borderTop: '1px solid #e0e0e0' }}>
                        <h3 style={{
                            fontFamily: '"Cormorant Garamond", Georgia, serif',
                            fontSize: '1.1rem',
                            letterSpacing: '0.15em',
                            fontWeight: 400,
                            fontStyle: 'italic'
                        }}>
                            WAGYU COLLECTION
                        </h3>
                    </div>

                    {/* Wagyu Items */}
                    <div className="space-y-4 flex-1">
                        {wagyuCollection.map((item, index) => (
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
                        src="https://images.unsplash.com/photo-1544025162-d76694265947?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMjA3fDB8MXxzZWFyY2h8Mnx8Z291cm1ldCUyMHNsaWRlcnxlbnwwfHx8fDE3MDAwMDAwMDB8MA&ixlib=rb-4.1.0&q=80&w=800"
                        alt="Gourmet canapé"
                        className="w-full h-full object-cover"
                    />
                </div>
            </div>
        </div>
    );
}
