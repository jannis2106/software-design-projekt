import { useState } from "react";
import "./App.css";
import { Sea } from "./components/sea/Sea";
import useGameLoop from "./hooks/useGameLoop";
import { useKeyboard } from "./hooks/useKeyboard";
import Boat from "./components/boat/Boat";

function App() {
  const [cam, setCam] = useState({ x: 0, y: 0 });

  const keys = useKeyboard();
  const SPEED = 200; // px pro Sekunde

  useGameLoop((dt) => {
    const k = keys.current;

    const dx = (k.has("d") || k.has("arrowright") ? 1 : 0) - (k.has("a") || k.has("arrowleft") ? 1 : 0);
    const dy = (k.has("s") || k.has("arrowdown") ? 1 : 0) - (k.has("w") || k.has("arrowup") ? 1 : 0);

    const len = Math.hypot(dx, dy); // Pythagoras
    if (len > 0) {
      const nx = dx / len;
      const ny = dy / len;

      if (nx || ny) setCam((current) => ({ x: current.x + nx * SPEED * dt, y: current.y + ny * SPEED * dt }));
    }
  });

  return (
    <div style={{ position: "relative", width: "100vw", height: "100vh", overflow: "hidden" }}>
      <Boat />
      <Sea camX={cam.x} camY={cam.y} />
    </div>
  );
}

export default App;
