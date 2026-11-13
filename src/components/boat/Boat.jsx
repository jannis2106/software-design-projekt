import boatUrl from "../../assets/boat.png";
import "./Boat.css";

export default function Boat({ x, y }) {
  return (
    <div
      className="boat"
      style={{
        backgroundImage: `url(${boatUrl})`,
        transform: `translate(${x}px, ${y}px) translate(-50%, -50%)`,
      }}
    ></div>
  );
}
