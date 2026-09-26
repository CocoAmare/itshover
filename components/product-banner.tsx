"use client";

import { StickyBanner } from "@/components/ui/sticky-banner";
import { LINKS } from "@/constants";

const ProductBanner = () => {
  return (
    <StickyBanner className="bg-primary text-primary-foreground">
      <a
        href={LINKS.TOOLS}
        target="_blank"
        rel="noopener"
        className="flex flex-wrap items-center justify-center gap-x-2 gap-y-0.5 text-center text-xs font-medium sm:text-sm"
      >
        <span className="bg-primary-foreground/15 rounded-full px-2 py-0.5 text-[10px] font-semibold tracking-wide uppercase">
          New
        </span>
        <span>design, craft & AI tools directory</span>
        <span className="underline underline-offset-4">isthereanytool.app</span>
      </a>
    </StickyBanner>
  );
};

export default ProductBanner;
