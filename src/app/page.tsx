import About from "./section/About";
import Main from "./section/Main";
import PersonalProjects from "./section/PersonalProjects";

export default function Home() {
  return (
    <main className="min-h-screen  h-screen mp:p-0 scroll-smooth overflow-auto snap-y items-center dark:text-white ">
      <Main />
      <div className="h-[1px] bg-slate-400 w-full" />
      <PersonalProjects />
      <About/>
    </main>
  );
}
