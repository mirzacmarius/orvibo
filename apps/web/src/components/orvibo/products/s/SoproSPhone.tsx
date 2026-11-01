import { MarketingVideo } from "@/components/orvibo/MarketingVideo";
import { OrviboWatchTrigger } from "@/components/orvibo/OrviboVideoProvider";
import { PhoneSwiper } from "@/components/orvibo/product/PhoneSwiper";
import { ProductReveal } from "@/components/orvibo/product/ProductReveal";
import { productPageHelpers } from "@/components/orvibo/product/productPageHelpers";
import type { ProductViewProps } from "@/lib/orvibo/products/types";
import { orviboRoutes } from "@/lib/orvibo/routes";
import { cn } from "@v1/ui/utils";
import Link from "next/link";

/** orvibo.com's phone pictures for this page. */
const PIC = "/guanwang_second/front/mobile/images/new/product/s";
/** The desktop page's pictures the phone page shares (its strips, cards, faces and sensor slides). */
const DESK = "/guanwang_second/front/images/product/s";
/** The films made from orvibo.com's GIFs (pages/s/anim_spec.py). */
const FILMS = "/orvibo/products/s/phone";

/** A heading's gradient fill (the text clipped to it). */
const FILL = "bg-clip-text [-webkit-text-fill-color:transparent]";

/** The sec9 voice commands, as the desktop page's (sec11.chip1-13; the spotlight one twice). */
const CHIP = {
  light:
    "px-[0.36rem] font-medium text-[#111111] bg-[image:linear-gradient(90deg,#f9fcff_0%,#eef6ff_100%)] shadow-[0_0.07rem_0.2rem_rgba(166,184,191,0.28)]",
  peach:
    "pl-[0.09rem] pr-[0.36rem] font-medium text-[#111111] bg-[image:linear-gradient(90deg,#fee3bc_0%,#fecf90_100%)]",
  orange:
    "pl-[0.09rem] pr-[0.36rem] font-semibold text-white bg-[image:linear-gradient(90deg,#ff814a_0%,#fe6238_100%)]",
  teal: "pl-[0.09rem] pr-[0.36rem] font-semibold text-white bg-[image:linear-gradient(90deg,#3fbdba_0%,#24aca0_100%)]",
  purple:
    "pl-[0.09rem] pr-[0.36rem] font-semibold text-white bg-[image:linear-gradient(90deg,#8860e8_0%,#7b61ff_100%)]",
};
const CHIP_ROWS: { chip: string; look: keyof typeof CHIP; face?: number }[][] =
  [
    [
      { chip: "chip1", look: "light" },
      { chip: "chip2", look: "light" },
      { chip: "chip3", look: "peach", face: 1 },
      { chip: "chip4", look: "light" },
    ],
    [
      { chip: "chip5", look: "light" },
      { chip: "chip6", look: "orange", face: 2 },
      { chip: "chip7", look: "light" },
      { chip: "chip8", look: "teal", face: 3 },
      { chip: "chip9", look: "light" },
    ],
    [
      { chip: "chip10", look: "light" },
      { chip: "chip11", look: "light" },
      { chip: "chip12", look: "purple", face: 4 },
      { chip: "chip13", look: "light" },
      { chip: "chip7", look: "light" },
    ],
  ];

/** The family's product strips (sec4), cropped to their photos as on the desktop page. */
const STRIPS = {
  1: `${DESK}/sec4_4_1-bf79f5bb31.webp`,
  2: `${DESK}/sec4_4_2-fa7ff872a9.webp`,
  3: `${DESK}/sec4_4_3-b115376466.webp`,
} as const;

/** The optics cards (sec5): orvibo.com's phone page has the first two only, so the desktop page's six. */
const OPTICS = [
  "sec5_1-d80d70e70c",
  "sec5_2-0c933d7a0e",
  "sec5_3-60b795f2f4",
  "sec5_4-b4db8f63a4",
  "sec5_5-93a890e592",
  "sec5_6-aa4d5ef309",
];

/** The presence sensor's slides (sec12): orvibo.com's phone pictures are missing on its server, so the
 * desktop page's four, with their names. */
const SENSOR = [
  ["sec13_1-a06407767e", "sec13.slide_info"],
  ["sec13_2-29ecc08128", "sec13.slide_info2"],
  ["sec13_3-ef72b3e026", "sec13.slide_info3"],
  ["sec13_4-3a9e28d8c3", "sec13.slide_info4"],
] as const;

/** The SOPRO S page on phones: orvibo.com's phone page (/mobile/cn/product/s.html), its HTML words in
 * Romanian and English, its pictures' words redrawn per language and its GIFs as short films. orvibo.com's
 * phone page shows stills where its GIFs are missing on its server (the banner, the video teaser, sec6, the
 * bedroom scene, the first butler room, sec13 and sec16); so does this one. */
export function SoproSPhone({ locale, text, base, common }: ProductViewProps) {
  const { t, ts, img, bg, lines } = productPageHelpers(locale, text);
  const plan = orviboRoutes(base).service("customization");
  /** A film, muted and looped while on screen; `words` for the ones redrawn per language. */
  const film = (name: string, className: string, words = false) => {
    const path = words
      ? `/orvibo/i18n/${locale}${FILMS}/${name}`
      : `${FILMS}/${name}`;
    return (
      <MarketingVideo
        bare
        src={`${path}.mp4`}
        poster={`${path}.jpg`}
        className={cn("object-cover", className)}
      />
    );
  };
  /** One copy of a strip and its names; each row shows it twice for a seamless loop. */
  const strip = (row: 1 | 2 | 3, hidden = false) => (
    <div className="shrink-0 w-[21.91rem]" aria-hidden={hidden || undefined}>
      <div
        className="bg-no-repeat bg-cover h-[2.39rem]"
        style={bg(STRIPS[row])}
      />
      <ul className="mt-[0.1rem] grid grid-cols-5 text-center text-[0.18rem] leading-[0.24rem] font-normal text-white/60">
        {[1, 2, 3, 4, 5].map((n) => (
          <li key={n} className="px-[0.2rem]">
            {t(`sec4.row${row}.item${n}`)}
          </li>
        ))}
      </ul>
    </div>
  );
  /** One copy of the voice commands: three rows of chips. */
  const chips = (hidden = false) => (
    <div
      className="shrink-0 flex flex-col gap-[0.36rem] py-[0.3rem] pr-[0.4rem]"
      aria-hidden={hidden || undefined}
    >
      {CHIP_ROWS.map((row) => (
        <ul key={row[0]?.chip} className="flex gap-[0.4rem]">
          {row.map((item) => (
            <li
              key={item.chip}
              className={cn(
                "flex items-center h-[0.62rem] rounded-full whitespace-nowrap text-[0.2rem]",
                CHIP[item.look],
              )}
            >
              {item.face && (
                <span
                  className="mr-[0.2rem] shrink-0 rounded-full bg-no-repeat bg-cover size-[0.44rem]"
                  style={bg(`${DESK}/sec11_face${item.face}.webp`)}
                />
              )}
              {t(`sec11.${item.chip}`)}
            </li>
          ))}
        </ul>
      ))}
    </div>
  );

  return (
    <div className="font-orvibo text-[16px] leading-[1.6] text-[#333333]">
      <div id="overview-phone" className="w-full bg-black overflow-hidden">
        {/* s__banner */}
        <div
          className="bg-center bg-no-repeat bg-cover relative h-[13.44rem] text-white"
          style={bg(`${PIC}/banner-09d458eaa4.webp`)}
        >
          <div className="absolute left-0 bottom-[1.6rem] w-full px-[0.4rem] text-center text-white">
            <h1 className="text-[0.5rem] leading-[0.64rem] font-normal text-balance">
              {t("m.banner.title")}
            </h1>
            <p className="mt-[0.2rem] text-[0.28rem] leading-[0.4rem] font-light opacity-[0.59] tracking-[0.03rem] text-balance">
              {t("s_banner.video_title")}
            </p>
            <Link
              href={plan}
              className="mx-auto mt-[0.48rem] inline-block border border-white px-[0.3rem] text-[0.26rem] leading-[0.7rem] font-normal text-white"
            >
              {t("s_banner.btn_text")}
            </Link>
          </div>
        </div>
        {/* sec1: the film's still, which opens the full film */}
        <OrviboWatchTrigger
          videoSrc="/8f4239b1vodgzp1251222210/3a80b318387702293679134921/0lwcQ5V5mQEA.mp4"
          showPlayIcon={false}
          className="block bg-center bg-no-repeat bg-cover relative w-full h-[5.4rem] cursor-pointer"
        >
          <span className="sr-only">{ts("s_banner.video_watch")}</span>
          <span
            className="absolute inset-0 bg-center bg-no-repeat bg-cover"
            style={bg(`${PIC}/sec1-31f28b9772.webp`)}
          />
          <span
            className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 size-[0.92rem] bg-cover bg-no-repeat"
            style={bg(`${PIC}/icon_player-5c8d2aa98f.webp`)}
          />
        </OrviboWatchTrigger>
        {/* sec2: the cards */}
        <div className="pt-[0.3rem] pb-[0.5rem] flex justify-center w-full">
          <div className="w-[7.08rem]">
            <ProductReveal
              className="bg-center bg-no-repeat bg-cover h-[3.18rem]"
              style={bg(`${PIC}/sec2_1-aca0b1edcc.webp`)}
            />
            <div className="mt-[0.24rem] flex">
              <ProductReveal
                className="bg-center mr-[0.24rem] bg-no-repeat bg-cover w-[3.72rem] h-[6.1rem]"
                style={bg(`${PIC}/sec2_2-c079328828.webp`)}
              />
              <div className="w-[3.11rem]">
                <ProductReveal
                  className="bg-center mb-[0.24rem] bg-no-repeat bg-cover h-[2.79rem]"
                  style={bg(`${PIC}/sec2_3-5dfdde94cb.webp`)}
                />
                <ProductReveal
                  className="bg-center bg-no-repeat bg-cover h-[3.05rem]"
                  style={bg(`${PIC}/sec2_4-4ded9b6ee3.webp`)}
                />
              </div>
            </div>
            <ProductReveal
              className="bg-center mt-[0.24rem] bg-no-repeat bg-cover h-[3.7rem]"
              style={bg(`${PIC}/sec2_5-0bc3951eda.webp`)}
            />
            <div className="mt-[0.24rem] flex">
              <ProductReveal
                className="bg-center mr-[0.24rem] bg-no-repeat bg-cover w-[3.42rem] h-[3.44rem]"
                style={bg(`${PIC}/sec2_6-5c27cae2df.webp`)}
              />
              <ProductReveal
                className="bg-center bg-no-repeat bg-cover w-[3.42rem] h-[3.44rem]"
                style={bg(`${PIC}/sec2_7-fc0523ffd6.webp`)}
              />
            </div>
          </div>
        </div>
        {/* sec4: the family, its slideshow and the three strips */}
        <div className="pb-[0.4rem]">
          <ProductReveal className="flex justify-center items-center min-h-[6.62rem] w-full px-[0.3rem] py-[0.6rem]">
            <h2
              className={cn(
                "text-[0.8rem] leading-[1.04rem] font-semibold w-full text-center text-balance bg-[image:linear-gradient(223deg,rgb(255,246,242)_0px,rgb(255,230,223)_5%,rgb(255,163,148)_16%,rgb(214,120,101)_30%,rgb(127,79,201)_43%,rgb(34,64,193)_59%,rgb(35,119,255)_76%,rgb(16,209,203)_100%)]",
                FILL,
              )}
            >
              {t("sec3.title")}
            </h2>
          </ProductReveal>
          <PhoneSwiper
            className="mb-[0.2rem] h-[10.8rem]"
            slideClassName="!w-full"
            pagination="none"
            arrow={img(`${PIC}/icon_arrow-8fdd97e0db.webp`)}
            slides={["sec4_1-4e19817d9c", "sec4_2-2462758478"].map((name) => ({
              key: name,
              content: (
                <div
                  className="bg-center bg-no-repeat bg-cover w-full h-[10.8rem]"
                  style={bg(`${PIC}/${name}.webp`)}
                />
              ),
            }))}
          >
            <p className="pointer-events-none absolute left-0 top-[1.25rem] z-[5] w-full px-[0.5rem] text-center text-[0.4rem] leading-[0.6rem] font-extrabold text-white text-balance">
              {t("m.family.desc")}
            </p>
          </PhoneSwiper>
          {([1, 2, 3] as const).map((row) => (
            <div key={row} className="mb-[0.28rem] overflow-hidden last:mb-0">
              <div
                className={cn(
                  "flex w-max animate-mixpad-marquee [animation-duration:60s] motion-reduce:animate-none",
                  row === 2 && "[animation-direction:reverse]",
                )}
              >
                {strip(row)}
                {strip(row, true)}
              </div>
            </div>
          ))}
        </div>
        {/* sec5: museum-grade light and its six optics cards */}
        <div className="pt-[1.2rem] pb-[0.68rem]">
          <ProductReveal
            className={cn(
              "px-[0.3rem] text-[0.76rem] leading-[1.02rem] font-semibold w-full text-center text-balance bg-[image:linear-gradient(157deg,rgb(255,179,128)_0px,rgb(138,255,247)_100%)]",
              FILL,
            )}
          >
            {t("sec5.title")}
          </ProductReveal>
          <ProductReveal className="mt-[1.4rem] px-[0.49rem]">
            <h3 className="text-[0.4rem] leading-[0.6rem] font-extrabold text-left text-white">
              {t("sec5.info_title")}
            </h3>
            <p className="mt-[0.26rem] text-[0.24rem] leading-[0.4rem] font-medium text-left text-white">
              {t("sec5.info_desc")}
            </p>
          </ProductReveal>
          <PhoneSwiper
            className="mt-[0.6rem] px-[0.49rem] pb-[0.66rem]"
            slideClassName="!w-[6.35rem] pr-[0.3rem]"
            paginationClassName="bottom-0 left-[0.49rem]"
            slides={OPTICS.map((name, i) => ({
              key: name,
              content: (
                <div className="rounded-[0.3rem] overflow-hidden w-[6.05rem] h-[7.94rem] bg-white">
                  <div
                    className="bg-top bg-no-repeat bg-cover h-[6rem]"
                    style={bg(`${DESK}/${name}.webp`)}
                  />
                  <p className="flex items-center justify-center h-[1.94rem] px-[0.3rem] text-center text-[0.24rem] leading-[0.36rem] font-medium text-[#111111]">
                    {t(`sec5.card${i + 1}`)}
                  </p>
                </div>
              ),
            }))}
          />
        </div>
        {/* sec6: SPWM dimming */}
        <div className="px-[0.3rem] pt-[1.2rem] pb-[0.64rem]">
          <ProductReveal
            className={cn(
              "text-[0.76rem] leading-[1.02rem] font-semibold w-full text-center text-balance bg-[image:linear-gradient(171deg,rgb(255,248,213)_0px,rgb(252,217,119)_100%)]",
              FILL,
            )}
          >
            {t("sec6.title")}
          </ProductReveal>
          <div className="mt-[1.6rem] pt-[1.1rem] rounded-t-[0.3rem] w-full bg-[image:linear-gradient(165deg,rgba(61,48,10,0.76)_0px,rgba(12,4,0,0.76)_100%)]">
            <ProductReveal className="px-[0.58rem]">
              <h3 className="text-[0.4rem] leading-[0.6rem] font-extrabold text-left text-white">
                {t("sec6.title2")}
              </h3>
              <p className="mt-[0.26rem] text-[0.24rem] leading-[0.4rem] font-medium text-left text-white">
                {t("sec6.video_desc")}
              </p>
            </ProductReveal>
            <div
              className="bg-center mt-[0.9rem] rounded-[0.3rem] bg-no-repeat bg-cover w-[6.9rem] h-[10.8rem] overflow-hidden"
              style={bg(`${PIC}/sec6-fad812775b.webp`)}
            />
          </div>
        </div>
        {/* sec7: the three rooms' scenes */}
        <div className="pt-[1.2rem] pb-[0.6rem]">
          <ProductReveal className="px-[0.3rem] text-center text-white">
            <p className="text-[0.3rem] leading-[0.44rem] font-extrabold text-balance">
              {t("sec7.video_desc")}
            </p>
            <h2 className="mt-[0.3rem] text-[0.58rem] leading-[0.78rem] font-extrabold text-balance">
              {t("sec7.title")}
            </h2>
          </ProductReveal>
          <PhoneSwiper
            className="mt-[1rem] pt-[1.2rem]"
            slideClassName="!w-full"
            pagination="tabs"
            paginationClassName="top-0 left-[0.42rem]"
            slides={[
              {
                key: "living",
                label: t("sec7.swiper_pagination_item"),
                content: film("p7_1", "w-full h-[9.8rem]", true),
              },
              {
                key: "dining",
                label: t("sec7.swiper_pagination_item2"),
                content: film("p7_2", "w-full h-[9.8rem]", true),
              },
              {
                key: "bedroom",
                label: t("sec7.swiper_pagination_item3"),
                content: (
                  <div
                    className="bg-center bg-no-repeat bg-cover w-full h-[9.8rem]"
                    style={bg(`${PIC}/sec7_3-54c89bedb9.webp`)}
                  />
                ),
              },
            ]}
          />
        </div>
        {/* sec8: MixPad's four ways */}
        <div className="px-[0.3rem] pt-[1.2rem] pb-[0.9rem]">
          <ProductReveal className="text-[0.4rem] leading-[0.6rem] font-extrabold text-center text-white text-balance">
            {t("sec10.title")}
          </ProductReveal>
          <div className="mt-[0.6rem] flex">
            <div className="mr-[0.24rem]">
              <ProductReveal
                className="bg-center mb-[0.24rem] bg-no-repeat bg-cover w-[3.33rem] h-[4.33rem]"
                style={bg(`${PIC}/sec8_1-1b61dd62fb.webp`)}
              />
              <ProductReveal
                className="bg-center bg-no-repeat bg-cover w-[3.33rem] h-[5.43rem]"
                style={bg(`${PIC}/sec8_2-3d8abc9851.webp`)}
              />
            </div>
            <div>
              <ProductReveal
                className="bg-center mb-[0.24rem] bg-no-repeat bg-cover w-[3.33rem] h-[5.43rem]"
                style={bg(`${PIC}/sec8_3-66b126ec68.webp`)}
              />
              <ProductReveal
                className="bg-center bg-no-repeat bg-cover w-[3.33rem] h-[4.33rem]"
                style={bg(`${PIC}/sec8_4-9187ec90f1.webp`)}
              />
            </div>
          </div>
        </div>
        {/* sec9: the Butler and its voice commands */}
        <div className="pt-[1.31rem] pb-[0.7rem]">
          <ProductReveal className="px-[0.3rem] text-center">
            <h2
              className={cn(
                "text-[0.76rem] leading-[1.02rem] font-semibold text-balance bg-[image:linear-gradient(172deg,rgb(113,103,255)_0px,rgb(166,233,254)_100%)]",
                FILL,
              )}
            >
              {t("sec11.title")}
            </h2>
            <p
              className={cn(
                "mt-[0.33rem] text-[0.36rem] leading-[0.52rem] font-semibold text-balance bg-[image:linear-gradient(178deg,rgb(152,199,254)_0px,rgb(172,167,255)_100%)]",
                FILL,
              )}
            >
              {t("sec11.subtitle")}
            </p>
          </ProductReveal>
          <ProductReveal className="mt-[0.7rem] px-[0.4rem] text-[0.24rem] leading-[0.4rem] font-medium text-center text-white">
            {t("sec11.desc")}
          </ProductReveal>
          <div className="mx-auto mt-[0.33rem] w-[3.2rem] h-[3.2rem]">
            {film("p9", "size-full")}
          </div>
          <div className="w-full overflow-hidden">
            <div className="flex w-max animate-mixpad-marquee [animation-duration:70s] motion-reduce:animate-none">
              {chips()}
              {chips(true)}
            </div>
          </div>
        </div>
        {/* sec10: three rooms the Butler lights */}
        <PhoneSwiper
          className="mt-[0.2rem] px-[0.3rem] pb-[0.66rem]"
          slideClassName="!w-[6.9rem] pr-[0.3rem]"
          paginationClassName="bottom-0 left-[0.3rem]"
          slides={[
            {
              key: "study",
              content: (
                <div
                  className="rounded-[0.3rem] bg-center bg-no-repeat bg-cover w-[6.6rem] h-[9.6rem]"
                  style={bg(`${PIC}/sec9_1-559071d351.webp`)}
                />
              ),
            },
            {
              key: "bedroom",
              content: (
                <div className="rounded-[0.3rem] overflow-hidden w-[6.6rem] h-[9.6rem]">
                  {film("p9_2", "size-full", true)}
                </div>
              ),
            },
            {
              key: "living",
              content: (
                <div className="rounded-[0.3rem] overflow-hidden w-[6.6rem] h-[9.6rem]">
                  {film("p9_3", "size-full")}
                </div>
              ),
            },
          ]}
        />
        {/* sec11: the radar */}
        <div className="px-[0.3rem] pt-[1.18rem]">
          <div className="pt-[1rem] pb-[0.96rem] px-[0.4rem] rounded-t-[0.3rem] bg-[image:linear-gradient(165deg,rgba(33,33,33,0.76)_0px,rgba(16,16,16,0.76)_100%)]">
            <ProductReveal>
              <h3
                className={cn(
                  "text-[0.36rem] leading-[0.54rem] font-semibold bg-[image:linear-gradient(176deg,rgb(117,255,217)_0px,rgb(1,133,100)_100%)]",
                  FILL,
                )}
              >
                {t("m.radar.title")}
              </h3>
              <p className="mt-[0.4rem] text-[0.22rem] leading-[0.4rem] font-medium text-left text-white opacity-[0.66]">
                {t("m.radar.desc")}
              </p>
            </ProductReveal>
            <div
              className="bg-center mt-[0.6rem] bg-no-repeat bg-cover w-[6.12rem] h-[4.21rem]"
              style={bg(`${PIC}/sec11-911030fb2d.webp`)}
            />
          </div>
        </div>
        {/* sec12: AISense and the sensor's slides */}
        <div className="pt-[2.3rem]">
          <ProductReveal
            className={cn(
              "px-[0.3rem] text-[0.76rem] leading-[1.02rem] font-semibold w-full text-center text-balance bg-[image:linear-gradient(163deg,rgb(255,254,239)_0px,rgb(255,236,191)_22%,rgb(255,199,149)_62%,rgb(252,55,30)_100%)]",
              FILL,
            )}
          >
            {t("sec13.title")}
          </ProductReveal>
          <ProductReveal className="mt-[1.6rem] flex flex-col items-center px-[0.3rem]">
            <h3
              className={cn(
                "text-[0.76rem] leading-[1.02rem] font-semibold bg-[image:linear-gradient(163deg,rgb(229,191,114)_0px,rgb(239,165,117)_17%,rgb(255,122,122)_53%,rgb(255,210,210)_100%)]",
                FILL,
              )}
            >
              {t("sec13.subtitle")}
            </h3>
            <p className="mt-[0.4rem] text-center text-[0.24rem] leading-[0.4rem] text-white">
              {t("sec13.desc")}
            </p>
          </ProductReveal>
          <PhoneSwiper
            className="mt-[0.9rem] px-[0.3rem]"
            slideClassName="!w-[6.35rem] pr-[0.3rem]"
            pagination="none"
            slides={SENSOR.map(([name, key]) => ({
              key: name,
              content: (
                <div className="w-[6.05rem]">
                  <div
                    className="rounded-[0.2rem] bg-center bg-no-repeat bg-cover aspect-[1200/605]"
                    style={bg(`${DESK}/${name}.webp`)}
                  />
                  <p className="mt-[0.4rem] text-[0.28rem] leading-[0.4rem] font-extrabold text-white">
                    {t(key)}
                  </p>
                </div>
              ),
            }))}
          />
        </div>
        {/* sec13: Auto Lighting */}
        <div className="pt-[1.2rem] flex flex-col items-center px-[0.3rem]">
          <ProductReveal className="flex flex-col items-center text-center">
            <h2
              className={cn(
                "mt-[0.5rem] text-[0.76rem] leading-[1.02rem] font-semibold bg-[image:linear-gradient(162deg,rgb(255,207,136)_0px,rgb(225,249,183)_10%,rgb(246,245,230)_31%,rgb(255,255,255)_47%,rgb(255,245,212)_59%,rgb(254,200,204)_76%,rgb(249,202,151)_91%,rgb(245,209,110)_100%)]",
                FILL,
              )}
            >
              {t("sec14.title")}
            </h2>
            <p
              className={cn(
                "mt-[0.2rem] text-[0.36rem] leading-[0.52rem] font-semibold text-balance bg-[image:linear-gradient(164deg,rgb(255,207,136)_0px,rgb(229,248,192)_14%,rgb(249,235,205)_31%,rgb(255,255,255)_51%,rgb(254,242,225)_69%,rgb(253,200,194)_84%,rgb(245,204,110)_100%)]",
                FILL,
              )}
            >
              {t("sec14.subtitle")}
            </p>
            <p className="mt-[0.27rem] text-[0.24rem] leading-[0.4rem] text-white">
              {t("sec14.desc")}
            </p>
          </ProductReveal>
          <div
            className="bg-center mt-[0.9rem] rounded-[0.3rem] bg-no-repeat bg-cover w-[6.9rem] h-[11.1rem]"
            style={bg(`${PIC}/sec13-e4aae5c22a.webp`)}
          />
        </div>
        {/* sec14: energy saving, the app's cards */}
        <div className="pt-[2.1rem]">
          <ProductReveal
            className={cn(
              "px-[0.3rem] text-[0.76rem] leading-[1.02rem] font-semibold w-full text-center text-balance bg-[image:linear-gradient(139deg,rgb(171,213,255)_0px,rgb(241,229,240)_23%,rgb(255,255,255)_47%,rgb(253,240,235)_72%,rgb(193,235,253)_100%)]",
              FILL,
            )}
          >
            {t("sec15.title")}
          </ProductReveal>
          <div
            className="bg-center mt-[0.84rem] bg-no-repeat bg-cover bg-black relative w-full h-[10.8rem]"
            style={bg(`${PIC}/sec14_bg-89de5c4622.webp`)}
          >
            <div className="absolute left-1/2 top-0 -translate-x-1/2 w-[6.9rem] h-full flex">
              <div className="mr-[0.2rem] w-[2.24rem]">
                {(
                  [
                    ["sec14_1-8f0fdcc063", "mb-[0.2rem] h-[3.91rem]"],
                    ["sec14_2-da5c4be70b", "mb-[0.2rem] h-[2.54rem]"],
                    ["sec14_3-49bedf1ccb", "h-[2.45rem]"],
                  ] as const
                ).map(([name, size]) => (
                  <div
                    key={name}
                    className={cn("bg-center bg-no-repeat bg-cover", size)}
                    style={bg(`${PIC}/${name}.webp`)}
                  />
                ))}
              </div>
              <div className="w-[4.6rem]">
                <div
                  className="bg-center mb-[0.2rem] bg-no-repeat bg-cover h-[1.95rem]"
                  style={bg(`${PIC}/sec14_4-a3e02e0625.webp`)}
                />
                <div className="w-full flex justify-between items-center">
                  <div
                    className="bg-center bg-no-repeat bg-cover w-[2.2rem] h-[2.3rem]"
                    style={bg(`${PIC}/sec14_5-f6ad9938ee.webp`)}
                  />
                  <div
                    className="bg-center bg-no-repeat bg-cover w-[2.2rem] h-[2.3rem]"
                    style={bg(`${PIC}/sec14_6-3f7282e629.webp`)}
                  />
                </div>
                <div
                  className="bg-center my-[0.2rem] bg-no-repeat bg-cover h-[2.01rem]"
                  style={bg(`${PIC}/sec14_7-cd4414c3e5.webp`)}
                />
                <div className="w-full flex justify-between items-center">
                  <div
                    className="bg-center bg-no-repeat bg-cover w-[1.32rem] h-[2.45rem]"
                    style={bg(`${PIC}/sec14_8-f9c1cc9b68.webp`)}
                  />
                  <div
                    className="bg-center bg-no-repeat bg-cover w-[3.08rem] h-[2.45rem]"
                    style={bg(`${PIC}/sec14_9-12e3f35399.webp`)}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* sec15: Zigbee 3.0 and its six tiles */}
        <div className="relative h-[18.58rem]">
          <div
            className="bg-center bg-no-repeat bg-cover w-full h-[11.95rem]"
            style={bg(`${PIC}/sec15-45d258521d.webp`)}
          />
          <ProductReveal className="absolute top-[1.27rem] left-0 flex flex-col items-center w-full px-[0.3rem] text-center">
            <p className="text-[0.34rem] leading-[0.5rem] font-extrabold text-white text-balance">
              {t("sec16.desc")}
            </p>
            <h2
              className={cn(
                "mt-[0.3rem] text-[0.76rem] leading-[1.02rem] font-semibold text-balance bg-[image:radial-gradient(circle,rgb(255,255,255)_0px,rgb(252,222,182)_13%,rgb(249,214,162)_100%)]",
                FILL,
              )}
            >
              {t("sec16.title")}
            </h2>
          </ProductReveal>
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[6.06rem] grid grid-cols-2 gap-[0.15rem]">
            {[
              "sec15_1-5c68949944",
              "sec15_2-cd6f513e14",
              "sec15_3-bdfd2285d7",
              "sec15_4-c32472b077",
              "sec15_5-fcbbbcb261",
              "sec15_6-285ca71199",
            ].map((name) => (
              <ProductReveal
                key={name}
                className="bg-center bg-no-repeat bg-cover w-[2.95rem] h-[2.85rem]"
                style={bg(`${PIC}/${name}.webp`)}
              />
            ))}
          </div>
        </div>
        {/* sec16: the lighting design service */}
        <div className="pt-[1.15rem] pb-[0.9rem] flex flex-col items-center px-[0.3rem]">
          <ProductReveal className="w-full flex flex-col items-center text-center">
            <h2
              className={cn(
                "text-[0.74rem] leading-[1.02rem] font-semibold text-balance bg-[image:linear-gradient(179deg,rgb(255,237,207)_0px,rgb(179,148,107)_51%,rgb(219,184,142)_100%)]",
                FILL,
              )}
            >
              {t("sec17.title")}
            </h2>
            <p
              className={cn(
                "mt-[0.3rem] text-[0.36rem] leading-[0.5rem] font-semibold text-balance bg-[image:linear-gradient(179deg,rgb(255,237,207)_0px,rgb(219,184,142)_100%)]",
                FILL,
              )}
            >
              {t("sec17.desc")}
            </p>
            <p className="mt-[0.6rem] text-[0.3rem] leading-[0.44rem] font-medium text-white text-balance">
              {t("sec17.remind")}
            </p>
          </ProductReveal>
          <div
            className="bg-center mt-[0.68rem] rounded-[0.3rem] bg-no-repeat bg-cover w-[6.9rem] h-[9.6rem]"
            style={bg(`${PIC}/sec16-dd01665c39.webp`)}
          />
          <Link
            href={plan}
            className="mt-[0.7rem] rounded-[0.3rem] text-[#1d1000] block w-[6.9rem] h-[1.3rem] text-center text-[0.34rem] leading-[1.3rem] font-normal tracking-[0.02rem] bg-[image:linear-gradient(176deg,rgb(255,222,183)_0px,rgb(207,159,100)_100%)]"
          >
            {t("sec17.btn")}
          </Link>
        </div>
        {/* sec17: the poem */}
        <div className="pt-[0.3rem] pb-[0.67rem] flex justify-center">
          <div
            className="bg-center pt-[2.1rem] px-[0.4rem] bg-no-repeat bg-cover w-[6.9rem] h-[11.76rem] flex justify-center"
            style={bg(`${PIC}/sec17-c6ac734c48.webp`)}
          >
            <ProductReveal className="text-center text-[0.3rem] leading-[0.6rem] font-medium text-white">
              <p>{t("m.poem.1")}</p>
              <p>{t("m.poem.2")}</p>
              <p className="mt-[0.6rem]">{t("m.poem.3")}</p>
              <p>{t("m.poem.4")}</p>
              <p>{t("m.poem.5")}</p>
              <p>{t("m.poem.6")}</p>
              <p>{t("m.poem.7")}</p>
            </ProductReveal>
          </div>
        </div>
      </div>
      {/* detail_tips */}
      <div className="px-[0.48rem] py-[0.6rem] w-full bg-[#202020]">
        <p className="text-[0.14rem] leading-[0.4rem] font-medium text-white/80">
          {lines(common.productDisclaimer)}
        </p>
      </div>
    </div>
  );
}
