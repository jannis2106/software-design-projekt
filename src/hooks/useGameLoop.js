import { useEffect, useEffectEvent } from "react";

export default function useGameLoop(onTick) {
  const tick = useEffectEvent(onTick); // ruft immer die aktuelle Funktion auf

  useEffect(() => {
    let id;
    let last = performance.now();

    const loop = (now) => {
      tick((now - last) / 1000);
      last = now;
      id = requestAnimationFrame(loop);
    };

    id = requestAnimationFrame(loop);

    return () => cancelAnimationFrame(id);
  }, []);
}
