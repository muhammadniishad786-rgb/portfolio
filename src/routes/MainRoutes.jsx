import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "../components/Navbar";
import Home from "../pages/Home";
import WhatsAppButton from "../components/WhatsAppButton";
import New from "../pages/New";
import CustomCursor from "../pages/CustomCursor";
import CyberCursor from "../components/CyberCursor";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <CustomCursor />
      <CyberCursor />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>

      <WhatsAppButton />
    </BrowserRouter>
  );
}

export default App;