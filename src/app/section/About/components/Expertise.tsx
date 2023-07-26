import { Code, EmojiHappy } from "iconsax-react";

export default function Expertise({Icon, header, subText}:{Icon: any, header:string,subText:string}) {
  return (
    <div className="flex h-8 mp:w-[100%] mp:mb-4 items-center rounded-lg justify-between gap-4 border-[1px] p-8 mp:p-6">
      <div>
        <Icon size={30} />
      </div>
      <div className="w-[1px] h-8 bg-[#828282]" />
      <div className="flex flex-col  w-full">
        <h1 className="font-extrabold">{header}</h1>
       
      </div>
    </div>
  );
}
