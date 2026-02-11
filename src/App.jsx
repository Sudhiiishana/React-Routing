import Home from "./Components/Home";
import Dashboard from "./Components/Dashboard";
import Login from "./Components/Login";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" elements={<Login />} />
      <Route path="/dashboard" elements={<Dashboard />} />
    </Routes>
  </BrowserRouter>;
}
export default App();
