import { Routes, Route } from "react-router-dom";
import "./App.css";
import Main from "./components/main/Main.jsx";
import Main1 from "./components/main1/Main1.jsx";
import About from "./components/page1/About.jsx";
import MahsulotKatalogi from "./components/page2/MahsulotKatalogi.jsx";
import Page3 from "./components/page3/Page3.jsx";
import Page4 from "./components/page4/Page4.jsx";
import Yaratilyapti from "./components/yaratilyapti/Yaratilyapti.jsx";

function App() {
  return (
    <>
      <Main />
      <Routes>
        <Route path="/" element={<Main1 />} />
        <Route path="/About" element={<About />} />
        <Route path="/MahsulotKatalogi" element={<MahsulotKatalogi />} />
        <Route path="/Page3" element={<Page3 />} />
        <Route path="/Page4" element={<Page4 />} />
        <Route path="/Yaratilyapti" element={<Yaratilyapti />} />
      </Routes>
    </>
  );
}

export default App;
