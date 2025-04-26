import { useContext, useCallback } from "react";
import { MyContext } from "../Contexts/ContextProvider";

function useAuthMiddleware() {
  const { setAuthenticated } = useContext(MyContext) as any;

  const setAuth = useCallback(
    async (approach: string) => {
      // Placeholder for future API call
      // const res = await fetch(...);
      // const data = await res.json();

      const res = { status: true, message: "success", token: "dummytoken" };

      if (res.message === "success") {
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
