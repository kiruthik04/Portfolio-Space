import { useEffect, useRef, useState } from 'react';

export const AboutSection = () => {
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

  return (
    <section
      id="about"
      ref={sectionRef}
      className="min-h-screen flex items-center justify-center py-20 relative"
    >
      {/* Section star indicator */}
      <div className="absolute top-10 left-1/2 transform -translate-x-1/2">
        <div className="w-4 h-4 bg-cosmic-purple rounded-full animate-[twinkle_2s_infinite] shadow-purple" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-8 h-8 border border-cosmic-purple/30 rounded-full animate-pulse" />
      </div>

      <div className="container mx-auto px-6">
        <div
          className={`max-w-4xl mx-auto text-center transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <h2 className="font-space text-4xl md:text-6xl font-bold text-star-white mb-8 tracking-wide">
            About <span className="text-cosmic-purple">Me</span>
          </h2>

          <div className="space-y-6 text-cosmic-silver font-body text-lg md:text-xl leading-relaxed">
            <p
              className={`transition-all duration-700 animate-fade-in-up`}
              style={{ animationDelay: '0.2s' }}
            >
              I'm a passionate developer who loves crafting digital experiences that push the boundaries of what's possible. With a keen eye for design and a deep understanding of modern technologies, I bring ideas to life through clean, efficient code.
            </p>

            <p
              className={`transition-all duration-700 animate-fade-in-up`}
              style={{ animationDelay: '0.4s' }}
            >
              My journey in the digital cosmos spans across full-stack development, UI/UX design, and emerging technologies. I believe in creating solutions that are not just functional, but also beautiful and intuitive.
            </p>

            <p
              className={`transition-all duration-700 animate-fade-in-up`}
              style={{ animationDelay: '0.6s' }}
            >
              When I'm not coding, you can find me exploring the latest in tech, contributing to open source, or stargazing and drawing inspiration from the infinite possibilities of the universe.
            </p>
          </div>

          {/* Skills constellation */}
          <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8">
            {['React', 'TypeScript', 'Node.js', 'Python', 'AWS', 'GraphQL', 'Docker', 'AI/ML'].map((skill, index) => (
              <div
                key={skill}
                className={`group transition-all duration-500 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
                }`}
                style={{ animationDelay: `${0.8 + index * 0.1}s` }}
              >
                <div className="relative p-4 rounded-lg border border-cosmic-blue/20 bg-card/50 backdrop-blur-sm hover:border-cosmic-blue/50 hover:shadow-cosmic transition-all duration-300">
                  <span className="font-body text-sm text-cosmic-silver group-hover:text-star-white transition-colors">
                    {skill}
                  </span>
                  <div className="absolute top-0 right-0 w-2 h-2 bg-cosmic-blue rounded-full animate-[twinkle-fast_1s_infinite] opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
