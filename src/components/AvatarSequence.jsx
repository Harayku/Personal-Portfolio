import { useState, useEffect, useRef } from "react";

export default function AvatarSequence({ isDarkMode }) {
  const [currentFrame, setCurrentFrame] = useState(1);
  const animationRef = useRef(null);
  const targetFrame = isDarkMode ? 2 : 1;

  // Preload all frames on mount to prevent flickering
  useEffect(() => {
    for (let i = 1; i <= 2; i++) {
      const img = new Image();
      img.src = `/avatars/avatar${i}.png`;
    }
  }, []);

  // Sync Tailwind dark mode class when darkMode changes
  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [isDarkMode]);

  // Handle frame-by-frame animation using requestAnimationFrame
  useEffect(() => {
    const animate = () => {
      setCurrentFrame((prevFrame) => {
        if (prevFrame < targetFrame) {
          animationRef.current = requestAnimationFrame(animate);
          return prevFrame + 1;
        } else if (prevFrame > targetFrame) {
          animationRef.current = requestAnimationFrame(animate);
          return prevFrame - 1;
        } else {
          return prevFrame;
        }
      });
    };

    // Cancel any existing animation frame before starting a new one
    if (animationRef.current) {
      cancelAnimationFrame(animationRef.current);
    }

    animationRef.current = requestAnimationFrame(animate);

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [targetFrame]);

  return (
    <div className="w-full h-full pointer-events-none">
      <img
        alt="Avatar"
        fetchpriority="high"
        decoding="async"
        className="rounded-lg w-40 h-40 md:w-40 md:h-40 object-cover flex-shrink-0"
        src={`/avatars/avatar${currentFrame}.png`}
      />
    </div>
  );
}
