import React, { useState } from 'react';

const ToggleButton = () => {
  // Initialize state with "false" (OFF state)
  const [isOn, setIsOn] = useState(false);

  // Toggle function to switch between ON and OFF
  const toggleButton = () => {
    setIsOn((prevIsOn) => !prevIsOn);
  };

  return (
    <div>
      <button onClick={toggleButton}>
        {isOn ? 'ON' : 'OFF'}
      </button>
    </div>
  );
};

export default ToggleButton;
