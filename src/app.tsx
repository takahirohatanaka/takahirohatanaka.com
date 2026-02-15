import { About } from "./components/about";
import { Contact } from "./components/contact";
import { SkillList } from "./components/skill-list";
import { TheTitle } from "./components/the-title";

export function App() {
  return (
    <div className="text-base w-screen">
      <div className="mx-auto my-10 md:max-w-screen-md max-w-xs text-gray-600">
        <TheTitle className="mb-7" />
        <About className="mb-4" />
        <SkillList className="mb-4" />
        <Contact />
      </div>
    </div>
  );
}
