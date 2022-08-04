import React from "react";
import Timer from "./components/Timer";
import Footer from "./components/Footer";
import "./App.css";

function App() {
  return (
    <>
      <div className="App">
        <p className="title font-bold mb-32 text-2xl tracking-widest">
          WE'RE LAUNCHING SOON
        </p>
        <Timer />
        <Footer />
      </div>
    </>
  );
}

export default App;
