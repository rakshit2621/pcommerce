import { ContextProvider } from "./components/Contexts/ContextProvider";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import MainComponent from "./components/MainComponent";
function App() {
  return (
    <ContextProvider>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <div className="w-[99vw] h-[100vh]">
                <MainComponent />
              </div>
            }
          />
        </Routes>
      </BrowserRouter>
    </ContextProvider>
  );
}

export default App;
