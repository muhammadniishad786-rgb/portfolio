import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "../components/Navbar";
import Home from "../pages/Home";
import WhatsAppButton from "../components/WhatsAppButton";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>

      <WhatsAppButton />
    </BrowserRouter>
  );
}

export default App;