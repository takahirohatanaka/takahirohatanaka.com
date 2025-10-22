import Image from "next/image";

interface TheTitleProps {
  className?: string;
}

export function TheTitle({ className }: TheTitleProps) {
  return (
    <div className={className}>
      <header className="flex">
        <Image
          src="/icon.png"
          alt="Takahiro Hatanaka"
          width={80}
          height={80}
          className="rounded-full h-20"
        />
        <h1 className="flex items-center ml-4 lg:text-5xl text-4xl uppercase break-words">
          Takahiro Hatanaka
        </h1>
      </header>
    </div>
  );
}
