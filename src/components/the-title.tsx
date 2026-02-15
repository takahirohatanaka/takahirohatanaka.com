import { cn } from "@/lib/utils";

type Props = {
  className?: string;
};

export function TheTitle({ className }: Props) {
  return (
    <div className={cn(className)}>
      <header className="flex">
        <img
          src="https://github.com/takahirohatanaka.png"
          className="rounded-full h-20"
          width={80}
          height={80}
          alt="Takahiro Hatanaka"
        />
        <h1 className="flex items-center ml-4 lg:text-5xl text-4xl uppercase break-words">
          Takahiro Hatanaka
        </h1>
      </header>
    </div>
  );
}
