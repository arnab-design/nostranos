import logoImage from '@/assets/52cce948fd81271b938df7f4433f2c3af4c2725c.png';

export function CanapeClosingPage() {
    return (
        <div className="w-full h-full relative overflow-hidden bg-white">
            {/* Content */}
            <div className="w-full h-full flex flex-col items-center justify-center px-16 py-12">
                {/* Logo */}
                <div className="mb-12" style={{
                    background: 'white',
                    mixBlendMode: 'multiply',
                    display: 'inline-block'
                }}>
                    <img
                        src={logoImage}
                        alt="Nostrano"
                        className="h-16"
                        style={{ display: 'block' }}
                    />
                </div>

                {/* Decorative Line */}
                <div className="w-24 h-px bg-black/20 mb-10" />

                {/* Service Notes Heading */}
                <h2 className="text-center mb-8" style={{
                    fontFamily: 'Didot, "Bodoni MT", "Playfair Display", Georgia, serif',
                    fontSize: '1.75rem',
                    letterSpacing: '0.2em',
                    fontWeight: 400
                }}>
                    SERVICE NOTES
                </h2>

                {/* Service Notes Content */}
                <div className="max-w-lg text-center mb-12" style={{
                    fontFamily: 'Georgia, serif',
                    fontSize: '0.85rem',
                    lineHeight: '2',
                    color: '#555'
                }}>
                    <p className="mb-6">
                        All canapé selections are crafted to order with the
                        freshest seasonal ingredients.
                    </p>
                    <p className="mb-6">
                        Minimum order of 25 pieces per selection applies.
                        Premium selections may require 48-hour advance notice.
                    </p>
                    <p className="mb-6">
                        Our culinary team is available for bespoke menu
                        development upon request.
                    </p>
                </div>

                {/* Dietary Note */}
                <div className="max-w-md text-center mb-12" style={{
                    fontFamily: '"Helvetica Neue", Helvetica, Arial, sans-serif',
                    fontSize: '0.7rem',
                    lineHeight: '1.6',
                    color: '#888',
                    letterSpacing: '0.02em'
                }}>
                    <p>
                        Vegetarian, vegan, gluten-free, and allergen-conscious
                        modifications are available. Please inform us of any
                        dietary requirements.
                    </p>
                </div>

                {/* Decorative Line */}
                <div className="w-24 h-px bg-black/20 mb-10" />

                {/* Contact Section */}
                <div className="text-center" style={{
                    fontFamily: '"Helvetica Neue", Helvetica, Arial, sans-serif'
                }}>
                    <h3 className="mb-4" style={{
                        fontSize: '0.9rem',
                        letterSpacing: '0.2em',
                        fontWeight: 500,
                        color: '#333'
                    }}>
                        INQUIRIES & RESERVATIONS
                    </h3>
                    <p style={{ fontSize: '0.8rem', color: '#666', marginBottom: '4px' }}>
                        events@nostrano.ca
                    </p>
                    <p style={{ fontSize: '0.8rem', color: '#666', marginBottom: '12px' }}>
                        +1 (416) 555-0123
                    </p>
                    <div style={{
                        fontSize: '0.7rem',
                        letterSpacing: '0.15em',
                        color: '#888',
                        marginTop: '16px'
                    }}>
                        <p className="mb-1">NOSTRANO.CA</p>
                        <p>@NOSTRANO.CATERING</p>
                    </div>
                </div>
            </div>
        </div>
    );
}
