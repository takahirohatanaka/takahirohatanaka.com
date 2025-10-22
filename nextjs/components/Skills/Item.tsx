interface SkillItemProps {
  name: string;
  className?: string;
}

export function SkillItem({ name, className }: SkillItemProps) {
  return (
    <span
      className={`mr-2 px-3 py-1 border border-solid rounded-lg border-teal-500 text-teal-600 ${className || ""}`}
      style={{ fontFamily: '"Mulish", sans-serif' }}
    >
      {name}
    </span>
  );
}
