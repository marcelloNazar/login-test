import React, { FC } from "react";
import { FaArrowRight } from "react-icons/fa";
import Spinner from "./Spinner";

interface SubmitButtonProps {
  loading: boolean;
}

const SubmitButton: FC<SubmitButtonProps> = ({ loading }) => {
  return (
    <div className="absolute right-0 sm:ml-80 mb-3 bg-gray-950 rounded-full p-2">
      <button
        type="submit"
        className="flex group items-center justify-center w-20 h-20 bg-orange-600 hover:shadow-[0_0_7px_orange] hover:opacity-90 focus:ring-orange-500 focus:ring-offset-orange-200 text-white transition ease-in duration-300 text-center text-base font-semibold focus:outline-none focus:ring-1 focus:ring-offset-1 rounded-full"
      >
        {loading ? (
          <Spinner />
        ) : (
          <FaArrowRight className="group-hover:scale-105 group-hover:translate-x-1 transition-all text-lg duration-300" />
        )}
      </button>
    </div>
  );
};

export default SubmitButton;
