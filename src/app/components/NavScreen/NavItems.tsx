import Link from "next/link";

export default function NavLink({name,link}:{name:string,link:string}) {
  return <Link href={link}><li className="rotate-[-90deg] my-10">{name}</li></Link>;
}
