import { PhonePicture } from "@/components/orvibo/product/PhonePicture";
import { ProductSlideshow } from "@/components/orvibo/product/ProductSlideshow";
import { productPageHelpers } from "@/components/orvibo/product/productPageHelpers";
import type { ProductViewProps } from "@/lib/orvibo/products/types";
import { cn } from "@v1/ui/utils";

/** orvibo.com's phone pictures for this page (750 px wide) without their words, and each one's height in hundreds
 * of its pixels: the phone view's rem is a hundredth of the picture's width, so a word drawn at (x, y) px goes at
 * (x / 100, y / 100) rem. p06 and p14 are the posters of two films orvibo.com plays there (not reachable, and with
 * Chinese in them), shown as stills; p08 to p12 are the rooms' carousel; p14 and p15 show screens translated per
 * language (`img()`). p04 is 0.8 taller than orvibo.com's, its card stretched for the longer words. Its 07th and
 * 13th pictures (a heading on black) are HTML here. */
const PIC = "/orvibo/products/cangqiong/phone";
const HEIGHT = {
  p01: 14.08,
  p02: 18.99,
  p03: 20.67,
  p04: 10.61,
  p05: 18.73,
  p06: 14.55,
  p08: 12.49,
  p09: 12.49,
  p10: 12.49,
  p11: 12.49,
  p12: 12.49,
  p14: 14.17,
  p15: 18.44,
  p16: 18.42,
  p17: 17.81,
  p18: 26.59,
  p19: 16.6,
  p20: 15.04,
  p21: 13.4,
} as const;
type Slice = keyof typeof HEIGHT;

const H2 = "text-[0.44rem] leading-[0.62rem] font-semibold";
/** A heading in a gradient (`bg-[image:…]` classes) clipped to its words. */
const CLIP = "bg-clip-text text-transparent";
/** The rooms' carousel, in orvibo.com's order. */
const ROOMS = [
  ["p08", "living"],
  ["p09", "bedroom"],
  ["p10", "bathroom"],
  ["p11", "dining"],
  ["p12", "tea"],
] as const;
/** The four optical layers' words beside the stack, each at its layer's height. */
const LAYERS = [
  ["layer1", "top-[7.2rem]"],
  ["layer2", "top-[8.8rem]"],
  ["layer3", "top-[10.45rem]"],
  ["layer4", "top-[12.24rem]"],
] as const;

/** The Cangqiong page on phones: orvibo.com's phone page, its pictures without their words and the words in HTML
 * where it draws them. Headings on black grow downwards over the black (Romanian and English run longer than
 * Chinese); the two on a black picture of their own are blocks of black. */
export function CangqiongPhone({ locale, text }: ProductViewProps) {
  const { t, ts, img } = productPageHelpers(locale, text);
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
  /** A layer's line, the part between asterisks in orvibo.com's pink. */
  const marked = (key: string) =>
    ts(key)
      .split("*")
      .map((part, i) =>
        i % 2 ? (
          <span key={part} className="text-[#d39ae9]">
            {part}
          </span>
        ) : (
          part
        ),
      );

  return (
    <div className="font-orvibo text-[16px] leading-[1.6] text-[#666666]">
      <div id="overview-phone" className="bg-black">
        {/* hero: the name and its line over the ceiling */}
        <PhonePicture {...pic("p01")}>
          <div className="absolute top-[1.98rem] inset-x-[0.3rem] text-center text-white">
            <h1 className="text-[0.46rem] leading-[0.66rem] font-semibold text-balance">
              {t("m.hero.name")}{" "}
              <span className="inline-block rounded-[0.1rem] border-[0.025rem] border-white px-[0.08rem] align-[0.06rem] text-[0.3rem] leading-[0.4rem] font-normal">
                Pro
              </span>{" "}
              {t("m.hero.title")}
            </h1>
            <p className="mt-[0.16rem] text-[0.3rem] leading-[0.44rem] font-normal">
              {t("m.hero.desc")}
            </p>
          </div>
        </PhonePicture>
        {/* design: the heading and the award over the room, the award logos stay in the picture */}
        <PhonePicture {...pic("p02")}>
          <div className="absolute top-[1.3rem] left-[0.52rem] right-[0.5rem]">
            <h2 className="text-[0.5rem] leading-[0.68rem] font-semibold text-white">
              {heading("sec1.title")}
            </h2>
            <p className="mt-[0.36rem] text-[0.24rem] leading-[0.38rem] font-normal text-pretty text-[#e2deda]">
              {t("sec1.desc")}
            </p>
          </div>
        </PhonePicture>
        {/* the Maldives sky */}
        <PhonePicture {...pic("p03")}>
          <h2
            className={cn(
              "absolute top-[4.1rem] left-[0.56rem] right-[0.4rem] text-[0.62rem] leading-[0.84rem] font-semibold",
              CLIP,
              "bg-[image:linear-gradient(180deg,#ffffff,#b8e5f8)]",
            )}
          >
            {heading("sec2.title")}
          </h2>
        </PhonePicture>
        {/* the 480 nm card: its spectrum stays in the picture, its words and the columns under the blue are HTML */}
        <PhonePicture {...pic("p04")}>
          <h3 className="absolute top-[4.44rem] inset-x-[0.9rem] text-center text-[0.28rem] leading-[0.42rem] font-medium text-white">
            {heading("m.blue.title")}
          </h3>
          <div className="absolute top-[5.96rem] left-[1.6rem] flex h-[0.51rem] text-center text-[0.11rem] leading-[0.14rem] font-normal text-[#d6d8df]">
            <p className="flex w-[0.83rem] items-center justify-center border-x border-dashed border-[#6b6e78] px-[0.04rem]">
              {t("m.blue.harmful")}
            </p>
            <p className="flex w-[0.87rem] items-center justify-center border-r border-dashed border-[#6b6e78] px-[0.04rem]">
              {t("m.blue.good")}
            </p>
          </div>
          <p className="absolute top-[6.48rem] left-[1.2rem] w-[1.22rem] text-center text-[0.12rem] leading-[0.2rem] font-normal text-[#38596a]">
            {t("m.blue.bad")}
          </p>
          <p className="absolute top-[6.48rem] left-[2.44rem] w-[4.11rem] text-center text-[0.12rem] leading-[0.2rem] font-normal text-[#38596a]">
            {t("m.blue.safe")}
          </p>
          <div className="absolute top-[6.98rem] inset-x-[1rem] text-[#d7d8de]">
            <p className="text-[0.19rem] leading-[0.32rem] font-normal">
              {t("m.blue.desc")}
            </p>
            <p className="mt-[0.2rem] text-[0.13rem] leading-[0.2rem] font-normal text-[#c7c8ce]">
              {t("m.blue.source")}
            </p>
          </div>
        </PhonePicture>
        {/* the dream places over the sea, the six views at its foot */}
        <PhonePicture {...pic("p05")}>
          <h2
            className={cn(
              "absolute top-[1.6rem] left-[0.58rem] right-[0.4rem] text-[0.56rem] leading-[0.78rem] font-semibold",
              CLIP,
              "bg-[image:linear-gradient(180deg,#a137e9,#fda4e4)]",
            )}
          >
            {heading("m.dream")}
          </h2>
          <div className="absolute top-[14.5rem] left-[0.56rem] right-[0.5rem]">
            <h3 className="text-[0.42rem] leading-[0.62rem] font-semibold text-white">
              {heading("sec3.title")}
            </h3>
            <p className="mt-[0.3rem] text-[0.22rem] leading-[0.36rem] font-normal text-[#d7d8dc]">
              {heading("sec3.desc")}
            </p>
          </div>
        </PhonePicture>
        {/* the first film's poster: a Provence sunset */}
        <PhonePicture {...pic("p06")}>
          <p className="absolute top-[0.88rem] left-[0.88rem] text-[0.26rem] leading-[0.4rem] font-normal text-white">
            {t("m.provence")}
          </p>
          <p
            className={cn(
              "absolute top-[1.3rem] left-[0.84rem] text-[0.62rem] leading-[0.96rem] font-semibold",
              CLIP,
              "bg-[image:linear-gradient(180deg,rgb(255_255_255/0.75),rgb(255_255_255/0.12))]",
            )}
          >
            {t("m.soothe")}
          </p>
        </PhonePicture>
        {/* rooms: the heading, then a slide for each room */}
        <div className="min-h-[3.38rem] px-[0.8rem] pt-[1.2rem] pb-[0.3rem]">
          <h2
            className={cn(
              H2,
              CLIP,
              "bg-[image:linear-gradient(180deg,#f8c1aa,#fbddc3)]",
            )}
          >
            {heading("sec4.title")}
          </h2>
        </div>
        <ProductSlideshow
          autoplay={false}
          paginationClassName="bottom-[0.14rem]"
          slides={ROOMS.map(([name, room]) => ({
            key: room,
            content: (
              <PhonePicture {...pic(name)}>
                <div className="absolute top-[11.04rem] left-[0.78rem] right-[0.5rem]">
                  <p className="text-[0.26rem] leading-[0.4rem] font-medium text-[#d8d8d8]">
                    {t(`m.room.${room}`)}
                  </p>
                  <p className="mt-[0.2rem] text-[0.2rem] leading-[0.3rem] font-normal text-[#a17aee]">
                    {t(`m.room.${room}Desc`)}
                  </p>
                </div>
              </PhonePicture>
            ),
          }))}
        />
        {/* the app: the heading, then the phone (its words per language) */}
        <div className="min-h-[5.49rem] px-[0.9rem] pt-[2.6rem] pb-[0.4rem]">
          <h2
            className={cn(
              H2,
              CLIP,
              "bg-[image:linear-gradient(180deg,#fbd6bc,#fcedd1)]",
            )}
          >
            {heading("m.tap")}
          </h2>
        </div>
        <PhonePicture {...pic("p14")} />
        {/* the second film's poster's heading, the camera (its words per language) and the note */}
        <div className="min-h-[6.55rem] px-[0.7rem] pt-[3.8rem] pb-[0.4rem]">
          <h2 className={cn(H2, "text-[#309cbd]")}>{heading("m.snap")}</h2>
        </div>
        <PhonePicture {...pic("p15", 6.55)}>
          <p className="absolute bottom-[0.56rem] inset-x-[0.4rem] text-center text-[0.17rem] leading-[0.26rem] font-normal text-[#efefef]">
            {t("m.ota")}
          </p>
        </PhonePicture>
        {/* sunlight: "100%" stays in the picture, the heading and its line under it */}
        <PhonePicture {...pic("p16")}>
          <div className="absolute top-[3.3rem] left-[0.6rem] right-[0.6rem]">
            <h2
              className={cn(
                H2,
                CLIP,
                "bg-[image:linear-gradient(90deg,#f9c385,#9387e9)]",
              )}
            >
              {t("m.cutoff")}
            </h2>
            <p className="mt-[0.36rem] text-[0.24rem] leading-[0.4rem] font-normal text-[#dadada]">
              {t("m.cutoffDesc")}
            </p>
          </div>
        </PhonePicture>
        {/* optics: the heading over the black, the four layers beside the stack */}
        <PhonePicture {...pic("p17")}>
          <h2
            className={cn(
              "absolute top-[1.66rem] left-[0.5rem] right-[0.5rem]",
              H2,
              CLIP,
              "bg-[image:linear-gradient(180deg,#9bd5f2,#62a8e7)]",
            )}
          >
            {heading("sec6.title")}
          </h2>
          {LAYERS.map(([key, at]) => (
            <div
              key={key}
              className={cn("absolute left-[1.05rem] w-[3rem]", at)}
            >
              <p className="text-[0.23rem] leading-[0.34rem] font-medium text-[#9ecee7]">
                {t(`m.${key}.title`)}
              </p>
              <p className="mt-[0.08rem] text-[0.18rem] leading-[0.27rem] font-normal text-[#a5a4a7]">
                {marked(`m.${key}.l1`)}
              </p>
              <p className="text-[0.18rem] leading-[0.27rem] font-normal text-[#a5a4a7]">
                {marked(`m.${key}.l2`)}
              </p>
            </div>
          ))}
        </PhonePicture>
        {/* precision: the heading over the black, "1750" stays in the picture */}
        <PhonePicture {...pic("p18")}>
          <h2
            className={cn(
              "absolute top-[2.5rem] left-[0.5rem] right-[0.4rem]",
              H2,
              CLIP,
              "bg-[image:linear-gradient(90deg,#54bcf4,#8e64fc)]",
            )}
          >
            {heading("sec7.title")}
          </h2>
          <p className="absolute top-[6.3rem] left-[0.6rem] text-[0.4rem] leading-[0.56rem] font-normal text-[#a779ee]">
            {t("m.parts")}
          </p>
        </PhonePicture>
        {/* the twist-lock: heading and line over the black, the tip under the card */}
        <PhonePicture {...pic("p19")}>
          <div className="absolute top-[1.74rem] left-[0.54rem] right-[0.5rem]">
            <h2
              className={cn(
                H2,
                CLIP,
                "bg-[image:linear-gradient(90deg,#88f7d6,#45e3f5)]",
              )}
            >
              <span className="block text-balance">{t("sec8.desc")}</span>
              <span className="block text-balance">
                {ts("sec8.title").replace("\n", " ")}
              </span>
            </h2>
            <p className="mt-[0.5rem] text-[0.24rem] leading-[0.4rem] font-normal text-[#d8d8d8]">
              {t("m.click")}
            </p>
          </div>
          <p className="absolute top-[15.24rem] left-[0.52rem] right-[0.5rem] text-[0.17rem] leading-[0.26rem] font-normal text-[#bcbcbc]">
            {t("m.clickTip")}
          </p>
        </PhonePicture>
        {/* size */}
        <PhonePicture {...pic("p20")}>
          <h2
            className={cn(
              "absolute top-[1.56rem] left-[0.69rem] right-[0.5rem]",
              H2,
              CLIP,
              "bg-[image:linear-gradient(180deg,#079ff1,#0689ed)]",
            )}
          >
            {heading("m.size")}
          </h2>
        </PhonePicture>
        {/* the last words over the room */}
        <PhonePicture {...pic("p21")}>
          <h2
            className={cn(
              "absolute top-[1.56rem] inset-x-[0.8rem] text-center text-[0.36rem] leading-[0.56rem] font-semibold",
              CLIP,
              "bg-[image:linear-gradient(180deg,#fcc4a7,#fbb4a4)]",
            )}
          >
            {heading("m.always")}
          </h2>
        </PhonePicture>
      </div>
    </div>
  );
}
