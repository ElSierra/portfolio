import NavLink from "@/app/section/Main/NavItems";


export default function NavColumn() {
  return (
    <div className=" z-50 w-[5vw] mp:w-[8vw] fixed overflow-y-auto justify-center  h-screen smp:pt-20 flex items-center ">
      <ul className="flex h-full flex-col w-full items-center justify-center gap-20">
        <NavLink name="home" link="#home" />
        <NavLink name="projects" link="#projects" />
        <NavLink name="about" link="#about" />
        <NavLink name="resume" link="#resume" />
        <NavLink name="contact" link="#contact" />
     
      </ul>
    </div>
  );
}
