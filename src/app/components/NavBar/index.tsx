import Image from "next/image";
import pic from '@/app/assets/pc.jpg'
export default function NavBar() {
  return (
    <div className="w-full flex justify-between items-center px-24 py-3 mt-0 mp:px-6 ">
      <h1 className="text-3xl font-extrabold dark:text-white">IOI.</h1>
      <div><Image height={80} className="rounded-full" width={80} src={pic} alt="Isaac Ojo"/></div>
    </div>
  );
}
