import Logo from "../logo";
import Navigation from "../navigation";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/85 py-5 backdrop-blur-sm">
      <div className="m-auto flex w-full max-w-7xl items-center justify-between px-5">
        <Logo />
        <Navigation />
      </div>
    </header>
  );
}
