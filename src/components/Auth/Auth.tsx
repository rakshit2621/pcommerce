import { useEffect, useRef } from "react";
import { Github, Twitter } from "lucide-react";

interface AuthProps {
  profileopen: boolean;
  setProfileopen: React.Dispatch<React.SetStateAction<boolean>>;
}

function Auth({ profileopen, setProfileopen }: AuthProps) {
  const boxRef = useRef<HTMLDivElement>(null);

  // Close on outside click
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (boxRef.current && !boxRef.current.contains(event.target as Node)) {
        setTimeout(() => {
          setProfileopen(false);
        }, 100);
      }
    }

    if (profileopen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [profileopen, setProfileopen]);

  useEffect(() => {
    console.log(profileopen);
  }, [profileopen]);

  if (!profileopen) return <></>;

  return (
    <div
      ref={boxRef}
      className="absolute mt-2 right-0 z-50 bg-white border shadow-lg rounded-lg p-4 w-64"
    >
      <div className="space-y-3">
        <button
          className="w-full cursor-pointer flex items-center justify-center gap-2 bg-white text-gray-700 border border-gray-300 py-2.5 px-4 rounded-lg hover:bg-gray-50 transition-all shadow-sm"
          onClick={() => console.log("Google login")}
        >
          {/* Google Icon with proper colors */}
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
          className="w-full cursor-pointer flex items-center justify-center gap-2 bg-black text-white py-2 px-4 rounded hover:bg-gray-900 transition-colors"
          onClick={() => console.log("GitHub login")}
        >
          <Github className="w-5 h-5" />
          Sign in with GitHub
        </button>

        <button
          className="w-full cursor-pointer flex items-center justify-center gap-2 bg-gray-800 text-white py-2 px-4 rounded hover:bg-gray-900 transition-colors"
          onClick={() => console.log("Twitter login")}
        >
          {/* X (Twitter) Icon */}
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
      </div>
    </div>
  );
}

export default Auth;
