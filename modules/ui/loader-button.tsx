import { LoaderIcon } from "lucide-react";
import { Button, ButtonProps } from "./button";

interface LoaderButtonProps extends ButtonProps {
  loading: boolean;
  type?: "submit" | "button";
  className?: string;
  children?: string;
}

export default function LoaderButton({
  type = "submit",
  children,
  loading,
  ...rest
}: LoaderButtonProps) {
  return (
    <Button disabled={loading} {...rest}>
      {loading && <LoaderIcon className="mr-2 h-4 w-4 animate-spin" />}
      {children}
    </Button>
  );
}
