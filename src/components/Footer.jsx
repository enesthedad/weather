import React from "react";
import Logo from "./Logo";
import twitterIcon from "../../img/twitter.svg";
import githubIcon from "../../img/github.svg";
import mediumIcon from "../../img/medium.svg";
import personalIcon from "../../img/website.svg";
export const Footer = () => {
  return (
    <div className="w-full bg-stone-800">
      <div className="flex flex-col items-center justify-center w-full gap-4 p-4">
        <Logo type="footer" />
        <div className="flex items-center gap-3 text-white links">
          <a
            href="https://github.com/enesthedad"
            target="_blank"
            rel="noreferrer"
          >
            <img src={githubIcon} className="object-cover h-6 lg:h-8" alt="" />
          </a>
          <a
            href="https://twitter.com/enesthedad"
            target="_blank"
            rel="noreferrer"
          >
            <img src={twitterIcon} className="object-cover h-6 lg:h-8" alt="" />
          </a>

          <a
            href="https://enesthedad.netlify.app/"
            target="_blank"
            rel="noreferrer"
          >
            <img
              src={personalIcon}
              className="object-cover h-6 lg:h-8"
              alt=""
            />
          </a>
          <a
            href="https://medium.com/@enesthedad"
            target="_blank"
            rel="noreferrer"
          >
            <img src={mediumIcon} className="object-cover h-6 lg:h-8 " alt="" />
          </a>
        </div>
      </div>
    </div>
  );
};
