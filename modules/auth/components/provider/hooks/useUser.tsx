import { useAtomValue } from "jotai";
import { userAtom, userErrorAtom, userLoadingAtom } from "../atom";

export default function useUser() {
  const user = useAtomValue(userAtom);
  const error = useAtomValue(userErrorAtom);
  const loading = useAtomValue(userLoadingAtom);

  return { user, error, loading };
}
