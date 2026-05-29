"use client";

import { Menu } from "lucide-react";
import type { ReactNode } from "react";
import { useState } from "react";
import { Sheet, SheetContent, SheetTitle, SheetTrigger } from "@v1/ui/sheet";
import type { Dictionary } from "@/app/[locale]/dictionaries";
import { assetUrl } from "@/lib/orvibo/assetUrl";
import { orviboRoutes } from "@/lib/orvibo/routes";
import { Button } from "../ui/button";
import { Link } from "../ui/link";

type MenuKey = "products" | "business" | "about";

interface SiteHeaderProps {
  base: string;
  nav: Dictionary["nav"];
  products: Dictionary["navProducts"];
}

interface ProductItem {
  href: string;
  image: string;
  label: ReactNode;
  imageClassName?: string;
}

interface ProductCategory {
  id: keyof Dictionary["nav"]["categories"];
  hash: string;
  items: ProductItem[];
}

export function SiteHeader({ base, nav, products }: SiteHeaderProps) {
  const routes = orviboRoutes(base);
  const [openMenu, setOpenMenu] = useState<MenuKey | null>(null);
  const [activeCategory, setActiveCategory] =
    useState<keyof Dictionary["nav"]["categories"]>("0");

  const productCategories: ProductCategory[] = [
    {
      id: "0",
      hash: "10",
      items: [
        {
          href: routes.product("mixstation"),
          image:
            "/guanwang_second/front/mobile/images/new/product/mixstation/pro-8787fbfaf5.png",
          imageClassName: "w-[168px]",
          label: products.mixstation,
        },
      ],
    },
    {
      id: "1",
      hash: "1",
      items: [
        {
          href: routes.product("mixpad_7_ultra"),
          image:
            "/guanwang_second/front/mobile/images/new/product/mixpad_7ultra/product-e0c57d88e5.png",
          label: products.mixpad7Ultra,
        },
        {
          href: routes.product("mixpad_7"),
          image:
            "/guanwang_second/front/images/products/mixpad_7/product-08ab3fcd26.png",
          label: products.mixpad7,
        },
        {
          href: routes.product("mixpad_x"),
          image:
            "/guanwang_second/front/common/images/product_index/sec1_8-eea36ad831.png",
          imageClassName: "h-[68px] w-[143px]",
          label: products.mixpadX,
        },
        {
          href: routes.product("mixpad_m2"),
          image:
            "/guanwang_second/front/images/products/mixpad_m2/product-3b84ba6f48.png",
          label: products.mixpadM2,
        },
        {
          href: routes.product("mixpad_s_flagship"),
          image:
            "/guanwang_second/front/common/images/product_index/sec1_7-6dbd00544a.png",
          imageClassName: "h-[146px] w-[74px]",
          label: products.mixpadSFlagship,
        },
      ],
    },
    {
      id: "2",
      hash: "9",
      items: [
        {
          href: routes.product("gaosi"),
          image:
            "/guanwang_second/front/mobile/images/products/gaosi/pro-70e28780f4.png",
          label: products.gaosi,
        },
        {
          href: routes.product("defy"),
          image:
            "/guanwang_second/front/mobile/images/new/product/defy/product-acd38b85b3.png",
          label: products.defy,
        },
        {
          href: routes.product("bach"),
          image:
            "/guanwang_second/front/mobile/images/new/product/bahe/product-df2604a0b2.png",
          label: products.bach,
        },
        {
          href: routes.product("mixpad_elf"),
          image:
            "/guanwang_second/front/common/images/product_index/sec1_elf-58a058f655.png",
          imageClassName: "h-[108px] w-[106px]",
          label: products.mixpadElf,
        },
        {
          href: routes.product("mixpad_switch"),
          image:
            "/guanwang_second/front/common/images/product_index/sec1_6-2c22974275.png",
          imageClassName: "h-[52px] w-[145px]",
          label: products.mixSwitch,
        },
      ],
    },
    {
      id: "4",
      hash: "3",
      items: [
        {
          href: routes.product("q3"),
          image:
            "/guanwang_second/front/mobile/images/new/product/q3/pro-eb613a2e26.png",
          imageClassName: "h-[130px] w-[130px]",
          label: products.lightQ3,
        },
        {
          href: routes.product("s3"),
          image: "/guanwang_second/front/images/products/s3/pro-14adbb42ea.png",
          imageClassName: "h-[130px] w-[130px]",
          label: products.lightS3,
        },
        {
          href: routes.product("s5"),
          image: "/guanwang_second/front/images/products/s5/pro-7d582e11c3.png",
          imageClassName: "h-[130px] w-[130px]",
          label: products.lightS5,
        },
        {
          href: routes.product("cangqiong"),
          image:
            "/guanwang_second/front/images/products/cangqiong/pro-350f4a394c.png",
          imageClassName: "h-[130px] w-[130px]",
          label: products.cangqiong,
        },
        {
          href: routes.product("daofeng"),
          image:
            "/guanwang_second/front/images/new/products/daofeng/product-d3bdd5f26b.png",
          imageClassName: "h-[110px] w-[130px]",
          label: products.daofeng,
        },
      ],
    },
    {
      id: "3",
      hash: "2",
      items: [
        {
          href: routes.product("v5"),
          image:
            "/guanwang_second/front/images/2020/nav/product_2_4-0080946f53.png",
          imageClassName: "h-[142px]",
          label: products.lockV5,
        },
        {
          href: routes.product("mixpad_s2"),
          image:
            "/guanwang_second/front/common/images/product_index/sec2_4_2x-81c7aaafd3.png",
          imageClassName: "h-[123px] w-[146px]",
          label: products.lockS2,
        },
        {
          href: routes.product("t1c"),
          image:
            "/guanwang_second/front/images/2020/nav/product_2_3-deb19fb861.png",
          imageClassName: "h-[123px] w-[144px]",
          label: products.lockT1c,
        },
      ],
    },
    {
      id: "5",
      hash: "4",
      items: [
        {
          href: routes.product("curtain_3d"),
          image:
            "/guanwang_second/front/images/new/products/curtain_3d/product-bb5952f1a2.png",
          label: products.curtain3d,
        },
        {
          href: routes.product("motor_db28"),
          image:
            "/guanwang_second/front/images/new/products/db28/product-888e543722.png",
          label: products.motorDb28,
        },
        {
          href: routes.product("curtain_motor"),
          image:
            "/guanwang_second/front/images/new/products/curtain_motor/product-6e9fd2c7f0.png",
          label: products.curtainMotor,
        },
      ],
    },
    {
      id: "6",
      hash: "5",
      items: [
        {
          href: routes.product("camera_4"),
          image:
            "/guanwang_second/front/images/products/camera/camera-6e53cb8e1f.png",
          imageClassName: "h-[126px] w-[126px]",
          label: products.cameraS1,
        },
        {
          href: routes.product("yuntai"),
          image:
            "/guanwang_second/front/images/2020/nav/product_5_2-a123782e2e.png",
          imageClassName: "h-[96px] w-[96px]",
          label: products.cameraYuntai,
        },
        {
          href: routes.product("doorsensor"),
          image:
            "/guanwang_second/front/images/2020/nav/product_5_3-2885f56684.png",
          imageClassName: "h-[114px] w-[114px]",
          label: products.doorSensor,
        },
        {
          href: routes.product("bodysensor"),
          image:
            "/guanwang_second/front/images/2020/nav/product_5_4-7ac0661d60.png",
          imageClassName: "h-[113px] w-[126px]",
          label: products.bodySensor,
        },
      ],
    },
    {
      id: "7",
      hash: "6",
      items: [
        {
          href: routes.product("mixpad_plus"),
          image:
            "/guanwang_second/front/images/2020/nav/product_6-94094f7d1c.png",
          imageClassName: "h-[118px] w-[130px]",
          label: products.mixpadPlus,
        },
      ],
    },
    {
      id: "8",
      hash: "7",
      items: [
        {
          href: routes.product("mixpad_mirror"),
          image:
            "/guanwang_second/front/images/products/mixpad_mirror/product-39c79a515d.png",
          imageClassName: "h-[132px] w-[132px]",
          label: products.mixpadMirror,
        },
        {
          href: routes.product("robot_r2"),
          image:
            "/guanwang_second/front/images/products/robot_r2/product-92305e1a8b.png",
          imageClassName: "h-[132px] w-[132px]",
          label: products.robotR2,
        },
        {
          href: routes.product("artisbox_play"),
          image:
            "/guanwang_second/front/images/products/artisbox_play/product-0a99af25fd.png",
          imageClassName: "h-[132px] w-[132px]",
          label: products.artisbox,
        },
      ],
    },
    {
      id: "9",
      hash: "8",
      items: [
        {
          href: routes.product("xiaofang"),
          image:
            "/guanwang_second/front/images/2020/nav/product_8_1-50825d0ada.png",
          imageClassName: "h-[77px] w-[78px]",
          label: products.xiaofang,
        },
        {
          href: routes.product("s30c"),
          image:
            "/guanwang_second/front/images/2020/nav/product_8_2-87aae68057.png",
          imageClassName: "h-[91px] w-[73px]",
          label: products.s30c,
        },
      ],
    },
  ];

  const activeProducts =
    productCategories.find((category) => category.id === activeCategory) ??
    productCategories[0]!;

  const mobileLinks = [
    { href: routes.home, label: nav.home },
    { href: routes.home, label: nav.wholeHome },
    { href: routes.productList, label: nav.products },
    { href: routes.cooperation, label: nav.business },
    { href: routes.exploreConference, label: nav.explore },
    { href: routes.about("about_us"), label: nav.about },
  ];

  function closeMenu() {
    setOpenMenu(null);
    setActiveCategory("0");
  }

  return (
    <header
      className="relative z-50 w-full min-w-0 bg-black font-orvibo text-white"
      onMouseLeave={closeMenu}
    >
      <div className="flex h-[80px] items-center justify-center">
        <Link aria-label="ORVIBO" href={base}>
          <img
            alt="ORVIBO"
            className="block h-[29px] w-auto"
            src={assetUrl(
              "/guanwang_second/front/images/2020/nav/logo-38c948b4cf.svg",
            )}
          />
        </Link>
      </div>

      <nav className="mx-auto hidden h-[50px] max-w-orvibo items-center justify-center overflow-x-auto px-[24px] lg:flex">
        <ul className="flex h-full items-center justify-center">
          <li className="h-[50px] px-[25px] pr-[65px] text-[16px] leading-[50px]">
            <Link
              className="text-[#a7a7a7] hover:text-white"
              href={routes.home}
            >
              {nav.home}
            </Link>
          </li>
          <li className="h-[50px] px-[25px] text-[16px] leading-[50px]">
            <Link
              className="text-[#a7a7a7] hover:text-white"
              href={routes.home}
            >
              {nav.wholeHome}
            </Link>
          </li>
          <li
            className="h-[50px] px-[65px] text-[16px] leading-[50px]"
            onMouseEnter={() => setOpenMenu("products")}
          >
            <Link
              className={
                openMenu === "products" ? "text-white" : "text-[#a7a7a7]"
              }
              href={routes.productList}
            >
              {nav.products}
            </Link>
          </li>
          <li
            className="h-[50px] px-[65px] text-[16px] leading-[50px]"
            onMouseEnter={() => setOpenMenu("business")}
          >
            <Link
              className={
                openMenu === "business" ? "text-white" : "text-[#a7a7a7]"
              }
              href={routes.cooperation}
            >
              {nav.business}
            </Link>
          </li>
          <li className="h-[50px] px-[65px] text-[16px] leading-[50px]">
            <Link
              className="text-[#a7a7a7] hover:text-white"
              href={routes.exploreConference}
            >
              {nav.explore}
            </Link>
          </li>
          <li
            className="h-[50px] px-[25px] pl-[65px] text-[16px] leading-[50px]"
            onMouseEnter={() => setOpenMenu("about")}
          >
            <Link
              className={openMenu === "about" ? "text-white" : "text-[#a7a7a7]"}
              href={routes.about("about_us")}
            >
              {nav.about}
            </Link>
          </li>
        </ul>
      </nav>

      <div className="absolute top-[24px] right-[16px] lg:hidden">
        <Sheet>
          <SheetTrigger asChild>
            <Button
              aria-label="Open navigation"
              className="h-[40px] w-[40px] px-0"
              variant="white"
            >
              <Menu aria-hidden="true" className="h-[20px] w-[20px]" />
            </Button>
          </SheetTrigger>
          <SheetContent className="bg-black text-white" side="right">
            <SheetTitle className="sr-only">Navigation</SheetTitle>
            <nav className="mt-[40px] flex flex-col gap-[24px]">
              {mobileLinks.map((link) => (
                <Link
                  className="text-[18px] text-white hover:text-orvibo-link-hover"
                  href={link.href}
                  key={`${link.href}-${link.label}`}
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </SheetContent>
        </Sheet>
      </div>

      {openMenu === "products" ? (
        <div className="absolute top-[130px] left-0 z-[999] hidden h-[385px] w-full overflow-hidden bg-white text-orvibo-fg shadow-sm lg:block">
          <ul className="mx-auto flex h-[93px] max-w-[1200px] items-center overflow-x-auto px-[16px] text-[18px] leading-[93px]">
            {productCategories.map((category) => (
              <li
                className="shrink-0 px-[23px]"
                key={category.id}
                onMouseEnter={() => setActiveCategory(category.id)}
              >
                <Link
                  className="relative block text-orvibo-fg hover:text-orvibo-fg"
                  href={`${routes.productList}#${category.hash}`}
                >
                  <span>{nav.categories[category.id]}</span>
                  {category.id === activeCategory ? (
                    <span className="absolute right-0 bottom-[29px] left-0 h-px bg-current" />
                  ) : null}
                </Link>
              </li>
            ))}
          </ul>

          <div className="absolute inset-x-0 top-[93px] flex h-[292px] justify-center bg-white">
            <ul className="flex max-w-[1200px] justify-center overflow-x-auto">
              {activeProducts.items.map((product) => (
                <li
                  className="mx-[7px] flex w-[210px] shrink-0 animate-in fade-in-0 slide-in-from-bottom-[16px] flex-col text-center duration-500"
                  key={product.href}
                >
                  <Link
                    className="mb-[19px] flex h-[180px] w-[210px] items-center justify-center bg-[#eee]"
                    href={product.href}
                  >
                    <img
                      alt=""
                      className={
                        product.imageClassName ??
                        "h-[168px] w-[168px] object-contain"
                      }
                      src={assetUrl(product.image)}
                    />
                  </Link>
                  <Link
                    className="text-[14px] font-medium leading-[20px] text-orvibo-fg hover:text-orvibo-fg"
                    href={product.href}
                  >
                    {product.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      ) : null}

      {openMenu === "business" ? (
        <SimpleMenu top={130}>
          <li>
            <Link href={routes.cooperation}>{nav.dealer}</Link>
          </li>
          <li>
            <Link href={routes.estateCooperation}>{nav.estate}</Link>
          </li>
        </SimpleMenu>
      ) : null}

      {openMenu === "about" ? (
        <SimpleMenu top={130}>
          <li>
            <Link href={routes.about("about_us")}>{nav.company}</Link>
          </li>
          <li>
            <Link href={routes.about("culture")}>{nav.culture}</Link>
          </li>
          <li>
            <Link href={routes.about("join_us")}>{nav.careers}</Link>
          </li>
          <li>
            <Link href={routes.about("contact")}>{nav.contact}</Link>
          </li>
        </SimpleMenu>
      ) : null}

      {openMenu ? (
        <button
          type="button"
          aria-label="Close navigation menu"
          className="fixed inset-x-0 top-[130px] bottom-0 z-[1] hidden cursor-default bg-black/20 lg:block"
          onMouseEnter={closeMenu}
          onClick={closeMenu}
        />
      ) : null}
    </header>
  );
}

function SimpleMenu({
  children,
  top,
}: {
  children: ReactNode;
  top: number;
}) {
  return (
    <div
      className="absolute left-0 z-[999] hidden h-[100px] w-full bg-white text-orvibo-fg lg:block"
      style={{ top }}
    >
      <ul className="mx-auto flex h-[93px] max-w-[1200px] items-center justify-center gap-[46px] text-[18px] leading-[93px] [&_a]:text-orvibo-fg">
        {children}
      </ul>
    </div>
  );
}
