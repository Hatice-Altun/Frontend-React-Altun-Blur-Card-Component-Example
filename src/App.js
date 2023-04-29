import React from "react";
import BlurCard from "./components/BlurCard/BlurCard";
import Image from "./assets/Image.jpeg";
import "./App.css";

function App() {
  return (
      <div className="App" style={{backgroundImage: `url(${Image})`}}>
          <BlurCard title="Altun" description="Blur Card Component!"/>
      </div>
  );
}

export default App;
