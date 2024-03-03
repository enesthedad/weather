import React from "react";
import okIcon from "../../img/okavatar.webp";

const Logo = (props) => {
  const type = props.type;

  return type === "footer" ? (
    <div className="flex items-center gap-2 md:gap-2 lg:gap-2">
      <img src={okIcon} className="h-14" alt="ok-avatar" />
      <h1 className="logo text-[16px] md:text-[20px] mt-[-20px] lg:text-[20px] text-white items-center  font-bold justify-center flex">
        <a href="/">
          <div className="relative">
            e<span className="text-[#FE7D91]">.</span>soyturk
            <p className="absolute right-0 bottom-[-16px] text-[14px]">
              엔<span className="text-[#B1DCC9]">에</span>스
            </p>
          </div>
        </a>
      </h1>
    </div>
  ) : (
    <h1 className="logo w-1/3 text-[16px] md:text-[24px] text-white  font-bold justify-center flex">
      <a href="/">
        <div className="relative">
          e<span className="text-[#FE7D91]">.</span>soyturk
          <p className="absolute right-0 bottom-[-16px] text-[14px]">
            엔<span className="text-[#B1DCC9]">에</span>스
          </p>
        </div>
      </a>
    </h1>
  );
};

export default Logo;
