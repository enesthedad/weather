import React from "react";
import Search from "./search/Search";
import locationIcon from "../../img/location.svg";
const Navbar = ({ handleSearchChange, handleClick }) => {
  return (
    <div className="relative flex flex-col items-center justify-center w-full gap-2 p-2 bg-white shadow-lg lg:p-6 md:flex-row">
      <div className="flex items-center gap-2">
        <div className="flex">
          <Search onSearchChange={handleSearchChange} />
        </div>
        <div className="div">
          <button
            onClick={() => handleClick()}
            className="p-1 rounded-lg bg-stone-200"
          >
            <img src={locationIcon} className="w-6 h-6 lg:w-8 lg:h-8" alt="" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
