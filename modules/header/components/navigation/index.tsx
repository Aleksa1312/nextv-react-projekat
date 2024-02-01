"use client";

import useScreenWidth from "@/modules/common/hooks/useScreenSize";
import { links } from "./links";
import NavigationSheet from "../sheet";
import HeaderLink from "../link";
import HeaderUser from "../user";

export default function Navigation() {
  const { isBreakpoint } = useScreenWidth();

  // desktop

  if (isBreakpoint("md")) {
    return <NavigationSheet />;
  }

  // mobile

  return (
    <div className="flex flex-row gap-5">
      <nav className="flex flex-row">
        {links.map(({ href, title }, id) => (
          <HeaderLink href={href} key={id}>
            {title}
          </HeaderLink>
        ))}
      </nav>
      <HeaderUser />
    </div>
  );
}
