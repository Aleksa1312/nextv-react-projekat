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
import { ThemeDropdown } from "@/modules/theme/components/dropdown";
import HeaderUser from "../user";

export default function NavigationSheet() {
  return (
    <Sheet>
      <SheetTrigger>
        <MenuIcon />
      </SheetTrigger>
      <SheetContent className="min-w-0">
        <SheetHeader>
          <SheetTitle>Navigation</SheetTitle>
          <SheetDescription>Where would you like to go?</SheetDescription>
        </SheetHeader>
        <nav className="mt-10 flex w-full flex-col items-center gap-2">
          {links.map(({ href, title }, id) => (
            <SheetClose asChild key={id}>
              <HeaderLink href={href}>
                {title}
                <ArrowRightIcon className="ml-2 h-4 w-4" />
              </HeaderLink>
            </SheetClose>
          ))}
        </nav>
        <div className="absolute bottom-0 mr-5 flex w-full min-w-0 flex-row items-center justify-start gap-3 bg-background py-10">
          <HeaderUser />
          <ThemeDropdown />
        </div>
      </SheetContent>
    </Sheet>
  );
}
