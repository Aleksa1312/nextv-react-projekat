import ThemeSwitch from "@/modules/theme/components/switch";
import { Avatar, AvatarFallback, AvatarImage } from "@/modules/ui/avatar";
import { Button } from "@/modules/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/modules/ui/dropdown-menu";
import { User2Icon } from "lucide-react";
import UserName from "./name";
import UserContent from "./content";

export default function HeaderUser() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant={"ghost"} size={"icon"}>
          <Avatar>
            <AvatarImage />
            <AvatarFallback>
              <User2Icon className="h-6 w-6 text-foreground" />
            </AvatarFallback>
          </Avatar>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <UserName />
        <DropdownMenuSeparator />
        <UserContent />
        <DropdownMenuSeparator />
        <DropdownMenuItem>
          <ThemeSwitch />
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
