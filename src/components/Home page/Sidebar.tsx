
import { FaUserCircle } from "react-icons/fa"; // Importing Icons
import { GoHeart } from "react-icons/go";


const Sidebar = () => {
  return (
    <div className="absolute left-2 top-2 h-[75vh] w-16 bg-amber-500 text-zinc-200 flex flex-col items-center p-4 rounded-2xl shadow-lg">
      {/* Profile Button */}
      <div  className="mb-8 active:border-transparent rounded-full hover:opacity-80 transition-opacity text-blue-600 cursor-pointer">
        <FaUserCircle className="text-4xl" />
      </div>

      {/* Favorites Button */}
      <div className="mb-8 active:border-transparent rounded-full hover:opacity-80 transition-opacity text-red-600 cursor-pointer">
        <GoHeart  className="text-4xl" /> {/* Favorites Icon */}
      </div>
    </div>
  );
};

export default Sidebar;
