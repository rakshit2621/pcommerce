import Layout from "./components/main/Layout";
import Home from "./components/Home page/Home";
import { ContextProvider } from "./components/Contexts/ContextProvider";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AuthRedirect from "./components/Auth/AuthRedirect";
function App() {
  return (
    <ContextProvider>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <div className="w-[99vw] h-[100vh]">
                <Layout>
                  <Home />
                </Layout>
              </div>
            }
          />
          <Route path="/auth" element={<AuthRedirect />} />
        </Routes>
      </BrowserRouter>
    </ContextProvider>
  );
}

export default App;
