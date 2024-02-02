"use client";

import supabase from "@/modules/supabase/components/client";
import { useSetAtom } from "jotai";
import { ReactNode, useEffect } from "react";
import { userAtom, userErrorAtom, userLoadingAtom } from "./atom";

export default function AuthProvider({ children }: { children: ReactNode }) {
  const setUser = useSetAtom(userAtom);
  const setError = useSetAtom(userErrorAtom);
  const setLoading = useSetAtom(userLoadingAtom);

  useEffect(() => {
    async function fetchUser() {
      setLoading(true);

      const { data, error } = await supabase.auth.getUser();

      if (error) {
        setError(error);
      }

      if (data.user) {
        setUser(data.user);
      }

      setLoading(false);
    }

    fetchUser();
  }, [setError, setLoading, setUser]);

  return <>{children}</>;
}
