"use client";
import { useEffect } from "react";

export default function FlameMeteorCursor() {
    useEffect(() => {
        // Hide default cursor
        document.body.style.cursor = "none";

        // Create main flame cursor
        const cursor = document.createElement("div");
        cursor.id = "flame-cursor";
        document.body.appendChild(cursor);

        // Inject styles
        const style = document.createElement("style");
        style.innerHTML = `
      /* Main flame meteor cursor */
      #flame-cursor {
        position: fixed;
        top: 0;
        left: 0;
        width: 22px;
        height: 22px;
        border-radius: 50%;
        pointer-events: none;
        transform: translate(-50%, -50%);
        background: radial-gradient(circle at center, #ffea00 20%, #ff4500 60%, transparent 80%);
        box-shadow: 0 0 10px #ffea00, 0 0 25px #ff4500, 0 0 40px #ff6347;
        animation: flicker 0.25s infinite alternate;
        z-index: 9999;
      }

      /* Flicker effect */
      @keyframes flicker {
        from {
          transform: translate(-50%, -50%) scale(1);
          opacity: 1;
        }
        to {
          transform: translate(-50%, -50%) scale(1.2);
          opacity: 0.85;
        }
      }

      /* Flame trail meteors */
      .meteor {
        position: fixed;
        width: 10px;
        height: 10px;
        border-radius: 50%;
        background: radial-gradient(circle, #ffae00, #ff4500, transparent);
        box-shadow: 0 0 8px #ffae00, 0 0 15px #ff4500, 0 0 30px #ff6347;
        pointer-events: none;
        transform: translate(-50%, -50%) rotate(45deg);
        animation: fall 0.8s linear forwards;
      }

      /* Trail fall animation */
      @keyframes fall {
        0% {
          opacity: 1;
          transform: translate(-50%, -50%) scale(1) rotate(45deg);
        }
        100% {
          opacity: 0;
          transform: translate(20px, 60px) scale(0.5) rotate(45deg);
        }
      }
    `;
        document.head.appendChild(style);

        // Track mouse movement
        const handleMouseMove = (e) => {
            // Move main flame cursor
            cursor.style.left = `${e.clientX}px`;
            cursor.style.top = `${e.clientY}px`;

            // Create trail meteor
            const meteor = document.createElement("div");
            meteor.className = "meteor";
            meteor.style.left = `${e.clientX}px`;
            meteor.style.top = `${e.clientY}px`;
            document.body.appendChild(meteor);

            // Remove after animation
            setTimeout(() => meteor.remove(), 800);
        };

        window.addEventListener("mousemove", handleMouseMove);

        return () => {
            window.removeEventListener("mousemove", handleMouseMove);
            cursor.remove();
            style.remove();
            document.body.style.cursor = "auto"; // restore normal
        };
    }, []);

    return null;
}
