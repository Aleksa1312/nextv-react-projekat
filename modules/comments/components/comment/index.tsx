import { formatStringDate } from "@/lib/format/date";
import { Separator } from "@/modules/ui/separator";
import DeleteComment from "./delete";

export type CommentType = {
  email: string;
  created_at: string;
  text: string;
  id: string;
};

export default function Comment({ email, text, created_at, id }: CommentType) {
  return (
    <div className="flex w-full flex-col rounded-[var(--radius)] border p-5">
      <div>
        <div className="flex flex-row items-center justify-between">
          <p className="text-sm font-semibold">{email}</p>
          <DeleteComment email={email} id={id} />
        </div>
        <p className="text-xs text-muted-foreground">
          {formatStringDate(created_at)}
        </p>
      </div>

      <Separator className="my-2" />
      <p className="text-sm">{text}</p>
    </div>
  );
}
