import Image from "next/image";
import pic from "@/app/assets/pc.jpg";
import Link from "next/link";
import { Poppins } from "next/font/google";

const vt23 = Poppins({weight:"700", subsets:["latin"]})
export default function NavBar() {
  return (
    <div className="w-full flex justify-between items-center px-24  mt-0 mp:px-6 ">
      <div className="border-2 border-black dark:border-white"><h1 className={`text-3xl font-extrabold ${vt23.className} dark:text-white`}>IOI.</h1></div>
      <Link href={'#about'}>
        <div className="relative h-10 w-20 transition-all duration-300 hover:h-20">
          <Image
            className="rounded-full "
            style={{ objectFit: "cover", borderRadius: "10px" }}
            fill
            src={pic}
            alt="Isaac Ojo"
          />
        </div>
      </Link>
    </div>
  );
}
