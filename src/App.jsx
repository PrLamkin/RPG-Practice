import React from "react";
import Actor from "./components/actor"

export default function App() {
  const data = {
    h:32,
    w:32,
  };
  return (
  <div className="zone-container">
    <Actor sprite={`/sprite/skins/m1.png`} data={data}/>
  </div>
  );
}