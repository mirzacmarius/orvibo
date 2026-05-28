/** Homepage-critical assets that must resolve on R2 in production. */
const SAMPLE_PATHS = [
  "/guanwang_second/front/images/2020/nav/logo-38c948b4cf.svg",
  "/orvibo/videos/mixstation_1.mp4",
  "/orvibo/videos/mixStation.mp4",
  "/orvibo/videos/orvibo_quanzhai_bg.mp4",
  "/orvibo/videos/orvibo_homeai4_all_banner2.mp4",
  "/orvibo/videos/orvibo_homeai4_all.mp4",
  "/orvibo/videos/orvibo_store_pc.mp4",
  "/orvibo/videos/orvibo_store_all.mp4",
  "/orvibo/videos/orvibo_tvc_matter.mp4",
  "/orvibo/videos/orvibo_2022_quanwu.mp4",
  "/orvibo/videos/conference2023_2.mp4",
  "/8f4239b1vodgzp1251222210/3a80b318387702293679134921/0lwcQ5V5mQEA.mp4",
  "/8f4239b1vodgzp1251222210/e0a1ec6a5285890810435126378/jSP056nNeWMA.mp4",
];

async function main() {
  const base = process.env.NEXT_PUBLIC_ORVIBO_ASSETS_URL?.replace(/\/$/, "");
  if (!base) {
    console.error("Missing NEXT_PUBLIC_ORVIBO_ASSETS_URL");
    process.exit(1);
  }

  let ok = 0;
  let failed = 0;

  for (const assetPath of SAMPLE_PATHS) {
    const url = `${base}${assetPath}`;
    try {
      const res = await fetch(url, { method: "HEAD" });
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      console.log(`OK ${assetPath} (${res.headers.get("content-type")})`);
      ok += 1;
    } catch (err) {
      console.error(`FAIL ${assetPath}:`, err);
      failed += 1;
    }
  }

  console.log(JSON.stringify({ base, ok, failed, total: SAMPLE_PATHS.length }, null, 2));
  if (failed > 0) process.exit(1);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
