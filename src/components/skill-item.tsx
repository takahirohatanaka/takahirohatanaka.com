import { Badge } from "@/components/ui/badge";

type Props = {
  name: string;
};

export function SkillItem({ name }: Props) {
  return (
    <Badge
      variant="outline"
      className="mr-2 mb-2 px-3 py-1 rounded-lg border-teal-500 text-teal-600 text-base font-normal font-heading"
    >
      {name}
    </Badge>
  );
}
