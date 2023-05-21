import React from "react";
import { useNavigate } from "react-router-dom";

const CloseBtn = ({ link }) => {
  const navigate = useNavigate();

  return (
    <div
      onClick={() => navigate(link)}
      className="mr-6 absolute right-5 rounded-full w-14 h-14 text-center flex justify-center items-center cursor-pointer text-2xl text-black border-black border-2"
    >
      X
    </div>
  );
};

export default CloseBtn;
