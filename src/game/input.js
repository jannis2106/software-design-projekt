export default function getDirection(keys) {
  const dx =
    (keys.has("d") || keys.has("arrowright") ? 1 : 0) - (keys.has("a") || keys.has("arrowleft") ? 1 : 0);
  const dy =
    (keys.has("s") || keys.has("arrowdown") ? 1 : 0) - (keys.has("w") || keys.has("arrowup") ? 1 : 0);

  // diagonales Fahren normalisieren
  const len = Math.hypot(dx, dy);

  if (len === 0) return { x: 0, y: 0 };

  const nx = dx / len;
  const ny = dy / len;

  return { x: nx, y: ny };
}
