import React, { useContext, useEffect } from "react";
import Layout from "./main/Layout";
import Home from "./Home page/Home";
import { MyContext } from "./Contexts/ContextProvider";

function MainComponent() {
  const { setUserInfo, setAuthenticated } = useContext(MyContext) as any;
  useEffect(() => {
    if (document.cookie.length != 0) {
      const cookies = document.cookie.split(";");
      let userArr: any = [];
      for (let cookie of cookies) {
        let index = cookie.indexOf("=");
        let key = cookie.slice(0, index).trim();
        let value = decodeURIComponent(cookie.slice(index + 1).trim());
        userArr[key] = value;
      }
      setUserInfo(userArr);
      setAuthenticated(true);
    }
  }, []);
  //   if (userInfo.length == 0) return <></>;
  return (
    <Layout>
      <Home />
    </Layout>
  );
}

export default MainComponent;
