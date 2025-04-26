import Layout from "./components/main/Layout";
import Home from "./components/Home page/Home";
import { ContextProvider } from "./components/Contexts/ContextProvider";

function App() {
  return (
    <div className="w-[99vw] h-[100vh]">
      <ContextProvider>
        <Layout>
          <Home />
        </Layout>
      </ContextProvider>
    </div>
  );
}

export default App;
