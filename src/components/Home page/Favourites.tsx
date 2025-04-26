import { useState, useContext } from "react";
import { motion } from "framer-motion";
import { Heart, X } from "lucide-react";
import { MyContext } from "../Contexts/ContextProvider";
import LoginPopup from "../SmallComponents/LoginPopup";

export default function AnimatedHeartButton() {
  const context = useContext(MyContext); // Assuming you have a context to manage state
  const [showlogin, setShowlogin] = useState(false);
  const { authenticated } = useContext(MyContext) as any;

  if (!context) {
    throw new Error("MyContext must be used within a ContextProvider");
  }

  const { favopen, setFavopen } = context; // Destructure the context to get favopen and setFavopen

  const toggleExpand = () => {
    if (authenticated == false) {
      setShowlogin(true);
      return;
    }
    setFavopen(!favopen);
    console.log(favopen);
  };

  return (
    <div>
      {showlogin && <LoginPopup onClose={() => setShowlogin(false)} />}
      <div className="flex items-center justify-center">
        <div className="relative " onClick={toggleExpand}>
          {/* Single container that animates between states */}
          <motion.div
            animate={{
              width: favopen ? 100 : 56,
            }}
            transition={{
              type: "spring",
              stiffness: 500,
              damping: 30,
            }}
            className="flex items-center justify-end border-2 border-red-500 rounded-full py-2 px-3.5 bg-transparent overflow-hidden"
          >
            {/* Cross button with conditional animation */}
            <motion.div
              animate={{
                x: favopen ? 0 : -50,
                opacity: favopen ? 1 : 0,
                scale: favopen ? 1 : 0.8,
              }}
              transition={{
                type: "spring",
                stiffness: 500,
                damping: 30,
                delay: favopen ? 0.1 : 0,
              }}
              className="absolute left-4"
            >
              <button className="p-1 rounded-full bg-white/20 backdrop-blur-sm cursor-pointer">
                <X className="w-5 h-5 text-white" strokeWidth={2.5} />
              </button>
            </motion.div>

            {/* Heart button that stays in place */}
            <motion.div
              whileHover={{ scale: favopen ? 1 : 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="relative z-10"
            >
              <button className="p-0 bg-transparent">
                <Heart
                  className="w-6 h-6 text-red-400 fill-red-600 cursor-pointer pt-1"
                  strokeWidth={2}
                />
              </button>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
