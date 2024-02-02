import useLoginDialog from "@/modules/auth/components/login/dialog/hooks/useLoginDialog";
import useUser from "@/modules/auth/components/provider/hooks/useUser";
import { DropdownMenuItem } from "@/modules/ui/dropdown-menu";
import { LogInIcon, MailPlusIcon, UserIcon } from "lucide-react";
import Link from "next/link";

export default function UserContent() {
  const { user } = useUser();
  const { openDialog } = useLoginDialog();

  if (user) {
    return (
      <>
        <DropdownMenuItem asChild>
          <Link href={"/profile"}>
            <UserIcon className="mr-2 h-4 w-4" /> Profile
          </Link>
        </DropdownMenuItem>
        <DropdownMenuItem onClick={openDialog} className="text-red-500">
          <LogInIcon className="mr-2 h-4 w-4" /> Sign Out
        </DropdownMenuItem>
      </>
    );
  }

  return (
    <>
      <DropdownMenuItem asChild>
        <Link href={"/auth"}>
          <MailPlusIcon className="mr-2 h-4 w-4" /> Sign Up
        </Link>
      </DropdownMenuItem>
      <DropdownMenuItem onClick={openDialog}>
        <LogInIcon className="mr-2 h-4 w-4" /> Log In
      </DropdownMenuItem>
    </>
  );
}
