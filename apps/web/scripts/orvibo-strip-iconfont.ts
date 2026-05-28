import { readFile, writeFile } from "node:fs/promises";
import path from "node:path";

const ROOT = path.join(process.cwd(), "src/styles/orvibo");

async function stripBaseCss(filePath: string) {
  let css = await readFile(filePath, "utf8");

  css = css.replace(/@font-face\{font-family:iconfont[^}]+\}[^@]*/g, "");
  css = css.replace(/\.iconfont\{[^}]+\}/g, "");
  css = css.replace(/\.icon-youjiantou:before\{[^}]+\}/g, "");
  css = css.replace(/\.iconfont,/g, "");

  await writeFile(filePath, css, "utf8");
}

async function stripIndexCss(filePath: string) {
  let css = await readFile(filePath, "utf8");
  css = css.replace(/\.icon-youjiantou\{[^}]+\}/g, "");
  await writeFile(filePath, css, "utf8");
}

async function main() {
  await stripBaseCss(path.join(ROOT, "base.css"));
  await stripIndexCss(path.join(ROOT, "index_2020.css"));
  console.log("Removed iconfont @font-face and .icon-youjiantou rules from Orvibo CSS.");
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
