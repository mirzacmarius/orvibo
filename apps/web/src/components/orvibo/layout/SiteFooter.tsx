import { Separator } from "@v1/ui/separator";
import type { Dictionary } from "@/app/[locale]/dictionaries";
import { assetUrl } from "@/lib/orvibo/assetUrl";
import { orviboRoutes } from "@/lib/orvibo/routes";
import { resolveExternalUrl } from "@/lib/orvibo/resolveExternalUrl";
import { Container } from "../ui/container";
import { Link } from "../ui/link";
import { LocaleSwitcher } from "./LocaleSwitcher";

interface SiteFooterProps {
  base: string;
  dict: Dictionary;
}

export function SiteFooter({ base, dict }: SiteFooterProps) {
  const routes = orviboRoutes(base);
  const f = dict.footer;
  const groups = [
    {
      title: f.recommendedProducts,
      links: [
        { href: routes.product("mixpad_x"), label: f.mixpadX },
        { href: routes.product("mixpad_elf"), label: f.mixpadElf },
        { href: routes.product("s"), label: f.soproS },
        { href: routes.product("q"), label: f.soproQ },
      ],
    },
    {
      title: f.aboutUs,
      links: [
        { href: routes.about("about_us"), label: dict.nav.company },
        { href: routes.about("culture"), label: dict.nav.culture },
        { href: routes.about("join_us"), label: dict.nav.careers },
        { href: routes.about("contact"), label: dict.nav.contact },
      ],
    },
    {
      title: f.business,
      links: [
        { href: routes.cooperation, label: dict.nav.dealer },
        { href: routes.estateCooperation, label: dict.nav.estate },
      ],
    },
    {
      title: f.support,
      links: [
        { href: routes.service("customization"), label: f.customization },
        { href: routes.service("case"), label: f.cases },
        {
          external: true,
          href: "https://www.zhijiayi.com",
          label: f.zhijiayi,
          rel: "noreferrer",
        },
        { href: routes.app, label: f.orviboHome },
      ],
    },
    {
      title: f.channels,
      links: [
        {
          external: true,
          href: "https://orvibo.tmall.com/?spm=a220o.1000855.1997427721.d4918089.8PDqRf",
          label: f.tmall,
          rel: "nofollow noreferrer",
        },
        {
          external: true,
          href: "https://mall.jd.com/index-953454.html?from=pc",
          label: f.jd,
          rel: "nofollow noreferrer",
        },
        { href: routes.store, label: f.offlineStore },
      ],
    },
    {
      title: f.news,
      links: [
        {
          external: true,
          href: "https://news.orvibo.com/",
          label: f.press,
          rel: "noreferrer",
        },
        { href: routes.exploreConference, label: f.conference },
      ],
    },
  ];

  return (
    <>
      <div className="fixed right-[10px] top-1/2 z-[1000] hidden h-[68px] w-[68px] -translate-y-1/2 text-center">
        <span className="inline-flex h-[68px] w-[68px] items-center justify-center">
          <img
            alt=""
            src={assetUrl(
              "/guanwang_second/front/images/2020/footer/icon_service-db9e83a8e2.svg",
            )}
          />
        </span>
      </div>

      <div className="fixed right-[10px] top-1/2 z-[1000] hidden h-[68px] w-[68px] -translate-y-1/2 text-center">
        <div className="hidden h-[68px] w-[325px]">
          <span>{f.applyRealEstate}</span>
          <span>{f.applyDealer}</span>
        </div>
        <div>
          <img
            alt=""
            src={assetUrl(
              "/guanwang_second/front/images/2020/footer/cooperation-8ab11e3c28.svg",
            )}
          />
        </div>
      </div>

      <footer className="w-full min-w-0 bg-black pt-[49px] font-orvibo text-white">
        <Container className="px-[40px] min-[1441px]:px-[288.5px]" width="page">
          <div className="mb-[71px] flex flex-wrap justify-between gap-x-[32px] gap-y-[40px] xl:flex-nowrap">
            {groups.map((group) => (
              <nav aria-label={group.title} key={group.title}>
                <h2 className="mb-[20px] text-[16px] font-semibold leading-[22px] text-white">
                  {group.title}
                </h2>
                <ul className="flex flex-col gap-[10px]">
                  {group.links.map((link) => (
                    <li
                      className="text-[14px] leading-[20px] text-white/60 hover:text-white"
                      key={`${link.href}-${link.label}`}
                    >
                      <Link
                        className="text-[14px] font-medium leading-[20px] text-white/60 hover:text-white"
                        href={link.href}
                        rel={"rel" in link ? link.rel : undefined}
                        target={"external" in link ? "_blank" : undefined}
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </nav>
            ))}
          </div>

          <div className="relative border-white/15 border-b pb-[25px]">
            <div>
              <p className="mb-[3px] text-[16px] font-semibold leading-[22px] text-white">
                {f.contactUs}
              </p>
              <p className="text-[24px] font-semibold leading-[33px] text-white">
                <span>400-060-6050</span>
                <span className="ml-[9px] align-[3px] text-[14px] leading-[20px]">
                  ( 09:00 ~ 20:00 )
                </span>
              </p>
            </div>

            <div className="right-0 bottom-[21px] mt-[32px] flex items-center md:absolute md:mt-0">
              <div className="group relative h-[24px] w-[24px]">
                <img
                  alt=""
                  className="absolute inset-0 h-full w-full opacity-100 transition-opacity group-hover:opacity-0"
                  src={assetUrl(
                    "/guanwang_second/front/images/2020/nav/wechat-23cfd86318.png",
                  )}
                />
                <img
                  alt=""
                  className="absolute inset-0 h-full w-full opacity-0 transition-opacity group-hover:opacity-100"
                  src={assetUrl(
                    "/guanwang_second/front/images/2020/nav/wechat_active-3c9babf010.png",
                  )}
                />
                <div className="absolute top-0 left-0 hidden h-[126px] w-[126px] -translate-x-[52px] -translate-y-[140px] rounded-[4px] bg-white p-[2px] after:absolute after:bottom-[-8px] after:left-1/2 after:-translate-x-1/2 after:border-x-[8px] after:border-x-transparent after:border-t-[8px] after:border-t-white group-hover:block">
                  <img
                    alt=""
                    className="h-full w-full"
                    src={assetUrl(
                      "/guanwang_second/front/images/2020/nav/wechat_erweima-2d0be50489.png",
                    )}
                  />
                </div>
              </div>
              <a
                className="group relative ml-[21px] block h-[24px] w-[24px]"
                href="https://weibo.com/p/1006062919542664/home?from=page_100606&mod=TAB&is_all=1"
                rel="noreferrer"
                target="_blank"
              >
                <img
                  alt=""
                  className="absolute inset-0 h-full w-full opacity-100 transition-opacity group-hover:opacity-0"
                  src={assetUrl(
                    "/guanwang_second/front/images/2020/nav/sina-e423a62d18.png",
                  )}
                />
                <img
                  alt=""
                  className="absolute inset-0 h-full w-full opacity-0 transition-opacity group-hover:opacity-100"
                  src={assetUrl(
                    "/guanwang_second/front/images/2020/nav/sina_active-1f709de2d6.png",
                  )}
                />
                <span className="sr-only">Sina Weibo</span>
              </a>
              <span className="group relative ml-[21px] block h-[40px] min-w-[123px] overflow-hidden whitespace-nowrap rounded-[2px] border border-white/60 px-[14px] text-center text-[14px] leading-[40px] before:absolute before:inset-y-0 before:left-0 before:w-0 before:bg-white before:transition-all before:duration-300 before:ease-in-out hover:before:w-full">
                <span className="relative z-10 inline-block h-[16px] w-[19px] align-middle">
                  <img
                    alt=""
                    className="absolute inset-0 h-full w-full opacity-100 transition-opacity group-hover:opacity-0"
                    src={assetUrl(
                      "/guanwang_second/front/images/2020/nav/online_service-c8e92ccade.png",
                    )}
                  />
                  <img
                    alt=""
                    className="absolute inset-0 h-full w-full opacity-0 transition-opacity group-hover:opacity-100"
                    src={assetUrl(
                      "/guanwang_second/front/images/2020/nav/online_service_active-4780add6bf.png",
                    )}
                  />
                </span>
                <span className="relative z-10 ml-[5px] text-white/60 transition-colors group-hover:text-orvibo-fg">
                  {f.onlineService}
                </span>
              </span>
            </div>
          </div>

          <div className="flex flex-col gap-[16px] py-[20px] pb-[60px] text-[14px] leading-[20px] text-white/50 lg:flex-row lg:justify-between">
            <p className="flex-1">
              {f.copyright}{" "}
              <a
                className="text-white/50"
                href="https://beian.miit.gov.cn/"
                rel="noreferrer"
                target="_blank"
              >
                粤ICP备12019139号
              </a>{" "}
              <a
                className="border-[#707070] border-r pr-[0.1rem] text-white/50"
                href="http://www.beian.gov.cn/portal/registerSystemInfo?recordcode=44030502001115"
                rel="noreferrer"
                target="_blank"
              >
                粤公网安备44030502001115号
              </a>{" "}
              <a
                className="pl-[0.08rem] text-white/50"
                href={resolveExternalUrl(
                  "https://www.orvibo.com/cn/privacy_policy.pdf",
                )}
                rel="nofollow noreferrer"
                target="_blank"
              >
                {f.privacy}
              </a>{" "}
              <span className="ml-[0.7rem]">{f.investmentNotice}</span>
            </p>
            <LocaleSwitcher label={dict.common.language} />
          </div>
          <Separator className="hidden bg-white/10" />
        </Container>
      </footer>
    </>
  );
}
