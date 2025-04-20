import Layout from "./components/main/Layout";
import Home from "./components/Home page/Home";
import {useContext} from "react";


function App() {
  return (
    <div className="w-[99vw] h-[100vh]">
      <Layout>
        <Home />
      </Layout>
    </div>
  );
}

export default App;
