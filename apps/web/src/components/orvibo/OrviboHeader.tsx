"use client";

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
            src="/guanwang_second/front/images/2020/nav/logo-38c948b4cf.svg"
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
              href={`${base}/product/productList.html`}
            >
              {nav.products}
            </a>
            <aside className="pc-nav-submenus-popup">
              <ul ref={submenuRef} className="submenu">
                <li data-id="0" onMouseEnter={() => setActiveCategory("0")}>
                  <a href={`${base}/product/productList.html#10`}>
                    <span>{nav.categories["0"]}</span>
                  </a>
                </li>
                <li data-id="1" onMouseEnter={() => setActiveCategory("1")}>
                  <a href={`${base}/product/productList.html#1`}>
                    <span>{nav.categories["1"]}</span>
                  </a>
                </li>
                <li data-id="2" onMouseEnter={() => setActiveCategory("2")}>
                  <a href={`${base}/product/productList.html#9`}>
                    <span>{nav.categories["2"]}</span>
                  </a>
                </li>
                <li data-id="4" onMouseEnter={() => setActiveCategory("4")}>
                  <a href={`${base}/product/productList.html#3`}>
                    <span>{nav.categories["4"]}</span>
                  </a>
                </li>
                <li data-id="3" onMouseEnter={() => setActiveCategory("3")}>
                  <a href={`${base}/product/productList.html#2`}>
                    <span>{nav.categories["3"]}</span>
                  </a>
                </li>
                <li data-id="5" onMouseEnter={() => setActiveCategory("5")}>
                  <a href={`${base}/product/productList.html#4`}>
                    <span>{nav.categories["5"]}</span>
                  </a>
                </li>
                <li data-id="6" onMouseEnter={() => setActiveCategory("6")}>
                  <a href={`${base}/product/productList.html#5`}>
                    <span>{nav.categories["6"]}</span>
                  </a>
                </li>
                <li data-id="7" onMouseEnter={() => setActiveCategory("7")}>
                  <a href={`${base}/product/productList.html#6`}>
                    <span>{nav.categories["7"]}</span>
                  </a>
                </li>
                <li data-id="8" onMouseEnter={() => setActiveCategory("8")}>
                  <a href={`${base}/product/productList.html#7`}>
                    <span>{nav.categories["8"]}</span>
                  </a>
                </li>
                <li data-id="9" onMouseEnter={() => setActiveCategory("9")}>
                  <a href={`${base}/product/productList.html#8`}>
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
                    <a href={`${base}/product/mixstation.html`} className="img">
                      <img
                        style={{ width: 168 }}
                        src="/guanwang_second/front/mobile/images/new/product/mixstation/pro-8787fbfaf5.png"
                        alt=""
                      />
                    </a>
                    <a href={`${base}/product/mixstation.html`} className="proTitle">
                      {products.mixstation}
                    </a>
                  </li>
                </ul>

                <ul className={productUlClass("1")}>
                  <li>
                    <a href={`${base}/product/mixpad_7_ultra.html`} className="img">
                      <img
                        style={{ width: 168, height: 168 }}
                        src="/guanwang_second/front/mobile/images/new/product/mixpad_7ultra/product-e0c57d88e5.png"
                        alt=""
                      />
                    </a>
                    <a href={`${base}/product/mixpad_7_ultra.html`} className="proTitle">
                      {products.mixpad7Ultra}
                    </a>
                  </li>
                  <li>
                    <a href={`${base}/product/mixpad_7.html`} className="img">
                      <img
                        style={{ width: 168, height: 168 }}
                        src="/guanwang_second/front/images/products/mixpad_7/product-08ab3fcd26.png"
                        alt=""
                      />
                    </a>
                    <a href={`${base}/product/mixpad_7.html`} className="proTitle">
                      {products.mixpad7}
                    </a>
                  </li>
                  <li>
                    <a href={`${base}/product/mixpad_x.html`} className="img">
                      <img
                        style={{ width: 143, height: 68 }}
                        src="/guanwang_second/front/common/images/product_index/sec1_8-eea36ad831.png"
                        alt=""
                      />
                    </a>
                    <a href={`${base}/product/mixpad_x.html`} className="proTitle">
                      {products.mixpadX}
                    </a>
                  </li>
                  <li>
                    <a href={`${base}/product/mixpad_m2.html`} className="img">
                      <img
                        style={{ width: 168, height: 168 }}
                        src="/guanwang_second/front/images/products/mixpad_m2/product-3b84ba6f48.png"
                        alt=""
                      />
                    </a>
                    <a href={`${base}/product/mixpad_m2.html`} className="proTitle">
                      {products.mixpadM2}
                    </a>
                  </li>
                  <li>
                    <a href={`${base}/product/mixpad_s_flagship.html`} className="img">
                      <img
                        style={{ width: 74, height: 146 }}
                        src="/guanwang_second/front/common/images/product_index/sec1_7-6dbd00544a.png"
                        alt=""
                      />
                    </a>
                    <a
                      href={`${base}/product/mixpad_s_flagship.html`}
                      className="proTitle"
                    >
                      {products.mixpadSFlagship}
                    </a>
                  </li>
                </ul>

                <ul className={productUlClass("2")}>
                  <li>
                    <a href={`${base}/product/gaosi.html`} className="img">
                      <img
                        style={{ width: 168 }}
                        src="/guanwang_second/front/mobile/images/products/gaosi/pro-70e28780f4.png"
                        alt=""
                      />
                    </a>
                    <a href={`${base}/product/gaosi.html`} className="proTitle">
                      {products.gaosi}
                    </a>
                  </li>
                  <li>
                    <a href={`${base}/product/defy.html`} className="img">
                      <img
                        style={{ width: 168, height: 168 }}
                        src="/guanwang_second/front/mobile/images/new/product/defy/product-acd38b85b3.png"
                        alt=""
                      />
                    </a>
                    <a href={`${base}/product/defy.html`} className="proTitle">
                      {products.defy}
                    </a>
                  </li>
                  <li>
                    <a href={`${base}/product/bach.html`} className="img">
                      <img
                        style={{ width: 168, height: 168 }}
                        src="/guanwang_second/front/mobile/images/new/product/bahe/product-df2604a0b2.png"
                        alt=""
                      />
                    </a>
                    <a href={`${base}/product/bach.html`} className="proTitle">
                      {products.bach}
                    </a>
                  </li>
                  <li>
                    <a href={`${base}/product/mixpad_elf.html`} className="img">
                      <img
                        style={{ width: 106, height: 108 }}
                        src="/guanwang_second/front/common/images/product_index/sec1_elf-58a058f655.png"
                        alt=""
                      />
                    </a>
                    <a href={`${base}/product/mixpad_elf.html`} className="proTitle">
                      {products.mixpadElf}
                    </a>
                  </li>
                  <li>
                    <a href={`${base}/product/mixpad_switch.html`} className="img">
                      <img
                        style={{ width: 145, height: 52 }}
                        src="/guanwang_second/front/common/images/product_index/sec1_6-2c22974275.png"
                        alt=""
                      />
                    </a>
                    <a href={`${base}/product/mixpad_switch.html`} className="proTitle">
                      {products.mixSwitch}
                    </a>
                  </li>
                </ul>

                <ul className={productUlClass("3")}>
                  <li>
                    <a href={`${base}/product/v5.html`} className="img">
                      <img
                        style={{ height: 142 }}
                        src="/guanwang_second/front/images/2020/nav/product_2_4-0080946f53.png"
                        alt=""
                      />
                    </a>
                    <a href={`${base}/product/v5.html`} className="proTitle">
                      {products.lockV5}
                    </a>
                  </li>
                  <li>
                    <a href={`${base}/product/mixpad_s2.html`} className="img">
                      <img
                        style={{ width: 146, height: 123 }}
                        src="/guanwang_second/front/common/images/product_index/sec2_4_2x-81c7aaafd3.png"
                        alt=""
                      />
                    </a>
                    <a href={`${base}/product/mixpad_s2.html`} className="proTitle">
                      {products.lockS2}
                    </a>
                  </li>
                  <li>
                    <a href={`${base}/product/t1c/index.html`} className="img">
                      <img
                        style={{ width: 144, height: 123 }}
                        src="/guanwang_second/front/images/2020/nav/product_2_3-deb19fb861.png"
                        alt=""
                      />
                    </a>
                    <a href={`${base}/product/t1c/index.html`} className="proTitle">
                      {products.lockT1c}
                    </a>
                  </li>
                </ul>

                <OrviboProductSwiper panelId="4" active={activeCategory === "4"}>
                      <li>
                        <a href={`${base}/product/q3.html`} className="img">
                          <img
                            src="/guanwang_second/front/mobile/images/new/product/q3/pro-eb613a2e26.png"
                            alt=""
                            style={{ width: 130, height: 130 }}
                          />
                        </a>
                        <a href={`${base}/product/q3.html`} className="proTitle">
                          {products.lightQ3}
                        </a>
                      </li>
                      <li>
                        <a href={`${base}/product/s3.html`} className="img">
                          <img
                            src="/guanwang_second/front/images/products/s3/pro-14adbb42ea.png"
                            alt=""
                            style={{ width: 130, height: 130 }}
                          />
                        </a>
                        <a href={`${base}/product/s5.html`} className="proTitle">
                          {products.lightS3}
                        </a>
                      </li>
                      <li>
                        <a href={`${base}/product/s5.html`} className="img">
                          <img
                            src="/guanwang_second/front/images/products/s5/pro-7d582e11c3.png"
                            alt=""
                            style={{ width: 130, height: 130 }}
                          />
                        </a>
                        <a href={`${base}/product/s5.html`} className="proTitle">
                          {products.lightS5}
                        </a>
                      </li>
                      <li>
                        <a href={`${base}/product/light.html`} className="img">
                          <img
                            src="/guanwang_second/front/mobile/images/new/product/light/product-f57bbf70ce.png"
                            alt=""
                            style={{ width: 130, height: 130 }}
                          />
                        </a>
                        <a href={`${base}/product/light.html`} className="proTitle">
                          {products.lightBauhaus}
                        </a>
                      </li>
                      <li>
                        <a href={`${base}/product/cangqiong.html`} className="img">
                          <img
                            style={{ width: 130, height: 130 }}
                            src="/guanwang_second/front/images/products/cangqiong/pro-350f4a394c.png"
                            alt=""
                          />
                        </a>
                        <a href={`${base}/product/cangqiong.html`} className="proTitle">
                          {products.cangqiong}
                        </a>
                      </li>
                      <li>
                        <a href={`${base}/product/daofeng.html`} className="img">
                          <img
                            style={{ width: 130, height: 110, marginTop: 11 }}
                            src="/guanwang_second/front/images/new/products/daofeng/product-d3bdd5f26b.png"
                            alt=""
                          />
                        </a>
                        <a href={`${base}/product/daofeng.html`} className="proTitle">
                          {products.daofeng}
                        </a>
                      </li>
                      <li>
                        <a href={`${base}/product/s.html`} className="img">
                          <img
                            style={{ width: 130, height: 110, marginTop: 30 }}
                            src="/guanwang_second/front/common/images/product_cover/s-bbffe438bb.png"
                            alt=""
                          />
                        </a>
                        <a href={`${base}/product/s.html`} className="proTitle">
                          {products.soproS}
                        </a>
                      </li>
                      <li>
                        <a href={`${base}/product/q.html`} className="img">
                          <img
                            style={{ width: 130, height: 130, marginTop: 0 }}
                            src="/guanwang_second/front/mobile/images/new/product/q/banner-9c4dc740ac.png"
                            alt=""
                          />
                        </a>
                        <a href={`${base}/product/q.html`} className="proTitle">
                          {products.soproQ}
                        </a>
                      </li>
                      <li>
                        <a href={`${base}/product/downlight.html`} className="img">
                          <img
                            style={{ width: 133, height: 85 }}
                            src="/guanwang_second/front/images/2020/nav/product_3_1-3fb329a65d.png"
                            alt=""
                          />
                        </a>
                        <a href={`${base}/product/downlight.html`} className="proTitle">
                          {products.downlight}
                        </a>
                      </li>
                </OrviboProductSwiper>

                <ul className={productUlClass("5")}>
                  <li>
                    <a href={`${base}/product/curtain_3d.html`} className="img">
                      <img
                        style={{ width: 180, height: 180 }}
                        src="/guanwang_second/front/images/new/products/curtain_3d/product-bb5952f1a2.png"
                        alt=""
                      />
                    </a>
                    <a href={`${base}/product/curtain_3d.html`} className="proTitle">
                      {products.curtain3d}
                    </a>
                  </li>
                  <li>
                    <a href={`${base}/product/motor_db28.html`} className="img">
                      <img
                        style={{ width: 180, height: 180 }}
                        src="/guanwang_second/front/images/new/products/db28/product-888e543722.png"
                        alt=""
                      />
                    </a>
                    <a href={`${base}/product/motor_db28.html`} className="proTitle">
                      {products.motorDb28}
                    </a>
                  </li>
                  <li>
                    <a href={`${base}/product/curtain_motor.html`} className="img">
                      <img
                        style={{ width: 180, height: 180 }}
                        src="/guanwang_second/front/images/new/products/curtain_motor/product-6e9fd2c7f0.png"
                        alt=""
                      />
                    </a>
                    <a href={`${base}/product/curtain_motor.html`} className="proTitle">
                      {products.curtainMotor}
                    </a>
                  </li>
                  <li>
                    <a href={`${base}/product/chuangliansmart.html`} className="img">
                      <img
                        style={{ width: 180, height: 86 }}
                        src="/guanwang_second/front/images/2020/nav/product_4_4-2fda3d3f23.png"
                        alt=""
                      />
                    </a>
                    <a href={`${base}/product/chuangliansmart.html`} className="proTitle">
                      {products.curtainSmart}
                    </a>
                  </li>
                  <li>
                    <a href={`${base}/product/chuanglian.html`} className="img">
                      <img
                        style={{ width: 169, height: 101 }}
                        src="/guanwang_second/front/images/2020/nav/product_4_1-4595af592e.png"
                        alt=""
                      />
                    </a>
                    <a href={`${base}/product/chuanglian.html`} className="proTitle">
                      {products.curtainChocolate}
                    </a>
                  </li>
                  <li>
                    <a href={`${base}/product/chuanglian2.html`} className="img">
                      <img
                        style={{ width: 175, height: 102 }}
                        src="/guanwang_second/front/images/2020/nav/product_4_3-74c325ecf5.png"
                        alt=""
                      />
                    </a>
                    <a href={`${base}/product/chuanglian2.html`} className="proTitle">
                      {products.curtainZigbee}
                    </a>
                  </li>
                </ul>

                <OrviboProductSwiper panelId="6" active={activeCategory === "6"}>
                      <li>
                        <a href={`${base}/product/camera_4.html`} className="img">
                          <img
                            style={{ width: 126, height: 126 }}
                            src="/guanwang_second/front/images/products/camera/camera-6e53cb8e1f.png"
                            alt=""
                          />
                        </a>
                        <a href={`${base}/product/camera_4.html`} className="proTitle">
                          {products.cameraS1}
                        </a>
                      </li>
                      <li>
                        <a href={`${base}/product/yuntai.html`} className="img">
                          <img
                            style={{ width: 96, height: 96 }}
                            src="/guanwang_second/front/images/products/camera/camera-6e53cb8e1f.png"
                            alt=""
                          />
                        </a>
                        <a href={`${base}/product/yuntai.html`} className="proTitle">
                          {products.cameraYuntai}
                        </a>
                      </li>
                      <li>
                        <a href={`${base}/product/doorsensor.html`} className="img">
                          <img
                            style={{ width: 114, height: 114 }}
                            src="/guanwang_second/front/images/2020/nav/product_5_3-2885f56684.png"
                            alt=""
                          />
                        </a>
                        <a href={`${base}/product/doorsensor.html`} className="proTitle">
                          {products.doorSensor}
                        </a>
                      </li>
                      <li>
                        <a href={`${base}/product/bodysensor.html`} className="img">
                          <img
                            style={{ width: 126, height: 113 }}
                            src="/guanwang_second/front/images/2020/nav/product_5_4-7ac0661d60.png"
                            alt=""
                          />
                        </a>
                        <a href={`${base}/product/bodysensor.html`} className="proTitle">
                          {products.bodySensor}
                        </a>
                      </li>
                      <li>
                        <a href={`${base}/product/temp_hum_sensor.html`} className="img">
                          <img
                            style={{ width: 96, height: 96 }}
                            src="/guanwang_second/front/images/2020/nav/product_5_5-3a6e8b2d44.png"
                            alt=""
                          />
                        </a>
                        <a
                          href={`${base}/product/temp_hum_sensor.html`}
                          className="proTitle"
                        >
                          {products.tempHumSensor}
                        </a>
                      </li>
                      <li>
                        <a href={`${base}/product/co_alarm.html`} className="img">
                          <img
                            style={{ width: 90, height: 80 }}
                            src="/guanwang_second/front/images/2020/nav/product_5_7-7c956652d4.png"
                            alt=""
                          />
                        </a>
                        <a href={`${base}/product/co_alarm.html`} className="proTitle">
                          {products.coAlarm}
                        </a>
                      </li>
                      <li>
                        <a href={`${base}/product/sos.html`} className="img">
                          <img
                            style={{ width: 96, height: 96 }}
                            src="/guanwang_second/front/images/2020/nav/product_5_7-7c956652d4.png"
                            alt=""
                          />
                        </a>
                        <a href={`${base}/product/sos.html`} className="proTitle">
                          {products.sos}
                        </a>
                      </li>
                      <li>
                        <a
                          href={`${base}/product/photoelectric_alarm.html`}
                          className="img"
                        >
                          <img
                            style={{ width: 96, height: 96 }}
                            src="/guanwang_second/front/images/2020/nav/product_5_8-126bad2de3.png"
                            alt=""
                          />
                        </a>
                        <a
                          href={`${base}/product/photoelectric_alarm.html`}
                          className="proTitle"
                        >
                          {products.smokeAlarm}
                        </a>
                      </li>
                      <li>
                        <a href={`${base}/product/gas_sensor.html`} className="img">
                          <img
                            style={{ width: 96, height: 96 }}
                            src="/guanwang_second/front/images/2020/nav/product_5_8-126bad2de3.png"
                            alt=""
                          />
                        </a>
                        <a href={`${base}/product/gas_sensor.html`} className="proTitle">
                          {products.gasSensor}
                        </a>
                      </li>
                      <li>
                        <a href={`${base}/product/water_alarm.html`} className="img">
                          <img
                            style={{ width: 96, height: 96 }}
                            src="/guanwang_second/front/images/2020/nav/product_5_10-d7d8253317.png"
                            alt=""
                          />
                        </a>
                        <a href={`${base}/product/water_alarm.html`} className="proTitle">
                          {products.waterAlarm}
                        </a>
                      </li>
                </OrviboProductSwiper>

                <ul className={productUlClass("7")}>
                  <li>
                    <a href={`${base}/product/mixpad_plus.html`} className="img">
                      <img
                        style={{ width: 130, height: 118 }}
                        src="/guanwang_second/front/images/2020/nav/product_6-94094f7d1c.png"
                        alt=""
                      />
                    </a>
                    <a href={`${base}/product/mixpad_plus.html`} className="proTitle">
                      {products.mixpadPlus}
                    </a>
                  </li>
                </ul>

                <ul className={productUlClass("8")}>
                  <li>
                    <a href={`${base}/product/mixpad_mirror.html`} className="img">
                      <img
                        style={{ width: 132, height: 132 }}
                        src="/guanwang_second/front/images/products/mixpad_mirror/product-39c79a515d.png"
                        alt=""
                      />
                    </a>
                    <a href={`${base}/product/mixpad_mirror.html`} className="proTitle">
                      {products.mixpadMirror}
                    </a>
                  </li>
                  <li>
                    <a href={`${base}/product/robot_r2.html`} className="img">
                      <img
                        style={{ width: 132, height: 132 }}
                        src="/guanwang_second/front/images/products/robot_r2/product-92305e1a8b.png"
                        alt=""
                      />
                    </a>
                    <a href={`${base}/product/robot_r2.html`} className="proTitle">
                      {products.robotR2}
                    </a>
                  </li>
                  <li>
                    <a href={`${base}/product/artisbox_play.html`} className="img">
                      <img
                        style={{ width: 132, height: 132 }}
                        src="/guanwang_second/front/images/products/artisbox_play/product-0a99af25fd.png"
                        alt=""
                      />
                    </a>
                    <a href={`${base}/product/artisbox_play.html`} className="proTitle">
                      {products.artisbox}
                    </a>
                  </li>
                </ul>

                <ul className={productUlClass("9")}>
                  <li>
                    <a href={`${base}/product/xiaofang.html`} className="img">
                      <img
                        style={{ width: 78, height: 77 }}
                        src="/guanwang_second/front/images/2020/nav/product_8_1-50825d0ada.png"
                        alt=""
                      />
                    </a>
                    <a href={`${base}/product/xiaofang.html`} className="proTitle">
                      {products.xiaofang}
                    </a>
                  </li>
                  <li>
                    <a href={`${base}/product/s30c.html`} className="img">
                      <img
                        style={{ width: 73, height: 91 }}
                        src="/guanwang_second/front/images/2020/nav/product_8_2-87aae68057.png"
                        alt=""
                      />
                    </a>
                    <a href={`${base}/product/s30c.html`} className="proTitle">
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
                  <a href={base}>{nav.dealer}</a>
                </li>
                <li>
                  <a href={base}>{nav.estate}</a>
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
            <a className="nav_video" href={base}>
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
                  <a href={base}>{nav.company}</a>
                </li>
                <li>
                  <a href={base}>{nav.culture}</a>
                </li>
                <li>
                  <a href={base}>{nav.careers}</a>
                </li>
                <li>
                  <a href={base}>{nav.contact}</a>
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
      />
    </header>
  );
}

