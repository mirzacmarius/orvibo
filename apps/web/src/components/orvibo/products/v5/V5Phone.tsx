import { OrviboWatchTrigger } from "@/components/orvibo/OrviboVideoProvider";
import { PhonePicture } from "@/components/orvibo/product/PhonePicture";
import { ProductSlideshow } from "@/components/orvibo/product/ProductSlideshow";
import { productPageHelpers } from "@/components/orvibo/product/productPageHelpers";
import type { ProductViewProps } from "@/lib/orvibo/products/types";
import { cn } from "@v1/ui/utils";
import type { ReactNode } from "react";

/** orvibo.com's phone pictures for this page (made 750 px wide) without their words, and each one's height in
 * hundreds of its pixels: the phone view's rem is a hundredth of the picture's width, so a word drawn at (x, y) px goes
 * at (x / 100, y / 100) rem. p05 is the poster of orvibo.com's full film; p08-p09, p13-p16 and p21-p22 are its three
 * swipers, each followed by its "swipe for more" strip (p10). orvibo.com's first picture never loads and three are
 * missing on its own server (the film's title, the peephole's title and the last picture): the peephole's title is
 * set here from the desktop page's words, the others are left out. */
const PIC = "/orvibo/products/v5/phone";
const HEIGHT = {
  p02: 15.84,
  p03: 27.77,
  p05: 4.22,
  p06: 24.58,
  p08: 10.51,
  p09: 10.51,
  p10: 0.92,
  p11: 14.39,
  p12: 13.48,
  p13: 9.87,
  p14: 9.87,
  p15: 9.87,
  p16: 9.87,
  p18: 16.86,
  p19: 10.86,
  p20: 15.81,
  p21: 7.36,
  p22: 7.36,
  p24: 12.74,
  p25: 14.54,
  p26: 12.53,
} as const;
type Slice = keyof typeof HEIGHT;

/** orvibo.com's gold. */
const GOLD =
  "bg-[image:linear-gradient(90deg,#d8bd95,#efe1c5,#f7ebd2)] bg-clip-text box-decoration-clone text-transparent";

/** The eight tiles (03): each one's name. */
const TILES = [
  ["face", "top-[9.77rem] left-[0.75rem] w-[5.8rem]"],
  ["peephole", "top-[13.06rem] left-[0.65rem] w-[2.75rem]"],
  ["screen", "top-[13.05rem] left-[3.99rem] w-[2.85rem]"],
  ["intercom", "top-[16.52rem] left-[0.68rem] w-[2.75rem]"],
  ["design", "top-[16.52rem] left-[4.01rem] w-[2.85rem]"],
  ["automation", "top-[20.3rem] left-[0.69rem] w-[2.75rem]"],
  ["warranty", "top-[20.3rem] left-[4rem] w-[2.85rem]"],
  ["power", "top-[23.77rem] left-[0.81rem] w-[5.8rem]"],
] as const;
/** Face recognition's four figures (06; from the part's top, 3.15 rem): each one's middle. */
const STATS = [1.54, 3.24, 4.53, 5.92];
/** Face recognition's three cases (06; from the part's top). */
const CASES = [
  ["", "top-[13.98rem] left-[0.73rem] w-[3rem]"],
  ["2", "top-[13.98rem] left-[4.2rem] w-[2.85rem]"],
  ["3", "top-[19.31rem] left-[0.73rem] w-[5.8rem]"],
] as const;
/** The four finishes (13-16). */
const FINISHES = [
  ["p13", ""],
  ["p14", "2"],
  ["p15", "3"],
  ["p16", "4"],
] as const;
/** The power figures (20): value, name and top. */
const POWER = [
  ["1", "top-[5.58rem]"],
  ["2", "top-[6.91rem]"],
  ["3", "top-[8.18rem]"],
] as const;
/** The scenes (21, 22): each tag's middle, and the side it grows from (its dot is on the other). */
const TAGS = [
  ["spot", "top-[0.89rem] right-[4.72rem]"],
  ["tv", "top-[2.44rem] left-[1.4rem]"],
  ["ac", "top-[3.55rem] right-[1.95rem]"],
] as const;
/** The last tiles (26): each one's name. */
const LAST = [
  ["sec9.sec12_item_title", "top-[0.82rem] left-[0.4rem]"],
  ["sec9.sec12_item_title3", "top-[0.82rem] left-[4.05rem]"],
  ["sec9.sec12_item_title2", "top-[4.54rem] left-[0.4rem]"],
  ["sec9.sec13_title", "top-[4.54rem] left-[4.05rem]"],
  ["m.care", "top-[8.28rem] left-[0.4rem]"],
  ["m.protect", "top-[8.28rem] left-[4.05rem]"],
] as const;
/** The alert pills (26): where each one stands. */
const ALERTS = [
  ["arrive", "top-[9.45rem] left-[0.55rem]"],
  ["door", "top-[10.12rem] right-[4.06rem]"],
  ["notHome", "top-[10.5rem] left-[0.45rem]"],
] as const;

/** The V5 smart lock page on phones: orvibo.com's phone page, its pictures without their words and the words in
 * HTML. */
export function V5Phone({ locale, text }: ProductViewProps) {
  const { t, ts, img } = productPageHelpers(locale, text);
  /** A phone picture, or the part of it from `top` to `bottom` (rem). */
  const pic = (name: Slice, top = 0, bottom: number = HEIGHT[name]) => ({
    src: img(`${PIC}/${name}.webp`),
    size: [7.5, HEIGHT[name]] as const,
    part: [0, top, 7.5, bottom] as const,
  });
  /** A section's words over the top of its picture (down to `cut`, stretched to fit them), then the rest. */
  const section = (
    name: Slice,
    cut: number,
    words: ReactNode,
    overlay?: ReactNode,
    className = "pt-[1rem]",
  ) => (
    <>
      <div
        className={cn(
          "bg-top bg-no-repeat px-[0.75rem] pb-[0.36rem]",
          className,
        )}
        style={{
          minHeight: `${cut}rem`,
          backgroundImage: `url(${img(`${PIC}/${name}.webp`)})`,
          backgroundSize: `100% ${(HEIGHT[name] / cut) * 100}%`,
        }}
      >
        {words}
      </div>
      <PhonePicture {...pic(name, cut)}>{overlay}</PhonePicture>
    </>
  );
  /** A gold heading, and its lines. */
  const head = (title: string, desc?: string, descLook = "text-[#efe5cd]") => (
    <>
      <h2 className="text-[0.46rem] leading-[0.66rem] font-semibold whitespace-pre-line text-balance">
        <span className={GOLD}>{ts(title)}</span>
      </h2>
      {desc && (
        <p
          className={cn(
            "mt-[0.3rem] text-[0.21rem] leading-[0.34rem] font-normal",
            descLook,
          )}
        >
          {t(desc)}
        </p>
      )}
    </>
  );
  /** The "swipe for more" strip after each swiper. */
  const swipe = (
    <PhonePicture {...pic("p10")}>
      <p className="absolute top-[0.3rem] inset-x-0 text-center text-[0.22rem] leading-[0.32rem] font-normal text-[#929292]">
        {t("m.swipe")}
      </p>
    </PhonePicture>
  );
  /** A scene's tag (21, 22), by its middle. */
  const tag = (key: string, at: string, off: boolean) => (
    <p
      key={key}
      className={cn(
        "absolute -translate-y-1/2 rounded-full px-[0.2rem] text-[0.24rem] leading-[0.42rem] font-normal whitespace-nowrap",
        off ? "bg-[#2c2b28]/90 text-[#d8d8d8]" : "bg-[#987a5c] text-white",
        at,
      )}
    >
      {t(`m.tag.${key}`)}
      {off && ` ${t("m.tag.off")}`}
    </p>
  );
  /** A scene (21, 22): its tags and caption. */
  const scene = (name: Slice, caption: string, off: boolean) => (
    <PhonePicture {...pic(name)}>
      {TAGS.map(([key, at]) => tag(key, at, off))}
      <div className="absolute top-[6.42rem] left-[0.69rem] w-[6.2rem]">
        <p className="text-[0.24rem] leading-[0.32rem] font-normal text-[#d4d4d4]">
          {t(caption)}
        </p>
        <p className="text-[0.17rem] leading-[0.26rem] font-normal text-[#a5a5a5]">
          {t("m.requires")}
        </p>
      </div>
    </PhonePicture>
  );

  return (
    <div className="font-orvibo text-[16px] leading-[1.6] text-[#666666]">
      <div id="overview-phone" className="bg-black">
        {/* hero: the name, the claim and the four strengths */}
        <PhonePicture {...pic("p02")}>
          <div className="absolute top-[1.12rem] inset-x-[0.4rem] text-center">
            <p className="text-[0.34rem] leading-[0.5rem] font-medium text-[#d0b89e]">
              {t("m.hero.brand")}{" "}
              <span className="ml-[0.04rem] inline-block rounded-[0.06rem] border border-current px-[0.06rem] align-[0.03rem] text-[0.26rem] leading-[0.32rem]">
                V5
              </span>
            </p>
            <h1 className="mt-[0.3rem] text-[0.58rem] leading-[0.84rem] font-semibold whitespace-pre-line">
              <span className={GOLD}>{ts("m.hero.title")}</span>
            </h1>
            <p className="mt-[0.3rem] text-[0.19rem] leading-[0.3rem] font-normal text-[#bea78c]">
              {t("m.hero.features")}
            </p>
          </div>
        </PhonePicture>
        {/* eight strengths: the heading and the tiles */}
        <PhonePicture {...pic("p03")}>
          <h2 className="absolute top-[8.22rem] inset-x-[0.5rem] text-center text-[0.44rem] leading-[0.58rem] font-semibold text-balance">
            <span className={GOLD}>{t("sec2.title")}</span>
          </h2>
          {TILES.map(([key, at]) => (
            <p
              key={key}
              className={cn(
                "absolute text-[0.21rem] leading-[0.28rem] font-normal text-[#c2b39a]",
                at,
              )}
            >
              {t(`m.tile.${key}`)}
            </p>
          ))}
          <p className="absolute top-[22.27rem] left-[5.78rem] text-[0.34rem] leading-none font-semibold text-[#b99c72]">
            {t("m.years")}
          </p>
          <p className="absolute top-[26.71rem] left-[0.79rem] text-[0.16rem] leading-[0.24rem] font-normal text-[#a5a19f]">
            {t("sec2.note")}
          </p>
        </PhonePicture>
        {/* orvibo.com's full film, behind its poster */}
        <PhonePicture {...pic("p05")}>
          <OrviboWatchTrigger
            videoSrc="/orvibo/videos/v5_2.mp4"
            playOnDark
            className="absolute inset-0 cursor-pointer justify-center text-[0.24rem] font-medium text-white"
          >
            {t("sec3_1.video_watch")}
          </OrviboWatchTrigger>
        </PhonePicture>
        {/* face recognition: the heading, the photo's caption, the figures, the stereo camera and the three cases */}
        {section(
          "p06",
          3.15,
          head("m.face.title"),
          <>
            <p className="absolute top-[0.6rem] left-[0.85rem] text-[0.25rem] leading-[0.34rem] font-normal text-[#ead8b8]">
              {t("m.face.caption")}
            </p>
            {STATS.map((x, i) => (
              <div
                key={x}
                className="absolute top-[5.55rem] w-[1.36rem] -translate-x-1/2 text-center"
                style={{ left: `${x}rem` }}
              >
                <p className="text-[0.24rem] leading-[0.34rem] font-medium whitespace-nowrap text-[#e2cfae]">
                  {t(`sec3.stat${i + 1}_value`)}
                </p>
                <p className="mt-[0.02rem] text-[0.15rem] leading-[0.2rem] font-normal text-[#777777]">
                  {t(`sec3.stat${i + 1}`)}
                </p>
              </div>
            ))}
            <div className="absolute top-[7.66rem] left-[0.89rem] w-[5.75rem]">
              <p className="text-[0.28rem] leading-[0.42rem] font-medium whitespace-pre-line text-white">
                {t("m.face.stereo")}
              </p>
              <p className="mt-[0.18rem] text-[0.17rem] leading-[0.32rem] font-normal text-[#9d9d9f]">
                {t("m.face.stereoDesc")}
              </p>
            </div>
            {CASES.map(([n, at]) => (
              <div key={at} className={cn("absolute", at)}>
                <p className="text-[0.22rem] leading-[0.28rem] font-normal text-[#cdcdcd]">
                  {t(`sec4.row_item_tite${n}`)}
                </p>
                <p className="mt-[0.04rem] text-[0.14rem] leading-[0.21rem] font-normal text-[#9c9c9e]">
                  {t(`sec4.row_item_content${n}`)}
                </p>
              </div>
            ))}
            <p className="absolute top-[20.36rem] left-[0.9rem] text-[0.17rem] leading-[0.26rem] font-normal text-[#9d9d9f]">
              {t("sec4.sec4_tips")}
            </p>
          </>,
          "pt-[1.18rem]",
        )}
        {/* the peephole: its title (missing on orvibo.com) and its two slides */}
        <h2 className="px-[0.75rem] pt-[0.8rem] pb-[0.5rem] text-[0.46rem] leading-[0.66rem] font-semibold text-balance">
          <span className={GOLD}>{t("sec5.sec5_title")}</span>
        </h2>
        <ProductSlideshow
          autoplay={false}
          pagination="none"
          slides={[
            {
              key: "camera",
              content: (
                <PhonePicture {...pic("p08")}>
                  <p className="absolute top-[3.36rem] left-[0.95rem] w-[3.1rem] text-[0.18rem] leading-[0.3rem] font-normal text-[#ead9bd]">
                    {t("m.camera.lines")}
                  </p>
                  {(
                    [
                      ["hd", "top-[6.07rem]"],
                      ["wide", "top-[7.03rem]"],
                      ["night", "top-[7.93rem]"],
                    ] as const
                  ).map(([key, at]) => (
                    <p
                      key={key}
                      className={cn(
                        "absolute left-[0.95rem] text-[0.21rem] leading-[0.28rem] font-normal text-[#dccaa9]",
                        at,
                      )}
                    >
                      {t(`m.camera.${key}`)}
                    </p>
                  ))}
                  <p className="absolute top-[7.5rem] left-[0.94rem] text-[0.3rem] leading-[0.36rem] font-normal text-[#e3d0b2]">
                    {t("m.camera.color")}
                  </p>
                  <div className="absolute top-[8.9rem] left-[0.95rem] w-[5.9rem] text-[0.15rem] leading-[0.26rem] font-normal text-[#a4a4a4]">
                    <p>{t("m.camera.note1")}</p>
                    <p className="mt-[0.06rem]">{t("m.camera.note2")}</p>
                  </div>
                </PhonePicture>
              ),
            },
            {
              key: "cloud",
              content: (
                <PhonePicture {...pic("p09")}>
                  <p className="absolute top-[3.42rem] left-[3.86rem] text-[0.4rem] leading-none font-semibold text-[#cbb388]">
                    {t("m.days")}
                  </p>
                  <p className="absolute top-[8.68rem] left-[1.25rem] w-[5rem] text-[0.17rem] leading-[0.3rem] font-normal text-[#dbcaad]">
                    {t("m.cloud")}
                  </p>
                </PhonePicture>
              ),
            },
          ]}
        />
        {swipe}
        {section(
          "p11",
          3.55,
          head("sec6.sec6_title1", "sec6.sec6_title2"),
          undefined,
          "pt-[0.72rem]",
        )}
        {section(
          "p12",
          3.1,
          head("sec7.title", "sec7.desc"),
          undefined,
          "pt-[0.78rem]",
        )}
        {/* the four finishes */}
        <ProductSlideshow
          autoplay={false}
          pagination="none"
          slides={FINISHES.map(([name, n]) => ({
            key: name,
            content: (
              <PhonePicture {...pic(name)}>
                <p className="absolute top-[8.76rem] left-[0.69rem] text-[0.38rem] leading-[0.48rem] font-normal text-[#9ba0a1]">
                  {t(`sec8.swiper_pagination_item${n}`)}
                </p>
              </PhonePicture>
            ),
          }))}
        />
        {swipe}
        {/* the grip */}
        {section(
          "p18",
          2.95,
          head("sec9_video.title"),
          undefined,
          "pt-[0.78rem]",
        )}
        <PhonePicture {...pic("p19")}>
          <p className="absolute top-[1.46rem] left-[4.15rem] w-[2.85rem] text-[0.18rem] leading-[0.32rem] font-normal text-white">
            {t("m.grip")}
          </p>
        </PhonePicture>
        {/* the power: two batteries, the figures and the notes; then whole-home automation's title */}
        <PhonePicture {...pic("p20", 0, 13.9)}>
          <div className="absolute top-[0.96rem] left-[0.75rem] w-[5rem]">
            {head("m.power.title")}
            <p className="mt-[0.26rem] text-[0.19rem] leading-[0.34rem] font-normal text-[#efe5cd]">
              {t("sec9.sec9_title2")} {t("m.noWorry")}
            </p>
          </div>
          {POWER.map(([n, at]) => (
            <div
              key={n}
              className={cn("absolute left-[0.73rem] w-[3.1rem]", at)}
            >
              <p className="text-[0.32rem] leading-[0.42rem] font-medium text-[#e2cfae]">
                {t(`sec9.battery${n}_value`)}
              </p>
              <p className="mt-[0.06rem] text-[0.19rem] leading-[0.26rem] font-normal text-[#d4d4d4]">
                {t(`sec9.battery${n}`)}
              </p>
            </div>
          ))}
          <div className="absolute top-[11.36rem] left-[0.74rem] w-[3.3rem] text-[0.14rem] leading-[0.24rem] font-normal text-[#9e9e9e]">
            <p>{t("sec9.battery_note")}</p>
            <p>{t("sec9.battery_note2")}</p>
          </div>
        </PhonePicture>
        <div className="px-[0.75rem] pt-[0.3rem] pb-[0.5rem]">
          {head("sec9.sec10_title")}
        </div>
        <ProductSlideshow
          autoplay={false}
          pagination="none"
          slides={[
            { key: "home", content: scene("p21", "m.scene.home", false) },
            { key: "away", content: scene("p22", "m.scene.away", true) },
          ]}
        />
        {swipe}
        {/* the video intercom */}
        {section(
          "p24",
          3.38,
          head("sec9.sec11_title", "m.intercom"),
          undefined,
          "pt-[0.98rem]",
        )}
        {/* the warranty: the heading, the shield's tag, the two cards and the note */}
        {section(
          "p25",
          3.3,
          head("m.warranty.title"),
          <>
            <p className="absolute top-[2.45rem] left-[5.67rem] -translate-x-1/2 text-[0.4rem] leading-none font-semibold text-[#c4c4c6] [writing-mode:vertical-rl]">
              {t("m.warranty.tag")}
            </p>
            <p className="absolute top-[7.15rem] left-[0.58rem] w-[2.95rem] text-[0.2rem] leading-[0.36rem] font-normal text-[#d6d6d9]">
              {t("m.warranty.card1")}
            </p>
            <p className="absolute top-[7.15rem] left-[4.07rem] w-[2.95rem] text-[0.2rem] leading-[0.36rem] font-normal text-[#d6d6d9]">
              {t("m.warranty.card2")}
            </p>
            <p className="absolute top-[9.68rem] left-[0.55rem] w-[6.45rem] text-[0.14rem] leading-[0.25rem] font-normal text-[#7d7e81]">
              ④ {t("sec2.note5")} {t("sec2.note6")}
            </p>
          </>,
          "pt-[1.3rem]",
        )}
        {/* the last tiles: lock body, film, guard, eight ways; the alerts and the protections */}
        <PhonePicture {...pic("p26")}>
          {LAST.map(([key, at]) => (
            <p
              key={key}
              className={cn(
                "absolute w-[3.05rem] text-center text-[0.21rem] leading-[0.28rem] font-normal text-[#ccbca2]",
                at,
              )}
            >
              {ts(key).split("\n")[0]}
            </p>
          ))}
          {ALERTS.map(([key, at]) => (
            <p
              key={key}
              className={cn(
                "absolute -translate-y-1/2 rounded-full border border-[#c9ad83]/60 bg-[image:linear-gradient(90deg,#4a3e2f,#8a7354)] px-[0.14rem] text-[0.17rem] leading-[0.36rem] font-normal whitespace-nowrap text-[#f3e7d7]",
                at,
              )}
            >
              {t(`m.alert.${key}`)}
            </p>
          ))}
        </PhonePicture>
      </div>
    </div>
  );
}
