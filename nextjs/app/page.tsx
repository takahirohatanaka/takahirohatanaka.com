import { About } from "@/components/About";
import { Contact } from "@/components/Contact";
import { SkillList } from "@/components/SkillList";
import { TheTitle } from "@/components/TheTitle";

export default function Home() {
  return (
    <div id="root" className="text-base w-screen">
      <div className="mx-auto my-10 md:max-w-screen-md max-w-xs text-gray-600">
        <TheTitle className="mb-7" />
        <About className="mb-4" />
        <SkillList className="mb-4" />
        <Contact />
      </div>
    </div>
  );
}
