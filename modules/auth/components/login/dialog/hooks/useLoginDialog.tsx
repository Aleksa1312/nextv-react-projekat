import { useAtom } from "jotai";
import { loginDialogOpenAtom } from "../atom";

export default function useLoginDialog() {
  const [open, setOpen] = useAtom(loginDialogOpenAtom);

  function toggleDialog() {
    setOpen((prev) => !prev);
  }

  function closeDialog() {
    setOpen(false);
  }

  function openDialog() {
    setOpen(true);
  }

  return { open, setOpen, toggleDialog, closeDialog, openDialog };
}
