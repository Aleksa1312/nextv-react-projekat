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
import { useTheme } from "@/modules/theme/hooks/useTheme";

export default function HeaderUser() {
  const { toggleTheme } = useTheme();

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
        <DropdownMenuItem onClick={toggleTheme}>
          <ThemeSwitch className="pointer-events-none" />
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
