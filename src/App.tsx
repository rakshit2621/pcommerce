import { ContextProvider } from "./components/Contexts/ContextProvider";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainComponent from "./components/MainComponent";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <div className="w-[99vw] h-[100vh]">
              <ContextProvider>
                <MainComponent />
              </ContextProvider>
            </div>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
