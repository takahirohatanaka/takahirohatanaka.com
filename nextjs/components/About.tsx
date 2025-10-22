interface AboutProps {
  className?: string;
}

export function About({ className }: AboutProps) {
  return (
    <div className={className}>
      <section>
        <h1 className="text-2xl uppercase">About me</h1>
        <div className="my-1">
          <p>
            I am Takahiro Hatanaka. I am working as a software engineer in Tokyo, Japan since 2011.
            I work mainly as a developer and sometime as a developer manager.
          </p>
        </div>
      </section>
    </div>
  );
}
