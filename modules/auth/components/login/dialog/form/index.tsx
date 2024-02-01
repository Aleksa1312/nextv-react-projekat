import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/modules/ui/form";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Input } from "@/modules/ui/input";
import { HTMLAttributes, useState } from "react";
import { cn } from "@/lib/utils";
import { Button } from "@/modules/ui/button";
import useLoginDialog from "../hooks/useLoginDialog";
import { handleLoginSuccess, loginUser } from "@/modules/auth/actions";
import ErrorAlert from "./error";
import LoaderButton from "@/modules/ui/loader-button";
import Link from "next/link";

interface FormProps extends HTMLAttributes<HTMLFormElement> {}

const formSchema = z.object({
  email: z.string().email("Must be a valid email address"),
  password: z
    .string()
    .min(6, "Password must be at least 6 characters long")
    .max(50),
});

export default function DialogLoginForm({ className, ...rest }: FormProps) {
  const { closeDialog } = useLoginDialog();
  const [error, setError] = useState<Error | null>(null);
  const [loading, setLoading] = useState<boolean>(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    const { email, password } = values;
    setLoading(true);

    const { data, error } = await loginUser(email, password);

    if (error) {
      setError(error);
    }

    if (data.session) {
      handleLoginSuccess();
    }

    setLoading(false);
  }

  return (
    <Form {...form}>
      <form
        className={cn("flex flex-col gap-5", className)}
        onSubmit={form.handleSubmit(onSubmit)}
        {...rest}
      >
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input placeholder="john.doe@gmail.com" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Password</FormLabel>
              <FormControl>
                <Input type="password" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <Link
          href="/auth"
          onClick={closeDialog}
          className="w-fit text-sm text-muted-foreground underline"
        >{`Don't have an account? Register.`}</Link>

        {error && <ErrorAlert message={error.message} />}

        <div className="flex w-full flex-row justify-end gap-2">
          <Button type="button" variant={"outline"} onClick={closeDialog}>
            Cancel
          </Button>
          <LoaderButton loading={loading}>Log In</LoaderButton>
        </div>
      </form>
    </Form>
  );
}
