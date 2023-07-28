
import Expertise from './Expertise'
import { Code1, Code, JavaScript, Js, Mobile, MobileProgramming, Global } from 'iconsax-react'

export default function ExpertiseList({className}:{className:string}) {
  return (
    <div className={`flex pc:h-28  mp:gap-0 w-full pc:overflow-x-auto no-scrollbar gap-6 justify-between mp:flex-wrap ${className}`}>
            <Expertise
          Icon={JavaScript}
          header={"Typescript"}
          subText={"Build performant web apps"}
        />{" "}
        <Expertise
          Icon={JavaScript}
          header={"React.js"}
          subText={"Build performant web apps"}
        />{" "}
       
        <Expertise
          Icon={Js}
          header={"Node.js"}
          subText={"Build performant web apps"}
        />{" "}
        <Expertise
          Icon={MobileProgramming}
          header={"React Native"}
          subText={"Build performant web apps"}
        />
          <Expertise
          Icon={Global}
          header={"Next.js"}
          subText={"Build performant web apps"}
        />
      </div>
  )
}
