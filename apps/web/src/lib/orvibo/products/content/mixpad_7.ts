export const mixpad7ImageBase = "/guanwang_second/front/images/products/mixpad_7";

export const mixpad7Videos = {
  hero: "/orvibo/videos/mixpad7_banner3.mp4",
  sec2: "/orvibo/videos/mixpad_7_quanmian_2.mp4",
  sec3: "/orvibo/videos/mixpad7_jinbian.mp4",
  sec7: "/orvibo/videos/mixpad7_video.mp4",
  sec8: "/orvibo/videos/mixpad7_music3.mp4",
} as const;

export interface Mixpad7SpecRow {
  label: string;
  value: string;
}

export const mixpad7Specifications: Mixpad7SpecRow[] = [
  { label: "Brand", value: "ORVIBO" },
  { label: "Model", value: "V80X" },
  { label: "Category", value: "MixPad" },
  { label: "Processor", value: "Quad-core 64-bit Cortex-A55, 1.8 GHz" },
  { label: "Memory", value: "2 GB + 8 GB" },
  { label: "OS", value: "Home AI OS" },
  { label: "Display", value: '7" IPS touchscreen, 1024 × 600' },
  { label: "Microphone", value: "Dual-microphone array" },
  { label: "Connectivity", value: "Wi-Fi / Bluetooth / Zigbee 3.0" },
  { label: "Input voltage", value: "AC 100–240 V, 50/60 Hz (live + neutral)" },
  { label: "Load types", value: "Incandescent, LED, CFL, and similar" },
  { label: "Environment", value: "0–45 °C, ≤ 90% RH" },
  { label: "Ambient light sensor", value: "Supported" },
  { label: "IR control", value: "Supported" },
  { label: "Dimensions", value: "177.2 × 111 × 11.2 mm" },
];
