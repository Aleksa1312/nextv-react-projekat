import ExpandableText from "@/modules/ui/expandable-text";

type OverviewProps = {
  overview: string | undefined;
};

export default function Overview({ overview }: OverviewProps) {
  return (
    <div className="flex flex-col gap-1">
      <h2 className="text-lg font-bold">Overview</h2>
      <ExpandableText>{overview}</ExpandableText>
    </div>
  );
}
