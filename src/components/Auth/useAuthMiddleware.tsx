import { useContext, useCallback } from "react";
import { MyContext } from "../Contexts/ContextProvider";

function useAuthMiddleware() {
  const { setAuthenticated } = useContext(MyContext) as any;

  const setAuth = useCallback(
    async (approach: { message: string; token: string | null }) => {
      const res = {
        status: true,
        message: approach.message,
        token: approach.token,
      };
      console.log(res);
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

  const logout = useCallback(async () => {
    localStorage.removeItem("pcom-auth-token");
    setAuthenticated(false);
  }, [setAuthenticated]);

  return { setAuth, getAuth, logout };
}

export default useAuthMiddleware;
