"use client";

import useScreenWidth from "@/modules/common/hooks/useScreenSize";
import { links } from "./links";
import NavigationSheet from "../sheet";
import HeaderLink from "../link";

export default function Navigation() {
  const { isBreakpoint } = useScreenWidth();

  // desktop

  if (isBreakpoint("md")) {
    return <NavigationSheet />;
  }

  // mobile

  return (
    <nav>
      {links.map(({ href, title }, id) => (
        <HeaderLink href={href} key={id}>
          {title}
        </HeaderLink>
      ))}
    </nav>
  );
}
