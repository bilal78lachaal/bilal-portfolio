import { Route, Routes } from "react-router-dom";
import "./App.css";
import layoute from "./layoute";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/contact";
import Projects from "./components/Projects";

export default function App() {
  return (
    <div>
      <Routes>
        <Route path="/" Component={layoute}>
          <Route index Component={Home} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/Projects" element={<Projects />} />
        </Route>
      </Routes>
      <div>
  
      </div>
    </div>
  );
}
