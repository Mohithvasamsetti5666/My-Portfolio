import { useEffect, useRef } from 'react';
import { useTheme } from "@/components/theme-provider"; // Assuming you have a dark/light theme switch

const MatrixRain = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const { theme } = useTheme(); // You are switching between light and dark

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let width = window.innerWidth;
    let height = window.innerHeight;
    canvas.width = width;
    canvas.height = height;

    const fontSize = 16; // Good for mobile and desktop
    const columns = Math.floor(width / fontSize);
    const drops = Array(columns).fill(1);

    const characters = '01'; // Minimal for Matrix effect (can add more if you want)

    const createGradient = () => {
      const gradient = ctx.createLinearGradient(0, 0, width, height);
      if (theme === 'light') {
        gradient.addColorStop(0, 'rgba(0, 100, 0, 0.7)');
        gradient.addColorStop(1, 'rgba(0, 150, 0, 0.8)');
      } else {
        gradient.addColorStop(0, 'rgba(0, 255, 0, 0.7)');
        gradient.addColorStop(1, 'rgba(0, 200, 0, 0.9)');
      }
      return gradient;
    };

    const draw = () => {
      // Background fading
      ctx.fillStyle = theme === 'light'
        ? 'rgba(255, 255, 255, 0.1)'
        : 'rgba(0, 0, 0, 0.1)';
      ctx.fillRect(0, 0, width, height);

      ctx.fillStyle = createGradient();
      ctx.font = `${fontSize}px monospace`;

      for (let i = 0; i < drops.length; i++) {
        const text = characters.charAt(Math.floor(Math.random() * characters.length));
        ctx.fillText(text, i * fontSize, drops[i] * fontSize);

        if (drops[i] * fontSize > height && Math.random() > 0.975) {
          drops[i] = 0;
        }
        drops[i]++;
      }
    };

    const intervalId = setInterval(draw, 30); // Smooth 30ms for mobile and desktop

    const handleResize = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width;
      canvas.height = height;
      const newColumns = Math.floor(width / fontSize);
      drops.length = newColumns;
      drops.fill(1, 0, newColumns); // Properly fill after resize
    };

    window.addEventListener('resize', handleResize);

    return () => {
      clearInterval(intervalId);
      window.removeEventListener('resize', handleResize);
    };
  }, [theme]);

  // Adjust background faint opacity based on theme
  const opacityClass = theme === 'light' ? 'opacity-20' : 'opacity-10';

  return (
    <canvas
      ref={canvasRef}
      className={`fixed top-0 left-0 w-full h-full ${opacityClass} z-0 pointer-events-none`}
    />
  );
};

export default MatrixRain;
