import "@/index.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <>
      <BrowserRouter basename="/vito-portofolio">
        <Routes>
          <Route index element={<Home />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
