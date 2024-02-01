import Logo from "@/modules/header/components/logo";
import Copyright from "../copyright";
import AccountLinks from "./account";
import NavigationLinks from "./navigation";
import SocialLinks from "./social";

export default function Footer() {
  return (
    <footer className="relative w-full border-y-2 bg-background py-10 pb-16">
      <div className="mx-auto grid w-full max-w-7xl grid-cols-1 gap-10 px-5 sm:grid-cols-2 xl:grid-cols-4">
        <div>
          <Logo />
          <p className="px-4 text-sm text-muted-foreground">
            NEXTV is an online platform to discover new movies and TV shows and
            keep track of what you have already watched.
          </p>
        </div>
        <div>
          <h1 className="text-xl font-bold xl:text-2xl">Navigation</h1>
          <NavigationLinks />
        </div>
        <div>
          <h1 className="text-xl font-bold xl:text-2xl">Account</h1>
          <AccountLinks />
        </div>
        <div>
          <h1 className="text-xl font-bold xl:text-2xl">Socials</h1>
          <SocialLinks />
        </div>
      </div>
      <Copyright className="absolute bottom-3 left-0 right-0 mx-auto w-fit" />
    </footer>
  );
}
