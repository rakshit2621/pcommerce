import { useState } from "react";
import FilterContainer from "./FilterContainer";
const FilterButton = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <div className="fixed top-22 left-1/2 -translate-x-1/2 z-40 flex items-center justify-center pointer-events-none">
        <div
          className="absolute rounded-lg blur-md w-20 h-12 "
          style={{
            backgroundColor: "rgba(0, 0, 0, 0.3)",
            pointerEvents: "none",
          }}
        ></div>
        <button
          onClick={() => setIsOpen(true)}
          className="relative pointer-events-auto text-black bg-white/90 hover:bg-gray-300 
                   px-4 py-2 rounded-4xl shadow-lg z-10
                   transition-all duration-300 cursor-pointer font-semibold"
        >
          filter
        </button>
      </div>
      {isOpen && <FilterContainer onClose={() => setIsOpen(false)} />}
    </>
  );
};

export default FilterButton;
