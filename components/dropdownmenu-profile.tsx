import React, { useEffect, useRef, useState } from "react";

interface DropdownMenuProps {
  open: boolean;
  width: string;
  label: string;
  options: string[];
}

const DropdownMenuProfile = ({
  open,
  width,
  label,
  options,
}: DropdownMenuProps) => {
  const [isOpen, setIsOpen] = useState(open);
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className={`w-full max-w-[105px] w-${width}`} ref={menuRef}>
      <img
        onClick={() => setIsOpen(!isOpen)}
        className="cursor-pointer"
        src="/svgs/arrow-down.svg"
        alt=""
      />

      {isOpen && (
        <div className=" bg-white w-[165px] absolute mt-2 rounded-md p-4 shadow-xl">
          {options.map((option, index) => (
            <p
              className="hover:text-[#007C85] font-semibold cursor-pointer"
              key={index}
            >
              <p></p>
              {option}
            </p>
          ))}
        </div>
      )}
    </div>
  );
};

export default DropdownMenuProfile;
