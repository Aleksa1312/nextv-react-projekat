"use client";

import { useEffect, useState } from "react";
import Comment, { CommentType } from "../comment";
import { LoaderIcon, MessageCircleDashedIcon } from "lucide-react";
import supabase from "@/modules/supabase/components/client";
import { useAtomValue } from "jotai";
import { refetchAtom } from "../../../common/atom/refetch";
import useShow from "@/modules/details/components/context/hooks/useShow";

export default function Comments() {
  const { id } = useShow();

  const [comments, setComments] = useState<CommentType[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const refetch = useAtomValue(refetchAtom);

  useEffect(() => {
    async function fetchShowComments() {
      setLoading(true);

      const { data, error } = await supabase
        .from("tv_comments")
        .select()
        .eq("show_id", id);

      if (error) {
        console.log(error);
      }

      if (data) {
        setComments(data);
      }

      setLoading(false);
    }

    fetchShowComments();
  }, [id, refetch]);

  if (loading) {
    return (
      <div className="flex w-full items-center justify-center rounded-[var(--radius)] border p-5">
        <p className="flex h-fit w-fit flex-row items-center text-muted-foreground">
          <LoaderIcon className="mr-2 h-4 w-4 animate-spin" />
          Loading comments...
        </p>
      </div>
    );
  }

  if (!comments.length)
    return (
      <div className="flex w-full items-center justify-center rounded-[var(--radius)] border p-5">
        <p className="flex h-fit w-fit flex-row items-center text-muted-foreground">
          <MessageCircleDashedIcon className="mr-2 h-4 w-4" />
          There are no comments on this movie.
        </p>
      </div>
    );

  return (
    <div className="flex w-full flex-col items-center justify-center rounded-[var(--radius)] border p-2">
      <p className="py-2">Comments {`( ${comments.length} )`}</p>
      <div className="flex w-full flex-col gap-2">
        {comments.map((comment, id) => (
          <Comment {...comment} key={id} />
        ))}
      </div>
    </div>
  );
}
