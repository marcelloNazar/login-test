import React from "react";
import { FaFacebookF } from "react-icons/fa";

const FacebookButton = () => {
  return (
    <div className="flex bg-blue-800 hover:bg-blue-900  cursor-pointer sm:flex-col sm:pt-8 items-center justify-center w-full sm:w-3/4 sm:h-full p-1 gap-2">
      <FaFacebookF className="sm:w-32 sm:h-32" />
      Connect with Facebook
      <div className="absolute w-10 h-10 rounded-full bg-gray-950 left-20 mt-10 sm:ml-[178px] sm:mb-[235px]">
        <p className="flex w-full h-full text-xs items-center justify-center">
          or
        </p>
      </div>
    </div>
  );
};

export default FacebookButton;
