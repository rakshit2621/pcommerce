import React, { useEffect } from "react";
import { useLocation, useNavigate, useNavigation } from "react-router-dom";
import useAuthMiddleware from "./useAuthMiddleware";

function AuthRedirect() {
  const location = useLocation();
  const navigator = useNavigate();
  const { setAuth } = useAuthMiddleware();
  useEffect(() => {
    const search = new URLSearchParams(location.search);
    if (search.get("error") == null) {
      if (search.get("authToken")) {
        setLocalStorage(search);
        navigator("/", { replace: true });
      }
    } else {
      // show popup for unsuccessfull login
    }
  }, []);
  async function setLocalStorage(search: URLSearchParams) {
    await setAuth({ message: "Success", token: search.get("authToken") });
  }
  return <div>AuthRedirect</div>;
}

export default AuthRedirect;
