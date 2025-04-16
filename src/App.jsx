import { Routes, Route } from "react-router-dom";
import "./App.css";
import Main from "./components/main/Main.jsx";
import Main1 from "./components/main1/Main1.jsx";
import Page1 from "./components/page1/Page1.jsx";
import Page2 from "./components/page2/Page2.jsx";
import Page3 from "./components/page3/Page3.jsx";
import Page4 from "./components/page4/Page4.jsx";
import Yaratilyapti from "./components/yaratilyapti/Yaratilyapti.jsx";

function App() {
  return (
    <>
      <Main />
      <Routes>
        <Route path="/" element={<Main1 />} />
        <Route path="/Page1" element={<Page1 />} />
        <Route path="/Page2" element={<Page2 />} />
        <Route path="/Page3" element={<Page3 />} />
        <Route path="/Page4" element={<Page4 />} />
        <Route path="/Yaratilyapti" element={<Yaratilyapti />} />
      </Routes>
    </>
  );
}

export default App;
