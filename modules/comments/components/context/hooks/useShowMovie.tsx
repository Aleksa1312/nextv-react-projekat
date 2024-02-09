import { useContext } from "react";
import { ShowMovieContext } from "..";

export default function useShowMovie() {
  const context = useContext(ShowMovieContext);

  if (!context)
    throw new Error(
      "useShowMovie must be used within a ShowMovieContextProvider",
    );

  return context;
}
