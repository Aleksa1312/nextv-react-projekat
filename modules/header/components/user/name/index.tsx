import useUser from "@/modules/auth/components/provider/hooks/useUser";
import { DropdownMenuLabel } from "@/modules/ui/dropdown-menu";

export default function UserName() {
  const { user } = useUser();

  return <DropdownMenuLabel>{user?.email || "Guest"}</DropdownMenuLabel>;
}
