import { useState } from "react";
import "./App.css";
import Sea from "./components/sea/Sea";
import useGameLoop from "./hooks/useGameLoop";
import useKeyboard from "./hooks/useKeyboard";
import Boat from "./components/boat/Boat";
import updateCamera from "./game/camera";
import getDirection from "./game/input";

const DEADZONE = 200;
const SPEED = 200; // px pro Sekunde

function App() {
  // linke obere Ecke der sichtbaren Welt
  const [camPos, setCamPos] = useState({ x: 0, y: 0 });
  // Mitte des Boots
  const [boatPos, setBoatPos] = useState({ x: 350, y: 200 });

  const boatScreenPos = { x: boatPos.x - camPos.x, y: boatPos.y - camPos.y };

  const keys = useKeyboard();

  useGameLoop((dt) => {
    const direction = getDirection(keys.current);
    const newBoatPos = { x: boatPos.x + direction.x * SPEED * dt, y: boatPos.y + direction.y * SPEED * dt };

    // nur update, wenn Boot sich bewegt hat
    if (boatPos.x !== newBoatPos.x || boatPos.y !== newBoatPos.y) {
      setBoatPos(newBoatPos);
    }

    const newCamPos = updateCamera(newBoatPos, camPos, DEADZONE);

    // nur update, wenn Camera sich bewegt hat
    if (camPos.x !== newCamPos.x || camPos.y !== newCamPos.y) {
      setCamPos(newCamPos);
    }
  });

  return (
    <div className="main">
      <Boat x={boatScreenPos.x} y={boatScreenPos.y} />
      <Sea camX={camPos.x} camY={camPos.y} />
    </div>
  );
}

export default App;
