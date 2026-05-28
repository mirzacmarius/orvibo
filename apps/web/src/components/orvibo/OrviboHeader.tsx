"use client";

import { assetUrl } from "@/lib/orvibo/assetUrl";
import { orviboRoutes } from "@/lib/orvibo/routes";
import { useEffect, useMemo, useRef, useState } from "react";
import type { Dictionary } from "@/app/[locale]/dictionaries";
import { OrviboProductSwiper } from "@/components/orvibo/OrviboProductSwiper";

type OrviboHeaderProps = {
  base: string;
  nav: Dictionary["nav"];
  products: Dictionary["navProducts"];
};

type MenuKey = "products" | "biz" | "about";

function isWithinNode(node: EventTarget | null, container: HTMLElement | null) {
  if (!node || !container || !(node instanceof Node)) return false;
  return container.contains(node);
}

export function OrviboHeader({ base, nav, products }: OrviboHeaderProps) {
  const routes = orviboRoutes(base);
  const [open, setOpen] = useState<MenuKey | null>(null);
  const [activeCategory, setActiveCategory] = useState("0");
  const productsMenuRef = useRef<HTMLLIElement | null>(null);
  const bizMenuRef = useRef<HTMLLIElement | null>(null);
  const aboutMenuRef = useRef<HTMLLIElement | null>(null);
  const submenuRef = useRef<HTMLUListElement | null>(null);
  const underlineRef = useRef<HTMLDivElement | null>(null);

  const headerClassName = useMemo(() => {
    return open ? "header mask-open" : "header";
  }, [open]);

  useEffect(() => {
    if (open !== "products") return;
    const submenu = submenuRef.current;
    const underline = underlineRef.current;
    if (!submenu || !underline) return;

    function updateUnderline() {
      const submenuEl = submenuRef.current;
      const underlineEl = underlineRef.current;
      if (!submenuEl || !underlineEl) return;
      const activeItem = submenuEl.querySelector<HTMLLIElement>(
        `li[data-id="${activeCategory}"]`,
      );
      const label = activeItem?.querySelector("span");
      if (!label) return;
      const submenuRect = submenuEl.getBoundingClientRect();
      const labelRect = label.getBoundingClientRect();
      underlineEl.style.width = `${labelRect.width}px`;
      underlineEl.style.left = `${labelRect.left - submenuRect.left + submenuEl.scrollLeft}px`;
      underlineEl.style.opacity = "1";
      underlineEl.style.transition = "all 0.3s ease 0s";
    }

    updateUnderline();
    submenu.addEventListener("scroll", updateUnderline, { passive: true });
    window.addEventListener("resize", updateUnderline);
    return () => {
      submenu.removeEventListener("scroll", updateUnderline);
      window.removeEventListener("resize", updateUnderline);
    };
  }, [activeCategory, open]);

  useEffect(() => {
    if (open === "products") return;
    const underline = underlineRef.current;
    if (!underline) return;
    underline.style.opacity = "0";
    underline.style.transition = "none";
  }, [open]);

  useEffect(() => {
    if (open !== null) return;
    setActiveCategory("0");
  }, [open]);

  function closeMenu() {
    setOpen(null);
  }

  function handleSubmenuLeave(
    event: React.MouseEvent,
    menu: MenuKey,
    containerRef: React.RefObject<HTMLLIElement | null>,
  ) {
    if (open !== menu) return;
    if (isWithinNode(event.relatedTarget, containerRef.current)) return;
    closeMenu();
  }

  function navLinkClass(menu: MenuKey) {
    return open === menu ? "active" : undefined;
  }

  function productUlClass(id: string) {
    return activeCategory === id ? "productul show" : "productul";
  }

  return (
    <header id="header" className={`orvibo-header ${headerClassName}`}>
      <div className="logo">
        <a href={base}>
          <img
            src={assetUrl("/guanwang_second/front/images/2020/nav/logo-38c948b4cf.svg")}
            alt="ORVIBO"
            title="ORVIBO"
            width={150}
            height={29}
          />
        </a>
      </div>

      <div className="menu">
        <ul>
          <li>
            <a className="nav_index" href={base}>
              {nav.home}
            </a>
          </li>
          <li>
            <a className="nav_index" href={base}>
              {nav.wholeHome}
            </a>
          </li>

          <li
            ref={productsMenuRef}
            className={`has-submenu ${open === "products" ? "opened" : ""}`}
            onMouseEnter={() => setOpen("products")}
            onMouseLeave={(event) =>
              handleSubmenuLeave(event, "products", productsMenuRef)
            }
          >
            <a
              className={`nav_index ${navLinkClass("products") ?? ""}`.trim()}
              href={`${routes.productList}`}
            >
              {nav.products}
            </a>
            <aside className="pc-nav-submenus-popup">
              <ul ref={submenuRef} className="submenu">
                <li data-id="0" onMouseEnter={() => setActiveCategory("0")}>
                  <a href={`${routes.productList}#10`}>
                    <span>{nav.categories["0"]}</span>
                  </a>
                </li>
                <li data-id="1" onMouseEnter={() => setActiveCategory("1")}>
                  <a href={`${routes.productList}#1`}>
                    <span>{nav.categories["1"]}</span>
                  </a>
                </li>
                <li data-id="2" onMouseEnter={() => setActiveCategory("2")}>
                  <a href={`${routes.productList}#9`}>
                    <span>{nav.categories["2"]}</span>
                  </a>
                </li>
                <li data-id="4" onMouseEnter={() => setActiveCategory("4")}>
                  <a href={`${routes.productList}#3`}>
                    <span>{nav.categories["4"]}</span>
                  </a>
                </li>
                <li data-id="3" onMouseEnter={() => setActiveCategory("3")}>
                  <a href={`${routes.productList}#2`}>
                    <span>{nav.categories["3"]}</span>
                  </a>
                </li>
                <li data-id="5" onMouseEnter={() => setActiveCategory("5")}>
                  <a href={`${routes.productList}#4`}>
                    <span>{nav.categories["5"]}</span>
                  </a>
                </li>
                <li data-id="6" onMouseEnter={() => setActiveCategory("6")}>
                  <a href={`${routes.productList}#5`}>
                    <span>{nav.categories["6"]}</span>
                  </a>
                </li>
                <li data-id="7" onMouseEnter={() => setActiveCategory("7")}>
                  <a href={`${routes.productList}#6`}>
                    <span>{nav.categories["7"]}</span>
                  </a>
                </li>
                <li data-id="8" onMouseEnter={() => setActiveCategory("8")}>
                  <a href={`${routes.productList}#7`}>
                    <span>{nav.categories["8"]}</span>
                  </a>
                </li>
                <li data-id="9" onMouseEnter={() => setActiveCategory("9")}>
                  <a href={`${routes.productList}#8`}>
                    <span>{nav.categories["9"]}</span>
                  </a>
                </li>
                <div
                  ref={underlineRef}
                  className="underline"
                  style={{
                    opacity: 0,
                    height: 1,
                    left: 52,
                    width: 108,
                    bottom: 29,
                    position: "absolute",
                    backgroundColor: "currentcolor",
                    transition: "all 0.3s ease 0s",
                  }}
                />
              </ul>

              <section className="productWrapper">
                <ul className={productUlClass("0")}>
                  <li>
                    <a href={`${routes.product("mixstation")}`} className="img">
                      <img
                        style={{ width: 168 }}
                        src={assetUrl("/guanwang_second/front/mobile/images/new/product/mixstation/pro-8787fbfaf5.png")}
                        alt=""
                      />
                    </a>
                    <a href={`${routes.product("mixstation")}`} className="proTitle">
                      {products.mixstation}
                    </a>
                  </li>
                </ul>

                <ul className={productUlClass("1")}>
                  <li>
                    <a href={`${routes.product("mixpad_7_ultra")}`} className="img">
                      <img
                        style={{ width: 168, height: 168 }}
                        src={assetUrl("/guanwang_second/front/mobile/images/new/product/mixpad_7ultra/product-e0c57d88e5.png")}
                        alt=""
                      />
                    </a>
                    <a href={`${routes.product("mixpad_7_ultra")}`} className="proTitle">
                      {products.mixpad7Ultra}
                    </a>
                  </li>
                  <li>
                    <a href={`${routes.product("mixpad_7")}`} className="img">
                      <img
                        style={{ width: 168, height: 168 }}
                        src={assetUrl("/guanwang_second/front/images/products/mixpad_7/product-08ab3fcd26.png")}
                        alt=""
                      />
                    </a>
                    <a href={`${routes.product("mixpad_7")}`} className="proTitle">
                      {products.mixpad7}
                    </a>
                  </li>
                  <li>
                    <a href={`${routes.product("mixpad_x")}`} className="img">
                      <img
                        style={{ width: 143, height: 68 }}
                        src={assetUrl("/guanwang_second/front/common/images/product_index/sec1_8-eea36ad831.png")}
                        alt=""
                      />
                    </a>
                    <a href={`${routes.product("mixpad_x")}`} className="proTitle">
                      {products.mixpadX}
                    </a>
                  </li>
                  <li>
                    <a href={`${routes.product("mixpad_m2")}`} className="img">
                      <img
                        style={{ width: 168, height: 168 }}
                        src={assetUrl("/guanwang_second/front/images/products/mixpad_m2/product-3b84ba6f48.png")}
                        alt=""
                      />
                    </a>
                    <a href={`${routes.product("mixpad_m2")}`} className="proTitle">
                      {products.mixpadM2}
                    </a>
                  </li>
                  <li>
                    <a href={`${routes.product("mixpad_s_flagship")}`} className="img">
                      <img
                        style={{ width: 74, height: 146 }}
                        src={assetUrl("/guanwang_second/front/common/images/product_index/sec1_7-6dbd00544a.png")}
                        alt=""
                      />
                    </a>
                    <a
                      href={`${routes.product("mixpad_s_flagship")}`}
                      className="proTitle"
                    >
                      {products.mixpadSFlagship}
                    </a>
                  </li>
                </ul>

                <ul className={productUlClass("2")}>
                  <li>
                    <a href={`${routes.product("gaosi")}`} className="img">
                      <img
                        style={{ width: 168 }}
                        src={assetUrl("/guanwang_second/front/mobile/images/products/gaosi/pro-70e28780f4.png")}
                        alt=""
                      />
                    </a>
                    <a href={`${routes.product("gaosi")}`} className="proTitle">
                      {products.gaosi}
                    </a>
                  </li>
                  <li>
                    <a href={`${routes.product("defy")}`} className="img">
                      <img
                        style={{ width: 168, height: 168 }}
                        src={assetUrl("/guanwang_second/front/mobile/images/new/product/defy/product-acd38b85b3.png")}
                        alt=""
                      />
                    </a>
                    <a href={`${routes.product("defy")}`} className="proTitle">
                      {products.defy}
                    </a>
                  </li>
                  <li>
                    <a href={`${routes.product("bach")}`} className="img">
                      <img
                        style={{ width: 168, height: 168 }}
                        src={assetUrl("/guanwang_second/front/mobile/images/new/product/bahe/product-df2604a0b2.png")}
                        alt=""
                      />
                    </a>
                    <a href={`${routes.product("bach")}`} className="proTitle">
                      {products.bach}
                    </a>
                  </li>
                  <li>
                    <a href={`${routes.product("mixpad_elf")}`} className="img">
                      <img
                        style={{ width: 106, height: 108 }}
                        src={assetUrl("/guanwang_second/front/common/images/product_index/sec1_elf-58a058f655.png")}
                        alt=""
                      />
                    </a>
                    <a href={`${routes.product("mixpad_elf")}`} className="proTitle">
                      {products.mixpadElf}
                    </a>
                  </li>
                  <li>
                    <a href={`${routes.product("mixpad_switch")}`} className="img">
                      <img
                        style={{ width: 145, height: 52 }}
                        src={assetUrl("/guanwang_second/front/common/images/product_index/sec1_6-2c22974275.png")}
                        alt=""
                      />
                    </a>
                    <a href={`${routes.product("mixpad_switch")}`} className="proTitle">
                      {products.mixSwitch}
                    </a>
                  </li>
                </ul>

                <ul className={productUlClass("3")}>
                  <li>
                    <a href={`${routes.product("v5")}`} className="img">
                      <img
                        style={{ height: 142 }}
                        src={assetUrl("/guanwang_second/front/images/2020/nav/product_2_4-0080946f53.png")}
                        alt=""
                      />
                    </a>
                    <a href={`${routes.product("v5")}`} className="proTitle">
                      {products.lockV5}
                    </a>
                  </li>
                  <li>
                    <a href={`${routes.product("mixpad_s2")}`} className="img">
                      <img
                        style={{ width: 146, height: 123 }}
                        src={assetUrl("/guanwang_second/front/common/images/product_index/sec2_4_2x-81c7aaafd3.png")}
                        alt=""
                      />
                    </a>
                    <a href={`${routes.product("mixpad_s2")}`} className="proTitle">
                      {products.lockS2}
                    </a>
                  </li>
                  <li>
                    <a href={`${routes.product("t1c")}`} className="img">
                      <img
                        style={{ width: 144, height: 123 }}
                        src={assetUrl("/guanwang_second/front/images/2020/nav/product_2_3-deb19fb861.png")}
                        alt=""
                      />
                    </a>
                    <a href={`${routes.product("t1c")}`} className="proTitle">
                      {products.lockT1c}
                    </a>
                  </li>
                </ul>

                <OrviboProductSwiper panelId="4" active={activeCategory === "4"}>
                      <li>
                        <a href={`${routes.product("q3")}`} className="img">
                          <img
                            src={assetUrl("/guanwang_second/front/mobile/images/new/product/q3/pro-eb613a2e26.png")}
                            alt=""
                            style={{ width: 130, height: 130 }}
                          />
                        </a>
                        <a href={`${routes.product("q3")}`} className="proTitle">
                          {products.lightQ3}
                        </a>
                      </li>
                      <li>
                        <a href={`${routes.product("s3")}`} className="img">
                          <img
                            src={assetUrl("/guanwang_second/front/images/products/s3/pro-14adbb42ea.png")}
                            alt=""
                            style={{ width: 130, height: 130 }}
                          />
                        </a>
                        <a href={`${routes.product("s5")}`} className="proTitle">
                          {products.lightS3}
                        </a>
                      </li>
                      <li>
                        <a href={`${routes.product("s5")}`} className="img">
                          <img
                            src={assetUrl("/guanwang_second/front/images/products/s5/pro-7d582e11c3.png")}
                            alt=""
                            style={{ width: 130, height: 130 }}
                          />
                        </a>
                        <a href={`${routes.product("s5")}`} className="proTitle">
                          {products.lightS5}
                        </a>
                      </li>
                      <li>
                        <a href={`${routes.product("light")}`} className="img">
                          <img
                            src={assetUrl("/guanwang_second/front/mobile/images/new/product/light/product-f57bbf70ce.png")}
                            alt=""
                            style={{ width: 130, height: 130 }}
                          />
                        </a>
                        <a href={`${routes.product("light")}`} className="proTitle">
                          {products.lightBauhaus}
                        </a>
                      </li>
                      <li>
                        <a href={`${routes.product("cangqiong")}`} className="img">
                          <img
                            style={{ width: 130, height: 130 }}
                            src={assetUrl("/guanwang_second/front/images/products/cangqiong/pro-350f4a394c.png")}
                            alt=""
                          />
                        </a>
                        <a href={`${routes.product("cangqiong")}`} className="proTitle">
                          {products.cangqiong}
                        </a>
                      </li>
                      <li>
                        <a href={`${routes.product("daofeng")}`} className="img">
                          <img
                            style={{ width: 130, height: 110, marginTop: 11 }}
                            src={assetUrl("/guanwang_second/front/images/new/products/daofeng/product-d3bdd5f26b.png")}
                            alt=""
                          />
                        </a>
                        <a href={`${routes.product("daofeng")}`} className="proTitle">
                          {products.daofeng}
                        </a>
                      </li>
                      <li>
                        <a href={`${routes.product("s")}`} className="img">
                          <img
                            style={{ width: 130, height: 110, marginTop: 30 }}
                            src={assetUrl("/guanwang_second/front/common/images/product_cover/s-bbffe438bb.png")}
                            alt=""
                          />
                        </a>
                        <a href={`${routes.product("s")}`} className="proTitle">
                          {products.soproS}
                        </a>
                      </li>
                      <li>
                        <a href={`${routes.product("q")}`} className="img">
                          <img
                            style={{ width: 130, height: 130, marginTop: 0 }}
                            src={assetUrl("/guanwang_second/front/mobile/images/new/product/q/banner-9c4dc740ac.png")}
                            alt=""
                          />
                        </a>
                        <a href={`${routes.product("q")}`} className="proTitle">
                          {products.soproQ}
                        </a>
                      </li>
                      <li>
                        <a href={`${routes.product("downlight")}`} className="img">
                          <img
                            style={{ width: 133, height: 85 }}
                            src={assetUrl("/guanwang_second/front/images/2020/nav/product_3_1-3fb329a65d.png")}
                            alt=""
                          />
                        </a>
                        <a href={`${routes.product("downlight")}`} className="proTitle">
                          {products.downlight}
                        </a>
                      </li>
                </OrviboProductSwiper>

                <ul className={productUlClass("5")}>
                  <li>
                    <a href={`${routes.product("curtain_3d")}`} className="img">
                      <img
                        style={{ width: 180, height: 180 }}
                        src={assetUrl("/guanwang_second/front/images/new/products/curtain_3d/product-bb5952f1a2.png")}
                        alt=""
                      />
                    </a>
                    <a href={`${routes.product("curtain_3d")}`} className="proTitle">
                      {products.curtain3d}
                    </a>
                  </li>
                  <li>
                    <a href={`${routes.product("motor_db28")}`} className="img">
                      <img
                        style={{ width: 180, height: 180 }}
                        src={assetUrl("/guanwang_second/front/images/new/products/db28/product-888e543722.png")}
                        alt=""
                      />
                    </a>
                    <a href={`${routes.product("motor_db28")}`} className="proTitle">
                      {products.motorDb28}
                    </a>
                  </li>
                  <li>
                    <a href={`${routes.product("curtain_motor")}`} className="img">
                      <img
                        style={{ width: 180, height: 180 }}
                        src={assetUrl("/guanwang_second/front/images/new/products/curtain_motor/product-6e9fd2c7f0.png")}
                        alt=""
                      />
                    </a>
                    <a href={`${routes.product("curtain_motor")}`} className="proTitle">
                      {products.curtainMotor}
                    </a>
                  </li>
                  <li>
                    <a href={`${routes.product("chuangliansmart")}`} className="img">
                      <img
                        style={{ width: 180, height: 86 }}
                        src={assetUrl("/guanwang_second/front/images/2020/nav/product_4_4-2fda3d3f23.png")}
                        alt=""
                      />
                    </a>
                    <a href={`${routes.product("chuangliansmart")}`} className="proTitle">
                      {products.curtainSmart}
                    </a>
                  </li>
                  <li>
                    <a href={`${routes.product("chuanglian")}`} className="img">
                      <img
                        style={{ width: 169, height: 101 }}
                        src={assetUrl("/guanwang_second/front/images/2020/nav/product_4_1-4595af592e.png")}
                        alt=""
                      />
                    </a>
                    <a href={`${routes.product("chuanglian")}`} className="proTitle">
                      {products.curtainChocolate}
                    </a>
                  </li>
                  <li>
                    <a href={`${routes.product("chuanglian2")}`} className="img">
                      <img
                        style={{ width: 175, height: 102 }}
                        src={assetUrl("/guanwang_second/front/images/2020/nav/product_4_3-74c325ecf5.png")}
                        alt=""
                      />
                    </a>
                    <a href={`${routes.product("chuanglian2")}`} className="proTitle">
                      {products.curtainZigbee}
                    </a>
                  </li>
                </ul>

                <OrviboProductSwiper panelId="6" active={activeCategory === "6"}>
                      <li>
                        <a href={`${routes.product("camera_4")}`} className="img">
                          <img
                            style={{ width: 126, height: 126 }}
                            src={assetUrl("/guanwang_second/front/images/products/camera/camera-6e53cb8e1f.png")}
                            alt=""
                          />
                        </a>
                        <a href={`${routes.product("camera_4")}`} className="proTitle">
                          {products.cameraS1}
                        </a>
                      </li>
                      <li>
                        <a href={`${routes.product("yuntai")}`} className="img">
                          <img
                            style={{ width: 96, height: 96 }}
                            src={assetUrl("/guanwang_second/front/images/products/camera/camera-6e53cb8e1f.png")}
                            alt=""
                          />
                        </a>
                        <a href={`${routes.product("yuntai")}`} className="proTitle">
                          {products.cameraYuntai}
                        </a>
                      </li>
                      <li>
                        <a href={`${routes.product("doorsensor")}`} className="img">
                          <img
                            style={{ width: 114, height: 114 }}
                            src={assetUrl("/guanwang_second/front/images/2020/nav/product_5_3-2885f56684.png")}
                            alt=""
                          />
                        </a>
                        <a href={`${routes.product("doorsensor")}`} className="proTitle">
                          {products.doorSensor}
                        </a>
                      </li>
                      <li>
                        <a href={`${routes.product("bodysensor")}`} className="img">
                          <img
                            style={{ width: 126, height: 113 }}
                            src={assetUrl("/guanwang_second/front/images/2020/nav/product_5_4-7ac0661d60.png")}
                            alt=""
                          />
                        </a>
                        <a href={`${routes.product("bodysensor")}`} className="proTitle">
                          {products.bodySensor}
                        </a>
                      </li>
                      <li>
                        <a href={`${routes.product("temp_hum_sensor")}`} className="img">
                          <img
                            style={{ width: 96, height: 96 }}
                            src={assetUrl("/guanwang_second/front/images/2020/nav/product_5_5-3a6e8b2d44.png")}
                            alt=""
                          />
                        </a>
                        <a
                          href={`${routes.product("temp_hum_sensor")}`}
                          className="proTitle"
                        >
                          {products.tempHumSensor}
                        </a>
                      </li>
                      <li>
                        <a href={`${routes.product("co_alarm")}`} className="img">
                          <img
                            style={{ width: 90, height: 80 }}
                            src={assetUrl("/guanwang_second/front/images/2020/nav/product_5_7-7c956652d4.png")}
                            alt=""
                          />
                        </a>
                        <a href={`${routes.product("co_alarm")}`} className="proTitle">
                          {products.coAlarm}
                        </a>
                      </li>
                      <li>
                        <a href={`${routes.product("sos")}`} className="img">
                          <img
                            style={{ width: 96, height: 96 }}
                            src={assetUrl("/guanwang_second/front/images/2020/nav/product_5_7-7c956652d4.png")}
                            alt=""
                          />
                        </a>
                        <a href={`${routes.product("sos")}`} className="proTitle">
                          {products.sos}
                        </a>
                      </li>
                      <li>
                        <a
                          href={`${routes.product("photoelectric_alarm")}`}
                          className="img"
                        >
                          <img
                            style={{ width: 96, height: 96 }}
                            src={assetUrl("/guanwang_second/front/images/2020/nav/product_5_8-126bad2de3.png")}
                            alt=""
                          />
                        </a>
                        <a
                          href={`${routes.product("photoelectric_alarm")}`}
                          className="proTitle"
                        >
                          {products.smokeAlarm}
                        </a>
                      </li>
                      <li>
                        <a href={`${routes.product("gas_sensor")}`} className="img">
                          <img
                            style={{ width: 96, height: 96 }}
                            src={assetUrl("/guanwang_second/front/images/2020/nav/product_5_8-126bad2de3.png")}
                            alt=""
                          />
                        </a>
                        <a href={`${routes.product("gas_sensor")}`} className="proTitle">
                          {products.gasSensor}
                        </a>
                      </li>
                      <li>
                        <a href={`${routes.product("water_alarm")}`} className="img">
                          <img
                            style={{ width: 96, height: 96 }}
                            src={assetUrl("/guanwang_second/front/images/2020/nav/product_5_10-d7d8253317.png")}
                            alt=""
                          />
                        </a>
                        <a href={`${routes.product("water_alarm")}`} className="proTitle">
                          {products.waterAlarm}
                        </a>
                      </li>
                </OrviboProductSwiper>

                <ul className={productUlClass("7")}>
                  <li>
                    <a href={`${routes.product("mixpad_plus")}`} className="img">
                      <img
                        style={{ width: 130, height: 118 }}
                        src={assetUrl("/guanwang_second/front/images/2020/nav/product_6-94094f7d1c.png")}
                        alt=""
                      />
                    </a>
                    <a href={`${routes.product("mixpad_plus")}`} className="proTitle">
                      {products.mixpadPlus}
                    </a>
                  </li>
                </ul>

                <ul className={productUlClass("8")}>
                  <li>
                    <a href={`${routes.product("mixpad_mirror")}`} className="img">
                      <img
                        style={{ width: 132, height: 132 }}
                        src={assetUrl("/guanwang_second/front/images/products/mixpad_mirror/product-39c79a515d.png")}
                        alt=""
                      />
                    </a>
                    <a href={`${routes.product("mixpad_mirror")}`} className="proTitle">
                      {products.mixpadMirror}
                    </a>
                  </li>
                  <li>
                    <a href={`${routes.product("robot_r2")}`} className="img">
                      <img
                        style={{ width: 132, height: 132 }}
                        src={assetUrl("/guanwang_second/front/images/products/robot_r2/product-92305e1a8b.png")}
                        alt=""
                      />
                    </a>
                    <a href={`${routes.product("robot_r2")}`} className="proTitle">
                      {products.robotR2}
                    </a>
                  </li>
                  <li>
                    <a href={`${routes.product("artisbox_play")}`} className="img">
                      <img
                        style={{ width: 132, height: 132 }}
                        src={assetUrl("/guanwang_second/front/images/products/artisbox_play/product-0a99af25fd.png")}
                        alt=""
                      />
                    </a>
                    <a href={`${routes.product("artisbox_play")}`} className="proTitle">
                      {products.artisbox}
                    </a>
                  </li>
                </ul>

                <ul className={productUlClass("9")}>
                  <li>
                    <a href={`${routes.product("xiaofang")}`} className="img">
                      <img
                        style={{ width: 78, height: 77 }}
                        src={assetUrl("/guanwang_second/front/images/2020/nav/product_8_1-50825d0ada.png")}
                        alt=""
                      />
                    </a>
                    <a href={`${routes.product("xiaofang")}`} className="proTitle">
                      {products.xiaofang}
                    </a>
                  </li>
                  <li>
                    <a href={`${routes.product("s30c")}`} className="img">
                      <img
                        style={{ width: 73, height: 91 }}
                        src={assetUrl("/guanwang_second/front/images/2020/nav/product_8_2-87aae68057.png")}
                        alt=""
                      />
                    </a>
                    <a href={`${routes.product("s30c")}`} className="proTitle">
                      {products.s30c}
                    </a>
                  </li>
                </ul>
              </section>
            </aside>
          </li>

          <li
            ref={bizMenuRef}
            className={`has-submenu ${open === "biz" ? "opened" : ""}`}
            onMouseEnter={() => setOpen("biz")}
            onMouseLeave={(event) => handleSubmenuLeave(event, "biz", bizMenuRef)}
          >
            <a className={navLinkClass("biz")} href={base}>
              {nav.business}
            </a>
            <aside className="pc-nav-submenus-popups" style={{ height: 100 }}>
              <ul className="submenu">
                <li>
                  <a href={routes.cooperation}>{nav.dealer}</a>
                </li>
                <li>
                  <a href={routes.estateCooperation}>{nav.estate}</a>
                </li>
                <div
                  className="underline"
                  style={{
                    opacity: 0,
                    height: 1,
                    left: 491,
                    width: 72,
                    bottom: 29,
                    position: "absolute",
                    backgroundColor: "currentcolor",
                    transition: "all 0.3s ease 0s",
                  }}
                />
              </ul>
            </aside>
          </li>

          <li>
            <a className="nav_video" href={routes.exploreConference}>
              {nav.explore}
            </a>
          </li>

          <li
            ref={aboutMenuRef}
            className={`has-submenu ${open === "about" ? "opened" : ""}`}
            onMouseEnter={() => setOpen("about")}
            onMouseLeave={(event) =>
              handleSubmenuLeave(event, "about", aboutMenuRef)
            }
          >
            <a className={navLinkClass("about")} href={base}>
              {nav.about}
            </a>
            <aside className="pc-nav-submenus-popups" style={{ height: 100 }}>
              <ul className="submenu">
                <li>
                  <a href={routes.about("about_us")}>{nav.company}</a>
                </li>
                <li>
                  <a href={routes.about("culture")}>{nav.culture}</a>
                </li>
                <li>
                  <a href={routes.about("join_us")}>{nav.careers}</a>
                </li>
                <li>
                  <a href={routes.about("contact")}>{nav.contact}</a>
                </li>
                <div
                  className="underline"
                  style={{
                    opacity: 0,
                    height: 1,
                    left: 368,
                    width: 72,
                    bottom: 29,
                    position: "absolute",
                    backgroundColor: "currentcolor",
                    transition: "all 0.3s ease 0s",
                  }}
                />
              </ul>
            </aside>
          </li>
        </ul>
      </div>

      <i
        id="oc-mask"
        aria-hidden
        onMouseEnter={closeMenu}
        onClick={closeMenu}
        onKeyDown={closeMenu}
      />
    </header>
  );
}

