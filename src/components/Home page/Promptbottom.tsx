import { useState, useRef, useContext } from "react";
import { FaArrowUp } from "react-icons/fa";
import { MyContext } from "../Contexts/ContextProvider";
import LoginPopup from "../SmallComponents/LoginPopup";

const MAX_CHARS = 200;

const PromptInput = () => {
  const [inputValue, setInputValue] = useState("");
  const [clicked, setClicked] = useState(false);
  const textAreaRef = useRef<HTMLTextAreaElement>(null);
  const [showlogin, setShowlogin] = useState(false);
  const { authenticated } = useContext(MyContext) as any;

  const handleInput = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const value = e.target.value.slice(0, MAX_CHARS);
    setInputValue(value);

    if (textAreaRef.current) {
      textAreaRef.current.style.height = "36px";
      textAreaRef.current.style.height = `${Math.min(
        textAreaRef.current.scrollHeight,
        window.innerHeight * 0.25
      )}px`;
    }
  };

  const handleClick = () => {
    if (!authenticated) {
      setShowlogin(true);
      return;
    }

    setClicked(true);
    setTimeout(() => {
      setInputValue("");
      setClicked(false);
      if (textAreaRef.current) {
        textAreaRef.current.style.height = "36px";
      }
    }, 100);
  };

  const charsUsed = inputValue.length;
  const showCounter = charsUsed >= 150;
  const radius = 14;
  const circumference = 2 * Math.PI * radius;
  const progress = Math.min(charsUsed / MAX_CHARS, 1);
  const offset = circumference * (1 - progress);

  return (
    <div>
      {showlogin && <LoginPopup onClose={() => setShowlogin(false)} />}
      <div className="fixed bottom-6 left-1/2 transform -translate-x-1/2 w-[90%] max-w-2xl z-50">
        <div className="relative flex bg-gray-800/80 backdrop-blur-lg border border-white/20 text-white px-4 py-2 rounded-xl shadow-lg transition-all duration-300">
          {/* Textarea */}
          <textarea
            ref={textAreaRef}
            placeholder="Describe your prompt..."
            value={inputValue}
            onChange={handleInput}
            className="w-full bg-transparent text-lg focus:outline-none placeholder:text-white/60 px-2 resize-none overflow-hidden rounded-md pr-14"
            style={{
              height: "36px",
              minHeight: "36px",
              maxHeight: "25vh",
            }}
          />

          {/* Submit Button & Counter */}
          <div className="absolute right-2 bottom-2 flex flex-col items-center gap-1">
            {/* Counter ABOVE the button */}
            {showCounter && (
              <div className="w-8 h-8 relative mb-1">
                <svg width="32" height="32" className="absolute top-0 left-0">
                  <circle
                    cx="16"
                    cy="16"
                    r={radius}
                    fill="none"
                    stroke="#4B5563"
                    strokeWidth="2"
                  />
                  <circle
                    cx="16"
                    cy="16"
                    r={radius}
                    fill="none"
                    stroke={charsUsed > 190 ? "#F87171" : "#10B981"}
                    strokeWidth="2"
                    strokeDasharray={circumference}
                    strokeDashoffset={offset}
                    strokeLinecap="round"
                    transform="rotate(-90 16 16)"
                  />
                </svg>
                <span className="absolute inset-0 flex items-center justify-center text-xs text-white font-medium">
                  {charsUsed}
                </span>
              </div>
            )}

            {/* Button always fixed at bottom-right */}
            <button
              className={`w-10 h-10 rounded-2xl flex items-center justify-center transition-all duration-300 ${
                inputValue
                  ? "opacity-100 bg-green-600 cursor-pointer outline-slate-800"
                  : "opacity-50 bg-gray-500 cursor-not-allowed"
              }`}
              disabled={!inputValue || clicked}
              onClick={handleClick}
            >
              <FaArrowUp className="w-4 h-4 text-white" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PromptInput;
