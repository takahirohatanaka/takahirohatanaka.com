import { cn } from "@/lib/utils";

type Props = {
  className?: string;
};

export function About({ className }: Props) {
  return (
    <div className={cn(className)}>
      <section>
        <h1 className="text-2xl uppercase">About me</h1>
        <div className="my-1">
          <p>
            I am Takahiro Hatanaka. I am working as a software engineer in
            Tokyo, Japan since 2011. I work mainly as a developer and sometime
            as a developer manager.
          </p>
          <p className="mt-2">
            After completing my studies in computer science, I have been working
            as a web engineer for over 10 years, across environments ranging
            from tech startups to large-scale ventures. I also have experience
            as a tech lead, technical advisor, and engineering mentor.
          </p>
        </div>
      </section>
    </div>
  );
}
