import AuthTemplate from "@/modules/auth/template";

export default function AuthPage({
  searchParams,
}: {
  searchParams: { tab: string | undefined };
}) {
  return <AuthTemplate defaultTab={searchParams.tab} />;
}
