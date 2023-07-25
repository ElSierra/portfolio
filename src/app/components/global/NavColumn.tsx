import NavLink from "@/app/section/Main/NavItems";


export default function NavColumn() {
  return (
    <div className=" z-50 w-[10%] fixed justify-center  h-screen flex items-center ">
      <ul className="flex flex-col gap-20">
        <NavLink name="home" link="#home" />
        <NavLink name="projects" link="#projects" />
        <NavLink name="about me" link="#project" />
        <NavLink name="contact me" link="#project" />
      </ul>
    </div>
  );
}
