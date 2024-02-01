import { NavigationLink } from "@/modules/header/components/navigation/links";
import FooterAnchor from "../anchor";

export default function SocialLinks() {
  const socialLinks: NavigationLink[] = [
    {
      title: "Facebook",
      href: "https://www.facebook.com",
    },
    {
      title: "Instagram",
      href: "https://www.instagram.com",
    },
    {
      title: "Twitter",
      href: "https://www.twitter.com",
    },
  ];

  return (
    <div className="mt-2 flex flex-col gap-1">
      {socialLinks.map(({ title, href }, id) => (
        <FooterAnchor href={href} key={id}>
          {title}
        </FooterAnchor>
      ))}
    </div>
  );
}
