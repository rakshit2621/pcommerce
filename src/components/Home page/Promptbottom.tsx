import { useState, useRef, useContext } from "react";
import { FaArrowUp } from "react-icons/fa";
import { MyContext } from "../Contexts/ContextProvider";
import LoginPopup from "../SmallComponents/LoginPopup";

const PromptInput = () => {
  const [inputValue, setInputValue] = useState("");
  const [clicked, setClicked] = useState(false);
  const textAreaRef = useRef<HTMLTextAreaElement>(null);
  const [showlogin, setShowlogin] = useState(false); // State to manage authentication status
  const { authenticated } = useContext(MyContext) as any; //use the context to set the favopen state

  // Handle auto-expand
  const handleInput = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setInputValue(e.target.value);

    if (textAreaRef.current) {
      textAreaRef.current.style.height = "36px"; // Reset to initial height
      textAreaRef.current.style.height = `${Math.min(
        textAreaRef.current.scrollHeight,
        window.innerHeight * 0.25
      )}px`; // Expand up to 25% of screen height
    }
  };

  const handleClick = () => {
    if (authenticated == false) {
      setShowlogin(true);
      return;
    }

    setClicked(true);
    setTimeout(() => {
      setInputValue("");
      setClicked(false);
      if (textAreaRef.current) {
        textAreaRef.current.style.height = "36px"; // Reset height after clearing
      }
    }, 100);
  };

  return (
    <div>
      {showlogin && <LoginPopup onClose={() => setShowlogin(false)} />}
      <div className="fixed bottom-6 left-1/2 transform -translate-x-1/2 w-[90%] max-w-2xl z-50">
        <div className="relative flex bg-white/10 backdrop-blur-lg border border-white/20 text-white px-4 py-2 rounded-xl shadow-lg transition-all duration-300">
          {/* Expanding TextArea */}
          <textarea
            ref={textAreaRef}
            placeholder="Describe your prompt..."
            value={inputValue}
            onChange={handleInput}
            className="w-full bg-transparent text-lg focus:outline-none placeholder:text-white/60 px-2 resize-none overflow-hidden rounded-md pr-14" // Add right padding to prevent overlap
            style={{
              height: "36px",
              minHeight: "36px",
              maxHeight: "25vh",
            }}
          />

          {/* Fixed Send Button */}
          <button
            className={`absolute bottom-0.5 right-1 w-12 h-12 rounded-2xl flex items-center justify-center transition-all duration-300 ${
              inputValue
                ? "opacity-100 bg-green-600 cursor-pointer outline-slate-800"
                : "opacity-50 bg-gray-500 cursor-not-allowed"
            }`}
            disabled={!inputValue || clicked}
            onClick={handleClick}
          >
            <FaArrowUp className="w-5 h-5 text-white" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default PromptInput;
