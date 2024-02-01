"use client";

import useUser from "@/modules/auth/components/provider/hooks/useUser";
import { NavigationLink } from "@/modules/header/components/navigation/links";
import FooterLink from "../link";

const userAccountLinks: NavigationLink[] = [
  {
    title: "Profile",
    href: "/profile",
  },
  {
    title: "Sign Out",
    href: "/auth/logout",
  },
];

const accountLinks: NavigationLink[] = [
  {
    title: "Register",
    href: "/auth?tab=register",
  },
  {
    title: "Login",
    href: "/auth?tab=login",
  },
];

export default function AccountLinks() {
  const { user } = useUser();

  return (
    <div className="mt-2 flex flex-col gap-1">
      {user
        ? userAccountLinks.map(({ title, href }, id) => (
            <FooterLink href={href} key={id}>
              {title}
            </FooterLink>
          ))
        : accountLinks.map(({ title, href }, id) => (
            <FooterLink href={href} key={id}>
              {title}
            </FooterLink>
          ))}
    </div>
  );
}
