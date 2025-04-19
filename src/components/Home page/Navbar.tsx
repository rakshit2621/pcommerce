import { Button } from "@/components/ui/button";
import { useState } from "react";
import { FaUserCircle } from "react-icons/fa";
import { GoHeart } from "react-icons/go";
import { HiMenuAlt3, HiX } from "react-icons/hi";
import Auth from "../Auth/Auth";

const Navbar = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [profileopen, setProfileopen] = useState(false);

  return (
    <>
      {/* Navbar */}
      <nav className="fixed top-0 left-1/2 transform -translate-x-1/2 w-full h-18 bg-black/40 backdrop-blur-md rounded-b-md z-50 shadow-md border border-white/10 flex items-center justify-between px-6">
        {/* Left Side */}
        <div className="text-white text-lg font-semibold flex items-center gap-8">
          {/* Logo */}
          <div className="flex items-center  text-red-600 cursor-pointer">
            <img src="/logo.png" alt="Logo" className="h-10" />
            <span className="text-2xl text-blue-400 font-nosifer">
              commerce
            </span>
          </div>

          {/* Nav Links (hide on small screens) */}
          <div className="hidden md:flex gap-6 text-blue-100">
            <div className="cursor-pointer hover:opacity-80">
              Business Services
            </div>
            <div className="cursor-pointer hover:opacity-80">Knowledge Hub</div>
            <div className="cursor-pointer hover:opacity-80">About</div>
          </div>
        </div>

        {/* Right Side */}
        <div className="flex items-center gap-6 text-white">
          <div className="text-red-600 cursor-pointer hover:opacity-90">
            <GoHeart className="text-3xl" />
          </div>
          {/* Profile button */}
          <div className="relative inline-block">
      <div
        className="text-blue-600 cursor-pointer hover:opacity-80"
        onClick={() => setProfileopen((prev) => !prev)}
      >
        <FaUserCircle className="text-3xl" />
      </div>

      <Auth profileopen={profileopen} setProfileopen={setProfileopen} />
    </div>

          {/* Hamburger Menu - shown only on small screens */}
          <div
            className="md:hidden cursor-pointer"
            onClick={() => setSidebarOpen(true)}
          >
            <HiMenuAlt3 className="text-3xl" />
          </div>
        </div>
      </nav>

      {/* Sidebar Overlay */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-black/40 z-40"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* Sidebar */}
      <div
        className={`fixed top-0 right-0 h-full w-64 bg-black/60 backdrop-blur-lg text-white z-50 shadow-2xl rounded-l-xl transition-transform duration-300 ${
          sidebarOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex justify-end p-4">
          {/* <span className="text-xl font-bold">Menu</span> */}
          <HiX
            className="text-2xl cursor-pointer text-gray-300"
            onClick={() => setSidebarOpen(false)}
          />
        </div>
        <div className="flex flex-col gap-4 p-4 text-gray-200">
          <div
            className="cursor-pointer hover:text-blue-500"
            onClick={() => setSidebarOpen(false)}
          >
            Business Services
          </div>
          <div
            className="cursor-pointer hover:text-blue-500"
            onClick={() => setSidebarOpen(false)}
          >
            Knowledge Hub
          </div>
          <div
            className="cursor-pointer hover:text-blue-500"
            onClick={() => setSidebarOpen(false)}
          >
            About
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
