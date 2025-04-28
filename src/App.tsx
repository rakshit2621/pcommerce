import { ContextProvider } from "./components/Contexts/ContextProvider";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import GoogleauthCallback from "./components/Routes/GoogleauthCallback";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <div className="w-[99vw] h-[100vh]">
              <ContextProvider>
                <Layout>
                  <Home />
                </Layout>
              </ContextProvider>
            </div>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
