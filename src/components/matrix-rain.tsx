
import { useEffect, useRef } from 'react';
import { useTheme } from "@/components/theme-provider";

const MatrixRain = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const { theme } = useTheme();
  
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const fontSize = 16; // Increased font size for better visibility
    const columns = Math.floor(canvas.width / fontSize);
    
    const drops: number[] = Array(columns).fill(1);
    
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789$+-*/=%"\'#&_(),.;:?!\\|{}<>[]^~';
    
    const createGradient = () => {
      const gradient = ctx.createLinearGradient(0, 0, canvas.width, canvas.height);
      if (theme === 'light') {
        gradient.addColorStop(0, 'rgba(0, 100, 0, 0.6)'); // Increased opacity
        gradient.addColorStop(1, 'rgba(0, 130, 0, 0.8)'); // Increased opacity
      } else {
        gradient.addColorStop(0, 'rgba(0, 255, 100, 0.5)'); // Increased opacity
        gradient.addColorStop(1, 'rgba(20, 230, 80, 0.7)'); // Increased opacity
      }
      return gradient;
    };
    
    const draw = () => {
      // Reduced opacity of background fill
      if (theme === 'light') {
        ctx.fillStyle = 'rgba(255, 255, 255, 0.05)';
      } else {
        ctx.fillStyle = 'rgba(0, 0, 0, 0.02)';
      }
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      
      ctx.fillStyle = createGradient();
      ctx.font = `${fontSize}px monospace`;
      
      for (let i = 0; i < drops.length; i++) {
        const text = characters.charAt(Math.floor(Math.random() * characters.length));
        ctx.fillText(text, i * fontSize, drops[i] * fontSize);
        
        if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
          drops[i] = 0;
        }
        drops[i]++;
      }
    };
    
    const intervalId = setInterval(draw, 35); // Slightly reduced interval for smoother animation
    
    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      const newColumns = Math.floor(canvas.width / fontSize);
      drops.length = newColumns;
      drops.fill(1, columns);
    };
    
    window.addEventListener('resize', handleResize);
    
    return () => {
      clearInterval(intervalId);
      window.removeEventListener('resize', handleResize);
    };
  }, [theme]);

  const opacityClass = theme === 'light' ? 'opacity-20' : 'opacity-15';

  return (
    <canvas
      ref={canvasRef}
      className={`fixed top-0 left-0 w-full h-full ${opacityClass} z-0 pointer-events-none`}
    />
  );
};

export default MatrixRain;
