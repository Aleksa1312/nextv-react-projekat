import { MoonIcon, SunIcon } from "lucide-react";
import { useTheme } from "../../hooks/useTheme";

export default function ThemeSwitch() {
  const { isDark, toggleTheme } = useTheme();

  return (
    <>
      {isDark ? (
        <div className="flex flex-row items-center" onClick={toggleTheme}>
          <SunIcon className="mr-2 h-4 w-4" /> Light
        </div>
      ) : (
        <div className="flex flex-row items-center" onClick={toggleTheme}>
          <MoonIcon className="mr-2 h-4 w-4" /> Dark
        </div>
      )}
    </>
  );
}
