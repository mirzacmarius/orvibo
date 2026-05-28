const SAMPLE_PATHS = [
  "/guanwang_second/front/images/2020/nav/logo-38c948b4cf.svg",
  "/orvibo/videos/mixstation_1.mp4",
  "/orvibo/videos/conference2023_2.mp4",
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

  console.log(JSON.stringify({ base, ok, failed }, null, 2));
  if (failed > 0) process.exit(1);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
