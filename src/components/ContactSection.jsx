import { useEffect, useRef, useState } from "react";

export const ContactSection = () => {
    const [isVisible, setIsVisible] = useState(false);
    const sectionRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                }
            },
            { threshold: 0.3 }
        );

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        return () => observer.disconnect();
    }, []);

    const contactLinks = [
        {
            name: "Email",
            value: "kiruthicksathy@gmail.com",
            href: "mailto:kiruthicksathy@gmail.com",
            icon: (
                <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                </svg>
            ),
        },
        {
            name: "GitHub",
            value: "github.com/kiruthik04",
            href: "https://github.com/kiruthik04",
            icon: (
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                </svg>
            ),
        },
        {
            name: "LinkedIn",
            value: "linkedin.com/in/kiruthik04",
            href: "https://linkedin.com/in/kiruthik04",
            icon: (
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
            ),
        },
        {
            name: "Instagram",
            value: "instagram.com/kv_null_/",
            href: "https://instagram.com/kv_null_/",
            icon: (
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M7.75 2h8.5A5.75 5.75 0 0122 7.75v8.5A5.75 5.75 0 0116.25 22h-8.5A5.75 5.75 0 012 16.25v-8.5A5.75 5.75 0 017.75 2zm0 1.5A4.25 4.25 0 003.5 7.75v8.5A4.25 4.25 0 007.75 20.5h8.5a4.25 4.25 0 004.25-4.25v-8.5A4.25 4.25 0 0016.25 3.5h-8.5zm4.25 3.25a5.25 5.25 0 110 10.5 5.25 5.25 0 010-10.5zm0 1.5a3.75 3.75 0 100 7.5 3.75 3.75 0 000-7.5zm5.5-.88a1.13 1.13 0 110 2.26 1.13 1.13 0 010-2.26z" />
                </svg>
            ),
        },
    ];

    return (
        <section
            id="contact"
            ref={sectionRef}
            className="min-h-screen flex items-center justify-center py-20 relative"
        >
            {/* Section star indicator */}
            <div className="absolute top-10 left-1/2 transform -translate-x-1/2">
                <div className="w-4 h-4 bg-cosmic-silver rounded-full animate-twinkle shadow-glow" />
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-8 h-8 border border-cosmic-silver/30 rounded-full animate-pulse" />
            </div>

            <div className="container mx-auto px-6">
                <div
                    className={`max-w-4xl mx-auto text-center transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                        }`}
                >
                    <h2 className="font-space text-4xl md:text-6xl font-bold text-star-white mb-8 tracking-wide">
                        Let's <span className="text-cosmic-silver">Connect</span>
                    </h2>

                    <p className="font-body text-xl text-cosmic-silver mb-16 leading-relaxed">
                        Ready to embark on a journey through the digital cosmos? Let's create
                        something extraordinary together.
                    </p>

                    <div className="grid md:grid-cols-2 gap-8 mb-16">
                        {contactLinks.map((link, index) => (
                            <a
                                key={link.name}
                                href={link.href}
                                className={`group relative p-8 rounded-2xl border border-cosmic-blue/20 bg-card/30 backdrop-blur-sm hover:border-cosmic-blue/50 hover:shadow-cosmic transition-all duration-500 hover:transform hover:scale-105 ${isVisible
                                        ? "opacity-100 translate-y-0"
                                        : "opacity-0 translate-y-10"
                                    }`}
                                style={{ animationDelay: `${index * 0.1}s` }}
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <div className="flex items-center justify-center mb-4">
                                    <div className="p-3 rounded-full bg-cosmic-blue/20 text-cosmic-blue group-hover:bg-cosmic-blue group-hover:text-star-white transition-all duration-300">
                                        {link.icon}
                                    </div>
                                </div>

                                <h3 className="font-space text-lg font-bold text-star-white mb-2 group-hover:text-cosmic-blue transition-colors">
                                    {link.name}
                                </h3>

                                <p className="font-body text-cosmic-silver group-hover:text-star-white transition-colors">
                                    {link.value}
                                </p>

                                {/* Hover glow effect */}
                                <div className="absolute inset-0 rounded-2xl bg-gradient-cosmic opacity-0 group-hover:opacity-10 transition-opacity duration-500 pointer-events-none" />
                            </a>
                        ))}
                    </div>

                    {/* Call to action */}
                    <div
                        className={`transition-all duration-1000 delay-500 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
                            }`}
                    >
                        <p className="font-body text-cosmic-silver mb-8">
                            "The universe is not only stranger than we imagine, it is stranger
                            than we can imagine."
                            <br />
                            <span className="text-cosmic-blue">— J.B.S. Haldane</span>
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};
