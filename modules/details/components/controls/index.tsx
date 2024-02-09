"use client";

import { Button } from "@/modules/ui/button";
import { useToast } from "@/modules/ui/use-toast";
import { ToastAction } from "@/modules/ui/toast";
import { BookmarkIcon } from "lucide-react";
import useShowMovie from "@/modules/comments/components/context/hooks/useShowMovie";
import useUser from "@/modules/auth/components/provider/hooks/useUser";
import useLoginDialog from "@/modules/auth/components/login/dialog/hooks/useLoginDialog";
import { isMovieResponse } from "@/modules/tmdb/utils/type";

export default function Controls() {
  const { openDialog } = useLoginDialog();
  const { toast } = useToast();
  const showMovie = useShowMovie();
  const { user } = useUser();

  const nameTitle = isMovieResponse(showMovie)
    ? showMovie.title
    : showMovie.name;

  function onBookmark() {
    if (!user) return openDialog();

    toast({
      title: "Bookmarked.",
      description: `Added "${nameTitle}" to bookmarks.`,
      action: <ToastAction altText="View Bookmarks.">View</ToastAction>,
    });
  }

  function onAddToWatched() {
    if (!user) return openDialog();

    toast({
      title: "Added to watched.",
      description: `Added "${nameTitle}" to already watched.`,
      action: <ToastAction altText="View Already Watched.">View</ToastAction>,
    });
  }

  return (
    <div className="flex flex-row gap-2 py-2">
      <Button onClick={() => onAddToWatched()}>Add to Watched</Button>
      <Button variant={"outline"} onClick={() => onBookmark()}>
        <BookmarkIcon className="mr-2 h-4 w-4" /> Bookmark
      </Button>
    </div>
  );
}
