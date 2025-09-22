"use client";

import { useEffect, useRef } from "react";

export const Starfield = () => {
    const canvasRef = useRef(null);
    const starsRef = useRef([]);
    const animationRef = useRef();

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext("2d");
        if (!ctx) return;

        const resizeCanvas = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        };

        const createStars = () => {
            const stars = [];
            const numStars = Math.floor((window.innerWidth * window.innerHeight) / 8000);

            for (let i = 0; i < numStars; i++) {
                stars.push({
                    x: Math.random() * canvas.width,
                    y: Math.random() * canvas.height,
                    size: Math.random() * 2 + 0.5,
                    opacity: Math.random() * 0.8 + 0.2,
                    twinkleSpeed: Math.random() * 0.02 + 0.01,
                });
            }

            starsRef.current = stars;
        };

        const animateStars = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height);

            starsRef.current.forEach((star) => {
                // Update star opacity for twinkling effect
                star.opacity += Math.sin(Date.now() * star.twinkleSpeed) * 0.01;
                star.opacity = Math.max(0.1, Math.min(1, star.opacity));

                // Draw star
                ctx.beginPath();
                ctx.arc(star.x, star.y, star.size, 0, Math.PI * 2);
                ctx.fillStyle = `rgba(255, 255, 255, ${star.opacity})`;
                ctx.fill();

                // Add subtle glow effect for larger stars
                if (star.size > 1.5) {
                    ctx.beginPath();
                    ctx.arc(star.x, star.y, star.size * 2, 0, Math.PI * 2);
                    ctx.fillStyle = `rgba(135, 206, 250, ${star.opacity * 0.3})`;
                    ctx.fill();
                }
            });

            animationRef.current = requestAnimationFrame(animateStars);
        };

        resizeCanvas();
        createStars();
        animateStars();

        const handleResize = () => {
            resizeCanvas();
            createStars();
        };

        window.addEventListener("resize", handleResize);

        return () => {
            window.removeEventListener("resize", handleResize);
            if (animationRef.current) {
                cancelAnimationFrame(animationRef.current);
            }
        };
    }, []);

    return (
        <canvas
            ref={canvasRef}
            className="fixed inset-0 z-0 pointer-events-none"
            style={{ background: "black" }}
        />
    );
};
