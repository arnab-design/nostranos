import logoImage from '@/assets/52cce948fd81271b938df7f4433f2c3af4c2725c.png';
import { ImageWithFallback } from './shared/ImageWithFallback';

const gardenCanapes = [
    {
        name: 'MAITAKE SLIDER',
        description: 'Sesame Beetroot Bun, Fried Maitake, Black Garlic Truffle Aioli, Cucumber Ribbons, Pickled Red Onion, Micro Shiso'
    },
    {
        name: 'TRUFFLE GRILLED CHEESE',
        description: 'Brioche, Black Truffle-Herb Butter, Fontina Val d\'Aosta + Taleggio D.O.P, Aged Comté, White Truffle Oil'
    },
    {
        name: 'FALAFEL MEDALLION',
        description: 'Falafel, Whipped Beetroot-Tahini Aioli, Watermelon Radish, Cilantro Pearls, Pomegranate Seeds, Lemon Zest, Micro Sorrel',
        isVegan: true
    },
    {
        name: 'POLENTA MEDALLION',
        description: 'Fried Polenta, Red Pepper Pesto Aioli, Parmesan Crisp, Balsamic Pearls, Micro Basil'
    },
    {
        name: 'TRUFFLE MAC CROQUETTE',
        description: 'Macaroni Noodle, Four Cheese Blend, White-Truffle Aioli, Parmesan Crisp, Chive, Micro Arugula'
    },
    {
        name: 'BEYOND MAC SLIDER',
        description: 'Beyond Meat, Sesame Vegan Bun, Mac Sauce, Onion Jam, Baby Gem Lettuce, Pickles, Vegan Cheddar',
        isVegan: true
    },
    {
        name: 'GNOCCHETTI SPOON',
        description: 'Gnocchetti, Arrabbiata Rose, Whipped Ricotta, Parmesan Snow, Garlic Crisp, Basil Oil, Micro Basil'
    },
    {
        name: 'MUSHROOM TARTLET',
        description: 'Wild Mushroom Duxelles, Black Truffle-Parmesan Crema, Enoki Mushroom, Garlic Crisp, Micro Sorrel, Maldon'
    },
    {
        name: 'ARANCINI',
        description: 'Pomodoro-Parmesan Risotto, Mozzarella, Red Pepper Pesto Aioli, Parmesan Snow, Micro Basil'
    },
    {
        name: 'MELANZANE DI LUCE',
        description: 'Fried Eggplant Crisp, Whipped Ricotta, Confit Tomato, Balsamic Pearls, Basil Pesto, Micro Basil'
    }
];

export function CanapeVegetarianPage() {
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
                        marginBottom: '4px'
                    }}>
                        FROM GARDEN
                    </h2>

                    {/* Vegan Subheading */}
                    <p style={{
                        fontFamily: '"Cormorant", Georgia, serif',
                        fontSize: '0.85rem',
                        fontStyle: 'italic',
                        color: '#666',
                        marginBottom: '24px'
                    }}>
                        Vegan options marked (V)
                    </p>

                    {/* Menu Items */}
                    <div className="space-y-4 flex-1">
                        {gardenCanapes.map((item, index) => (
                            <div key={index}>
                                <h4 style={{
                                    fontFamily: '"Cormorant Garamond", Georgia, serif',
                                    fontSize: '0.85rem',
                                    letterSpacing: '0.1em',
                                    fontWeight: 600,
                                    marginBottom: '2px'
                                }}>
                                    {item.name} {item.isVegan && <span style={{ fontWeight: 400, color: '#666' }}>(V)</span>}
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
                        src="https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMjA3fDB8MXxzZWFyY2h8MXx8YnVycmF0YXxlbnwwfHx8fDE3MDAwMDAwMDB8MA&ixlib=rb-4.1.0&q=80&w=800"
                        alt="Fresh vegetarian canapé"
                        className="w-full h-full object-cover"
                    />
                </div>
            </div>
        </div>
    );
}
