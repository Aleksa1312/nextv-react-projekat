import { MessageSquareMore } from "lucide-react";
import Comments from "../components/comments";
import WriteComment from "../components/write";

export default function CommentsTemplate() {
  return (
    <div className="flex w-full max-w-3xl flex-col gap-5 py-10">
      <h1 className="flex flex-row items-center text-xl font-bold">
        <MessageSquareMore className="mr-2 h-6 w-6" />
        Comments
      </h1>
      <WriteComment />
      <Comments />
    </div>
  );
}
