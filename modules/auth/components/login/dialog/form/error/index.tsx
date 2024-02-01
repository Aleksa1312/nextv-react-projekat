import { Alert, AlertDescription, AlertTitle } from "@/modules/ui/alert";

type ErrorAlertProps = {
  message: string;
};

export default function ErrorAlert({ message }: ErrorAlertProps) {
  return (
    <Alert variant={"destructive"}>
      <AlertTitle>Something went wrong.</AlertTitle>
      <AlertDescription>{message}</AlertDescription>
    </Alert>
  );
}
