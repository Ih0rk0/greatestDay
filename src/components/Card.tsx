import React from "react";

interface Props {
  description: string;
  location: string;
  title: string;
  src: string;
  category: string;
}
export function Card({ description, location, title, src, category }: Props) {
  return (
    <>
      <div className={` w-[250px] min-h-[296px]  relative bg-white mt-[16px] mb-[50px]`}>
        <img className="h-[150px] w-[250px]" src={src} alt="" />
        <div className="box-border flex flex-col flex-start px-[12px] pt-[12px] ">
          <div className="flex font-medium ">
            {/* <div className=' w-[37px] h-[22px] bg-white text-xs border-2 border-black rounded-2xl mr-[12px] text-center '></div> */}
            <div className=" p-[5px] h-[22px] bg-white text-xs border-2 border-black rounded-2xl mr-[132px] flex justify-center items-center mb-[8px]">
              {category}
            </div>
          </div>
          <div className="font-bold ">{title}</div>
          <div className="font-medium">{description}</div>
          <div className="flex justify-between ">
            <div>{location}</div>
            <div className="w-[64px] h-[22px] bg-[#FAEBE3] text-[12px] font-medium flex items-center justify-center">
              7 995 KR
            </div>
          </div>
          <div className="flex cursor-pointer w-[91px] h-[34px] rounded-[4px] text-center bg-black absolute top-[12px] right-[12px] items-center p-[10px] text-[10px]">
            <img
              className="w-[12px] h-[11px] self-center mr-2"
              src="/img/heart.png"
              alt=""
            />
            <div className="text-white font-bold ">LÄGG TILL</div>
          </div>
        </div>
      </div>
    </>
  );
}
