import { User } from "@supabase/supabase-js";
import { atom } from "jotai";

export const userAtom = atom<User | null>(null);
export const userErrorAtom = atom<Error | null>(null);
export const userLoadingAtom = atom<boolean>(false);
