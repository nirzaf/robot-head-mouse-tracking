import React, { useRef, useEffect } from 'react';
import { useMousePosition } from '../../hooks/useMousePosition';
import { calculateEyePosition } from '../../utils/eyeCalculations';
import './RobotHead.css';

export const RobotHead: React.FC = () => {
  const mousePosition = useMousePosition();
  const leftEyePosition = calculateEyePosition(mousePosition, { x: 35, y: 40 });
  const rightEyePosition = calculateEyePosition(mousePosition, { x: 65, y: 40 });

  return (
    <div className="robot-container">
      <div className="robot-head">
        <div className="eye-socket left">
          <div 
            className="eye"
            style={{
              transform: `translate(calc(-50% + ${leftEyePosition.x}px), calc(-50% + ${leftEyePosition.y}px))`
            }}
          >
            <div className="pupil">
              <div className="glow"></div>
            </div>
          </div>
        </div>
        <div className="eye-socket right">
          <div 
            className="eye"
            style={{
              transform: `translate(calc(-50% + ${rightEyePosition.x}px), calc(-50% + ${rightEyePosition.y}px))`
            }}
          >
            <div className="pupil">
              <div className="glow"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};