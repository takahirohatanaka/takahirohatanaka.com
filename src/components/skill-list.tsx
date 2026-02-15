import { cn } from "@/lib/utils";
import { SkillItem } from "./skill-item";

const skills = [
  "Japanese",
  "PHP",
  "Laravel",
  "Ruby",
  "Ruby on Rails",
  "JavaScript",
  "TypeScript",
  "Node.js",
  "Go",
  "HTML",
  "CSS",
  "MySQL",
  "Linux",
  "Network",
  "Docker",
] as const;

type Props = {
  className?: string;
};

export function SkillList({ className }: Props) {
  return (
    <div className={cn(className)}>
      <section>
        <h1 className="text-2xl uppercase">Skills</h1>
        <p className="mt-1">
          I am able to develop using the following technologies and languages.
        </p>
        <div className="my-2 flex flex-wrap">
          {skills.map((skill) => (
            <SkillItem key={skill} name={skill} />
          ))}
        </div>
      </section>
    </div>
  );
}
