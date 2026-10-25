import baseConfig from "@v1/ui/tailwind.config";
import type { Config } from "tailwindcss";

export default {
  content: ["./src/**/*.{ts,tsx}", "../../packages/ui/src/**/*.{ts,tsx}"],
  presets: [baseConfig],
  theme: {
    extend: {
      animation: {
        "mixpad-marquee": "mixpad-marquee 24s linear infinite",
        "bubble-ripple": "bubble-ripple 4s linear infinite",
        "bubble-ripple-wide": "bubble-ripple-wide 4s linear infinite",
        "tap-ripple": "tap-ripple 2s ease 0.2s infinite",
        "gradient-drift": "gradient-drift 5s ease-in-out infinite forwards",
      },
      colors: {
        orvibo: {
          bg: "#f0f2f5",
          fg: "#111111",
          link: "#0d7fef",
          "link-hover": "#359ffc",
          "link-active": "#005ec9",
          header: "#000000",
        },
      },
      fontFamily: {
        orvibo: [
          "var(--font-inter)",
          "PingFang SC",
          "Helvetica",
          "Microsoft YaHei",
          "sans-serif",
        ],
      },
      keyframes: {
        "mixpad-marquee": {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
        // Voice rings pulsing around a product (MixPad Elf).
        "bubble-ripple": {
          "0%": { transform: "scale(1)" },
          "50%": { opacity: "0.5", transform: "scale(1.45)" },
          "75%": { opacity: "0.3", transform: "scale(1.9)" },
          "100%": { opacity: "0.2", transform: "scale(2)" },
        },
        "bubble-ripple-wide": {
          "0%": { transform: "scale(1)" },
          "50%": { opacity: "0.9", transform: "scale(1.6)" },
          "75%": { opacity: "0.65", transform: "scale(3.2)" },
          "100%": { opacity: "0.2", transform: "scale(6)" },
        },
        // Rings spreading from a key being pressed (MixSwitch).
        "tap-ripple": {
          "0%": { transform: "scale(0)" },
          "50%": { opacity: "1" },
          "100%": { opacity: "0", transform: "scale(1)" },
        },
        // Gradient text whose colors drift sideways and back (orvibo.com's
        // dancingColors); set the distance with `[--drift:-5.2rem]`.
        "gradient-drift": {
          "50%": { backgroundPosition: "var(--drift)" },
        },
      },
      maxWidth: {
        orvibo: "1760px",
      },
      spacing: {
        "orvibo-header": "130px",
      },
    },
  },
} satisfies Config;
