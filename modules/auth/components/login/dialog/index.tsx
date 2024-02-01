"use client";

import {
  AlertDialog,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/modules/ui/alert-dialog";
import useLoginDialog from "./hooks/useLoginDialog";
import DialogLoginForm from "./form";
import useUser from "../../provider/hooks/useUser";
import { Button, buttonVariants } from "@/modules/ui/button";
import { handleLogOut } from "@/modules/auth/actions";

export default function LoginDialog() {
  const { open, toggleDialog } = useLoginDialog();
  const { user } = useUser();

  if (user) {
    return (
      <AlertDialog open={open} onOpenChange={toggleDialog}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Sign out of your account.</AlertDialogTitle>
            <AlertDialogDescription>
              Are you sure you want to sign out of your account?
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Cancel</AlertDialogCancel>
            <Button
              className={buttonVariants({ variant: "destructive" })}
              onClick={handleLogOut}
            >
              Log Out
            </Button>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    );
  }

  return (
    <AlertDialog open={open} onOpenChange={toggleDialog}>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Login to your account.</AlertDialogTitle>
          <AlertDialogDescription>
            Login to an existing account using credentials.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <DialogLoginForm />
      </AlertDialogContent>
    </AlertDialog>
  );
}
