import pic from "@/app/assets/me.svg";
import logo from "@/app/assets/logo.svg";
import { Poppins } from "next/font/google";
import Image from "next/image";
import Link from "next/link";

const vt23 = Poppins({ weight: "700", subsets: ["latin"] });
export default function NavBar() {
  return (
    <div className="w-full flex justify-between items-center   mt-0 ">
      <div className=" p-1 rounded-md ">
        <div
          className="relative h-10 w-10 transition-all duration-300 
        
        
        hover:scale-110"
        >
          <Image
            
            style={{ objectFit: "cover", }}
            fill
            src={logo}
            alt="Isaac Ojo"
          />
        </div>
      </div>
      <Link href={"#about"}>
        <div
          className="relative h-14 w-14 transition-all duration-300 
        
        
        hover:scale-110"
        >
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
