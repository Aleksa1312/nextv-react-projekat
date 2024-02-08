import useUser from "@/modules/auth/components/provider/hooks/useUser";
import supabase from "@/modules/supabase/components/client";
import {
  AlertDialog,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/modules/ui/alert-dialog";
import { Button } from "@/modules/ui/button";
import LoaderButton from "@/modules/ui/loader-button";
import { useState } from "react";
import useRefetch from "../../../common/atom/hooks/useRefetch";
import { useToast } from "@/modules/ui/use-toast";
import { ToastAction } from "@/modules/ui/toast";

type DeleteCommentProps = {
  email: string;
  id: string;
};

export default function DeleteComment({ email, id }: DeleteCommentProps) {
  const { user } = useUser();
  const { refetch } = useRefetch();
  const { toast } = useToast();

  const [open, setOpen] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);

  function closeDialog() {
    setOpen(false);
  }

  function toggleDialog() {
    setOpen((prev) => !prev);
  }

  async function onDeleteComment() {
    setLoading(true);

    const { data, error } = await supabase
      .from("movie_comments")
      .delete()
      .match({ id: id })
      .select();

    if (error) {
      toast({
        title: "Failed to delete.",
        description: "Something went wrong. Comment deletion failed.",
        action: <ToastAction altText="Okay">Okay</ToastAction>,
      });
    }

    if (data) {
      toast({
        title: "Deleted comment.",
        description: "Comment successfully deleted.",
        action: <ToastAction altText="Okay">Okay</ToastAction>,
      });
      refetch();
      closeDialog();
    }

    setLoading(false);
  }

  const isAuthor = user?.email === email;

  if (!isAuthor) return <></>;

  return (
    <AlertDialog open={open} onOpenChange={toggleDialog}>
      <AlertDialogTrigger asChild>
        <Button variant={"link"} className="text-destructive">
          Delete
        </Button>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Delete comment?</AlertDialogTitle>
          <AlertDialogDescription>
            Are you sure you want to delete this comment? This action is
            irreversible!
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Cancel</AlertDialogCancel>
          <LoaderButton
            loading={loading}
            variant={"destructive"}
            onClick={onDeleteComment}
          >
            Delete
          </LoaderButton>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}
