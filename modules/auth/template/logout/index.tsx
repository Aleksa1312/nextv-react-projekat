"use client";

import { Button } from "@/modules/ui/button";
import { LogOutIcon } from "lucide-react";
import { useRouter } from "next/navigation";
import { handleLogOut } from "../../actions";

export default function LogOutTemplate() {
  const router = useRouter();

  function onCancel() {
    router.back();
  }

  return (
    <main className="mx-auto flex min-h-screen max-w-7xl items-center justify-center px-5">
      <div className="mb-32 flex max-w-3xl flex-col items-center text-center">
        <LogOutIcon className="h-24 w-24 text-foreground" />
        <div className="mt-5">
          <h1 className="text-xl font-bold">Log out of current account.</h1>
          <p className="text-muted-foreground">
            Are you sure you want to log out of your current account?
          </p>
        </div>
        <div className="mt-5 flex flex-row items-center gap-2">
          <Button onClick={onCancel} variant={"outline"}>
            Go Back
          </Button>
          <Button onClick={handleLogOut} variant={"destructive"}>
            Log Out
          </Button>
        </div>
      </div>
    </main>
  );
}
