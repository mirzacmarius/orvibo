import baseConfig from "@v1/ui/tailwind.config";
import type { Config } from "tailwindcss";

export default {
  content: ["./src/**/*.{ts,tsx}", "../../packages/ui/src/**/*.{ts,tsx}"],
  presets: [baseConfig],
  theme: {
    extend: {
      animation: {
        "mixpad-marquee": "mixpad-marquee 24s linear infinite",
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
        orvibo: ["PingFang SC", "Helvetica", "Microsoft YaHei", "sans-serif"],
      },
      keyframes: {
        "mixpad-marquee": {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
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
