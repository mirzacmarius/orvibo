/** Homepage-critical assets that must resolve on R2 in production. */
const SAMPLE_PATHS = [
  "/guanwang_second/front/images/2020/nav/logo-38c948b4cf.svg",
  "/guanwang_second/front/images/new/products/mixstation/logo_home-1a3457a96c.png",
  "/guanwang_second/front/images/homeai4/icon_home_logo-7a0f0510b9.svg",
  "/guanwang_second/front/images/new/products/mixstation/sec1-7a1373cc0f.png",
  "/guanwang_second/front/images/new/products/mixstation/MixStation-12a33eaf83.png",
  "/guanwang_second/front/images/new/products/mixstation/sec2-3d7b16e746.png",
  "/guanwang_second/front/images/new/products/mixstation/sec3-8b32066edb.png",
  "/guanwang_second/front/images/new/products/mixstation/sec4-9b00bfc477.png",
  "/guanwang_second/front/images/new/products/mixstation/sec5-4518e87583.png",
  "/guanwang_second/front/images/new/products/mixstation/sec6-3e7aebf1a6.png",
  "/guanwang_second/front/images/new/products/mixstation/sec7-d416a0ab3a.png",
  "/guanwang_second/front/images/new/products/mixstation/sec8-41a029f7dc.png",
  "/guanwang_second/front/images/new/products/mixstation/sec9-84c88c36ea.png",
  "/guanwang_second/front/images/new/products/mixstation/sec10-e9e4e6e191.png",
  "/guanwang_second/front/images/new/products/mixstation/sec11-fe0c16d3ec.png",
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
