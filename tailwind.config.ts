import type { Config } from "tailwindcss";

const config = {
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
      padding: "75px",
      screens: {
        xl: "1280px",
        "2xl": "1280px",
      },
    },
    extend: {
      boxShadow: {
        button: "0px 10px 20px 0px #C6A66470", // gold shadow
        indicator: "0px 10px 20px 0px #E5D3B370", // beige shadow
      },
      colors: {
        white: "#FFFFFF",
        black: "#000000",

        // Netral & latar
        border: "#EDECF2",
        "gray-light": "#F5F5F5",
        "gray-cool": "#B0BEC5",
        placeholder: "#7D7B91",
        subtitle: "#6B7280",

        // Warna utama (disesuaikan dengan logo beauty clinic)
        primary: {
          DEFAULT: "#C6A664", // gold
          dark: "#8C6A3C", // dark gold
          foreground: "#FFFFFF",
        },
        secondary: {
          DEFAULT: "#E5D3B3", // warm beige
          dark: "#D4A5A5", // rose nude
          foreground: "#3C3C3C", // charcoal
        },

        // Warna aksen
        accent: {
          DEFAULT: "#D4A5A5", // rose nude
          hover: "#C18B8B",
          foreground: "#FFFFFF",
        },
        coral: "#FFA69E", // soft pink

        // Elemen tambahan
        info: "#345995", // navy (boleh disesuaikan jika kurang cocok)
        success: "#2ECC71",
        error: "#E74C3C",

        // Tambahan warna elegan
        gold: "#C6A664",
        "dark-gold": "#8C6A3C",
        ivory: "#F9F6F0",
        "warm-beige": "#E5D3B3",
        "rose-nude": "#D4A5A5",
        charcoal: "#3C3C3C",

        // Backgrounds
        background: "#F9F6F0", // ivory
        "gray-section": "#F5F5F5",

        // Tailwind variables (optional)
        ring: "hsl(var(--ring))",
        foreground: "hsl(var(--foreground))",
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        destructive: {
          DEFAULT: "#E74C3C",
          foreground: "#FFFFFF",
        },
        separator: {
          DEFAULT: "#C0D1D9",
          foreground: "#696481",
        },
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;

export default config;
