import { useContext, useCallback } from "react";
import { MyContext } from "../Contexts/ContextProvider";
import axios from "axios";

function useAuthMiddleware() {
  const { setAuthenticated, setUserInfo } = useContext(MyContext) as any;

  const setAuth = useCallback(
    async (approach: { message: string; token: string | null }) => {
      const res = {
        status: true,
        message: approach.message,
        token: approach.token,
      };
      if (res.message.toLowerCase() == "success" && res.token) {
        localStorage.setItem("pcom-auth-token", res.token);
        setAuthenticated(true);
        return true;
      }

      return false;
    },
    [setAuthenticated]
  );

  const getAuth = useCallback(() => {
    const token = localStorage.getItem("pcom-auth-token");
    if (token) {
      setAuthenticated(true);
      return true;
    } else {
      setAuthenticated(false);
      return false;
    }
  }, [setAuthenticated]);

  const logout = async () => {
    await axios.post(
      "http://localhost:8080/auth/logout",
      {},
      {
        withCredentials: true,
      }
    );

    setAuthenticated(false);
    setUserInfo([]);
    return true;
  };

  return { setAuth, getAuth, logout };
}

export default useAuthMiddleware;
