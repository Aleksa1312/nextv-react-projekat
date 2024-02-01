import { buttonVariants } from "@/modules/ui/button";
import { CheckCircleIcon } from "lucide-react";
import Link from "next/link";

export default function AuthSuccessTemplate() {
  return (
    <main className="mx-auto flex min-h-screen max-w-7xl items-center justify-center px-5">
      <div className="mb-32 flex max-w-3xl flex-col items-center text-center">
        <CheckCircleIcon className="h-24 w-24 text-foreground" />
        <div className="mt-5">
          <h1 className="text-xl font-bold">Account creation successful!</h1>
          <p className="text-muted-foreground">
            You have successfully created an account. You are already logged in
            to it!
          </p>
        </div>
        <Link
          href="/"
          className={buttonVariants({ variant: "outline", className: "mt-5" })}
        >
          Back to Home
        </Link>
      </div>
    </main>
  );
}
