import { SkillItem } from "./Skills/Item";

const skillList = [
  "Japanese",
  "PHP",
  "Laravel",
  "FuelPHP",
  "Ruby",
  "Ruby on Rails",
  "JavaScript",
  "Node.js",
  "Go",
  "HTML",
  "CSS",
  "MySQL",
  "Linux",
  "Network",
  "Docker",
];

interface SkillListProps {
  className?: string;
}

export function SkillList({ className }: SkillListProps) {
  return (
    <div className={className}>
      <section>
        <h1 className="text-2xl uppercase">Skills</h1>
        <p className="mt-1">I am able to develop using the following technologies and languages.</p>
        <div className="my-2 flex flex-wrap">
          {skillList.map((item) => (
            <SkillItem key={item} name={item} className="mb-2" />
          ))}
        </div>
      </section>
    </div>
  );
}
