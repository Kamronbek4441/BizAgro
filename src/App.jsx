import { Routes, Route } from "react-router-dom";
import "./App.css";
import Main from "./components/main/Main.jsx";
import Main1 from "./components/main1/Main1.jsx";
import About from "./components/page1/About.jsx";
import MahsulotKatalogi from "./components/page2/MahsulotKatalogi.jsx";
import Kontaktlar from "./components/page3/Page3.jsx";

function App() {
  return (
    <>
      <Main />
      <Routes>
        <Route path="/" element={<Main1 />} />
        <Route path="/About" element={<About />} />
        <Route path="/MahsulotKatalogi" element={<MahsulotKatalogi />} />
        <Route path="/Kontaktlar" element={<Kontaktlar />} />
      </Routes>
    </>
  );
}

export default App;
