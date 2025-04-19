import Layout from "./components/main/Layout";
import Home from "./components/Home page/Home";

function App() {
  return (
    <div className="w-[100vw] h-[100vh]">
      <Layout>
        <Home />
      </Layout>
    </div>
  );
}

export default App;
