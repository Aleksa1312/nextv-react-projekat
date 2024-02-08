import { ShowResponse } from "moviedb-promise";
import { createContext } from "react";

export const ShowContext = createContext<ShowResponse | null>(null);
