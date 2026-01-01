import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar";
import Home from "./pages/Home";
import Journey from "./pages/Journey";
import BlogPost from "./pages/BlogPost";
import AboutOdos from "./pages/AboutOdos";
import Gallery from "./pages/Gallery";

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-white text-slate-900">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/journey" element={<Journey />} />
          <Route path="/journey/:id" element={<BlogPost />} />
          <Route path="/about-odos" element={<AboutOdos />} />
          <Route path="/gallery" element={<Gallery />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
