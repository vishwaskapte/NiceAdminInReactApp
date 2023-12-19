import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layouts from "./components/ui/Layouts";
import Dashboard from "./pages/Dashboard";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layouts />}>
            <Route path="index" element = {<Dashboard />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
