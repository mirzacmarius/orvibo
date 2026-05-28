"use client";

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
      className={`detail_header${stickyClassName ? ` ${stickyClassName}` : ""}`}
    >
      <div className="th_content">
        <div className="t1">{title}</div>
        <ul>
          {tabs.map((tab) => {
            if (tab.segment) {
              const href = `${base}/product/${slug}/${tab.segment}`;
              const isActive = activeSegment === tab.segment;
              return (
                <li key={tab.id} className={isActive ? "text active" : "text"}>
                  <Link href={href}>{tab.label}</Link>
                </li>
              );
            }

            if (tab.sectionId) {
              const isActive = activeSection === tab.sectionId;
              return (
                <li key={tab.id} className={isActive ? "text active" : "text"}>
                  <a
                    href={`#${tab.sectionId}`}
                    onClick={(event) => {
                      event.preventDefault();
                      scrollToSection(tab.sectionId!);
                    }}
                  >
                    {tab.label}
                  </a>
                </li>
              );
            }

            return (
              <li key={tab.id} className="text active">
                <Link href={`${base}/product/${slug}`}>{tab.label}</Link>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
