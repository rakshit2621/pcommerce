import React, { useEffect } from "react";
import { useParams } from "react-router-dom";

function GoogleauthCallback() {
  const id = useParams<{ id: string }>();
  useEffect(() => {
    console.log(id);
  }, []);
  return <div></div>;
}

export default GoogleauthCallback;
