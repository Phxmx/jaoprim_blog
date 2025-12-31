import { useState } from "react";
import "./App.css";
import Navbar from "./components/navbar";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Navbar />
      <h1 className="text-3xl font-bold underline text-blue-600">
        Hello Blog 👋
      </h1>
    </>
  );
}

export default App;
