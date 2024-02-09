import Logo from "../logo";
import Navigation from "../navigation";
import { Search } from "../search";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b-2 bg-background/85 py-5 backdrop-blur-sm">
      <div className="m-auto flex w-full max-w-7xl items-center justify-between gap-5 px-5">
        <Logo />
        <Search />
        <Navigation />
      </div>
    </header>
  );
}
