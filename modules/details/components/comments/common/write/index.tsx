"use client";

import useUser from "@/modules/auth/components/provider/hooks/useUser";
import supabase from "@/modules/supabase/components/client";
import { Label } from "@/modules/ui/label";
import LoaderButton from "@/modules/ui/loader-button";
import { Textarea } from "@/modules/ui/textarea";
import { ToastAction } from "@/modules/ui/toast";
import { useToast } from "@/modules/ui/use-toast";
import { ChangeEvent, useState } from "react";
import useMovie from "../../../context/hooks/useMovie";
import useLoginDialog from "@/modules/auth/components/login/dialog/hooks/useLoginDialog";
import useRefetch from "../atom/hooks/useRefetch";

export default function WriteComment() {
  const { openDialog } = useLoginDialog();
  const { refetch } = useRefetch();
  const { toast } = useToast();
  const { user } = useUser();
  const { id } = useMovie();

  const [comment, setComment] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);

  function onCommentChange(e: ChangeEvent<HTMLTextAreaElement>) {
    setComment(e.target.value);
  }

  function clearComment() {
    setComment("");
  }

  async function onPostComment() {
    if (!user?.email) return openDialog();

    if (!id || !comment) return;

    setLoading(true);

    const { data, error } = await supabase
      .from("movie_comments")
      .insert({
        email: user?.email,
        text: comment,
        movie_id: id,
      })
      .select();

    if (error) {
      toast({
        title: "Posting comment failed.",
        description: "Your comment was not posted.",
        variant: "destructive",
        action: <ToastAction altText="Okay">Okay</ToastAction>,
      });

      console.log(error);
    }

    if (data) {
      toast({
        title: "Comment posted.",
        description: "Your comment was successfully posted.",
        action: <ToastAction altText="Okay">Okay</ToastAction>,
      });
      clearComment();
      refetch();
    }

    setLoading(false);
  }

  return (
    <div className="flex w-full flex-col gap-2">
      <Label className="mb-1">Write your comment</Label>
      <Textarea
        value={comment}
        onChange={(e) => onCommentChange(e)}
        placeholder="Lorem ispum dolor sit amet..."
      />
      <LoaderButton
        onClick={onPostComment}
        loading={loading}
        className="w-full"
      >
        Post Comment
      </LoaderButton>
    </div>
  );
}
