import { NavigationLink } from "@/modules/header/components/navigation/links";
import FooterLink from "../link";

const navigationLinks: NavigationLink[] = [
  {
    title: "Search",
    href: "/search",
  },
  {
    title: "Movies",
    href: "/movies",
  },
  {
    title: "TV shows",
    href: "/tv-shows",
  },
  {
    title: "Trending",
    href: "/trending",
  },
];

export default function NavigationLinks() {
  return (
    <div className="mt-2 flex flex-col gap-1">
      {navigationLinks.map(({ title, href }, id) => (
        <FooterLink href={href} key={id}>
          {title}
        </FooterLink>
      ))}
    </div>
  );
}
