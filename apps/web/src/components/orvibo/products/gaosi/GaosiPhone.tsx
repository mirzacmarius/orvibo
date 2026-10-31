import { PhonePicture } from "@/components/orvibo/product/PhonePicture";
import { productPageHelpers } from "@/components/orvibo/product/productPageHelpers";
import type { ProductViewProps } from "@/lib/orvibo/products/types";
import { cn } from "@v1/ui/utils";

/** orvibo.com's phone pictures for this page (scaled to 750 px wide) without their words, p01 to p11, and each one's
 * height in hundreds of its pixels: the phone view's rem is a hundredth of the picture's width, so a word drawn at
 * (x, y) px goes at (x / 100, y / 100) rem. The screens' words are translated per language (`img()`). */
const PIC = "/orvibo/products/gaosi/phone";
const HEIGHT = {
  p01: 17.97,
  p02: 14.33,
  p03: 11.42,
  p04: 19.17,
  p05: 20.53,
  p06: 18.12,
  p07: 19.74,
  p08: 15.46,
  p09: 22.79,
  p10: 17.37,
  p11: 14.29,
} as const;
type Slice = keyof typeof HEIGHT;

/** The hero's slogan: brushed metal, as on orvibo.com's picture. */
const METAL =
  "bg-[linear-gradient(124deg,#69615d_12%,#f3f3f2_50%,#69615d_90%)] bg-clip-text [-webkit-text-fill-color:transparent]";
/** A heading on the black ground and the line under it. */
const H2 = "text-[0.4rem] leading-[0.58rem] font-semibold text-white";
const DESC = "text-[0.22rem] leading-[0.38rem] font-normal text-white/90";
/** The five tiles under the hero: their coloured words (orvibo.com's colours) and where each stands. */
const TILES = [
  {
    n: 1,
    hue: "text-[#7c8cf3]",
    at: "top-[11.18rem] left-[0.64rem] w-[3.7rem]",
  },
  {
    n: 2,
    hue: "text-[#f7c35e]",
    at: "top-[13.36rem] left-[0.62rem] w-[2.9rem]",
  },
  { n: 3, hue: "text-[#4eb5fd]", at: "top-[13.36rem] left-[4.2rem] w-[3rem]" },
  {
    n: 4,
    hue: "text-[#43ea80]",
    at: "top-[15.62rem] left-[0.62rem] w-[2.9rem]",
  },
  { n: 5, hue: "text-[#ff914e]", at: "top-[15.62rem] left-[4.2rem] w-[3rem]" },
] as const;
/** The voice requests round the knob (03), placed as orvibo.com's; those its picture cuts at an edge run off it. */
const ASKS = [
  { key: "bedroom", at: "top-[0.6rem] left-[0.69rem]" },
  { key: "light", at: "top-[1.39rem] right-[0.8rem]" },
  { key: "curtains", at: "top-[1.69rem] right-[6.23rem]" },
  { key: "sleep", at: "top-[3.44rem] left-[5.52rem]" },
  { key: "dim", at: "top-[3.85rem] right-[5.34rem]" },
] as const;
/** The four material tiles (06), from the top of the picture's shown part. */
const MATERIALS = [
  { key: "glass", at: "top-[9.88rem] left-[0.48rem]" },
  { key: "coat", at: "top-[9.88rem] left-[4.06rem]" },
  { key: "motor", at: "top-[12.68rem] left-[0.46rem]" },
  { key: "knob", at: "top-[12.68rem] left-[4.08rem]" },
] as const;
/** The five ways' names on their tiles (08). */
const WAYS = [
  { key: "knob", at: "top-[0.52rem] left-[0.61rem]" },
  { key: "touch", at: "top-[0.49rem] left-[4.06rem]" },
  { key: "keys", at: "top-[4.52rem] left-[3.99rem]" },
  { key: "voice", at: "top-[7.31rem] left-[0.63rem]" },
] as const;
/** The four safety tiles (11): their name and the line under it, centred on each tile. */
const SAFETY = [
  { key: "relay", at: "top-[3rem] left-[0.33rem]" },
  { key: "surge", at: "top-[3rem] left-[3.95rem]" },
  { key: "fuse", at: "top-[6.33rem] left-[0.33rem]" },
  { key: "fire", at: "top-[6.33rem] left-[3.95rem]" },
] as const;

/** The Gauss page on phones: orvibo.com's phone page, its pictures without their words and the words in HTML where
 * it draws them. Headings on the black ground stand in a block that grows with the words (Romanian and English run
 * longer than Chinese), and the picture goes on below it. */
export function GaosiPhone({ locale, text, common }: ProductViewProps) {
  const { t, ts, img, lines } = productPageHelpers(locale, text);
  /** A phone picture, or the part of it from `top` to `bottom` (in hundreds of its pixels). */
  const pic = (name: Slice, top = 0, bottom: number = HEIGHT[name]) => ({
    src: img(`${PIC}/${name}.webp`),
    size: [7.5, HEIGHT[name]] as const,
    part: [0, top, 7.5, bottom] as const,
  });
  /** A heading's lines (`\n`) as blocks, each wrapping on its own. */
  const heading = (key: string) =>
    ts(key)
      .split("\n")
      .map((part) => (
        <span key={part} className="block text-balance">
          {part}
        </span>
      ));
  /** A line that the desktop breaks mid-sentence, as one. */
  const flat = (key: string) => ts(key).replaceAll("\n", " ");
  /** A footnote's number by a heading. */
  const mark = (n: number) => (
    <sup className="ml-[0.04rem] text-[0.42em] font-normal">[{n}]</sup>
  );

  return (
    <div className="font-orvibo text-[16px] leading-[1.6] text-[#666666]">
      <div id="overview-phone" className="bg-black">
        {/* hero: the name and its tag, the line under it and the slogan over the screen, then the five tiles */}
        <PhonePicture {...pic("p01")}>
          <div className="absolute top-[1.38rem] inset-x-[0.3rem] text-center text-white">
            <h1 className="flex items-center justify-center gap-x-[0.12rem] text-[0.32rem] leading-[0.44rem] font-normal">
              {t("sec1.name")}
              <span className="rounded-[0.06rem] border-[0.02rem] border-white px-[0.06rem] text-[0.2rem] leading-[0.28rem]">
                G1
              </span>
            </h1>
            <p className="mt-[0.1rem] text-[0.2rem] leading-[0.3rem]">
              {t("sec1.subtitle")}
            </p>
            <p
              className={cn(
                "mt-[0.42rem] text-[0.5rem] leading-[0.7rem] font-semibold",
                METAL,
              )}
            >
              {heading("sec1.slogan")}
            </p>
          </div>
          {TILES.map(({ n, hue, at }) => (
            <div key={n} className={cn("absolute", at)}>
              <p
                className={cn(
                  "text-white font-semibold text-pretty",
                  n === 1
                    ? "text-[0.27rem] leading-[0.38rem]"
                    : "text-[0.22rem] leading-[0.3rem]",
                )}
              >
                {t(`m.tile${n}.a`)}
                <span className={hue}>{t(`m.tile${n}.b`)}</span>
                {n === 4 && mark(1)}
                {t(`m.tile${n}.c`)}
              </p>
              <p className="mt-[0.08rem] text-[0.16rem] leading-[0.25rem] font-normal text-white/90">
                {t(`m.tile${n}.desc`)}
                {n === 3 && <span className="block">{t("m.tile3.desc2")}</span>}
              </p>
            </div>
          ))}
        </PhonePicture>
        {/* the super brain: its heading and lines, then the screens round the knob */}
        <div className="min-h-[4.3rem] px-[0.4rem] pt-[0.9rem] pb-[0.3rem] text-center">
          <h2 className={cn(H2, "text-balance")}>{heading("sec3.title")}</h2>
          <p className={cn(DESC, "mt-[0.24rem]")}>{heading("sec3.desc")}</p>
        </div>
        <PhonePicture {...pic("p02", 4.3)} />
        {/* voice: its heading and line, then the requests round the knob */}
        <div className="min-h-[3.8rem] px-[0.4rem] pt-[0.78rem] pb-[0.3rem] text-center">
          <h2 className={cn(H2, "text-balance")}>{heading("sec4.title")}</h2>
          <p className={cn(DESC, "mt-[0.22rem] text-balance")}>
            {t("sec4.desc")}
          </p>
        </div>
        <PhonePicture {...pic("p03", 3.8)}>
          {ASKS.map(({ key, at }) => (
            <p
              key={key}
              className={cn(
                "absolute whitespace-nowrap text-[0.19rem] leading-[0.24rem] font-normal text-[#8f8f8f]",
                at,
              )}
            >
              {t(`m.ask.${key}`)}
            </p>
          ))}
          <p className="absolute top-[2.13rem] left-[2.38rem] w-[2.6rem] text-center text-[0.21rem] leading-[0.34rem] font-normal text-white">
            {heading("m.ask.ac")}
          </p>
        </PhonePicture>
        {/* ten in one: the heading, then the two cards */}
        <div className="min-h-[3.6rem] px-[0.8rem] pt-[0.78rem] pb-[0.3rem]">
          <h2 className={H2}>{heading("sec4.title2")}</h2>
        </div>
        <PhonePicture {...pic("p04", 3.6)}>
          <div className="absolute top-[0.74rem] left-[0.99rem] w-[5.6rem]">
            <h3 className="text-[0.28rem] leading-[0.46rem] font-semibold text-white">
              <span className="block">{t("m.card.title")}</span>
              <span className="block">{t("m.card.title2")}</span>
            </h3>
            <p className="mt-[0.14rem] text-[0.18rem] leading-[0.3rem] font-normal text-[#c8c8c8]">
              {t("m.card.desc")}
            </p>
          </div>
          <div className="absolute top-[10.14rem] left-[0.97rem] w-[5.6rem]">
            <h3 className="text-[0.28rem] leading-[0.46rem] font-semibold text-balance text-white">
              {t("m.eco.title")}
            </h3>
            <p className="mt-[0.16rem] text-[0.18rem] leading-[0.28rem] font-normal text-[#c8c8c8]">
              {t("m.eco.desc")}
            </p>
            <p className="text-[0.13rem] leading-[0.24rem] font-normal text-[#8a8a8a]">
              {t("m.eco.note")}
            </p>
          </div>
        </PhonePicture>
        {/* dimming: the heading and the lines over the room, then the room and the hand */}
        <div className="min-h-[4.6rem] pr-[0.4rem] pl-[0.9rem] pt-[0.8rem] pb-[0.3rem]">
          <h2 className={H2}>
            <span className="block text-balance">
              {t("m.dim.title")}
              {mark(1)}
            </span>
            <span className="block text-balance">
              {t("sec6.title3")}
              {mark(4)}
            </span>
            <span className="block text-balance">{t("sec6.title4")}</span>
          </h2>
          <p className="mt-[0.3rem] text-[0.16rem] leading-[0.26rem] font-normal text-white/90">
            {t("sec6.item_content")}
          </p>
          <p className="mt-[0.06rem] text-[0.22rem] leading-[0.34rem] font-normal text-white">
            {t("m.dim.fine")}
          </p>
        </div>
        <PhonePicture {...pic("p05", 4.6)}>
          <div className="absolute top-[8.8rem] left-[0.92rem] w-[5rem]">
            <p className="text-[0.16rem] leading-[0.26rem] font-normal text-white/90">
              {t("sec6.item_content3")}
            </p>
            <p className="mt-[0.06rem] text-[0.22rem] leading-[0.34rem] font-normal text-white">
              {t("m.dim.feel")}
            </p>
          </div>
        </PhonePicture>
        {/* materials: the heading, the knob taken apart and the four tiles */}
        <div className="min-h-[2.6rem] px-[0.88rem] pt-[0.62rem] pb-[0.3rem]">
          <h2 className={H2}>
            <span className="block text-balance">{t("sec7.title")}</span>
            <span className="block text-balance">
              {t("sec7.title2")}
              {mark(5)}
            </span>
          </h2>
        </div>
        <PhonePicture {...pic("p06", 2.6)}>
          {MATERIALS.map(({ key, at }) => (
            <p
              key={key}
              className={cn(
                "absolute w-[3rem] text-[0.18rem] leading-[0.26rem] font-normal text-[#cfcfcf]",
                at,
              )}
            >
              {t(`m.mat.${key}`)}
            </p>
          ))}
        </PhonePicture>
        {/* the screen: the heading, IPS and the two tiles */}
        <div className="min-h-[3.2rem] px-[0.64rem] pt-[0.98rem] pb-[0.3rem]">
          <h2 className={H2}>{heading("sec8.title")}</h2>
        </div>
        <PhonePicture {...pic("p07", 3.2)}>
          <div className="absolute top-[10.36rem] right-[0.82rem] w-[3rem] text-right font-normal text-white">
            <p className="text-[0.24rem] leading-[0.34rem] text-pretty">
              {t("m.ips.title")}
            </p>
            <p className="mt-[0.1rem] text-[0.19rem] leading-[0.3rem] text-pretty">
              {t("m.ips.ui")}
            </p>
            <p className="text-[0.19rem] leading-[0.3rem]">{t("m.ips.far")}</p>
          </div>
          <div className="absolute top-[13.5rem] right-[0.81rem] w-[3.3rem] text-right font-normal text-white">
            <p className="text-[0.26rem] leading-[0.36rem] font-medium text-pretty">
              {t("m.size.title")}
            </p>
            <p className="mt-[0.06rem] text-[0.19rem] leading-[0.3rem] text-pretty">
              {t("m.size.desc")}
            </p>
          </div>
        </PhonePicture>
        {/* five ways: the heading and line, then the ways' tiles */}
        <div className="min-h-[5.1rem] px-[0.95rem] pt-[1.2rem] pb-[0.3rem]">
          <h2 className={H2}>
            <span className="block text-balance">{t("m.ways")}</span>
            <span className="block text-balance">
              {t("sec9.title")}
              {mark(6)}
            </span>
            <span className="block text-balance">{t("m.ways.all")}</span>
          </h2>
          <p className={cn(DESC, "mt-[0.3rem]")}>{t("sec9.desc")}</p>
        </div>
        <PhonePicture {...pic("p08", 5.1)}>
          {WAYS.map(({ key, at }) => (
            <p
              key={key}
              className={cn(
                "absolute text-[0.17rem] leading-[0.24rem] font-normal text-[#c8c8c8]",
                at,
              )}
            >
              {t(`m.way.${key}`)}
            </p>
          ))}
          <div className="absolute top-[7.86rem] left-[4.66rem] w-[2.66rem] text-center text-[0.17rem] leading-[0.29rem] font-normal text-[#d6d6d6]">
            <p>{t("m.ask.on")}</p>
            <p>{t("m.ask.open")}</p>
            <p>{t("m.ask.ac24")}</p>
          </div>
        </PhonePicture>
        {/* square and round: the heading, then three rooms */}
        <div className="min-h-[3.85rem] px-[0.64rem] pt-[0.72rem] pb-[0.3rem]">
          <h2 className={H2}>
            <span className="block text-balance">{t("m.tech")}</span>
            {heading("sec10.title")}
          </h2>
        </div>
        <PhonePicture {...pic("p09", 3.85)} />
        {/* modules: the heading and line, then the panels */}
        <div className="min-h-[5.3rem] bg-[linear-gradient(90deg,#191919,#151515)] px-[0.62rem] pt-[1.07rem] pb-[0.3rem]">
          <h2 className={H2}>{heading("sec10.title2")}</h2>
          <p className={cn(DESC, "mt-[0.3rem] text-pretty")}>
            {flat("sec10.desc")}
          </p>
        </div>
        <PhonePicture {...pic("p10", 5.3)} />
        {/* safety: the heading, the four tiles, then the notes */}
        <div className="min-h-[2.9rem] bg-[#141414] px-[0.64rem] pt-[0.8rem] pb-[0.3rem]">
          <h2 className={H2}>{heading("sec12.title")}</h2>
        </div>
        <PhonePicture {...pic("p11", 2.9, 10.3)}>
          {SAFETY.map(({ key, at }) => (
            <div
              key={key}
              className={cn(
                "absolute w-[3.22rem] text-center text-[0.18rem] leading-[0.27rem] font-normal",
                at,
              )}
            >
              <p className="text-[#e6e6e6]">{t(`m.safe.${key}`)}</p>
              <p className="text-[#bdbdbd]">{t(`m.safe.${key}Desc`)}</p>
            </div>
          ))}
        </PhonePicture>
        <p className="bg-[#131313] px-[0.32rem] pt-[0.1rem] pb-[0.5rem] text-[0.16rem] leading-[0.27rem] font-normal text-[#8c8c8c]">
          {lines(ts("sec12.sec12_text"))}
        </p>
      </div>
      {/* product_detail_tips */}
      <div className="bg-[#202020] px-[20px] py-[32px]">
        <p className="text-[13px] leading-[22px] font-medium text-white/80">
          {lines(common.productDisclaimer)}
        </p>
      </div>
    </div>
  );
}
