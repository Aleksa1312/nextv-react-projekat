import { MoonIcon, SunIcon } from "lucide-react";
import { useTheme } from "../../hooks/useTheme";
import { HTMLAttributes } from "react";
import { cn } from "@/lib/utils";

interface ThemeSwitchProps extends HTMLAttributes<HTMLButtonElement> {}

export default function ThemeSwitch({ className, ...rest }: ThemeSwitchProps) {
  const { isDark, toggleTheme } = useTheme();

  return (
    <>
      {isDark ? (
        <button
          className={cn("flex flex-row items-center", className)}
          onClick={toggleTheme}
          {...rest}
        >
          <SunIcon className="mr-2 h-4 w-4" /> Light
        </button>
      ) : (
        <button
          className={cn("flex flex-row items-center", className)}
          onClick={toggleTheme}
          {...rest}
        >
          <MoonIcon className="mr-2 h-4 w-4" /> Dark
        </button>
      )}
    </>
  );
}
