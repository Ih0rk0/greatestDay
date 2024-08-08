import React from "react";


export function Header() {


  return (
    <>

      <header className="bg-[#FDF8F5] md:h-[90px] h-[59px] mt-5 flex justify-center">
        <div className="container mx-auto p-[10px] flex justify-between items-center">
          <div className="flex items-center">
            <img
              className="mr-2 w-[13px] md:w-[25px] h-[11px] md:h-[23px]"
              src={"/img/logo.png"}
              alt=""
            />
            <span className="text-[11px] md:text-[16px] font-bold flex items-center text-black">
              GREATESTDAY
            </span>
          </div>
          <div className="flex text-[9px]  md:text-[14px] ">
            <button className="bg-black  mr-[15px] h-[23px] md:h-[46px]  flex items-center text-white px-5 py-3 font-bold rounded hover:bg-gray-800 transition duration-300">
              Our wedding
            </button>
            <button className="bg-[#FAEBE3] md:max-w-[146px] flex items-center max-w-[70px] h-[23px] md:h-[46px]  font-bold border-2 border-[#fff4f2] text-black px-4 py-2 rounded hover:bg-[#ffefef] hover:border-[#ffefef] transition duration-300">
              Sign out
            </button>
          </div>
        </div>
      </header>
    </>
  );
}
