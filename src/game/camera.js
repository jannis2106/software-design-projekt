// Kamera bewegt sich nur, wenn das Boot den Rahmen verlässt
// Kamera bewegt sich nur so weit, dass das Boot genau an der Kante der Deadzone steht

export default function updateCamera(boatPos, camPos, deadzone) {
  const edgeRight = window.innerWidth - deadzone;
  const edgeLeft = deadzone;
  const edgeTop = deadzone;
  const edgeBottom = window.innerHeight - deadzone;

  const screenX = boatPos.x - camPos.x;
  const screenY = boatPos.y - camPos.y;

  const newCamPos = { x: camPos.x, y: camPos.y };

  // check x
  if (screenX > edgeRight) newCamPos.x = boatPos.x - edgeRight;
  else if (screenX < edgeLeft) newCamPos.x = boatPos.x - edgeLeft;

  // check y
  if (screenY > edgeBottom) newCamPos.y = boatPos.y - edgeBottom;
  else if (screenY < edgeTop) newCamPos.y = boatPos.y - edgeTop;

  return newCamPos;
}
