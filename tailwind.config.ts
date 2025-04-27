
import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "#3B82F6",
          foreground: "hsl(var(--primary-foreground))",
          gradient: "linear-gradient(90deg, #3B82F6, #EF4444)"
        },
        secondary: {
          DEFAULT: "#EF4444",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        card: {
          DEFAULT: "rgba(255, 255, 255, 0.8)",
          foreground: "hsl(var(--card-foreground))",
          dark: "rgba(13, 13, 30, 0.7)"
        },
        // Red/blue team specific colors
        redteam: {
          DEFAULT: "#EF4444", // Red 600 in Tailwind
          light: "#FCA5A5", // Red 300
          dark: "#991B1B", // Red 800
          muted: "rgba(239, 68, 68, 0.2)" // Red 600 with opacity
        },
        blueteam: {
          DEFAULT: "#3B82F6", // Blue 600 in Tailwind
          light: "#93C5FD", // Blue 300
          dark: "#1E40AF", // Blue 800
          muted: "rgba(59, 130, 246, 0.2)" // Blue 600 with opacity
        }
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)'
      },
      keyframes: {
        'accordion-down': {
          from: {
            height: '0'
          },
          to: {
            height: 'var(--radix-accordion-content-height)'
          }
        },
        'accordion-up': {
          from: {
            height: 'var(--radix-accordion-content-height)'
          },
          to: {
            height: '0'
          }
        },
        'pulse-glow': {
          '0%, 100%': {
            opacity: '0.6',
            boxShadow: '0 0 5px 2px rgba(59, 130, 246, 0.3)'
          },
          '50%': {
            opacity: '1',
            boxShadow: '0 0 15px 5px rgba(59, 130, 246, 0.6)'
          }
        },
        'border-glow': {
          '0%, 100%': {
            boxShadow: '0 0 5px 2px rgba(59, 130, 246, 0.2)'
          },
          '50%': {
            boxShadow: '0 0 15px 5px rgba(59, 130, 246, 0.5)'
          }
        },
        'text-shimmer': {
          '0%': {
            backgroundPosition: '-200% 0'
          },
          '100%': {
            backgroundPosition: '200% 0'
          }
        },
        'section-appear': {
          '0%': {
            opacity: '0',
            transform: 'translateY(20px)'
          },
          '100%': {
            opacity: '1',
            transform: 'translateY(0)'
          }
        }
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
        'pulse-glow': 'pulse-glow 2s ease-in-out infinite',
        'border-glow': 'border-glow 3s ease-in-out infinite',
        'text-shimmer': 'text-shimmer 3s ease-in-out infinite',
        'section-appear': 'section-appear 0.8s ease-out forwards'
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'cyber-gradient': 'linear-gradient(90deg, rgba(59,130,246,0.2) 0%, rgba(239,68,68,0.2) 100%)',
        'red-team-gradient': 'linear-gradient(90deg, rgba(239,68,68,0.1) 0%, rgba(239,68,68,0.05) 100%)',
        'blue-team-gradient': 'linear-gradient(90deg, rgba(59,130,246,0.1) 0%, rgba(59,130,246,0.05) 100%)'
      }
    }
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
