"use client";

import { Tabs, TabsList, TabsTrigger } from "@v1/ui/tabs";
import type { ProductTab } from "@/lib/orvibo/products/types";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useCallback, useEffect, useState } from "react";

interface ProductDetailNavProps {
  title: string;
  slug: string;
  base: string;
  tabs: ProductTab[];
  stickyClassName?: string;
}

export function ProductDetailNav({
  title,
  slug,
  base,
  tabs,
  stickyClassName = "",
}: ProductDetailNavProps) {
  const pathname = usePathname();
  const sectionTabs = tabs.filter((tab) => tab.sectionId);
  const routeTabs = tabs.filter((tab) => tab.segment);
  const [activeSection, setActiveSection] = useState(
    sectionTabs[0]?.sectionId ?? "",
  );

  const activeSegment =
    routeTabs.find((tab) => pathname.endsWith(`/${tab.segment}`))?.segment ??
    null;
  const activeValue = activeSegment ?? activeSection ?? tabs[0]?.id ?? "";

  const scrollToSection = useCallback((sectionId: string) => {
    const node = document.getElementById(sectionId);
    if (!node) return;
    const top = node.getBoundingClientRect().top + window.scrollY - 56;
    window.scrollTo({ top, behavior: "smooth" });
    setActiveSection(sectionId);
    window.history.replaceState(null, "", `#${sectionId}`);
  }, []);

  useEffect(() => {
    const hash = window.location.hash.replace(/^#/, "");
    if (!hash) return;
    const frame = requestAnimationFrame(() => scrollToSection(hash));
    return () => cancelAnimationFrame(frame);
  }, [scrollToSection]);

  useEffect(() => {
    if (sectionTabs.length === 0) return;

    const elements = sectionTabs
      .map((tab) => document.getElementById(tab.sectionId!))
      .filter((node): node is HTMLElement => node !== null);

    if (elements.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);
        const top = visible[0]?.target.id;
        if (top) {
          setActiveSection(top);
          if (window.location.hash !== `#${top}`) {
            window.history.replaceState(null, "", `#${top}`);
          }
        }
      },
      { rootMargin: "-40% 0px -50% 0px", threshold: [0, 0.25, 0.5] },
    );

    for (const element of elements) observer.observe(element);
    return () => observer.disconnect();
  }, [sectionTabs]);

  return (
    <div
      className={`sticky top-0 z-40 h-[50px] min-h-[50px] w-full bg-[#1a1a1a] shadow-[0_1px_4px_rgba(0,0,0,0.1)] ${stickyClassName === "pZindex" ? "z-50" : ""}`}
    >
      <div className="mx-auto flex h-full w-full max-w-[min(16rem,1760px)] items-center justify-between gap-[0.24rem] bg-[#1a1a1a] px-[clamp(16px,8vw,144px)] max-[1360px]:px-[24px] max-[767px]:h-auto max-[767px]:min-h-[50px] max-[767px]:flex-col max-[767px]:items-start max-[767px]:gap-[0.12rem] max-[767px]:px-[16px] max-[767px]:py-[0.12rem]">
        <div className="min-w-0 flex-1 overflow-hidden text-ellipsis whitespace-nowrap text-[0.18rem] font-bold leading-[50px] text-[#777] max-[767px]:whitespace-normal max-[767px]:leading-[1.4]">
          {title}
        </div>
        <Tabs value={activeValue} className="flex shrink-0">
          <TabsList className="flex h-auto justify-end gap-[0.32rem] overflow-x-auto rounded-none bg-transparent p-0 text-[#777] max-[767px]:w-full max-[767px]:justify-start">
            {tabs.map((tab) => {
              if (tab.segment) {
                const href = `${base}/product/${slug}/${tab.segment}`;
                return (
                  <TabsTrigger
                    asChild
                    key={tab.id}
                    value={tab.segment}
                    className="h-auto rounded-none bg-transparent p-0 text-[0.16rem] font-medium leading-[50px] text-[#777] shadow-none transition-colors hover:text-[#ccc] data-[state=active]:bg-transparent data-[state=active]:font-semibold data-[state=active]:text-[#ccc] data-[state=active]:shadow-none max-[767px]:leading-[1.4]"
                  >
                    <Link href={href}>{tab.label}</Link>
                  </TabsTrigger>
                );
              }

              if (tab.sectionId) {
                return (
                  <TabsTrigger
                    asChild
                    key={tab.id}
                    value={tab.sectionId}
                    className="h-auto rounded-none bg-transparent p-0 text-[0.16rem] font-medium leading-[50px] text-[#777] shadow-none transition-colors hover:text-[#ccc] data-[state=active]:bg-transparent data-[state=active]:font-semibold data-[state=active]:text-[#ccc] data-[state=active]:shadow-none max-[767px]:leading-[1.4]"
                  >
                    <a
                      href={`#${tab.sectionId}`}
                      onClick={(event) => {
                        event.preventDefault();
                        scrollToSection(tab.sectionId!);
                      }}
                    >
                      {tab.label}
                    </a>
                  </TabsTrigger>
                );
              }

              return (
                <TabsTrigger
                  asChild
                  key={tab.id}
                  value={tab.id}
                  className="h-auto rounded-none bg-transparent p-0 text-[0.16rem] font-semibold leading-[50px] text-[#ccc] shadow-none data-[state=active]:bg-transparent data-[state=active]:text-[#ccc] data-[state=active]:shadow-none max-[767px]:leading-[1.4]"
                >
                  <Link href={`${base}/product/${slug}`}>{tab.label}</Link>
                </TabsTrigger>
              );
            })}
          </TabsList>
        </Tabs>
      </div>
    </div>
  );
}
