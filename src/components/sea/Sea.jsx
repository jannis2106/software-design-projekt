import waterUrl from "../../assets/water.png"
import "./Sea.css"

export const TILE = 48 // 16px * 3

// mod, aber bleibt positiv
const mod = (n, m) => ((n % m) + m) % m;

export function Sea({ camX, camY }) {
  const ox = -Math.round(mod(camX, TILE));
  const oy = -Math.round(mod(camY, TILE));

  return (
    <div
      className="sea"
      style={{
        backgroundImage: `url(${waterUrl})`,
        transform: `translate3d(${ox}px, ${oy}px, 0)`,
      }}
    />
  );
}