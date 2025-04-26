import { useState } from "react";
import useAuthMiddleware from "./useAuthMiddleware";

function Logout() {
  const [isAnimating, setIsAnimating] = useState(false);
  const { logout } = useAuthMiddleware();

  const handleLogout = async () => {
    setIsAnimating(true);

    // Simulate logout process
    try {
      // Call the logout function from your auth middleware
      // await logout();
      console.log("Logged out");

      // Keep animation for a moment before potentially redirecting
      setTimeout(() => {
        setIsAnimating(false);
      }, 100); // Reduced to 100ms as requested
    } catch (error) {
      setIsAnimating(false);
      console.error("Logout failed", error);
    }
  };

  return (
    <div className="w-full max-w-xs mx-auto">
      <button
        className={`w-full cursor-pointer flex items-center justify-center gap-3 bg-pink-100 text-red-600 border border-pink-200 py-3 px-5 rounded-lg hover:bg-pink-200 transition-all duration-100 shadow-sm relative overflow-hidden ${
          isAnimating ? "transform scale-95" : ""
        }`}
        onClick={handleLogout}
        disabled={isAnimating}
      >
        {/* Ripple effect container */}
        {isAnimating && (
          <span className="absolute inset-0 flex items-center justify-center">
            <span className="animate-ping absolute h-10 w-10 rounded-full bg-red-100 opacity-75"></span>
          </span>
        )}

        {/* Custom icon without rotation */}
        <span className="flex items-center justify-center">
          <img src="/logout_logo.png" alt="Logo" className="h-6" />
        </span>

        {/* Text with animation */}
        <span
          className={`font-medium transition-all duration-100 ${
            isAnimating ? "opacity-70" : ""
          }`}
        >
          Logout
        </span>
      </button>
    </div>
  );
}

export default Logout;
