import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetDescription,
  SheetTitle,
  SheetClose,
  SheetHeader,
} from "@/modules/ui/sheet";
import { ArrowRightIcon, MenuIcon } from "lucide-react";
import { links } from "../navigation/links";
import HeaderLink from "../link";

export default function NavigationSheet() {
  return (
    <Sheet>
      <SheetTrigger>
        <MenuIcon></MenuIcon>
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>Navigation</SheetTitle>
          <SheetDescription>Where would you like to go?</SheetDescription>
        </SheetHeader>
        <nav className="mt-10 flex h-full w-full flex-col items-center gap-2">
          {links.map(({ href, title }, id) => (
            <SheetClose asChild key={id}>
              <HeaderLink href={href}>
                {title}
                <ArrowRightIcon className="ml-2 h-4 w-4" />
              </HeaderLink>
            </SheetClose>
          ))}
        </nav>
      </SheetContent>
    </Sheet>
  );
}
