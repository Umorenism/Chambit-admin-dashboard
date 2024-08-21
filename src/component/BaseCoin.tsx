import React from "react";
import { FaBtc } from "react-icons/fa";

const BaseCoin = () => {
  return (
    <>
      <div className="flex justify-between items-center mt-4">
        <p className="text-sm w-full p-2 border-r-2 flex items-center">
          <p className="h-5 w-5 bg-orange-600 rounded-full flex justify-center items-center text-white gap-1">
            <FaBtc />
          </p>
          Bitcoin
        </p>
        <p className="text-sm p-2 w-full border-r-2 ">BTC</p>
        <p className="text-sm text-start p-2 border-r-2 w-full">$523,43523</p>
        <p className="text-sm p-2 w-full border-r-2 ">2024-07-15 10:25:14</p>
        <p className="text-sm flex text-start p-2 border-r-2 w-full ">UPDATE</p>
        <p className="text-sm w-full text-start p-2 border-r-2 ">
          <button className="border border-orange-500 px-3 rounded-md">
            Edit
          </button>
        </p>
      </div>
    </>
  );
};

export default BaseCoin;
