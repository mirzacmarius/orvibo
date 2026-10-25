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
        "warn-pulse": "warn-pulse 3s ease-out infinite",
        "nudge-left": "nudge-left 1.6s linear infinite",
        "nudge-right": "nudge-right 1.6s linear infinite",
        "caption-ticker": "caption-ticker 6s ease infinite",
        "spotlight-dim": "spotlight-dim 6s ease infinite",
        "spotlight-caption": "spotlight-caption 6s ease infinite",
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
        // A ring swelling out of a dot and fading (orvibo.com's warn: the
        // Super Smart curtain's motors).
        "warn-pulse": {
          "0%": { opacity: "0", transform: "scale(0)" },
          "25%": { opacity: "0.1", transform: "scale(0)" },
          "50%": { opacity: "0.3", transform: "scale(0.1)" },
          "75%": { opacity: "0.5", transform: "scale(0.5)" },
          "100%": { opacity: "0", transform: "scale(1)" },
        },
        // An arrow gliding away and fading, as a curtain moves (move and
        // moveRight).
        "nudge-left": {
          "0%": { opacity: "0", transform: "translateX(0)" },
          "50%": { opacity: "1", transform: "translateX(-0.5rem)" },
          "100%": { opacity: "0", transform: "translateX(-1rem)" },
        },
        "nudge-right": {
          "0%": { opacity: "0", transform: "translateX(0)" },
          "50%": { opacity: "1", transform: "translateX(0.5rem)" },
          "100%": { opacity: "0", transform: "translateX(1rem)" },
        },
        // Four one-line captions scrolling up a line at a time, the last a
        // copy of the first so the loop is seamless (orvibo.com's mymove).
        "caption-ticker": {
          "0%": { transform: "translateY(0)" },
          "13.333%, 33.333%": { transform: "translateY(-25%)" },
          "46.667%, 66.667%": { transform: "translateY(-50%)" },
          "80%, 100%": { transform: "translateY(-75%)" },
        },
        // Three photos taking turns in the spotlight, one third of the
        // cycle each (myshow and myhide): the shade over the others and
        // the caption on the lit one. Offset the second and third photos
        // with `[animation-delay:-4s]` and `[animation-delay:-2s]`.
        "spotlight-dim": {
          "0%": { opacity: "0.4" },
          "13.333%, 33.333%": { opacity: "0" },
          "46.667%, 100%": { opacity: "0.4" },
        },
        "spotlight-caption": {
          "0%": { opacity: "0" },
          "13.333%, 33.333%": { opacity: "1" },
          "46.667%, 100%": { opacity: "0" },
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
