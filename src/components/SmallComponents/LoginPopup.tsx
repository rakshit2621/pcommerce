import { useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Lock, Github } from "lucide-react";
import { useContext } from "react";
import useAuthMiddleware from "../Auth/useAuthMiddleware";

const LoginPopup = ({ onClose }: { onClose: () => void }) => {
  const modalRef = useRef<HTMLDivElement>(null);
  // Close on outside click
  const handleClickOutside = (e: MouseEvent) => {
    if (modalRef.current && !modalRef.current.contains(e.target as Node)) {
      onClose();
    }
  };

  useEffect(() => {
    document.body.style.overflow = "hidden";
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.body.style.overflow = "auto";
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleLogin = () => {
    alert("Redirecting to login...");
    onClose();
  };

  return (
    <AnimatePresence>
      <div className="absolute inset-0 z-[1000] bg-black/60 backdrop-blur-sm flex items-center justify-center w-[100vw] h-[100vh]">
        <motion.div
          ref={modalRef}
          initial={{ scale: 0.95, opacity: 0, y: 10 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          exit={{ scale: 0.95, opacity: 0, y: 10 }}
          transition={{
            duration: 0.3,
            ease: [0.23, 1, 0.32, 1],
          }}
          className="relative bg-gradient-to-b from-white to-gray-50 rounded-2xl shadow-[0_20px_60px_-15px_rgba(0,0,0,0.2)] max-w-sm w-full p-8 mx-4 overflow-hidden"
        >
          {/* Decorative elements */}
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-purple-500 via-pink-500 to-orange-500" />
          <div className="absolute -top-20 -right-20 w-40 h-40 rounded-full bg-gradient-to-br from-purple-100 to-purple-50 opacity-70" />
          <div className="absolute -bottom-20 -left-20 w-40 h-40 rounded-full bg-gradient-to-tr from-orange-100 to-orange-50 opacity-70" />

          {/* Close Button */}
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors z-10 cursor-pointer"
            onClick={onClose}
          >
            <X className="w-5 h-5" />
          </motion.button>

          {/* Modal Content */}
          <div className="relative z-10">
            {/* Header Row */}
            <div className="flex items-center justify-center gap-4 mb-6">
              <div className="w-12 h-12 rounded-full bg-purple-100 flex items-center justify-center">
                <Lock className="w-6 h-6 text-purple-600" />
              </div>
              <h2 className="text-xl font-semibold text-gray-800">
                Login Required
              </h2>
            </div>

            <motion.p
              className="text-gray-600 mb-8 text-center text-sm max-w-xs mx-auto"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.2 }}
            >
              You need to be logged in to submit a prompt. Please sign in to
              continue.
            </motion.p>

            {/* Social Buttons */}
            <motion.div
              className="space-y-3"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.2 }}
            >
              <button
                className="w-full flex items-center justify-center gap-2 bg-white text-gray-700 border border-gray-300 py-2.5 px-4 rounded-lg hover:bg-gray-50 transition-all shadow-sm cursor-pointer"
                onClick={async () => {
                  window.location.href = "http://localhost:8080/auth/google";
                }}
              >
                <svg
                  className="w-5 h-5"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                    fill="#4285F4"
                  />
                  <path
                    d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                    fill="#34A853"
                  />
                  <path
                    d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                    fill="#FBBC05"
                  />
                  <path
                    d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                    fill="#EA4335"
                  />
                </svg>
                Sign in with Google
              </button>

              <button
                className="w-full flex items-center justify-center gap-2 bg-black text-white py-2.5 px-4 rounded-lg hover:bg-gray-900 transition-colors cursor-pointer"
                onClick={() => {
                  window.location.href = "http://localhost:8080/auth/github";
                }}
              >
                <Github className="w-5 h-5" />
                Sign in with GitHub
              </button>

              <button
                className="w-full flex items-center justify-center gap-2 bg-gray-800 text-white py-2.5 px-4 rounded-lg hover:bg-gray-900 transition-colors cursor-pointer"
                onClick={() => console.log("Twitter login")}
              >
                <svg
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-5 h-5"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M20.9 3H17.7L12.8 9.5 8.3 3H3l6.7 9.6L3 21h3.2l4.8-6.3L15.6 21H21l-7.2-10L20.9 3z" />
                </svg>
                Sign in with X (Twitter)
              </button>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};

export default LoginPopup;
