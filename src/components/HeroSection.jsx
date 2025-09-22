import { useEffect, useState } from 'react';

export const HeroSection = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => setIsVisible(true), 500);
        return () => clearTimeout(timer);
    }, []);

    return (
        <section
            id="home"
            className="min-h-screen flex items-center justify-center relative overflow-hidden"
        >
            {/* Floating particles */}
            <div className="absolute inset-0 z-10">
                {[...Array(20)].map((_, i) => (
                    <div
                        key={i}
                        className="absolute w-1 h-1 bg-cosmic-blue rounded-full opacity-30"
                        style={{
                            left: `${Math.random() * 100}%`,
                            top: `${Math.random() * 100}%`,
                            animation: `float ${6 + Math.random() * 4}s infinite`,
                            animationDelay: `${Math.random() * 6}s`,
                        }}
                    />
                ))}
            </div>

            <div className="text-center z-20 relative px-6">
                <div
                    className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                        }`}
                >
                    <h1
                        className="font-space text-6xl md:text-8xl lg:text-9xl font-bold mb-6 tracking-wide"
                        style={{
                            background: 'linear-gradient(90deg, #7f5af0, #0ea5e9, #14b8a6)',
                            WebkitBackgroundClip: 'text',
                            WebkitTextFillColor: 'transparent',
                        }}
                    >
                        Kiruthik Varshan
                    </h1>

                    <div className="relative inline-block mt-2">
                        <h2 className="font-body text-xl md:text-2xl lg:text-3xl text-cosmic-silver font-light tracking-[0.3em] uppercase">
                            Web Developer
                        </h2>
                        <div
                            className="absolute bottom-0 left-0 h-0.5"
                            style={{
                                width: '100%',
                                background: 'linear-gradient(90deg, #7f5af0, #0ea5e9)',
                            }}
                        />
                    </div>

                </div>
            </div>

            {/* Background gradient overlay */}
            <div
                className="absolute inset-0"
                style={{ background: 'radial-gradient(circle, #000000, #0b0b0b)', opacity: 0.5 }}
            />
        </section>
    );
};
