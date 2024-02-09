"use client";

import useUser from "@/modules/auth/components/provider/hooks/useUser";
import supabase from "@/modules/supabase/components/client";
import { Label } from "@/modules/ui/label";
import LoaderButton from "@/modules/ui/loader-button";
import { Textarea } from "@/modules/ui/textarea";
import { ToastAction } from "@/modules/ui/toast";
import { useToast } from "@/modules/ui/use-toast";
import { ChangeEvent, useCallback, useState } from "react";
import useShowMovie from "../context/hooks/useShowMovie";
import useLoginDialog from "@/modules/auth/components/login/dialog/hooks/useLoginDialog";
import useCommentRefetch from "../comments/atom/hooks/useCommentRefetch";
import { isMovieResponse } from "@/modules/tmdb/utils/type";

export default function WriteComment() {
  const { openDialog } = useLoginDialog();
  const { refetch } = useCommentRefetch();
  const { toast } = useToast();
  const { user } = useUser();
  const showMovie = useShowMovie();

  const [comment, setComment] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);

  function onCommentChange(e: ChangeEvent<HTMLTextAreaElement>) {
    setComment(e.target.value);
  }

  const clearComment = useCallback(() => {
    setComment("");
  }, []);

  const onCommentPost = useCallback(async () => {
    if (!user?.email) return openDialog();

    if (!showMovie.id || !comment) return;

    setLoading(true);

    const { data, error } = await supabase
      .from(isMovieResponse(showMovie) ? "movie_comments" : "tv_comments")
      .insert({
        email: user?.email,
        text: comment,
        tmdb_id: showMovie.id,
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
  }, [user, showMovie, comment, openDialog, refetch, clearComment, toast]);

  return (
    <div className="flex w-full flex-col gap-2">
      <Label className="mb-1">Write your comment</Label>
      <Textarea
        value={comment}
        onChange={(e) => onCommentChange(e)}
        placeholder="Lorem ispum dolor sit amet..."
      />
      <LoaderButton
        onClick={onCommentPost}
        loading={loading}
        className="w-full"
      >
        Post Comment
      </LoaderButton>
    </div>
  );
}
