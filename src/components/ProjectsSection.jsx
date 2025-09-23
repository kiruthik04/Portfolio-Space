import { useEffect, useRef, useState } from "react";

export const ProjectsSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const projects = [
    {
      title: "Cosmic Dashboard",
      description:
        "A next-generation analytics platform with real-time data visualization and AI-powered insights.",
      tech: ["React", "TypeScript", "D3.js", "Node.js"],
      status: "Live",
    },
    {
      title: "Neural Network Playground",
      description:
        "Interactive machine learning visualization tool for understanding deep learning concepts.",
      tech: ["Python", "TensorFlow", "React", "WebGL"],
      status: "Development",
    },
    {
      title: "Stellar API",
      description:
        "High-performance GraphQL API with microservices architecture and real-time subscriptions.",
      tech: ["GraphQL", "Docker", "PostgreSQL", "Redis"],
      status: "Live",
    },
  ];

  return (
    <section
      id="projects"
      ref={sectionRef}
      className="min-h-screen flex items-center justify-center py-20 relative"
    >
      {/* Section star indicator */}
      <div className="absolute top-10 left-1/2 transform -translate-x-1/2">
        <div className="w-4 h-4 bg-cosmic-pink rounded-full animate-twinkle-slow shadow-purple" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-8 h-8 border border-cosmic-pink/30 rounded-full animate-pulse" />
      </div>

      <div className="container mx-auto px-6">
        <div
          className={`transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <h2 className="font-space text-4xl md:text-6xl font-bold text-star-white mb-16 text-center tracking-wide">
            <span className="text-cosmic-pink">Projects</span>
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {projects.map((project, index) => (
              <div
                key={project.title}
                className={`group relative transition-all duration-700 ${
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                }`}
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="relative p-8 rounded-2xl border border-cosmic-blue/20 bg-card/30 backdrop-blur-sm hover:border-cosmic-pink/50 hover:shadow-purple transition-all duration-500 group-hover:transform group-hover:scale-105">
                  {/* Project status indicator */}
                  <div className="absolute top-4 right-4">
                    <div
                      className={`px-3 py-1 rounded-full text-xs font-body uppercase tracking-wide ${
                        project.status === "Live"
                          ? "bg-cosmic-blue/20 text-cosmic-blue border border-cosmic-blue/30"
                          : "bg-cosmic-purple/20 text-cosmic-purple border border-cosmic-purple/30"
                      }`}
                    >
                      {project.status}
                    </div>
                  </div>

                  <h3 className="font-space text-xl font-bold text-star-white mb-4 group-hover:text-cosmic-pink transition-colors">
                    {project.title}
                  </h3>

                  <p className="font-body text-cosmic-silver mb-6 leading-relaxed">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 text-xs font-body bg-muted/50 text-cosmic-silver rounded-full border border-cosmic-blue/20 hover:border-cosmic-blue/50 transition-colors"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <button className="font-body text-sm text-cosmic-blue hover:text-cosmic-pink transition-colors flex items-center group-hover:translate-x-1 transform duration-300">
                    View Project
                    <svg
                      className="w-4 h-4 ml-2"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </button>

                  {/* Hover glow effect */}
                  <div className="absolute inset-0 rounded-2xl bg-gradient-cosmic opacity-0 group-hover:opacity-10 transition-opacity duration-500 pointer-events-none" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
