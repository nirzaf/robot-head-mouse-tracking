interface Position {
  x: number;
  y: number;
}

export const calculateEyePosition = (mousePos: Position, eyeCenter: Position): Position => {
  const maxDistance = 15; // Increased for more noticeable movement
  
  // Get the robot head element's position
  const robotHead = document.querySelector('.robot-head');
  if (!robotHead) return { x: 0, y: 0 };
  
  const rect = robotHead.getBoundingClientRect();
  
  // Calculate the absolute position of the eye center relative to the viewport
  const absoluteEyeX = rect.left + (rect.width * (eyeCenter.x / 100));
  const absoluteEyeY = rect.top + (rect.height * (eyeCenter.y / 100));
  
  // Calculate the difference between mouse position and eye center
  const dx = mousePos.x - absoluteEyeX;
  const dy = mousePos.y - absoluteEyeY;
  
  // Calculate angle and distance
  const angle = Math.atan2(dy, dx);
  
  // Use exponential smoothing for distance calculation
  const distance = Math.min(
    Math.sqrt(dx * dx + dy * dy) * 0.15, // Smoothing factor
    maxDistance
  );
  
  // Apply non-linear transformation for more natural movement
  const normalizedDistance = Math.pow(distance / maxDistance, 1.5) * maxDistance;
  
  return {
    x: Math.cos(angle) * normalizedDistance,
    y: Math.sin(angle) * normalizedDistance
  };
};