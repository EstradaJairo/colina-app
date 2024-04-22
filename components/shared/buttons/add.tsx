import React from "react";

const Add = ({ onClick }: { onClick: () => void }) => {
  return (
    <button
      onClick={onClick}
      className="flex items-center justify-center bg-[#1b84ff] text-white font-semibold w-[100px] h-[52px] rounded gap-2"
    >
      <img src="/imgs/add.svg" alt="Custom Icon" className="w-5 h-5 mr-2" />
      Add
    </button>
  );
};

export default Add;
