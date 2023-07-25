import Main from "./components/NavScreen";
import PersonalProjects from "./components/PersonalProjects";

export default function Home() {
  return (
    <main className="min-h-screen  h-screen mp:p-0 scroll-smooth overflow-auto snap-y items-center dark:text-white ">
      <Main />
      <div className="h-[1px] bg-slate-400 w-full" />
      <PersonalProjects />
    </main>
  );
}
