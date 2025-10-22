interface ContactProps {
  className?: string;
}

export function Contact({ className }: ContactProps) {
  return (
    <div className={className}>
      <section>
        <h1 className="text-2xl uppercase">Contact</h1>
        <div className="my-2">
          <p className="mb-2">
            This page is in English, but I don&apos;t actually speak English. It would be great if
            you could contact me in Japanese.
          </p>

          <ul>
            <li className="flex items-center mb-1">
              <span className="material-icons mr-2">code</span>
              <a href="https://github.com/takahirohatanaka">github.com/takahirohatanaka</a>
            </li>

            <li className="flex items-center mb-1">
              <span className="material-icons mr-2">photo_camera</span>

              <a href="https://500px.com/takahirohatanaka">500px.com/takahirohatanaka</a>
            </li>

            <li className="flex items-center">
              <span className="material-icons mr-2">mail_outline</span>i
              <span className="mx-0.5 before:content-['\\e0e6'] before:font-[Material_Icons,Material_Icons_Outlined]" />
              takahirohatanaka.com
            </li>
          </ul>
        </div>
      </section>
    </div>
  );
}
