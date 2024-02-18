import React, { useState } from "react";
import { Circle } from "rc-progress";
import "./CircularProgressBar.css";

const CircularProgressBar = () => {
  const [percentage, setPercentage] = useState(10);

  const increasePercentage = () => {
    setPercentage((prevPercentage) => Math.min(prevPercentage + 10, 100));
  };

  const decreasePercentage = () => {
    setPercentage((prevPercentage) => Math.max(prevPercentage - 10, 0));
  };

  return (
    <div className="progress-container">
      <div className="circular-progress-container">
        <Circle
          percent={percentage}
          strokeWidth="8"
          trailWidth="8"
          strokeColor={{
            '0%': '#108ee9',
            '100%': '#87d068',
          }}
          className="circular-progress-bar"
        />
        <div className="circular-progress-label">{percentage}%</div>
      </div>
      <div className="buttons-container">
        <button onClick={decreasePercentage}>Decrease</button>
        <button onClick={increasePercentage}>Increase</button>
      </div>
    </div>
  );
};

export default CircularProgressBar;
