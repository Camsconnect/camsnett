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
      fontFamily: {
        sans: ['Montserrat', 'sans-serif'], // Set Montserrat as default sans font
      },
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
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
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        sidebar: {
          DEFAULT: "hsl(var(--sidebar-background))",
          foreground: "hsl(var(--sidebar-foreground))",
          primary: "hsl(var(--sidebar-primary))",
          "primary-foreground": "hsl(var(--sidebar-primary-foreground))",
          accent: "hsl(var(--sidebar-accent))",
          "accent-foreground": "hsl(var(--sidebar-accent-foreground))",
          border: "hsl(var(--sidebar-border))",
          ring: "hsl(var(--sidebar-ring))",
        },
        menubar: {
          DEFAULT: "hsl(var(--menubar-background))", // Dark charcoal base
          foreground: "hsl(var(--menubar-foreground))", // Light text for dark mode
          border: "hsl(var(--menubar-border))", // White base for border
        },
        brand: {
          50: '#e9f3f2',
          100: '#d3e7e5',
          200: '#a8d0cb',
          300: '#7cbab1',
          400: '#51a598',
          500: '#388c7e',
          600: '#2f7469',
          700: '#225751',
          800: '#1e4a45',
          900: '#193d39',
          950: '#0f2523',
          neon: '#225751',
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: {
            height: "0",
          },
          to: {
            height: "var(--radix-accordion-content-height)",
          },
        },
        "accordion-up": {
          from: {
            height: "var(--radix-accordion-content-height)",
          },
          to: {
            height: "0",
          },
        },
        "breathing-glow": {
          "0%, 100%": {
            boxShadow: "0 0 10px hsl(var(--sidebar-primary)), 0 0 15px hsl(var(--sidebar-primary))",
          },
          "50%": {
            boxShadow: "0 0 25px hsl(var(--sidebar-primary)), 0 0 40px hsl(var(--sidebar-primary))",
          },
        },
        "infinite-scroll": {
          from: { transform: "translateX(0)" },
          to: { transform: "translateX(-100%)" },
        },
        "breathing-dot": {
          "0%, 100%": { transform: "scale(1)", opacity: "1" },
          "50%": { transform: "scale(1.25)", opacity: "0.75" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "breathing-glow": "breathing-glow 4s ease-in-out infinite",
        "infinite-scroll": "infinite-scroll 40s linear infinite",
        "breathing-dot": "breathing-dot 2s cubic-bezier(0.4, 0, 0.6, 1) infinite",
      },
      backdropBlur: {
        '3xl': '30px', // Custom strong blur
      },
      boxShadow: {
        'outer-glass': '0 10px 40px rgba(0,0,0,0.35)', // Soft outer drop shadow
        'inner-glass-bottom': 'inset 0 2px 14px rgba(0,0,0,0.35)', // Inner shadow for depth
        'inner-glass-stroke': 'inset 0 0 0 1px rgba(255,255,255,0.08)', // Subtle inner white stroke
        'cta-inner-glow': 'inset 0 0 8px rgba(34, 87, 81, 0.6)', // CTA inner glow
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;