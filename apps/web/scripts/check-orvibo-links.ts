type CheckResult = {
  url: string;
  status: number | "error";
  resolvedUrl?: string;
};

const USER_AGENT =
  "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/125 Safari/537.36";

const FALLBACK_HOSTS_BY_EXT: Record<string, string[]> = {
  ".pdf": ["https://static.orvibo.com", "https://website-static.orvibo.com"],
  ".mp4": ["https://website-static.orvibo.com", "https://website-vod.orvibo.com"],
};

const URLS: string[] = [
  // Known brittle on the source site (observed 404)
  "https://www.orvibo.com/cn/privacy_policy.pdf",
];

async function headOrGet(url: string): Promise<{ status: number; resolvedUrl: string }> {
  const resHead = await fetch(url, {
    method: "HEAD",
    redirect: "follow",
    headers: { "User-Agent": USER_AGENT, Referer: "https://www.orvibo.com/cn/index.html" },
  }).catch(() => null);

  if (resHead && resHead.status !== 405) {
    return { status: resHead.status, resolvedUrl: resHead.url };
  }

  const resGet = await fetch(url, {
    method: "GET",
    redirect: "follow",
    headers: { "User-Agent": USER_AGENT, Referer: "https://www.orvibo.com/cn/index.html" },
  });

  return { status: resGet.status, resolvedUrl: resGet.url };
}

function extnameFromUrl(url: string) {
  try {
    const { pathname } = new URL(url);
    const idx = pathname.lastIndexOf(".");
    return idx >= 0 ? pathname.slice(idx).toLowerCase() : "";
  } catch {
    return "";
  }
}

function candidateFallbacks(url: string) {
  const ext = extnameFromUrl(url);
  const hosts = FALLBACK_HOSTS_BY_EXT[ext] ?? [];

  const u = new URL(url);
  return hosts.map((host) => new URL(u.pathname + u.search, host).toString());
}

async function resolveWithFallbacks(url: string): Promise<CheckResult> {
  try {
    const primary = await headOrGet(url);
    if (primary.status >= 200 && primary.status < 400) {
      return { url, status: primary.status, resolvedUrl: primary.resolvedUrl };
    }

    if (primary.status === 404) {
      for (const candidate of candidateFallbacks(url)) {
        const res = await headOrGet(candidate);
        if (res.status >= 200 && res.status < 400) {
          return { url, status: primary.status, resolvedUrl: res.resolvedUrl };
        }
      }
    }

    return { url, status: primary.status, resolvedUrl: primary.resolvedUrl };
  } catch {
    return { url, status: "error" };
  }
}

async function main() {
  const results = await Promise.all(URLS.map(resolveWithFallbacks));

  const redirectMap: Record<string, string> = {};
  for (const r of results) {
    if (typeof r.status === "number" && r.status === 404 && r.resolvedUrl) {
      redirectMap[r.url] = r.resolvedUrl;
    }
  }

  // Print JSON so CI logs are usable.
  console.log(JSON.stringify({ results, redirectMap }, null, 2));
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});

