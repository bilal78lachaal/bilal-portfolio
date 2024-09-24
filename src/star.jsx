import React, { useEffect } from "react";

function StarCursorEffect() {
  useEffect(() => {
    const body = document.body;

    function getRandomSize() {
      return Math.random() * 10 + 5;
    }

    const handleMouseMove = (e) => {
      const star = document.createElement("div");
      const size = getRandomSize();
      star.classList.add("star");
      star.style.left = `${e.clientX}px`;
      star.style.top = `${e.clientY}px`;
      star.style.width = `${size}px`;
      star.style.height = `${size}px`;
      star.style.position = "absolute";
      star.style.borderRadius = "50%";
      star.style.pointerEvents = "none";
      star.style.animation = "sparkle 1s linear infinite";
      star.style.background = "rgba(255, 255, 255, 0.5)";
      star.style.boxShadow = `
        0 0 10px rgba(255, 255, 255, 0.5),
        0 0 20px rgba(255, 255, 255, 0.4),
        0 0 30px rgba(255, 255, 255, 0.3)
      `;
      body.appendChild(star);

      setTimeout(() => {
        star.remove();
      }, 1000);
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div
      style={{
        height: "100vh",
        background: "#000",
        overflow: "hidden",
        cursor: "none",
      }}
    ></div>
  );
}

export default StarCursorEffect;
