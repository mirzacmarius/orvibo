import { assetUrl } from "@/lib/orvibo/assetUrl";
import Link from "next/link";
import { resolveExternalUrl } from "@/lib/orvibo/resolveExternalUrl";
import type { Dictionary } from "@/app/[locale]/dictionaries";

export function OrviboFooter({
  base,
  dict,
}: {
  base: string;
  dict: Dictionary;
}) {
  function toEnPath(cnPath: string) {
    return `${base}${cnPath.replace(/^\/cn/, "")}`;
  }

  const f = dict.footer;

  return (
    <>
      <div className="online-service">
        <span className="online">
          <img
            src={assetUrl("/guanwang_second/front/images/2020/footer/icon_service-db9e83a8e2.svg")}
            alt=""
          />
        </span>
      </div>

      <div className="footer-cooperation">
        <div className="cooperationActive">
          <span className="applyEstate">{f.applyRealEstate}</span>
          <span className="applyCooperation">{f.applyDealer}</span>
        </div>
        <div className="con">
          <img
            src={assetUrl("/guanwang_second/front/images/2020/footer/cooperation-8ab11e3c28.svg")}
            alt=""
          />
        </div>
      </div>

      <div className="foot">
        <div className="content">
          <div className="foot_top">
            <div className="link_list">
              <ul>
                <li className="first_li">{f.recommendedProducts}</li>
                <li>
                  <Link href={toEnPath("/cn/product/mixpad_x.html")}>{f.mixpadX}</Link>
                </li>
                <li>
                  <Link href={toEnPath("/cn/product/mixpad_elf.html")}>{f.mixpadElf}</Link>
                </li>
                <li>
                  <Link href={toEnPath("/cn/product/s.html")}>{f.soproS}</Link>
                </li>
                <li>
                  <Link href={toEnPath("/cn/product/q.html")}>{f.soproQ}</Link>
                </li>
              </ul>
            </div>
            <div className="link_list">
              <ul>
                <li className="first_li">{f.aboutUs}</li>
                <li>
                  <Link href={toEnPath("/cn/about/about_us.html")}>{dict.nav.company}</Link>
                </li>
                <li>
                  <Link href={toEnPath("/cn/about/culture.html")}>{dict.nav.culture}</Link>
                </li>
                <li>
                  <Link href={toEnPath("/cn/about/join_us.html")}>{dict.nav.careers}</Link>
                </li>
                <li>
                  <Link href={toEnPath("/cn/about/contact.html")}>{dict.nav.contact}</Link>
                </li>
              </ul>
            </div>
            <div className="link_list">
              <ul>
                <li className="first_li">{f.business}</li>
                <li>
                  <Link href={toEnPath("/cn/cooperation.html")}>{dict.nav.dealer}</Link>
                </li>
                <li>
                  <Link href={toEnPath("/cn/cooperation/estateCooperation.html")}>
                    {dict.nav.estate}
                  </Link>
                </li>
              </ul>
            </div>
            <div className="link_list">
              <ul>
                <li className="first_li">{f.support}</li>
                <li>
                  <Link href={toEnPath("/cn/services/customization.html")}>
                    {f.customization}
                  </Link>
                </li>
                <li>
                  <Link href={toEnPath("/cn/services/case.html")}>{f.cases}</Link>
                </li>
                <li>
                  <a href="https://www.zhijiayi.com" target="_blank" rel="noreferrer">
                    {f.zhijiayi}
                  </a>
                </li>
                <li>
                  <Link href={toEnPath("/cn/app.html")}>{f.orviboHome}</Link>
                </li>
              </ul>
            </div>
            <div className="link_list">
              <ul>
                <li className="first_li">{f.channels}</li>
                <li>
                  <a
                    href="https://orvibo.tmall.com/?spm=a220o.1000855.1997427721.d4918089.8PDqRf"
                    target="_blank"
                    rel="nofollow noreferrer"
                  >
                    {f.tmall}
                  </a>
                </li>
                <li>
                  <a
                    href="https://mall.jd.com/index-953454.html?from=pc"
                    target="_blank"
                    rel="nofollow noreferrer"
                  >
                    {f.jd}
                  </a>
                </li>
                <li>
                  <Link href={toEnPath("/cn/orviboStore.html")}>{f.offlineStore}</Link>
                </li>
              </ul>
            </div>
            <div className="link_list">
              <ul>
                <li className="first_li">{f.news}</li>
                <li>
                  <a href="https://news.orvibo.com/" target="_blank" rel="noreferrer">
                    {f.press}
                  </a>
                </li>
                <li>
                  <Link href={toEnPath("/cn/conference2023.html")}>{f.conference}</Link>
                </li>
              </ul>
            </div>
          </div>

          <div className="foot_middle">
            <div>
              <p className="contactus">{f.contactUs}</p>
              <p className="telphone">
                <span>400-060-6050</span>
                <span className="time">( 09:00 ~ 20:00 )</span>
              </p>
            </div>
            <div className="contact">
              <div className="wechat">
                <div className="wechat_erweima">
                  <img
                    src={assetUrl("/guanwang_second/front/images/2020/nav/wechat_erweima-2d0be50489.png")}
                    alt=""
                  />
                </div>
              </div>
              <a
                className="sina"
                href="https://weibo.com/p/1006062919542664/home?from=page_100606&mod=TAB&is_all=1"
                target="_blank"
                rel="noreferrer"
              />
              <span className="service">
                <span className="img" />
                <span>{f.onlineService}</span>
              </span>
            </div>
          </div>

          <div className="copyright">
            <p className="copyContent">
              {f.copyright}{" "}
              <a target="_blank" href="https://beian.miit.gov.cn/" rel="noreferrer">
                粤ICP备12019139号
              </a>{" "}
              <a
                className="one"
                target="_blank"
                href="http://www.beian.gov.cn/portal/registerSystemInfo?recordcode=44030502001115"
                rel="noreferrer"
              >
                粤公网安备44030502001115号
              </a>{" "}
              <a
                className="two"
                target="_blank"
                rel="nofollow noreferrer"
                href={resolveExternalUrl("https://www.orvibo.com/cn/privacy_policy.pdf")}
              >
                {f.privacy}
              </a>{" "}
              <span className="coop__remind">{f.investmentNotice}</span>
            </p>
            <p className="lan">
              <span>{dict.common.chinese}</span> |{" "}
              <a href="https://global.orvibo.com">{dict.common.english}</a>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
