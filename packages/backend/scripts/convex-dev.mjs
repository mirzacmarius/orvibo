import { spawn } from "node:child_process";
import { readFileSync, existsSync } from "node:fs";
import path from "node:path";

function loadDotEnvLocal() {
  const envPath = path.join(process.cwd(), ".env.local");
  if (!existsSync(envPath)) return;
  const raw = readFileSync(envPath, "utf8");
  for (const line of raw.split("\n")) {
    const trimmed = line.trim();
    if (!trimmed || trimmed.startsWith("#")) continue;
    const eq = trimmed.indexOf("=");
    if (eq < 0) continue;
    const key = trimmed.slice(0, eq).trim();
    const value = trimmed.slice(eq + 1).trim();
    if (!key) continue;
    if (process.env[key] === undefined) process.env[key] = value;
  }
}

loadDotEnvLocal();

const isInteractive = Boolean(process.stdin.isTTY && process.stdout.isTTY);
const hasDeployKey = Boolean(process.env.CONVEX_DEPLOY_KEY);

if (!isInteractive && !hasDeployKey) {
  console.log(
    "[backend] Skipping `convex dev` (non-interactive terminal, no CONVEX_DEPLOY_KEY). Provide CONVEX_DEPLOY_KEY in packages/backend/.env.local or run manually: `cd packages/backend && bun run dev:convex`.",
  );
  process.exit(0);
}

const child = spawn("bunx", ["convex", "dev", "--tail-logs"], {
  stdio: "inherit",
  shell: false,
});

child.on("exit", (code) => {
  process.exit(code ?? 0);
});

