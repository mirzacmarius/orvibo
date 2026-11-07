import { PhonePicture } from "@/components/orvibo/product/PhonePicture";
import { productPageHelpers } from "@/components/orvibo/product/productPageHelpers";
import type { ProductViewProps } from "@/lib/orvibo/products/types";
import { cn } from "@v1/ui/utils";
import type { ReactNode } from "react";

/** orvibo.com's phone pictures for this page (750 px wide) without their words, and each one's height in hundreds
 * of its pixels: the phone view's rem is a hundredth of the picture's width, so a word drawn at (x, y) px goes at
 * (x / 100, y / 100) rem. Each section's heading and lines stand in a block whose ground is the top of its picture
 * (down to `cut`), stretched as the words need, above the rest of the picture. orvibo.com's 19th picture is missing
 * on its own server, so there is no p19. */
const PIC = "/orvibo/products/curtain_motor/phone";
const HEIGHT = {
  p01: 13.78,
  p02: 8.71,
  p03: 12.51,
  p04: 4.6,
  p05: 10.15,
  p06: 13.69,
  p07: 12.64,
  p08: 5.13,
  p09: 15.76,
  p10: 12.48,
  p11: 11.22,
  p12: 16.6,
  p13: 12.29,
  p14: 11.4,
  p15: 14.51,
  p16: 15.36,
  p17: 15.49,
  p18: 11.62,
  p20: 11.02,
} as const;
type Slice = keyof typeof HEIGHT;

/** The hero phone's screen (tilted): each word's middle (rem), its turn and its size. */
const SCREEN = [
  ["title", 5.85, 9.77, -9, "text-[0.1rem]"],
  ["open", 6.36, 11.9, -16, "text-[0.075rem]"],
  ["stop", 6.81, 11.74, -16, "text-[0.075rem]"],
  ["close", 7.25, 11.56, -16, "text-[0.075rem]"],
  ["guests", 6.59, 12.13, -22, "text-[0.085rem]"],
  ["sleep", 7.28, 11.86, -22, "text-[0.085rem]"],
  ["wake", 6.7, 12.37, -22, "text-[0.085rem]"],
  ["dim", 7.42, 12.1, -22, "text-[0.085rem]"],
] as const;
/** The grid (02): each tile's lines, their top and their middle. */
const GRID = [
  ["systems", "top-[2.41rem] left-[0.36rem]"],
  ["ways", "top-[2.19rem] left-[3.93rem]"],
  ["quiet", "top-[4.5rem] left-[0.36rem]"],
  ["design", "top-[4.5rem] left-[3.93rem]"],
  ["track", "top-[6.74rem] left-[0.36rem]"],
  ["warranty", "top-[6.76rem] left-[3.93rem]"],
] as const;
/** The six technologies (03): each one's name. */
const TECH = [
  ["quiet", "top-[4.62rem] left-[0.29rem]"],
  ["hall", "top-[4.62rem] left-[3.89rem]"],
  ["belt", "top-[7.8rem] left-[0.29rem]"],
  ["bearings", "top-[7.8rem] left-[3.89rem]"],
  ["shaft", "top-[11.07rem] left-[0.29rem]"],
  ["coating", "top-[11.07rem] left-[3.89rem]"],
] as const;
/** The four speakers' bubbles (05): where each one stands and which corner is its tail. */
const SAY = [
  ["butler", "top-[3.18rem] right-[1.25rem] rounded-br-[0.06rem]"],
  ["tmall", "top-[4.43rem] left-[0.63rem] rounded-br-[0.06rem]"],
  ["xiaoai", "top-[5.25rem] right-[0.58rem] rounded-bl-[0.06rem]"],
  ["xiaodu", "top-[5.97rem] left-[0.6rem] rounded-br-[0.06rem]"],
] as const;
/** The 22 ways (06), row by row: each icon's name under it (MixPad and Google Home keep theirs in the picture). The
 * rows' tops are from the part's top (4.3 rem). */
const WAY_ROWS = [1.34, 2.95, 4.57, 6.19, 7.79];
const WAY_COLS = [1.13, 2.44, 3.74, 5.05, 6.36];
const WAYS = [
  [null, "xiaoaiSpeaker", "tmall", "xiaodu", "tingting"],
  ["home", "miHome", "tmallApp", "siri", "xiaoai"],
  ["xiaowei", "alexa", null, "miAuto", "tmallAuto"],
  ["remote", "pull", "anywhere", "switch", "manual"],
] as const;
/** The two tracks side by side (10): each row's top (from the part's top, 3.95 rem). */
const TABLE = [
  ["time", 2.5],
  ["noise", 3.68],
  ["pull", 4.84],
  ["fit", 6.02],
] as const;
/** The track's cards (12): where each one's name and lines stand (from the part's top, 3.4 rem). */
const CARDS = [
  ["thick", "top-[1.4rem] left-[0.71rem]"],
  ["load", "top-[5.3rem] left-[4.11rem]"],
  ["runners", "top-[9.47rem] left-[0.72rem]"],
] as const;
/** The shaft's figures (15; from the part's top, 4.2 rem): their middle. */
const STATS = [
  ["teeth", "left-[0.32rem]"],
  ["zinc", "left-[2.5rem]"],
  ["years", "left-[4.8rem]"],
] as const;
/** The details (20): each card's words and their middle. */
const DETAILS = [
  ["open", "top-[3.24rem] left-[0.7rem]"],
  ["pull", "top-[6.18rem] left-[4.04rem]"],
  ["power", "top-[9.12rem] left-[0.68rem]"],
] as const;

/** orvibo.com's headings: blue into teal, line by line. */
const HEAD =
  "bg-[image:linear-gradient(90deg,#2e94e1,#68d3cb)] bg-clip-text box-decoration-clone text-transparent";
/** The scenes' pills (17, 18). */
const PILL =
  "inline-block rounded-full bg-[image:linear-gradient(90deg,#2b8ff0,#6cdccd)] px-[0.24rem] text-[0.34rem] leading-[0.66rem] font-semibold text-white";

/** The Elf curtain motor page on phones: orvibo.com's phone page, its pictures without their words and the words in
 * HTML. */
export function CurtainMotorPhone({ locale, text }: ProductViewProps) {
  const { t, ts, img } = productPageHelpers(locale, text);
  /** A phone picture, or the part of it from `top` (rem) down. */
  const pic = (name: Slice, top = 0) => ({
    src: img(`${PIC}/${name}.webp`),
    size: [7.5, HEIGHT[name]] as const,
    part: [0, top, 7.5, HEIGHT[name]] as const,
  });
  /** A section's words over the top of its picture (down to `cut`, stretched to fit them), then the rest. */
  const section = (
    name: Slice,
    cut: number,
    words: ReactNode,
    overlay?: ReactNode,
    className = "pt-[1.2rem]",
  ) => (
    <>
      <div
        className={cn(
          "bg-top bg-no-repeat px-[0.54rem] pb-[0.4rem]",
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
      {cut < HEIGHT[name] && (
        <PhonePicture {...pic(name, cut)}>{overlay}</PhonePicture>
      )}
    </>
  );
  /** A heading's words, its lines kept only while each fits on one (else they run on, balanced). */
  const flow = (key: string) => {
    const lines = ts(key).split("\n");
    return lines.some((line) => line.length > 23)
      ? lines.join(" ")
      : lines.join("\n");
  };
  /** A section's heading and lines (`dark`: on a dark ground). */
  const head = (title: string, desc?: string, dark = false) => (
    <>
      <h2 className="text-[0.5rem] leading-[0.78rem] font-semibold whitespace-pre-line text-balance">
        <span className={HEAD}>{flow(title)}</span>
      </h2>
      {desc && (
        <p
          className={cn(
            "mt-[0.22rem] text-[0.25rem] leading-[0.42rem] font-normal",
            dark ? "text-[#dcdde1]" : "text-[#545454]",
          )}
        >
          {t(desc)}
        </p>
      )}
    </>
  );
  /** A chip's words over its pill (the icon stays in the picture), by their middle. */
  const chip = (key: string, at: string, color = "text-white") => (
    <p
      className={cn(
        "absolute -translate-y-1/2 text-[0.22rem] leading-none font-normal whitespace-nowrap",
        color,
        at,
      )}
    >
      {t(`m.chip.${key}`)}
    </p>
  );
  /** A speech bubble. */
  const bubble = (key: string, at: string, look: string) => (
    <p
      className={cn(
        "absolute rounded-[0.28rem] px-[0.26rem] text-[0.22rem] leading-[0.56rem] font-normal whitespace-nowrap backdrop-blur-[0.06rem]",
        look,
        at,
      )}
    >
      {t(key)}
    </p>
  );

  return (
    <div className="font-orvibo text-[16px] leading-[1.6] text-[#666666]">
      <div id="overview-phone" className="bg-white">
        {/* hero: the name and its Wi-Fi badge, the line, the voice caption and the phone's screen */}
        <PhonePicture {...pic("p01")}>
          <div className="absolute top-[2.12rem] inset-x-[0.3rem] text-center">
            <h1 className="text-[0.42rem] leading-[0.6rem] font-semibold text-balance text-black">
              {ts("motor_banner.banner_title")}{" "}
              <span className="ml-[0.04rem] inline-block rounded-full bg-black px-[0.13rem] align-[0.05rem] text-[0.22rem] leading-[0.36rem] font-semibold text-white">
                {t("motor_banner.title_desc")}
              </span>
            </h1>
            <p className="mt-[0.18rem] text-[0.27rem] leading-[0.4rem] font-normal text-[#252d36]">
              {t("motor_banner.banner_desc")}
            </p>
          </div>
          <p className="absolute top-[12.22rem] left-[0.4rem] w-[3.9rem] text-center text-[0.28rem] leading-[0.36rem] font-normal text-[#6e849d]">
            {t("m.voice")}
          </p>
          {SCREEN.map(([key, x, y, turn, size]) => (
            <span
              key={key}
              className={cn(
                "absolute leading-none font-normal whitespace-nowrap text-[#4a4a4a]",
                size,
              )}
              style={{
                left: `${x}rem`,
                top: `${y}rem`,
                transform: `translate(-50%, -50%) rotate(${turn}deg)`,
              }}
            >
              {t(`m.screen.${key}`)}
            </span>
          ))}
        </PhonePicture>
        {/* the grid: six tiles */}
        <PhonePicture {...pic("p02")}>
          <p className="absolute top-[1.83rem] left-[2.4rem] w-[1.2rem] text-center text-[0.13rem] leading-none font-normal whitespace-nowrap text-[#3e3d40]">
            {t("m.grid.home")}
          </p>
          {GRID.map(([key, at]) => (
            <p
              key={key}
              className={cn(
                "absolute w-[3.3rem] text-center text-[0.24rem] leading-[0.38rem] font-normal text-[#31363a]",
                at,
              )}
            >
              {t(`m.grid.${key}`)}
            </p>
          ))}
        </PhonePicture>
        {/* six core technologies */}
        <PhonePicture {...pic("p03")}>
          <h2 className="absolute top-[0.95rem] inset-x-[0.3rem] text-center text-[0.42rem] leading-[0.56rem] font-semibold text-black">
            {t("sec1.motor_title")}
          </h2>
          {TECH.map(([key, at]) => (
            <p
              key={key}
              className={cn(
                "absolute w-[3.32rem] text-center text-[0.23rem] leading-[0.32rem] font-normal text-black",
                at,
              )}
            >
              {t(`m.tech.${key}`)}
            </p>
          ))}
        </PhonePicture>
        {section(
          "p04",
          4.6,
          head("sec2.motor_title", "m.apps"),
          undefined,
          "pt-[1.04rem]",
        )}
        {/* a word to any speaker */}
        <PhonePicture {...pic("p05")}>
          {SAY.map(([key, at]) =>
            bubble(`m.say.${key}`, at, "bg-[#8fbad8]/75 text-white"),
          )}
        </PhonePicture>
        {/* 22 ways: the heading, then each icon's name */}
        {section(
          "p06",
          4.3,
          head("m.grid.ways", "sec2.motor_desc"),
          <>
            {WAYS.flatMap((row, r) =>
              row.map(
                (key, c) =>
                  key && (
                    <p
                      key={key}
                      className="absolute w-[1.3rem] -translate-x-1/2 text-center text-[0.16rem] leading-[0.2rem] font-normal text-[#1d2427]"
                      style={{
                        left: `${WAY_COLS[c]}rem`,
                        top: `${WAY_ROWS[r]}rem`,
                      }}
                    >
                      {t(`m.way.${key}`)}
                    </p>
                  ),
              ),
            )}
            {(
              [
                ["timer", 3.02],
                ["percent", 4.32],
              ] as const
            ).map(([key, x]) => (
              <p
                key={key}
                className="absolute w-[1.3rem] -translate-x-1/2 text-center text-[0.16rem] leading-[0.2rem] font-normal text-[#1d2427]"
                style={{ left: `${x}rem`, top: `${WAY_ROWS[4]}rem` }}
              >
                {t(`m.way.${key}`)}
              </p>
            ))}
          </>,
        )}
        {section(
          "p07",
          4.75,
          head("sec3.motor_title", "sec3.motor_desc", true),
          undefined,
          "pt-[1.43rem]",
        )}
        {section(
          "p08",
          5.13,
          head("sec4.title", "sec4.motor_desc"),
          undefined,
          "pt-[1.31rem]",
        )}
        {/* the two motors side by side */}
        <PhonePicture {...pic("p09")}>
          <p className="absolute top-[7.7rem] right-[0.74rem] text-[0.26rem] leading-[0.32rem] font-normal text-[#dee2e6]">
            {t("m.rival")}
          </p>
          <p className="absolute top-[10.2rem] left-[0.75rem] w-[3.2rem] text-center text-[0.25rem] leading-[0.34rem] font-normal text-[#8f969b]">
            {t("m.cylinder")}
          </p>
          <p className="absolute top-[10.05rem] left-[4.3rem] w-[2.55rem] text-center text-[0.25rem] leading-[0.34rem] font-normal text-[#b7bcc1]">
            {t("m.square")}
          </p>
          <p className="absolute top-[13.6rem] left-[0.75rem] w-[3.2rem] text-center text-[0.25rem] leading-[0.41rem] font-normal text-[#707980]">
            {t("m.smooth")}
          </p>
          <p className="absolute top-[13.6rem] left-[4.25rem] w-[2.65rem] text-center text-[0.24rem] leading-[0.41rem] font-normal text-[#555b60]">
            {t("m.rough")}
          </p>
        </PhonePicture>
        {/* the telescopic track against another */}
        {section(
          "p10",
          3.95,
          head("sec5.motor_title", "sec5.motor_desc"),
          <>
            <p className="absolute top-[1.0rem] left-[0.66rem] w-[3.4rem] text-center text-[0.27rem] leading-[0.36rem] font-semibold text-[#0d2f60]">
              {t("m.table.orvibo")}
            </p>
            <p className="absolute top-[1.33rem] left-[4.3rem] w-[2.5rem] text-center text-[0.29rem] leading-[0.4rem] font-normal text-[#466085]">
              {t("m.rival")}
            </p>
            {TABLE.map(([key, top]) => (
              <div key={key}>
                <p
                  className="absolute left-[0.66rem] w-[3.4rem] text-center text-[0.24rem] leading-[0.32rem] font-normal text-[#0d2c57]"
                  style={{ top: `${top}rem` }}
                >
                  {t(`m.table.${key}`)}
                </p>
                <p
                  className="absolute left-[4.3rem] w-[2.5rem] text-center text-[0.24rem] leading-[0.32rem] font-normal text-[#485d7c]"
                  style={{ top: `${top}rem` }}
                >
                  {t(`m.table.${key}Rival`)}
                </p>
              </div>
            ))}
          </>,
          "pt-[0.69rem]",
        )}
        {section(
          "p11",
          4.4,
          head("sec10.motor_title", "sec10.motor_desc"),
          undefined,
          "pt-[1.04rem]",
        )}
        {/* the track and its three cards */}
        {section(
          "p12",
          3.4,
          head("m.trackTitle"),
          CARDS.map(([key, at]) => (
            <div key={key} className={cn("absolute w-[2.8rem]", at)}>
              <p className="text-[0.27rem] leading-[0.38rem] font-medium text-[#111111]">
                {t(`m.card.${key}`)}
              </p>
              <p className="mt-[0.16rem] text-[0.2rem] leading-[0.36rem] font-normal text-[#333333]">
                {t(`m.card.${key}Desc`)}
              </p>
            </div>
          )),
          "pt-[1.3rem]",
        )}
        {section("p13", 4.5, head("sec7.motor_title", "sec7.motor_desc", true))}
        {section(
          "p14",
          4.3,
          head("sec8.motor_title", "sec8.motor_desc"),
          <>
            <p className="absolute top-[1.3rem] left-[5.78rem] text-[0.24rem] leading-none font-normal text-[#c4c7cd]">
              {t("m.turns")}
            </p>
            <p className="absolute top-[6.14rem] inset-x-[0.52rem] text-[0.17rem] leading-[0.26rem] font-normal text-[#484a4f]">
              {t("sec8.desc")}
            </p>
          </>,
          "pt-[1.25rem]",
        )}
        {section(
          "p15",
          4.2,
          head("sec9.motor_title", "sec9.motor_desc"),
          STATS.map(([key, x]) => (
            <div
              key={key}
              className={cn("absolute top-[8.42rem] w-[2.2rem] text-center", x)}
            >
              <p className="text-[0.42rem] leading-[0.6rem] font-semibold text-[#1d3540]">
                {t(`m.stat.${key}`)}
              </p>
              <p className="text-[0.2rem] leading-[0.3rem] font-normal text-[#55656f]">
                {t(`m.stat.${key}Desc`)}
              </p>
            </div>
          )),
          "pt-[1.13rem]",
        )}
        {section(
          "p16",
          4.8,
          head("sec11.motor_title", "sec11.motor_desc"),
          <>
            {chip("sun", "top-[6.42rem] left-[1.56rem]")}
            {chip("open15", "top-[7.37rem] left-[1.56rem]")}
          </>,
          "pt-[1.41rem]",
        )}
        {/* scenes with MixPad: the heading, then Home mode */}
        {section(
          "p17",
          6.15,
          <>
            {head("sec12.motor_title", "sec12.motor_desc")}
            <p className={cn(PILL, "mt-[0.36rem]")}>{t("m.mode.home")}</p>
            <p className="mt-[0.24rem] text-[0.24rem] leading-[0.38rem] font-normal text-[#525252]">
              {t("sec12.slide_title")}
            </p>
          </>,
          <>
            {bubble(
              "m.welcome",
              "top-[2.29rem] left-[4.2rem] rounded-bl-[0.06rem]",
              "bg-white/60 text-[#5e5d5a]",
            )}
            {chip("lights", "top-[6.82rem] left-[1.94rem]")}
            {chip("open80", "top-[7.75rem] left-[1.86rem]")}
          </>,
          "pt-[1.26rem]",
        )}
        {/* Movie mode */}
        {section(
          "p18",
          2.5,
          <>
            <p className={PILL}>{t("m.mode.movie")}</p>
            <p className="mt-[0.3rem] text-[0.24rem] leading-[0.4rem] font-normal text-[#545454]">
              {t("sec12.slide_title2")}
            </p>
          </>,
          <>
            {bubble(
              "m.askMovie",
              "top-[0.82rem] left-[0.92rem] rounded-bl-[0.06rem]",
              "bg-white/20 text-white",
            )}
            {bubble(
              "m.replyMovie",
              "top-[1.75rem] right-[0.93rem] rounded-br-[0.06rem]",
              "bg-white/20 text-white",
            )}
          </>,
          "pt-[0.44rem]",
        )}
        {/* the details */}
        <PhonePicture {...pic("p20")}>
          <h2 className="absolute top-[0.62rem] inset-x-[0.3rem] text-center text-[0.5rem] leading-[0.7rem] font-semibold">
            <span className={HEAD}>{t("sec13.motor_title")}</span>
          </h2>
          {DETAILS.map(([key, at]) => (
            <p
              key={key}
              className={cn(
                "absolute w-[2.75rem] -translate-y-1/2 text-[0.27rem] leading-[0.38rem] font-medium text-[#111111]",
                at,
              )}
            >
              {t(`m.detail.${key}`)}
            </p>
          ))}
        </PhonePicture>
      </div>
    </div>
  );
}
